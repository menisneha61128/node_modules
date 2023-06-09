(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('crypto'), require('request-promise-native'), require('object-assign'), require('querystring')) :
    typeof define === 'function' && define.amd ? define(['exports', 'crypto', 'request-promise-native', 'object-assign', 'querystring'], factory) :
    (factory((global.capi = {}),global.crypto,global['request-promise-native'],global['object-assign'],global.querystring));
}(this, (function (exports,crypto,rp,assign,qs) { 'use strict';

    crypto = crypto && crypto.hasOwnProperty('default') ? crypto['default'] : crypto;
    var rp__default = 'default' in rp ? rp['default'] : rp;
    assign = assign && assign.hasOwnProperty('default') ? assign['default'] : assign;
    qs = qs && qs.hasOwnProperty('default') ? qs['default'] : qs;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function logger(topic, content) {
        console.log("[DEBUG] " + topic + ": " + content + " ");
    }
    function getHost(_a, isV1) {
        var host = _a.host, ServiceType = _a.ServiceType, Region = _a.Region, baseHost = _a.baseHost;
        if (isV1 === void 0) { isV1 = false; }
        if (!host) {
            host = "" + ServiceType + (isV1 ? '' : "." + Region) + "." + baseHost;
        }
        return host;
    }
    function getUnixTime(date) {
        var val = date.getTime();
        return Math.ceil(val / 1000);
    }
    function getDate(date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        return year + "-" + (month > 9 ? month : "0" + month) + "-" + (day > 9 ? day : "0" + day);
    }
    function getUrl(opts, isV1) {
        if (isV1 === void 0) { isV1 = false; }
        opts = opts || {};
        var host = getHost(opts, isV1);
        var path = opts.path || '/';
        return (opts.protocol || 'https') + "://" + host + path;
    }
    function sign(str, secretKey, algorithm) {
        if (algorithm === void 0) { algorithm = 'sha256'; }
        var hmac = crypto.createHmac(algorithm, secretKey);
        return hmac.update(Buffer.from(str, 'utf8')).digest();
    }
    /**
     * is array
     * @param obj object
     */
    function isArray(obj) {
        return Object.prototype.toString.call(obj) == '[object Array]';
    }
    /**
     * is object
     * @param obj object
     */
    function isObject(obj) {
        return obj === Object(obj);
    }
    /**
     * iterate object or array
     * @param obj object or array
     * @param iterator iterator function
     */
    function _forEach(obj, iterator) {
        if (isArray(obj)) {
            var arr = obj;
            if (arr.forEach) {
                arr.forEach(iterator);
                return;
            }
            for (var i = 0; i < arr.length; i += 1) {
                iterator(arr[i], i, arr);
            }
        }
        else {
            var oo = obj;
            for (var key in oo) {
                if (obj.hasOwnProperty(key)) {
                    iterator(oo[key], key, obj);
                }
            }
        }
    }
    /**
     * flatter request parameter
     * @param obj target object or array
     */
    function flatten(obj) {
        if (!isArray(obj) && !isObject(obj)) {
            return {};
        }
        var ret = {};
        var _dump = function (obj, prefix, parents) {
            var checkedParents = [];
            if (parents) {
                var i = void 0;
                for (i = 0; i < parents.length; i++) {
                    if (parents[i] === obj) {
                        throw new Error('object has circular references');
                    }
                    checkedParents.push(obj);
                }
            }
            checkedParents.push(obj);
            if (!isArray(obj) && !isObject(obj)) {
                if (!prefix) {
                    throw obj + 'is not object or array';
                }
                ret[prefix] = obj;
                return {};
            }
            if (isArray(obj)) {
                // it's an array
                _forEach(obj, function (obj, i) {
                    _dump(obj, prefix ? prefix + '.' + i : '' + i, checkedParents);
                });
            }
            else {
                // it's an object
                _forEach(obj, function (obj, key) {
                    _dump(obj, prefix ? prefix + '.' + key : '' + key, checkedParents);
                });
            }
        };
        _dump(obj, null);
        return ret;
    }
    /**
     * generate tencent cloud sign result
     *
     * @param {Payload} payload
     * @param {CapiOptions} options
     * @returns {TencentSignResult}
     */
    function tencentSign(payload, options) {
        var hostParams = {
            host: options.host,
            path: options.path,
            protocol: options.protocol,
            baseHost: options.baseHost,
            ServiceType: options.ServiceType,
            Region: options.Region,
        };
        var url = getUrl(hostParams);
        var Host = getHost(hostParams);
        var d = new Date();
        var Timestamp = getUnixTime(d);
        var date = getDate(d);
        var Algorithm = 'TC3-HMAC-SHA256';
        // 1. create Canonical request string
        var HTTPRequestMethod = (options.method || 'POST').toUpperCase();
        var CanonicalURI = '/';
        var CanonicalQueryString = '';
        var CanonicalHeaders = "content-type:application/json\nhost:" + Host + "\n";
        var SignedHeaders = 'content-type;host';
        var HashedRequestPayload = crypto
            .createHash('sha256')
            .update(JSON.stringify(payload))
            .digest('hex');
        var CanonicalRequest = HTTPRequestMethod + "\n" + CanonicalURI + "\n" + CanonicalQueryString + "\n" + CanonicalHeaders + "\n" + SignedHeaders + "\n" + HashedRequestPayload;
        // 2. create string to sign
        var CredentialScope = date + "/" + options.ServiceType + "/tc3_request";
        var HashedCanonicalRequest = crypto
            .createHash('sha256')
            .update(CanonicalRequest)
            .digest('hex');
        var StringToSign = Algorithm + "\n" + Timestamp + "\n" + CredentialScope + "\n" + HashedCanonicalRequest;
        // 3. calculate signature
        var SecretDate = sign(date, Buffer.from("TC3" + options.SecretKey, 'utf8'));
        var SecretService = sign(options.ServiceType, SecretDate);
        var SecretSigning = sign('tc3_request', SecretService);
        var Signature = crypto
            .createHmac('sha256', SecretSigning)
            .update(Buffer.from(StringToSign, 'utf8'))
            .digest('hex');
        // 4. create authorization
        var Authorization = Algorithm + " Credential=" + options.SecretId + "/" + CredentialScope + ", SignedHeaders=" + SignedHeaders + ", Signature=" + Signature;
        return {
            url: url,
            payload: payload,
            Host: Host,
            Authorization: Authorization,
            Timestamp: Timestamp,
        };
    }
    /**
     * version1: generate tencent cloud sign result
     *
     * @param {Payload} payload
     * @param {CapiOptions} options
     * @returns {TencentSignResultV1}
     */
    function tencentSignV1(payload, options) {
        var hostParams = {
            host: options.host,
            path: options.path,
            protocol: options.protocol,
            baseHost: options.baseHost,
            ServiceType: options.ServiceType,
            Region: options.Region,
        };
        var url = getUrl(hostParams, true);
        var Host = getHost(hostParams, true);
        var d = new Date();
        var Timestamp = getUnixTime(d);
        var Nonce = Math.round(Math.random() * 65535);
        payload.Region = options.Region;
        payload.Nonce = Nonce;
        payload.Timestamp = Timestamp;
        payload.SecretId = options.SecretId;
        payload.RequestClient = payload.RequestClient || 'SDK_NODEJS_v0.0.1';
        if (options.SignatureMethod === 'sha256') {
            payload.SignatureMethod = 'HmacSHA256';
        }
        payload = flatten(payload);
        var keys = Object.keys(payload).sort();
        var method = (options.method || 'POST').toUpperCase();
        var qstr = '';
        keys.forEach(function (key) {
            if (key === '') {
                return;
            }
            key = key.indexOf('_') ? key.replace(/_/g, '.') : key;
            var val = payload[key];
            if (method === 'POST' && val && val[0] === '@') {
                return;
            }
            if (val === undefined ||
                val === null ||
                (typeof val === 'number' && isNaN(val))) {
                val = '';
            }
            qstr += "&" + key + "=" + val;
        });
        qstr = qstr.slice(1);
        payload.Signature = sign("" + method + Host + options.path + "?" + qstr, Buffer.from(options.SecretKey, 'utf8'), options.SignatureMethod).toString('base64');
        return {
            url: url,
            method: method,
            payload: payload,
        };
    }

    var Capi = /** @class */ (function () {
        function Capi(options) {
            this.defaultOptions = {
                path: '/',
                method: 'POST',
                protocol: 'https',
                baseHost: 'api.qcloud.com',
                ServiceType: '',
                SecretId: '',
                SecretKey: '',
                Region: 'ap-guangzhou',
                SignatureMethod: 'sha1',
            };
            this.options = assign(this.defaultOptions, options);
        }
        Capi.prototype.request = function (data, opts, isV3) {
            if (opts === void 0) { opts = this.defaultOptions; }
            if (isV3 === void 0) { isV3 = false; }
            var options = assign(this.options, opts);
            var Action = data.Action, Version = data.Version, restData = __rest(data, ["Action", "Version"]);
            var reqOption = {
                url: '',
                method: '',
                json: true,
                strictSSL: false,
            };
            if (isV3) {
                var _a = tencentSign(restData, options), url = _a.url, payload = _a.payload, Authorization = _a.Authorization, Timestamp = _a.Timestamp, Host = _a.Host;
                reqOption = {
                    url: url,
                    method: 'POST',
                    json: true,
                    strictSSL: false,
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: Authorization,
                        Host: Host,
                        'X-TC-Action': Action,
                        'X-TC-Version': Version || '2018-03-21',
                        'X-TC-Timestamp': Timestamp,
                        'X-TC-Region': options.Region,
                    },
                    body: payload,
                };
                if (this.options.Token) {
                    if (!reqOption.headers) {
                        reqOption.headers = {};
                    }
                    reqOption.headers['X-TC-Token'] = this.options.Token;
                }
            }
            else {
                var _b = tencentSignV1(data, options), url = _b.url, method = _b.method, payload = _b.payload;
                reqOption = {
                    url: url,
                    method: method,
                    json: true,
                    strictSSL: false,
                };
                if (method === 'POST') {
                    reqOption.form = payload;
                }
                else {
                    reqOption.url += '?' + qs.stringify(payload);
                }
            }
            if (options.timeout) {
                reqOption.timeout = options.timeout;
            }
            // debug request option
            if (options.debug) {
                logger('Request Option', JSON.stringify(reqOption));
            }
            return rp__default(reqOption);
        };
        return Capi;
    }());

    exports.Capi = Capi;
    exports.tencentSign = tencentSign;
    exports.tencentSignV1 = tencentSignV1;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
