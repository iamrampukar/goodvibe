"use strict";
exports.id = 1942;
exports.ids = [1942];
exports.modules = {

/***/ 1942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ Providers)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: external "@reduxjs/toolkit/query"
var query_ = __webpack_require__(5642);
// EXTERNAL MODULE: ./frontend/services/api.js
var api = __webpack_require__(5252);
;// CONCATENATED MODULE: ./frontend/services/store.js



const store = (0,toolkit_.configureStore)({
    reducer: {
        [api/* consulApi.reducerPath */.PQ.reducerPath]: api/* consulApi.reducer */.PQ.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(api/* consulApi.middleware */.PQ.middleware)
});
(0,query_.setupListeners)(store.dispatch);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "react-pro-sidebar"
var external_react_pro_sidebar_ = __webpack_require__(1981);
;// CONCATENATED MODULE: ./frontend/services/provider.js






function Providers({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_pro_sidebar_.ProSidebarProvider, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.SessionProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.SSRProvider, {
                    children: children
                })
            })
        })
    });
}


/***/ })

};
;