"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var settings = require('./settings/convert_string_to_decimal_number');

var convertStringToDecimalNumber =
/*#__PURE__*/
function () {
  function convertStringToDecimalNumber(name) {
    (0, _classCallCheck2.default)(this, convertStringToDecimalNumber);
    this.name = name || 'Guest';
  }

  (0, _createClass2.default)(convertStringToDecimalNumber, [{
    key: "hello",
    value: function hello() {
      return "Welcome, ".concat(this.name, "!");
    }
  }]);
  return convertStringToDecimalNumber;
}();

var _default = convertStringToDecimalNumber;
exports.default = _default;