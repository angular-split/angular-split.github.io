(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sync-split-sync-split-module"],{

/***/ "DmYJ":
/*!*************************************************************!*\
  !*** ./src/app/examples/sync-split/sync-split.component.ts ***!
  \*************************************************************/
/*! exports provided: SyncSplitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncSplitComponent", function() { return SyncSplitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-split */ "vX8g");
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/AComponent */ "AD80");
/* harmony import */ var _utils_format_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/format-date */ "R+bW");







var SyncSplitComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SyncSplitComponent, _super);
    function SyncSplitComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sizes = [25, 75];
        return _this;
    }
    SyncSplitComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.mySplitAEl.dragProgress$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return ({ name: 'A', data: data }); })), this.mySplitBEl.dragProgress$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return ({ name: 'B', data: data }); })), this.mySplitCEl.dragProgress$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return ({ name: 'C', data: data }); }))).subscribe(function (d) {
            if (d.name === 'A') {
                // If split A changed > update BC
                var sizesSplitA = _this.mySplitAEl.getVisibleAreaSizes(); //d.data.sizes; <-- Could have use these values too
                _this.mySplitBEl.setVisibleAreaSizes(sizesSplitA);
                _this.mySplitCEl.setVisibleAreaSizes(sizesSplitA);
            }
            else if (d.name === 'B') {
                // Else if split B changed > update AC
                var sizesSplitB = _this.mySplitBEl.getVisibleAreaSizes(); //d.data.sizes; <-- Could have use these values too
                _this.mySplitAEl.setVisibleAreaSizes(sizesSplitB);
                _this.mySplitCEl.setVisibleAreaSizes(sizesSplitB);
            }
            else if (d.name === 'C') {
                // Else if split C changed > update AB
                var sizesSplitC = _this.mySplitCEl.getVisibleAreaSizes(); //d.data.sizes; <-- Could have use these values too
                _this.mySplitAEl.setVisibleAreaSizes(sizesSplitC);
                _this.mySplitBEl.setVisibleAreaSizes(sizesSplitC);
            }
            console.log(Object(_utils_format_date__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date()) + " > dragProgress$ observable emitted, splits synchronized but current component change detection didn't run! (from split " + d.name + ")");
        });
    };
    SyncSplitComponent.prototype.test = function () { };
    SyncSplitComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    SyncSplitComponent.propDecorators = {
        mySplitAEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['mySplitA',] }],
        mySplitBEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['mySplitB',] }],
        mySplitCEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['mySplitC',] }]
    };
    SyncSplitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-ex-sync',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                class: 'split-example-page',
            },
            template: "\n    {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <sp-example-title [type]=\"exampleEnum.SYNC\"></sp-example-title>\n      <div class=\"split-example\">\n        <as-split direction=\"vertical\">\n          <div as-split-area size=\"20\">\n            <as-split direction=\"horizontal\" #mySplitA>\n              <div as-split-area [size]=\"sizes[0]\">A 1</div>\n              <as-split-area [size]=\"sizes[1]\">A 2</as-split-area>\n            </as-split>\n          </div>\n          <div as-split-area size=\"20\">\n            <as-split direction=\"horizontal\" #mySplitB>\n              <div as-split-area [size]=\"sizes[0]\">B 1</div>\n              <as-split-area [size]=\"sizes[1]\">B 2</as-split-area>\n            </as-split>\n          </div>\n          <as-split-area size=\"60\">\n            <as-split direction=\"horizontal\" #mySplitC>\n              <as-split-area [size]=\"sizes[0]\">C 1</as-split-area>\n              <div as-split-area [size]=\"sizes[1]\">\n                C 2<br />\n                Open devTools to view console.log() statements.<br />\n                <button class=\"btn btn-warning\" (click)=\"test()\">Trigger change detection</button>\n              </div>\n            </as-split>\n          </as-split-area>\n        </as-split>\n      </div>\n    </div>\n  ",
        })
    ], SyncSplitComponent);
    return SyncSplitComponent;
}(_ui_components_AComponent__WEBPACK_IMPORTED_MODULE_5__["AComponent"]));



/***/ }),

/***/ "dXdp":
/*!**********************************************************!*\
  !*** ./src/app/examples/sync-split/sync-split.module.ts ***!
  \**********************************************************/
/*! exports provided: SyncSplitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncSplitModule", function() { return SyncSplitModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-split */ "vX8g");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/ui.module */ "oRDy");
/* harmony import */ var _sync_split_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sync-split.component */ "DmYJ");







var SyncSplitModule = /** @class */ (function () {
    function SyncSplitModule() {
    }
    SyncSplitModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _sync_split_component__WEBPACK_IMPORTED_MODULE_6__["SyncSplitComponent"] }]),
                angular_split__WEBPACK_IMPORTED_MODULE_4__["AngularSplitModule"],
            ],
            declarations: [_sync_split_component__WEBPACK_IMPORTED_MODULE_6__["SyncSplitComponent"]],
        })
    ], SyncSplitModule);
    return SyncSplitModule;
}());



/***/ })

}]);
//# sourceMappingURL=sync-split-sync-split-module.js.map