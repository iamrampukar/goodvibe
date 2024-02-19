"use strict";
exports.id = 6110;
exports.ids = [6110];
exports.modules = {

/***/ 6110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Vh": () => (/* binding */ createBlog),
  "X4": () => (/* binding */ deleteBlog),
  "Ry": () => (/* binding */ getAllBlog),
  "Gf": () => (/* binding */ getBlogDetails),
  "zZ": () => (/* binding */ updateBlog)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./backend/models/blog.js

const blogSchema = new (external_mongoose_default()).Schema({
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
    name: {
        type: String,
        required: [
            true,
            "Please Enter the Name"
        ]
    },
    description: {
        type: String,
        required: [
            true,
            "Please Enter the Description"
        ]
    }
});
/* harmony default export */ const models_blog = ((external_mongoose_default()).models?.Blog || external_mongoose_default().model("Blog", blogSchema));

// EXTERNAL MODULE: ./backend/config/cloudinaryConfig.js
var cloudinaryConfig = __webpack_require__(9220);
// EXTERNAL MODULE: ./backend/utils/apiFeatures.js
var apiFeatures = __webpack_require__(4684);
var apiFeatures_default = /*#__PURE__*/__webpack_require__.n(apiFeatures);
// EXTERNAL MODULE: ./backend/middleware/catchAsyncErrors.js
var catchAsyncErrors = __webpack_require__(821);
// EXTERNAL MODULE: external "cloudinary"
var external_cloudinary_ = __webpack_require__(3518);
var external_cloudinary_default = /*#__PURE__*/__webpack_require__.n(external_cloudinary_);
;// CONCATENATED MODULE: ./backend/controller/blog.js





(0,cloudinaryConfig/* default */.Z)();
const createBlog = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const { images , description , name  } = req.body;
    const result = await external_cloudinary_default().v2.uploader.upload(images, {
        folder: "Consultancy"
    });
    const blog = await models_blog.create({
        description,
        name,
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
const getBlogDetails = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const blog = await models_blog.findById(req.query.id);
    res.status(200).json({
        success: true,
        blog
    });
});
const getAllBlog = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const apiFeature = new (apiFeatures_default())(models_blog.find(), req.query).search();
    let blog = await apiFeature.query;
    blog = await apiFeature.query.clone();
    res.status(200).json({
        success: true,
        blog
    });
});
const updateBlog = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const data = await models_blog.findById(req.query.id);
    const { images , description , name  } = req.body;
    if (!data) res.status(404).json({
        message: "Not Found"
    });
    if (data) {
        data.description = description;
        data.name = name;
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
const deleteBlog = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const blog = await models_blog.findById(req.query.id);
    if (!blog) {
        res.status(404).json({
            message: "Data Not Found"
        });
    }
    const imageId = blog.images.public_id;
    await external_cloudinary_default().v2.uploader.destroy(imageId);
    await models_blog.findByIdAndDelete(req.query.id);
    res.status(200).json({
        success: true,
        message: "Deleted Successfully"
    });
});


/***/ })

};
;