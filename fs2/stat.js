"use strict";

var isCallable = require("es5-ext/object/is-callable")
  , isValue    = require("es5-ext/object/is-value")
  , deferred   = require("deferred")
  , resolve    = require("path").resolve
  , original   = require("fs").stat;

var stat = function (path, options) {
	var def = deferred();
	original(path, function (err, stats) {
		if (err) {
			if (options.loose && err.code === "ENOENT") def.resolve(null);
			else def.reject(err);
		} else {
			def.resolve(stats);
		}
	});
	return def.promise;
};
stat.returnsPromise = true;

module.exports = function (path/*, callback*/) {
	var options, cb;

	path = resolve(String(path));
	options = arguments[1];
	cb = arguments[2];
	if (!isValue(cb) && isCallable(options)) {
		cb = options;
		options = {};
	} else {
		options = Object(options);
	}

	return stat(path, options).cb(cb);
};
module.exports.returnsPromise = true;
module.exports.stat = stat;
