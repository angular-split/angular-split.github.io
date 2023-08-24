(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_collapse-expand_collapse-expand_module_ts"],{

/***/ 901:
/*!***********************************************************************!*\
  !*** ./src/app/examples/collapse-expand/collapse-expand.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapseExpandComponent: () => (/* binding */ CollapseExpandComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_examples_collapse_expand_collapse_expand_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICB9CiAgICAgIC5idG5zID4gZGl2IHsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_collapse_expand_collapse_expand_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/examples/collapse-expand/collapse-expand.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICB9CiAgICAgIC5idG5zID4gZGl2IHsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OwogICAgICB9CiAgICA%3D!./src/app/examples/collapse-expand/collapse-expand.component.ts */ 4405);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_examples_collapse_expand_collapse_expand_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICB9CiAgICAgIC5idG5zID4gZGl2IHsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_collapse_expand_collapse_expand_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_collapse_expand_collapse_expand_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICB9CiAgICAgIC5idG5zID4gZGl2IHsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_collapse_expand_collapse_expand_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);
var _class;





let CollapseExpandComponent = (_class = class CollapseExpandComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_1__.AComponent {
  ngAfterViewInit() {
    // console.log('Area Components: ', this.areasEl);
  }
  onClose1(newSize = 0) {
    this.areasEl.first.collapse(newSize);
  }
  onClose3(newSize = 0) {
    this.areasEl.last.collapse(newSize, 'left');
  }
  onExpand1() {
    this.areasEl.first.expand();
  }
  onExpand3() {
    this.areasEl.last.expand();
  }
}, _class.propDecorators = {
  splitEl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
    args: [angular_split__WEBPACK_IMPORTED_MODULE_3__.SplitComponent]
  }],
  areasEl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChildren,
    args: [angular_split__WEBPACK_IMPORTED_MODULE_3__.SplitAreaDirective]
  }]
}, _class);
CollapseExpandComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'sp-ex-class-collapse',
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page'
  },
  template: `
    <div class="container">
      <sp-example-title [type]="exampleEnum.COLLAPSE"></sp-example-title>
      <div class="split-example">
        <as-split [unit]="'pixel'">
          <as-split-area [size]="200">
            <div
              style="height: 100%;display: flex;justify-content: center;align-items: center; background-color: antiquewhite;"
            >
              area #1
            </div>
          </as-split-area>
          <as-split-area>
            <div
              style="height: 100%;display: flex;justify-content: center;align-items: center; background-color: gainsboro;"
            >
              area #2
            </div>
          </as-split-area>
          <as-split-area [size]="100">
            <div
              style="height: 100%;display: flex;justify-content: center;align-items: center; background-color: burlywood;"
            >
              area #3
            </div>
          </as-split-area>
        </as-split>
      </div>
      <br />
      <ul>
        <li><b>collapse(newSize:number = 0)</b> will force the area the be the width given and its gutter disabled.</li>
        <li><b>expand()</b> will restore the area to its size before it was collapsed.</li>
      </ul>
      <br /><br />
      <div class="btns">
        <div>
          <button class="btn btn-warning" style="margin-right: 10px" (click)="onClose1()">Collapse #1 to 0px</button>
          <button class="btn btn-warning" (click)="onClose1(40)">Collapse #1 to 40px</button>
        </div>
        <div>
          <button class="btn btn-warning" style="margin-right: 10px" (click)="onClose3()">Collapse #3 to 0px</button>
          <button class="btn btn-warning" (click)="onClose3(60)">Collapse #3 to 60px</button>
        </div>
      </div>
      <div class="btns">
        <div>
          <button class="btn btn-warning" style="margin-right: 10px" (click)="onExpand1()">Expand #1</button>
        </div>
        <div>
          <button class="btn btn-warning" style="margin-right: 10px" (click)="onExpand3()">Expand #3</button>
        </div>
      </div>
    </div>
  `,
  styles: [(_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_collapse_expand_collapse_expand_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICB9CiAgICAgIC5idG5zID4gZGl2IHsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_collapse_expand_collapse_expand_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
})], CollapseExpandComponent);

/***/ }),

/***/ 3689:
/*!********************************************************************!*\
  !*** ./src/app/examples/collapse-expand/collapse-expand.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapseExpandModule: () => (/* binding */ CollapseExpandModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _collapse_expand_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapse-expand.component */ 901);







let CollapseExpandModule = class CollapseExpandModule {};
CollapseExpandModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
    path: '',
    component: _collapse_expand_component__WEBPACK_IMPORTED_MODULE_1__.CollapseExpandComponent
  }]), angular_split__WEBPACK_IMPORTED_MODULE_6__.AngularSplitModule],
  declarations: [_collapse_expand_component__WEBPACK_IMPORTED_MODULE_1__.CollapseExpandComponent]
})], CollapseExpandModule);

/***/ }),

/***/ 4405:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/examples/collapse-expand/collapse-expand.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICB9CiAgICAgIC5idG5zID4gZGl2IHsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OwogICAgICB9CiAgICA%3D!./src/app/examples/collapse-expand/collapse-expand.component.ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
      .btns {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
      }
      .btns > div {
        margin-bottom: 10px;
      }
    
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxhcHNlLWV4cGFuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsYUFBYTtRQUNiLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsNkJBQTZCO01BQy9CO01BQ0E7UUFDRSxtQkFBbUI7TUFDckIiLCJmaWxlIjoiY29sbGFwc2UtZXhwYW5kLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmJ0bnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuICAgICAgLmJ0bnMgPiBkaXYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgICJdfQ== */`, "",{"version":3,"sources":["webpack://./src/app/examples/collapse-expand/collapse-expand.component.ts"],"names":[],"mappings":";MACM;QACE,aAAa;QACb,eAAe;QACf,mBAAmB;QACnB,6BAA6B;MAC/B;MACA;QACE,mBAAmB;MACrB;;AAEN,onBAAonB","sourcesContent":["\n      .btns {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-around;\n      }\n      .btns > div {\n        margin-bottom: 10px;\n      }\n    "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ })

}]);
//# sourceMappingURL=src_app_examples_collapse-expand_collapse-expand_module_ts.5c0cb43c10d829fe.js.map