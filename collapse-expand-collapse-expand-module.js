(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["collapse-expand-collapse-expand-module"],{

/***/ "gUNX":
/*!********************************************************************!*\
  !*** ./src/app/examples/collapse-expand/collapse-expand.module.ts ***!
  \********************************************************************/
/*! exports provided: CollapseExpandModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseExpandModule", function() { return CollapseExpandModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-split */ "vX8g");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/ui.module */ "oRDy");
/* harmony import */ var _collapse_expand_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collapse-expand.component */ "h1fD");







var CollapseExpandModule = /** @class */ (function () {
    function CollapseExpandModule() {
    }
    CollapseExpandModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _collapse_expand_component__WEBPACK_IMPORTED_MODULE_6__["CollapseExpandComponent"] }]),
                angular_split__WEBPACK_IMPORTED_MODULE_4__["AngularSplitModule"],
            ],
            declarations: [_collapse_expand_component__WEBPACK_IMPORTED_MODULE_6__["CollapseExpandComponent"]],
        })
    ], CollapseExpandModule);
    return CollapseExpandModule;
}());



/***/ }),

/***/ "h1fD":
/*!***********************************************************************!*\
  !*** ./src/app/examples/collapse-expand/collapse-expand.component.ts ***!
  \***********************************************************************/
/*! exports provided: CollapseExpandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseExpandComponent", function() { return CollapseExpandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-split */ "vX8g");
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/AComponent */ "AD80");




var CollapseExpandComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CollapseExpandComponent, _super);
    function CollapseExpandComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollapseExpandComponent.prototype.ngAfterViewInit = function () {
        // console.log('Area Components: ', this.areasEl);
    };
    CollapseExpandComponent.prototype.onClose1 = function (newSize) {
        if (newSize === void 0) { newSize = 0; }
        this.areasEl.first.collapse(newSize);
    };
    CollapseExpandComponent.prototype.onClose3 = function (newSize) {
        if (newSize === void 0) { newSize = 0; }
        this.areasEl.last.collapse(newSize, 'left');
    };
    CollapseExpandComponent.prototype.onExpand1 = function () {
        this.areasEl.first.expand();
    };
    CollapseExpandComponent.prototype.onExpand3 = function () {
        this.areasEl.last.expand();
    };
    CollapseExpandComponent.propDecorators = {
        splitEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [angular_split__WEBPACK_IMPORTED_MODULE_2__["SplitComponent"],] }],
        areasEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: [angular_split__WEBPACK_IMPORTED_MODULE_2__["SplitAreaDirective"],] }]
    };
    CollapseExpandComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-ex-class-collapse',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                class: 'split-example-page',
            },
            template: "\n    <div class=\"container\">\n      <sp-example-title [type]=\"exampleEnum.COLLAPSE\"></sp-example-title>\n      <div class=\"split-example\">\n        <as-split [unit]=\"'pixel'\">\n          <as-split-area [size]=\"200\">\n            <div\n              style=\"height: 100%;display: flex;justify-content: center;align-items: center; background-color: antiquewhite;\"\n            >\n              area #1\n            </div>\n          </as-split-area>\n          <as-split-area>\n            <div\n              style=\"height: 100%;display: flex;justify-content: center;align-items: center; background-color: gainsboro;\"\n            >\n              area #2\n            </div>\n          </as-split-area>\n          <as-split-area [size]=\"100\">\n            <div\n              style=\"height: 100%;display: flex;justify-content: center;align-items: center; background-color: burlywood;\"\n            >\n              area #3\n            </div>\n          </as-split-area>\n        </as-split>\n      </div>\n      <br />\n      <ul>\n        <li><b>collapse(newSize:number = 0)</b> will force the area the be the width given and its gutter disabled.</li>\n        <li><b>expand()</b> will restore the area to its size before it was collapsed.</li>\n      </ul>\n      <br /><br />\n      <div class=\"btns\">\n        <div>\n          <button class=\"btn btn-warning\" style=\"margin-right: 10px\" (click)=\"onClose1()\">Collapse #1 to 0px</button>\n          <button class=\"btn btn-warning\" (click)=\"onClose1(40)\">Collapse #1 to 40px</button>\n        </div>\n        <div>\n          <button class=\"btn btn-warning\" style=\"margin-right: 10px\" (click)=\"onClose3()\">Collapse #3 to 0px</button>\n          <button class=\"btn btn-warning\" (click)=\"onClose3(60)\">Collapse #3 to 60px</button>\n        </div>\n      </div>\n      <div class=\"btns\">\n        <div>\n          <button class=\"btn btn-warning\" style=\"margin-right: 10px\" (click)=\"onExpand1()\">Expand #1</button>\n        </div>\n        <div>\n          <button class=\"btn btn-warning\" style=\"margin-right: 10px\" (click)=\"onExpand3()\">Expand #3</button>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n      .btns {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-around;\n      }\n      .btns > div {\n        margin-bottom: 10px;\n      }\n    "]
        })
    ], CollapseExpandComponent);
    return CollapseExpandComponent;
}(_ui_components_AComponent__WEBPACK_IMPORTED_MODULE_3__["AComponent"]));



/***/ })

}]);
//# sourceMappingURL=collapse-expand-collapse-expand-module.js.map