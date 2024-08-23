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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/CartContext.js":
/*!********************************!*\
  !*** ./context/CartContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction useCart() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n}\nfunction CartProvider({ children }) {\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addToCart = (product)=>{\n        setCartItems((prevItems)=>{\n            const newItems = [\n                ...prevItems,\n                product\n            ];\n            return newItems;\n        });\n    };\n    const removeFromCart = (productId)=>{\n        setCartItems((prevItems)=>prevItems.filter((item)=>item.id !== productId));\n    };\n    const clearCart = ()=>{\n        setCartItems([]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cartItems,\n            addToCart,\n            removeFromCart,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"B:\\\\SW\\\\Innovatech-final\\\\Innovatech-Industries\\\\context\\\\CartContext.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0NhcnRDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEQ7QUFFNUQsTUFBTUcsNEJBQWNILG9EQUFhQTtBQUUxQixTQUFTSTtJQUNkLE9BQU9ILGlEQUFVQSxDQUFDRTtBQUNwQjtBQUVPLFNBQVNFLGFBQWEsRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTdDLE1BQU1PLFlBQVksQ0FBQ0M7UUFDakJGLGFBQWEsQ0FBQ0c7WUFDWixNQUFNQyxXQUFXO21CQUFJRDtnQkFBV0Q7YUFBUTtZQUN4QyxPQUFPRTtRQUNUO0lBQ0Y7SUFFQSxNQUFNQyxpQkFBaUIsQ0FBQ0M7UUFDdEJOLGFBQWEsQ0FBQ0csWUFDWkEsVUFBVUksTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEVBQUUsS0FBS0g7SUFFM0M7SUFFQSxNQUFNSSxZQUFZO1FBQ2hCVixhQUFhLEVBQUU7SUFDakI7SUFFQSxxQkFDRSw4REFBQ0wsWUFBWWdCLFFBQVE7UUFBQ0MsT0FBTztZQUFFYjtZQUFXRTtZQUFXSTtZQUFnQks7UUFBVTtrQkFDNUVaOzs7Ozs7QUFHUCIsInNvdXJjZXMiOlsid2VicGFjazovL215LXByb2R1Y3Rpb24tc3lzdGVtLy4vY29udGV4dC9DYXJ0Q29udGV4dC5qcz9jMzk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FydCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJ0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3QpID0+IHtcclxuICAgIHNldENhcnRJdGVtcygocHJldkl0ZW1zKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0l0ZW1zID0gWy4uLnByZXZJdGVtcywgcHJvZHVjdF07XHJcbiAgICAgIHJldHVybiBuZXdJdGVtcztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gKHByb2R1Y3RJZCkgPT4ge1xyXG4gICAgc2V0Q2FydEl0ZW1zKChwcmV2SXRlbXMpID0+XHJcbiAgICAgIHByZXZJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHByb2R1Y3RJZClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xlYXJDYXJ0ID0gKCkgPT4ge1xyXG4gICAgc2V0Q2FydEl0ZW1zKFtdKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNhcnRJdGVtcywgYWRkVG9DYXJ0LCByZW1vdmVGcm9tQ2FydCwgY2xlYXJDYXJ0IH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJDYXJ0Q29udGV4dCIsInVzZUNhcnQiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsImFkZFRvQ2FydCIsInByb2R1Y3QiLCJwcmV2SXRlbXMiLCJuZXdJdGVtcyIsInJlbW92ZUZyb21DYXJ0IiwicHJvZHVjdElkIiwiZmlsdGVyIiwiaXRlbSIsImlkIiwiY2xlYXJDYXJ0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/CartContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/CartContext */ \"./context/CartContext.js\");\n/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/styles.css */ \"./public/styles.css\");\n/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_styles_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n});\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        theme: theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_CartContext__WEBPACK_IMPORTED_MODULE_3__.CartProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/images/Logo.png\",\n                        type: \"image/png\"\n                    }, void 0, false, {\n                        fileName: \"B:\\\\SW\\\\Innovatech-final\\\\Innovatech-Industries\\\\pages\\\\_app.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"B:\\\\SW\\\\Innovatech-final\\\\Innovatech-Industries\\\\pages\\\\_app.js\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"B:\\\\SW\\\\Innovatech-final\\\\Innovatech-Industries\\\\pages\\\\_app.js\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"B:\\\\SW\\\\Innovatech-final\\\\Innovatech-Industries\\\\pages\\\\_app.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"B:\\\\SW\\\\Innovatech-final\\\\Innovatech-Industries\\\\pages\\\\_app.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Q7QUFDbEM7QUFDeUI7QUFFekI7QUFDN0IsTUFBTUksUUFBUUgsNkRBQVdBLENBQUM7QUFFMUI7QUFFQSxTQUFTSSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUVFLDhEQUFDUCw0REFBY0E7UUFBQ0ksT0FBT0E7a0JBQ3JCLDRFQUFDRCw4REFBWUE7OzhCQUNiLDhEQUFDRCxrREFBSUE7OEJBQ0gsNEVBQUNNO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLO3dCQUFtQkMsTUFBSzs7Ozs7Ozs7Ozs7OEJBRWhELDhEQUFDTDtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcHJvZHVjdGlvbi1zeXN0ZW0vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IENhcnRQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvQ2FydENvbnRleHQnO1xyXG5cclxuaW1wb3J0ICcuLi9wdWJsaWMvc3R5bGVzLmNzcydcclxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcbiAgLy8gQ29uZmlndXJhY2nDs24gcGVyc29uYWxpemFkYSBkZSBDaGFrcmEgVUlcclxufSk7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPENhcnRQcm92aWRlcj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaW1hZ2VzL0xvZ28ucG5nXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0NhcnRQcm92aWRlcj5cclxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJDaGFrcmFQcm92aWRlciIsImV4dGVuZFRoZW1lIiwiSGVhZCIsIkNhcnRQcm92aWRlciIsInRoZW1lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsaW5rIiwicmVsIiwiaHJlZiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./public/styles.css":
/*!***************************!*\
  !*** ./public/styles.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();