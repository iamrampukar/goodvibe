"use strict";
exports.id = 4552;
exports.ids = [4552];
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

/***/ 1085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FS": () => (/* binding */ createAboutData),
  "cw": () => (/* binding */ deleteAbout),
  "Us": () => (/* binding */ getAboutDetails),
  "HG": () => (/* binding */ getAllAbout),
  "cF": () => (/* binding */ updateAbout)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./backend/models/about.js

const aboutSchema = new (external_mongoose_default()).Schema({
    message: {
        type: String,
        required: [
            true,
            "Please Enter the Message "
        ]
    }
});
/* harmony default export */ const about = ((external_mongoose_default()).models?.About || external_mongoose_default().model("About", aboutSchema));

// EXTERNAL MODULE: ./backend/config/cloudinaryConfig.js
var cloudinaryConfig = __webpack_require__(9220);
// EXTERNAL MODULE: ./backend/middleware/catchAsyncErrors.js
var catchAsyncErrors = __webpack_require__(821);
// EXTERNAL MODULE: external "cloudinary"
var external_cloudinary_ = __webpack_require__(3518);
;// CONCATENATED MODULE: ./backend/controller/about.js




(0,cloudinaryConfig/* default */.Z)();
const createAboutData = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const { message  } = req.body;
    //
    const aboutdata = await about.create({
        message
    });
    res.status(200).json({
        success: true
    });
});
// get Details
const getAboutDetails = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const aboutdata = await about.findById(req.query.id);
    res.status(200).json({
        success: true,
        aboutdata
    });
});
const getAllAbout = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const aboutdata = await about.find();
    res.status(200).json({
        success: true,
        aboutdata
    });
});
const updateAbout = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const data = await about.findById(req.query.id);
    const { message  } = req.body;
    if (!data) res.status(404).json({
        message: "Not Found"
    });
    if (data) {
        data.message = message;
    }
    await data.save();
    res.status(200).json({
        success: true
    });
});
const deleteAbout = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const aboutdata = await about.findById(req.query.id);
    if (!aboutdata) {
        res.status(404).json({
            message: "Data Not Found"
        });
    }
    await about.findByIdAndDelete(req.query.id);
    res.status(200).json({
        success: true,
        message: "Deleted Successfully"
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


/***/ })

};
;