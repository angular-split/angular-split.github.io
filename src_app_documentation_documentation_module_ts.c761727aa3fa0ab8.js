(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_documentation_documentation_module_ts"],{

/***/ 2359:
/*!**********************************************************!*\
  !*** ./src/app/documentation/documentation.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentationComponent: () => (/* binding */ DocumentationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_documentation_documentation_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBtYXJnaW46IDUwcHggMDsKICAgICAgfQogICAgICBoNCB7CiAgICAgICAgbWFyZ2luOiAyMHB4IDA7CiAgICAgIH0KICAgICAgLnNlbCB7CiAgICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICAgIGNvbG9yOiAjYWRhZGFkOwogICAgICB9CiAgICAgIHRyID4gdGggewogICAgICAgIGNvbG9yOiAjYWRhZGFkOwogICAgICB9CiAgICAgIHRyID4gdGg6Zmlyc3QtY2hpbGQsCiAgICAgIC5zZWxDb250ZW50IHsKICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgICBjb2xvcjogI2ZmYzQyMTsKICAgICAgfQogICAgICB0ciA_2BIHRkOmZpcnN0LWNoaWxkIHsKICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgfQogICAg_Users_beeman_dev_github_angular_split_angular_split_src_app_documentation_documentation_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/documentation/documentation.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBtYXJnaW46IDUwcHggMDsKICAgICAgfQogICAgICBoNCB7CiAgICAgICAgbWFyZ2luOiAyMHB4IDA7CiAgICAgIH0KICAgICAgLnNlbCB7CiAgICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICAgIGNvbG9yOiAjYWRhZGFkOwogICAgICB9CiAgICAgIHRyID4gdGggewogICAgICAgIGNvbG9yOiAjYWRhZGFkOwogICAgICB9CiAgICAgIHRyID4gdGg6Zmlyc3QtY2hpbGQsCiAgICAgIC5zZWxDb250ZW50IHsKICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgICBjb2xvcjogI2ZmYzQyMTsKICAgICAgfQogICAgICB0ciA%2BIHRkOmZpcnN0LWNoaWxkIHsKICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgfQogICAg!./src/app/documentation/documentation.component.ts */ 538);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_documentation_documentation_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBtYXJnaW46IDUwcHggMDsKICAgICAgfQogICAgICBoNCB7CiAgICAgICAgbWFyZ2luOiAyMHB4IDA7CiAgICAgIH0KICAgICAgLnNlbCB7CiAgICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICAgIGNvbG9yOiAjYWRhZGFkOwogICAgICB9CiAgICAgIHRyID4gdGggewogICAgICAgIGNvbG9yOiAjYWRhZGFkOwogICAgICB9CiAgICAgIHRyID4gdGg6Zmlyc3QtY2hpbGQsCiAgICAgIC5zZWxDb250ZW50IHsKICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgICBjb2xvcjogI2ZmYzQyMTsKICAgICAgfQogICAgICB0ciA_2BIHRkOmZpcnN0LWNoaWxkIHsKICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgfQogICAg_Users_beeman_dev_github_angular_split_angular_split_src_app_documentation_documentation_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_beeman_dev_github_angular_split_angular_split_src_app_documentation_documentation_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBtYXJnaW46IDUwcHggMDsKICAgICAgfQogICAgICBoNCB7CiAgICAgICAgbWFyZ2luOiAyMHB4IDA7CiAgICAgIH0KICAgICAgLnNlbCB7CiAgICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICAgIGNvbG9yOiAjYWRhZGFkOwogICAgICB9CiAgICAgIHRyID4gdGggewogICAgICAgIGNvbG9yOiAjYWRhZGFkOwogICAgICB9CiAgICAgIHRyID4gdGg6Zmlyc3QtY2hpbGQsCiAgICAgIC5zZWxDb250ZW50IHsKICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgICBjb2xvcjogI2ZmYzQyMTsKICAgICAgfQogICAgICB0ciA_2BIHRkOmZpcnN0LWNoaWxkIHsKICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgfQogICAg_Users_beeman_dev_github_angular_split_angular_split_src_app_documentation_documentation_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _documentation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documentation.component.html?ngResource */ 6296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




let DocumentationComponent = class DocumentationComponent {
  constructor() {
    this.splitDoc = {
      inputs: [{
        name: 'dir',
        type: 'string',
        default: '"ltr"',
        details: 'Indicates the directionality of the areas: <code>"ltr"</code> (left to right) or <code>"rtl"</code> (right to left).'
      }, {
        name: 'direction',
        type: 'string',
        default: '"horizontal"',
        details: 'Select split direction: <code>"horizontal"</code> or <code>"vertical"</code>.'
      }, {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        details: 'Disable the dragging feature (remove cursor/image on gutters). <code>(gutterClick)</code>/<code>(gutterDblClick)</code> still emits.'
      }, {
        name: 'gutterDblClickDuration',
        type: 'number',
        default: '0',
        details: `Milliseconds to detect a double click on a gutter. Set it around 300-500ms if you want to use <code>(gutterDblClick)</code> event.`
      }, {
        name: 'gutterSize',
        type: 'number',
        default: '11',
        details: `Gutters's size (dragging elements) in pixels.`
      }, {
        name: 'gutterStep',
        type: 'number',
        default: '1',
        details: `Gutter step while moving in pixels.`
      }, {
        name: 'restrictMove',
        type: 'boolean',
        default: 'false',
        details: 'Set to <code>true</code> if you want to limit gutter move to adjacent areas only.'
      }, {
        name: 'unit',
        type: 'string',
        default: '"percent"',
        details: `Selected unit you want to use: <code>"percent"</code> or <code>"pixel"</code> to specify area sizes.`
      }, {
        name: 'useTransition',
        type: 'boolean',
        default: 'false',
        details: 'Add transition when toggling visibility using <code>[visible]</code> or <code>[size]</code> changes.<br><u>Warning: Transitions are not working for <a href="https://github.com/philipwalton/flexbugs#flexbug-16">IE/Edge/Safari</a></u>'
      }],
      outputs: [{
        name: 'dragEnd',
        value: '{gutterNum: number, sizes: Array<number>}',
        details: 'Emit when drag ends.'
      }, {
        name: 'dragStart',
        value: '{gutterNum: number, sizes: Array<number>}',
        details: 'Emit when drag starts.'
      }, {
        name: 'gutterDblClick',
        value: '{gutterNum: number, sizes: Array<number>}',
        details: 'Emit when user double clicks on a gutter. See <code>[gutterDblClickDuration]</code> input.'
      }, {
        name: 'gutterClick',
        value: '{gutterNum: number, sizes: Array<number>}',
        details: 'Emit when user clicks on a gutter. See <code>[gutterDblClickDuration]</code> input.'
      }, {
        name: 'transitionEnd',
        value: 'Array<number>',
        details: 'Emit when transition ends (could be triggered from <code>[visible]</code> or <code>[size]</code> changes).<br>Only if <code>[useTransition]="true"</code>.<br><u>Warning: Transitions are not working for <a href="https://github.com/philipwalton/flexbugs#flexbug-16">IE/Edge/Safari</a></u>'
      }],
      class: [{
        name: 'dragProgress$',
        type: 'Observable<{gutterNum: number, sizes: Array<number>}>',
        details: `Emit when dragging. Replace old <code>(dragProgress)</code> template event for better flexibility about change detection mechanism.<br><u>Warning: Running outside zone by design, if you need to notify angular add</u> <code>this.splitEl.dragProgress$.subscribe(x => this.ngZone.run(() => this.x = x));</code>`
      }, {
        name: 'getVisibleAreaSizes()',
        type: '() => Array<number>',
        details: 'Get all <b>visible</b> area sizes.'
      }, {
        name: 'setVisibleAreaSizes()',
        type: '(Array<number>) => boolean',
        details: 'Set all <b>visible</b> area sizes in one go, return a boolean to know if input values were correct. Useful when combined with <code>dragProgress$</code> to sync multiple splits.'
      }]
    };
    this.splitAreaDoc = {
      inputs: [{
        name: 'lockSize',
        type: 'boolean',
        default: 'false',
        details: `Lock area size, same as <code>minSize</code> = <code>maxSize</code> = <code>size</code>.<br><u>Not working when <code>[size]="'*'"</code></u>`
      }, {
        name: 'maxSize',
        type: 'number',
        default: 'null',
        details: `Maximum pixel or percent size, should be equal to or larger than provided <code>[size]</code>.<br><u>Not working when <code>[size]="'*'"</code></u>`
      }, {
        name: 'minSize',
        type: 'number',
        default: 'null',
        details: `Minimum pixel or percent size, should be equal to or smaller than provided <code>[size]</code>.<br><u>Not working when <code>[size]="'*'"</code></u>`
      }, {
        name: 'order',
        type: 'number',
        default: 'null',
        details: `Order of the area. Used to maintain the order of areas when toggling their visibility. Toggling area visibility without specifying an <code>order</code> leads to weird behavior`
      }, {
        name: 'size',
        type: "number|'*'",
        default: '-',
        details: `Size of the area in selected unit (<code>percent</code>/<code>pixel</code>).<br><u>Percent mode:</u> All areas sizes should equal to 100, If not, all areas will have the same size.<br><u>Pixel mode:</u> An area with  wildcard size (<code>[size]="'*'"</code>) is mandatory (only one) and can't have <code>[visible]="false"</code> or <code>minSize</code>/<code>maxSize</code>/<code>lockSize</code> properties.`
      }, {
        name: 'visible',
        type: 'boolean',
        default: 'true',
        details: `Hide area visually but still present in the DOM, use <code>ngIf</code> to completely remove it.<br><u>Not working when <code>[size]="'*'"</code></u>`
      }]
    };
    this.cssClasses = {
      split: [{
        name: 'as-init',
        details: 'Added after component initialization.'
      }, {
        name: 'as-horizontal / as-vertical',
        details: 'Depends on <code>&lt;as-split [direction]="x"&gt;</code>.'
      }, {
        name: 'as-disabled',
        details: 'Added when <code>&lt;as-split [disabled]="true"&gt;</code>.'
      }, {
        name: 'as-transition',
        details: 'Added when <code>&lt;as-split [useTransition]="true"&gt;</code>.'
      }, {
        name: 'as-dragging',
        details: 'Added while a gutter is dragged.'
      }],
      area: [{
        name: 'as-split-area',
        details: 'Added on all areas.'
      }, {
        name: 'as-hidden',
        details: 'Added when <code>&lt;as-split-area [visible]="false"&gt;</code>.'
      }],
      gutter: [{
        name: 'as-split-gutter',
        details: 'Added on all gutters.'
      }, {
        name: 'as-dragged',
        details: 'Added on gutter while dragged.'
      }]
    };
  }
};
DocumentationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'sp-doc',
  template: _documentation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_Users_beeman_dev_github_angular_split_angular_split_src_app_documentation_documentation_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBtYXJnaW46IDUwcHggMDsKICAgICAgfQogICAgICBoNCB7CiAgICAgICAgbWFyZ2luOiAyMHB4IDA7CiAgICAgIH0KICAgICAgLnNlbCB7CiAgICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICAgIGNvbG9yOiAjYWRhZGFkOwogICAgICB9CiAgICAgIHRyID4gdGggewogICAgICAgIGNvbG9yOiAjYWRhZGFkOwogICAgICB9CiAgICAgIHRyID4gdGg6Zmlyc3QtY2hpbGQsCiAgICAgIC5zZWxDb250ZW50IHsKICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgICBjb2xvcjogI2ZmYzQyMTsKICAgICAgfQogICAgICB0ciA_2BIHRkOmZpcnN0LWNoaWxkIHsKICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgfQogICAg_Users_beeman_dev_github_angular_split_angular_split_src_app_documentation_documentation_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
})], DocumentationComponent);

/***/ }),

/***/ 6630:
/*!*******************************************************!*\
  !*** ./src/app/documentation/documentation.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentationModule: () => (/* binding */ DocumentationModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _documentation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentation.component */ 2359);





let DocumentationModule = class DocumentationModule {};
DocumentationModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
    path: '',
    component: _documentation_component__WEBPACK_IMPORTED_MODULE_0__.DocumentationComponent
  }])],
  declarations: [_documentation_component__WEBPACK_IMPORTED_MODULE_0__.DocumentationComponent]
})], DocumentationModule);

/***/ }),

/***/ 538:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/documentation/documentation.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBtYXJnaW46IDUwcHggMDsKICAgICAgfQogICAgICBoNCB7CiAgICAgICAgbWFyZ2luOiAyMHB4IDA7CiAgICAgIH0KICAgICAgLnNlbCB7CiAgICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICAgIGNvbG9yOiAjYWRhZGFkOwogICAgICB9CiAgICAgIHRyID4gdGggewogICAgICAgIGNvbG9yOiAjYWRhZGFkOwogICAgICB9CiAgICAgIHRyID4gdGg6Zmlyc3QtY2hpbGQsCiAgICAgIC5zZWxDb250ZW50IHsKICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgICBjb2xvcjogI2ZmYzQyMTsKICAgICAgfQogICAgICB0ciA%2BIHRkOmZpcnN0LWNoaWxkIHsKICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgfQogICAg!./src/app/documentation/documentation.component.ts ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
      :host {
        display: block;
        width: 100%;
        margin: 50px 0;
      }
      h4 {
        margin: 20px 0;
      }
      .sel {
        font-size: 16px;
        color: #adadad;
      }
      tr > th {
        color: #adadad;
      }
      tr > th:first-child,
      .selContent {
        font-weight: bold;
        color: #ffc421;
      }
      tr > td:first-child {
        font-weight: bold;
      }
    
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGNBQWM7UUFDZCxXQUFXO1FBQ1gsY0FBYztNQUNoQjtNQUNBO1FBQ0UsY0FBYztNQUNoQjtNQUNBO1FBQ0UsZUFBZTtRQUNmLGNBQWM7TUFDaEI7TUFDQTtRQUNFLGNBQWM7TUFDaEI7TUFDQTs7UUFFRSxpQkFBaUI7UUFDakIsY0FBYztNQUNoQjtNQUNBO1FBQ0UsaUJBQWlCO01BQ25CIiwiZmlsZSI6ImRvY3VtZW50YXRpb24uY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiA1MHB4IDA7XG4gICAgICB9XG4gICAgICBoNCB7XG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgfVxuICAgICAgLnNlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICNhZGFkYWQ7XG4gICAgICB9XG4gICAgICB0ciA+IHRoIHtcbiAgICAgICAgY29sb3I6ICNhZGFkYWQ7XG4gICAgICB9XG4gICAgICB0ciA+IHRoOmZpcnN0LWNoaWxkLFxuICAgICAgLnNlbENvbnRlbnQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICNmZmM0MjE7XG4gICAgICB9XG4gICAgICB0ciA+IHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgIl19 */`, "",{"version":3,"sources":["webpack://./src/app/documentation/documentation.component.ts"],"names":[],"mappings":";MACM;QACE,cAAc;QACd,WAAW;QACX,cAAc;MAChB;MACA;QACE,cAAc;MAChB;MACA;QACE,eAAe;QACf,cAAc;MAChB;MACA;QACE,cAAc;MAChB;MACA;;QAEE,iBAAiB;QACjB,cAAc;MAChB;MACA;QACE,iBAAiB;MACnB;;AAEN,wiCAAwiC","sourcesContent":["\n      :host {\n        display: block;\n        width: 100%;\n        margin: 50px 0;\n      }\n      h4 {\n        margin: 20px 0;\n      }\n      .sel {\n        font-size: 16px;\n        color: #adadad;\n      }\n      tr > th {\n        color: #adadad;\n      }\n      tr > th:first-child,\n      .selContent {\n        font-weight: bold;\n        color: #ffc421;\n      }\n      tr > td:first-child {\n        font-weight: bold;\n      }\n    "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6296:
/*!***********************************************************************!*\
  !*** ./src/app/documentation/documentation.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n  <h4>\n    <b>SplitComponent</b>&nbsp;<span class=\"sel\"\n      >(selector: '<span class=\"selContent\">as-split</span>' / exportAs: '<span class=\"selContent\">asSplit</span\n      >')</span\n    >\n  </h4>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>@Input()</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Details</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let prop of splitDoc.inputs\">\n        <td>{{ prop.name }}</td>\n        <td>{{ prop.type }}</td>\n        <td>\n          <code>{{ prop.default }}</code>\n        </td>\n        <td [innerHTML]=\"prop.details\"></td>\n      </tr>\n    </tbody>\n  </table>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>@Output()</th>\n        <th>Value</th>\n        <th>Details</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let event of splitDoc.outputs\">\n        <td>{{ event.name }}</td>\n        <td>\n          <code>{{ event.value }}</code>\n        </td>\n        <td [innerHTML]=\"event.details\"></td>\n      </tr>\n    </tbody>\n  </table>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>Access from TS class</th>\n        <th>Type</th>\n        <th>Details</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of splitDoc.class\">\n        <td>{{ item.name }}</td>\n        <td>\n          <code>{{ item.type }}</code>\n        </td>\n        <td [innerHTML]=\"item.details\"></td>\n      </tr>\n    </tbody>\n  </table>\n  <br /><br />\n\n  <h4>\n    <b>SplitAreaDirective</b>&nbsp;<span class=\"sel\"\n      >(selector: '<span class=\"selContent\">as-split-area, [as-split-area]</span>' / exportAs: '<span class=\"selContent\"\n        >asSplitArea</span\n      >')</span\n    >\n  </h4>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>@Input()</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Details</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let prop of splitAreaDoc.inputs\">\n        <td>{{ prop.name }}</td>\n        <td>{{ prop.type }}</td>\n        <td>\n          <code>{{ prop.default }}</code>\n        </td>\n        <td [innerHTML]=\"prop.details\"></td>\n      </tr>\n    </tbody>\n  </table>\n  <br /><br />\n\n  <h4><b>CSS classes</b></h4>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th style=\"width: 40%\">Split element classes</th>\n        <th>Details</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let x of cssClasses.split\">\n        <td>\n          <code>{{ x.name }}</code>\n        </td>\n        <td [innerHTML]=\"x.details\"></td>\n      </tr>\n    </tbody>\n  </table>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th style=\"width: 40%\">Area element classes</th>\n        <th>Details</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let x of cssClasses.area\">\n        <td>\n          <code>{{ x.name }}</code>\n        </td>\n        <td [innerHTML]=\"x.details\"></td>\n      </tr>\n    </tbody>\n  </table>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th style=\"width: 40%\">Gutter element classes</th>\n        <th>Details</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let x of cssClasses.gutter\">\n        <td>\n          <code>{{ x.name }}</code>\n        </td>\n        <td [innerHTML]=\"x.details\"></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_documentation_documentation_module_ts.c761727aa3fa0ab8.js.map