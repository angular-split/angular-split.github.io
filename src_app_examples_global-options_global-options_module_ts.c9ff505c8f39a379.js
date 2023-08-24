"use strict";
(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_global-options_global-options_module_ts"],{

/***/ 4831:
/*!*********************************************************************!*\
  !*** ./src/app/examples/global-options/global-options.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalOptionsComponent: () => (/* binding */ GlobalOptionsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);
var _class;




let GlobalOptionsComponent = (_class = class GlobalOptionsComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__.AComponent {
  constructor() {
    super();
    setTimeout(() => {
      console.log('>>> split > ', this.split);
      console.log('>>> area1 > ', this.area1);
      console.log('>>> area2 > ', this.area2);
    }, 1000);
  }
}, _class.ctorParameters = () => [], _class.propDecorators = {
  split: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
    args: ['split']
  }],
  area1: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
    args: ['area1']
  }],
  area2: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
    args: ['area2']
  }]
}, _class);
GlobalOptionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-global-options',
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page'
  },
  template: `
    {{ testChangeDetectorRun() }}
    <div class="container">
      <sp-example-title [type]="exampleEnum.GLOBAL"></sp-example-title>
      <h5>Global direction and gutter size:</h5>
      <div class="split-example ex-percent">
        <as-split #split="asSplit">
          <as-split-area #area1="asSplitArea">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </as-split-area>
          <as-split-area #area2="asSplitArea">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
              autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
              illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </as-split-area>
        </as-split>
      </div>
      <br />
    </div>
  `
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])], GlobalOptionsComponent);

/***/ }),

/***/ 5394:
/*!******************************************************************!*\
  !*** ./src/app/examples/global-options/global-options.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalOptionsModule: () => (/* binding */ GlobalOptionsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _global_options_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-options.component */ 4831);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);








let GlobalOptionsModule = class GlobalOptionsModule {};
GlobalOptionsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_global_options_component__WEBPACK_IMPORTED_MODULE_0__.GlobalOptionsComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
    path: '',
    component: _global_options_component__WEBPACK_IMPORTED_MODULE_0__.GlobalOptionsComponent
  }]), angular_split__WEBPACK_IMPORTED_MODULE_6__.AngularSplitModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UiModule],
  providers: [{
    provide: angular_split__WEBPACK_IMPORTED_MODULE_6__.ANGULAR_SPLIT_DEFAULT_OPTIONS,
    useValue: {
      direction: 'vertical',
      gutterSize: 30
    }
  }]
})], GlobalOptionsModule);

/***/ })

}]);
//# sourceMappingURL=src_app_examples_global-options_global-options_module_ts.c9ff505c8f39a379.js.map