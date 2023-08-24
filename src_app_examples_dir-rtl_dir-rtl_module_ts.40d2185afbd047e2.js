(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_dir-rtl_dir-rtl_module_ts"],{

/***/ 5166:
/*!*******************************************************!*\
  !*** ./src/app/examples/dir-rtl/dir-rtl.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirRtlComponent: () => (/* binding */ DirRtlComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_examples_dir_rtl_dir_rtl_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICB9CgogICAgICAuYnRucyA_2BIGJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpIHsKICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7CiAgICAgIH0KICAgIA_3D_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_dir_rtl_dir_rtl_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/examples/dir-rtl/dir-rtl.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICB9CgogICAgICAuYnRucyA%2BIGJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpIHsKICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7CiAgICAgIH0KICAgIA%3D%3D!./src/app/examples/dir-rtl/dir-rtl.component.ts */ 7291);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_examples_dir_rtl_dir_rtl_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICB9CgogICAgICAuYnRucyA_2BIGJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpIHsKICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7CiAgICAgIH0KICAgIA_3D_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_dir_rtl_dir_rtl_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_dir_rtl_dir_rtl_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICB9CgogICAgICAuYnRucyA_2BIGJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpIHsKICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7CiAgICAgIH0KICAgIA_3D_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_dir_rtl_dir_rtl_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);




let DirRtlComponent = class DirRtlComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_1__.AComponent {
  constructor() {
    super(...arguments);
    this.dir = 'rtl';
    this.direction = 'horizontal';
  }
};
DirRtlComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'sp-ex-dir_rtl',
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page'
  },
  template: `
    {{ testChangeDetectorRun() }}
    <div class="container">
      <sp-example-title [type]="exampleEnum.DIR"></sp-example-title>
      <div class="split-example">
        <as-split [dir]="dir" [direction]="direction">
          <as-split-area size="20">
            <p>
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </as-split-area>
          <as-split-area size="40">
            <p>
              2. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
              autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
              illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </as-split-area>
          <as-split-area size="40">
            <p>
              3. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
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
      <div class="btns">
        <button class="btn btn-warning" (click)="dir = dir === 'rtl' ? 'ltr' : 'rtl'">
          {{ 'Toggle dir: "' + dir + '"' }}
        </button>
        <button class="btn btn-warning" (click)="direction = direction === 'vertical' ? 'horizontal' : 'vertical'">
          {{ 'Toggle direction: "' + direction + '"' }}
        </button>
      </div>
    </div>
  `,
  styles: [(_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_dir_rtl_dir_rtl_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICB9CgogICAgICAuYnRucyA_2BIGJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpIHsKICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7CiAgICAgIH0KICAgIA_3D_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_dir_rtl_dir_rtl_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
})], DirRtlComponent);

/***/ }),

/***/ 1311:
/*!****************************************************!*\
  !*** ./src/app/examples/dir-rtl/dir-rtl.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirRtlModule: () => (/* binding */ DirRtlModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _dir_rtl_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dir-rtl.component */ 5166);







let DirRtlModule = class DirRtlModule {};
DirRtlModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
    path: '',
    component: _dir_rtl_component__WEBPACK_IMPORTED_MODULE_1__.DirRtlComponent
  }]), angular_split__WEBPACK_IMPORTED_MODULE_6__.AngularSplitModule],
  declarations: [_dir_rtl_component__WEBPACK_IMPORTED_MODULE_1__.DirRtlComponent]
})], DirRtlModule);

/***/ }),

/***/ 7291:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/examples/dir-rtl/dir-rtl.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICB9CgogICAgICAuYnRucyA%2BIGJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpIHsKICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7CiAgICAgIH0KICAgIA%3D%3D!./src/app/examples/dir-rtl/dir-rtl.component.ts ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

      .btns > button:not(:last-child) {
        margin-right: 10px;
      }
    
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpci1ydGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGVBQWU7TUFDakI7O01BRUE7UUFDRSxrQkFBa0I7TUFDcEIiLCJmaWxlIjoiZGlyLXJ0bC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5idG5zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIH1cblxuICAgICAgLmJ0bnMgPiBidXR0b246bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cbiAgICAiXX0= */`, "",{"version":3,"sources":["webpack://./src/app/examples/dir-rtl/dir-rtl.component.ts"],"names":[],"mappings":";MACM;QACE,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,eAAe;MACjB;;MAEA;QACE,kBAAkB;MACpB;;AAEN,onBAAonB","sourcesContent":["\n      .btns {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n\n      .btns > button:not(:last-child) {\n        margin-right: 10px;\n      }\n    "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ })

}]);
//# sourceMappingURL=src_app_examples_dir-rtl_dir-rtl_module_ts.40d2185afbd047e2.js.map