"use strict";
exports.id = 2880;
exports.ids = [2880];
exports.modules = {

/***/ 3554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4934);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9070);
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1981);
/* harmony import */ var react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);










function DashboardNavbar() {
    const { data  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();
    const { collapseSidebar  } = (0,react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__.useProSidebar)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default()), {
            collapseOnSelect: true,
            expand: "lg",
            bg: "dark",
            variant: "dark",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    onClick: ()=>collapseSidebar(),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiFillCloseCircle, {
                        size: 40,
                        color: "White",
                        className: "mx-3"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default().Brand), {
                            as: (next_link__WEBPACK_IMPORTED_MODULE_9___default()),
                            href: "/admin/dashboard",
                            children: "Goodvibes Education Consultancy"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default().Toggle), {
                            "aria-controls": "responsive-navbar-nav"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default().Collapse), {
                            id: "responsive-navbar-nav",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    className: "me-auto",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            textAlign: "center",
                                            width: "40%",
                                            margin: "auto",
                                            color: "white"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    color: "white"
                                                },
                                                children: "Welcome"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                style: {
                                                    color: "red"
                                                },
                                                className: "my-auto",
                                                children: data?.user?.email
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                        variant: "danger",
                                        onClick: ()=>{
                                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signOut)({
                                                redirect: true,
                                                callbackUrl: "/"
                                            });
                                        },
                                        children: "Logout"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardNavbar);


/***/ }),

/***/ 5160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1981);
/* harmony import */ var react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);





const DashboardSidebar = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.Sidebar, {
        style: {
            height: "100vh"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    className: "text-center p-4",
                    children: "Dashboard"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.Menu, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.SubMenu, {
                        label: "UserData",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                as: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                                href: `/admin/dashboard/user/add`,
                                children: [
                                    " ",
                                    "Add User",
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                ad: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                                href: "/admin/dashboard/user",
                                children: [
                                    " ",
                                    "All",
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.SubMenu, {
                        label: "AboutData",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                as: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                                href: `/admin/dashboard/about/add`,
                                children: [
                                    " ",
                                    "Add About",
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                ad: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                                href: "/admin/dashboard/about",
                                children: [
                                    " ",
                                    "All",
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.SubMenu, {
                        label: "Carousel",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                as: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                                href: `/admin/dashboard/carousel/add`,
                                children: [
                                    " ",
                                    "Add Carousel",
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                ad: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                                href: "/admin/dashboard/carousel",
                                children: [
                                    " ",
                                    "All",
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.SubMenu, {
                        label: "SuccessStory",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                as: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                                href: `/admin/dashboard/successstory/add`,
                                children: [
                                    " ",
                                    "Add SuccessStory",
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                ad: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                                href: "/admin/dashboard/successstory",
                                children: [
                                    " ",
                                    "All",
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.SubMenu, {
                        label: "Faq",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                as: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                                href: `/admin/dashboard/faq/add`,
                                children: [
                                    " ",
                                    "Add Faq",
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                ad: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                                href: "/admin/dashboard/faq",
                                children: [
                                    " ",
                                    "All",
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.SubMenu, {
                        label: "Blog",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                as: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                                href: `/admin/dashboard/blog/add`,
                                children: [
                                    " ",
                                    "Add Blog",
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                ad: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                                href: "/admin/dashboard/blog",
                                children: [
                                    " ",
                                    "All",
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.SubMenu, {
                        label: "FeedbackData",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                            ad: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                            href: "/admin/dashboard/feedback",
                            children: [
                                " ",
                                "All",
                                " "
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.SubMenu, {
                        label: "FormData",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                            ad: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                            href: "/admin/dashboard/form",
                            children: [
                                " ",
                                "All",
                                " "
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardSidebar);


/***/ })

};
;