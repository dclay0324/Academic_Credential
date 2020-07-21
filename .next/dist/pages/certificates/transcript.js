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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../routes');

var _CourseRow = require('../../components/CourseRow');

var _CourseRow2 = _interopRequireDefault(_CourseRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\user\\Desktop\\college\\Blockchain\\academic\\pages\\certificates\\transcript.js?entry';


var Transcript = function (_Component) {
  (0, _inherits3.default)(Transcript, _Component);

  function Transcript() {
    (0, _classCallCheck3.default)(this, Transcript);

    return (0, _possibleConstructorReturn3.default)(this, (Transcript.__proto__ || (0, _getPrototypeOf2.default)(Transcript)).apply(this, arguments));
  }

  (0, _createClass3.default)(Transcript, [{
    key: 'renderRows',
    value: function renderRows() {
      //   return this.props.requests.map((request, index) => {
      return _react2.default.createElement(_CourseRow2.default
      //         key={index}
      //         id={index}
      //         request={request}
      //         address={this.props.address}
      //         approversCount={this.props.approversCount}
      , {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      });
      //   });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'Transcript'), _react2.default.createElement(_routes.Link, { route: "/certificates/success", __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'back')), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'CourseID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'Name'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'Grade'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Credit'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'Semester'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'End date'))), _react2.default.createElement(_CourseRow2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      })));
    }
  }]);

  return Transcript;
}(_react.Component);

exports.default = Transcript;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjZXJ0aWZpY2F0ZXNcXHRyYW5zY3JpcHQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIkxheW91dCIsIkxpbmsiLCJDb3Vyc2VSb3ciLCJUcmFuc2NyaXB0IiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTzs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFlOzs7Ozs7Ozs7SSxBQUVoQjs7Ozs7Ozs7Ozs7aUNBQ1UsQUFDZDtBQUNLOzZCQUNHLEFBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxPO0FBQUE7O29CQUFBO3NCQURGLEFBQ0UsQUFRUDtBQVJPO0FBQUE7QUFTTDs7Ozs2QkFFTztVQUFBLEFBQ0MsU0FERCxBQUNtQyx1QkFEbkMsQUFDQztVQURELEFBQ1MsTUFEVCxBQUNtQyx1QkFEbkMsQUFDUztVQURULEFBQ2MsYUFEZCxBQUNtQyx1QkFEbkMsQUFDYztVQURkLEFBQzBCLE9BRDFCLEFBQ21DLHVCQURuQyxBQUMwQixBQUVqQzs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsK0JBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQWE7b0JBQWI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUhKLEFBRUUsQUFDRSxBQUVGLDBCQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSw2QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0EseUJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEYsQUFHRSxBQUNBLDBCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUpGLEFBSUUsQUFDQSwyQkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FMRixBQUtFLEFBQ0EsNkJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBUk4sQUFDRSxBQUNFLEFBTUUsQUFLRiwrQkFBQSxBQUFDOztvQkFBRDtzQkFuQlIsQUFDRSxBQUtFLEFBYUksQUFLVDtBQUxTO0FBQUE7Ozs7O0EsQUFyQ2EsQUE2Q3pCOztrQkFBQSxBQUFlIiwiZmlsZSI6InRyYW5zY3JpcHQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvdXNlci9EZXNrdG9wL2NvbGxlZ2UvQmxvY2tjaGFpbi9hY2FkZW1pYyJ9