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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.jsx\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/chotaegyu/dev/inflearn/jung-jae-nam/react-graphql/client/components/MsgList.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar UserIds = ['roy', 'jay'];\n\nvar getRandomUserId = function getRandomUserId() {\n  return UserIds[Math.round(Math.random())];\n};\n\nvar MsgList = function MsgList() {\n  _s();\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)(),\n      _useRouter$query$user = _useRouter.query.userId,\n      userId = _useRouter$query$user === void 0 ? '' : _useRouter$query$user;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),\n      msgs = _useState[0],\n      setMsgs = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),\n      editingId = _useState2[0],\n      setEditingId = _useState2[1];\n\n  var onCreate = /*#__PURE__*/function () {\n    var _ref = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(text) {\n      var newMsg;\n      return _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_8__.default)('post', '/messages', {\n                text: text,\n                userId: userId\n              });\n\n            case 2:\n              newMsg = _context.sent;\n\n              if (newMsg) {\n                _context.next = 5;\n                break;\n              }\n\n              throw Error('somthing wrong');\n\n            case 5:\n              setMsgs(function (prev) {\n                return [newMsg].concat((0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(prev));\n              });\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onCreate(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var onUpdate = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(text, id) {\n      var newMsg;\n      return _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_8__.default)('put', \"/messages/\".concat(id), {\n                text: text,\n                userId: userId\n              });\n\n            case 2:\n              newMsg = _context2.sent;\n\n              if (newMsg) {\n                _context2.next = 5;\n                break;\n              }\n\n              throw Error('somthing wrong');\n\n            case 5:\n              setMsgs(function (msgs) {\n                var targetIndex = msgs.findIndex(function (msg) {\n                  return msg.id === id;\n                });\n                if (targetIndex < 0) return;\n\n                var newMsgs = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs);\n\n                newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {\n                  text: text\n                }));\n                return newMsgs;\n              });\n              doneEdit();\n\n            case 7:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function onUpdate(_x2, _x3) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var doneEdit = function doneEdit() {\n    return setEditingId(null);\n  };\n\n  var _onDelete = /*#__PURE__*/function () {\n    var _ref3 = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(id) {\n      var receviedId;\n      return _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_8__.default)('delete', \"/messages/\".concat(id), {\n                userId: userId\n              });\n\n            case 2:\n              receviedId = _context3.sent;\n              setMsgs(function (msgs) {\n                var targetIndex = msgs.findIndex(function (msg) {\n                  return msg.id === receviedId;\n                });\n                if (targetIndex < 0) return;\n\n                var newMsgs = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs);\n\n                newMsgs.splice(targetIndex, 1);\n                return newMsgs;\n              });\n\n            case 4:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function onDelete(_x4) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var getMessages = /*#__PURE__*/function () {\n    var _ref4 = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4() {\n      var msgs;\n      return _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.next = 2;\n              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_8__.default)('get', '/messages');\n\n            case 2:\n              msgs = _context4.sent;\n              setMsgs(msgs);\n\n            case 4:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function getMessages() {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    getMessages();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__.default, {\n      mutate: onCreate\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"ul\", {\n      className: \"messages\",\n      children: msgs.map(function (x) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, x), {}, {\n          onUpdate: onUpdate,\n          onDelete: function onDelete() {\n            return _onDelete(x.id);\n          },\n          startEdit: function startEdit() {\n            return setEditingId(x.id);\n          },\n          isEditing: editingId === x.id,\n          myId: userId\n        }), x.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(MsgList, \"nWB+/AXLwJHNSoPrq4yNHCWHUw8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];\n});\n\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\n\nvar _c;\n\n$RefreshReg$(_c, \"MsgList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0EsSUFBTU0sT0FBTyxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FBaEI7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLFNBQU1ELE9BQU8sQ0FBQ0UsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxFQUFYLENBQUQsQ0FBYjtBQUFBLENBQXhCOztBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsbUJBRUlQLHNEQUFTLEVBRmI7QUFBQSx5Q0FDRVEsS0FERixDQUNXQyxNQURYO0FBQUEsTUFDV0EsTUFEWCxzQ0FDb0IsRUFEcEI7O0FBR0Esa0JBQXdCViwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQSxNQUFPVyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBa0NaLCtDQUFRLENBQUMsSUFBRCxDQUExQztBQUFBLE1BQU9hLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsTUFBTUMsUUFBUTtBQUFBLG1VQUFHLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ01kLGlEQUFPLENBQUMsTUFBRCxFQUFTLFdBQVQsRUFBc0I7QUFBRWMsZ0JBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRTixnQkFBQUEsTUFBTSxFQUFOQTtBQUFSLGVBQXRCLENBRGI7O0FBQUE7QUFDVE8sY0FBQUEsTUFEUzs7QUFBQSxrQkFFVkEsTUFGVTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxvQkFFSUMsS0FBSyxDQUFDLGdCQUFELENBRlQ7O0FBQUE7QUFHZk4sY0FBQUEsT0FBTyxDQUFDLFVBQUNPLElBQUQ7QUFBQSx3QkFBV0YsTUFBWCxvS0FBc0JFLElBQXRCO0FBQUEsZUFBRCxDQUFQOztBQUhlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJKLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFNQSxNQUFNSyxRQUFRO0FBQUEsb1VBQUcsa0JBQU9KLElBQVAsRUFBYUssRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNNbkIsaURBQU8sQ0FBQyxLQUFELHNCQUFxQm1CLEVBQXJCLEdBQTJCO0FBQUVMLGdCQUFBQSxJQUFJLEVBQUpBLElBQUY7QUFBUU4sZ0JBQUFBLE1BQU0sRUFBTkE7QUFBUixlQUEzQixDQURiOztBQUFBO0FBQ1RPLGNBQUFBLE1BRFM7O0FBQUEsa0JBRVZBLE1BRlU7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBRUlDLEtBQUssQ0FBQyxnQkFBRCxDQUZUOztBQUFBO0FBR2ZOLGNBQUFBLE9BQU8sQ0FBQyxVQUFDRCxJQUFELEVBQVU7QUFDaEIsb0JBQU1XLFdBQVcsR0FBR1gsSUFBSSxDQUFDWSxTQUFMLENBQWUsVUFBQ0MsR0FBRDtBQUFBLHlCQUFTQSxHQUFHLENBQUNILEVBQUosS0FBV0EsRUFBcEI7QUFBQSxpQkFBZixDQUFwQjtBQUNBLG9CQUFJQyxXQUFXLEdBQUcsQ0FBbEIsRUFBcUI7O0FBQ3JCLG9CQUFNRyxPQUFPLEdBQUcsMkpBQUlkLElBQVAsQ0FBYjs7QUFDQWMsZ0JBQUFBLE9BQU8sQ0FBQ0MsTUFBUixDQUFlSixXQUFmLEVBQTRCLENBQTVCLGtDQUNLWCxJQUFJLENBQUNXLFdBQUQsQ0FEVDtBQUVFTixrQkFBQUEsSUFBSSxFQUFKQTtBQUZGO0FBSUEsdUJBQU9TLE9BQVA7QUFDRCxlQVRNLENBQVA7QUFVQUUsY0FBQUEsUUFBUTs7QUFiTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSUCxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBZ0JBLE1BQU1PLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsV0FBTWIsWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQSxHQUFqQjs7QUFDQSxNQUFNYyxTQUFRO0FBQUEsb1VBQUcsa0JBQU9QLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDVW5CLGlEQUFPLENBQUMsUUFBRCxzQkFBd0JtQixFQUF4QixHQUE4QjtBQUFFWCxnQkFBQUEsTUFBTSxFQUFOQTtBQUFGLGVBQTlCLENBRGpCOztBQUFBO0FBQ1RtQixjQUFBQSxVQURTO0FBRWZqQixjQUFBQSxPQUFPLENBQUMsVUFBQ0QsSUFBRCxFQUFVO0FBQ2hCLG9CQUFNVyxXQUFXLEdBQUdYLElBQUksQ0FBQ1ksU0FBTCxDQUFlLFVBQUNDLEdBQUQ7QUFBQSx5QkFBU0EsR0FBRyxDQUFDSCxFQUFKLEtBQVdRLFVBQXBCO0FBQUEsaUJBQWYsQ0FBcEI7QUFDQSxvQkFBSVAsV0FBVyxHQUFHLENBQWxCLEVBQXFCOztBQUNyQixvQkFBTUcsT0FBTyxHQUFHLDJKQUFJZCxJQUFQLENBQWI7O0FBQ0FjLGdCQUFBQSxPQUFPLENBQUNDLE1BQVIsQ0FBZUosV0FBZixFQUE0QixDQUE1QjtBQUNBLHVCQUFPRyxPQUFQO0FBQ0QsZUFOTSxDQUFQOztBQUZlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJHLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFXQSxNQUFNRSxXQUFXO0FBQUEsb1VBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDQzVCLGlEQUFPLENBQUMsS0FBRCxFQUFRLFdBQVIsQ0FEUjs7QUFBQTtBQUNaUyxjQUFBQSxJQURZO0FBRWxCQyxjQUFBQSxPQUFPLENBQUNELElBQUQsQ0FBUDs7QUFGa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWG1CLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBS0EvQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCtCLElBQUFBLFdBQVc7QUFDWixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyw4Q0FBRDtBQUFVLFlBQU0sRUFBRWY7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBLGdCQUNHSixJQUFJLENBQUNvQixHQUFMLENBQVMsVUFBQ0MsQ0FBRDtBQUFBLDRCQUNSLDhEQUFDLDZDQUFELGtDQUVNQSxDQUZOO0FBR0Usa0JBQVEsRUFBRVosUUFIWjtBQUlFLGtCQUFRLEVBQUU7QUFBQSxtQkFBTVEsU0FBUSxDQUFDSSxDQUFDLENBQUNYLEVBQUgsQ0FBZDtBQUFBLFdBSlo7QUFLRSxtQkFBUyxFQUFFO0FBQUEsbUJBQU1QLFlBQVksQ0FBQ2tCLENBQUMsQ0FBQ1gsRUFBSCxDQUFsQjtBQUFBLFdBTGI7QUFNRSxtQkFBUyxFQUFFUixTQUFTLEtBQUttQixDQUFDLENBQUNYLEVBTjdCO0FBT0UsY0FBSSxFQUFFWDtBQVBSLFlBQ09zQixDQUFDLENBQUNYLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFERjtBQWtCRCxDQXBFRDs7R0FBTWI7VUFHQVA7OztLQUhBTztBQXNFTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanN4PzhjZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2ZldGNoZXInO1xuY29uc3QgVXNlcklkcyA9IFsncm95JywgJ2pheSddO1xuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcblxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHF1ZXJ5OiB7IHVzZXJJZCA9ICcnIH0sXG4gIH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyAodGV4dCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3Bvc3QnLCAnL21lc3NhZ2VzJywgeyB0ZXh0LCB1c2VySWQgfSk7XG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb210aGluZyB3cm9uZycpO1xuICAgIHNldE1zZ3MoKHByZXYpID0+IFtuZXdNc2csIC4uLnByZXZdKTtcbiAgfTtcblxuICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3B1dCcsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KTtcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ3NvbXRoaW5nIHdyb25nJyk7XG4gICAgc2V0TXNncygobXNncykgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybjtcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xuICAgICAgICAuLi5tc2dzW3RhcmdldEluZGV4XSxcbiAgICAgICAgdGV4dCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ld01zZ3M7XG4gICAgfSk7XG4gICAgZG9uZUVkaXQoKTtcbiAgfTtcblxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcbiAgY29uc3Qgb25EZWxldGUgPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCByZWNldmllZElkID0gYXdhaXQgZmV0Y2hlcignZGVsZXRlJywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgdXNlcklkIH0pO1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSByZWNldmllZElkKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybjtcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtc2dzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy9tZXNzYWdlcycpO1xuICAgIHNldE1zZ3MobXNncyk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRNZXNzYWdlcygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cbiAgICAgICAge21zZ3MubWFwKCh4KSA9PiAoXG4gICAgICAgICAgPE1zZ0l0ZW1cbiAgICAgICAgICAgIGtleT17eC5pZH1cbiAgICAgICAgICAgIHsuLi54fVxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxuICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfVxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XG4gICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cbiAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0O1xuIl0sIm5hbWVzIjpbIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiZmV0Y2hlciIsIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJNc2dMaXN0IiwicXVlcnkiLCJ1c2VySWQiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwidGV4dCIsIm5ld01zZyIsIkVycm9yIiwicHJldiIsIm9uVXBkYXRlIiwiaWQiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsIm9uRGVsZXRlIiwicmVjZXZpZWRJZCIsImdldE1lc3NhZ2VzIiwibWFwIiwieCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.jsx\n");

/***/ })

});