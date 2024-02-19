"use strict";
exports.id = 4553;
exports.ids = [4553];
exports.modules = {

/***/ 4553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B1": () => (/* binding */ createSuccessStory),
  "SG": () => (/* binding */ deleteSuccessStory),
  "Fq": () => (/* binding */ getAllSuccessStory),
  "_5": () => (/* binding */ getSuccessStoryDetails),
  "ZA": () => (/* binding */ updateSuccessStory)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./backend/models/successstory.js

const successStorySchema = new (external_mongoose_default()).Schema({
    images: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
});
/* harmony default export */ const successstory = ((external_mongoose_default()).models?.SuccessStory || external_mongoose_default().model("SuccessStory", successStorySchema));

// EXTERNAL MODULE: ./backend/config/cloudinaryConfig.js
var cloudinaryConfig = __webpack_require__(9220);
// EXTERNAL MODULE: ./backend/utils/apiFeatures.js
var apiFeatures = __webpack_require__(4684);
// EXTERNAL MODULE: ./backend/middleware/catchAsyncErrors.js
var catchAsyncErrors = __webpack_require__(821);
// EXTERNAL MODULE: external "cloudinary"
var external_cloudinary_ = __webpack_require__(3518);
var external_cloudinary_default = /*#__PURE__*/__webpack_require__.n(external_cloudinary_);
;// CONCATENATED MODULE: ./backend/controller/successstory.js





(0,cloudinaryConfig/* default */.Z)();
const createSuccessStory = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const { images  } = req.body;
    const result = await external_cloudinary_default().v2.uploader.upload(images, {
        folder: "Consultancy"
    });
    const success = await successstory.create({
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
const getSuccessStoryDetails = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const success = await successstory.findById(req.query.id);
    res.status(200).json({
        success: true,
        success
    });
});
const getAllSuccessStory = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    let success = await successstory.find();
    res.status(200).json({
        success: true,
        success
    });
});
const updateSuccessStory = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const data = await successstory.findById(req.query.id);
    const { images  } = req.body;
    if (!data) res.status(404).json({
        message: "Not Found"
    });
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
const deleteSuccessStory = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const success = await successstory.findById(req.query.id);
    if (!success) {
        res.status(404).json({
            message: "Data Not Found"
        });
    }
    const imageId = success.images.public_id;
    await external_cloudinary_default().v2.uploader.destroy(imageId);
    await successstory.findByIdAndDelete(req.query.id);
    res.status(200).json({
        success: true,
        message: "Deleted Successfully"
    });
});


/***/ })

};
;