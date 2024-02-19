"use strict";
exports.id = 5252;
exports.ids = [5252];
exports.modules = {

/***/ 5252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$z": () => (/* binding */ useUpdateBlogMutation),
/* harmony export */   "AW": () => (/* binding */ useGetFormDataQuery),
/* harmony export */   "BC": () => (/* binding */ useDeleteFormMutation),
/* harmony export */   "CQ": () => (/* binding */ useDeleteCarouselMutation),
/* harmony export */   "Dd": () => (/* binding */ useCreateHomeCarouselMutation),
/* harmony export */   "EJ": () => (/* binding */ useDeleteFeedbackMutation),
/* harmony export */   "I1": () => (/* binding */ useDeleteUserMutation),
/* harmony export */   "Iw": () => (/* binding */ useGetSuccessStoryDetailsQuery),
/* harmony export */   "KX": () => (/* binding */ useDeleteBlogMutation),
/* harmony export */   "Kc": () => (/* binding */ useGetFormDetailsQuery),
/* harmony export */   "Mm": () => (/* binding */ useCreateAboutMutation),
/* harmony export */   "NS": () => (/* binding */ useGetAboutQuery),
/* harmony export */   "PQ": () => (/* binding */ consulApi),
/* harmony export */   "Pw": () => (/* binding */ useCreateFaqMutation),
/* harmony export */   "RV": () => (/* binding */ useGetSingleUserQuery),
/* harmony export */   "S3": () => (/* binding */ useCreateSuccessStoryMutation),
/* harmony export */   "Tz": () => (/* binding */ useGetSuccessStoryQuery),
/* harmony export */   "WY": () => (/* binding */ useDeleteSuccessStoryMutation),
/* harmony export */   "Wo": () => (/* binding */ useUpdateFeedbackMutation),
/* harmony export */   "X5": () => (/* binding */ useGetFaqQuery),
/* harmony export */   "XJ": () => (/* binding */ useGetCarouselDetailsQuery),
/* harmony export */   "Xq": () => (/* binding */ useGetHomeCarouselQuery),
/* harmony export */   "Yg": () => (/* binding */ useUpdateSuccessStoryMutation),
/* harmony export */   "b8": () => (/* binding */ useGetBlogDetailsQuery),
/* harmony export */   "bP": () => (/* binding */ useGetFeedbackDetailsQuery),
/* harmony export */   "by": () => (/* binding */ useUpdateCarouselMutation),
/* harmony export */   "db": () => (/* binding */ useCreateFeedbackMutation),
/* harmony export */   "eI": () => (/* binding */ useGetAboutDetailsQuery),
/* harmony export */   "fX": () => (/* binding */ useUpdateAboutMutation),
/* harmony export */   "fv": () => (/* binding */ useCreateFormDataMutation),
/* harmony export */   "hz": () => (/* binding */ useUpdateFaqMutation),
/* harmony export */   "kD": () => (/* binding */ useUpdateUserMutation),
/* harmony export */   "mN": () => (/* binding */ useDeleteAboutMutation),
/* harmony export */   "mO": () => (/* binding */ useDeleteFaqMutation),
/* harmony export */   "ny": () => (/* binding */ useCreateUserMutation),
/* harmony export */   "sY": () => (/* binding */ useGetBlogQuery),
/* harmony export */   "tg": () => (/* binding */ useCreateBlogMutation),
/* harmony export */   "uX": () => (/* binding */ useGetFeedbacksQuery),
/* harmony export */   "xM": () => (/* binding */ useGetFaqDetailsQuery),
/* harmony export */   "yU": () => (/* binding */ useUpdateFormMutation),
/* harmony export */   "zQ": () => (/* binding */ useGetUsersQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);


const consulApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "consulApi",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "http://localhost:3000/api/"
    }),
    tagTypes: [
        "Carousel",
        "Feedback",
        "Form",
        "Blog",
        "Faq",
        "About",
        "User",
        "Success"
    ],
    extractRehydrationInfo (action, { reducerPath  }) {
        if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder)=>({
            getHomeCarousel: builder.query({
                query: ()=>({
                        url: "carousel",
                        method: "GET"
                    }),
                providesTags: [
                    "Carousel"
                ]
            }),
            createHomeCarousel: builder.mutation({
                query: (data)=>{
                    return {
                        url: `carousel`,
                        method: "POST",
                        body: data,
                        prepareHeaders: (headers)=>{
                            headers.set("Content-Type", "multipart/form-data");
                            return headers;
                        }
                    };
                },
                invalidatesTags: [
                    "Carousel"
                ]
            }),
            getCarouselDetails: builder.query({
                query: (id)=>{
                    return {
                        url: `carousel/${id}`,
                        method: "GET"
                    };
                },
                providesTags: [
                    "Carousel"
                ]
            }),
            updateCarousel: builder.mutation({
                query: ({ id , carouselData  })=>{
                    return {
                        url: `carousel/${id}`,
                        method: "PUT",
                        body: carouselData,
                        prepareHeaders: (headers)=>{
                            headers.set("Content-Type", "multipart/form-data");
                            return headers;
                        }
                    };
                },
                invalidatesTags: [
                    "Carousel"
                ]
            }),
            deleteCarousel: builder.mutation({
                query: (id)=>{
                    return {
                        url: `carousel/${id}`,
                        method: "DELETE"
                    };
                },
                invalidatesTags: [
                    "Carousel"
                ]
            }),
            createFeedback: builder.mutation({
                query: (data)=>{
                    return {
                        url: `feedback`,
                        method: "POST",
                        body: data,
                        prepareHeaders: (headers)=>{
                            headers.set("Content-Type", "multipart/form-data");
                            return headers;
                        }
                    };
                },
                invalidatesTags: [
                    "Feedback"
                ]
            }),
            getFeedbacks: builder.query({
                query: ()=>({
                        url: "feedback",
                        method: "GET"
                    }),
                providesTags: [
                    "Feedback"
                ]
            }),
            getFeedbackDetails: builder.query({
                query: (id)=>{
                    return {
                        url: `feedback/${id}`,
                        method: "GET"
                    };
                },
                providesTags: [
                    "Feedback"
                ]
            }),
            updateFeedback: builder.mutation({
                query: ({ id , data  })=>{
                    return {
                        url: `feedback/${id}`,
                        method: "PUT",
                        body: data,
                        prepareHeaders: (headers)=>{
                            headers.set("Content-Type", "multipart/form-data");
                            return headers;
                        }
                    };
                },
                invalidatesTags: [
                    "Feedback"
                ]
            }),
            deleteFeedback: builder.mutation({
                query: (id)=>{
                    return {
                        url: `feedback/${id}`,
                        method: "DELETE"
                    };
                },
                invalidatesTags: [
                    "Feedback"
                ]
            }),
            getFaq: builder.query({
                query: ()=>({
                        url: "faq",
                        method: "GET"
                    }),
                providesTags: [
                    "Faq"
                ]
            }),
            createFaq: builder.mutation({
                query: (data)=>{
                    return {
                        url: `faq`,
                        method: "POST",
                        body: data,
                        prepareHeaders: (headers)=>{
                            headers.set("Content-Type", "multipart/form-data");
                            return headers;
                        }
                    };
                },
                invalidatesTags: [
                    "Faq"
                ]
            }),
            getFaqDetails: builder.query({
                query: (id)=>{
                    return {
                        url: `faq/${id}`,
                        method: "GET"
                    };
                },
                providesTags: [
                    "Faq"
                ]
            }),
            updateFaq: builder.mutation({
                query: ({ id , data  })=>{
                    return {
                        url: `faq/${id}`,
                        method: "PUT",
                        body: data,
                        prepareHeaders: (headers)=>{
                            headers.set("Content-Type", "multipart/form-data");
                            return headers;
                        }
                    };
                },
                invalidatesTags: [
                    "Faq"
                ]
            }),
            deleteFaq: builder.mutation({
                query: (id)=>{
                    return {
                        url: `faq/${id}`,
                        method: "DELETE"
                    };
                },
                invalidatesTags: [
                    "Faq"
                ]
            }),
            getAbout: builder.query({
                query: ()=>({
                        url: "about",
                        method: "GET"
                    }),
                providesTags: [
                    "About"
                ]
            }),
            createAbout: builder.mutation({
                query: (data)=>{
                    return {
                        url: `about`,
                        method: "POST",
                        body: data,
                        prepareHeaders: (headers)=>{
                            headers.set("Content-Type", "multipart/form-data");
                            return headers;
                        }
                    };
                },
                invalidatesTags: [
                    "About"
                ]
            }),
            getAboutDetails: builder.query({
                query: (id)=>{
                    return {
                        url: `about/${id}`,
                        method: "GET"
                    };
                },
                providesTags: [
                    "About"
                ]
            }),
            updateAbout: builder.mutation({
                query: ({ id , data  })=>{
                    return {
                        url: `about/${id}`,
                        method: "PUT",
                        body: data,
                        prepareHeaders: (headers)=>{
                            headers.set("Content-Type", "multipart/form-data");
                            return headers;
                        }
                    };
                },
                invalidatesTags: [
                    "About"
                ]
            }),
            deleteAbout: builder.mutation({
                query: (id)=>{
                    return {
                        url: `about/${id}`,
                        method: "DELETE"
                    };
                },
                invalidatesTags: [
                    "About"
                ]
            }),
            getBlog: builder.query({
                query: (keyword = "")=>{
                    return {
                        url: `blog?keyword=${keyword}`,
                        method: "GET"
                    };
                },
                providesTags: [
                    "Blog"
                ]
            }),
            createBlog: builder.mutation({
                query: (data)=>{
                    return {
                        url: `blog`,
                        method: "POST",
                        body: data,
                        prepareHeaders: (headers)=>{
                            headers.set("Content-Type", "multipart/form-data");
                            return headers;
                        }
                    };
                },
                invalidatesTags: [
                    "Blog"
                ]
            }),
            getBlogDetails: builder.query({
                query: (id)=>{
                    return {
                        url: `blog/${id}`,
                        method: "GET"
                    };
                },
                providesTags: [
                    "Blog"
                ]
            }),
            updateBlog: builder.mutation({
                query: ({ id , data  })=>{
                    return {
                        url: `blog/${id}`,
                        method: "PUT",
                        body: data,
                        prepareHeaders: (headers)=>{
                            headers.set("Content-Type", "multipart/form-data");
                            return headers;
                        }
                    };
                },
                invalidatesTags: [
                    "Blog"
                ]
            }),
            deleteBlog: builder.mutation({
                query: (id)=>{
                    return {
                        url: `blog/${id}`,
                        method: "DELETE"
                    };
                },
                invalidatesTags: [
                    "Blog"
                ]
            }),
            getSuccessStory: builder.query({
                query: ()=>{
                    return {
                        url: `successstory`,
                        method: "GET"
                    };
                },
                providesTags: [
                    "Success"
                ]
            }),
            createSuccessStory: builder.mutation({
                query: (data)=>{
                    return {
                        url: `successstory`,
                        method: "POST",
                        body: data,
                        prepareHeaders: (headers)=>{
                            headers.set("Content-Type", "multipart/form-data");
                            return headers;
                        }
                    };
                },
                invalidatesTags: [
                    "Success"
                ]
            }),
            getSuccessStoryDetails: builder.query({
                query: (id)=>{
                    return {
                        url: `successstory/${id}`,
                        method: "GET"
                    };
                },
                providesTags: [
                    "Success"
                ]
            }),
            updateSuccessStory: builder.mutation({
                query: ({ id , data  })=>{
                    return {
                        url: `successstory/${id}`,
                        method: "PUT",
                        body: data,
                        prepareHeaders: (headers)=>{
                            headers.set("Content-Type", "multipart/form-data");
                            return headers;
                        }
                    };
                },
                invalidatesTags: [
                    "Success"
                ]
            }),
            deleteSuccessStory: builder.mutation({
                query: (id)=>{
                    return {
                        url: `successstory/${id}`,
                        method: "DELETE"
                    };
                },
                invalidatesTags: [
                    "Success"
                ]
            }),
            getFormData: builder.query({
                query: ()=>({
                        url: "form",
                        method: "GET"
                    }),
                providesTags: [
                    "Form"
                ]
            }),
            createFormData: builder.mutation({
                query: (data)=>{
                    return {
                        url: `form`,
                        method: "POST",
                        body: data
                    };
                },
                invalidatesTags: [
                    "Form"
                ]
            }),
            getFormDetails: builder.query({
                query: (id)=>{
                    return {
                        url: `form/${id}`,
                        method: "GET"
                    };
                },
                providesTags: [
                    "Form"
                ]
            }),
            updateForm: builder.mutation({
                query: ({ id , data  })=>{
                    return {
                        url: `form/${id}`,
                        method: "PUT",
                        body: data,
                        prepareHeaders: (headers)=>{
                            headers.set("Content-Type", "multipart/form-data");
                            return headers;
                        }
                    };
                },
                invalidatesTags: [
                    "Form"
                ]
            }),
            deleteForm: builder.mutation({
                query: (id)=>{
                    return {
                        url: `form/${id}`,
                        method: "DELETE"
                    };
                },
                invalidatesTags: [
                    "Form"
                ]
            }),
            getUsers: builder.query({
                query: ()=>({
                        url: "admin",
                        method: "GET"
                    }),
                providesTags: [
                    "User"
                ]
            }),
            createUser: builder.mutation({
                query: (data)=>{
                    return {
                        url: `register`,
                        method: "POST",
                        body: data,
                        prepareHeaders: (headers)=>{
                            headers.set("Content-Type", "multipart/form-data");
                            return headers;
                        }
                    };
                },
                invalidatesTags: [
                    "User"
                ]
            }),
            getSingleUser: builder.query({
                query: (id)=>{
                    return {
                        url: `admin/${id}`,
                        method: "GET"
                    };
                },
                providesTags: [
                    "User"
                ]
            }),
            updateUser: builder.mutation({
                query: ({ id , data  })=>{
                    return {
                        url: `admin/${id}`,
                        method: "PUT",
                        body: data,
                        prepareHeaders: (headers)=>{
                            headers.set("Content-Type", "multipart/form-data");
                            return headers;
                        }
                    };
                },
                invalidatesTags: [
                    "User"
                ]
            }),
            deleteUser: builder.mutation({
                query: (id)=>{
                    return {
                        url: `admin/${id}`,
                        method: "DELETE"
                    };
                },
                invalidatesTags: [
                    "Users"
                ]
            })
        })
});
const { useCreateHomeCarouselMutation , useDeleteCarouselMutation , useGetCarouselDetailsQuery , useGetHomeCarouselQuery , useUpdateCarouselMutation , useGetFeedbackDetailsQuery , useGetFeedbacksQuery , useCreateFeedbackMutation , useDeleteFeedbackMutation , useUpdateFeedbackMutation , useCreateFormDataMutation , useDeleteFormMutation , useGetFormDataQuery , useGetFormDetailsQuery , useUpdateFormMutation , useCreateFaqMutation , useGetFaqDetailsQuery , useGetFaqQuery , useUpdateFaqMutation , useDeleteFaqMutation , useCreateAboutMutation , useGetAboutDetailsQuery , useGetAboutQuery , useUpdateAboutMutation , useDeleteAboutMutation , useGetBlogDetailsQuery , useGetBlogQuery , useCreateBlogMutation , useUpdateBlogMutation , useDeleteBlogMutation , useGetSuccessStoryDetailsQuery , useCreateSuccessStoryMutation , useGetSuccessStoryQuery , useUpdateSuccessStoryMutation , useDeleteSuccessStoryMutation , useCreateUserMutation , useDeleteUserMutation , useGetSingleUserQuery , useGetUsersQuery , useUpdateUserMutation  } = consulApi;


/***/ })

};
;