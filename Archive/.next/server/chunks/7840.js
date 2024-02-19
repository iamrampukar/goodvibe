"use strict";
exports.id = 7840;
exports.ids = [7840];
exports.modules = {

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

/***/ 7145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rf": () => (/* binding */ getUsers),
/* harmony export */   "ck": () => (/* binding */ updateProfile),
/* harmony export */   "fp": () => (/* binding */ getSingleUser),
/* harmony export */   "h8": () => (/* binding */ deleteUser)
/* harmony export */ });
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1611);
/* harmony import */ var _config_cloudinaryConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9220);
/* harmony import */ var _middleware_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(821);
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3518);
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_2__);




(0,_config_cloudinaryConfig__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
//Get All Users - Admin => /api/v1/admin/users
const getUsers = (0,_middleware_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async (req, res, next)=>{
    const users = await _models_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find();
    if (!users) return res.status(404).json({
        message: "No user found"
    });
    res.status(200).json({
        success: true,
        users
    });
});
const getSingleUser = (0,_middleware_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async (req, res, next)=>{
    const user = await _models_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findById */ .Z.findById(req.query.id);
    if (!user) return res.status(404).json({
        message: "No user found"
    });
    res.status(200).json({
        success: true,
        user
    });
});
const updateProfile = (0,_middleware_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async (req, res, next)=>{
    const user = await _models_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findById */ .Z.findById(req.query.id);
    const { username , email , password  } = req.body;
    if (!user) return res.status(404).json({
        message: "User not found"
    });
    if (user) {
        user.username = username;
        user.email = email;
        if (password) user.password = password;
    }
    await user.save();
    res.status(200).json({
        success: true
    });
});
const deleteUser = (0,_middleware_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async (req, res, next)=>{
    const user = await _models_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findById */ .Z.findById(req.query.id);
    if (!user) {
        res.status(404).json({
            message: "User not found"
        });
    }
    await _models_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByIdAndDelete */ .Z.findByIdAndDelete(req.query.id);
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


/***/ })

};
;