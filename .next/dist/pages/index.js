'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\user\\Desktop\\college\\Blockchain\\academic\\pages\\index.js?entry';

var path = require('path');
//const fs = require('fs-extra');

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

        // hash json
        var reader = new FileReader();
        reader.readAsArrayBuffer(curFile);
        reader.onload = function () {
          var wordArray = CryptoJS.lib.WordArray.create(reader.result);
          var hash = CryptoJS.SHA256(wordArray).toString();
          console.log(hash);
        };
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
            lineNumber: 54
          }
        }, _react2.default.createElement('h2', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, 'File Details:'), _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, 'File Name: ', _this.state.selectedFile.name), _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
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
          lineNumber: 65
        }
      }, _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Verify Certificates'), _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'Choose a JSON file'), _react2.default.createElement('input', {
        type: 'file',
        onChange: this.onFileChange,
        accept: 'application/json',
        style: { marginBottom: 20 },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), this.fileData(), _react2.default.createElement(_routes.Link, { route: '/certificates/success', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        content: 'Verify',
        icon: 'check circle outline',
        primary: true,
        style: { marginTop: 20 },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      })))));
    }
  }]);

  return CertificateIndex;
}(_react.Component);

exports.default = CertificateIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkZvcm0iLCJMYXlvdXQiLCJMaW5rIiwicGF0aCIsInJlcXVpcmUiLCJDZXJ0aWZpY2F0ZUluZGV4Iiwic3RhdGUiLCJzZWxlY3RlZEZpbGUiLCJvbkZpbGVDaGFuZ2UiLCJzZXRTdGF0ZSIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJjdXJGaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc1RleHQiLCJvbmxvYWQiLCJlIiwianNvbkRhdGEiLCJKU09OIiwicGFyc2UiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJ3b3JkQXJyYXkiLCJDcnlwdG9KUyIsImxpYiIsIldvcmRBcnJheSIsImNyZWF0ZSIsImhhc2giLCJTSEEyNTYiLCJ0b1N0cmluZyIsImZpbGVEYXRhIiwibmFtZSIsInR5cGUiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUTs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7O0FBQ3JCLElBQU0sT0FBTixBQUFNLEFBQU87QUFDYjs7SSxBQUVNOzs7Ozs7Ozs7Ozs7OztnTyxBQUNKLFFBQVEsRUFBRSxjLEFBQUYsQUFBZ0IsYyxBQUV4QixlQUFlLGlCQUFTLEFBQ3RCO1lBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxNQUFBLEFBQU0sT0FBTixBQUFhLE1BQTNDLEFBQWMsQUFBZ0IsQUFBbUIsQUFFakQ7O1VBQU0sVUFBVSxNQUFBLEFBQU0sT0FBTixBQUFhLE1BQTdCLEFBQWdCLEFBQW1CLEFBQ25DO1VBQU0sU0FBUyxJQUFmLEFBQWUsQUFBSSxBQUNuQjthQUFBLEFBQU8sV0FBUCxBQUFrQixBQUNsQjthQUFBLEFBQU8sU0FBUyxVQUFBLEFBQVUsR0FBRyxBQUMzQjtBQUNBO1lBQUksV0FBVyxLQUFBLEFBQUssTUFBTSxLQUExQixBQUFlLEFBQWdCLEFBQy9CO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBRVo7O0FBQ0E7WUFBSSxTQUFTLElBQWIsQUFBYSxBQUFJLEFBQ2pCO2VBQUEsQUFBTyxrQkFBUCxBQUF5QixBQUN6QjtlQUFBLEFBQU8sU0FBUyxZQUFZLEFBQzFCO2NBQUksWUFBWSxTQUFBLEFBQVMsSUFBVCxBQUFhLFVBQWIsQUFBdUIsT0FBTyxPQUE5QyxBQUFnQixBQUFxQyxBQUNyRDtjQUFJLE9BQU8sU0FBQSxBQUFTLE9BQVQsQUFBZ0IsV0FBM0IsQUFBVyxBQUEyQixBQUN0QztrQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNiO0FBSkQsQUFLRDtBQWJELEFBZUE7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBLGEsQUFFRCxXQUFXLFlBQU0sQUFDZjtVQUFJLE1BQUEsQUFBSyxNQUFULEFBQWUsY0FBYyxBQUMzQjsrQkFDRSxjQUFBOztzQkFBQTt3QkFBQSxBQUNFO0FBREY7QUFBQSxTQUFBLGtCQUNFLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxXQURGLEFBQ0UsQUFDQSxrQ0FBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsV0FBZSxxQkFBQSxBQUFLLE1BQUwsQUFBVyxhQUY1QixBQUVFLEFBQXVDLEFBQ3ZDLHVCQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxXQUFlLHFCQUFBLEFBQUssTUFBTCxBQUFXLGFBSjlCLEFBQ0UsQUFHRSxBQUF1QyxBQUc1QztBQUNGO0E7Ozs7OzZCQUVRLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSw0Q0FDVSxLQUFSLEFBQVk7b0JBQVo7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLHdDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQTtjQUFBLEFBQ08sQUFDTDtrQkFBVSxLQUZaLEFBRWlCLEFBQ2Y7Z0JBSEYsQUFHUyxBQUNQO2VBQU8sRUFBRSxjQUpYLEFBSVMsQUFBZ0I7O29CQUp6QjtzQkFGRixBQUVFLEFBTUM7QUFORDtBQUNFLGVBSEosQUFRRyxBQUFLLEFBQ04sNEJBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDVSxBQUNSO2NBRkYsQUFFTyxBQUNMO2lCQUhGLEFBR1csQUFDVDtlQUFPLEVBQUUsV0FKWCxBQUlTLEFBQWE7O29CQUp0QjtzQkFmVixBQUNFLEFBR0UsQUFTRSxBQUNFLEFBQ0UsQUFZWDtBQVpXO0FBQ0U7Ozs7O0FBY2hCLEEsQUF0RitCOztrQkFzRi9CLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvdXNlci9EZXNrdG9wL2NvbGxlZ2UvQmxvY2tjaGFpbi9hY2FkZW1pYyJ9