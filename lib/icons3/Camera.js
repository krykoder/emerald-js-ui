(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'material-ui/SvgIcon'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('material-ui/SvgIcon'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.SvgIcon);
    global.Camera = mod.exports;
  }
})(this, function (exports, _react, _SvgIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var Camera = function Camera(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      _extends({}, props, { viewBox: '0 0 64 64' }),
      _react2.default.createElement('rect', { x: '8', y: '20', width: '48', height: '36', rx: '4', ry: '4', fill: 'none', stroke: 'currentColor', strokeWidth: '4', strokeMiterlimit: '10' }),
      _react2.default.createElement('path', { fill: 'none', stroke: 'currentColor', d: 'M16 20l4-12h24l4 12', strokeWidth: '4', strokeMiterlimit: '10' }),
      _react2.default.createElement('circle', { cx: '32', cy: '38', r: '10', fill: 'none', stroke: 'currentColor', strokeWidth: '4', strokeMiterlimit: '10' })
    );
  };

  exports.default = Camera;
});