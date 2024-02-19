"use strict";
exports.id = 1818;
exports.ids = [1818];
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

/***/ 1269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ki": () => (/* binding */ createFormData),
  "H0": () => (/* binding */ deleteFormData),
  "bv": () => (/* binding */ getAllFormData),
  "v2": () => (/* binding */ getFormDetails),
  "Zv": () => (/* binding */ updateFormData)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./backend/models/form.js

const formSchema = new (external_mongoose_default()).Schema({
    firstname: {
        type: String,
        required: [
            true,
            "Please Enter Firstname"
        ]
    },
    lastname: {
        type: String,
        required: [
            true,
            "Please Enter LastName"
        ]
    },
    email: {
        type: String,
        required: [
            true,
            "Please Enter Email Address"
        ]
    },
    number: {
        type: Number,
        required: [
            true,
            "Please Enter your contact Number"
        ]
    },
    edulevel: {
        type: String,
        required: [
            true,
            "Please Enter Education Level"
        ]
    },
    course: {
        type: String,
        required: [
            true,
            "Please Enter Course Name"
        ]
    }
}, {
    timestamps: true
});
/* harmony default export */ const models_form = ((external_mongoose_default()).models?.StudentForm || external_mongoose_default().model("StudentForm", formSchema));

// EXTERNAL MODULE: ./backend/config/cloudinaryConfig.js
var cloudinaryConfig = __webpack_require__(9220);
// EXTERNAL MODULE: ./backend/middleware/catchAsyncErrors.js
var catchAsyncErrors = __webpack_require__(821);
// EXTERNAL MODULE: external "cloudinary"
var external_cloudinary_ = __webpack_require__(3518);
;// CONCATENATED MODULE: ./backend/controller/form.js




(0,cloudinaryConfig/* default */.Z)();
const createFormData = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const { firstname , lastname , email , number , edulevel , course  } = req.body;
    const formdata = await models_form.create({
        firstname,
        lastname,
        email,
        number,
        edulevel,
        course
    });
    res.status(200).json({
        success: true
    });
});
// get Details
const getFormDetails = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const formdata = await models_form.findById(req.query.id);
    res.status(200).json({
        success: true,
        formdata
    });
});
const getAllFormData = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const formdata = await models_form.find();
    res.status(200).json({
        success: true,
        formdata
    });
});
const updateFormData = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const data = await models_form.findById(req.query.id);
    const { firstname , lastname , email , number , edulevel , course  } = req.body;
    if (!data) res.status(404).json({
        message: "Not Found"
    });
    if (data) {
        data.firstname = firstname;
        data.lastname = lastname;
        data.email = email, data.number = number, data.edulevel = edulevel, data.course = course;
    }
    await data.save();
    res.status(200).json({
        success: true
    });
});
const deleteFormData = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const formdata = await models_form.findById(req.query.id);
    if (!formdata) {
        res.status(404).json({
            message: "Data Not Found"
        });
    }
    await models_form.findByIdAndDelete(req.query.id);
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