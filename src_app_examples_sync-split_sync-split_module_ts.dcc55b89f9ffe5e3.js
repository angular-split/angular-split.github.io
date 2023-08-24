"use strict";
(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_sync-split_sync-split_module_ts"],{

/***/ 399:
/*!*************************************************************!*\
  !*** ./src/app/examples/sync-split/sync-split.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SyncSplitComponent: () => (/* binding */ SyncSplitComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7835);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);
/* harmony import */ var _utils_format_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/format-date */ 3354);
var _class;







let SyncSplitComponent = (_class = class SyncSplitComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__.AComponent {
  constructor() {
    super(...arguments);
    this.sizes = [25, 75];
  }
  ngAfterViewInit() {
    this.sub = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.mySplitAEl.dragProgress$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => ({
      name: 'A',
      data
    }))), this.mySplitBEl.dragProgress$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => ({
      name: 'B',
      data
    }))), this.mySplitCEl.dragProgress$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => ({
      name: 'C',
      data
    })))).subscribe(d => {
      if (d.name === 'A') {
        // If split A changed > update BC
        const sizesSplitA = this.mySplitAEl.getVisibleAreaSizes(); //d.data.sizes; <-- Could have use these values too
        this.mySplitBEl.setVisibleAreaSizes(sizesSplitA);
        this.mySplitCEl.setVisibleAreaSizes(sizesSplitA);
      } else if (d.name === 'B') {
        // Else if split B changed > update AC
        const sizesSplitB = this.mySplitBEl.getVisibleAreaSizes(); //d.data.sizes; <-- Could have use these values too
        this.mySplitAEl.setVisibleAreaSizes(sizesSplitB);
        this.mySplitCEl.setVisibleAreaSizes(sizesSplitB);
      } else if (d.name === 'C') {
        // Else if split C changed > update AB
        const sizesSplitC = this.mySplitCEl.getVisibleAreaSizes(); //d.data.sizes; <-- Could have use these values too
        this.mySplitAEl.setVisibleAreaSizes(sizesSplitC);
        this.mySplitBEl.setVisibleAreaSizes(sizesSplitC);
      }
      console.log(`${(0,_utils_format_date__WEBPACK_IMPORTED_MODULE_1__.formatDate)(new Date())} > dragProgress$ observable emitted, splits synchronized but current component change detection didn't run! (from split ${d.name})`);
    });
  }
  test() {}
  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
}, _class.propDecorators = {
  mySplitAEl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
    args: ['mySplitA']
  }],
  mySplitBEl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
    args: ['mySplitB']
  }],
  mySplitCEl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
    args: ['mySplitC']
  }]
}, _class);
SyncSplitComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'sp-ex-sync',
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page'
  },
  template: `
    {{ testChangeDetectorRun() }}
    <div class="container">
      <sp-example-title [type]="exampleEnum.SYNC"></sp-example-title>
      <div class="split-example">
        <as-split direction="vertical">
          <div as-split-area size="20">
            <as-split direction="horizontal" #mySplitA>
              <div as-split-area [size]="sizes[0]">A 1</div>
              <as-split-area [size]="sizes[1]">A 2</as-split-area>
            </as-split>
          </div>
          <div as-split-area size="20">
            <as-split direction="horizontal" #mySplitB>
              <div as-split-area [size]="sizes[0]">B 1</div>
              <as-split-area [size]="sizes[1]">B 2</as-split-area>
            </as-split>
          </div>
          <as-split-area size="60">
            <as-split direction="horizontal" #mySplitC>
              <as-split-area [size]="sizes[0]">C 1</as-split-area>
              <div as-split-area [size]="sizes[1]">
                C 2<br />
                Open devTools to view console.log() statements.<br />
                <button class="btn btn-warning" (click)="test()">Trigger change detection</button>
              </div>
            </as-split>
          </as-split-area>
        </as-split>
      </div>
    </div>
  `
})], SyncSplitComponent);

/***/ }),

/***/ 1131:
/*!**********************************************************!*\
  !*** ./src/app/examples/sync-split/sync-split.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SyncSplitModule: () => (/* binding */ SyncSplitModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _sync_split_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sync-split.component */ 399);







let SyncSplitModule = class SyncSplitModule {};
SyncSplitModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
    path: '',
    component: _sync_split_component__WEBPACK_IMPORTED_MODULE_1__.SyncSplitComponent
  }]), angular_split__WEBPACK_IMPORTED_MODULE_6__.AngularSplitModule],
  declarations: [_sync_split_component__WEBPACK_IMPORTED_MODULE_1__.SyncSplitComponent]
})], SyncSplitModule);

/***/ })

}]);
//# sourceMappingURL=src_app_examples_sync-split_sync-split_module_ts.dcc55b89f9ffe5e3.js.map