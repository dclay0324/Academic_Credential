webpackHotUpdate(5,{

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(458);

var _Layout = __webpack_require__(969);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(670);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\user\\Desktop\\college\\Blockchain\\academic\\pages\\index.js?entry';

var path = __webpack_require__(983);
var fs = __webpack_require__(984);

var CertificateIndex = function (_Component) {
  (0, _inherits3.default)(CertificateIndex, _Component);

  function CertificateIndex() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CertificateIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CertificateIndex.__proto__ || (0, _getPrototypeOf2.default)(CertificateIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = { selectedFile: null }, _this.onFileChange = function (event) {
      _this.setState({ selectedFile: event.target.files[0] });

      var curFile = event.target.files[0];
      var reader = new FileReader();
      reader.readAsText(curFile);
      reader.onload = function (e) {
        //console.log('file:', e.target.result);
        var jsonData = JSON.parse(this.result);
        console.log(jsonData);
      };

      // build
      // const buildPath = path.resolve(__dirname, 'build');
      // fs.removeSync(buildPath);

      // const source = fs.readFileSync(jsonData, 'utf8');
      // const output = solc.compile(source, 1).contracts;

      // fs.ensureDirSync(buildPath);

      // //console.log(output);
      // for (let contract in output) {
      //   //console.log(contract);
      //   fs.outputJsonSync(
      //     path.resolve(buildPath, contract.replace(':', '') + '.json'),
      //     output[contract]
      //   );
      // }
    }, _this.fileData = function () {
      if (_this.state.selectedFile) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, _react2.default.createElement('h2', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, 'File Details:'), _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, 'File Name: ', _this.state.selectedFile.name), _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, 'File Type: ', _this.state.selectedFile.type));
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CertificateIndex, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Verify Certificates'), _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Choose a JSON file'), _react2.default.createElement('input', {
        type: 'file',
        onChange: this.onFileChange,
        accept: 'application/json',
        style: { marginBottom: 20 },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), this.fileData(), _react2.default.createElement(_routes.Link, { route: '/certificates/success', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        content: 'Verify',
        icon: 'check circle outline',
        primary: true,
        style: { marginTop: 20 },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      })))));
    }
  }]);

  return CertificateIndex;
}(_react.Component);

exports.default = CertificateIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkZvcm0iLCJMYXlvdXQiLCJMaW5rIiwicGF0aCIsInJlcXVpcmUiLCJmcyIsIkNlcnRpZmljYXRlSW5kZXgiLCJzdGF0ZSIsInNlbGVjdGVkRmlsZSIsIm9uRmlsZUNoYW5nZSIsInNldFN0YXRlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsImN1ckZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzVGV4dCIsIm9ubG9hZCIsImUiLCJqc29uRGF0YSIsIkpTT04iLCJwYXJzZSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJmaWxlRGF0YSIsIm5hbWUiLCJ0eXBlIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVE7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7Ozs7OztBQUNyQixJQUFNLE9BQU4sQUFBTSxBQUFPO0FBQ2IsSUFBTSxLQUFOLEFBQU0sQUFBSzs7SSxBQUdMOzs7Ozs7Ozs7Ozs7OztnTyxBQUNKLFFBQVEsRUFBRSxjLEFBQUYsQUFBZ0IsYyxBQUV4QixlQUFlLGlCQUFTLEFBQ3RCO1lBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxNQUFBLEFBQU0sT0FBTixBQUFhLE1BQTNDLEFBQWMsQUFBZ0IsQUFBbUIsQUFFakQ7O1VBQU0sVUFBVSxNQUFBLEFBQU0sT0FBTixBQUFhLE1BQTdCLEFBQWdCLEFBQW1CLEFBQ25DO1VBQU0sU0FBUyxJQUFmLEFBQWUsQUFBSSxBQUNuQjthQUFBLEFBQU8sV0FBUCxBQUFrQixBQUNsQjthQUFBLEFBQU8sU0FBUyxVQUFBLEFBQVUsR0FBRyxBQUMzQjtBQUNBO1lBQUksV0FBVyxLQUFBLEFBQUssTUFBTSxLQUExQixBQUFlLEFBQWdCLEFBQy9CO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2I7QUFKRCxBQU1BOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QSxhLEFBRUQsV0FBVyxZQUFNLEFBQ2Y7VUFBSSxNQUFBLEFBQUssTUFBVCxBQUFlLGNBQWMsQUFDM0I7K0JBQ0UsY0FBQTs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO0FBQUEsU0FBQSxrQkFDRSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsV0FERixBQUNFLEFBQ0Esa0NBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFdBQWUscUJBQUEsQUFBSyxNQUFMLEFBQVcsYUFGNUIsQUFFRSxBQUF1QyxBQUN2Qyx1QkFBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsV0FBZSxxQkFBQSxBQUFLLE1BQUwsQUFBVyxhQUo5QixBQUNFLEFBR0UsQUFBdUMsQUFHNUM7QUFDRjtBOzs7Ozs2QkFFUSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHdDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQTtjQUFBLEFBQ08sQUFDTDtrQkFBVSxLQUZaLEFBRWlCLEFBQ2Y7Z0JBSEYsQUFHUyxBQUNQO2VBQU8sRUFBRSxjQUpYLEFBSVMsQUFBZ0I7O29CQUp6QjtzQkFGRixBQUVFLEFBTUM7QUFORDtBQUNFLGVBSEosQUFRRyxBQUFLLEFBQ04sNEJBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDVSxBQUNSO2NBRkYsQUFFTyxBQUNMO2lCQUhGLEFBR1csQUFDVDtlQUFPLEVBQUUsV0FKWCxBQUlTLEFBQWE7O29CQUp0QjtzQkFkVixBQUNFLEFBRUUsQUFTRSxBQUNFLEFBQ0UsQUFZWDtBQVpXO0FBQ0U7Ozs7O0FBY2hCLEEsQUE1RStCOztrQkE0RS9CLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvdXNlci9EZXNrdG9wL2NvbGxlZ2UvQmxvY2tjaGFpbi9hY2FkZW1pYyJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\user\\Desktop\\college\\Blockchain\\academic\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\user\\Desktop\\college\\Blockchain\\academic\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 984:
/***/ (function(module, exports) {

throw new Error("Module parse failed: C:\\Users\\user\\Desktop\\college\\Blockchain\\academic\\node_modules\\fs-extra\\lib\\index.js Unexpected token (5:2)\nYou may need an appropriate loader to handle this file type.\n| module.exports = {\n|   // Export promiseified graceful-fs:\n|   ...require('./fs'),\n|   // Export extra methods:\n|   ...require('./copy-sync'),");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44NTZmNDlkMWI3YzRmNWEzYWNmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZTdjMzgzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgZnMgPSByZXF1aXJlKCdmcy1leHRyYScpO1xyXG5cclxuXHJcbmNsYXNzIENlcnRpZmljYXRlSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0geyBzZWxlY3RlZEZpbGU6IG51bGwgfTtcclxuXHJcbiAgb25GaWxlQ2hhbmdlID0gZXZlbnQgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRmlsZTogZXZlbnQudGFyZ2V0LmZpbGVzWzBdIH0pO1xyXG5cclxuICAgIGNvbnN0IGN1ckZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoY3VyRmlsZSk7XHJcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZygnZmlsZTonLCBlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICBsZXQganNvbkRhdGEgPSBKU09OLnBhcnNlKHRoaXMucmVzdWx0KTtcclxuICAgICAgY29uc29sZS5sb2coanNvbkRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBidWlsZFxyXG4gICAgLy8gY29uc3QgYnVpbGRQYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2J1aWxkJyk7XHJcbiAgICAvLyBmcy5yZW1vdmVTeW5jKGJ1aWxkUGF0aCk7XHJcblxyXG4gICAgLy8gY29uc3Qgc291cmNlID0gZnMucmVhZEZpbGVTeW5jKGpzb25EYXRhLCAndXRmOCcpO1xyXG4gICAgLy8gY29uc3Qgb3V0cHV0ID0gc29sYy5jb21waWxlKHNvdXJjZSwgMSkuY29udHJhY3RzO1xyXG5cclxuICAgIC8vIGZzLmVuc3VyZURpclN5bmMoYnVpbGRQYXRoKTtcclxuXHJcbiAgICAvLyAvL2NvbnNvbGUubG9nKG91dHB1dCk7XHJcbiAgICAvLyBmb3IgKGxldCBjb250cmFjdCBpbiBvdXRwdXQpIHtcclxuICAgIC8vICAgLy9jb25zb2xlLmxvZyhjb250cmFjdCk7XHJcbiAgICAvLyAgIGZzLm91dHB1dEpzb25TeW5jKFxyXG4gICAgLy8gICAgIHBhdGgucmVzb2x2ZShidWlsZFBhdGgsIGNvbnRyYWN0LnJlcGxhY2UoJzonLCAnJykgKyAnLmpzb24nKSxcclxuICAgIC8vICAgICBvdXRwdXRbY29udHJhY3RdXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9XHJcbiAgfTtcclxuXHJcbiAgZmlsZURhdGEgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGUpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgyPkZpbGUgRGV0YWlsczo8L2gyPlxyXG4gICAgICAgICAgPHA+RmlsZSBOYW1lOiB7dGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGUubmFtZX08L3A+XHJcbiAgICAgICAgICA8cD5GaWxlIFR5cGU6IHt0aGlzLnN0YXRlLnNlbGVjdGVkRmlsZS50eXBlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMT5WZXJpZnkgQ2VydGlmaWNhdGVzPC9oMT5cclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxoMz5DaG9vc2UgYSBKU09OIGZpbGU8L2gzPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHt0aGlzLmZpbGVEYXRhKCl9XHJcbiAgICAgICAgICA8TGluayByb3V0ZT1cIi9jZXJ0aWZpY2F0ZXMvc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PSdWZXJpZnknXHJcbiAgICAgICAgICAgICAgICBpY29uPSdjaGVjayBjaXJjbGUgb3V0bGluZSdcclxuICAgICAgICAgICAgICAgIHByaW1hcnk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENlcnRpZmljYXRlSW5kZXg7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7O0FBSkE7QUFZQTtBQVpBO0FBQ0E7Ozs7Ozs7QUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==