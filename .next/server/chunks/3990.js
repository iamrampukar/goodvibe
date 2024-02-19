"use strict";
exports.id = 3990;
exports.ids = [3990];
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

/***/ 821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const catchAsyncErrors = (func)=>(req, res, next)=>Promise.resolve(func(req, res, next)).catch(next);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catchAsyncErrors);


/***/ }),

/***/ 4684:
/***/ ((module) => {


class ApiFeatures {
    constructor(query, querystr){
        this.query = query;
        this.querystr = querystr;
    }
    search() {
        const keyword = this.querystr.keyword ? {
            name: {
                $regex: this.querystr.keyword,
                $options: "i"
            }
        } : {};
        this.query = this.query.find({
            ...keyword
        });
        return this;
    }
}
module.exports = ApiFeatures;


/***/ })

};
;