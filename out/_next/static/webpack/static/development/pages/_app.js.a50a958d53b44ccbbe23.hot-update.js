webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-page-transitions */ "./node_modules/next-page-transitions/lib/index.js");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");


var _jsxFileName = "C:\\Users\\user\\Documents\\GitHub\\Lendpop\\pages\\_app.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var ico = __webpack_require__(/*! ../public/images/favicon-2.png */ "./public/images/favicon-2.png");

var TIMEOUT = 200;
function MyApp(props) {
  _s();

  var Component = props.Component,
      pageProps = props.pageProps;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    // Remove the server-side injected CSS.
    var jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "InstaKash"), __jsx("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    href: ico,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
    theme: _src_theme__WEBPACK_IMPORTED_MODULE_10__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx(next_page_transitions__WEBPACK_IMPORTED_MODULE_8__["PageTransition"], {
    timeout: TIMEOUT,
    classNames: "page-transition",
    loadingComponent: __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    }),
    loadingDelay: 500,
    loadingTimeout: {
      enter: TIMEOUT,
      exit: 0
    },
    loadingClassNames: "loading-indicator",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    key: router.route,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2948454521", [TIMEOUT, TIMEOUT, TIMEOUT, TIMEOUT]]]) + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2948454521",
    dynamic: [TIMEOUT, TIMEOUT, TIMEOUT, TIMEOUT],
    __self: this
  }, ".page-transition-enter{opacity:0;-webkit-transform:translate3d(0,20px,0);-ms-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0);}.page-transition-enter-active{opacity:1;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:opacity ".concat(TIMEOUT, "ms,-webkit-transform ").concat(TIMEOUT, "ms;-webkit-transition:opacity ").concat(TIMEOUT, "ms,transform ").concat(TIMEOUT, "ms;transition:opacity ").concat(TIMEOUT, "ms,transform ").concat(TIMEOUT, "ms;}.page-transition-exit{opacity:1;}.page-transition-exit-active{opacity:0;-webkit-transition:opacity ").concat(TIMEOUT, "ms;transition:opacity ").concat(TIMEOUT, "ms;}.loading-indicator-appear,.loading-indicator-enter{opacity:0;}.loading-indicator-appear-active,.loading-indicator-enter-active{opacity:1;-webkit-transition:opacity ").concat(TIMEOUT, "ms;transition:opacity ").concat(TIMEOUT, "ms;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRG9jdW1lbnRzXFxHaXRIdWJcXExlbmRwb3BcXHBhZ2VzXFxfYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEMkIsQUFHcUIsQUFJQSxBQUtBLEFBR0EsQUFLQSxBQUlBLFVBcEJ3QixBQUlILEFBS2pDLEFBR29ELEFBS3BELEFBSW9ELG1HQWhCMEMsU0FKOUYsQUFZQSxBQVNBLGdTQWhCQSIsImZpbGUiOiJDOlxcVXNlcnNcXHVzZXJcXERvY3VtZW50c1xcR2l0SHViXFxMZW5kcG9wXFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB7IFBhZ2VUcmFuc2l0aW9uIH0gZnJvbSAnbmV4dC1wYWdlLXRyYW5zaXRpb25zJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkZXInO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3NyYy90aGVtZSc7XG5jb25zdCBpY28gPSByZXF1aXJlKCcuLi9wdWJsaWMvaW1hZ2VzL2Zhdmljb24tMi5wbmcnKTtcblxuY29uc3QgVElNRU9VVCA9IDIwMFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcChwcm9wcykge1xuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFJlbW92ZSB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTLlxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKTtcbiAgICBpZiAoanNzU3R5bGVzKSB7XG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5JbnN0YUthc2g8L3RpdGxlPlxuICAgICAgICB7LyogPG1ldGEgaHR0cC1lcXVpdj1cIkNvbnRlbnQtU2VjdXJpdHktUG9saWN5XCIgY29udGVudD1cInVwZ3JhZGUtaW5zZWN1cmUtcmVxdWVzdHNcIi8+ICovfVxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXtpY299IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8UGFnZVRyYW5zaXRpb25cbiAgICAgICAgICB0aW1lb3V0PXtUSU1FT1VUfVxuICAgICAgICAgIGNsYXNzTmFtZXM9XCJwYWdlLXRyYW5zaXRpb25cIlxuICAgICAgICAgIGxvYWRpbmdDb21wb25lbnQ9ezxMb2FkZXIgLz59XG4gICAgICAgICAgbG9hZGluZ0RlbGF5PXs1MDB9XG4gICAgICAgICAgbG9hZGluZ1RpbWVvdXQ9e3tcbiAgICAgICAgICAgIGVudGVyOiBUSU1FT1VULFxuICAgICAgICAgICAgZXhpdDogMCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGxvYWRpbmdDbGFzc05hbWVzPVwibG9hZGluZy1pbmRpY2F0b3JcIlxuICAgICAgICA+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBrZXk9e3JvdXRlci5yb3V0ZX0vPlxuICAgICAgICA8L1BhZ2VUcmFuc2l0aW9uPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlci1hY3RpdmUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7VElNRU9VVH1tcywgdHJhbnNmb3JtICR7VElNRU9VVH1tcztcbiAgICAgICAgfVxuICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0LWFjdGl2ZSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7VElNRU9VVH1tcztcbiAgICAgICAgfVxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItYXBwZWFyLFxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWFwcGVhci1hY3RpdmUsXG4gICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1lbnRlci1hY3RpdmUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke1RJTUVPVVR9bXM7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG5NeUFwcC5wcm9wVHlwZXMgPSB7XG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\Lendpop\\\\pages\\\\_app.js */"))));
}

_s(MyApp, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = MyApp;
MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbImljbyIsInJlcXVpcmUiLCJUSU1FT1VUIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwidGhlbWUiLCJlbnRlciIsImV4aXQiLCJyb3V0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxxRUFBRCxDQUFuQjs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsR0FBaEI7QUFFZSxTQUFTQyxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFBQSxNQUMzQkMsU0FEMkIsR0FDRkQsS0FERSxDQUMzQkMsU0FEMkI7QUFBQSxNQUNoQkMsU0FEZ0IsR0FDRkYsS0FERSxDQUNoQkUsU0FEZ0I7QUFFbkMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLFlBQU07QUFDcEI7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBbEI7O0FBQ0EsUUFBSUYsU0FBSixFQUFlO0FBQ2JBLGVBQVMsQ0FBQ0csYUFBVixDQUF3QkMsV0FBeEIsQ0FBb0NKLFNBQXBDO0FBQ0Q7QUFDRixHQU5ELEVBTUcsRUFOSDtBQVFBLFNBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFHRTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyxzREFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUVYLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGLEVBT0UsTUFBQyxzRUFBRDtBQUFlLFNBQUssRUFBRWdCLG1EQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLG9FQUFEO0FBQ0UsV0FBTyxFQUFFZCxPQURYO0FBRUUsY0FBVSxFQUFDLGlCQUZiO0FBR0Usb0JBQWdCLEVBQUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSHBCO0FBSUUsZ0JBQVksRUFBRSxHQUpoQjtBQUtFLGtCQUFjLEVBQUU7QUFDZGUsV0FBSyxFQUFFZixPQURPO0FBRWRnQixVQUFJLEVBQUU7QUFGUSxLQUxsQjtBQVNFLHFCQUFpQixFQUFDLG1CQVRwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0UsTUFBQyxTQUFELHlGQUFlWixTQUFmO0FBQTBCLE9BQUcsRUFBRUMsTUFBTSxDQUFDWSxLQUF0QztBQUFBLGdHQVVzQmpCLE9BVnRCLEVBVThDQSxPQVY5QyxFQWlCc0JBLE9BakJ0QixFQTBCc0JBLE9BMUJ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWEYsQ0FIRjtBQUFBO0FBQUEsY0F3QjBCQSxPQXhCMUIsRUF3QmtEQSxPQXhCbEQsRUErQjBCQSxPQS9CMUIsRUF3QzBCQSxPQXhDMUI7QUFBQTtBQUFBLG1VQXdCMEJBLE9BeEIxQixrQ0F3QmtEQSxPQXhCbEQsMkNBd0IwQkEsT0F4QjFCLDBCQXdCa0RBLE9BeEJsRCxtQ0F3QjBCQSxPQXhCMUIsMEJBd0JrREEsT0F4QmxELG9IQStCMEJBLE9BL0IxQixtQ0ErQjBCQSxPQS9CMUIscUxBd0MwQkEsT0F4QzFCLG1DQXdDMEJBLE9BeEMxQiw0bUlBUEYsQ0FERjtBQXNERDs7R0FsRXVCQyxLO1VBRVBLLHFEOzs7S0FGT0wsSztBQW9FeEJBLEtBQUssQ0FBQ2lCLFNBQU4sR0FBa0I7QUFDaEJmLFdBQVMsRUFBRWdCLGlEQUFTLENBQUNDLFdBQVYsQ0FBc0JDLFVBRGpCO0FBRWhCakIsV0FBUyxFQUFFZSxpREFBUyxDQUFDRyxNQUFWLENBQWlCRDtBQUZaLENBQWxCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmE1MGE5NThkNTNiNDRjY2JiZTIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyBQYWdlVHJhbnNpdGlvbiB9IGZyb20gJ25leHQtcGFnZS10cmFuc2l0aW9ucyc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGVyJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zcmMvdGhlbWUnO1xuY29uc3QgaWNvID0gcmVxdWlyZSgnLi4vcHVibGljL2ltYWdlcy9mYXZpY29uLTIucG5nJyk7XG5cbmNvbnN0IFRJTUVPVVQgPSAyMDBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAocHJvcHMpIHtcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XG4gICAgaWYgKGpzc1N0eWxlcykge1xuICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SW5zdGFLYXNoPC90aXRsZT5cbiAgICAgICAgey8qIDxtZXRhIGh0dHAtZXF1aXY9XCJDb250ZW50LVNlY3VyaXR5LVBvbGljeVwiIGNvbnRlbnQ9XCJ1cGdyYWRlLWluc2VjdXJlLXJlcXVlc3RzXCIvPiAqL31cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17aWNvfSAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPFBhZ2VUcmFuc2l0aW9uXG4gICAgICAgICAgdGltZW91dD17VElNRU9VVH1cbiAgICAgICAgICBjbGFzc05hbWVzPVwicGFnZS10cmFuc2l0aW9uXCJcbiAgICAgICAgICBsb2FkaW5nQ29tcG9uZW50PXs8TG9hZGVyIC8+fVxuICAgICAgICAgIGxvYWRpbmdEZWxheT17NTAwfVxuICAgICAgICAgIGxvYWRpbmdUaW1lb3V0PXt7XG4gICAgICAgICAgICBlbnRlcjogVElNRU9VVCxcbiAgICAgICAgICAgIGV4aXQ6IDAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBsb2FkaW5nQ2xhc3NOYW1lcz1cImxvYWRpbmctaW5kaWNhdG9yXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucm91dGV9Lz5cbiAgICAgICAgPC9QYWdlVHJhbnNpdGlvbj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlciB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwcHgsIDApO1xuICAgICAgICB9XG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke1RJTUVPVVR9bXMsIHRyYW5zZm9ybSAke1RJTUVPVVR9bXM7XG4gICAgICAgIH1cbiAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0IHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdC1hY3RpdmUge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke1RJTUVPVVR9bXM7XG4gICAgICAgIH1cbiAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWFwcGVhcixcbiAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWVudGVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1hcHBlYXItYWN0aXZlLFxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXItYWN0aXZlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHtUSU1FT1VUfW1zO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuTXlBcHAucHJvcFR5cGVzID0ge1xuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9