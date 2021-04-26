webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/baner/styles.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/baner/styles.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".styles_banerContainer__2efRe {\n  height: 16rem;\n  margin-left: 15rem;\n  margin-right: 15rem;\n  background-color: #73ce87;\n}\n\n.styles_nome__2FknI {\n  margin-top: 7rem;\n}", "",{"version":3,"sources":["webpack://styles.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,yBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ","sourcesContent":[".banerContainer{\r\n    height: 16rem;\r\n    margin-left: 15rem;\r\n    margin-right: 15rem;\r\n    background-color: rgb(115, 206, 135);\r\n}\r\n\r\n.nome{\r\n    margin-top: 7rem;\r\n\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"banerContainer": "styles_banerContainer__2efRe",
	"nome": "styles_nome__2FknI"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/components/baner/index.jsx":
/*!****************************************!*\
  !*** ./src/components/baner/index.jsx ***!
  \****************************************/
/*! exports provided: Baner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Baner", function() { return Baner; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/baner/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\Rosangela\\Site\\Novo-site-next\\Repositorio-Site-rosangela\\src\\components\\baner\\index.jsx";

function Baner() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.banerContainer,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nome,
      children: " Nome da silva "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
_c = Baner;

var _c;

$RefreshReg$(_c, "Baner");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYmFuZXIvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9iYW5lci9pbmRleC5qc3giXSwibmFtZXMiOlsiQmFuZXIiLCJzdHlsZXMiLCJiYW5lckNvbnRhaW5lciIsIm5vbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxrQ0FBa0Msa0JBQWtCLHVCQUF1Qix3QkFBd0IsOEJBQThCLEdBQUcseUJBQXlCLHFCQUFxQixHQUFHLE9BQU8sbUZBQW1GLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcseUNBQXlDLHNCQUFzQiwyQkFBMkIsNEJBQTRCLDZDQUE2QyxLQUFLLGNBQWMseUJBQXlCLFNBQVMsbUJBQW1CO0FBQ2xtQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBR08sU0FBU0EsS0FBVCxHQUFpQjtBQUNwQixzQkFFSTtBQUFRLGFBQVMsRUFBRUMsMERBQU0sQ0FBQ0MsY0FBMUI7QUFBQSwyQkFFSTtBQUFJLGVBQVMsRUFBRUQsMERBQU0sQ0FBQ0UsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFVSDtLQVhlSCxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNhNzg2YWVmY2E1NmJkNGE4NTE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3R5bGVzX2JhbmVyQ29udGFpbmVyX18yZWZSZSB7XFxuICBoZWlnaHQ6IDE2cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDE1cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3M2NlODc7XFxufVxcblxcbi5zdHlsZXNfbm9tZV9fMkZrbkkge1xcbiAgbWFyZ2luLXRvcDogN3JlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJhbmVyQ29udGFpbmVye1xcclxcbiAgICBoZWlnaHQ6IDE2cmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTUsIDIwNiwgMTM1KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vbWV7XFxyXFxuICAgIG1hcmdpbi10b3A6IDdyZW07XFxyXFxuXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJhbmVyQ29udGFpbmVyXCI6IFwic3R5bGVzX2JhbmVyQ29udGFpbmVyX18yZWZSZVwiLFxuXHRcIm5vbWVcIjogXCJzdHlsZXNfbm9tZV9fMkZrbklcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmFuZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmJhbmVyQ29udGFpbmVyfT5cclxuXHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5ub21lfT4gTm9tZSBkYSBzaWx2YSA8L2gxPlxyXG4gIFxyXG5cclxuICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==