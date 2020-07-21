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

var _certificate = require('../certificate.json');

var _certificate2 = _interopRequireDefault(_certificate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\user\\Desktop\\college\\Blockchain\\academic\\components\\CourseRow.js';


var CourseRow = function (_Component) {
  (0, _inherits3.default)(CourseRow, _Component);

  function CourseRow() {
    (0, _classCallCheck3.default)(this, CourseRow);

    return (0, _possibleConstructorReturn3.default)(this, (CourseRow.__proto__ || (0, _getPrototypeOf2.default)(CourseRow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CourseRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell,
          Body = _semanticUiReact.Table.Body;

      var reptiles = ['alligator', 'snake', 'lizard'];
      //const { id, request, approversCount } = this.props; 
      console.log(_certificate2.default.transcript.length);
      return _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _certificate2.default.transcript[0].courseCode), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _certificate2.default.transcript[0].name), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _certificate2.default.transcript[0].grade), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _certificate2.default.transcript[0].courseCredit), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _certificate2.default.transcript[0].semester), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _certificate2.default.transcript[0].examinationDate)), _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _certificate2.default.transcript[1].courseCode), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _certificate2.default.transcript[1].name), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _certificate2.default.transcript[1].grade), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _certificate2.default.transcript[1].courseCredit), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _certificate2.default.transcript[1].semester), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _certificate2.default.transcript[1].examinationDate)), _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _certificate2.default.transcript[2].courseCode), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _certificate2.default.transcript[2].name), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _certificate2.default.transcript[2].grade), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _certificate2.default.transcript[2].courseCredit), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _certificate2.default.transcript[2].semester), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _certificate2.default.transcript[2].examinationDate)));
    }
  }]);

  return CourseRow;
}(_react.Component);

exports.default = CourseRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvdXJzZVJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiY2VydERhdGEiLCJDb3Vyc2VSb3ciLCJSb3ciLCJDZWxsIiwiQm9keSIsInJlcHRpbGVzIiwiY29uc29sZSIsImxvZyIsInRyYW5zY3JpcHQiLCJsZW5ndGgiLCJjb3Vyc2VDb2RlIiwibmFtZSIsImdyYWRlIiwiY291cnNlQ3JlZGl0Iiwic2VtZXN0ZXIiLCJleGFtaW5hdGlvbkRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBTyxBQUFjOzs7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs2QkFDSztVQUFBLEFBQ0MsTUFERCxBQUNxQix1QkFEckIsQUFDQztVQURELEFBQ00sT0FETixBQUNxQix1QkFEckIsQUFDTTtVQUROLEFBQ1ksT0FEWixBQUNxQix1QkFEckIsQUFDWSxBQUNuQjs7VUFBTSxXQUFXLENBQUEsQUFBQyxhQUFELEFBQWMsU0FBL0IsQUFBaUIsQUFBdUIsQUFDeEM7QUFDQTtjQUFBLEFBQVEsSUFBSSxzQkFBQSxBQUFTLFdBQXJCLEFBQWdDLEFBQ2hDOzZCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsK0JBQU8sQUFBUyxXQUFULEFBQW9CLEdBRDdCLEFBQ0UsQUFBOEIsQUFDOUIsNkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsK0JBQU8sQUFBUyxXQUFULEFBQW9CLEdBRjdCLEFBRUUsQUFBOEIsQUFDOUIsdUJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsK0JBQU8sQUFBUyxXQUFULEFBQW9CLEdBSDdCLEFBR0UsQUFBOEIsQUFDOUIsd0JBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsK0JBQU8sQUFBUyxXQUFULEFBQW9CLEdBSjdCLEFBSUUsQUFBOEIsQUFDOUIsK0JBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsK0JBQU8sQUFBUyxXQUFULEFBQW9CLEdBTDdCLEFBS0UsQUFBOEIsQUFDOUIsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsK0JBQU8sQUFBUyxXQUFULEFBQW9CLEdBUC9CLEFBQ0UsQUFNRSxBQUE4QixBQUVoQyxtQ0FBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSwrQkFBTyxBQUFTLFdBQVQsQUFBb0IsR0FEN0IsQUFDRSxBQUE4QixBQUM5Qiw2QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSwrQkFBTyxBQUFTLFdBQVQsQUFBb0IsR0FGN0IsQUFFRSxBQUE4QixBQUM5Qix1QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSwrQkFBTyxBQUFTLFdBQVQsQUFBb0IsR0FIN0IsQUFHRSxBQUE4QixBQUM5Qix3QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSwrQkFBTyxBQUFTLFdBQVQsQUFBb0IsR0FKN0IsQUFJRSxBQUE4QixBQUM5QiwrQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSwrQkFBTyxBQUFTLFdBQVQsQUFBb0IsR0FMN0IsQUFLRSxBQUE4QixBQUM5QiwyQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSwrQkFBTyxBQUFTLFdBQVQsQUFBb0IsR0FmL0IsQUFTRSxBQU1FLEFBQThCLEFBRWhDLG1DQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLCtCQUFPLEFBQVMsV0FBVCxBQUFvQixHQUQ3QixBQUNFLEFBQThCLEFBQzlCLDZCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLCtCQUFPLEFBQVMsV0FBVCxBQUFvQixHQUY3QixBQUVFLEFBQThCLEFBQzlCLHVCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLCtCQUFPLEFBQVMsV0FBVCxBQUFvQixHQUg3QixBQUdFLEFBQThCLEFBQzlCLHdCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLCtCQUFPLEFBQVMsV0FBVCxBQUFvQixHQUo3QixBQUlFLEFBQThCLEFBQzlCLCtCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLCtCQUFPLEFBQVMsV0FBVCxBQUFvQixHQUw3QixBQUtFLEFBQThCLEFBQzlCLDJCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLCtCQUFPLEFBQVMsV0FBVCxBQUFvQixHQXhCakMsQUFDRSxBQWlCRSxBQU1FLEFBQThCLEFBSXJDOzs7OztBQUdILEEsQUFyQ3dCOztrQkFxQ3hCLEFBQWUiLCJmaWxlIjoiQ291cnNlUm93LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3VzZXIvRGVza3RvcC9jb2xsZWdlL0Jsb2NrY2hhaW4vYWNhZGVtaWMifQ==