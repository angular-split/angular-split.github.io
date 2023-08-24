"use strict";
(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_iframes_iframes_module_ts"],{

/***/ 5112:
/*!*******************************************************!*\
  !*** ./src/app/examples/iframes/iframes.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IframesComponent: () => (/* binding */ IframesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);



let IframesComponent = class IframesComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__.AComponent {};
IframesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'sp-ex-nested',
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page'
  },
  template: `
    {{ testChangeDetectorRun() }}
    <div class="container">
      <sp-example-title [type]="exampleEnum.IFRAME"></sp-example-title>
      <div class="split-example" style="height: 400px;">
        <as-split #split direction="horizontal">
          <as-split-area size="40">
            <iframe
              src="https://angular-split.github.io"
              frameborder="0"
              scrolling="no"
              width="100%"
              height="100%"
            ></iframe>
          </as-split-area>
          <as-split-area size="60">
            <iframe
              src="https://angular-split.github.io"
              frameborder="0"
              scrolling="no"
              width="100%"
              height="100%"
            ></iframe>
          </as-split-area>
        </as-split>
        <br />
      </div>
    </div>
  `
})], IframesComponent);

/***/ }),

/***/ 6411:
/*!****************************************************!*\
  !*** ./src/app/examples/iframes/iframes.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IframesModule: () => (/* binding */ IframesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _iframes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iframes.component */ 5112);







let IframesModule = class IframesModule {};
IframesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
    path: '',
    component: _iframes_component__WEBPACK_IMPORTED_MODULE_1__.IframesComponent
  }]), angular_split__WEBPACK_IMPORTED_MODULE_6__.AngularSplitModule],
  declarations: [_iframes_component__WEBPACK_IMPORTED_MODULE_1__.IframesComponent]
})], IframesModule);

/***/ })

}]);
//# sourceMappingURL=src_app_examples_iframes_iframes_module_ts.99c11f76cde234ad.js.map