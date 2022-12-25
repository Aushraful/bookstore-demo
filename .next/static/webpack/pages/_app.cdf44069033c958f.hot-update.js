"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Navigation.jsx":
/*!***************************************!*\
  !*** ./src/components/Navigation.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navigation\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Navigation(param) {\n    let { navigation , className  } = param;\n    _s();\n    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"text-base lg:text-sm\", className),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            role: \"list\",\n            className: \"space-y-9\",\n            children: navigation.map((section)=>{\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: section.link,\n                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full\", section.link === router.pathname ? \"font-semibold text-sky-500 before:bg-sky-500\" : \"text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300\"),\n                        children: [\n                            section === null || section === void 0 ? void 0 : section.icon,\n                            section.title\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aushraful/Desktop/pathoksamabesh/src/components/Navigation.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, this)\n                }, section.title, false, {\n                    fileName: \"/home/aushraful/Desktop/pathoksamabesh/src/components/Navigation.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 11\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/home/aushraful/Desktop/pathoksamabesh/src/components/Navigation.jsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/aushraful/Desktop/pathoksamabesh/src/components/Navigation.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(Navigation, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUE0QjtBQUNXO0FBQ2hCO0FBRWhCLFNBQVNHLFdBQVcsS0FBeUIsRUFBRTtRQUEzQixFQUFFQyxXQUFVLEVBQUVDLFVBQVMsRUFBRSxHQUF6Qjs7SUFDekIsSUFBSUMsU0FBU0wsc0RBQVNBO0lBRXRCLHFCQUNFLDhEQUFDTTtRQUFJRixXQUFXSCxnREFBSUEsQ0FBQyx3QkFBd0JHO2tCQUMzQyw0RUFBQ0c7WUFBR0MsTUFBSztZQUFPSixXQUFVO3NCQUN2QkQsV0FBV00sR0FBRyxDQUFDLENBQUNDOzhCQUNmLHFFQUFDQzs4QkFDQyw0RUFBQ1osa0RBQUlBO3dCQUNIYSxNQUFNRixRQUFRRyxJQUFJO3dCQUNsQlQsV0FBV0gsZ0RBQUlBLENBQ2Isc0tBQ0FTLFFBQVFHLElBQUksS0FBS1IsT0FBT1MsUUFBUSxHQUM1QixpREFDQSxpS0FBaUs7OzRCQUd0S0osb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTSyxJQUFJOzRCQUFFTCxRQUFRTSxLQUFLOzs7Ozs7O21CQVZ4Qk4sUUFBUU0sS0FBSzs7Ozs7Ozs7Ozs7Ozs7OztBQXdDaEMsQ0FBQztHQS9DZWQ7O1FBQ0RGLGtEQUFTQTs7O0tBRFJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24uanN4P2MxN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5leHBvcnQgZnVuY3Rpb24gTmF2aWdhdGlvbih7IG5hdmlnYXRpb24sIGNsYXNzTmFtZSB9KSB7XG4gIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT17Y2xzeCgndGV4dC1iYXNlIGxnOnRleHQtc20nLCBjbGFzc05hbWUpfT5cbiAgICAgIDx1bCByb2xlPVwibGlzdFwiIGNsYXNzTmFtZT1cInNwYWNlLXktOVwiPlxuICAgICAgICB7bmF2aWdhdGlvbi5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtzZWN0aW9uLnRpdGxlfT5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9e3NlY3Rpb24ubGlua31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgICdibG9jayB3LWZ1bGwgcGwtMy41IGJlZm9yZTpwb2ludGVyLWV2ZW50cy1ub25lIGJlZm9yZTphYnNvbHV0ZSBiZWZvcmU6LWxlZnQtMSBiZWZvcmU6dG9wLTEvMiBiZWZvcmU6aC0xLjUgYmVmb3JlOnctMS41IGJlZm9yZTotdHJhbnNsYXRlLXktMS8yIGJlZm9yZTpyb3VuZGVkLWZ1bGwnLFxuICAgICAgICAgICAgICAgIHNlY3Rpb24ubGluayA9PT0gcm91dGVyLnBhdGhuYW1lXG4gICAgICAgICAgICAgICAgICA/ICdmb250LXNlbWlib2xkIHRleHQtc2t5LTUwMCBiZWZvcmU6Ymctc2t5LTUwMCdcbiAgICAgICAgICAgICAgICAgIDogJ3RleHQtc2xhdGUtNTAwIGJlZm9yZTpoaWRkZW4gYmVmb3JlOmJnLXNsYXRlLTMwMCBob3Zlcjp0ZXh0LXNsYXRlLTYwMCBob3ZlcjpiZWZvcmU6YmxvY2sgZGFyazp0ZXh0LXNsYXRlLTQwMCBkYXJrOmJlZm9yZTpiZy1zbGF0ZS03MDAgZGFyazpob3Zlcjp0ZXh0LXNsYXRlLTMwMCdcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3NlY3Rpb24/Lmljb259e3NlY3Rpb24udGl0bGV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB7LyogPGgyIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAge3NlY3Rpb24udGl0bGV9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgIHJvbGU9XCJsaXN0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBzcGFjZS15LTIgYm9yZGVyLWwtMiBib3JkZXItc2xhdGUtMTAwIGRhcms6Ym9yZGVyLXNsYXRlLTgwMCBsZzptdC00IGxnOnNwYWNlLXktNCBsZzpib3JkZXItc2xhdGUtMjAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3NlY3Rpb24ubGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17bGluay5ocmVmfSBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17bGluay5ocmVmfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgICAgICAgJ2Jsb2NrIHctZnVsbCBwbC0zLjUgYmVmb3JlOnBvaW50ZXItZXZlbnRzLW5vbmUgYmVmb3JlOmFic29sdXRlIGJlZm9yZTotbGVmdC0xIGJlZm9yZTp0b3AtMS8yIGJlZm9yZTpoLTEuNSBiZWZvcmU6dy0xLjUgYmVmb3JlOi10cmFuc2xhdGUteS0xLzIgYmVmb3JlOnJvdW5kZWQtZnVsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgbGluay5ocmVmID09PSByb3V0ZXIucGF0aG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2ZvbnQtc2VtaWJvbGQgdGV4dC1za3ktNTAwIGJlZm9yZTpiZy1za3ktNTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAndGV4dC1zbGF0ZS01MDAgYmVmb3JlOmhpZGRlbiBiZWZvcmU6Ymctc2xhdGUtMzAwIGhvdmVyOnRleHQtc2xhdGUtNjAwIGhvdmVyOmJlZm9yZTpibG9jayBkYXJrOnRleHQtc2xhdGUtNDAwIGRhcms6YmVmb3JlOmJnLXNsYXRlLTcwMCBkYXJrOmhvdmVyOnRleHQtc2xhdGUtMzAwJ1xuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bGluay50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+ICovfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJjbHN4IiwiTmF2aWdhdGlvbiIsIm5hdmlnYXRpb24iLCJjbGFzc05hbWUiLCJyb3V0ZXIiLCJuYXYiLCJ1bCIsInJvbGUiLCJtYXAiLCJzZWN0aW9uIiwibGkiLCJocmVmIiwibGluayIsInBhdGhuYW1lIiwiaWNvbiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navigation.jsx\n"));

/***/ })

});