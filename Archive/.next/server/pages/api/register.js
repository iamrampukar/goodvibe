"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

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

/***/ 9220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3518);
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);

const cloudinaryConfig = ()=>{
    cloudinary__WEBPACK_IMPORTED_MODULE_0___default().config({
        cloud_name: "dijky1jjg",
        api_key: "557477556585753",
        api_secret: "sEE6XWIEmTmIvxFnr7Xkvg5HkMs"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudinaryConfig);


/***/ }),

/***/ 1698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const dbConnect = async ()=>{
    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(`strictQuery`, false);
    if (!(mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState)) {
        try {
            await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect("mongodb+srv://consultancy:consultancy@cluster0.as7kclv.mongodb.net/?retryWrites=true&w=majority");
        } catch (error) {
            console.log(error);
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);


/***/ }),

/***/ 462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ registerUser)
});

// EXTERNAL MODULE: ./backend/config/cloudinaryConfig.js
var cloudinaryConfig = __webpack_require__(9220);
// EXTERNAL MODULE: ./backend/middleware/catchAsyncErrors.js
var catchAsyncErrors = __webpack_require__(821);
// EXTERNAL MODULE: ./backend/models/user.js
var models_user = __webpack_require__(1611);
;// CONCATENATED MODULE: ./backend/utils/ErroHandler.js
class ErrorHandler extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.statusCode);
    }
}
/* harmony default export */ const ErroHandler = ((/* unused pure expression or super */ null && (ErrorHandler)));

;// CONCATENATED MODULE: ./backend/controller/userController.js




(0,cloudinaryConfig/* default */.Z)();
//Register User => api/v1/user/register
const registerUser = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const { username , email , password  } = req.body;
    let user = models_user/* default.findOne */.Z.findOne({
        email: email
    });
    user = await models_user/* default.create */.Z.create({
        username,
        email,
        password
    });
    res.status(200).json({
        success: true
    });
});


/***/ }),

/***/ 821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const catchAsyncErrors = (func)=>(req, res, next)=>Promise.resolve(func(req, res, next)).catch(next);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catchAsyncErrors);


/***/ }),

/***/ 1611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);


const userSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({
    username: String,
    email: String,
    password: String
});
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(this.password, 10);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models)?.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("User", userSchema));


/***/ }),

/***/ 4623:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _backend_config_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1698);
/* harmony import */ var _backend_controller_userController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(462);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5616);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3582);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_2__]);
next_connect__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_backend_config_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
handler.post(_backend_controller_userController__WEBPACK_IMPORTED_MODULE_1__/* .registerUser */ .a).use(cors__WEBPACK_IMPORTED_MODULE_3___default()({
    origin: "https://goodvibes.com.np/"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4623));
module.exports = __webpack_exports__;

})();