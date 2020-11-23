(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gutter-click-roll-unroll-gutter-click-roll-unroll-module"],{

/***/ "VjZs":
/*!*****************************************************************************************!*\
  !*** ./src/app/examples/gutter-click-roll-unroll/gutter-click-roll-unroll.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: GutterClickRollUnrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GutterClickRollUnrollComponent", function() { return GutterClickRollUnrollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-split */ "vX8g");
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/AComponent */ "AD80");
/* harmony import */ var _utils_format_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/format-date */ "R+bW");





var GutterClickRollUnrollComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GutterClickRollUnrollComponent, _super);
    function GutterClickRollUnrollComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDisabled = true;
        _this.useTransition = true;
        _this.dblClickTime = 0;
        _this.logMessages = [];
        _this.areas = [
            { size: 25, order: 1, content: 'fg fdkjuh dfskhf dkujv fd vifdk hvdkuh fg' },
            { size: 50, order: 2, content: 'sd h vdshhf deuyf gduyeg hudeg hudfg  fd vifdk hvdkuh fg' },
            { size: 25, order: 3, content: 'sd jslfd ijgil dfhlt jkgvbnhj fl bhjgflh jfglhj fl h fg' },
        ];
        return _this;
    }
    GutterClickRollUnrollComponent.prototype.ngAfterViewInit = function () {
        this.sub = this.mySplitEl.dragProgress$.subscribe(function (data) {
            console.log(Object(_utils_format_date__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(new Date()) + " > dragProgress$ observable emitted but current component change detection didn't run!", data);
        });
    };
    GutterClickRollUnrollComponent.prototype.log = function (type, e) {
        var _this = this;
        this.logMessages.push({ type: type, text: Object(_utils_format_date__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(new Date()) + " > " + type + " event > " + JSON.stringify(e) });
        setTimeout(function () {
            if (_this.logsEl.nativeElement.scroll) {
                ;
                _this.logsEl.nativeElement.scroll({ top: _this.logMessages.length * 30 });
            }
        });
        if (type === 'gutterClick') {
            this.gutterClick(e);
        }
        else if (type === 'dragEnd') {
            this.areas[0].size = e.sizes[0];
            this.areas[1].size = e.sizes[1];
            this.areas[2].size = e.sizes[2];
        }
    };
    GutterClickRollUnrollComponent.prototype.gutterClick = function (e) {
        if (e.gutterNum === 1) {
            if (this.areas[0].size > 0) {
                this.areas[1].size += this.areas[0].size;
                this.areas[0].size = 0;
            }
            else if (this.areas[1].size > 25) {
                this.areas[1].size -= 25;
                this.areas[0].size = 25;
            }
            else {
                this.areas[0].size = 25;
                this.areas[1].size = 50;
                this.areas[2].size = 25;
            }
        }
        else if (e.gutterNum === 2) {
            if (this.areas[2].size > 0) {
                this.areas[1].size += this.areas[2].size;
                this.areas[2].size = 0;
            }
            else if (this.areas[1].size > 25) {
                this.areas[1].size -= 25;
                this.areas[2].size = 25;
            }
            else {
                this.areas[0].size = 25;
                this.areas[1].size = 50;
                this.areas[2].size = 25;
            }
        }
    };
    GutterClickRollUnrollComponent.prototype.dragEnd = function (e) {
        this.areas[0].size = e.sizes[0];
        this.areas[1].size = e.sizes[1];
        this.areas[2].size = e.sizes[2];
    };
    GutterClickRollUnrollComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    GutterClickRollUnrollComponent.propDecorators = {
        mySplitEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['mySplit',] }],
        logsEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['logs',] }]
    };
    GutterClickRollUnrollComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-ex-gutter-click',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                class: 'split-example-page',
            },
            template: "\n    {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <sp-example-title [type]=\"exampleEnum.CLICK\"></sp-example-title>\n      <div class=\"split-example\">\n        <as-split\n          #mySplit\n          [disabled]=\"isDisabled\"\n          gutterSize=\"10\"\n          [gutterDblClickDuration]=\"dblClickTime\"\n          direction=\"horizontal\"\n          [useTransition]=\"useTransition\"\n          (dragStart)=\"log('dragStart', $event)\"\n          (dragEnd)=\"log('dragEnd', $event)\"\n          (gutterClick)=\"log('gutterClick', $event)\"\n          (gutterDblClick)=\"log('gutterDblClick', $event)\"\n          (transitionEnd)=\"log('transitionEnd', $event)\"\n        >\n          <as-split-area *ngFor=\"let a of areas\" [size]=\"a.size\" [order]=\"a.order\">\n            <p>{{ a.content }}</p>\n          </as-split-area>\n        </as-split>\n      </div>\n      <br />\n      <div class=\"btns\">\n        <div>\n          <button class=\"btn btn-warning\" [class.active]=\"!useTransition\" (click)=\"useTransition = !useTransition\">\n            {{ 'useTransition: ' + useTransition }}\n          </button>\n        </div>\n        <div>\n          <button class=\"btn btn-warning\" [class.active]=\"!isDisabled\" (click)=\"isDisabled = !isDisabled\">\n            {{ 'isDisabled: ' + isDisabled }}\n          </button>\n        </div>\n        <div>\n          <label>Property <code>[gutterDblClickDuration]</code>:&nbsp;</label>\n          <div class=\"btn-group\">\n            <label\n              class=\"btn btn-warning\"\n              tooltip=\"When set to 0ms, 'click' is instant and 'dblclick' is impossible.\"\n              [class.disabled]=\"dblClickTime === 0\"\n              (click)=\"dblClickTime = 0\"\n              >0ms</label\n            >\n            <label\n              class=\"btn btn-warning\"\n              tooltip=\"When set to 500ms, 'click' is delayed and 'dblclick' is possible.\"\n              [class.disabled]=\"dblClickTime === 500\"\n              (click)=\"dblClickTime = 500\"\n              >500ms</label\n            >\n          </div>\n        </div>\n      </div>\n      <div class=\"logs\">\n        <p>All <code>as-split</code> events emitted:</p>\n        <ul #logs>\n          <li *ngFor=\"let l of logMessages\" [ngClass]=\"l.type\">{{ l.text }}</li>\n        </ul>\n      </div>\n    </div>\n  ",
            styles: ["\n      as-split.as-transition.as-init:not(.as-dragging) ::ng-deep > .as-split-gutter,\n      as-split.as-transition.as-init:not(.as-dragging) > .as-split-area {\n        transition: flex-basis 1.5s !important;\n      }\n      as-split.as-disabled ::ng-deep > .as-split-gutter {\n        cursor: pointer !important;\n      }\n\n      .btns {\n        display: flex;\n        justify-content: space-around;\n        flex-wrap: wrap;\n      }\n      .btns > div {\n        flex: 1 1 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      .btns > div > button {\n        margin-bottom: 10px;\n      }\n      .logs > p {\n        margin-bottom: 5px;\n      }\n      .logs > ul {\n        height: 200px;\n        width: 100%;\n        overflow-y: scroll;\n        overflow-x: hidden;\n        border: 1px solid #bfbfbf;\n        background-color: #e8e8e8;\n      }\n    "]
        })
    ], GutterClickRollUnrollComponent);
    return GutterClickRollUnrollComponent;
}(_ui_components_AComponent__WEBPACK_IMPORTED_MODULE_3__["AComponent"]));



/***/ }),

/***/ "xhZi":
/*!**************************************************************************************!*\
  !*** ./src/app/examples/gutter-click-roll-unroll/gutter-click-roll-unroll.module.ts ***!
  \**************************************************************************************/
/*! exports provided: GutterClickRollUnrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GutterClickRollUnrollModule", function() { return GutterClickRollUnrollModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-split */ "vX8g");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/ui.module */ "oRDy");
/* harmony import */ var _gutter_click_roll_unroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gutter-click-roll-unroll.component */ "VjZs");







var GutterClickRollUnrollModule = /** @class */ (function () {
    function GutterClickRollUnrollModule() {
    }
    GutterClickRollUnrollModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _gutter_click_roll_unroll_component__WEBPACK_IMPORTED_MODULE_6__["GutterClickRollUnrollComponent"] }]),
                angular_split__WEBPACK_IMPORTED_MODULE_4__["AngularSplitModule"],
            ],
            declarations: [_gutter_click_roll_unroll_component__WEBPACK_IMPORTED_MODULE_6__["GutterClickRollUnrollComponent"]],
        })
    ], GutterClickRollUnrollModule);
    return GutterClickRollUnrollModule;
}());



/***/ })

}]);
//# sourceMappingURL=gutter-click-roll-unroll-gutter-click-roll-unroll-module.js.map