'use strict';
/*
 * Wrap
 * - Bundles the ServerlessSDK into your functions
 * - Wraps your function handlers with the ServerlessSDK
 */

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const chalk = require('chalk');

const fs = require('fs-extra');

const path = require('path');

const _ = require('lodash');

const JSZip = require('jszip');

const _require = require('@serverless/platform-sdk'),
      getAccessKeyForTenant = _require.getAccessKeyForTenant;

const _require2 = require('./zipTree'),
      addTree = _require2.addTree,
      writeZip = _require2.writeZip;

const _require3 = require('../package.json'),
      version = _require3.version;

const deprecatedNodes = ['nodejs', 'nodejs4.3', 'nodejs4.3-edge'];

const supportedNodeRuntime = runtime => runtime && runtime.includes('nodejs') && !deprecatedNodes.includes(runtime);

const supportedPythonRuntime = runtime => runtime && runtime.includes('python');

const supportedRuntime = runtime => supportedNodeRuntime(runtime) || supportedPythonRuntime(runtime);

const isDevMode = Boolean(process.env.SLS_DEV_MODE);

const isLocalInvocation = ctx => {
  const commands = ctx.sls.processedInput.commands;
  return commands[0] === 'invoke' && commands[1] === 'local';
};
/*
 * Wrap Node.js Functions
 */


const wrapNodeJs = (fn, ctx, accessKey) => {
  const standardHandlerExec = `
try {
  const userHandler = require('./${fn.entryOrig}.js');
  module.exports.handler = serverlessSDK.handler(userHandler.${fn.handlerOrig}, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}`;
  /**
   * If you're in "dev mode" export a slightly different wrapped handler. Basically, we need to:
   *
   * 1. Establish a connection to the websocket so we can collect logs and metrics
   * 2. import the user handler AFTER the websocket is connected so we get logs/errors on loading
   * 3. Call the user handler
   * 4. Respect the original return values and bubble those up
   *
   * It should be noted that dev mode will ALWAYS return a promise, there is no way around that
   * because dev mode requires the setup of the web socket which is async.  Additionally, if the
   * userHandler has a `require('aws-sdk')` the function will timeout UNLESS we have already
   * required the package from the global context
   **/

  const devModeHandlerExec = `
const studioHandler = (event, context, callback) => {
  console.log('Starting serverless Studio');
  return new Promise((resolve, reject) => {

    // handle callback resolutions since we always return a promise
    let finalized = false;
    const finalize = (error, result, isFromCallback) => {
      if (finalized) { return; }
      finalized = true;
      serverlessSDK
        .publishSync({
          event: "studio.invocationInfo",
          data: {
            functionName: process.env.AWS_LAMBDA_FUNCTION_NAME,
            requestId: context.awsRequestId,
            transactionId: event.requestContext ? event.requestContext.requestId : null,
            response: result,
            error: error
          }
        })
        .catch((err) => {
          console.log('Unable to send response data to Studio', err);
        })
        .finally(() => {
					serverlessSDK.stopDevMode();
					if (isFromCallback) callback(error, result);
          else if (error) reject(error);
          else resolve(result);
        });
    }

    // Patch context methods
    const contextProxy = new Proxy(context, {
      get: (target, prop) => {
        if (prop === 'done') {
          return (err, res) => {
            finalize(err, res, true)
          };
        } else if (prop === 'succeed') {
          return res => {
            finalize(null, res, true);
          };
        } else if (prop === 'fail') {
          return err => {
            finalize(err, null, true);
          };
        }
        return target[prop];
      },
    });

    // Start dev mode
    serverlessSDK
      .startDevMode(event, context)
      .then(() => {
        try {
          serverlessSDK.publish({
            event: "studio.invocationInfo",
            data: {
              functionName: process.env.AWS_LAMBDA_FUNCTION_NAME,
              requestId: context.awsRequestId,
              transactionId: event.requestContext ? event.requestContext.requestId : null,
              event
            }
          });
        } catch (err) {
          console.log('Unable to send invocation data to Studio', err);
        }
				const userHandler = require('./${fn.entryOrig}.js');
				let result;
        try {
					result = serverlessSDK.handler(userHandler.${fn.handlerOrig}, handlerWrapperArgs)(
						event, contextProxy, (error, result) => finalize(error, result, true)
					);
				} catch (error) {
          console.log('Error invoking wrapped function', error);
					finalize(error, null, true);
					return;
        }
				// if a promise was returned, we need to return the resolved promise
				if (result && typeof result.then === 'function') {
					result.then(res => finalize(null, res), finalize);
				}
      }, (error) => {
				console.error('Unable to start Studio mode', error);
				callback(error);
      });
  });
};
module.exports.handler = studioHandler`;
  const newHandlerCode = `
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: '${ctx.sls.service.org}',
  applicationName: '${ctx.sls.service.app}',
  appUid: '${ctx.sls.service.appUid}',
  orgUid: '${ctx.sls.service.orgUid}',
  deploymentUid: '${ctx.deploymentUid}',
  serviceName: '${ctx.sls.service.service}',
  shouldLogMeta: ${!isLocalInvocation(ctx) && _.get(ctx.sls.service.custom, ['enterprise', 'collectLambdaLogs']) !== false},
  shouldCompressLogs: ${!ctx.sls.service.custom || !ctx.sls.service.custom.enterprise || ctx.sls.service.custom.enterprise.compressLogs !== false},
  disableAwsSpans: ${Boolean(ctx.sls.service.custom && ctx.sls.service.custom.enterprise && ctx.sls.service.custom.enterprise.disableAwsSpans)},
  disableHttpSpans: ${Boolean(ctx.sls.service.custom && ctx.sls.service.custom.enterprise && ctx.sls.service.custom.enterprise.disableHttpSpans)},
  stageName: '${ctx.provider.getStage()}',
  serverlessPlatformStage: '${process.env.SERVERLESS_PLATFORM_STAGE || 'prod'}',
  devModeEnabled: ${isDevMode},
  accessKey: ${isDevMode ? `'${accessKey}'` : null},
  pluginVersion: '${version}',
  disableFrameworksInstrumentation: ${Boolean(ctx.sls.service.custom && ctx.sls.service.custom.enterprise && ctx.sls.service.custom.enterprise.disableFrameworksInstrumentation)}
});

const handlerWrapperArgs = { functionName: '${fn.name}', timeout: ${fn.timeout} };
${isDevMode ? devModeHandlerExec : standardHandlerExec}`; // Create new handlers

  fs.writeFileSync(path.join(ctx.sls.config.servicePath, `${fn.entryNew}.js`), newHandlerCode);
};
/*
 * Wrap python Functions
 */


const wrapPython = (fn, ctx) => {
  const newHandlerCode = `import serverless_sdk
sdk = serverless_sdk.SDK(
    org_id='${ctx.sls.service.org}',
    application_name='${ctx.sls.service.app}',
    app_uid='${ctx.sls.service.appUid}',
    org_uid='${ctx.sls.service.orgUid}',
    deployment_uid='${ctx.deploymentUid}',
    service_name='${ctx.sls.service.service}',
    should_log_meta=${!isLocalInvocation(ctx) && _.get(ctx.sls.service.custom, ['enterprise', 'collectLambdaLogs']) !== false ? 'True' : 'False'},
    should_compress_logs=${!ctx.sls.service.custom || !ctx.sls.service.custom.enterprise || ctx.sls.service.custom.enterprise.compressLogs !== false ? 'True' : 'False'},
    disable_aws_spans=${ctx.sls.service.custom && ctx.sls.service.custom.enterprise && ctx.sls.service.custom.enterprise.disableAwsSpans ? 'True' : 'False'},
    disable_http_spans=${ctx.sls.service.custom && ctx.sls.service.custom.enterprise && ctx.sls.service.custom.enterprise.disableHttpSpans ? 'True' : 'False'},
    stage_name='${ctx.provider.getStage()}',
    plugin_version='${version}',
    disable_frameworks_instrumentation=${ctx.sls.service.custom && ctx.sls.service.custom.enterprise && ctx.sls.service.custom.enterprise.disableFrameworksInstrumentation ? 'True' : 'False'}
)
handler_wrapper_kwargs = {'function_name': '${fn.name}', 'timeout': ${fn.timeout}}
try:
    user_handler = serverless_sdk.get_user_handler('${fn.entryOrig}.${fn.handlerOrig}')
    handler = sdk.handler(user_handler, **handler_wrapper_kwargs)
except Exception as error:
    e = error
    def error_handler(event, context):
        raise e
    handler = sdk.handler(error_handler, **handler_wrapper_kwargs)
`; // Create new handlers

  fs.writeFileSync(path.join(ctx.sls.config.servicePath, `${fn.entryNew}.py`), newHandlerCode);
};

const wrap = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (ctx) {
    // Check if we support the provider
    if (ctx.sls.service.provider.name !== 'aws') {
      ctx.sls.cli.log(chalk.keyword('orange')('Warning: The Serverless Dashboard does not currently support this provider.'));
    }
    /*
     * Prepare Functions
     */


    const functions = ctx.sls.service.functions;
    ctx.state.functions = {};
    const unsupportedRuntimes = new Set();

    for (var _i = 0, _Object$keys = Object.keys(functions); _i < _Object$keys.length; _i++) {
      const func = _Object$keys[_i];
      const runtime = functions[func].runtime ? functions[func].runtime : ctx.sls.service.provider.runtime;

      if (!supportedRuntime(runtime)) {
        unsupportedRuntimes.add(runtime);
        continue;
      } // the default is 6s: https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/


      const timeout = functions[func].timeout || ctx.sls.service.provider.timeout || 6; // Process name

      let name;

      if (functions[func].name) {
        name = functions[func].name;
      } else {
        name = `${ctx.sls.service.service}-${ctx.sls.service.provider.stage}-${func}`;
      } // Process handler


      const entry = functions[func].handler.split('.').slice(0, -1).join('.');
      const handler = functions[func].handler.split('.').slice(-1)[0];
      let extension = 'js';

      if (runtime.includes('python')) {
        extension = 'py';
      }

      ctx.state.functions[func] = {
        key: func,
        name,
        runtime,
        timeout,
        extension,
        entryOrig: entry,
        handlerOrig: handler,
        entryNew: `s_${func.replace(/-/g, '_')}`,
        handlerNew: 'handler'
      };
    }

    if (unsupportedRuntimes.size) {
      ctx.sls.cli.log(chalk.keyword('orange')(`Warning the Serverless Dashboard doesn't support the following runtime${unsupportedRuntimes.size === 1 ? '' : 's'}: ${Array.from(unsupportedRuntimes).join(', ')}`));
    }
    /*
     * Wrap Functions
     */


    ctx.state.pathAssets = path.join(ctx.sls.config.servicePath, 'serverless_sdk'); // Clear existing handler dir

    if (fs.pathExistsSync(ctx.state.pathAssets)) {
      fs.removeSync(ctx.state.pathAssets);
    } // Create new handler dir


    fs.ensureDirSync(ctx.state.pathAssets); // Copy SDK

    const vals = Object.keys(ctx.state.functions).map(key => ctx.state.functions[key]);

    if (vals.some(({
      runtime
    }) => supportedNodeRuntime(runtime))) {
      const pathSdk = path.resolve(__dirname, '../sdk-js/dist/index.js');
      const pathSdkDest = path.join(ctx.state.pathAssets, './index.js');
      fs.copySync(pathSdk, pathSdkDest);
    }

    if (vals.some(({
      runtime
    }) => supportedPythonRuntime(runtime))) {
      const pathSdk = path.resolve(__dirname, '../sdk-py/serverless_sdk');
      fs.copySync(pathSdk, ctx.state.pathAssets);
    } // Prepare & Copy Function Handlers


    for (var _i2 = 0, _Object$keys2 = Object.keys(ctx.state.functions); _i2 < _Object$keys2.length; _i2++) {
      const fn = _Object$keys2[_i2];
      const func = ctx.state.functions[fn];

      if (!supportedRuntime(func.runtime)) {
        continue;
      } // Get access key for the platform, but only for dev mode. It's needed
      // to authenticate to the platform WebSocket during runtime


      let accessKey = null;

      if (isDevMode) {
        accessKey = yield getAccessKeyForTenant(ctx.sls.service.org);
      } // Add the Serverless SDK wrapper around the function


      if (supportedNodeRuntime(func.runtime)) {
        wrapNodeJs(func, ctx, accessKey);
      } else if (supportedPythonRuntime(func.runtime)) {
        wrapPython(func, ctx);
      } // Re-assign the handler to point to the wrapper


      ctx.sls.service.functions[fn].handler = `${func.entryNew}.${func.handlerNew}`;

      if (_.get(ctx.sls.service.functions[fn], 'package.artifact')) {
        const zipData = yield fs.readFile(ctx.sls.service.functions[fn].package.artifact);
        const zip = yield JSZip.loadAsync(zipData);
        const wrapperData = yield fs.readFile(path.join(ctx.sls.config.servicePath, `${func.entryNew}.${func.extension}`));
        zip.file(`${func.entryNew}.${func.extension}`, wrapperData);
        yield addTree(zip, 'serverless_sdk');
        yield writeZip(zip, ctx.sls.service.functions[fn].package.artifact);
      } else if (_.get(ctx.sls.service.functions[fn], 'package.individually', _.get(ctx.sls.service, 'package.individually', false))) {
        // add include directives for handler file & sdk lib
        if (ctx.sls.service.functions[fn].package === undefined) {
          ctx.sls.service.functions[fn].package = {};
        }

        if (ctx.sls.service.functions[fn].package.include === undefined) {
          ctx.sls.service.functions[fn].package.include = [];
        }

        ctx.sls.service.functions[fn].package.include.push(`${func.entryNew}.${func.extension}`);
        ctx.sls.service.functions[fn].package.include.push('serverless_sdk/**');
      }
    } // add include directives for handler file & sdk lib


    if (!_.get(ctx.sls.service, 'package.individually', false)) {
      let extension = 'js';

      if (supportedPythonRuntime(ctx.sls.service.provider.runtime)) {
        extension = 'py';
      }

      if (ctx.sls.service.package === undefined) {
        ctx.sls.service.package = {};
      }

      if (ctx.sls.service.package.include === undefined) {
        ctx.sls.service.package.include = [];
      }

      ctx.sls.service.package.include.push(`s_*.${extension}`);
      ctx.sls.service.package.include.push('serverless_sdk/**');
    }
  });

  return function wrap(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = wrap;
//# sourceMappingURL=wrap.js.map