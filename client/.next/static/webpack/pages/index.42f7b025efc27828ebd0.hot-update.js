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

/***/ "./components/MsgInput.jsx":
/*!*********************************!*\
  !*** ./components/MsgInput.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/chotaegyu/dev/inflearn/jung-jae-nam/react-graphql/client/components/MsgInput.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction MsgInput(_ref) {\n  _s();\n\n  var mutate = _ref.mutate,\n      _ref$id = _ref.id,\n      id = _ref$id === void 0 ? undefined : _ref$id,\n      text = _ref.text;\n  var textRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var onSumbit = function onSumbit(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    var text = textRef.current.value;\n    textRef.current.value = '';\n    mutate(text, id);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n    className: \"messages__input\",\n    onSubmit: onSumbit,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n      ref: textRef,\n      placeholder: \"\\uB0B4\\uC6A9\\uC744 \\uC785\\uB825\\uD558\\uC138\\uC694.\",\n      defaultValue: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      children: \"\\uC644\\uB8CC\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n\n_s(MsgInput, \"w6wg8oN6T1JIeHvMfowtaM3MyjI=\");\n\n_c = MsgInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgInput);\n\nvar _c;\n\n$RefreshReg$(_c, \"MsgInput\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0lucHV0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7O0FBRUEsU0FBU0UsUUFBVCxPQUFvRDtBQUFBOztBQUFBLE1BQWhDQyxNQUFnQyxRQUFoQ0EsTUFBZ0M7QUFBQSxxQkFBeEJDLEVBQXdCO0FBQUEsTUFBeEJBLEVBQXdCLHdCQUFuQkMsU0FBbUI7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDbEQsTUFBTUMsT0FBTyxHQUFHTiw2Q0FBTSxDQUFDLElBQUQsQ0FBdEI7O0FBRUEsTUFBTU8sUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUQsSUFBQUEsQ0FBQyxDQUFDRSxlQUFGO0FBQ0EsUUFBTUwsSUFBSSxHQUFHQyxPQUFPLENBQUNLLE9BQVIsQ0FBZ0JDLEtBQTdCO0FBQ0FOLElBQUFBLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkMsS0FBaEIsR0FBd0IsRUFBeEI7QUFDQVYsSUFBQUEsTUFBTSxDQUFDRyxJQUFELEVBQU9GLEVBQVAsQ0FBTjtBQUNELEdBTkQ7O0FBUUEsc0JBQ0U7QUFBTSxhQUFTLEVBQUMsaUJBQWhCO0FBQWtDLFlBQVEsRUFBRUksUUFBNUM7QUFBQSw0QkFDRTtBQUNFLFNBQUcsRUFBRUQsT0FEUDtBQUVFLGlCQUFXLEVBQUMsb0RBRmQ7QUFHRSxrQkFBWSxFQUFFRDtBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDs7R0FyQlFKOztLQUFBQTtBQXVCVCwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzeD9iZDFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIE1zZ0lucHV0KHsgbXV0YXRlLCBpZCA9IHVuZGVmaW5lZCwgdGV4dCB9KSB7XG4gIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3Qgb25TdW1iaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHRleHQgPSB0ZXh0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgdGV4dFJlZi5jdXJyZW50LnZhbHVlID0gJyc7XG4gICAgbXV0YXRlKHRleHQsIGlkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pbnB1dFwiIG9uU3VibWl0PXtvblN1bWJpdH0+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgcmVmPXt0ZXh0UmVmfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIuuCtOyaqeydhCDsnoXroKXtlZjshLjsmpQuXCJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXt0ZXh0fVxuICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7smYTro4w8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0lucHV0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiTXNnSW5wdXQiLCJtdXRhdGUiLCJpZCIsInVuZGVmaW5lZCIsInRleHQiLCJ0ZXh0UmVmIiwib25TdW1iaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgInput.jsx\n");

/***/ })

});