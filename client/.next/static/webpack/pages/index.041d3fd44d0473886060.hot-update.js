"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgList.jsx":
/*!********************************!*\
  !*** ./components/MsgList.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.jsx\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/chotaegyu/dev/inflearn/jung-jae-nam/react-graphql/client/components/MsgList.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar UserIds = ['roy', 'jay'];\n\nvar getRandomUserId = function getRandomUserId() {\n  return UserIds[Math.round(Math.random())];\n};\n\nvar MsgList = function MsgList() {\n  _s();\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)(),\n      _useRouter$query$user = _useRouter.query.userId,\n      userId = _useRouter$query$user === void 0 ? '' : _useRouter$query$user;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),\n      msgs = _useState[0],\n      setMsgs = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),\n      editingId = _useState2[0],\n      setEditingId = _useState2[1];\n\n  var onCreate = /*#__PURE__*/function () {\n    var _ref = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(text) {\n      var newMsg;\n      return _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_8__.default)('post', '/messages', {\n                text: text,\n                userId: userId\n              });\n\n            case 2:\n              newMsg = _context.sent;\n\n              if (newMsg) {\n                _context.next = 5;\n                break;\n              }\n\n              throw Error('somthing wrong');\n\n            case 5:\n              setMsgs(function (prev) {\n                return [newMsg].concat((0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(prev));\n              });\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onCreate(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var onUpdate = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(text, id) {\n      var newMsg;\n      return _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_8__.default)('put', \"/messages/$%{id}\", {\n                text: text,\n                userId: userId\n              });\n\n            case 2:\n              newMsg = _context2.sent;\n\n              if (newMsg) {\n                _context2.next = 5;\n                break;\n              }\n\n              throw Error('somthing wrong');\n\n            case 5:\n              setMsgs(function (msgs) {\n                var targetIndex = msgs.findIndex(function (msg) {\n                  return msg.id === id;\n                });\n                if (targetIndex < 0) return;\n\n                var newMsgs = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs);\n\n                newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {\n                  text: text\n                }));\n                return newMsgs;\n              });\n              doneEdit();\n\n            case 7:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function onUpdate(_x2, _x3) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var doneEdit = function doneEdit() {\n    return setEditingId(null);\n  };\n\n  var _onDelete = function onDelete(id) {\n    setMsgs(function (msgs) {\n      var targetIndex = msgs.findIndex(function (msg) {\n        return msg.id === id;\n      });\n      if (targetIndex < 0) return;\n\n      var newMsgs = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs);\n\n      newMsgs.splice(targetIndex, 1);\n      return newMsgs;\n    });\n  };\n\n  var getMessages = /*#__PURE__*/function () {\n    var _ref3 = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3() {\n      var msgs;\n      return _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_8__.default)('get', '/messages');\n\n            case 2:\n              msgs = _context3.sent;\n              setMsgs(msgs);\n\n            case 4:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function getMessages() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    getMessages();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__.default, {\n      mutate: onCreate\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"ul\", {\n      className: \"messages\",\n      children: msgs.map(function (x) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, x), {}, {\n          onUpdate: onUpdate,\n          onDelete: function onDelete() {\n            return _onDelete(x.id);\n          },\n          startEdit: function startEdit() {\n            return setEditingId(x.id);\n          },\n          isEditing: editingId === x.id,\n          myId: userId\n        }), x.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(MsgList, \"nWB+/AXLwJHNSoPrq4yNHCWHUw8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];\n});\n\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\n\nvar _c;\n\n$RefreshReg$(_c, \"MsgList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0EsSUFBTU0sT0FBTyxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FBaEI7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLFNBQU1ELE9BQU8sQ0FBQ0UsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxFQUFYLENBQUQsQ0FBYjtBQUFBLENBQXhCOztBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsbUJBRUlQLHNEQUFTLEVBRmI7QUFBQSx5Q0FDRVEsS0FERixDQUNXQyxNQURYO0FBQUEsTUFDV0EsTUFEWCxzQ0FDb0IsRUFEcEI7O0FBR0Esa0JBQXdCViwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQSxNQUFPVyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBa0NaLCtDQUFRLENBQUMsSUFBRCxDQUExQztBQUFBLE1BQU9hLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsTUFBTUMsUUFBUTtBQUFBLG1VQUFHLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ01kLGlEQUFPLENBQUMsTUFBRCxFQUFTLFdBQVQsRUFBc0I7QUFBRWMsZ0JBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRTixnQkFBQUEsTUFBTSxFQUFOQTtBQUFSLGVBQXRCLENBRGI7O0FBQUE7QUFDVE8sY0FBQUEsTUFEUzs7QUFBQSxrQkFFVkEsTUFGVTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxvQkFFSUMsS0FBSyxDQUFDLGdCQUFELENBRlQ7O0FBQUE7QUFHZk4sY0FBQUEsT0FBTyxDQUFDLFVBQUNPLElBQUQ7QUFBQSx3QkFBV0YsTUFBWCxvS0FBc0JFLElBQXRCO0FBQUEsZUFBRCxDQUFQOztBQUhlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJKLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFNQSxNQUFNSyxRQUFRO0FBQUEsb1VBQUcsa0JBQU9KLElBQVAsRUFBYUssRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNNbkIsaURBQU8sQ0FBQyxLQUFELHNCQUE0QjtBQUFFYyxnQkFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFOLGdCQUFBQSxNQUFNLEVBQU5BO0FBQVIsZUFBNUIsQ0FEYjs7QUFBQTtBQUNUTyxjQUFBQSxNQURTOztBQUFBLGtCQUVWQSxNQUZVO0FBQUE7QUFBQTtBQUFBOztBQUFBLG9CQUVJQyxLQUFLLENBQUMsZ0JBQUQsQ0FGVDs7QUFBQTtBQUdmTixjQUFBQSxPQUFPLENBQUMsVUFBQ0QsSUFBRCxFQUFVO0FBQ2hCLG9CQUFNVyxXQUFXLEdBQUdYLElBQUksQ0FBQ1ksU0FBTCxDQUFlLFVBQUNDLEdBQUQ7QUFBQSx5QkFBU0EsR0FBRyxDQUFDSCxFQUFKLEtBQVdBLEVBQXBCO0FBQUEsaUJBQWYsQ0FBcEI7QUFDQSxvQkFBSUMsV0FBVyxHQUFHLENBQWxCLEVBQXFCOztBQUNyQixvQkFBTUcsT0FBTyxHQUFHLDJKQUFJZCxJQUFQLENBQWI7O0FBQ0FjLGdCQUFBQSxPQUFPLENBQUNDLE1BQVIsQ0FBZUosV0FBZixFQUE0QixDQUE1QixrQ0FDS1gsSUFBSSxDQUFDVyxXQUFELENBRFQ7QUFFRU4sa0JBQUFBLElBQUksRUFBSkE7QUFGRjtBQUlBLHVCQUFPUyxPQUFQO0FBQ0QsZUFUTSxDQUFQO0FBVUFFLGNBQUFBLFFBQVE7O0FBYk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUlAsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQWdCQSxNQUFNTyxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFdBQU1iLFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUEsR0FBakI7O0FBQ0EsTUFBTWMsU0FBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ1AsRUFBRCxFQUFRO0FBQ3ZCVCxJQUFBQSxPQUFPLENBQUMsVUFBQ0QsSUFBRCxFQUFVO0FBQ2hCLFVBQU1XLFdBQVcsR0FBR1gsSUFBSSxDQUFDWSxTQUFMLENBQWUsVUFBQ0MsR0FBRDtBQUFBLGVBQVNBLEdBQUcsQ0FBQ0gsRUFBSixLQUFXQSxFQUFwQjtBQUFBLE9BQWYsQ0FBcEI7QUFDQSxVQUFJQyxXQUFXLEdBQUcsQ0FBbEIsRUFBcUI7O0FBQ3JCLFVBQU1HLE9BQU8sR0FBRywySkFBSWQsSUFBUCxDQUFiOztBQUNBYyxNQUFBQSxPQUFPLENBQUNDLE1BQVIsQ0FBZUosV0FBZixFQUE0QixDQUE1QjtBQUNBLGFBQU9HLE9BQVA7QUFDRCxLQU5NLENBQVA7QUFPRCxHQVJEOztBQVVBLE1BQU1JLFdBQVc7QUFBQSxvVUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNDM0IsaURBQU8sQ0FBQyxLQUFELEVBQVEsV0FBUixDQURSOztBQUFBO0FBQ1pTLGNBQUFBLElBRFk7QUFFbEJDLGNBQUFBLE9BQU8sQ0FBQ0QsSUFBRCxDQUFQOztBQUZrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFYa0IsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFLQTlCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkOEIsSUFBQUEsV0FBVztBQUNaLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLDhDQUFEO0FBQVUsWUFBTSxFQUFFZDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUEsZ0JBQ0dKLElBQUksQ0FBQ21CLEdBQUwsQ0FBUyxVQUFDQyxDQUFEO0FBQUEsNEJBQ1IsOERBQUMsNkNBQUQsa0NBRU1BLENBRk47QUFHRSxrQkFBUSxFQUFFWCxRQUhaO0FBSUUsa0JBQVEsRUFBRTtBQUFBLG1CQUFNUSxTQUFRLENBQUNHLENBQUMsQ0FBQ1YsRUFBSCxDQUFkO0FBQUEsV0FKWjtBQUtFLG1CQUFTLEVBQUU7QUFBQSxtQkFBTVAsWUFBWSxDQUFDaUIsQ0FBQyxDQUFDVixFQUFILENBQWxCO0FBQUEsV0FMYjtBQU1FLG1CQUFTLEVBQUVSLFNBQVMsS0FBS2tCLENBQUMsQ0FBQ1YsRUFON0I7QUFPRSxjQUFJLEVBQUVYO0FBUFIsWUFDT3FCLENBQUMsQ0FBQ1YsRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURRO0FBQUEsT0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGO0FBa0JELENBbkVEOztHQUFNYjtVQUdBUDs7O0tBSEFPO0FBcUVOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qc3g/OGNlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnSXRlbSBmcm9tICcuL01zZ0l0ZW0nO1xuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vZmV0Y2hlcic7XG5jb25zdCBVc2VySWRzID0gWydyb3knLCAnamF5J107XG5jb25zdCBnZXRSYW5kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldO1xuXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgcXVlcnk6IHsgdXNlcklkID0gJycgfSxcbiAgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jICh0ZXh0KSA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncG9zdCcsICcvbWVzc2FnZXMnLCB7IHRleHQsIHVzZXJJZCB9KTtcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ3NvbXRoaW5nIHdyb25nJyk7XG4gICAgc2V0TXNncygocHJldikgPT4gW25ld01zZywgLi4ucHJldl0pO1xuICB9O1xuXG4gIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsIGlkKSA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncHV0JywgYC9tZXNzYWdlcy8kJXtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KTtcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ3NvbXRoaW5nIHdyb25nJyk7XG4gICAgc2V0TXNncygobXNncykgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybjtcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xuICAgICAgICAuLi5tc2dzW3RhcmdldEluZGV4XSxcbiAgICAgICAgdGV4dCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ld01zZ3M7XG4gICAgfSk7XG4gICAgZG9uZUVkaXQoKTtcbiAgfTtcblxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcbiAgY29uc3Qgb25EZWxldGUgPSAoaWQpID0+IHtcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuO1xuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcbiAgICAgIHJldHVybiBuZXdNc2dzO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG1zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJyk7XG4gICAgc2V0TXNncyhtc2dzKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE1lc3NhZ2VzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7bXNncy5tYXAoKHgpID0+IChcbiAgICAgICAgICA8TXNnSXRlbVxuICAgICAgICAgICAga2V5PXt4LmlkfVxuICAgICAgICAgICAgey4uLnh9XG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxuICAgICAgICAgICAgbXlJZD17dXNlcklkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XG4iXSwibmFtZXMiOlsiTXNnSXRlbSIsIk1zZ0lucHV0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJmZXRjaGVyIiwiVXNlcklkcyIsImdldFJhbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIk1zZ0xpc3QiLCJxdWVyeSIsInVzZXJJZCIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwib25DcmVhdGUiLCJ0ZXh0IiwibmV3TXNnIiwiRXJyb3IiLCJwcmV2Iiwib25VcGRhdGUiLCJpZCIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25EZWxldGUiLCJnZXRNZXNzYWdlcyIsIm1hcCIsIngiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.jsx\n");

/***/ })

});