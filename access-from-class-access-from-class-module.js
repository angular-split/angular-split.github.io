(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["access-from-class-access-from-class-module"],{

/***/ "CPsE":
/*!***************************************************************************!*\
  !*** ./src/app/examples/access-from-class/access-from-class.component.ts ***!
  \***************************************************************************/
/*! exports provided: AccessFromClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessFromClassComponent", function() { return AccessFromClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-split */ "vX8g");
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/AComponent */ "AD80");




var AccessFromClassComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AccessFromClassComponent, _super);
    function AccessFromClassComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccessFromClassComponent.prototype.ngAfterViewInit = function () {
        console.log('Area Components: ', this.areasEl);
    };
    AccessFromClassComponent.propDecorators = {
        splitEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [angular_split__WEBPACK_IMPORTED_MODULE_2__["SplitComponent"],] }],
        areasEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: [angular_split__WEBPACK_IMPORTED_MODULE_2__["SplitAreaDirective"],] }]
    };
    AccessFromClassComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-ex-class-access',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                class: 'split-example-page',
            },
            template: "\n    <div class=\"container\">\n      <sp-example-title [type]=\"exampleEnum.CODE\"></sp-example-title>\n      <div class=\"split-example\">\n        <as-split>\n          <as-split-area [size]=\"75\">\n            <p>\n              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam\n              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n              consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi\n              tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis\n              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis\n              autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel\n              illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n            </p>\n          </as-split-area>\n          <as-split-area [size]=\"3\">\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation\n              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n              voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            </p>\n          </as-split-area>\n          <as-split-area [visible]=\"false\" [size]=\"18\">\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation\n              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n              voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            </p>\n          </as-split-area>\n          <as-split-area [size]=\"4\">\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation\n              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n              voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            </p>\n          </as-split-area>\n        </as-split>\n      </div>\n      <br />\n      <div class=\"btns\">\n        <div>\n          <button\n            class=\"btn btn-warning\"\n            (click)=\"splitEl.direction = splitEl?.direction === 'horizontal' ? 'vertical' : 'horizontal'\"\n          >\n            {{ 'Toggle direction: \"' + splitEl?.direction + '\"' }}\n          </button>\n        </div>\n        <div>\n          <button\n            class=\"btn btn-warning\"\n            [class.active]=\"!splitEl?.disabled\"\n            (click)=\"splitEl.disabled = !splitEl?.disabled\"\n          >\n            {{ 'splitEl.disabled: ' + splitEl?.disabled }}\n          </button>\n        </div>\n        <div>\n          <button class=\"btn btn-warning\" (click)=\"splitEl.dir = splitEl?.dir === 'rtl' ? 'ltr' : 'rtl'\">\n            {{ 'splitEl.dir: \"' + splitEl?.dir + '\"' }}\n          </button>\n        </div>\n        <div>\n          <label>Gutter size: </label>\n          <div class=\"btn-group\">\n            <label\n              class=\"btn btn-warning btn-sm\"\n              (click)=\"splitEl.gutterSize = null\"\n              [class.active]=\"splitEl?.gutterSize === 11\"\n              >null</label\n            >\n            <label\n              class=\"btn btn-warning btn-sm\"\n              (click)=\"splitEl.gutterSize = 7\"\n              [class.active]=\"splitEl?.gutterSize === 7\"\n              >7</label\n            >\n            <label\n              class=\"btn btn-warning btn-sm\"\n              (click)=\"splitEl.gutterSize = 22\"\n              [class.active]=\"splitEl?.gutterSize === 22\"\n              >22</label\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n      .btns {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-around;\n      }\n      .btns > div {\n        margin-bottom: 10px;\n      }\n    "]
        })
    ], AccessFromClassComponent);
    return AccessFromClassComponent;
}(_ui_components_AComponent__WEBPACK_IMPORTED_MODULE_3__["AComponent"]));



/***/ }),

/***/ "ktm8":
/*!************************************************************************!*\
  !*** ./src/app/examples/access-from-class/access-from-class.module.ts ***!
  \************************************************************************/
/*! exports provided: AccessFromClassModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessFromClassModule", function() { return AccessFromClassModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-split */ "vX8g");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/ui.module */ "oRDy");
/* harmony import */ var _access_from_class_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./access-from-class.component */ "CPsE");







var AccessFromClassModule = /** @class */ (function () {
    function AccessFromClassModule() {
    }
    AccessFromClassModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _access_from_class_component__WEBPACK_IMPORTED_MODULE_6__["AccessFromClassComponent"] }]),
                angular_split__WEBPACK_IMPORTED_MODULE_4__["AngularSplitModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
            ],
            declarations: [_access_from_class_component__WEBPACK_IMPORTED_MODULE_6__["AccessFromClassComponent"]],
        })
    ], AccessFromClassModule);
    return AccessFromClassModule;
}());



/***/ })

}]);
//# sourceMappingURL=access-from-class-access-from-class-module.js.map