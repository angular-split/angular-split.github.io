(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_toggling-dom-and-visibility_toggling-dom-and-visibility_module_ts"],{

/***/ 5051:
/*!***********************************************************************************************!*\
  !*** ./src/app/examples/toggling-dom-and-visibility/toggling-dom-and-visibility.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TogglingDomAndVisibleComponent: () => (/* binding */ TogglingDomAndVisibleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_examples_toggling_dom_and_visibility_toggling_dom_and_visibility_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_toggling_dom_and_visibility_toggling_dom_and_visibility_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/examples/toggling-dom-and-visibility/toggling-dom-and-visibility.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICB9CiAgICA%3D!./src/app/examples/toggling-dom-and-visibility/toggling-dom-and-visibility.component.ts */ 6499);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_examples_toggling_dom_and_visibility_toggling_dom_and_visibility_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_toggling_dom_and_visibility_toggling_dom_and_visibility_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_toggling_dom_and_visibility_toggling_dom_and_visibility_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_toggling_dom_and_visibility_toggling_dom_and_visibility_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);




let TogglingDomAndVisibleComponent = class TogglingDomAndVisibleComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_1__.AComponent {
  constructor() {
    super(...arguments);
    this.action = {
      isVisibleA: true,
      isVisibleB: true,
      isVisibleC: true,
      isPresentA: true,
      isPresentB: true,
      isPresentC: true,
      logs: ''
    };
  }
  log(eventName, e) {
    this.action.logs = `${new Date()}: ${eventName} > ${e}\n${this.action.logs}`;
  }
};
TogglingDomAndVisibleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'sp-ex-toggling-dom-and-visible',
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page'
  },
  template: `
    {{ testChangeDetectorRun() }}
    <div class="container">
      <sp-example-title [type]="exampleEnum.TOGGLE"></sp-example-title>
      <div class="split-example ex1" style="height: 150px;">
        <as-split [gutterSize]="15" (dragEnd)="log('dragEnd', $event)">
          <as-split-area *ngIf="action.isPresentA" [visible]="action.isVisibleA" [order]="0">
            <p>A</p>
          </as-split-area>
          <as-split-area *ngIf="action.isPresentB" [visible]="action.isVisibleB" [order]="1">
            <p>B</p>
          </as-split-area>
          <as-split-area *ngIf="action.isPresentC" [visible]="action.isVisibleC" [order]="2">
            <p>C</p>
          </as-split-area>
        </as-split>
      </div>
      <p>Toggle <code>[visible]="boolean"</code> properties:</p>
      <div class="btns">
        <div class="btn-group">
          <label
            class="btn btn-warning"
            [class.active]="!action.isVisibleA"
            (click)="action.isVisibleA = !action.isVisibleA"
            >{{ 'areaA: ' + action.isVisibleA }}</label
          >
          <label
            class="btn btn-warning"
            [class.active]="!action.isVisibleB"
            (click)="action.isVisibleB = !action.isVisibleB"
            >{{ 'areaB: ' + action.isVisibleB }}</label
          >
          <label
            class="btn btn-warning"
            [class.active]="!action.isVisibleC"
            (click)="action.isVisibleC = !action.isVisibleC"
            >{{ 'areaC: ' + action.isVisibleC }}</label
          >
        </div>
      </div>
      <p>Toggle <code>*ngIf="boolean"</code> properties:</p>
      <div class="btns">
        <div class="btn-group">
          <label
            class="btn btn-warning"
            [class.active]="!action.isPresentA"
            (click)="action.isPresentA = !action.isPresentA"
            >{{ 'areaA: ' + action.isPresentA }}</label
          >
          <label
            class="btn btn-warning"
            [class.active]="!action.isPresentB"
            (click)="action.isPresentB = !action.isPresentB"
            >{{ 'areaB: ' + action.isPresentB }}</label
          >
          <label
            class="btn btn-warning"
            [class.active]="!action.isPresentC"
            (click)="action.isPresentC = !action.isPresentC"
            >{{ 'areaC: ' + action.isPresentC }}</label
          >
        </div>
      </div>
      <br />
      <div class="alert alert-danger" role="alert">
        <b>Warning:</b><br /><code>[visible]="false"</code> only hides elements and don't remove it from the DOM, It
        could lead to useless change detection processing.<br />Use of <code>*ngIf="false"</code> should be the default
        option unless you have reasons to keep DOM elements.
      </div>
    </div>
  `,
  styles: [(_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_toggling_dom_and_visibility_toggling_dom_and_visibility_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_toggling_dom_and_visibility_toggling_dom_and_visibility_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
})], TogglingDomAndVisibleComponent);

/***/ }),

/***/ 3860:
/*!********************************************************************************************!*\
  !*** ./src/app/examples/toggling-dom-and-visibility/toggling-dom-and-visibility.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TogglingDomAndVisibilityModule: () => (/* binding */ TogglingDomAndVisibilityModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _toggling_dom_and_visibility_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggling-dom-and-visibility.component */ 5051);







let TogglingDomAndVisibilityModule = class TogglingDomAndVisibilityModule {};
TogglingDomAndVisibilityModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
    path: '',
    component: _toggling_dom_and_visibility_component__WEBPACK_IMPORTED_MODULE_1__.TogglingDomAndVisibleComponent
  }]), angular_split__WEBPACK_IMPORTED_MODULE_6__.AngularSplitModule],
  declarations: [_toggling_dom_and_visibility_component__WEBPACK_IMPORTED_MODULE_1__.TogglingDomAndVisibleComponent]
})], TogglingDomAndVisibilityModule);

/***/ }),

/***/ 6499:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/examples/toggling-dom-and-visibility/toggling-dom-and-visibility.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICB9CiAgICA%3D!./src/app/examples/toggling-dom-and-visibility/toggling-dom-and-visibility.component.ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
      .btns {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }
    
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZ2dsaW5nLWRvbS1hbmQtdmlzaWJpbGl0eS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsZUFBZTtNQUNqQiIsImZpbGUiOiJ0b2dnbGluZy1kb20tYW5kLXZpc2liaWxpdHkuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuYnRucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG4gICAgIl19 */`, "",{"version":3,"sources":["webpack://./src/app/examples/toggling-dom-and-visibility/toggling-dom-and-visibility.component.ts"],"names":[],"mappings":";MACM;QACE,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,eAAe;MACjB;;AAEN,4hBAA4hB","sourcesContent":["\n      .btns {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n    "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ })

}]);
//# sourceMappingURL=src_app_examples_toggling-dom-and-visibility_toggling-dom-and-visibility_module_ts.bc10eae91b7fca22.js.map