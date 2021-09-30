"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/MsgInput.jsx":
/*!*********************************!*\
  !*** ./components/MsgInput.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/chotaegyu/dev/inflearn/jung-jae-nam/react-graphql/client/components/MsgInput.jsx\";\n\n\n\nfunction MsgInput({\n  mutate,\n  text = '',\n  id = undefined\n}) {\n  const textRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  const onSumbit = e => {\n    e.preventDefault();\n    e.stopPropagation();\n    const text = textRef.current.value;\n    textRef.current.value = '';\n    mutate(text, id);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n    className: \"messages__input\",\n    onSubmit: onSumbit,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n      ref: textRef,\n      placeholder: \"\\uB0B4\\uC6A9\\uC744 \\uC785\\uB825\\uD558\\uC138\\uC694.\",\n      defaultValue: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      children: \"\\uC644\\uB8CC\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgInput);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0lucHV0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7O0FBRUEsU0FBU0UsUUFBVCxDQUFrQjtBQUFFQyxFQUFBQSxNQUFGO0FBQVVDLEVBQUFBLElBQUksR0FBRyxFQUFqQjtBQUFxQkMsRUFBQUEsRUFBRSxHQUFHQztBQUExQixDQUFsQixFQUF5RDtBQUN2RCxRQUFNQyxPQUFPLEdBQUdOLDZDQUFNLENBQUMsSUFBRCxDQUF0Qjs7QUFFQSxRQUFNTyxRQUFRLEdBQUlDLENBQUQsSUFBTztBQUN0QkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FELElBQUFBLENBQUMsQ0FBQ0UsZUFBRjtBQUNBLFVBQU1QLElBQUksR0FBR0csT0FBTyxDQUFDSyxPQUFSLENBQWdCQyxLQUE3QjtBQUNBTixJQUFBQSxPQUFPLENBQUNLLE9BQVIsQ0FBZ0JDLEtBQWhCLEdBQXdCLEVBQXhCO0FBQ0FWLElBQUFBLE1BQU0sQ0FBQ0MsSUFBRCxFQUFPQyxFQUFQLENBQU47QUFDRCxHQU5EOztBQVFBLHNCQUNFO0FBQU0sYUFBUyxFQUFDLGlCQUFoQjtBQUFrQyxZQUFRLEVBQUVHLFFBQTVDO0FBQUEsNEJBQ0U7QUFDRSxTQUFHLEVBQUVELE9BRFA7QUFFRSxpQkFBVyxFQUFDLG9EQUZkO0FBR0Usa0JBQVksRUFBRUg7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0FBRUQsaUVBQWVGLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzeD9iZDFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIE1zZ0lucHV0KHsgbXV0YXRlLCB0ZXh0ID0gJycsIGlkID0gdW5kZWZpbmVkIH0pIHtcbiAgY29uc3QgdGV4dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBvblN1bWJpdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgdGV4dCA9IHRleHRSZWYuY3VycmVudC52YWx1ZTtcbiAgICB0ZXh0UmVmLmN1cnJlbnQudmFsdWUgPSAnJztcbiAgICBtdXRhdGUodGV4dCwgaWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwibWVzc2FnZXNfX2lucHV0XCIgb25TdWJtaXQ9e29uU3VtYml0fT5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICByZWY9e3RleHRSZWZ9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwi64K07Jqp7J2EIOyeheugpe2VmOyEuOyalC5cIlxuICAgICAgICBkZWZhdWx0VmFsdWU9e3RleHR9XG4gICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPuyZhOujjDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXNnSW5wdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJNc2dJbnB1dCIsIm11dGF0ZSIsInRleHQiLCJpZCIsInVuZGVmaW5lZCIsInRleHRSZWYiLCJvblN1bWJpdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgInput.jsx\n");

/***/ }),

/***/ "./components/MsgItem.jsx":
/*!********************************!*\
  !*** ./components/MsgItem.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/chotaegyu/dev/inflearn/jung-jae-nam/react-graphql/client/components/MsgItem.jsx\";\n\n\n\nconst MsgItem = ({\n  id,\n  userId,\n  text,\n  timestamp,\n  onUpdate,\n  onDelete,\n  isEditing,\n  startEdit\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n    className: \"messages__item\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n      children: [userId, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"sub\", {\n        children: new Date(timestamp).toLocaleString('ko-KR', {\n          year: 'numeric',\n          month: 'numeric',\n          day: 'numeric',\n          hour: '2-digit',\n          minute: '2-digit',\n          hour12: true\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined), isEditing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_0__.default, {\n      mutate: onUpdate,\n      text: text,\n      id: id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 20\n    }, undefined) : text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"messages__buttons\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n        onClick: startEdit,\n        children: \"\\uC218\\uC815\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n        onClick: onDelete,\n        children: \"\\uC0AD\\uC81C\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0l0ZW0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7OztBQUVBLE1BQU1DLE9BQU8sR0FBRyxDQUFDO0FBQ2ZDLEVBQUFBLEVBRGU7QUFFZkMsRUFBQUEsTUFGZTtBQUdmQyxFQUFBQSxJQUhlO0FBSWZDLEVBQUFBLFNBSmU7QUFLZkMsRUFBQUEsUUFMZTtBQU1mQyxFQUFBQSxRQU5lO0FBT2ZDLEVBQUFBLFNBUGU7QUFRZkMsRUFBQUE7QUFSZSxDQUFELEtBU1Y7QUFDSixzQkFDRTtBQUFJLGFBQVMsRUFBQyxnQkFBZDtBQUFBLDRCQUNFO0FBQUEsaUJBQ0dOLE1BREgsZUFFRTtBQUFBLGtCQUNHLElBQUlPLElBQUosQ0FBU0wsU0FBVCxFQUFvQk0sY0FBcEIsQ0FBbUMsT0FBbkMsRUFBNEM7QUFDM0NDLFVBQUFBLElBQUksRUFBRSxTQURxQztBQUUzQ0MsVUFBQUEsS0FBSyxFQUFFLFNBRm9DO0FBRzNDQyxVQUFBQSxHQUFHLEVBQUUsU0FIc0M7QUFJM0NDLFVBQUFBLElBQUksRUFBRSxTQUpxQztBQUszQ0MsVUFBQUEsTUFBTSxFQUFFLFNBTG1DO0FBTTNDQyxVQUFBQSxNQUFNLEVBQUU7QUFObUMsU0FBNUM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQWVHVCxTQUFTLGdCQUFHLDhEQUFDLDhDQUFEO0FBQVUsWUFBTSxFQUFFRixRQUFsQjtBQUE0QixVQUFJLEVBQUVGLElBQWxDO0FBQXdDLFFBQUUsRUFBRUY7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSCxHQUF3REUsSUFmcEUsZUFpQkU7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw4QkFDRTtBQUFRLGVBQU8sRUFBRUssU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFRLGVBQU8sRUFBRUYsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXdCRCxDQWxDRDs7QUFtQ0EsaUVBQWVOLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0l0ZW0uanN4Pzk2ZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xuXG5jb25zdCBNc2dJdGVtID0gKHtcbiAgaWQsXG4gIHVzZXJJZCxcbiAgdGV4dCxcbiAgdGltZXN0YW1wLFxuICBvblVwZGF0ZSxcbiAgb25EZWxldGUsXG4gIGlzRWRpdGluZyxcbiAgc3RhcnRFZGl0LFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJtZXNzYWdlc19faXRlbVwiPlxuICAgICAgPGgzPlxuICAgICAgICB7dXNlcklkfVxuICAgICAgICA8c3ViPlxuICAgICAgICAgIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCdrby1LUicsIHtcbiAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICAgICAgaG91cjEyOiB0cnVlLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3N1Yj5cbiAgICAgIDwvaDM+XG5cbiAgICAgIHtpc0VkaXRpbmcgPyA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gdGV4dD17dGV4dH0gaWQ9e2lkfSAvPiA6IHRleHR9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXNfX2J1dHRvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydEVkaXR9PuyImOyglTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT7sgq3soJw8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTXNnSXRlbTtcbiJdLCJuYW1lcyI6WyJNc2dJbnB1dCIsIk1zZ0l0ZW0iLCJpZCIsInVzZXJJZCIsInRleHQiLCJ0aW1lc3RhbXAiLCJvblVwZGF0ZSIsIm9uRGVsZXRlIiwiaXNFZGl0aW5nIiwic3RhcnRFZGl0IiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgItem.jsx\n");

/***/ }),

/***/ "./components/MsgList.jsx":
/*!********************************!*\
  !*** ./components/MsgList.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.jsx\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/chotaegyu/dev/inflearn/jung-jae-nam/react-graphql/client/components/MsgList.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst UserIds = ['roy', 'jay'];\n\nconst getRandomUserId = () => UserIds[Math.round(Math.random())];\n\nconst originalMsgs = Array(50).fill(0).map((_, i) => ({\n  id: 50 - i,\n  userId: getRandomUserId(),\n  timestamp: 1234567890123 + i * 1000 * 60,\n  text: `${50 - i} mock text`\n}));\n\nconst MsgList = () => {\n  const {\n    0: msgs,\n    1: setMsgs\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(originalMsgs);\n  const {\n    0: editingId,\n    1: setEditingId\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n\n  const onCreate = text => {\n    const newMsg = {\n      id: msgs.length + 1,\n      userId: getRandomUserId(),\n      timestamp: Date.now(),\n      text: `${msgs.length + 1} ${text}`\n    };\n    setMsgs(prev => [newMsg, ...prev]);\n  };\n\n  const onUpdate = (text, id) => {\n    setMsgs(msgs => {\n      const targetIndex = msgs.findIndex(msg => msg.id === id);\n      if (targetIndex < 0) return;\n      const newMsgs = [...msgs];\n      newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {\n        text\n      }));\n      return newMsgs;\n    });\n    doneEdit();\n  };\n\n  const doneEdit = () => setEditingId(null);\n\n  const onDelete = id => {\n    setMsgs(msgs => {\n      const targetIndex = msgs.findIndex(msg => msg.id === id);\n      if (targetIndex < 0) return;\n      const newMsgs = [...msgs];\n      newMsgs.splice(targetIndex, 1);\n      return newMsgs;\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {\n      mutate: onCreate\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n      className: \"messages\",\n      children: msgs.map(x => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_0__.default, _objectSpread(_objectSpread({}, x), {}, {\n        onUpdate: onUpdate,\n        onDelete: () => onDelete(x.id),\n        startEdit: () => setEditingId(x.id),\n        isEditing: editingId === x.id\n      }), x.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UDtBQUNELEtBTk0sQ0FBUDtBQU9ELEdBUkQ7O0FBVUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyw4Q0FBRDtBQUFVLFlBQU0sRUFBRVY7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQSxnQkFDR0osSUFBSSxDQUFDUixHQUFMLENBQVUwQixDQUFELGlCQUNSLDhEQUFDLDZDQUFELGtDQUVNQSxDQUZOO0FBR0UsZ0JBQVEsRUFBRVIsUUFIWjtBQUlFLGdCQUFRLEVBQUUsTUFBTU8sUUFBUSxDQUFDQyxDQUFDLENBQUN2QixFQUFILENBSjFCO0FBS0UsaUJBQVMsRUFBRSxNQUFNUSxZQUFZLENBQUNlLENBQUMsQ0FBQ3ZCLEVBQUgsQ0FML0I7QUFNRSxpQkFBUyxFQUFFTyxTQUFTLEtBQUtnQixDQUFDLENBQUN2QjtBQU43QixVQUNPdUIsQ0FBQyxDQUFDdkIsRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBLGtCQURGO0FBaUJELENBeEREOztBQTBEQSxpRUFBZUksT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnTGlzdC5qc3g/OGNlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnSXRlbSBmcm9tICcuL01zZ0l0ZW0nO1xuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFVzZXJJZHMgPSBbJ3JveScsICdqYXknXTtcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XG5cbmNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxuICAuZmlsbCgwKVxuICAubWFwKChfLCBpKSA9PiAoe1xuICAgIGlkOiA1MCAtIGksXG4gICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyBpICogMTAwMCAqIDYwLFxuICAgIHRleHQ6IGAkezUwIC0gaX0gbW9jayB0ZXh0YCxcbiAgfSkpO1xuXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpO1xuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgb25DcmVhdGUgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IHtcbiAgICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXG4gICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcbiAgICB9O1xuICAgIHNldE1zZ3MoKHByZXYpID0+IFtuZXdNc2csIC4uLnByZXZdKTtcbiAgfTtcblxuICBjb25zdCBvblVwZGF0ZSA9ICh0ZXh0LCBpZCkgPT4ge1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm47XG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIHtcbiAgICAgICAgLi4ubXNnc1t0YXJnZXRJbmRleF0sXG4gICAgICAgIHRleHQsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXdNc2dzO1xuICAgIH0pO1xuICAgIGRvbmVFZGl0KCk7XG4gIH07XG5cbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XG4gIGNvbnN0IG9uRGVsZXRlID0gKGlkKSA9PiB7XG4gICAgc2V0TXNncygobXNncykgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybjtcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7bXNncy5tYXAoKHgpID0+IChcbiAgICAgICAgICA8TXNnSXRlbVxuICAgICAgICAgICAga2V5PXt4LmlkfVxuICAgICAgICAgICAgey4uLnh9XG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XG4iXSwibmFtZXMiOlsiTXNnSXRlbSIsIk1zZ0lucHV0IiwidXNlU3RhdGUiLCJVc2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib3JpZ2luYWxNc2dzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJpZCIsInVzZXJJZCIsInRpbWVzdGFtcCIsInRleHQiLCJNc2dMaXN0IiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImxlbmd0aCIsIkRhdGUiLCJub3ciLCJwcmV2Iiwib25VcGRhdGUiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsIm9uRGVsZXRlIiwieCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.jsx\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_MsgList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MsgList */ \"./components/MsgList.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/chotaegyu/dev/inflearn/jung-jae-nam/react-graphql/client/pages/index.jsx\";\n\n\n\n\nconst Home = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: \"SNS\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_MsgList__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBLE1BQU1DLElBQUksR0FBRyxNQUFNO0FBQ2pCLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUEsa0JBREY7QUFNRCxDQVBEOztBQVFBLGlFQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Nc2dMaXN0JztcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5TTlM8L2gxPlxuICAgICAgPE1zZ0xpc3QgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIk1zZ0xpc3QiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();