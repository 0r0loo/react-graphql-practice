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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.jsx\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/chotaegyu/dev/inflearn/jung-jae-nam/react-graphql/client/components/MsgList.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar UserIds = ['roy', 'jay'];\n\nvar getRandomUserId = function getRandomUserId() {\n  return UserIds[Math.round(Math.random())];\n};\n\nvar MsgList = function MsgList(_ref) {\n  _s();\n\n  var smsgs = _ref.smsgs,\n      users = _ref.users;\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)(),\n      _useRouter$query$user = _useRouter.query.userId,\n      userId = _useRouter$query$user === void 0 ? '' : _useRouter$query$user;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(smsgs),\n      msgs = _useState[0],\n      setMsgs = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),\n      editingId = _useState2[0],\n      setEditingId = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true),\n      hasNext = _useState3[0],\n      setHasNext = _useState3[1];\n\n  var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n  var intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_8__.default)(fetchMoreEl);\n\n  var onCreate = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(text) {\n      var newMsg;\n      return _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)('post', '/messages', {\n                text: text,\n                userId: userId\n              });\n\n            case 2:\n              newMsg = _context.sent;\n\n              if (newMsg) {\n                _context.next = 5;\n                break;\n              }\n\n              throw Error('somthing wrong');\n\n            case 5:\n              setMsgs(function (prev) {\n                return [newMsg].concat((0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(prev));\n              });\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onCreate(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var onUpdate = /*#__PURE__*/function () {\n    var _ref3 = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(text, id) {\n      var newMsg;\n      return _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)('put', \"/messages/\".concat(id), {\n                text: text,\n                userId: userId\n              });\n\n            case 2:\n              newMsg = _context2.sent;\n\n              if (newMsg) {\n                _context2.next = 5;\n                break;\n              }\n\n              throw Error('somthing wrong');\n\n            case 5:\n              setMsgs(function (msgs) {\n                var targetIndex = msgs.findIndex(function (msg) {\n                  return msg.id === id;\n                });\n                if (targetIndex < 0) return;\n\n                var newMsgs = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs);\n\n                newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {\n                  text: text\n                }));\n                return newMsgs;\n              });\n              doneEdit();\n\n            case 7:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function onUpdate(_x2, _x3) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var doneEdit = function doneEdit() {\n    return setEditingId(null);\n  };\n\n  var _onDelete = /*#__PURE__*/function () {\n    var _ref4 = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(id) {\n      var receviedId;\n      return _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)('delete', \"/messages/\".concat(id), {\n                params: {\n                  userId: userId\n                }\n              });\n\n            case 2:\n              receviedId = _context3.sent;\n              setMsgs(function (msgs) {\n                var targetIndex = msgs.findIndex(function (msg) {\n                  return msg.id === '' + receviedId;\n                });\n                if (targetIndex < 0) return;\n\n                var newMsgs = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs);\n\n                newMsgs.splice(targetIndex, 1);\n                return newMsgs;\n              });\n\n            case 4:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function onDelete(_x4) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  var getMessages = /*#__PURE__*/function () {\n    var _ref5 = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4() {\n      var _msgs;\n\n      var newMsgs;\n      return _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.next = 2;\n              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)('get', '/messages', {\n                params: {\n                  cursor: ((_msgs = msgs[msgs.length - 1]) === null || _msgs === void 0 ? void 0 : _msgs.id) || ''\n                }\n              });\n\n            case 2:\n              newMsgs = _context4.sent;\n\n              if (!(newMsgs.length === 0)) {\n                _context4.next = 6;\n                break;\n              }\n\n              setHasNext(false);\n              return _context4.abrupt(\"return\");\n\n            case 6:\n              setMsgs(function (msgs) {\n                return [].concat((0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs), (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newMsgs));\n              });\n\n            case 7:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function getMessages() {\n      return _ref5.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    if (hasNext && intersecting) getMessages();\n  }, [intersecting]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__.default, {\n      mutate: onCreate\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"ul\", {\n      className: \"messages\",\n      children: msgs.map(function (x) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, x), {}, {\n          onUpdate: onUpdate,\n          onDelete: function onDelete() {\n            return _onDelete(x.id);\n          },\n          startEdit: function startEdit() {\n            return setEditingId(x.id);\n          },\n          isEditing: editingId === x.id,\n          myId: userId,\n          user: users[x.userId]\n        }), x.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n      ref: fetchMoreEl\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(MsgList, \"uN/qvKT9TFZxoWpHsRhSHjv0abU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter, _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_8__.default];\n});\n\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\n\nvar _c;\n\n$RefreshReg$(_c, \"MsgList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FKWjtBQUtFLG1CQUFTLEVBQUU7QUFBQSxtQkFBTVgsWUFBWSxDQUFDeUIsQ0FBQyxDQUFDZCxFQUFILENBQWxCO0FBQUEsV0FMYjtBQU1FLG1CQUFTLEVBQUVaLFNBQVMsS0FBSzBCLENBQUMsQ0FBQ2QsRUFON0I7QUFPRSxjQUFJLEVBQUVmLE1BUFI7QUFRRSxjQUFJLEVBQUVGLEtBQUssQ0FBQytCLENBQUMsQ0FBQzdCLE1BQUg7QUFSYixZQUNPNkIsQ0FBQyxDQUFDZCxFQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBZ0JFO0FBQUssU0FBRyxFQUFFUjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkY7QUFBQSxrQkFERjtBQW9CRCxDQWpGRDs7R0FBTVg7VUFHQVIsb0RBS2lCQzs7O0tBUmpCTztBQW1GTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanN4PzhjZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB1c2VJbmZpbml0ZVNjcm9sbCBmcm9tICcuLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbCc7XG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9mZXRjaGVyJztcbmNvbnN0IFVzZXJJZHMgPSBbJ3JveScsICdqYXknXTtcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XG5cbmNvbnN0IE1zZ0xpc3QgPSAoeyBzbXNncywgdXNlcnMgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgcXVlcnk6IHsgdXNlcklkID0gJycgfSxcbiAgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShzbXNncyk7XG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2hhc05leHQsIHNldEhhc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IGZldGNoTW9yZUVsID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBpbnRlcnNlY3RpbmcgPSB1c2VJbmZpbml0ZVNjcm9sbChmZXRjaE1vcmVFbCk7XG5cbiAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyAodGV4dCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3Bvc3QnLCAnL21lc3NhZ2VzJywgeyB0ZXh0LCB1c2VySWQgfSk7XG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb210aGluZyB3cm9uZycpO1xuICAgIHNldE1zZ3MoKHByZXYpID0+IFtuZXdNc2csIC4uLnByZXZdKTtcbiAgfTtcblxuICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3B1dCcsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KTtcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ3NvbXRoaW5nIHdyb25nJyk7XG4gICAgc2V0TXNncygobXNncykgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybjtcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xuICAgICAgICAuLi5tc2dzW3RhcmdldEluZGV4XSxcbiAgICAgICAgdGV4dCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ld01zZ3M7XG4gICAgfSk7XG4gICAgZG9uZUVkaXQoKTtcbiAgfTtcblxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcbiAgY29uc3Qgb25EZWxldGUgPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCByZWNldmllZElkID0gYXdhaXQgZmV0Y2hlcignZGVsZXRlJywgYC9tZXNzYWdlcy8ke2lkfWAsIHtcbiAgICAgIHBhcmFtczogeyB1c2VySWQgfSxcbiAgICB9KTtcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gJycgKyByZWNldmllZElkKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybjtcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBuZXdNc2dzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy9tZXNzYWdlcycsIHtcbiAgICAgIHBhcmFtczogeyBjdXJzb3I6IG1zZ3NbbXNncy5sZW5ndGggLSAxXT8uaWQgfHwgJycgfSxcbiAgICB9KTtcbiAgICBpZiAobmV3TXNncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEhhc05leHQoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbLi4ubXNncywgLi4ubmV3TXNnc10pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGhhc05leHQgJiYgaW50ZXJzZWN0aW5nKSBnZXRNZXNzYWdlcygpO1xuICB9LCBbaW50ZXJzZWN0aW5nXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cbiAgICAgICAge21zZ3MubWFwKCh4KSA9PiAoXG4gICAgICAgICAgPE1zZ0l0ZW1cbiAgICAgICAgICAgIGtleT17eC5pZH1cbiAgICAgICAgICAgIHsuLi54fVxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxuICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfVxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XG4gICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cbiAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cbiAgICAgICAgICAgIHVzZXI9e3VzZXJzW3gudXNlcklkXX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2IHJlZj17ZmV0Y2hNb3JlRWx9PjwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcbiJdLCJuYW1lcyI6WyJNc2dJdGVtIiwiTXNnSW5wdXQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZVJvdXRlciIsInVzZUluZmluaXRlU2Nyb2xsIiwiZmV0Y2hlciIsIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJNc2dMaXN0Iiwic21zZ3MiLCJ1c2VycyIsInF1ZXJ5IiwidXNlcklkIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJoYXNOZXh0Iiwic2V0SGFzTmV4dCIsImZldGNoTW9yZUVsIiwiaW50ZXJzZWN0aW5nIiwib25DcmVhdGUiLCJ0ZXh0IiwibmV3TXNnIiwiRXJyb3IiLCJwcmV2Iiwib25VcGRhdGUiLCJpZCIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25EZWxldGUiLCJwYXJhbXMiLCJyZWNldmllZElkIiwiZ2V0TWVzc2FnZXMiLCJjdXJzb3IiLCJsZW5ndGgiLCJtYXAiLCJ4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgList.jsx\n");

/***/ })

});