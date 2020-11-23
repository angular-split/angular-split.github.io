(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["min-max-split-min-max-split-module"],{

/***/ "Jov6":
/*!****************************************************************!*\
  !*** ./src/app/examples/min-max-split/min-max-split.module.ts ***!
  \****************************************************************/
/*! exports provided: MinMaxSplitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinMaxSplitModule", function() { return MinMaxSplitModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-split */ "vX8g");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/ui.module */ "oRDy");
/* harmony import */ var _min_max_split_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./min-max-split.component */ "oc3u");







var MinMaxSplitModule = /** @class */ (function () {
    function MinMaxSplitModule() {
    }
    MinMaxSplitModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_split__WEBPACK_IMPORTED_MODULE_4__["AngularSplitModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _min_max_split_component__WEBPACK_IMPORTED_MODULE_6__["MinMaxSplitComponent"] }]),
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
            ],
            declarations: [_min_max_split_component__WEBPACK_IMPORTED_MODULE_6__["MinMaxSplitComponent"]],
        })
    ], MinMaxSplitModule);
    return MinMaxSplitModule;
}());



/***/ }),

/***/ "oc3u":
/*!*******************************************************************!*\
  !*** ./src/app/examples/min-max-split/min-max-split.component.ts ***!
  \*******************************************************************/
/*! exports provided: MinMaxSplitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinMaxSplitComponent", function() { return MinMaxSplitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/AComponent */ "AD80");



var MinMaxSplitComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MinMaxSplitComponent, _super);
    function MinMaxSplitComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.restrictMove = false;
        return _this;
    }
    MinMaxSplitComponent.prototype.log = function (x) {
        console.log('dragEnd ', x.sizes, ' total > ', x.sizes.reduce(function (t, s) { return t + s; }, 0));
    };
    MinMaxSplitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                class: 'split-example-page',
            },
            template: "\n    {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <sp-example-title [type]=\"exampleEnum.MINMAX\"></sp-example-title>\n      <h5>Percent mode:</h5>\n      <div class=\"split-example ex-percent\">\n        <as-split unit=\"percent\" [restrictMove]=\"restrictMove\" gutterSize=\"30\" (dragEnd)=\"log($event)\">\n          <as-split-area size=\"30\" minSize=\"20\" maxSize=\"30\">\n            <p>size=\"30\"<br />minSize=\"20\"<br />maxSize=\"30\"</p>\n            <div class=\"txt-min\"><p>MIN</p></div>\n            <div class=\"txt-max\"><p>MAX</p></div>\n          </as-split-area>\n          <as-split-area size=\"40\" minSize=\"30\" maxSize=\"50\">\n            <p>size=\"40\"<br />minSize=\"30\"<br />maxSize=\"50\"</p>\n            <div class=\"txt-min\"><p>MIN</p></div>\n            <div class=\"txt-max\"><p>MAX</p></div>\n          </as-split-area>\n          <as-split-area size=\"30\" minSize=\"20\" maxSize=\"50\">\n            <p>size=\"30\"<br />minSize=\"20\"<br />maxSize=\"50\"</p>\n            <div class=\"txt-min\"><p>MIN</p></div>\n            <div class=\"txt-max\"><p>MAX</p></div>\n          </as-split-area>\n        </as-split>\n      </div>\n      <h5>Pixel mode:</h5>\n      <div class=\"split-example ex-pixel\">\n        <as-split unit=\"pixel\" [restrictMove]=\"restrictMove\" gutterSize=\"30\" (dragEnd)=\"log($event)\">\n          <as-split-area size=\"200\" minSize=\"100\" maxSize=\"200\">\n            <p>size=\"200\"<br />minSize=\"100\"<br />maxSize=\"200\"</p>\n            <div class=\"txt-min\"><p>MIN</p></div>\n            <div class=\"txt-max\"><p>MAX</p></div>\n          </as-split-area>\n          <as-split-area size=\"*\">\n            <p>size=\"*\"</p>\n            <div class=\"txt-min\"><p>MIN</p></div>\n            <div class=\"txt-max\"><p>MAX</p></div>\n          </as-split-area>\n          <as-split-area size=\"150\" lockSize=\"true\">\n            <p>size=\"150\"<br />lockSize=\"true\"<br /><br />Same as<br />minSize=\"150\"<br />maxSize=\"150\"</p>\n            <div class=\"txt-minmax\">\n              <p>MIN<br />&<br />MAX</p>\n            </div>\n          </as-split-area>\n          <as-split-area size=\"250\" minSize=\"250\" maxSize=\"400\">\n            <p>size=\"250\"<br />minSize=\"250\"<br />maxSize=\"400\"</p>\n            <div class=\"txt-min\"><p>MIN</p></div>\n            <div class=\"txt-max\"><p>MAX</p></div>\n          </as-split-area>\n        </as-split>\n      </div>\n      <br />\n      <div class=\"btns\">\n        <button class=\"btn btn-warning\" (click)=\"restrictMove = !restrictMove\">\n          {{ 'Restrict move: \"' + restrictMove + '\"' }}\n        </button>\n      </div>\n    </div>\n  ",
            styles: ["\n      .btns {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n\n      .txt-min,\n      .txt-max,\n      .txt-minmax {\n        pointer-events: none;\n        position: absolute;\n        opacity: 0;\n        transition: opacity 0.2s;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      .txt-min > p,\n      .txt-max > p,\n      .txt-minmax > p {\n        font-size: 30px;\n        font-weight: bold;\n        color: #cccccc;\n        text-align: center;\n      }\n\n      as-split-area {\n        background: lightblue;\n        transition: background 0.2s;\n        position: relative;\n        overflow: hidden !important;\n      }\n\n      as-split-area > p {\n        position: absolute;\n        font-size: 12px;\n        font-weight: bold;\n        padding: 5px;\n        line-height: 12px;\n      }\n\n      as-split-area.as-min {\n        background: green;\n      }\n      as-split-area.as-min .txt-min {\n        opacity: 1;\n      }\n      as-split-area.as-max {\n        background: red;\n      }\n      as-split-area.as-max .txt-max {\n        opacity: 1;\n      }\n      as-split-area.as-min.as-max {\n        background: #ff77e7;\n      }\n      as-split-area.as-min.as-max .txt-minmax {\n        opacity: 1;\n      }\n    "]
        })
    ], MinMaxSplitComponent);
    return MinMaxSplitComponent;
}(_ui_components_AComponent__WEBPACK_IMPORTED_MODULE_2__["AComponent"]));



/***/ })

}]);
//# sourceMappingURL=min-max-split-min-max-split-module.js.map