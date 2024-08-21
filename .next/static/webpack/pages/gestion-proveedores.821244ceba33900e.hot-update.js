"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/gestion-proveedores",{

/***/ "./pages/gestion-proveedores.js":
/*!**************************************!*\
  !*** ./pages/gestion-proveedores.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_AddSupplierForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AddSupplierForm */ \"./components/AddSupplierForm.jsx\");\n/* harmony import */ var _components_SuppliersTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SuppliersTable */ \"./components/SuppliersTable.jsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ManageSuppliers = ()=>{\n    _s();\n    const [selectedSupplier, setSelectedSupplier] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Estado para el proveedor seleccionado\n    // Maneja la selección de un proveedor para editar\n    const handleEditSupplier = (supplier)=>{\n        setSelectedSupplier(supplier);\n    };\n    // Maneja la finalización de la edición o el agregado de un proveedor\n    const handleFormSubmit = ()=>{\n        setSelectedSupplier(null); // Restablece el formulario después de guardar\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        p: 6,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/stephaniespiering/Desktop/InnoInd_2 Kopie/pages/gestion-proveedores.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        width: \"250px\",\n                        bg: \"white\",\n                        p: 5,\n                        boxShadow: \"md\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/stephaniespiering/Desktop/InnoInd_2 Kopie/pages/gestion-proveedores.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/stephaniespiering/Desktop/InnoInd_2 Kopie/pages/gestion-proveedores.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        flex: \"1\",\n                        p: 5,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                                as: \"h1\",\n                                mb: 6,\n                                color: \"green\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stephaniespiering/Desktop/InnoInd_2 Kopie/pages/gestion-proveedores.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                                as: \"h1\",\n                                size: \"2xl\",\n                                mb: 6,\n                                textAlign: \"center\",\n                                children: \"Manage Suppliers\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stephaniespiering/Desktop/InnoInd_2 Kopie/pages/gestion-proveedores.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                mb: 6,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SuppliersTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    onEditSupplier: handleEditSupplier\n                                }, void 0, false, {\n                                    fileName: \"/Users/stephaniespiering/Desktop/InnoInd_2 Kopie/pages/gestion-proveedores.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/stephaniespiering/Desktop/InnoInd_2 Kopie/pages/gestion-proveedores.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddSupplierForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    selectedSupplier: selectedSupplier,\n                                    onFormSubmit: handleFormSubmit\n                                }, void 0, false, {\n                                    fileName: \"/Users/stephaniespiering/Desktop/InnoInd_2 Kopie/pages/gestion-proveedores.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/stephaniespiering/Desktop/InnoInd_2 Kopie/pages/gestion-proveedores.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stephaniespiering/Desktop/InnoInd_2 Kopie/pages/gestion-proveedores.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stephaniespiering/Desktop/InnoInd_2 Kopie/pages/gestion-proveedores.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stephaniespiering/Desktop/InnoInd_2 Kopie/pages/gestion-proveedores.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ManageSuppliers, \"ebz4dMX/1pOAsynO4oCnVmc9lD0=\");\n_c = ManageSuppliers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageSuppliers);\nvar _c;\n$RefreshReg$(_c, \"ManageSuppliers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nZXN0aW9uLXByb3ZlZWRvcmVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNjO0FBQ007QUFDRjtBQUNkO0FBQ0Y7QUFFMUMsTUFBTVMsa0JBQWtCOztJQUN0QixNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdWLCtDQUFRQSxDQUFDLE9BQU8sd0NBQXdDO0lBRXhHLGtEQUFrRDtJQUNsRCxNQUFNVyxxQkFBcUIsQ0FBQ0M7UUFDMUJGLG9CQUFvQkU7SUFDdEI7SUFFQSxxRUFBcUU7SUFDckUsTUFBTUMsbUJBQW1CO1FBQ3ZCSCxvQkFBb0IsT0FBTyw4Q0FBOEM7SUFDM0U7SUFFQSxxQkFDRSw4REFBQ1QsaURBQUdBO1FBQUNhLEdBQUc7OzBCQUNOLDhEQUFDUCwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDSixrREFBSUE7O2tDQUVILDhEQUFDRixpREFBR0E7d0JBQUNjLE9BQU07d0JBQVFDLElBQUc7d0JBQVFGLEdBQUc7d0JBQUdHLFdBQVU7a0NBQzVDLDRFQUFDWCwyREFBT0E7Ozs7Ozs7Ozs7a0NBSVYsOERBQUNMLGlEQUFHQTt3QkFBQ2lCLE1BQUs7d0JBQUlKLEdBQUc7OzBDQUNmLDhEQUFDWixxREFBT0E7Z0NBQUNpQixJQUFHO2dDQUFLQyxJQUFJO2dDQUFHQyxPQUFNOzs7Ozs7MENBSTlCLDhEQUFDbkIscURBQU9BO2dDQUFDaUIsSUFBRztnQ0FBS0csTUFBSztnQ0FBTUYsSUFBSTtnQ0FBR0csV0FBVTswQ0FBUzs7Ozs7OzBDQUl0RCw4REFBQ3RCLGlEQUFHQTtnQ0FBQ21CLElBQUk7MENBRVAsNEVBQUNmLGtFQUFjQTtvQ0FBQ21CLGdCQUFnQmI7Ozs7Ozs7Ozs7OzBDQUdsQyw4REFBQ1YsaURBQUdBOzBDQUVGLDRFQUFDRyxtRUFBZUE7b0NBQ2RLLGtCQUFrQkE7b0NBQ2xCZ0IsY0FBY1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVCO0dBaERNTDtLQUFBQTtBQWtETiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nZXN0aW9uLXByb3ZlZWRvcmVzLmpzP2U5MTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBGbGV4IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgQWRkU3VwcGxpZXJGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQWRkU3VwcGxpZXJGb3JtJztcbmltcG9ydCBTdXBwbGllcnNUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL1N1cHBsaWVyc1RhYmxlJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcblxuY29uc3QgTWFuYWdlU3VwcGxpZXJzID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRTdXBwbGllciwgc2V0U2VsZWN0ZWRTdXBwbGllcl0gPSB1c2VTdGF0ZShudWxsKTsgLy8gRXN0YWRvIHBhcmEgZWwgcHJvdmVlZG9yIHNlbGVjY2lvbmFkb1xuXG4gIC8vIE1hbmVqYSBsYSBzZWxlY2Npw7NuIGRlIHVuIHByb3ZlZWRvciBwYXJhIGVkaXRhclxuICBjb25zdCBoYW5kbGVFZGl0U3VwcGxpZXIgPSAoc3VwcGxpZXIpID0+IHtcbiAgICBzZXRTZWxlY3RlZFN1cHBsaWVyKHN1cHBsaWVyKTtcbiAgfTtcblxuICAvLyBNYW5lamEgbGEgZmluYWxpemFjacOzbiBkZSBsYSBlZGljacOzbiBvIGVsIGFncmVnYWRvIGRlIHVuIHByb3ZlZWRvclxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkU3VwcGxpZXIobnVsbCk7IC8vIFJlc3RhYmxlY2UgZWwgZm9ybXVsYXJpbyBkZXNwdcOpcyBkZSBndWFyZGFyXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHA9ezZ9PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPEZsZXg+XG4gICAgICAgIHsvKiBTaWRlYmFyICovfVxuICAgICAgICA8Qm94IHdpZHRoPVwiMjUwcHhcIiBiZz1cIndoaXRlXCIgcD17NX0gYm94U2hhZG93PVwibWRcIj5cbiAgICAgICAgICA8U2lkZWJhciAvPlxuICAgICAgICA8L0JveD5cblxuICAgICAgICB7LyogTWFpbiBjb250ZW50ICovfVxuICAgICAgICA8Qm94IGZsZXg9XCIxXCIgcD17NX0+XG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIG1iPXs2fSBjb2xvcj1cImdyZWVuXCI+XG4gICAgICAgICAgIFxuICAgICAgICAgIDwvSGVhZGluZz5cblxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBzaXplPVwiMnhsXCIgbWI9ezZ9IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgTWFuYWdlIFN1cHBsaWVyc1xuICAgICAgICAgIDwvSGVhZGluZz5cblxuICAgICAgICAgIDxCb3ggbWI9ezZ9PlxuICAgICAgICAgICAgey8qIFBhc2FyIGxhIGZ1bmNpw7NuIGhhbmRsZUVkaXRTdXBwbGllciBhIFN1cHBsaWVyc1RhYmxlICovfVxuICAgICAgICAgICAgPFN1cHBsaWVyc1RhYmxlIG9uRWRpdFN1cHBsaWVyPXtoYW5kbGVFZGl0U3VwcGxpZXJ9IC8+XG4gICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgey8qIFBhc2FyIGVsIHByb3ZlZWRvciBzZWxlY2Npb25hZG8gYWwgZm9ybXVsYXJpbyAqL31cbiAgICAgICAgICAgIDxBZGRTdXBwbGllckZvcm1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRTdXBwbGllcj17c2VsZWN0ZWRTdXBwbGllcn1cbiAgICAgICAgICAgICAgb25Gb3JtU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VTdXBwbGllcnM7XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQm94IiwiSGVhZGluZyIsIkZsZXgiLCJBZGRTdXBwbGllckZvcm0iLCJTdXBwbGllcnNUYWJsZSIsIlNpZGViYXIiLCJIZWFkZXIiLCJNYW5hZ2VTdXBwbGllcnMiLCJzZWxlY3RlZFN1cHBsaWVyIiwic2V0U2VsZWN0ZWRTdXBwbGllciIsImhhbmRsZUVkaXRTdXBwbGllciIsInN1cHBsaWVyIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInAiLCJ3aWR0aCIsImJnIiwiYm94U2hhZG93IiwiZmxleCIsImFzIiwibWIiLCJjb2xvciIsInNpemUiLCJ0ZXh0QWxpZ24iLCJvbkVkaXRTdXBwbGllciIsIm9uRm9ybVN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/gestion-proveedores.js\n"));

/***/ })

});