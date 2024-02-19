"use strict";
exports.id = 6986;
exports.ids = [6986];
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

/***/ 3112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L5": () => (/* binding */ createFeedback),
  "qq": () => (/* binding */ deleteFeedback),
  "Ue": () => (/* binding */ getAllFeedback),
  "kE": () => (/* binding */ getFeedbackDetails),
  "GM": () => (/* binding */ updateFeedback)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./backend/models/feedback.js

const feedbackSchema = new (external_mongoose_default()).Schema({
    images: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    fullname: {
        type: String,
        required: [
            true,
            "Please Enter the Title"
        ]
    },
    message: {
        type: String,
        required: [
            true,
            "Please Enter Description"
        ]
    }
});
/* harmony default export */ const models_feedback = ((external_mongoose_default()).models?.Feedback || external_mongoose_default().model("Feedback", feedbackSchema));

// EXTERNAL MODULE: ./backend/config/cloudinaryConfig.js
var cloudinaryConfig = __webpack_require__(9220);
// EXTERNAL MODULE: ./backend/middleware/catchAsyncErrors.js
var catchAsyncErrors = __webpack_require__(821);
// EXTERNAL MODULE: external "cloudinary"
var external_cloudinary_ = __webpack_require__(3518);
var external_cloudinary_default = /*#__PURE__*/__webpack_require__.n(external_cloudinary_);
;// CONCATENATED MODULE: ./backend/controller/feedback.js




(0,cloudinaryConfig/* default */.Z)();
const createFeedback = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const { fullname , message , images  } = req.body;
    const result = await external_cloudinary_default().v2.uploader.upload(images, {
        folder: "Consultancy"
    });
    const feedback = await models_feedback.create({
        fullname,
        message,
        images: {
            public_id: result.public_id,
            url: result.secure_url
        }
    });
    res.status(200).json({
        success: true
    });
});
// get Details
const getFeedbackDetails = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const feedback = await models_feedback.findById(req.query.id);
    res.status(200).json({
        success: true,
        feedback
    });
});
const getAllFeedback = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const feedback = await models_feedback.find();
    res.status(200).json({
        success: true,
        feedback
    });
});
const updateFeedback = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const data = await models_feedback.findById(req.query.id);
    const { fullname , images , message  } = req.body;
    if (!data) res.status(404).json({
        message: "Not Found"
    });
    if (data) {
        data.fullname = fullname;
        data.message = message;
    }
    if (images !== "") {
        const result = await external_cloudinary_default().v2.uploader.upload(images, {
            folder: "Consultancy"
        });
        await external_cloudinary_default().v2.uploader.destroy(data?.images?.public_id);
        data.images = {
            public_id: result.public_id,
            url: result.secure_url
        };
    }
    await data.save();
    res.status(200).json({
        success: true
    });
});
const deleteFeedback = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const feedback = await models_feedback.findById(req.query.id);
    if (!feedback) {
        res.status(404).json({
            message: "Data Not Found"
        });
    }
    const imageId = feedback.images.public_id;
    await external_cloudinary_default().v2.uploader.destroy(imageId);
    await models_feedback.findByIdAndDelete(req.query.id);
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