'use strict';

var _fetch = require('../fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var register = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(email, password, username, tenantName, tenantTitle) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fetch2.default)(`${_config2.default.backendUrl}tenants`, {
              method: 'POST',
              body: JSON.stringify({
                tenantName,
                title: tenantTitle,
                ownerUserName: username,
                ownerPassword: password,
                ownerEmail: email
              })
            });

          case 2:
            response = _context.sent;
            return _context.abrupt('return', response.json());

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function register(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = register;
//# sourceMappingURL=register.js.map