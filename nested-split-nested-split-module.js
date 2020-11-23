(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nested-split-nested-split-module"],{

/***/ "r7pf":
/*!**************************************************************!*\
  !*** ./src/app/examples/nested-split/nested-split.module.ts ***!
  \**************************************************************/
/*! exports provided: NestedSplitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedSplitModule", function() { return NestedSplitModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-split */ "vX8g");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/ui.module */ "oRDy");
/* harmony import */ var _nested_split_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nested-split.component */ "uC+9");







var NestedSplitModule = /** @class */ (function () {
    function NestedSplitModule() {
    }
    NestedSplitModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_split__WEBPACK_IMPORTED_MODULE_4__["AngularSplitModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _nested_split_component__WEBPACK_IMPORTED_MODULE_6__["NestedComponent"] }]),
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
            ],
            declarations: [_nested_split_component__WEBPACK_IMPORTED_MODULE_6__["NestedComponent"]],
        })
    ], NestedSplitModule);
    return NestedSplitModule;
}());



/***/ }),

/***/ "uC+9":
/*!*****************************************************************!*\
  !*** ./src/app/examples/nested-split/nested-split.component.ts ***!
  \*****************************************************************/
/*! exports provided: NestedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedComponent", function() { return NestedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/AComponent */ "AD80");



var NestedComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NestedComponent, _super);
    function NestedComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NestedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-ex-nested',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                class: 'split-example-page',
            },
            template: "\n    {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <sp-example-title [type]=\"exampleEnum.NESTED\"></sp-example-title>\n      <div class=\"split-example\" style=\"height: 400px;\">\n        <as-split direction=\"horizontal\" restrictMove=\"true\" [useTransition]=\"true\">\n          <as-split-area size=\"40\">\n            <as-split direction=\"vertical\" restrictMove=\"true\">\n              <as-split-area>\n                <p>\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud\n                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                </p>\n              </as-split-area>\n              <as-split-area>\n                <p>\n                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta\n                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n                  consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius\n                  modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,\n                  quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\n                  consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae\n                  consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n                </p>\n              </as-split-area>\n              <as-split-area>\n                <p>\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud\n                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                </p>\n              </as-split-area>\n            </as-split>\n          </as-split-area>\n          <as-split-area size=\"60\">\n            <as-split direction=\"vertical\" restrictMove=\"true\">\n              <as-split-area size=\"25\">\n                <p>\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud\n                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                </p>\n              </as-split-area>\n              <as-split-area size=\"75\">\n                <p>\n                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta\n                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n                  consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius\n                  modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,\n                  quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\n                  consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae\n                  consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n                </p>\n              </as-split-area>\n            </as-split>\n          </as-split-area>\n        </as-split>\n      </div>\n    </div>\n  ",
        })
    ], NestedComponent);
    return NestedComponent;
}(_ui_components_AComponent__WEBPACK_IMPORTED_MODULE_2__["AComponent"]));



/***/ })

}]);
//# sourceMappingURL=nested-split-nested-split-module.js.map