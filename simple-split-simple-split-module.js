(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["simple-split-simple-split-module"],{

/***/ "Q1IA":
/*!*****************************************************************!*\
  !*** ./src/app/examples/simple-split/simple-split.component.ts ***!
  \*****************************************************************/
/*! exports provided: SimpleSplitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleSplitComponent", function() { return SimpleSplitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-split */ "vX8g");
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/AComponent */ "AD80");




var SimpleSplitComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SimpleSplitComponent, _super);
    function SimpleSplitComponent() {
        var _this = _super.call(this) || this;
        _this.direction = 'horizontal';
        _this.sizes = {
            percent: {
                area1: 30,
                area2: 70,
            },
            pixel: {
                area1: 120,
                area2: '*',
                area3: 160,
            },
        };
        setTimeout(function () {
            console.log('>>> split > ', _this.split);
            console.log('>>> area1 > ', _this.area1);
            console.log('>>> area2 > ', _this.area2);
        }, 1000);
        return _this;
    }
    SimpleSplitComponent.prototype.dragEnd = function (unit, _a) {
        var sizes = _a.sizes;
        if (unit === 'percent') {
            this.sizes.percent.area1 = sizes[0];
            this.sizes.percent.area2 = sizes[1];
        }
        else if (unit === 'pixel') {
            this.sizes.pixel.area1 = sizes[0];
            this.sizes.pixel.area2 = sizes[1];
            this.sizes.pixel.area3 = sizes[2];
        }
    };
    SimpleSplitComponent.ctorParameters = function () { return []; };
    SimpleSplitComponent.propDecorators = {
        split: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['split',] }],
        area1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['area1',] }],
        area2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['area2',] }]
    };
    SimpleSplitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-ex-simple',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                class: 'split-example-page',
            },
            template: "\n    {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <sp-example-title [type]=\"exampleEnum.SIMPLE\"></sp-example-title>\n      <h5>Percent mode:</h5>\n      <div class=\"split-example ex-percent\">\n        <as-split unit=\"percent\" [direction]=\"direction\" (dragEnd)=\"dragEnd('percent', $event)\" #split=\"asSplit\">\n          <as-split-area size=\"30\" #area1=\"asSplitArea\">\n            <h5>Initial size: <b>30%</b></h5>\n            <h5>\n              Current size: <b>{{ sizes.percent.area1 }}%</b>\n            </h5>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation\n              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n              voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            </p>\n          </as-split-area>\n          <as-split-area size=\"70\" #area2=\"asSplitArea\">\n            <h5>Initial size: <b>70%</b></h5>\n            <h5>\n              Current size: <b>{{ sizes.percent.area2 }}%</b>\n            </h5>\n            <p>\n              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam\n              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n              consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi\n              tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis\n              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis\n              autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel\n              illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n            </p>\n          </as-split-area>\n        </as-split>\n      </div>\n      <h5>Pixel mode:</h5>\n      <div class=\"split-example ex-pixel\">\n        <as-split unit=\"pixel\" [direction]=\"direction\" (dragEnd)=\"dragEnd('pixel', $event)\">\n          <as-split-area size=\"120\">\n            <h5>Initial size: <b>120px</b></h5>\n            <h5>\n              Current size: <b>{{ sizes.pixel.area1 }}px</b>\n            </h5>\n            <p>\n              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n              voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            </p>\n          </as-split-area>\n          <as-split-area size=\"*\">\n            <h5>Initial size: <b>*</b></h5>\n            <h5>\n              Current size: <b>{{ sizes.pixel.area2 }}</b>\n            </h5>\n            <p>\n              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam\n              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n              consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi\n              tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis\n              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis\n              autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel\n              illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n            </p>\n          </as-split-area>\n          <as-split-area size=\"160\">\n            <h5>Initial size: <b>160px</b></h5>\n            <h5>\n              Current size: <b>{{ sizes.pixel.area3 }}px</b>\n            </h5>\n            <p>\n              Eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            </p>\n          </as-split-area>\n        </as-split>\n      </div>\n      <br />\n      <div class=\"btns\">\n        <button class=\"btn btn-warning\" (click)=\"direction = direction === 'horizontal' ? 'vertical' : 'horizontal'\">\n          {{ 'Toggle direction: \"' + direction + '\"' }}\n        </button>\n      </div>\n    </div>\n  ",
            styles: ["\n      .btns {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SimpleSplitComponent);
    return SimpleSplitComponent;
}(_ui_components_AComponent__WEBPACK_IMPORTED_MODULE_3__["AComponent"]));



/***/ }),

/***/ "UIUF":
/*!**************************************************************!*\
  !*** ./src/app/examples/simple-split/simple-split.module.ts ***!
  \**************************************************************/
/*! exports provided: SimpleSplitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleSplitModule", function() { return SimpleSplitModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-split */ "vX8g");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/ui.module */ "oRDy");
/* harmony import */ var _simple_split_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./simple-split.component */ "Q1IA");







var SimpleSplitModule = /** @class */ (function () {
    function SimpleSplitModule() {
    }
    SimpleSplitModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _simple_split_component__WEBPACK_IMPORTED_MODULE_6__["SimpleSplitComponent"] }]),
                angular_split__WEBPACK_IMPORTED_MODULE_4__["AngularSplitModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
            ],
            declarations: [_simple_split_component__WEBPACK_IMPORTED_MODULE_6__["SimpleSplitComponent"]],
        })
    ], SimpleSplitModule);
    return SimpleSplitModule;
}());



/***/ })

}]);
//# sourceMappingURL=simple-split-simple-split-module.js.map