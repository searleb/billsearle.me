webpackHotUpdate("static/development/pages/resume.js",{

/***/ "./pages/resume.js":
/*!*************************!*\
  !*** ./pages/resume.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.json */ "./pages/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ "./pages/config.json", 1);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Link */ "./components/Link/index.js");
/* harmony import */ var _scripts_year_diff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/year-diff */ "./scripts/year-diff.js");
/* harmony import */ var _scripts_year_diff__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_year_diff__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/developer/Sites/billsearle.me/pages/resume.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var _config$resume = _config_json__WEBPACK_IMPORTED_MODULE_2__.resume,
    education = _config$resume.education,
    work = _config$resume.work;

var Resume = function Resume() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("section", {
    id: "resume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Resume / CV"), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Summary"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Senior Front-End Web Developer with 5+ years experience working across a wide range of projects and industries. I've worked on everything from marketing sites to realtime trading platforms to streaming audio apps."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "I have worked professionally as a developer since 2014 after making a career change from tech support by completing over 500 hours of classroom tuition from General Assembly and immersing myself in the industry through freelance, agency and corporate roles."), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Education"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, education.map(function (item) {
    return __jsx("li", {
      className: "mb-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, item.date, " ", item.school, " ", __jsx("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "- ", item.location), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), item.title));
  })), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Work Experience"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, work.map(function (item) {
    return __jsx("li", {
      className: "mb-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, item.date, __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), item.title, " ", __jsx("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "- ", item.location)), item.gigs && __jsx("ul", {
      className: "list-inside list-disc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, item.gigs.map(function (gig) {
      return __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, gig.title, " ", __jsx("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "- ", gig.location));
    })));
  })), __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "text-2xl",
    href: "https://docs.google.com/document/d/1ugtZ9-HNzOBHEnM5lrMCVPztLnxqFPr2Ae4fYsAXndI/edit?usp=sharing",
    text: "See complete resume here.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Resume);

/***/ }),

/***/ "./scripts/year-diff.js":
/*!******************************!*\
  !*** ./scripts/year-diff.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

})
//# sourceMappingURL=resume.js.86fd191a59a658f689bc.hot-update.js.map