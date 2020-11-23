(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["toggling-dom-and-visibility-toggling-dom-and-visibility-module"],{

/***/ "D5yK":
/*!***********************************************************************************************!*\
  !*** ./src/app/examples/toggling-dom-and-visibility/toggling-dom-and-visibility.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TogglingDomAndVisibleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TogglingDomAndVisibleComponent", function() { return TogglingDomAndVisibleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/AComponent */ "AD80");



var TogglingDomAndVisibleComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TogglingDomAndVisibleComponent, _super);
    function TogglingDomAndVisibleComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.action = {
            isVisibleA: true,
            isVisibleB: true,
            isVisibleC: true,
            isPresentA: true,
            isPresentB: true,
            isPresentC: true,
            logs: '',
        };
        return _this;
    }
    TogglingDomAndVisibleComponent.prototype.log = function (eventName, e) {
        this.action.logs = new Date() + ": " + eventName + " > " + e + "\n" + this.action.logs;
    };
    TogglingDomAndVisibleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-ex-toggling-dom-and-visible',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                class: 'split-example-page',
            },
            template: "\n    {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <sp-example-title [type]=\"exampleEnum.TOGGLE\"></sp-example-title>\n      <div class=\"split-example ex1\" style=\"height: 150px;\">\n        <as-split [gutterSize]=\"15\" (dragEnd)=\"log('dragEnd', $event)\">\n          <as-split-area *ngIf=\"action.isPresentA\" [visible]=\"action.isVisibleA\" [order]=\"0\">\n            <p>A</p>\n          </as-split-area>\n          <as-split-area *ngIf=\"action.isPresentB\" [visible]=\"action.isVisibleB\" [order]=\"1\">\n            <p>B</p>\n          </as-split-area>\n          <as-split-area *ngIf=\"action.isPresentC\" [visible]=\"action.isVisibleC\" [order]=\"2\">\n            <p>C</p>\n          </as-split-area>\n        </as-split>\n      </div>\n      <p>Toggle <code>[visible]=\"boolean\"</code> properties:</p>\n      <div class=\"btns\">\n        <div class=\"btn-group\">\n          <label\n            class=\"btn btn-warning\"\n            [class.active]=\"!action.isVisibleA\"\n            (click)=\"action.isVisibleA = !action.isVisibleA\"\n            >{{ 'areaA: ' + action.isVisibleA }}</label\n          >\n          <label\n            class=\"btn btn-warning\"\n            [class.active]=\"!action.isVisibleB\"\n            (click)=\"action.isVisibleB = !action.isVisibleB\"\n            >{{ 'areaB: ' + action.isVisibleB }}</label\n          >\n          <label\n            class=\"btn btn-warning\"\n            [class.active]=\"!action.isVisibleC\"\n            (click)=\"action.isVisibleC = !action.isVisibleC\"\n            >{{ 'areaC: ' + action.isVisibleC }}</label\n          >\n        </div>\n      </div>\n      <p>Toggle <code>*ngIf=\"boolean\"</code> properties:</p>\n      <div class=\"btns\">\n        <div class=\"btn-group\">\n          <label\n            class=\"btn btn-warning\"\n            [class.active]=\"!action.isPresentA\"\n            (click)=\"action.isPresentA = !action.isPresentA\"\n            >{{ 'areaA: ' + action.isPresentA }}</label\n          >\n          <label\n            class=\"btn btn-warning\"\n            [class.active]=\"!action.isPresentB\"\n            (click)=\"action.isPresentB = !action.isPresentB\"\n            >{{ 'areaB: ' + action.isPresentB }}</label\n          >\n          <label\n            class=\"btn btn-warning\"\n            [class.active]=\"!action.isPresentC\"\n            (click)=\"action.isPresentC = !action.isPresentC\"\n            >{{ 'areaC: ' + action.isPresentC }}</label\n          >\n        </div>\n      </div>\n      <br />\n      <div class=\"alert alert-danger\" role=\"alert\">\n        <b>Warning:</b><br /><code>[visible]=\"false\"</code> only hides elements and don't remove it from the DOM, It\n        could lead to useless change detection processing.<br />Use of <code>*ngIf=\"false\"</code> should be the default\n        option unless you have reasons to keep DOM elements.\n      </div>\n    </div>\n  ",
            styles: ["\n      .btns {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n    "]
        })
    ], TogglingDomAndVisibleComponent);
    return TogglingDomAndVisibleComponent;
}(_ui_components_AComponent__WEBPACK_IMPORTED_MODULE_2__["AComponent"]));



/***/ }),

/***/ "XJ+q":
/*!********************************************************************************************!*\
  !*** ./src/app/examples/toggling-dom-and-visibility/toggling-dom-and-visibility.module.ts ***!
  \********************************************************************************************/
/*! exports provided: TogglingDomAndVisibilityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TogglingDomAndVisibilityModule", function() { return TogglingDomAndVisibilityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-split */ "vX8g");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/ui.module */ "oRDy");
/* harmony import */ var _toggling_dom_and_visibility_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toggling-dom-and-visibility.component */ "D5yK");







var TogglingDomAndVisibilityModule = /** @class */ (function () {
    function TogglingDomAndVisibilityModule() {
    }
    TogglingDomAndVisibilityModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _toggling_dom_and_visibility_component__WEBPACK_IMPORTED_MODULE_6__["TogglingDomAndVisibleComponent"] }]),
                angular_split__WEBPACK_IMPORTED_MODULE_4__["AngularSplitModule"],
            ],
            declarations: [_toggling_dom_and_visibility_component__WEBPACK_IMPORTED_MODULE_6__["TogglingDomAndVisibleComponent"]],
        })
    ], TogglingDomAndVisibilityModule);
    return TogglingDomAndVisibilityModule;
}());



/***/ })

}]);
//# sourceMappingURL=toggling-dom-and-visibility-toggling-dom-and-visibility-module.js.map