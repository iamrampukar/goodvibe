"use strict";
exports.id = 2411;
exports.ids = [2411];
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

/***/ 8132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "yn": () => (/* binding */ createHomeCarousel),
  "vN": () => (/* binding */ deleteCarousel),
  "V8": () => (/* binding */ getAllCarousel),
  "RR": () => (/* binding */ getCarouselDetails),
  "O5": () => (/* binding */ updateCarousel)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./backend/models/homecarousel.js

const carouselSchema = new (external_mongoose_default()).Schema({
    videos: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ]
});
/* harmony default export */ const homecarousel = ((external_mongoose_default()).models?.Carousel || external_mongoose_default().model("Carousel", carouselSchema));

// EXTERNAL MODULE: ./backend/config/cloudinaryConfig.js
var cloudinaryConfig = __webpack_require__(9220);
// EXTERNAL MODULE: ./backend/middleware/catchAsyncErrors.js
var catchAsyncErrors = __webpack_require__(821);
// EXTERNAL MODULE: external "cloudinary"
var external_cloudinary_ = __webpack_require__(3518);
var external_cloudinary_default = /*#__PURE__*/__webpack_require__.n(external_cloudinary_);
;// CONCATENATED MODULE: ./backend/controller/homecarousel.js




(0,cloudinaryConfig/* default */.Z)();
const createHomeCarousel = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    let videos = req.body.videos;
    let videoLinks = [];
    for(let i = 0; i < videos?.length; i++){
        const result = await external_cloudinary_default().v2.uploader.upload(videos[i], {
            resource_type: "video",
            folder: "HomeCarousel"
        });
        videoLinks.push({
            public_id: result.public_id,
            url: result.secure_url
        });
    }
    req.body.videos = videoLinks;
    const carousel = await homecarousel.create(req.body);
    res.status(200).json({
        success: true
    });
});
// get single carousel details
const getCarouselDetails = async (req, res)=>{
    try {
        const carousel = await homecarousel.findById(req.query.id);
        if (!carousel) {
            res.status(400).json({
                success: false,
                message: "No carousel found With this id"
            });
        } else {
            res.status(200).json({
                success: true,
                carousel
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        });
    }
};
const getAllCarousel = async (req, res)=>{
    try {
        let carousel = await homecarousel.find();
        res.status(200).json({
            success: true,
            carousel
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        });
    }
};
const updateCarousel = async (req, res)=>{
    try {
        let carousel = await homecarousel.findById(req.query.id);
        if (!carousel) {
            res.status(404).json({
                success: false,
                message: "Carousel Not Found"
            });
        } else {
            let videos = [];
            if (typeof req.body.videos === "string") {
                videos.push(req.body.videos);
            } else {
                videos = req.body.videos;
            }
            if (videos !== undefined) {
                // Deleting Images From Cloudinary
                for(let i = 0; i < carousel.videos.length; i++){
                    await external_cloudinary_default().v2.uploader.destroy(carousel.videos[i].public_id, {
                        resource_type: "video"
                    });
                }
                const videoLinks = [];
                for(let i = 0; i < videos.length; i++){
                    const result = await external_cloudinary_default().v2.uploader.upload(videos[i], {
                        folder: "Videos",
                        resource_type: "video"
                    });
                    videoLinks.push({
                        public_id: result.public_id,
                        url: result.secure_url
                    });
                }
                req.body.videos = videoLinks;
            }
            carousel = await homecarousel.findByIdAndUpdate(req.query.id, req.body, {
                new: true,
                runValidators: true,
                useFindAndModify: false
            });
            res.status(200).json({
                success: true,
                carousel
            });
        }
    } catch (error) {
        console.log(error);
    }
};
const deleteCarousel = (0,catchAsyncErrors/* default */.Z)(async (req, res, next)=>{
    const carousel = await homecarousel.findById(req.query.id);
    if (!carousel) return res.status(404).json({
        message: "Carousel Not Found"
    });
    for(let i = 0; i < carousel.videos.length; i++){
        await external_cloudinary_default().v2.uploader.destroy(carousel.videos[i].public_id);
    }
    await homecarousel.findByIdAndDelete(req.query.id);
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


/***/ })

};
;