"use strict";
(() => {
var exports = {};
exports.id = 5165;
exports.ids = [5165];
exports.modules = {

/***/ 3518:
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 20:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var _backend_config_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1698);
/* harmony import */ var _backend_controller_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1269);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3582);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);
next_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_backend_config_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
handler.get(_backend_controller_form__WEBPACK_IMPORTED_MODULE_2__/* .getFormDetails */ .v2).put(_backend_controller_form__WEBPACK_IMPORTED_MODULE_2__/* .updateFormData */ .Zv).delete(_backend_controller_form__WEBPACK_IMPORTED_MODULE_2__/* .deleteFormData */ .H0).use(cors__WEBPACK_IMPORTED_MODULE_3___default()({
    origin: "https://goodvibes.com.np/"
}));
const config = {
    api: {
        bodyParser: {
            sizeLimit: "300000000mb" // Set desired value here
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1818], () => (__webpack_exec__(20)));
module.exports = __webpack_exports__;

})();