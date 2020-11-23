(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["split-transitions-split-transitions-module"],{

/***/ "0A0M":
/*!***************************************************************************!*\
  !*** ./src/app/examples/split-transitions/split-transitions.component.ts ***!
  \***************************************************************************/
/*! exports provided: SplitTransitionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitTransitionsComponent", function() { return SplitTransitionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/AComponent */ "AD80");
/* harmony import */ var _utils_format_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/format-date */ "R+bW");




var SplitTransitionsComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SplitTransitionsComponent, _super);
    function SplitTransitionsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.action = {
            a1s: 25,
            a2s: 50,
            a3s: 25,
            a1v: true,
            a2v: true,
            a3v: true,
            useTransition: true,
        };
        _this.logMessages = [];
        //
        _this.only = 0;
        //
        _this.keepA = true;
        _this.keepB = true;
        _this.keepC = true;
        return _this;
    }
    SplitTransitionsComponent.prototype.log = function (e) {
        var _this = this;
        this.logMessages.push({ type: 'transitionEnd', text: Object(_utils_format_date__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date()) + " > transitionEnd event > " + e });
        setTimeout(function () {
            if (_this.logsEl.nativeElement.scroll) {
                ;
                _this.logsEl.nativeElement.scroll({ top: _this.logMessages.length * 30 });
            }
        });
    };
    SplitTransitionsComponent.prototype.left = function () {
        switch (this.only) {
            case 0:
            case 2:
            case 3:
                this.only = 1;
                return;
            case 1:
                this.only = 0;
                return;
        }
    };
    SplitTransitionsComponent.prototype.center = function () {
        switch (this.only) {
            case 0:
            case 1:
            case 3:
                this.only = 2;
                return;
            case 2:
                this.only = 0;
                return;
        }
    };
    SplitTransitionsComponent.prototype.right = function () {
        switch (this.only) {
            case 0:
            case 1:
            case 2:
                this.only = 3;
                return;
            case 3:
                this.only = 0;
                return;
        }
    };
    SplitTransitionsComponent.propDecorators = {
        logsEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['logs',] }]
    };
    SplitTransitionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-ex-transitions',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                class: 'split-example-page',
            },
            template: "\n    {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <sp-example-title [type]=\"exampleEnum.TRANSITION\"></sp-example-title>\n      <div class=\"split-example\">\n        <as-split\n          direction=\"horizontal\"\n          disabled=\"true\"\n          [useTransition]=\"action.useTransition\"\n          (dragEnd)=\"action.a1s = $event.sizes[0]; action.a2s = $event.sizes[1]; action.a3s = $event.sizes[2]\"\n          (transitionEnd)=\"log($event)\"\n        >\n          <as-split-area [visible]=\"action.a1v\" [size]=\"action.a1s\" order=\"1\">\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation\n              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n              voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            </p>\n          </as-split-area>\n          <as-split-area [visible]=\"action.a2v\" [size]=\"action.a2s\" order=\"2\">\n            <p>\n              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam\n              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n              consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi\n              tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis\n              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis\n              autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel\n              illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n            </p>\n          </as-split-area>\n          <as-split-area [visible]=\"action.a3v\" [size]=\"action.a3s\" order=\"3\">\n            <p>\n              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam\n              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n              consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi\n              tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis\n              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis\n              autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel\n              illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n            </p>\n          </as-split-area>\n        </as-split>\n      </div>\n      <br />\n      <div class=\"btns\">\n        <div>\n          <button\n            class=\"btn btn-warning\"\n            [class.active]=\"!action.useTransition\"\n            (click)=\"action.useTransition = !action.useTransition\"\n          >\n            {{ 'useTransition: ' + action.useTransition }}\n          </button>\n        </div>\n        <div class=\"btn-group\">\n          <label class=\"btn btn-warning\" [class.active]=\"!action.a1v\" (click)=\"action.a1v = !action.a1v\">{{\n            'area1: ' + action.a1v\n          }}</label>\n          <label class=\"btn btn-warning\" [class.active]=\"!action.a2v\" (click)=\"action.a2v = !action.a2v\">{{\n            'area2: ' + action.a2v\n          }}</label>\n          <label class=\"btn btn-warning\" [class.active]=\"!action.a3v\" (click)=\"action.a3v = !action.a3v\">{{\n            'area3: ' + action.a3v\n          }}</label>\n        </div>\n        <div class=\"btn-group\">\n          <label\n            class=\"btn btn-warning\"\n            [class.disabled]=\"action.a1s === 25 || !action.a1v || !action.a2v || !action.a3v\"\n            (click)=\"action.a1s = 25; action.a2s = 50; action.a3s = 25\"\n            >Set sizes to 25/50/25</label\n          >\n          <label\n            class=\"btn btn-warning\"\n            [class.disabled]=\"action.a1s === 40 || !action.a1v || !action.a2v || !action.a3v\"\n            (click)=\"action.a1s = 40; action.a2s = 20; action.a3s = 40\"\n            >Set sizes to 40/20/40</label\n          >\n        </div>\n      </div>\n      <div class=\"logs\">\n        <p>Events <code>(transitionEnd)</code>:</p>\n        <ul #logs>\n          <li *ngFor=\"let l of logMessages\" [ngClass]=\"l.type\">{{ l.text }}</li>\n        </ul>\n      </div>\n      <br />\n      <hr />\n      <br />\n      <div class=\"split-example ex2\" style=\"height: 150px;\">\n        <as-split useTransition=\"true\" unit=\"pixel\">\n          <as-split-area size=\"200\" minSize=\"200\" order=\"1\" [visible]=\"only === 1 || only === 0\">\n            <button (click)=\"left()\" class=\"btn btn-warning\">{{ only === 1 ? 'LEFT \u2B05\uFE0F' : 'LEFT \u27A1' }}</button>\n            <p>size: 200px<br />minSize: 200px</p>\n          </as-split-area>\n          <as-split-area size=\"*\" order=\"2\" [visible]=\"only === 2 || only === 0\">\n            <button (click)=\"center()\" class=\"btn btn-warning\">\n              {{ only === 2 ? '\u27A1 \uFE0FCENTER \u2B05' : '\uFE0F\u2B05 \uFE0FCENTER \u27A1' }}\n            </button>\n            <p>size: *</p>\n          </as-split-area>\n          <as-split-area size=\"200\" minSize=\"200\" order=\"3\" [visible]=\"only === 3 || only === 0\">\n            <button (click)=\"right()\" class=\"btn btn-warning\">{{ only === 3 ? '\u27A1 RIGHT' : '\u2B05\uFE0F RIGHT' }}</button>\n            <p>size: 200px<br />minSize: 200px</p>\n          </as-split-area>\n        </as-split>\n      </div>\n      <div class=\"split-example ex2\" style=\"height: 150px;\">\n        <as-split useTransition=\"true\" unit=\"percent\">\n          <as-split-area size=\"30\" minSize=\"30\" order=\"1\" [visible]=\"only === 1 || only === 0\">\n            <button (click)=\"left()\" class=\"btn btn-warning\">{{ only === 1 ? 'LEFT \u2B05\uFE0F' : 'LEFT \u27A1' }}</button>\n            <p>size: 30%<br />minSize: 30%</p>\n          </as-split-area>\n          <as-split-area size=\"40\" order=\"2\" [visible]=\"only === 2 || only === 0\">\n            <button (click)=\"center()\" class=\"btn btn-warning\">\n              {{ only === 2 ? '\u27A1 \uFE0FCENTER \u2B05' : '\uFE0F\u2B05 \uFE0FCENTER \u27A1' }}\n            </button>\n            <p>size: 40%</p>\n          </as-split-area>\n          <as-split-area size=\"30\" minSize=\"30\" order=\"3\" [visible]=\"only === 3 || only === 0\">\n            <button (click)=\"right()\" class=\"btn btn-warning\">{{ only === 3 ? '\u27A1 RIGHT' : '\u2B05\uFE0F RIGHT' }}</button>\n            <p>size: 30%<br />minSize: 30%</p>\n          </as-split-area>\n        </as-split>\n      </div>\n      <br />\n      <hr />\n      <br />\n      <div class=\"btns\">\n        <div class=\"btn-group\">\n          <label class=\"btn btn-warning\" [class.active]=\"!keepA\" (click)=\"keepA = !keepA\">{{ 'A: ' + keepA }}</label>\n          <label class=\"btn btn-warning\" [class.active]=\"!keepB\" (click)=\"keepB = !keepB\">{{ 'B: ' + keepB }}</label>\n          <label class=\"btn btn-warning\" [class.active]=\"!keepC\" (click)=\"keepC = !keepC\">{{ 'C: ' + keepC }}</label>\n        </div>\n      </div>\n      <div class=\"split-example ex2\" style=\"height: 150px;\">\n        <as-split useTransition=\"true\" unit=\"pixel\">\n          <as-split-area size=\"200\" minSize=\"200\" order=\"1\" [visible]=\"keepA\">\n            <p>A<br />size: 200px<br />minSize: 200px</p>\n          </as-split-area>\n          <as-split-area size=\"*\" order=\"2\" [visible]=\"keepB\">\n            <p>B<br />size: *</p>\n          </as-split-area>\n          <as-split-area size=\"200\" minSize=\"200\" order=\"3\" [visible]=\"keepC\">\n            <p>C<br />size: 200px<br />minSize: 200px</p>\n          </as-split-area>\n        </as-split>\n      </div>\n      <div class=\"split-example ex2\" style=\"height: 150px;\">\n        <as-split useTransition=\"true\" unit=\"percent\">\n          <as-split-area size=\"30\" minSize=\"30\" order=\"1\" [visible]=\"keepA\">\n            <p>A<br />size: 30%<br />minSize: 30%</p>\n          </as-split-area>\n          <as-split-area size=\"40\" order=\"2\" [visible]=\"keepB\">\n            <p>B<br />size: 40%</p>\n          </as-split-area>\n          <as-split-area size=\"30\" minSize=\"30\" order=\"3\" [visible]=\"keepC\">\n            <p>C<br />size: 30%<br />minSize: 30%</p>\n          </as-split-area>\n        </as-split>\n      </div>\n    </div>\n  ",
            styles: ["\n      button {\n        margin: 4px;\n      }\n\n      .btns {\n        display: flex;\n        justify-content: space-around;\n        flex-wrap: wrap;\n      }\n      .btns > div {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-bottom: 10px;\n      }\n      .btns > div > button {\n        margin-bottom: 10px;\n      }\n\n      .btns > div:nth-child(1) {\n        flex: 1 1 20%;\n      }\n      .btns > div:nth-child(2) {\n        flex: 1 1 40%;\n      }\n      .btns > div:nth-child(3) {\n        flex: 1 1 40%;\n      }\n      .logs > p {\n        margin-bottom: 5px;\n      }\n      .logs > ul {\n        height: 200px;\n        width: 100%;\n        overflow-y: scroll;\n        overflow-x: hidden;\n        border: 1px solid #bfbfbf;\n        background-color: #e8e8e8;\n      }\n\n      .as-split-area {\n        background: lightgrey;\n      }\n\n      .as-split-area.as-min {\n        background: green;\n      }\n\n      .as-split-area.as-max {\n        background: red;\n      }\n\n      :host .ex2 button {\n        width: 100%;\n      }\n\n      :host .ex2 ::ng-deep .as-transition.as-init:not(.as-dragging) > .as-split-area,\n      :host ::ng-deep .as-transition.as-init:not(.as-dragging) > .as-split-gutter {\n        transition: flex-basis 1s !important;\n      }\n    "]
        })
    ], SplitTransitionsComponent);
    return SplitTransitionsComponent;
}(_ui_components_AComponent__WEBPACK_IMPORTED_MODULE_2__["AComponent"]));



/***/ }),

/***/ "bqVE":
/*!************************************************************************!*\
  !*** ./src/app/examples/split-transitions/split-transitions.module.ts ***!
  \************************************************************************/
/*! exports provided: SplitTransitionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitTransitionsModule", function() { return SplitTransitionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-split */ "vX8g");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/ui.module */ "oRDy");
/* harmony import */ var _split_transitions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./split-transitions.component */ "0A0M");







var SplitTransitionsModule = /** @class */ (function () {
    function SplitTransitionsModule() {
    }
    SplitTransitionsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _split_transitions_component__WEBPACK_IMPORTED_MODULE_6__["SplitTransitionsComponent"] }]),
                angular_split__WEBPACK_IMPORTED_MODULE_4__["AngularSplitModule"],
            ],
            declarations: [_split_transitions_component__WEBPACK_IMPORTED_MODULE_6__["SplitTransitionsComponent"]],
        })
    ], SplitTransitionsModule);
    return SplitTransitionsModule;
}());



/***/ })

}]);
//# sourceMappingURL=split-transitions-split-transitions-module.js.map