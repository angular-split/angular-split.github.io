(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_access-from-class_access-from-class_module_ts"],{

/***/ 4652:
/*!***************************************************************************!*\
  !*** ./src/app/examples/access-from-class/access-from-class.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessFromClassComponent: () => (/* binding */ AccessFromClassComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_examples_access_from_class_access_from_class_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICB9CiAgICAgIC5idG5zID4gZGl2IHsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_access_from_class_access_from_class_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/examples/access-from-class/access-from-class.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICB9CiAgICAgIC5idG5zID4gZGl2IHsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OwogICAgICB9CiAgICA%3D!./src/app/examples/access-from-class/access-from-class.component.ts */ 7603);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_examples_access_from_class_access_from_class_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICB9CiAgICAgIC5idG5zID4gZGl2IHsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_access_from_class_access_from_class_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_access_from_class_access_from_class_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICB9CiAgICAgIC5idG5zID4gZGl2IHsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_access_from_class_access_from_class_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);
var _class;





let AccessFromClassComponent = (_class = class AccessFromClassComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_1__.AComponent {
  ngAfterViewInit() {
    console.log('Area Components: ', this.areasEl);
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
AccessFromClassComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'sp-ex-class-access',
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page'
  },
  template: `
    <div class="container">
      <sp-example-title [type]="exampleEnum.CODE"></sp-example-title>
      <div class="split-example">
        <as-split>
          <as-split-area [size]="75">
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
          <as-split-area [size]="3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </as-split-area>
          <as-split-area [visible]="false" [size]="18">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </as-split-area>
          <as-split-area [size]="4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </as-split-area>
        </as-split>
      </div>
      <br />
      <div class="btns">
        <div>
          <button
            class="btn btn-warning"
            (click)="splitEl.direction = splitEl?.direction === 'horizontal' ? 'vertical' : 'horizontal'"
          >
            {{ 'Toggle direction: "' + splitEl?.direction + '"' }}
          </button>
        </div>
        <div>
          <button
            class="btn btn-warning"
            [class.active]="!splitEl?.disabled"
            (click)="splitEl.disabled = !splitEl?.disabled"
          >
            {{ 'splitEl.disabled: ' + splitEl?.disabled }}
          </button>
        </div>
        <div>
          <button class="btn btn-warning" (click)="splitEl.dir = splitEl?.dir === 'rtl' ? 'ltr' : 'rtl'">
            {{ 'splitEl.dir: "' + splitEl?.dir + '"' }}
          </button>
        </div>
        <div>
          <label>Gutter size: </label>
          <div class="btn-group">
            <label
              class="btn btn-warning btn-sm"
              (click)="splitEl.gutterSize = null"
              [class.active]="splitEl?.gutterSize === 11"
              >null</label
            >
            <label
              class="btn btn-warning btn-sm"
              (click)="splitEl.gutterSize = 7"
              [class.active]="splitEl?.gutterSize === 7"
              >7</label
            >
            <label
              class="btn btn-warning btn-sm"
              (click)="splitEl.gutterSize = 22"
              [class.active]="splitEl?.gutterSize === 22"
              >22</label
            >
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [(_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_access_from_class_access_from_class_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICB9CiAgICAgIC5idG5zID4gZGl2IHsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_access_from_class_access_from_class_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
})], AccessFromClassComponent);

/***/ }),

/***/ 489:
/*!************************************************************************!*\
  !*** ./src/app/examples/access-from-class/access-from-class.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessFromClassModule: () => (/* binding */ AccessFromClassModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _access_from_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./access-from-class.component */ 4652);







let AccessFromClassModule = class AccessFromClassModule {};
AccessFromClassModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
    path: '',
    component: _access_from_class_component__WEBPACK_IMPORTED_MODULE_1__.AccessFromClassComponent
  }]), angular_split__WEBPACK_IMPORTED_MODULE_6__.AngularSplitModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule],
  declarations: [_access_from_class_component__WEBPACK_IMPORTED_MODULE_1__.AccessFromClassComponent]
})], AccessFromClassModule);

/***/ }),

/***/ 7603:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/examples/access-from-class/access-from-class.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICB9CiAgICAgIC5idG5zID4gZGl2IHsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OwogICAgICB9CiAgICA%3D!./src/app/examples/access-from-class/access-from-class.component.ts ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2Vzcy1mcm9tLWNsYXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxhQUFhO1FBQ2IsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQiw2QkFBNkI7TUFDL0I7TUFDQTtRQUNFLG1CQUFtQjtNQUNyQiIsImZpbGUiOiJhY2Nlc3MtZnJvbS1jbGFzcy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5idG5zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIH1cbiAgICAgIC5idG5zID4gZGl2IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICAiXX0= */`, "",{"version":3,"sources":["webpack://./src/app/examples/access-from-class/access-from-class.component.ts"],"names":[],"mappings":";MACM;QACE,aAAa;QACb,eAAe;QACf,mBAAmB;QACnB,6BAA6B;MAC/B;MACA;QACE,mBAAmB;MACrB;;AAEN,wnBAAwnB","sourcesContent":["\n      .btns {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-around;\n      }\n      .btns > div {\n        margin-bottom: 10px;\n      }\n    "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ })

}]);
//# sourceMappingURL=src_app_examples_access-from-class_access-from-class_module_ts.ecce9dec83826c34.js.map