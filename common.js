(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "AD80":
/*!*********************************************!*\
  !*** ./src/app/ui/components/AComponent.ts ***!
  \*********************************************/
/*! exports provided: AComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AComponent", function() { return AComponent; });
/* harmony import */ var _examples_example_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../examples/example-types */ "3Ryi");
/* harmony import */ var _utils_format_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/format-date */ "R+bW");


var AComponent = /** @class */ (function () {
    function AComponent() {
        this.exampleEnum = _examples_example_types__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"];
    }
    AComponent.prototype.testChangeDetectorRun = function () {
        console.log(Object(_utils_format_date__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date()) + " > AComponent.ts - Change detection just ran!");
        return '';
    };
    return AComponent;
}());



/***/ }),

/***/ "R+bW":
/*!**************************************!*\
  !*** ./src/app/utils/format-date.ts ***!
  \**************************************/
/*! exports provided: formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
function formatDate(date) {
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var millisecond = date.getMilliseconds();
    var hourFormatted = hour % 12 || 12; // hour returned in 24 hour format
    var minuteFormatted = minute < 10 ? '0' + minute : minute;
    var secondFormatted = second < 10 ? '0' + second : second;
    var millisecondFormatted = millisecond < 100 ? '0' + millisecond : millisecond;
    return hourFormatted + ":" + minuteFormatted + ":" + secondFormatted + "." + millisecondFormatted;
}


/***/ })

}]);
//# sourceMappingURL=common.js.map