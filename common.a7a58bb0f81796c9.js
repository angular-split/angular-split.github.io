"use strict";
(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["common"],{

/***/ 9982:
/*!*********************************************!*\
  !*** ./src/app/ui/components/AComponent.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AComponent: () => (/* binding */ AComponent)
/* harmony export */ });
/* harmony import */ var _examples_example_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../examples/example-types */ 2807);
/* harmony import */ var _utils_format_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/format-date */ 3354);


class AComponent {
  constructor() {
    this.exampleEnum = _examples_example_types__WEBPACK_IMPORTED_MODULE_0__.ExampleEnum;
  }
  testChangeDetectorRun() {
    console.log(`${(0,_utils_format_date__WEBPACK_IMPORTED_MODULE_1__.formatDate)(new Date())} > AComponent.ts - Change detection just ran!`);
    return '';
  }
}

/***/ }),

/***/ 3354:
/*!**************************************!*\
  !*** ./src/app/utils/format-date.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDate: () => (/* binding */ formatDate)
/* harmony export */ });
function formatDate(date) {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const millisecond = date.getMilliseconds();
  const hourFormatted = hour % 12 || 12; // hour returned in 24 hour format
  const minuteFormatted = minute < 10 ? '0' + minute : minute;
  const secondFormatted = second < 10 ? '0' + second : second;
  const millisecondFormatted = millisecond < 100 ? '0' + millisecond : millisecond;
  return `${hourFormatted}:${minuteFormatted}:${secondFormatted}.${millisecondFormatted}`;
}

/***/ })

}]);
//# sourceMappingURL=common.a7a58bb0f81796c9.js.map