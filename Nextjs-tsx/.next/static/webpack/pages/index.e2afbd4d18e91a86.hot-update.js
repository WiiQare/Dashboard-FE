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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip);\nconst data = {\n    labels: [\n        \"Hired\",\n        \"Canceled\",\n        \"Pending\"\n    ],\n    datasets: [\n        {\n            label: \"Total\",\n            data: [\n                54,\n                20,\n                26\n            ],\n            backgroundColor: [\n                \"#006AFF\",\n                \"#52C93F\",\n                \"#FF2727\"\n            ]\n        }\n    ]\n};\nconst carNumbers = [\n    \"BK 123123 AB\",\n    \"BK 234324 AB\",\n    \"BK 162565 AB\",\n    \"BK 653576 AB\"\n];\nfunction Home() {\n    _s();\n    const [carNumber, setCarNumber] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // Replace with data from api\n    const filteredCarNumber = query === \"\" ? carNumbers : carNumbers.filter((number)=>{\n        return number.toLowerCase().includes(query.toLowerCase());\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"/home/pandragon/Desktop/WiiQare/Nextjs-tsx/pages/index.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Jg3taqHR+jsq71cUiRSxMBv2WxU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUMwQztBQUMrQjtBQUd4QztBQVNqQ0Usb0RBQWdCLENBQUNDLGdEQUFVQSxFQUFFQyw2Q0FBT0E7QUFFcEMsTUFBTUcsT0FBTztJQUNYQyxRQUFRO1FBQUM7UUFBUztRQUFZO0tBQVU7SUFDeENDLFVBQVU7UUFDUjtZQUNFQyxPQUFPO1lBQ1BILE1BQU07Z0JBQUM7Z0JBQUk7Z0JBQUk7YUFBRztZQUNsQkksaUJBQWlCO2dCQUFDO2dCQUFXO2dCQUFXO2FBQVU7UUFDcEQ7S0FDRDtBQUNIO0FBRUEsTUFBTUMsYUFBYTtJQUNqQjtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRWMsU0FBU0MsT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUVuQyw2QkFBNkI7SUFDN0IsTUFBTWEsb0JBQ0pGLFVBQVUsS0FDTkosYUFDQUEsV0FBV08sTUFBTSxDQUFDLENBQUNDLFNBQVc7UUFDOUIsT0FBT0EsT0FBT0MsV0FBVyxHQUFHQyxRQUFRLENBQUNOLE1BQU1LLFdBQVc7SUFDeEQsRUFBRTtJQUVOLHFCQUNFLDhEQUFDckIsMERBQU1BOzs7OztBQUtYLENBQUM7R0FsQnVCYTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgQ2hhcnQgYXMgQ2hhcnRKUywgQXJjRWxlbWVudCwgVG9vbHRpcCwgTGVnZW5kIH0gZnJvbSBcImNoYXJ0LmpzXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uSWNvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9zdmdzL25vdGlmaWNhdGlvbi1pY29uXCI7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9zdmdzL3NlYXJjaC1pY29uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tYm9ib3ggfSBmcm9tIFwiQGhlYWRsZXNzdWkvcmVhY3RcIjtcbmltcG9ydCBDYXJJY29uIGZyb20gXCIuLi9jb21wb25lbnRzL3N2Z3MvY2FyLWljb25cIjtcbmltcG9ydCBDaGV2cm9uRG93bkljb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvc3Zncy9jaGV2cm9uLWRvd24taWNvblwiO1xuXG5pbXBvcnQgVGFibGVzIGZyb20gXCIuLi9jb21wb25lbnRzL3RhYmxlXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB1c2VyIGZyb20gXCIuLi9wdWJsaWMvaW1hZ2VzL3VzZXItMDEucG5nXCJcblxuQ2hhcnRKUy5yZWdpc3RlcihBcmNFbGVtZW50LCBUb29sdGlwKTtcblxuY29uc3QgZGF0YSA9IHtcbiAgbGFiZWxzOiBbXCJIaXJlZFwiLCBcIkNhbmNlbGVkXCIsIFwiUGVuZGluZ1wiXSxcbiAgZGF0YXNldHM6IFtcbiAgICB7XG4gICAgICBsYWJlbDogXCJUb3RhbFwiLFxuICAgICAgZGF0YTogWzU0LCAyMCwgMjZdLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjMDA2QUZGXCIsIFwiIzUyQzkzRlwiLCBcIiNGRjI3MjdcIl0sXG4gICAgfSxcbiAgXSxcbn07XG5cbmNvbnN0IGNhck51bWJlcnMgPSBbXG4gIFwiQksgMTIzMTIzIEFCXCIsXG4gIFwiQksgMjM0MzI0IEFCXCIsXG4gIFwiQksgMTYyNTY1IEFCXCIsXG4gIFwiQksgNjUzNTc2IEFCXCIsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY2FyTnVtYmVyLCBzZXRDYXJOdW1iZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gUmVwbGFjZSB3aXRoIGRhdGEgZnJvbSBhcGlcbiAgY29uc3QgZmlsdGVyZWRDYXJOdW1iZXIgPVxuICAgIHF1ZXJ5ID09PSBcIlwiXG4gICAgICA/IGNhck51bWJlcnNcbiAgICAgIDogY2FyTnVtYmVycy5maWx0ZXIoKG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gbnVtYmVyLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG5cblxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxheW91dCIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkFyY0VsZW1lbnQiLCJUb29sdGlwIiwidXNlU3RhdGUiLCJyZWdpc3RlciIsImRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiY2FyTnVtYmVycyIsIkhvbWUiLCJjYXJOdW1iZXIiLCJzZXRDYXJOdW1iZXIiLCJxdWVyeSIsInNldFF1ZXJ5IiwiZmlsdGVyZWRDYXJOdW1iZXIiLCJmaWx0ZXIiLCJudW1iZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});