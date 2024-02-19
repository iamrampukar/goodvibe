exports.id = 2555;
exports.ids = [2555];
exports.modules = {

/***/ 200:
/***/ ((module) => {

// Exports
module.exports = {
	"contentContainer": "HomeForm_contentContainer__Ov4vQ",
	"basicForm": "HomeForm_basicForm__w_MSA",
	"formcontainer": "HomeForm_formcontainer__vBlNy",
	"buttonContainer": "HomeForm_buttonContainer__7KSIU"
};


/***/ }),

/***/ 2555:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5252);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6201);
/* harmony import */ var _styles_HomeForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(200);
/* harmony import */ var _styles_HomeForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_HomeForm_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const HomeForm = ()=>{
    const [createFormData, { isError , isLoading , isSuccess  }] = (0,_frontend_services_api__WEBPACK_IMPORTED_MODULE_1__/* .useCreateFormDataMutation */ .fv)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [formdata, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        firstname: "",
        lastname: "",
        email: "",
        number: "",
        edulevel: "",
        course: ""
    });
    const { firstname , lastname , email , number , edulevel , course  } = formdata;
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (isError) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.error(isError);
        }
        if (isSuccess) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.success("Submitted Successfully");
            router.push("/");
        }
    });
    const submitHandler = (e)=>{
        e.preventDefault();
        const data = {
            firstname,
            lastname,
            email,
            number,
            edulevel,
            course
        };
        {
            console.log(data);
        }
        createFormData(data);
    };
    const onChange = (e)=>{
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                width: "100%"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_HomeForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().contentContainer),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "Interested in studying abroad?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                children: "Fill in your details and we’ll call you back!"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_HomeForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().formcontainer),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_HomeForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().basicForm),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
                                            type: "text",
                                            placeholder: "FirstName",
                                            name: "firstname",
                                            value: firstname,
                                            onChange: onChange
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
                                            type: "text",
                                            placeholder: "LastName",
                                            name: "lastname",
                                            value: lastname,
                                            onChange: onChange
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "my-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
                                        type: "email",
                                        placeholder: "Email Address",
                                        name: "email",
                                        value: email,
                                        onChange: onChange
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "my-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
                                        type: "number",
                                        placeholder: "Mobile Number",
                                        name: "number",
                                        value: number,
                                        onChange: onChange
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {
                                            htmlFor: "disabledTextInput",
                                            children: "Education Level"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
                                            type: "text",
                                            placeholder: "Education level",
                                            name: "edulevel",
                                            value: edulevel,
                                            onChange: onChange
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {
                                            htmlFor: "disabledTextInput",
                                            children: "Course"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
                                            type: "string",
                                            placeholder: "Course",
                                            name: "course",
                                            value: course,
                                            onChange: onChange
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_HomeForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().buttonContainer),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                            onClick: submitHandler,
                            children: "Help Me Study Abroad"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;