webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProjectList/index.js":
/*!*****************************************!*\
  !*** ./components/ProjectList/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProjectLink */ "./components/ProjectLink/index.js");
var _jsxFileName = "/Users/developer/Sites/billsearle.me/components/ProjectList/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ProjectList = function ProjectList(_ref) {
  var projects = _ref.projects,
      title = _ref.title;
  return __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, title), __jsx("div", {
    className: "border-b my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("ul", {
    className: "mb-16 animate-project-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, projects.map(function (project) {
    return __jsx("li", {
      key: project.title,
      className: "mb-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(_ProjectLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: project.link,
      text: project.title,
      tech: project.tech,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }));
  })));
};

ProjectList.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  projects: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectList);

/***/ })

})
//# sourceMappingURL=index.js.59b798625310c113a030.hot-update.js.map