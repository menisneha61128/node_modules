(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bugsnag = f()}})(function(){var define,module,exports;
// minimal implementations of useful ES functionality
// all we really need for arrays is reduce – everything else is just sugar!
// Array#reduce
var reduce = function (arr, fn, accum) {
  var val = accum;

  for (var i = 0, len = arr.length; i < len; i++) {
    val = fn(val, arr[i], i, arr);
  }

  return val;
}; // Array#filter


var filter = function (arr, fn) {
  return reduce(arr, function (accum, item, i, arr) {
    return !fn(item, i, arr) ? accum : accum.concat(item);
  }, []);
}; // Array#map


var map = function (arr, fn) {
  return reduce(arr, function (accum, item, i, arr) {
    return accum.concat(fn(item, i, arr));
  }, []);
}; // Array#includes


var includes = function (arr, x) {
  return reduce(arr, function (accum, item, i, arr) {
    return accum === true || item === x;
  }, false);
};

var _hasDontEnumBug = !{
  toString: null
}.propertyIsEnumerable('toString');

var _dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor']; // Object#keys

var keys = function (obj) {
  // stripped down version of
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Keys
  var result = [];
  var prop;

  for (prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) result.push(prop);
  }

  if (!_hasDontEnumBug) return result;

  for (var i = 0, len = _dontEnums.length; i < len; i++) {
    if (Object.prototype.hasOwnProperty.call(obj, _dontEnums[i])) result.push(_dontEnums[i]);
  }

  return result;
}; // Array#isArray


var isArray = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

var _pad = function (n) {
  return n < 10 ? "0" + n : n;
}; // Date#toISOString


var isoDate = function () {
  // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
  var d = new Date();
  return d.getUTCFullYear() + '-' + _pad(d.getUTCMonth() + 1) + '-' + _pad(d.getUTCDate()) + 'T' + _pad(d.getUTCHours()) + ':' + _pad(d.getUTCMinutes()) + ':' + _pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
};

var _$esUtils_8 = {
  map: map,
  reduce: reduce,
  filter: filter,
  includes: includes,
  keys: keys,
  isArray: isArray,
  isoDate: isoDate
};

var __isoDate_2 = _$esUtils_8.isoDate;

var BugsnagBreadcrumb =
/*#__PURE__*/
function () {
  function BugsnagBreadcrumb(name, metaData, type, timestamp) {
    if (name === void 0) {
      name = '[anonymous]';
    }

    if (metaData === void 0) {
      metaData = {};
    }

    if (type === void 0) {
      type = 'manual';
    }

    if (timestamp === void 0) {
      timestamp = __isoDate_2();
    }

    this.type = type;
    this.name = name;
    this.metaData = metaData;
    this.timestamp = timestamp;
  }

  var _proto = BugsnagBreadcrumb.prototype;

  _proto.toJSON = function toJSON() {
    return {
      type: this.type,
      name: this.name,
      timestamp: this.timestamp,
      metaData: this.metaData
    };
  };

  return BugsnagBreadcrumb;
}();

var _$BugsnagBreadcrumb_2 = BugsnagBreadcrumb;

var _$validators_18 = {};
_$validators_18.intRange = function (min, max) {
  if (min === void 0) {
    min = 1;
  }

  if (max === void 0) {
    max = Infinity;
  }

  return function (value) {
    return typeof value === 'number' && parseInt('' + value, 10) === value && value >= min && value <= max;
  };
};

_$validators_18.stringWithLength = function (value) {
  return typeof value === 'string' && !!value.length;
};

var _$config_4 = {};
var __filter_4 = _$esUtils_8.filter,
    __reduce_4 = _$esUtils_8.reduce,
    __keys_4 = _$esUtils_8.keys,
    __isArray_4 = _$esUtils_8.isArray,
    __includes_4 = _$esUtils_8.includes;

var intRange = _$validators_18.intRange,
    stringWithLength = _$validators_18.stringWithLength;

_$config_4.schema = {
  apiKey: {
    defaultValue: function () {
      return null;
    },
    message: 'is required',
    validate: stringWithLength
  },
  appVersion: {
    defaultValue: function () {
      return null;
    },
    message: 'should be a string',
    validate: function (value) {
      return value === null || stringWithLength(value);
    }
  },
  appType: {
    defaultValue: function () {
      return null;
    },
    message: 'should be a string',
    validate: function (value) {
      return value === null || stringWithLength(value);
    }
  },
  autoNotify: {
    defaultValue: function () {
      return true;
    },
    message: 'should be true|false',
    validate: function (value) {
      return value === true || value === false;
    }
  },
  beforeSend: {
    defaultValue: function () {
      return [];
    },
    message: 'should be a function or array of functions',
    validate: function (value) {
      return typeof value === 'function' || __isArray_4(value) && __filter_4(value, function (f) {
        return typeof f === 'function';
      }).length === value.length;
    }
  },
  endpoints: {
    defaultValue: function () {
      return {
        notify: 'https://notify.bugsnag.com',
        sessions: 'https://sessions.bugsnag.com'
      };
    },
    message: 'should be an object containing endpoint URLs { notify, sessions }. sessions is optional if autoCaptureSessions=false',
    validate: function (val, obj) {
      return (// first, ensure it's an object
        val && typeof val === 'object' && // endpoints.notify must always be set
        stringWithLength(val.notify) && ( // endpoints.sessions must be set unless session tracking is explicitly off
        obj.autoCaptureSessions === false || stringWithLength(val.sessions)) && // ensure no keys other than notify/session are set on endpoints object
        __filter_4(__keys_4(val), function (k) {
          return !__includes_4(['notify', 'sessions'], k);
        }).length === 0
      );
    }
  },
  autoCaptureSessions: {
    defaultValue: function (val, opts) {
      return opts.endpoints === undefined || !!opts.endpoints && !!opts.endpoints.sessions;
    },
    message: 'should be true|false',
    validate: function (val) {
      return val === true || val === false;
    }
  },
  notifyReleaseStages: {
    defaultValue: function () {
      return null;
    },
    message: 'should be an array of strings',
    validate: function (value) {
      return value === null || __isArray_4(value) && __filter_4(value, function (f) {
        return typeof f === 'string';
      }).length === value.length;
    }
  },
  releaseStage: {
    defaultValue: function () {
      return 'production';
    },
    message: 'should be a string',
    validate: function (value) {
      return typeof value === 'string' && value.length;
    }
  },
  maxBreadcrumbs: {
    defaultValue: function () {
      return 20;
    },
    message: 'should be a number ≤40',
    validate: function (value) {
      return intRange(0, 40)(value);
    }
  },
  autoBreadcrumbs: {
    defaultValue: function () {
      return true;
    },
    message: 'should be true|false',
    validate: function (value) {
      return typeof value === 'boolean';
    }
  },
  user: {
    defaultValue: function () {
      return null;
    },
    message: '(object) user should be an object',
    validate: function (value) {
      return typeof value === 'object';
    }
  },
  metaData: {
    defaultValue: function () {
      return null;
    },
    message: 'should be an object',
    validate: function (value) {
      return typeof value === 'object';
    }
  },
  logger: {
    defaultValue: function () {
      return undefined;
    },
    message: 'should be null or an object with methods { debug, info, warn, error }',
    validate: function (value) {
      return !value || value && __reduce_4(['debug', 'info', 'warn', 'error'], function (accum, method) {
        return accum && typeof value[method] === 'function';
      }, true);
    }
  },
  filters: {
    defaultValue: function () {
      return ['password'];
    },
    message: 'should be an array of strings|regexes',
    validate: function (value) {
      return __isArray_4(value) && value.length === __filter_4(value, function (s) {
        return typeof s === 'string' || s && typeof s.test === 'function';
      }).length;
    }
  }
};

_$config_4.mergeDefaults = function (opts, schema) {
  if (!opts || !schema) throw new Error('opts and schema objects are required');
  return __reduce_4(__keys_4(schema), function (accum, key) {
    accum[key] = opts[key] !== undefined ? opts[key] : schema[key].defaultValue(opts[key], opts);
    return accum;
  }, {});
};

_$config_4.validate = function (opts, schema) {
  if (!opts || !schema) throw new Error('opts and schema objects are required');
  var errors = __reduce_4(__keys_4(schema), function (accum, key) {
    if (schema[key].validate(opts[key], opts)) return accum;
    return accum.concat({
      key: key,
      message: schema[key].message,
      value: opts[key]
    });
  }, []);
  return {
    valid: !errors.length,
    errors: errors
  };
};

// This is a heavily modified/simplified version of
//   https://github.com/othiym23/async-some
//
// We can't use that because:
//   a) it inflates the bundle size to over 10kB
//   b) it depends on a module that uses Object.keys()
//      (which we can't use due to ie8 support)
// run the asynchronous test function (fn) over each item in the array (arr)
// in series until:
//   - fn(item, cb) => calls cb(null, true)
//   - or the end of the array is reached
// the callback (cb) will be passed true if any of the items resulted in a true
// callback, otherwise false
var _$asyncSome_5 = function (arr, fn, cb) {
  var length = arr.length;
  var index = 0;

  var next = function () {
    if (index >= length) return cb(null, false);
    fn(arr[index], function (err, result) {
      if (err) return cb(err, false);
      if (result === true) return cb(null, true);
      index++;
      next();
    });
  };

  next();
};

var _$inferReleaseStage_10 = function (client) {
  return client.app && typeof client.app.releaseStage === 'string' ? client.app.releaseStage : client.config.releaseStage;
};

var _$iserror_11 = require("iserror");

var _$runBeforeSend_17 = function (report, onError) {
  return function (fn, cb) {
    if (typeof fn !== 'function') return cb(null, false);

    try {
      // if function appears sync…
      if (fn.length !== 2) {
        var ret = fn(report); // check if it returned a "thenable" (promise)

        if (ret && typeof ret.then === 'function') {
          return ret.then( // resolve
          function (val) {
            return setTimeout(function () {
              return cb(null, shouldPreventSend(report, val));
            }, 0);
          }, // reject
          function (err) {
            setTimeout(function () {
              onError(err);
              return cb(null, false);
            });
          });
        }

        return cb(null, shouldPreventSend(report, ret));
      } // if function is async…


      fn(report, function (err, result) {
        if (err) {
          onError(err);
          return cb(null, false);
        }

        cb(null, shouldPreventSend(report, result));
      });
    } catch (e) {
      onError(e);
      cb(null, false);
    }
  };
};

var shouldPreventSend = function (report, value) {
  return report.isIgnored() || value === false;
};

var _$errorStackParser_7 = require("error-stack-parser");

// Given `err` which may be an error, does it have a stack property which is a string?
var _$hasStack_9 = function (err) {
  return !!err && (!!err.stack || !!err.stacktrace || !!err['opera#sourceloc']) && typeof (err.stack || err.stacktrace || err['opera#sourceloc']) === 'string' && err.stack !== err.name + ": " + err.message;
};

var _$jsRuntime_12 = process.env.IS_BROWSER ? 'browserjs' : typeof navigator !== 'undefined' && navigator.product === 'ReactNative' ? typeof Expo !== 'undefined' ? 'expojs' : 'reactnativejs' : 'nodejs';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* removed: var _$errorStackParser_7 = require('./lib/error-stack-parser'); */;

var StackGenerator = require("stack-generator");

/* removed: var _$hasStack_9 = require('./lib/has-stack'); */;

var __reduce_23 = _$esUtils_8.reduce,
    __filter_23 = _$esUtils_8.filter;

/* removed: var _$jsRuntime_12 = require('./lib/js-runtime'); */;

var BugsnagReport =
/*#__PURE__*/
function () {
  function BugsnagReport(errorClass, errorMessage, stacktrace, handledState, originalError) {
    if (stacktrace === void 0) {
      stacktrace = [];
    }

    if (handledState === void 0) {
      handledState = defaultHandledState();
    }

    // duck-typing ftw >_<
    this.__isBugsnagReport = true;
    this._ignored = false; // private (un)handled state

    this._handledState = handledState; // setable props

    this.app = undefined;
    this.apiKey = undefined;
    this.breadcrumbs = [];
    this.context = undefined;
    this.device = undefined;
    this.errorClass = stringOrFallback(errorClass, '[no error class]');
    this.errorMessage = stringOrFallback(errorMessage, '[no error message]');
    this.groupingHash = undefined;
    this.metaData = {};
    this.request = undefined;
    this.severity = this._handledState.severity;
    this.stacktrace = __reduce_23(stacktrace, function (accum, frame) {
      var f = formatStackframe(frame); // don't include a stackframe if none of its properties are defined

      try {
        if (JSON.stringify(f) === '{}') return accum;
        return accum.concat(f);
      } catch (e) {
        return accum;
      }
    }, []);
    this.user = undefined;
    this.session = undefined;
    this.originalError = originalError; // Flags.
    // Note these are not initialised unless they are used
    // to save unnecessary bytes in the browser bundle

    /* this.attemptImmediateDelivery, default: true */
  }

  var _proto = BugsnagReport.prototype;

  _proto.ignore = function ignore() {
    this._ignored = true;
  };

  _proto.isIgnored = function isIgnored() {
    return this._ignored;
  };

  _proto.updateMetaData = function updateMetaData(section) {
    var _updates;

    if (!section) return this;
    var updates; // updateMetaData("section", null) -> removes section

    if ((arguments.length <= 1 ? undefined : arguments[1]) === null) return this.removeMetaData(section); // updateMetaData("section", "property", null) -> removes property from section

    if ((arguments.length <= 2 ? undefined : arguments[2]) === null) return this.removeMetaData(section, arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]); // normalise the two supported input types into object form

    if (typeof (arguments.length <= 1 ? undefined : arguments[1]) === 'object') updates = arguments.length <= 1 ? undefined : arguments[1];
    if (typeof (arguments.length <= 1 ? undefined : arguments[1]) === 'string') updates = (_updates = {}, _updates[arguments.length <= 1 ? undefined : arguments[1]] = arguments.length <= 2 ? undefined : arguments[2], _updates); // exit if we don't have an updates object at this point

    if (!updates) return this; // ensure a section with this name exists

    if (!this.metaData[section]) this.metaData[section] = {}; // merge the updates with the existing section

    this.metaData[section] = _extends({}, this.metaData[section], updates);
    return this;
  };

  _proto.removeMetaData = function removeMetaData(section, property) {
    if (typeof section !== 'string') return this; // remove an entire section

    if (!property) {
      delete this.metaData[section];
      return this;
    } // remove a single property from a section


    if (this.metaData[section]) {
      delete this.metaData[section][property];
      return this;
    }

    return this;
  };

  _proto.toJSON = function toJSON() {
    return {
      payloadVersion: '4',
      exceptions: [{
        errorClass: this.errorClass,
        message: this.errorMessage,
        stacktrace: this.stacktrace,
        type: _$jsRuntime_12
      }],
      severity: this.severity,
      unhandled: this._handledState.unhandled,
      severityReason: this._handledState.severityReason,
      app: this.app,
      device: this.device,
      breadcrumbs: this.breadcrumbs,
      context: this.context,
      user: this.user,
      metaData: this.metaData,
      groupingHash: this.groupingHash,
      request: this.request,
      session: this.session
    };
  };

  return BugsnagReport;
}(); // takes a stacktrace.js style stackframe (https://github.com/stacktracejs/stackframe)
// and returns a Bugsnag compatible stackframe (https://docs.bugsnag.com/api/error-reporting/#json-payload)


var formatStackframe = function (frame) {
  var f = {
    file: frame.fileName,
    method: normaliseFunctionName(frame.functionName),
    lineNumber: frame.lineNumber,
    columnNumber: frame.columnNumber,
    code: undefined,
    inProject: undefined // Some instances result in no file:
    // - calling notify() from chrome's terminal results in no file/method.
    // - non-error exception thrown from global code in FF
    // This adds one.

  };

  if (f.lineNumber > -1 && !f.file && !f.method) {
    f.file = 'global code';
  }

  return f;
};

var normaliseFunctionName = function (name) {
  return /^global code$/i.test(name) ? 'global code' : name;
};

var defaultHandledState = function () {
  return {
    unhandled: false,
    severity: 'warning',
    severityReason: {
      type: 'handledException'
    }
  };
};

var stringOrFallback = function (str, fallback) {
  return typeof str === 'string' && str ? str : fallback;
}; // Helpers


BugsnagReport.getStacktrace = function (error, errorFramesToSkip, generatedFramesToSkip) {
  if (errorFramesToSkip === void 0) {
    errorFramesToSkip = 0;
  }

  if (generatedFramesToSkip === void 0) {
    generatedFramesToSkip = 0;
  }

  if (_$hasStack_9(error)) return _$errorStackParser_7.parse(error).slice(errorFramesToSkip); // in IE11 a new Error() doesn't have a stacktrace until you throw it, so try that here

  try {
    throw error;
  } catch (e) {
    if (_$hasStack_9(e)) return _$errorStackParser_7.parse(error).slice(1 + generatedFramesToSkip); // error wasn't provided or didn't have a stacktrace so try to walk the callstack

    try {
      return __filter_23(StackGenerator.backtrace(), function (frame) {
        return (frame.functionName || '').indexOf('StackGenerator$$') === -1;
      }).slice(1 + generatedFramesToSkip);
    } catch (e) {
      return [];
    }
  }
};

BugsnagReport.ensureReport = function (reportOrError, errorFramesToSkip, generatedFramesToSkip) {
  if (errorFramesToSkip === void 0) {
    errorFramesToSkip = 0;
  }

  if (generatedFramesToSkip === void 0) {
    generatedFramesToSkip = 0;
  }

  // notify() can be called with a Report object. In this case no action is required
  if (reportOrError.__isBugsnagReport) return reportOrError;

  try {
    var stacktrace = BugsnagReport.getStacktrace(reportOrError, errorFramesToSkip, 1 + generatedFramesToSkip);
    return new BugsnagReport(reportOrError.name, reportOrError.message, stacktrace, undefined, reportOrError);
  } catch (e) {
    return new BugsnagReport(reportOrError.name, reportOrError.message, [], undefined, reportOrError);
  }
};

var _$BugsnagReport_23 = BugsnagReport;

var _$pad_21 = function pad(num, size) {
  var s = '000000000' + num;
  return s.substr(s.length - size);
};

/* removed: var _$pad_21 = require('./pad.js'); */;

var os = require("os"),
    padding = 2,
    pid = _$pad_21(process.pid.toString(36), padding),
    hostname = os.hostname(),
    length = hostname.length,
    hostId = _$pad_21(hostname.split('').reduce(function (prev, char) {
  return +prev + char.charCodeAt(0);
}, +length + 36).toString(36), padding);

var _$fingerprint_20 = function fingerprint() {
  return pid + hostId;
};

/**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 *
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */
/* removed: var _$fingerprint_20 = require('./lib/fingerprint.js'); */;

/* removed: var _$pad_21 = require('./lib/pad.js'); */;

var c = 0,
    blockSize = 4,
    base = 36,
    discreteValues = Math.pow(base, blockSize);

function randomBlock() {
  return _$pad_21((Math.random() * discreteValues << 0).toString(base), blockSize);
}

function safeCounter() {
  c = c < discreteValues ? c : 0;
  c++; // this is not subliminal

  return c - 1;
}

function cuid() {
  // Starting with a lowercase letter makes
  // it HTML element ID friendly.
  var letter = 'c',
      // hard-coded allows for sequential access
  // timestamp
  // warning: this exposes the exact date and time
  // that the uid was created.
  timestamp = new Date().getTime().toString(base),
      // Prevent same-machine collisions.
  counter = _$pad_21(safeCounter().toString(base), blockSize),
      // A few chars to generate distinct ids for different
  // clients (so different computers are far less
  // likely to generate the same id)
  print = _$fingerprint_20(),
      // Grab some more chars from Math.random()
  random = randomBlock() + randomBlock();
  return letter + timestamp + counter + print + random;
}

cuid.fingerprint = _$fingerprint_20;
var _$cuid_19 = cuid;

var __isoDate_24 = _$esUtils_8.isoDate;

/* removed: var _$cuid_19 = require('@bugsnag/cuid'); */;

var Session =
/*#__PURE__*/
function () {
  function Session() {
    this.id = _$cuid_19();
    this.startedAt = __isoDate_24();
    this._handled = 0;
    this._unhandled = 0;
  }

  var _proto = Session.prototype;

  _proto.toJSON = function toJSON() {
    return {
      id: this.id,
      startedAt: this.startedAt,
      events: {
        handled: this._handled,
        unhandled: this._unhandled
      }
    };
  };

  _proto.trackError = function trackError(report) {
    this[report._handledState.unhandled ? '_unhandled' : '_handled'] += 1;
  };

  return Session;
}();

var _$Session_24 = Session;

function ___extends_3() { ___extends_3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ___extends_3.apply(this, arguments); }

/* removed: var _$config_4 = require('./config'); */;

/* removed: var _$BugsnagReport_23 = require('./report'); */;

/* removed: var _$BugsnagBreadcrumb_2 = require('./breadcrumb'); */;

/* removed: var _$Session_24 = require('./session'); */;

var __map_3 = _$esUtils_8.map,
    __includes_3 = _$esUtils_8.includes,
    __isArray_3 = _$esUtils_8.isArray;

/* removed: var _$inferReleaseStage_10 = require('./lib/infer-release-stage'); */;

/* removed: var _$iserror_11 = require('./lib/iserror'); */;

/* removed: var _$asyncSome_5 = require('./lib/async-some'); */;

/* removed: var _$runBeforeSend_17 = require('./lib/run-before-send'); */;

var LOG_USAGE_ERR_PREFIX = "Usage error.";
var REPORT_USAGE_ERR_PREFIX = "Bugsnag usage error.";

var BugsnagClient =
/*#__PURE__*/
function () {
  function BugsnagClient(notifier) {
    if (!notifier || !notifier.name || !notifier.version || !notifier.url) {
      throw new Error('`notifier` argument is required');
    } // notifier id


    this.notifier = notifier; // configure() should be called before notify()

    this._configured = false; // intialise opts and config

    this._opts = {};
    this.config = {}; // // i/o

    this._delivery = {
      sendSession: function () {},
      sendReport: function () {}
    };
    this._logger = {
      debug: function () {},
      info: function () {},
      warn: function () {},
      error: function () {} // plugins

    };
    this._plugins = {};
    this._session = null;
    this.breadcrumbs = []; // setable props

    this.app = {};
    this.context = undefined;
    this.device = undefined;
    this.metaData = undefined;
    this.request = undefined;
    this.user = {}; // expose internal constructors

    this.BugsnagClient = BugsnagClient;
    this.BugsnagReport = _$BugsnagReport_23;
    this.BugsnagBreadcrumb = _$BugsnagBreadcrumb_2;
    this.BugsnagSession = _$Session_24;
    var self = this;
    var notify = this.notify;

    this.notify = function () {
      return notify.apply(self, arguments);
    };
  }

  var _proto = BugsnagClient.prototype;

  _proto.setOptions = function setOptions(opts) {
    this._opts = ___extends_3({}, this._opts, opts);
  };

  _proto.configure = function configure(partialSchema) {
    if (partialSchema === void 0) {
      partialSchema = _$config_4.schema;
    }

    var conf = _$config_4.mergeDefaults(this._opts, partialSchema);
    var validity = _$config_4.validate(conf, partialSchema);
    if (!validity.valid === true) throw new Error(generateConfigErrorMessage(validity.errors)); // update and elevate some special options if they were passed in at this point

    if (typeof conf.beforeSend === 'function') conf.beforeSend = [conf.beforeSend];
    if (conf.appVersion) this.app.version = conf.appVersion;
    if (conf.appType) this.app.type = conf.appType;
    if (conf.metaData) this.metaData = conf.metaData;
    if (conf.user) this.user = conf.user;
    if (conf.logger) this.logger(conf.logger); // merge with existing config

    this.config = ___extends_3({}, this.config, conf);
    this._configured = true;
    return this;
  };

  _proto.use = function use(plugin) {
    if (!this._configured) throw new Error('client not configured');
    if (plugin.configSchema) this.configure(plugin.configSchema);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var result = plugin.init.apply(plugin, [this].concat(args)); // JS objects are not the safest way to store arbitrarily keyed values,
    // so bookend the key with some characters that prevent tampering with
    // stuff like __proto__ etc. (only store the result if the plugin had a
    // name)

    if (plugin.name) this._plugins["~" + plugin.name + "~"] = result;
    return this;
  };

  _proto.getPlugin = function getPlugin(name) {
    return this._plugins["~" + name + "~"];
  };

  _proto.delivery = function delivery(d) {
    this._delivery = d(this);
    return this;
  };

  _proto.logger = function logger(l, sid) {
    this._logger = l;
    return this;
  };

  _proto.sessionDelegate = function sessionDelegate(s) {
    this._sessionDelegate = s;
    return this;
  };

  _proto.startSession = function startSession() {
    if (!this._sessionDelegate) {
      this._logger.warn('No session implementation is installed');

      return this;
    }

    return this._sessionDelegate.startSession(this);
  };

  _proto.leaveBreadcrumb = function leaveBreadcrumb(name, metaData, type, timestamp) {
    if (!this._configured) throw new Error('client not configured'); // coerce bad values so that the defaults get set

    name = name || undefined;
    type = typeof type === 'string' ? type : undefined;
    timestamp = typeof timestamp === 'string' ? timestamp : undefined;
    metaData = typeof metaData === 'object' && metaData !== null ? metaData : undefined; // if no name and no metaData, usefulness of this crumb is questionable at best so discard

    if (typeof name !== 'string' && !metaData) return;
    var crumb = new _$BugsnagBreadcrumb_2(name, metaData, type, timestamp); // push the valid crumb onto the queue and maintain the length

    this.breadcrumbs.push(crumb);

    if (this.breadcrumbs.length > this.config.maxBreadcrumbs) {
      this.breadcrumbs = this.breadcrumbs.slice(this.breadcrumbs.length - this.config.maxBreadcrumbs);
    }

    return this;
  };

  _proto.notify = function notify(error, opts, cb) {
    var _this = this;

    if (opts === void 0) {
      opts = {};
    }

    if (cb === void 0) {
      cb = function () {};
    }

    if (!this._configured) throw new Error('client not configured'); // releaseStage can be set via config.releaseStage or client.app.releaseStage

    var releaseStage = _$inferReleaseStage_10(this); // ensure we have an error (or a reasonable object representation of an error)

    var _normaliseError = normaliseError(error, opts, this._logger),
        err = _normaliseError.err,
        errorFramesToSkip = _normaliseError.errorFramesToSkip,
        _opts = _normaliseError._opts;

    if (_opts) opts = _opts; // ensure opts is an object

    if (typeof opts !== 'object' || opts === null) opts = {}; // create a report from the error, if it isn't one already

    var report = _$BugsnagReport_23.ensureReport(err, errorFramesToSkip, 2);
    report.app = ___extends_3({}, {
      releaseStage: releaseStage
    }, report.app, this.app);
    report.context = report.context || opts.context || this.context || undefined;
    report.device = ___extends_3({}, report.device, this.device, opts.device);
    report.request = ___extends_3({}, report.request, this.request, opts.request);
    report.user = ___extends_3({}, report.user, this.user, opts.user);
    report.metaData = ___extends_3({}, report.metaData, this.metaData, opts.metaData);
    report.breadcrumbs = this.breadcrumbs.slice(0);

    if (this._session) {
      this._session.trackError(report);

      report.session = this._session;
    } // set severity if supplied


    if (opts.severity !== undefined) {
      report.severity = opts.severity;
      report._handledState.severityReason = {
        type: 'userSpecifiedSeverity'
      };
    } // exit early if the reports should not be sent on the current releaseStage


    if (__isArray_3(this.config.notifyReleaseStages) && !__includes_3(this.config.notifyReleaseStages, releaseStage)) {
      this._logger.warn("Report not sent due to releaseStage/notifyReleaseStages configuration");

      return cb(null, report);
    }

    var originalSeverity = report.severity;
    var beforeSend = [].concat(opts.beforeSend).concat(this.config.beforeSend);

    var onBeforeSendErr = function (err) {
      _this._logger.error("Error occurred in beforeSend callback, continuing anyway\u2026");

      _this._logger.error(err);
    };

    _$asyncSome_5(beforeSend, _$runBeforeSend_17(report, onBeforeSendErr), function (err, preventSend) {
      if (err) onBeforeSendErr(err);

      if (preventSend) {
        _this._logger.debug("Report not sent due to beforeSend callback");

        return cb(null, report);
      } // only leave a crumb for the error if actually got sent


      if (_this.config.autoBreadcrumbs) {
        _this.leaveBreadcrumb(report.errorClass, {
          errorClass: report.errorClass,
          errorMessage: report.errorMessage,
          severity: report.severity
        }, 'error');
      }

      if (originalSeverity !== report.severity) {
        report._handledState.severityReason = {
          type: 'userCallbackSetSeverity'
        };
      }

      _this._delivery.sendReport({
        apiKey: report.apiKey || _this.config.apiKey,
        notifier: _this.notifier,
        events: [report]
      }, function (err) {
        return cb(err, report);
      });
    });
  };

  return BugsnagClient;
}();

var normaliseError = function (error, opts, logger) {
  var synthesizedErrorFramesToSkip = 3;

  var createAndLogUsageError = function (reason) {
    var msg = generateNotifyUsageMessage(reason);
    logger.warn(LOG_USAGE_ERR_PREFIX + " " + msg);
    return new Error(REPORT_USAGE_ERR_PREFIX + " " + msg);
  };

  var err;
  var errorFramesToSkip = 0;

  var _opts;

  switch (typeof error) {
    case 'string':
      if (typeof opts === 'string') {
        // ≤v3 used to have a notify('ErrorName', 'Error message') interface
        // report usage/deprecation errors if this function is called like that
        err = createAndLogUsageError('string/string');
        _opts = {
          metaData: {
            notifier: {
              notifyArgs: [error, opts]
            }
          }
        };
      } else {
        err = new Error(String(error));
        errorFramesToSkip = synthesizedErrorFramesToSkip;
      }

      break;

    case 'number':
    case 'boolean':
      err = new Error(String(error));
      break;

    case 'function':
      err = createAndLogUsageError('function');
      break;

    case 'object':
      if (error !== null && (_$iserror_11(error) || error.__isBugsnagReport)) {
        err = error;
      } else if (error !== null && hasNecessaryFields(error)) {
        err = new Error(error.message || error.errorMessage);
        err.name = error.name || error.errorClass;
        errorFramesToSkip = synthesizedErrorFramesToSkip;
      } else {
        err = createAndLogUsageError(error === null ? 'null' : 'unsupported object');
      }

      break;

    default:
      err = createAndLogUsageError('nothing');
  }

  return {
    err: err,
    errorFramesToSkip: errorFramesToSkip,
    _opts: _opts
  };
};

var hasNecessaryFields = function (error) {
  return (typeof error.name === 'string' || typeof error.errorClass === 'string') && (typeof error.message === 'string' || typeof error.errorMessage === 'string');
};

var generateConfigErrorMessage = function (errors) {
  return "Bugsnag configuration error\n" + __map_3(errors, function (err) {
    return "\"" + err.key + "\" " + err.message + " \n    got " + stringify(err.value);
  }).join('\n\n');
};

var generateNotifyUsageMessage = function (actual) {
  return "notify() expected error/opts parameters, got " + actual;
};

var stringify = function (val) {
  return typeof val === 'object' ? JSON.stringify(val) : String(val);
};

var _$BugsnagClient_3 = BugsnagClient;

var _$safeJsonStringify_22 = function (data, replacer, space, opts) {
  var filterKeys = opts && opts.filterKeys ? opts.filterKeys : [];
  var filterPaths = opts && opts.filterPaths ? opts.filterPaths : [];
  return JSON.stringify(prepareObjForSerialization(data, filterKeys, filterPaths), replacer, space);
};

var MAX_DEPTH = 20;
var MAX_EDGES = 25000;
var MIN_PRESERVED_DEPTH = 8;
var REPLACEMENT_NODE = '...';

function __isError_22(o) {
  return o instanceof Error || /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(o));
}

function throwsMessage(err) {
  return '[Throws: ' + (err ? err.message : '?') + ']';
}

function find(haystack, needle) {
  for (var i = 0, len = haystack.length; i < len; i++) {
    if (haystack[i] === needle) return true;
  }

  return false;
} // returns true if the string `path` starts with any of the provided `paths`


function isDescendent(paths, path) {
  for (var i = 0, len = paths.length; i < len; i++) {
    if (path.indexOf(paths[i]) === 0) return true;
  }

  return false;
}

function shouldFilter(patterns, key) {
  for (var i = 0, len = patterns.length; i < len; i++) {
    if (typeof patterns[i] === 'string' && patterns[i] === key) return true;
    if (patterns[i] && typeof patterns[i].test === 'function' && patterns[i].test(key)) return true;
  }

  return false;
}

function __isArray_22(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

function safelyGetProp(obj, prop) {
  try {
    return obj[prop];
  } catch (err) {
    return throwsMessage(err);
  }
}

function prepareObjForSerialization(obj, filterKeys, filterPaths) {
  var seen = []; // store references to objects we have seen before

  var edges = 0;

  function visit(obj, path) {
    function edgesExceeded() {
      return path.length > MIN_PRESERVED_DEPTH && edges > MAX_EDGES;
    }

    edges++;
    if (path.length > MAX_DEPTH) return REPLACEMENT_NODE;
    if (edgesExceeded()) return REPLACEMENT_NODE;
    if (obj === null || typeof obj !== 'object') return obj;
    if (find(seen, obj)) return '[Circular]';
    seen.push(obj);

    if (typeof obj.toJSON === 'function') {
      try {
        // we're not going to count this as an edge because it
        // replaces the value of the currently visited object
        edges--;
        var fResult = visit(obj.toJSON(), path);
        seen.pop();
        return fResult;
      } catch (err) {
        return throwsMessage(err);
      }
    }

    var er = __isError_22(obj);

    if (er) {
      edges--;
      var eResult = visit({
        name: obj.name,
        message: obj.message
      }, path);
      seen.pop();
      return eResult;
    }

    if (__isArray_22(obj)) {
      var aResult = [];

      for (var i = 0, len = obj.length; i < len; i++) {
        if (edgesExceeded()) {
          aResult.push(REPLACEMENT_NODE);
          break;
        }

        aResult.push(visit(obj[i], path.concat('[]')));
      }

      seen.pop();
      return aResult;
    }

    var result = {};

    try {
      for (var prop in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, prop)) continue;

        if (isDescendent(filterPaths, path.join('.')) && shouldFilter(filterKeys, prop)) {
          result[prop] = '[Filtered]';
          continue;
        }

        if (edgesExceeded()) {
          result[prop] = REPLACEMENT_NODE;
          break;
        }

        result[prop] = visit(safelyGetProp(obj, prop), path.concat(prop));
      }
    } catch (e) {}

    seen.pop();
    return result;
  }

  return visit(obj, []);
}

var _$jsonPayload_13 = {};
/* removed: var _$safeJsonStringify_22 = require('@bugsnag/safe-json-stringify'); */;

var REPORT_FILTER_PATHS = ['events.[].app', 'events.[].metaData', 'events.[].user', 'events.[].breadcrumbs', 'events.[].request', 'events.[].device'];
var SESSION_FILTER_PATHS = ['device', 'app', 'user'];

_$jsonPayload_13.report = function (report, filterKeys) {
  var payload = _$safeJsonStringify_22(report, null, null, {
    filterPaths: REPORT_FILTER_PATHS,
    filterKeys: filterKeys
  });

  if (payload.length > 10e5) {
    delete report.events[0].metaData;
    report.events[0].metaData = {
      notifier: "WARNING!\nSerialized payload was " + payload.length / 10e5 + "MB (limit = 1MB)\nmetaData was removed"
    };
    payload = _$safeJsonStringify_22(report, null, null, {
      filterPaths: REPORT_FILTER_PATHS,
      filterKeys: filterKeys
    });
    if (payload.length > 10e5) throw new Error('payload exceeded 1MB limit');
  }

  return payload;
};

_$jsonPayload_13.session = function (report, filterKeys) {
  var payload = _$safeJsonStringify_22(report, null, null, {
    filterPaths: SESSION_FILTER_PATHS,
    filterKeys: filterKeys
  });
  if (payload.length > 10e5) throw new Error('payload exceeded 1MB limit');
  return payload;
};

var http = require("http");

var https = require("https");

var ___require_26 = require("url"),
    parse = ___require_26.parse;

var _$request_26 = function (_ref, cb) {
  var url = _ref.url,
      headers = _ref.headers,
      body = _ref.body,
      agent = _ref.agent;
  var didError = false;

  var onError = function (err) {
    if (didError) return;
    didError = true;
    cb(err);
  };

  var parsedUrl = parse(url);
  var secure = parsedUrl.protocol === 'https:';
  var transport = secure ? https : http;
  var req = transport.request({
    method: 'POST',
    hostname: parsedUrl.hostname,
    port: parsedUrl.port,
    path: parsedUrl.path,
    headers: headers,
    agent: agent
  });
  req.on('error', onError);
  req.on('response', function (res) {
    bufferResponse(res, function (err, body) {
      if (err) return onError(err);

      if (res.statusCode < 200 || res.statusCode >= 300) {
        return onError(new Error("Bad statusCode from API: " + res.statusCode + "\n" + body));
      }

      cb(null, body);
    });
  });
  req.write(body);
  req.end();
};

var bufferResponse = function (stream, cb) {
  var data = '';
  stream.on('error', cb);
  stream.setEncoding('utf8');
  stream.on('data', function (d) {
    data += d;
  });
  stream.on('end', function () {
    return cb(null, data);
  });
};

/* removed: var _$jsonPayload_13 = require('@bugsnag/core/lib/json-payload'); */;

var __isoDate_25 = _$esUtils_8.isoDate;

/* removed: var _$request_26 = require('./request'); */;

var _$delivery_25 = function (client) {
  return {
    sendReport: function (report, cb) {
      if (cb === void 0) {
        cb = function () {};
      }

      var _cb = function (err) {
        if (err) client._logger.error("Report failed to send\u2026\n" + (err && err.stack ? err.stack : err), err);
        cb(err);
      };

      try {
        _$request_26({
          url: client.config.endpoints.notify,
          headers: {
            'Content-Type': 'application/json',
            'Bugsnag-Api-Key': report.apiKey || client.config.apiKey,
            'Bugsnag-Payload-Version': '4',
            'Bugsnag-Sent-At': __isoDate_25()
          },
          body: _$jsonPayload_13.report(report, client.config.filters),
          agent: client.config.agent
        }, function (err, body) {
          return _cb(err);
        });
      } catch (e) {
        _cb(e);
      }
    },
    sendSession: function (session, cb) {
      if (cb === void 0) {
        cb = function () {};
      }

      var _cb = function (err) {
        if (err) client._logger.error("Session failed to send\u2026\n" + (err && err.stack ? err.stack : err), err);
        cb(err);
      };

      try {
        _$request_26({
          url: client.config.endpoints.sessions,
          headers: {
            'Content-Type': 'application/json',
            'Bugsnag-Api-Key': client.config.apiKey,
            'Bugsnag-Payload-Version': '1',
            'Bugsnag-Sent-At': __isoDate_25()
          },
          body: _$jsonPayload_13.session(session, client.config.filters),
          agent: client.config.agent
        }, function (err) {
          return _cb(err);
        });
      } catch (e) {
        _cb(e);
      }
    }
  };
};

// for now just expose the builtin process global from node.js
var _$process_1 = global.process;

function ___extends_27() { ___extends_27 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ___extends_27.apply(this, arguments); }

var schema = _$config_4.schema;

var __reduce_27 = _$esUtils_8.reduce;

var __stringWithLength_27 = _$validators_18.stringWithLength;

var __os_27 = require("os");

/* removed: var _$process_1 = require('process'); */;

var _require4 = require("util"),
    inspect = _require4.inspect;

var _$config_27 = {
  projectRoot: {
    defaultValue: function () {
      return _$process_1.cwd();
    },
    validate: function (value) {
      return value === null || __stringWithLength_27(value);
    },
    message: 'should be string'
  },
  hostname: {
    defaultValue: function () {
      return __os_27.hostname();
    },
    message: 'should be a string',
    validate: function (value) {
      return value === null || __stringWithLength_27(value);
    }
  },
  logger: ___extends_27({}, schema.logger, {
    defaultValue: function () {
      return getPrefixedConsole();
    }
  }),
  releaseStage: ___extends_27({}, schema.releaseStage, {
    defaultValue: function () {
      return _$process_1.env.NODE_ENV || 'production';
    }
  }),
  agent: {
    defaultValue: function () {
      return undefined;
    },
    message: 'should be an HTTP(s) agent',
    validate: function (value) {
      return value === undefined || isAgent(value);
    }
  },
  onUncaughtException: {
    defaultValue: function () {
      return function (err, report, logger) {
        logger.error("Uncaught exception" + getContext(report) + ", the process will now terminate\u2026\n" + printError(err));
        _$process_1.exit(1);
      };
    },
    message: 'should be a function',
    validate: function (value) {
      return typeof value === 'function';
    }
  },
  onUnhandledRejection: {
    defaultValue: function () {
      return function (err, report, logger) {
        logger.error("Unhandled rejection" + getContext(report) + "\u2026\n" + printError(err));
      };
    },
    message: 'should be a function',
    validate: function (value) {
      return typeof value === 'function';
    }
  }
};

var printError = function (err) {
  return err && err.stack ? err.stack : inspect(err);
};

var getPrefixedConsole = function () {
  return __reduce_27(['debug', 'info', 'warn', 'error'], function (accum, method) {
    var consoleMethod = console[method] || console.log;
    accum[method] = consoleMethod.bind(console, '[bugsnag]');
    return accum;
  }, {});
};

var getContext = function (report) {
  return report.request && Object.keys(report.request).length ? " at " + report.request.httpMethod + " " + (report.request.path || report.request.url) : "";
};

var isAgent = function (value) {
  return typeof value === 'object' && value !== null || typeof value === 'boolean';
};

var _$nodeFallbackStack_14 = {};
// The utilities in this file are used to save the stackframes from a known execution context
// to use when a subsequent error has no stack frames. This happens with a lot of
// node's builtin async callbacks when they return from the native layer with no context
// for example:
//
//   fs.readFile('does not exist', (err) => {
//     /* node 8 */
//     err.stack = "ENOENT: no such file or directory, open 'nope'"
//     /* node 4,6 */
//     err.stack = "Error: ENOENT: no such file or directory, open 'nope'\n    at Error (native)"
//   })
// Gets the stack string for the current execution context
_$nodeFallbackStack_14.getStack = function () {
  // slice(3) removes the first line + this function's frame + the caller's frame,
  // so the stack begins with the caller of this function
  return new Error().stack.split('\n').slice(3).join('\n');
}; // Given an Error and a fallbackStack from getStack(), use the fallbackStack
// if error.stack has no genuine stackframes (according to the example above)


_$nodeFallbackStack_14.maybeUseFallbackStack = function (err, fallbackStack) {
  var lines = err.stack.split('\n');

  if (lines.length === 1 || lines.length === 2 && /at Error \(native\)/.test(lines[1])) {
    err.stack = lines[0] + "\n" + fallbackStack;
  }

  return err;
};

/* removed: var _$BugsnagReport_23 = require('../report'); */;

/* removed: var _$iserror_11 = require('./iserror'); */;

var _$reportFromError_16 = function (maybeError, handledState) {
  var actualError = _$iserror_11(maybeError) ? maybeError : new Error('Handled a non-error. See "error" tab for more detail.');
  var report = new _$BugsnagReport_23(actualError.name, actualError.message, _$BugsnagReport_23.getStacktrace(actualError), handledState, maybeError);
  if (maybeError !== actualError) report.updateMetaData('error', 'non-error value', String(maybeError));
  return report;
};

/* eslint node/no-deprecated-api: [error, {ignoreModuleItems: ["domain"]}] */
var domain = require("domain");

/* removed: var _$reportFromError_16 = require('@bugsnag/core/lib/report-from-error'); */;

var getStack = _$nodeFallbackStack_14.getStack,
    maybeUseFallbackStack = _$nodeFallbackStack_14.maybeUseFallbackStack;

var _$contextualize_29 = {
  name: 'contextualize',
  init: function (client) {
    var contextualize = function (fn, opts) {
      // capture a stacktrace in case a resulting error has nothing
      var fallbackStack = getStack();
      var dom = domain.create();
      dom.on('error', function (err) {
        // check if the stacktrace has no context, if so, if so append the frames we created earlier
        if (err.stack) maybeUseFallbackStack(err, fallbackStack);
        var report = _$reportFromError_16(err, {
          severity: 'error',
          unhandled: true,
          severityReason: {
            type: 'unhandledException'
          }
        });
        client.notify(report, opts, function (e, report) {
          if (e) client._logger.error('Failed to send report to Bugsnag');
          client.config.onUncaughtException(err, report, client._logger);
        });
      });
      process.nextTick(function () {
        return dom.run(fn);
      });
    };

    return contextualize;
  }
};

/* removed: var _$reportFromError_16 = require('@bugsnag/core/lib/report-from-error'); */;

var __getStack_30 = _$nodeFallbackStack_14.getStack,
    __maybeUseFallbackStack_30 = _$nodeFallbackStack_14.maybeUseFallbackStack;

var _$intercept_30 = {
  name: 'intercept',
  init: function (client) {
    var intercept = function (opts, cb) {
      if (cb === void 0) {
        cb = function () {};
      }

      if (typeof opts === 'function') {
        cb = opts;
        opts = {};
      } // capture a stacktrace in case a resulting error has nothing


      var fallbackStack = __getStack_30();
      return function (err) {
        if (err) {
          // check if the stacktrace has no context, if so, if so append the frames we created earlier
          if (err.stack) __maybeUseFallbackStack_30(err, fallbackStack);
          var report = _$reportFromError_16(err, {
            severity: 'warning',
            unhandled: false,
            severityReason: {
              type: 'callbackErrorIntercept'
            }
          });
          client.notify(report, opts);
          return;
        }

        for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          data[_key - 1] = arguments[_key];
        }

        cb.apply(void 0, data); // eslint-disable-line
      };
    };

    return intercept;
  }
};

function ___extends_31() { ___extends_31 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ___extends_31.apply(this, arguments); }

var __isoDate_31 = _$esUtils_8.isoDate;
/*
 * Automatically detects browser device details
 */


var _$device_31 = {
  init: function (client) {
    var device = {
      hostname: client.config.hostname,
      runtimeVersions: {
        node: process.versions.node
      } // merge with anything already set on the client

    };
    client.device = ___extends_31({}, device, client.device); // add time just as the report is sent

    client.config.beforeSend.unshift(function (report) {
      report.device = ___extends_31({}, report.device, {
        time: __isoDate_31()
      });
    });
  }
};

var ___require_15 = require("path"),
    join = ___require_15.join,
    resolve = ___require_15.resolve; // normalise a path to a directory, adding a trailing slash if it doesn't already
// have one and resolve it to make it absolute (e.g. get rid of any ".."s)


var _$pathNormalizer_15 = function (p) {
  return join(resolve(p), '/');
};

var __map_32 = _$esUtils_8.map;

/* removed: var _$pathNormalizer_15 = require('@bugsnag/core/lib/path-normalizer'); */;

var _$inProject_32 = {
  init: function (client) {
    return client.config.beforeSend.push(function (report) {
      if (!client.config.projectRoot) return;
      var projectRoot = _$pathNormalizer_15(client.config.projectRoot);
      report.stacktrace = __map_32(report.stacktrace, function (stackframe) {
        stackframe.inProject = typeof stackframe.file === 'string' && stackframe.file.indexOf(projectRoot) === 0 && !/\/node_modules\//.test(stackframe.file);
        return stackframe;
      });
    });
  }
};

function ___extends_33() { ___extends_33 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ___extends_33.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SURROUNDING_LINES = 3;
var MAX_LINE_LENGTH = 200;

var ___require_33 = require("fs"),
    createReadStream = ___require_33.createReadStream;

var ___require2_33 = require("stream"),
    Writable = ___require2_33.Writable;

var pump = require("pump");

var byline = require("byline");

var _$surroundingCode_33 = {
  init: function (client) {
    if (!client.config.sendCode) return;

    var loadSurroundingCode = function (stackframe, cache) {
      return new Promise(function (resolve, reject) {
        try {
          if (!stackframe.lineNumber || !stackframe.file) return resolve(stackframe);
          var cacheKey = stackframe.file + "@" + stackframe.lineNumber;

          if (cacheKey in cache) {
            stackframe.code = cache[cacheKey];
            return resolve(stackframe);
          }

          getSurroundingCode(stackframe.file, stackframe.lineNumber, function (err, code) {
            if (err) return resolve(stackframe);
            stackframe.code = cache[cacheKey] = code;
            return resolve(stackframe);
          });
        } catch (e) {
          return resolve(stackframe);
        }
      });
    };

    client.config.beforeSend.push(function (report) {
      return new Promise(function (resolve, reject) {
        var cache = Object.create(null);
        pMapSeries(report.stacktrace.map(function (stackframe) {
          return function () {
            return loadSurroundingCode(stackframe, cache);
          };
        })).then(resolve)["catch"](reject);
      });
    });
  },
  configSchema: {
    sendCode: {
      defaultValue: function () {
        return true;
      },
      validate: function (value) {
        return value === true || value === false;
      },
      message: 'should be true or false'
    }
  }
};

var getSurroundingCode = function (file, lineNumber, cb) {
  var start = lineNumber - SURROUNDING_LINES;
  var end = lineNumber + SURROUNDING_LINES;
  var reader = createReadStream(file, {
    encoding: 'utf8'
  });
  var splitter = new byline.LineStream({
    keepEmptyLines: true
  });
  var slicer = new CodeRange({
    start: start,
    end: end
  }); // if the slicer has enough lines already, no need to keep reading from the file

  slicer.on('done', function () {
    return reader.destroy();
  });
  pump(reader, splitter, slicer, function (err) {
    // reader.destroy() causes a "premature close" error which we can tolerate
    if (err && err.message !== 'premature close') return cb(err);
    cb(null, slicer.getCode());
  });
}; // This writable stream takes { start, end } options specifying the
// range of lines that should be extracted from a file. Pipe a readable
// stream to it that provides source lines as each chunk. If the range
// is satisfied before the end of the readable stream, it will emit the
// 'done' event. Once a 'done' or 'finish' event has been seen, call getCode()
// to get the range in the following format:
// {
//   '10': 'function getSquare (cb) {',
//   '11': '  rectangles.find({',
//   '12': '    length: 12',
//   '13': '    width: 12',
//   '14': '  }, err => cb)',
//   '15': '}'
// }


var CodeRange =
/*#__PURE__*/
function (_Writable) {
  _inheritsLoose(CodeRange, _Writable);

  function CodeRange(opts) {
    var _this;

    _this = _Writable.call(this, ___extends_33({}, opts, {
      decodeStrings: false
    })) || this;
    _this._start = opts.start;
    _this._end = opts.end;
    _this._n = 0;
    _this._code = {};
    return _this;
  }

  var _proto = CodeRange.prototype;

  _proto._write = function _write(chunk, enc, cb) {
    this._n++;
    if (this._n < this._start) return cb(null);

    if (this._n <= this._end) {
      this._code[String(this._n)] = chunk.length <= MAX_LINE_LENGTH ? chunk : chunk.substr(0, MAX_LINE_LENGTH);
      return cb(null);
    }

    this.emit('done');
    return cb(null);
  };

  _proto.getCode = function getCode() {
    return this._code;
  };

  return CodeRange;
}(Writable);

var pMapSeries = function (ps) {
  return new Promise(function (resolve, reject) {
    var res = [];
    ps.reduce(function (accum, p) {
      return accum.then(function (r) {
        res.push(r);
        return p();
      });
    }, Promise.resolve()).then(function (r) {
      res.push(r);
    }).then(function () {
      resolve(res.slice(1));
    });
  });
};

/* removed: var _$reportFromError_16 = require('@bugsnag/core/lib/report-from-error'); */;

var _handler;

var _$uncaughtException_34 = {
  init: function (client) {
    if (!client.config.autoNotify) return;

    _handler = function (err) {
      client.notify(_$reportFromError_16(err, {
        severity: 'error',
        unhandled: true,
        severityReason: {
          type: 'unhandledException'
        }
      }), {}, function (e, report) {
        if (e) client._logger.error('Failed to send report to Bugsnag');
        client.config.onUncaughtException(err, report, client._logger);
      });
    };

    process.on('uncaughtException', _handler);
  },
  destroy: function () {
    process.removeListener('uncaughtException', _handler);
  }
};

/* removed: var _$reportFromError_16 = require('@bugsnag/core/lib/report-from-error'); */;

var ___handler_35;

var _$unhandledRejection_35 = {
  init: function (client) {
    if (!client.config.autoNotify) return;

    ___handler_35 = function (err) {
      client.notify(_$reportFromError_16(err, {
        severity: 'error',
        unhandled: true,
        severityReason: {
          type: 'unhandledPromiseRejection'
        }
      }), {}, function (e, report) {
        if (e) client._logger.error('Failed to send report to Bugsnag');
        client.config.onUnhandledRejection(err, report, client._logger);
      });
    };

    process.on('unhandledRejection', ___handler_35);
  },
  destroy: function () {
    process.removeListener('unhandledRejection', ___handler_35);
  }
};

function ___extends_6() { ___extends_6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ___extends_6.apply(this, arguments); }

var _$cloneClient_6 = function (client) {
  var clone = new client.BugsnagClient(client.notifier);
  clone.configure({}); // changes to these properties should be reflected in the original client

  clone.config = client.config;
  clone.app = client.app;
  clone.context = client.context;
  clone.device = client.device; // changes to these properties should not be reflected in the original client,
  // so ensure they are are (shallow) cloned

  clone.breadcrumbs = client.breadcrumbs.slice();
  clone.metaData = ___extends_6({}, client.metaData);
  clone.request = ___extends_6({}, client.request);
  clone.user = ___extends_6({}, client.user);
  clone._logger = client._logger;
  clone._delivery = client._delivery;
  return clone;
};

/**
 * Expose `Backoff`.
 */
var _$Backoff_36 = Backoff;
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */


Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);

  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }

  return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */


Backoff.prototype.reset = function () {
  this.attempts = 0;
};

function ___inheritsLoose_38(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var DEFAULT_SUMMARY_INTERVAL = 10 * 1000;

var Emitter = require("events").EventEmitter;

var _$tracker_38 =
/*#__PURE__*/
function (_Emitter) {
  ___inheritsLoose_38(SessionTracker, _Emitter);

  function SessionTracker(intervalLength) {
    var _this;

    _this = _Emitter.call(this) || this;
    _this._sessions = new Map();
    _this._interval = null;
    _this._intervalLength = intervalLength || DEFAULT_SUMMARY_INTERVAL;
    _this._summarize = _this._summarize.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = SessionTracker.prototype;

  _proto.start = function start() {
    if (!this._interval) {
      this._interval = setInterval(this._summarize, this._intervalLength).unref();
    }
  };

  _proto.stop = function stop() {
    clearInterval(this._interval);
    this._interval = null;
  };

  _proto.track = function track(session) {
    var key = dateToMsKey(session.startedAt);

    var cur = this._sessions.get(key);

    this._sessions.set(key, typeof cur === 'undefined' ? 1 : cur + 1);

    return session;
  };

  _proto._summarize = function _summarize() {
    var _this2 = this;

    var summary = [];

    this._sessions.forEach(function (val, key) {
      summary.push({
        startedAt: key,
        sessionsStarted: val
      });

      _this2._sessions["delete"](key);
    });

    if (!summary.length) return;
    this.emit('summary', summary);
  };

  return SessionTracker;
}(Emitter);

var dateToMsKey = function (d) {
  var dk = new Date(d);
  dk.setSeconds(0);
  dk.setMilliseconds(0);
  return dk.toISOString();
};

function ___extends_37() { ___extends_37 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ___extends_37.apply(this, arguments); }

var __isArray_37 = _$esUtils_8.isArray,
    __includes_37 = _$esUtils_8.includes;

/* removed: var _$inferReleaseStage_10 = require('@bugsnag/core/lib/infer-release-stage'); */;

var __intRange_37 = _$validators_18.intRange;

/* removed: var _$cloneClient_6 = require('@bugsnag/core/lib/clone-client'); */;

/* removed: var _$tracker_38 = require('./tracker'); */;

/* removed: var _$Backoff_36 = require('backo'); */;

var _$session_37 = {
  init: function (client) {
    var sessionTracker = new _$tracker_38(client.config.sessionSummaryInterval);
    sessionTracker.on('summary', sendSessionSummary(client));
    sessionTracker.start();
    client.sessionDelegate({
      startSession: function (client) {
        var sessionClient = _$cloneClient_6(client);
        sessionClient._session = new client.BugsnagSession();
        sessionTracker.track(sessionClient._session);
        return sessionClient;
      }
    });
  },
  configSchema: {
    sessionSummaryInterval: {
      defaultValue: function () {
        return undefined;
      },
      validate: function (value) {
        return value === undefined || __intRange_37()(value);
      },
      message: 'should be a positive integer'
    }
  }
};

var sendSessionSummary = function (client) {
  return function (sessionCounts) {
    var releaseStage = _$inferReleaseStage_10(client); // exit early if the reports should not be sent on the current releaseStage

    if (__isArray_37(client.config.notifyReleaseStages) && !__includes_37(client.config.notifyReleaseStages, releaseStage)) {
      client._logger.warn("Session not sent due to releaseStage/notifyReleaseStages configuration");

      return;
    }

    if (!client.config.endpoints.sessions) {
      client._logger.warn("Session not sent due to missing endpoints.sessions configuration");

      return;
    }

    if (!sessionCounts.length) return;
    var backoff = new _$Backoff_36({
      min: 1000,
      max: 10000
    });
    var maxAttempts = 10;
    req(handleRes);

    function handleRes(err) {
      if (!err) {
        var sessionCount = sessionCounts.reduce(function (accum, s) {
          return accum + s.sessionsStarted;
        }, 0);
        return client._logger.debug(sessionCount + " session(s) reported");
      }

      if (backoff.attempts === 10) {
        client._logger.error('Session delivery failed, max retries exceeded', err);

        return;
      }

      client._logger.debug('Session delivery failed, retry #' + (backoff.attempts + 1) + '/' + maxAttempts, err);

      setTimeout(function () {
        return req(handleRes);
      }, backoff.duration());
    }

    function req(cb) {
      client._delivery.sendSession({
        notifier: client.notifier,
        device: client.device,
        app: ___extends_37({}, {
          releaseStage: releaseStage
        }, client.app),
        sessionCounts: sessionCounts
      }, cb);
    }
  };
};

var __map_39 = _$esUtils_8.map;

/* removed: var _$pathNormalizer_15 = require('@bugsnag/core/lib/path-normalizer'); */;

var _$stripProjectRoot_39 = {
  init: function (client) {
    return client.config.beforeSend.push(function (report) {
      if (!client.config.projectRoot) return;
      var projectRoot = _$pathNormalizer_15(client.config.projectRoot);
      report.stacktrace = __map_39(report.stacktrace, function (stackframe) {
        if (typeof stackframe.file === 'string' && stackframe.file.indexOf(projectRoot) === 0) {
          stackframe.file = stackframe.file.replace(projectRoot, '');
        }

        return stackframe;
      });
    });
  }
};

var _$notifier_28 = {};
function ___extends_28() { ___extends_28 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ___extends_28.apply(this, arguments); }

var name = 'Bugsnag Node';
var version = '6.5.2';
var url = 'https://github.com/bugsnag/bugsnag-js';

/* removed: var _$BugsnagClient_3 = require('@bugsnag/core/client'); */;

/* removed: var _$BugsnagReport_23 = require('@bugsnag/core/report'); */;

/* removed: var _$Session_24 = require('@bugsnag/core/session'); */;

/* removed: var _$BugsnagBreadcrumb_2 = require('@bugsnag/core/breadcrumb'); */;

/* removed: var _$delivery_25 = require('@bugsnag/delivery-node'); */; // extend the base config schema with some node-specific options


var __schema_28 = ___extends_28({}, _$config_4.schema, _$config_27); // remove autoBreadcrumbs from the config schema


delete __schema_28.autoBreadcrumbs;

/* removed: var _$surroundingCode_33 = require('@bugsnag/plugin-node-surrounding-code'); */;

/* removed: var _$inProject_32 = require('@bugsnag/plugin-node-in-project'); */;

/* removed: var _$stripProjectRoot_39 = require('@bugsnag/plugin-strip-project-root'); */;

/* removed: var _$session_37 = require('@bugsnag/plugin-server-session'); */;

/* removed: var _$device_31 = require('@bugsnag/plugin-node-device'); */;

/* removed: var _$uncaughtException_34 = require('@bugsnag/plugin-node-uncaught-exception'); */;

/* removed: var _$unhandledRejection_35 = require('@bugsnag/plugin-node-unhandled-rejection'); */;

/* removed: var _$intercept_30 = require('@bugsnag/plugin-intercept'); */;

/* removed: var _$contextualize_29 = require('@bugsnag/plugin-contextualize'); */;

var plugins = [_$surroundingCode_33, _$inProject_32, _$stripProjectRoot_39, _$session_37, _$device_31, _$uncaughtException_34, _$unhandledRejection_35, _$intercept_30, _$contextualize_29];

_$notifier_28 = function (opts, userPlugins) {
  if (userPlugins === void 0) {
    userPlugins = [];
  }

  // handle very simple use case where user supplies just the api key as a string
  if (typeof opts === 'string') opts = {
    apiKey: opts
  };
  var bugsnag = new _$BugsnagClient_3({
    name: name,
    version: version,
    url: url
  });
  bugsnag.delivery(_$delivery_25);
  bugsnag.setOptions(opts);
  bugsnag.configure(__schema_28);
  plugins.forEach(function (pl) {
    return bugsnag.use(pl);
  });

  bugsnag._logger.debug("Loaded!");

  bugsnag.leaveBreadcrumb = function () {
    bugsnag._logger.warn('Breadcrumbs are not supported in Node.js yet');

    return this;
  };

  return bugsnag;
}; // Angular's DI system needs this interface to match what is exposed
// in the type definition file (types/bugsnag.d.ts)


_$notifier_28.Bugsnag = {
  Client: _$BugsnagClient_3,
  Report: _$BugsnagReport_23,
  Session: _$Session_24,
  Breadcrumb: _$BugsnagBreadcrumb_2 // Export a "default" property for compatibility with ESM imports

};
_$notifier_28['default'] = _$notifier_28;

return _$notifier_28;

});
//# sourceMappingURL=bugsnag.js.map
