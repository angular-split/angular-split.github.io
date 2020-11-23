(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["iframes-iframes-module"],{

/***/ "jauR":
/*!*******************************************************!*\
  !*** ./src/app/examples/iframes/iframes.component.ts ***!
  \*******************************************************/
/*! exports provided: IframesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframesComponent", function() { return IframesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-split */ "vX8g");
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/AComponent */ "AD80");




var IframesComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(IframesComponent, _super);
    function IframesComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showIframeHider = false;
        return _this;
    }
    IframesComponent.prototype.dragStartHandler = function ($event) {
        console.log('dragStartHandler', { event: $event });
        this.showIframeHider = true;
    };
    IframesComponent.prototype.dragEndHandler = function ($event) {
        console.log('dragEndHandler', { event: $event });
        this.showIframeHider = false;
    };
    IframesComponent.prototype.splitGutterClick = function (_a) {
        var gutterNum = _a.gutterNum;
        // By default, clicking the gutter without changing position does not trigger the 'dragEnd' event
        // This can be fixed by manually notifying the component
        // See issue: https://github.com/angular-split/angular-split/issues/186
        // TODO: Create custom example for this, and document it
        this.split.notify('end', gutterNum);
    };
    IframesComponent.propDecorators = {
        split: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [angular_split__WEBPACK_IMPORTED_MODULE_2__["SplitComponent"],] }]
    };
    IframesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-ex-nested',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                class: 'split-example-page',
            },
            template: "\n    {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <sp-example-title [type]=\"exampleEnum.IFRAME\"></sp-example-title>\n      <div class=\"split-example\" style=\"height: 400px;\">\n        <as-split\n          #split\n          direction=\"horizontal\"\n          (dragStart)=\"dragStartHandler($event)\"\n          (dragEnd)=\"dragEndHandler($event)\"\n          (gutterClick)=\"splitGutterClick($event)\"\n        >\n          <as-split-area size=\"40\">\n            <div>\n              <iframe src=\"https://angular-split.github.io\" frameborder=\"0\" width=\"100%\" height=\"100%\"></iframe>\n              <div [hidden]=\"showIframeHider === false\" class=\"hack-iframe-hider\"></div>\n            </div>\n          </as-split-area>\n          <as-split-area size=\"60\">\n            <div>\n              <iframe src=\"https://angular-split.github.io\" frameborder=\"0\" width=\"100%\" height=\"100%\"></iframe>\n              <div [hidden]=\"showIframeHider === false\" class=\"hack-iframe-hider\"></div>\n            </div>\n          </as-split-area>\n        </as-split>\n      </div>\n    </div>\n  ",
            styles: ["\n      .as-split-area > div {\n        position: relative;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      .hack-iframe-hider {\n        background: rgba(0, 0, 0, 0.2);\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n    "]
        })
    ], IframesComponent);
    return IframesComponent;
}(_ui_components_AComponent__WEBPACK_IMPORTED_MODULE_3__["AComponent"]));



/***/ }),

/***/ "wEbp":
/*!****************************************************!*\
  !*** ./src/app/examples/iframes/iframes.module.ts ***!
  \****************************************************/
/*! exports provided: IframesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframesModule", function() { return IframesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-split */ "vX8g");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/ui.module */ "oRDy");
/* harmony import */ var _iframes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iframes.component */ "jauR");







var IframesModule = /** @class */ (function () {
    function IframesModule() {
    }
    IframesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _iframes_component__WEBPACK_IMPORTED_MODULE_6__["IframesComponent"] }]),
                angular_split__WEBPACK_IMPORTED_MODULE_4__["AngularSplitModule"],
            ],
            declarations: [_iframes_component__WEBPACK_IMPORTED_MODULE_6__["IframesComponent"]],
        })
    ], IframesModule);
    return IframesModule;
}());



/***/ })

}]);
//# sourceMappingURL=iframes-iframes-module.js.map