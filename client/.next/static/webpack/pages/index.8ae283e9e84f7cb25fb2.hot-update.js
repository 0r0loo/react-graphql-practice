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

/***/ "./fetcher.js":
/*!********************!*\
  !*** ./fetcher.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n(axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = 'http://localhost:8000';\n\nvar fetcher = /*#__PURE__*/function () {\n  var _ref = (0,_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(method, url) {\n    var _len,\n        rest,\n        _key,\n        res,\n        _args = arguments;\n\n    return _Users_chotaegyu_dev_inflearn_jung_jae_nam_react_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            for (_len = _args.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n              rest[_key - 2] = _args[_key];\n            }\n\n            _context.next = 3;\n            return (axios__WEBPACK_IMPORTED_MODULE_2___default())[method].apply((axios__WEBPACK_IMPORTED_MODULE_2___default()), [url].concat(rest));\n\n          case 3:\n            res = _context.sent;\n            return _context.abrupt(\"return\", res.data);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function fetcher(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetcher);\n/*\nget : axios.get(url, [config])\ndelete : axios.delete(url, [config])\npost : axios.post(url, data, [config])\nput : axios.put(url, data, [config])\n\n*/\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZXRjaGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUFBLCtEQUFBLEdBQXlCLHVCQUF6Qjs7QUFFQSxJQUFNRyxPQUFPO0FBQUEsaVVBQUcsaUJBQU9DLE1BQVAsRUFBZUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FBdUJDLElBQXZCO0FBQXVCQSxjQUFBQSxJQUF2QjtBQUFBOztBQUFBO0FBQUEsbUJBQ0lOLDhDQUFLLENBQUNJLE1BQUQsQ0FBTCxPQUFBSiw4Q0FBSyxHQUFTSyxHQUFULFNBQWlCQyxJQUFqQixFQURUOztBQUFBO0FBQ1JDLFlBQUFBLEdBRFE7QUFBQSw2Q0FFUEEsR0FBRyxDQUFDQyxJQUZHOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVBMLE9BQU87QUFBQTtBQUFBO0FBQUEsR0FBYjs7QUFLQSwrREFBZUEsT0FBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2ZldGNoZXIuanM/NDBjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCc7XG5cbmNvbnN0IGZldGNoZXIgPSBhc3luYyAobWV0aG9kLCB1cmwsIC4uLnJlc3QpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3NbbWV0aG9kXSh1cmwsIC4uLnJlc3QpO1xuICByZXR1cm4gcmVzLmRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyO1xuXG4vKlxuZ2V0IDogYXhpb3MuZ2V0KHVybCwgW2NvbmZpZ10pXG5kZWxldGUgOiBheGlvcy5kZWxldGUodXJsLCBbY29uZmlnXSlcbnBvc3QgOiBheGlvcy5wb3N0KHVybCwgZGF0YSwgW2NvbmZpZ10pXG5wdXQgOiBheGlvcy5wdXQodXJsLCBkYXRhLCBbY29uZmlnXSlcblxuKi9cbiJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImZldGNoZXIiLCJtZXRob2QiLCJ1cmwiLCJyZXN0IiwicmVzIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./fetcher.js\n");

/***/ })

});