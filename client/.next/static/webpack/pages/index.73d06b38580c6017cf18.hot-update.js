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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.jsx\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/chotaegyu/dev/inflearn/jung-jae-nam/react-graphql/client/components/MsgList.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar UserIds = ['roy', 'jay'];\n\nvar getRandomUserId = function getRandomUserId() {\n  return UserIds[Math.round(Math.random())];\n};\n\nvar originalMsgs = Array(50).fill(0).map(function (_, i) {\n  return {\n    id: 50 - i,\n    userId: getRandomUserId(),\n    timestamp: 1234567890123 + i * 1000 * 60,\n    text: \"\".concat(50 - i, \" mock text\")\n  };\n});\n\nvar MsgList = function MsgList() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(originalMsgs),\n      msgs = _useState[0],\n      setMsgs = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      editingId = _useState2[0],\n      setEditingId = _useState2[1];\n\n  var onCreate = function onCreate(text) {\n    var newMsg = {\n      id: msgs.length + 1,\n      userId: getRandomUserId(),\n      timestamp: Date.now(),\n      text: \"\".concat(msgs.length + 1, \" \").concat(text)\n    };\n    setMsgs(function (prev) {\n      return [newMsg].concat((0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(prev));\n    });\n  };\n\n  var onUpdate = function onUpdate(text, id) {\n    setMsgs(function (msgs) {\n      var targetIndex = msgs.findIndex(function (msg) {\n        return msg.id === id;\n      });\n      if (targetIndex < 0) return;\n\n      var newMsgs = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs);\n\n      newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {\n        text: text\n      }));\n      return newMsgs;\n    });\n    doneEdit();\n  };\n\n  var doneEdit = function doneEdit() {\n    return setEditingId(null);\n  };\n\n  var _onDelete = function onDelete(id) {\n    setMsgs(function (msgs) {\n      var targetIndex = msgs.findIndex(function (msg) {\n        return msg.id === id;\n      });\n      if (targetIndex < 0) return;\n\n      var newMsgs = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs);\n\n      newMsgs.splice(targetIndex, 1);\n      console.log(newMsgs);\n      return newMsgs;\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__.default, {\n      mutate: onCreate\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"ul\", {\n      className: \"messages\",\n      children: msgs.map(function (x) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, x), {}, {\n          onUpdate: onUpdate,\n          onDelete: function onDelete() {\n            return _onDelete(x.id);\n          },\n          startEdit: function startEdit() {\n            return setEditingId(x.id);\n          },\n          isEditing: editingId === x.id\n        }), x.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(MsgList, \"01fMYNZrB/VzC7UxNBW1xkTAcyg=\");\n\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\n\nvar _c;\n\n$RefreshReg$(_c, \"MsgList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEIsRUFBSixLQUFXQSxFQUFwQjtBQUFBLE9BQWYsQ0FBcEI7QUFDQSxVQUFJZ0IsV0FBVyxHQUFHLENBQWxCLEVBQXFCOztBQUNyQixVQUFNRyxPQUFPLEdBQUcsMkpBQUlkLElBQVAsQ0FBYjs7QUFDQWMsTUFBQUEsT0FBTyxDQUFDQyxNQUFSLENBQWVKLFdBQWYsRUFBNEIsQ0FBNUI7QUFDQU8sTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLE9BQVo7QUFDQSxhQUFPQSxPQUFQO0FBQ0QsS0FQTSxDQUFQO0FBUUQsR0FURDs7QUFXQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLDhDQUFEO0FBQVUsWUFBTSxFQUFFVjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUEsZ0JBQ0dKLElBQUksQ0FBQ1IsR0FBTCxDQUFTLFVBQUM0QixDQUFEO0FBQUEsNEJBQ1IsOERBQUMsNkNBQUQsa0NBRU1BLENBRk47QUFHRSxrQkFBUSxFQUFFVixRQUhaO0FBSUUsa0JBQVEsRUFBRTtBQUFBLG1CQUFNTyxTQUFRLENBQUNHLENBQUMsQ0FBQ3pCLEVBQUgsQ0FBZDtBQUFBLFdBSlo7QUFLRSxtQkFBUyxFQUFFO0FBQUEsbUJBQU1RLFlBQVksQ0FBQ2lCLENBQUMsQ0FBQ3pCLEVBQUgsQ0FBbEI7QUFBQSxXQUxiO0FBTUUsbUJBQVMsRUFBRU8sU0FBUyxLQUFLa0IsQ0FBQyxDQUFDekI7QUFON0IsWUFDT3lCLENBQUMsQ0FBQ3pCLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFERjtBQWlCRCxDQXpERDs7R0FBTUk7O0tBQUFBO0FBMkROLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qc3g/OGNlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnSXRlbSBmcm9tICcuL01zZ0l0ZW0nO1xuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFVzZXJJZHMgPSBbJ3JveScsICdqYXknXTtcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XG5cbmNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxuICAuZmlsbCgwKVxuICAubWFwKChfLCBpKSA9PiAoe1xuICAgIGlkOiA1MCAtIGksXG4gICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyBpICogMTAwMCAqIDYwLFxuICAgIHRleHQ6IGAkezUwIC0gaX0gbW9jayB0ZXh0YCxcbiAgfSkpO1xuXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpO1xuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgb25DcmVhdGUgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IHtcbiAgICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXG4gICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcbiAgICB9O1xuICAgIHNldE1zZ3MoKHByZXYpID0+IFtuZXdNc2csIC4uLnByZXZdKTtcbiAgfTtcblxuICBjb25zdCBvblVwZGF0ZSA9ICh0ZXh0LCBpZCkgPT4ge1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm47XG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIHtcbiAgICAgICAgLi4ubXNnc1t0YXJnZXRJbmRleF0sXG4gICAgICAgIHRleHQsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXdNc2dzO1xuICAgIH0pO1xuICAgIGRvbmVFZGl0KCk7XG4gIH07XG5cbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XG4gIGNvbnN0IG9uRGVsZXRlID0gKGlkKSA9PiB7XG4gICAgc2V0TXNncygobXNncykgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybjtcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XG4gICAgICBjb25zb2xlLmxvZyhuZXdNc2dzKTtcbiAgICAgIHJldHVybiBuZXdNc2dzO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XG4gICAgICAgIHttc2dzLm1hcCgoeCkgPT4gKFxuICAgICAgICAgIDxNc2dJdGVtXG4gICAgICAgICAgICBrZXk9e3guaWR9XG4gICAgICAgICAgICB7Li4ueH1cbiAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX1cbiAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfVxuICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcbiJdLCJuYW1lcyI6WyJNc2dJdGVtIiwiTXNnSW5wdXQiLCJ1c2VTdGF0ZSIsIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJvcmlnaW5hbE1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsIk1zZ0xpc3QiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibGVuZ3RoIiwiRGF0ZSIsIm5vdyIsInByZXYiLCJvblVwZGF0ZSIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25EZWxldGUiLCJjb25zb2xlIiwibG9nIiwieCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.jsx\n");

/***/ })

});