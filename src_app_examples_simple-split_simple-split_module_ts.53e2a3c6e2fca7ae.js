(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_simple-split_simple-split_module_ts"],{

/***/ 4273:
/*!*****************************************************************!*\
  !*** ./src/app/examples/simple-split/simple-split.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleSplitComponent: () => (/* binding */ SimpleSplitComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_examples_simple_split_simple_split_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_simple_split_simple_split_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/examples/simple-split/simple-split.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICB9CiAgICA%3D!./src/app/examples/simple-split/simple-split.component.ts */ 602);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_examples_simple_split_simple_split_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_simple_split_simple_split_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_simple_split_simple_split_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_simple_split_simple_split_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);
var _class;





let SimpleSplitComponent = (_class = class SimpleSplitComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_1__.AComponent {
  constructor() {
    super();
    this.direction = 'horizontal';
    this.sizes = {
      percent: {
        area1: 30,
        area2: 70
      },
      pixel: {
        area1: 120,
        area2: '*',
        area3: 160
      }
    };
    setTimeout(() => {
      console.log('>>> split > ', this.split);
      console.log('>>> area1 > ', this.area1);
      console.log('>>> area2 > ', this.area2);
    }, 1000);
  }
  dragEnd(unit, {
    sizes
  }) {
    if (unit === 'percent') {
      this.sizes.percent.area1 = sizes[0];
      this.sizes.percent.area2 = sizes[1];
    } else if (unit === 'pixel') {
      this.sizes.pixel.area1 = sizes[0];
      this.sizes.pixel.area2 = sizes[1];
      this.sizes.pixel.area3 = sizes[2];
    }
  }
}, _class.ctorParameters = () => [], _class.propDecorators = {
  split: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
    args: ['split']
  }],
  area1: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
    args: ['area1']
  }],
  area2: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
    args: ['area2']
  }]
}, _class);
SimpleSplitComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'sp-ex-simple',
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page'
  },
  template: `
    {{ testChangeDetectorRun() }}
    <div class="container">
      <sp-example-title [type]="exampleEnum.SIMPLE"></sp-example-title>
      <h5>Percent mode:</h5>
      <div class="split-example ex-percent">
        <as-split
          unit="percent"
          [direction]="direction"
          gutterAriaLabel="adjustable divider between two views"
          (dragEnd)="dragEnd('percent', $event)"
          #split="asSplit"
        >
          <as-split-area size="30" #area1="asSplitArea">
            <h5>Initial size: <b>30%</b></h5>
            <h5>
              Current size: <b>{{ sizes.percent.area1 }}%</b>
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </as-split-area>
          <as-split-area size="70" #area2="asSplitArea">
            <h5>Initial size: <b>70%</b></h5>
            <h5>
              Current size: <b>{{ sizes.percent.area2 }}%</b>
            </h5>
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
      <h5>Pixel mode:</h5>
      <div class="split-example ex-pixel">
        <as-split unit="pixel" [direction]="direction" (dragEnd)="dragEnd('pixel', $event)">
          <as-split-area size="120">
            <h5>Initial size: <b>120px</b></h5>
            <h5>
              Current size: <b>{{ sizes.pixel.area1 }}px</b>
            </h5>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </as-split-area>
          <as-split-area size="*">
            <h5>Initial size: <b>*</b></h5>
            <h5>
              Current size: <b>{{ sizes.pixel.area2 }}</b>
            </h5>
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
          <as-split-area size="160">
            <h5>Initial size: <b>160px</b></h5>
            <h5>
              Current size: <b>{{ sizes.pixel.area3 }}px</b>
            </h5>
            <p>
              Eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </as-split-area>
        </as-split>
      </div>
      <br />
      <div class="btns">
        <button class="btn btn-warning" (click)="direction = direction === 'horizontal' ? 'vertical' : 'horizontal'">
          {{ 'Toggle direction: "' + direction + '"' }}
        </button>
      </div>
    </div>
  `,
  styles: [(_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_simple_split_simple_split_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_simple_split_simple_split_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], SimpleSplitComponent);

/***/ }),

/***/ 4603:
/*!**************************************************************!*\
  !*** ./src/app/examples/simple-split/simple-split.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleSplitModule: () => (/* binding */ SimpleSplitModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _simple_split_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-split.component */ 4273);







let SimpleSplitModule = class SimpleSplitModule {};
SimpleSplitModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
    path: '',
    component: _simple_split_component__WEBPACK_IMPORTED_MODULE_1__.SimpleSplitComponent
  }]), angular_split__WEBPACK_IMPORTED_MODULE_6__.AngularSplitModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule],
  declarations: [_simple_split_component__WEBPACK_IMPORTED_MODULE_1__.SimpleSplitComponent]
})], SimpleSplitModule);

/***/ }),

/***/ 602:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/examples/simple-split/simple-split.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICB9CiAgICA%3D!./src/app/examples/simple-split/simple-split.component.ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsZS1zcGxpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsZUFBZTtNQUNqQiIsImZpbGUiOiJzaW1wbGUtc3BsaXQuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuYnRucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG4gICAgIl19 */`, "",{"version":3,"sources":["webpack://./src/app/examples/simple-split/simple-split.component.ts"],"names":[],"mappings":";MACM;QACE,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,eAAe;MACjB;;AAEN,ofAAof","sourcesContent":["\n      .btns {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n    "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ })

}]);
//# sourceMappingURL=src_app_examples_simple-split_simple-split_module_ts.53e2a3c6e2fca7ae.js.map