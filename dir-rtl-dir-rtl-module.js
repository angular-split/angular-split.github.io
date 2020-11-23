(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dir-rtl-dir-rtl-module"],{

/***/ "62SI":
/*!*******************************************************!*\
  !*** ./src/app/examples/dir-rtl/dir-rtl.component.ts ***!
  \*******************************************************/
/*! exports provided: DirRtlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirRtlComponent", function() { return DirRtlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/AComponent */ "AD80");



var DirRtlComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DirRtlComponent, _super);
    function DirRtlComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dir = 'rtl';
        return _this;
    }
    DirRtlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-ex-dir_rtl',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                class: 'split-example-page',
            },
            template: "\n    {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <sp-example-title [type]=\"exampleEnum.DIR\"></sp-example-title>\n      <div class=\"split-example\">\n        <as-split [dir]=\"dir\">\n          <as-split-area size=\"20\">\n            <p>\n              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation\n              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n              voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            </p>\n          </as-split-area>\n          <as-split-area size=\"40\">\n            <p>\n              2. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam\n              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n              consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi\n              tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis\n              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis\n              autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel\n              illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n            </p>\n          </as-split-area>\n          <as-split-area size=\"40\">\n            <p>\n              3. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam\n              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n              consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi\n              tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis\n              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis\n              autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel\n              illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n            </p>\n          </as-split-area>\n        </as-split>\n      </div>\n      <br />\n      <div class=\"btns\">\n        <button class=\"btn btn-warning\" (click)=\"dir = dir === 'rtl' ? 'ltr' : 'rtl'\">\n          {{ 'Toggle dir: \"' + dir + '\"' }}\n        </button>\n      </div>\n    </div>\n  ",
            styles: ["\n      .btns {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n    "]
        })
    ], DirRtlComponent);
    return DirRtlComponent;
}(_ui_components_AComponent__WEBPACK_IMPORTED_MODULE_2__["AComponent"]));



/***/ }),

/***/ "lTBL":
/*!****************************************************!*\
  !*** ./src/app/examples/dir-rtl/dir-rtl.module.ts ***!
  \****************************************************/
/*! exports provided: DirRtlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirRtlModule", function() { return DirRtlModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-split */ "vX8g");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/ui.module */ "oRDy");
/* harmony import */ var _dir_rtl_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dir-rtl.component */ "62SI");







var DirRtlModule = /** @class */ (function () {
    function DirRtlModule() {
    }
    DirRtlModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _dir_rtl_component__WEBPACK_IMPORTED_MODULE_6__["DirRtlComponent"] }]),
                angular_split__WEBPACK_IMPORTED_MODULE_4__["AngularSplitModule"],
            ],
            declarations: [_dir_rtl_component__WEBPACK_IMPORTED_MODULE_6__["DirRtlComponent"]],
        })
    ], DirRtlModule);
    return DirRtlModule;
}());



/***/ })

}]);
//# sourceMappingURL=dir-rtl-dir-rtl-module.js.map