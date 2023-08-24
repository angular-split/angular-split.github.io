(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_home_home_module_ts"],{

/***/ 6459:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_home_home_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBtYXJnaW46IDgwcHggMCA1MHB4IDA7CiAgICAgIH0KCiAgICAgIGgxIHsKICAgICAgICBjb2xvcjogI2ZmYzQyMTsKICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4OwogICAgICB9CiAgICAgIGgxID4gc21hbGwgewogICAgICAgIGNvbG9yOiAjMDAwMDAwOwogICAgICB9CgogICAgICAuanVtYm90cm9uIHsKICAgICAgICBtYXJnaW4tYm90dG9tOiAwOwogICAgICB9CiAgICAgIC5qdW1ib3Ryb24gPiBkaXYgewogICAgICAgIG1hcmdpbjogMjBweDsKICAgICAgfQogICAg_Users_beeman_dev_github_angular_split_angular_split_src_app_home_home_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/home/home.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBtYXJnaW46IDgwcHggMCA1MHB4IDA7CiAgICAgIH0KCiAgICAgIGgxIHsKICAgICAgICBjb2xvcjogI2ZmYzQyMTsKICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4OwogICAgICB9CiAgICAgIGgxID4gc21hbGwgewogICAgICAgIGNvbG9yOiAjMDAwMDAwOwogICAgICB9CgogICAgICAuanVtYm90cm9uIHsKICAgICAgICBtYXJnaW4tYm90dG9tOiAwOwogICAgICB9CiAgICAgIC5qdW1ib3Ryb24gPiBkaXYgewogICAgICAgIG1hcmdpbjogMjBweDsKICAgICAgfQogICAg!./src/app/home/home.component.ts */ 9434);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_home_home_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBtYXJnaW46IDgwcHggMCA1MHB4IDA7CiAgICAgIH0KCiAgICAgIGgxIHsKICAgICAgICBjb2xvcjogI2ZmYzQyMTsKICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4OwogICAgICB9CiAgICAgIGgxID4gc21hbGwgewogICAgICAgIGNvbG9yOiAjMDAwMDAwOwogICAgICB9CgogICAgICAuanVtYm90cm9uIHsKICAgICAgICBtYXJnaW4tYm90dG9tOiAwOwogICAgICB9CiAgICAgIC5qdW1ib3Ryb24gPiBkaXYgewogICAgICAgIG1hcmdpbjogMjBweDsKICAgICAgfQogICAg_Users_beeman_dev_github_angular_split_angular_split_src_app_home_home_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_beeman_dev_github_angular_split_angular_split_src_app_home_home_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBtYXJnaW46IDgwcHggMCA1MHB4IDA7CiAgICAgIH0KCiAgICAgIGgxIHsKICAgICAgICBjb2xvcjogI2ZmYzQyMTsKICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4OwogICAgICB9CiAgICAgIGgxID4gc21hbGwgewogICAgICAgIGNvbG9yOiAjMDAwMDAwOwogICAgICB9CgogICAgICAuanVtYm90cm9uIHsKICAgICAgICBtYXJnaW4tYm90dG9tOiAwOwogICAgICB9CiAgICAgIC5qdW1ib3Ryb24gPiBkaXYgewogICAgICAgIG1hcmdpbjogMjBweDsKICAgICAgfQogICAg_Users_beeman_dev_github_angular_split_angular_split_src_app_home_home_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



let HomeComponent = class HomeComponent {
  constructor() {
    this.version = _angular_core__WEBPACK_IMPORTED_MODULE_1__.VERSION.full;
    this.code1 = `npm install angular-split`;
    this.code2 = `import { AngularSplitModule } from 'angular-split';

@NgModule({
  imports: [
    AngularSplitModule,
    ...
  ],
  ...
})
export class AppModule {}`;
    this.code3 = `<div style="width: 500px; height: 500px; background: yellow;">
  <as-split direction="horizontal">
    <as-split-area [size]="40">
      <p>LEFT</p>
    </as-split-area>
    <as-split-area [size]="60">
      <p>RIGHT</p>
    </as-split-area>
  </as-split>
</div>`;
  }
};
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'sp-home',
  template: `
    <div class="container">
      <div class="jumbotron">
        <div class="text-center">
          <img src="/assets/logo.svg" height="100" class="m-auto" alt="" />
          <h1 class="mt-3">angular-split</h1>
          <h4>Angular UI library to split views and allow dragging to resize areas using CSS flexbox layout.</h4>
          <h5 class="mt-3 text-muted">Running on Angular v{{ version }}.</h5>
          <a href="https://www.npmjs.com/package/angular-split"
            ><img
              src="https://img.shields.io/npm/v/angular-split/latest.svg?style=flat-square"
              alt="npm latest version"
              height="18" /></a
          >&nbsp;<a href="https://www.npmjs.com/package/angular-split"
            ><img
              src="https://img.shields.io/npm/v/angular-split/next.svg?style=flat-square"
              alt="npm next version"
              height="18" /></a
          >&nbsp;<a href="https://discord.gg/Qm9MPCg">
            <img
              src="https://img.shields.io/discord/748677963142135818?color=7289DA&label=Angular%20Discord&logo=discord&logoColor=white&style=flat-square"
              alt="Angular Discord"
              height="18"
            />
          </a>
        </div>
        <br />
        <h5>Install npm module:</h5>
        <pre [innerText]="code1"></pre>
        <br />
        <h5>Add angular module to your app:</h5>
        <pre [innerText]="code2"></pre>
        <br />
        <h5>Define splits in your template:</h5>
        <pre [innerText]="code3"></pre>
        <br />
        <h5>Support:</h5>
        If you have an issue using the library, feel free to join our chat! We are part of the
        <a href="https://discord.gg/Qm9MPCg">Angular Community</a> Discord and you can ask questions in the
        <strong>#questions</strong> channel or <strong>Help</strong> forum there.

        <div class="text-center">
          <a href="https://discord.gg/Qm9MPCg">
            <img
              src="https://img.shields.io/discord/748677963142135818?color=7289DA&label=Angular%20Discord&logo=discord&logoColor=white&style=flat-square"
            />
          </a>
        </div>

        <h5>Bug report:</h5>
        <p>
          If you find a bug, open an issue with a
          <a href="https://stackblitz.com/fork/angular-split-demo" target="_blank">StackBlitz</a> demo showing it.
        </p>
        <h5>Credits:</h5>
        <p>
          This library is built by <a href="https://github.com/bertrandg">Bertrand Gaillard</a> and maintained by
          <a href="https://github.com/beeman">Bram Borggreve</a>.
        </p>
      </div>
    </div>
  `,
  styles: [(_Users_beeman_dev_github_angular_split_angular_split_src_app_home_home_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBtYXJnaW46IDgwcHggMCA1MHB4IDA7CiAgICAgIH0KCiAgICAgIGgxIHsKICAgICAgICBjb2xvcjogI2ZmYzQyMTsKICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4OwogICAgICB9CiAgICAgIGgxID4gc21hbGwgewogICAgICAgIGNvbG9yOiAjMDAwMDAwOwogICAgICB9CgogICAgICAuanVtYm90cm9uIHsKICAgICAgICBtYXJnaW4tYm90dG9tOiAwOwogICAgICB9CiAgICAgIC5qdW1ib3Ryb24gPiBkaXYgewogICAgICAgIG1hcmdpbjogMjBweDsKICAgICAgfQogICAg_Users_beeman_dev_github_angular_split_angular_split_src_app_home_home_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
})], HomeComponent);

/***/ }),

/***/ 4320:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 6459);





let HomeModule = class HomeModule {};
HomeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
    path: '',
    component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
  }])],
  declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent]
})], HomeModule);

/***/ }),

/***/ 9434:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/home/home.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBtYXJnaW46IDgwcHggMCA1MHB4IDA7CiAgICAgIH0KCiAgICAgIGgxIHsKICAgICAgICBjb2xvcjogI2ZmYzQyMTsKICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4OwogICAgICB9CiAgICAgIGgxID4gc21hbGwgewogICAgICAgIGNvbG9yOiAjMDAwMDAwOwogICAgICB9CgogICAgICAuanVtYm90cm9uIHsKICAgICAgICBtYXJnaW4tYm90dG9tOiAwOwogICAgICB9CiAgICAgIC5qdW1ib3Ryb24gPiBkaXYgewogICAgICAgIG1hcmdpbjogMjBweDsKICAgICAgfQogICAg!./src/app/home/home.component.ts ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        margin: 80px 0 50px 0;
      }

      h1 {
        color: #ffc421;
        margin-bottom: 30px;
      }
      h1 > small {
        color: #000000;
      }

      .jumbotron {
        margin-bottom: 0;
      }
      .jumbotron > div {
        margin: 20px;
      }
    
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGNBQWM7UUFDZCxXQUFXO1FBQ1gscUJBQXFCO01BQ3ZCOztNQUVBO1FBQ0UsY0FBYztRQUNkLG1CQUFtQjtNQUNyQjtNQUNBO1FBQ0UsY0FBYztNQUNoQjs7TUFFQTtRQUNFLGdCQUFnQjtNQUNsQjtNQUNBO1FBQ0UsWUFBWTtNQUNkIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiA4MHB4IDAgNTBweCAwO1xuICAgICAgfVxuXG4gICAgICBoMSB7XG4gICAgICAgIGNvbG9yOiAjZmZjNDIxO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgfVxuICAgICAgaDEgPiBzbWFsbCB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgfVxuXG4gICAgICAuanVtYm90cm9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICAgIC5qdW1ib3Ryb24gPiBkaXYge1xuICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICB9XG4gICAgIl19 */`, "",{"version":3,"sources":["webpack://./src/app/home/home.component.ts"],"names":[],"mappings":";MACM;QACE,cAAc;QACd,WAAW;QACX,qBAAqB;MACvB;;MAEA;QACE,cAAc;QACd,mBAAmB;MACrB;MACA;QACE,cAAc;MAChB;;MAEA;QACE,gBAAgB;MAClB;MACA;QACE,YAAY;MACd;;AAEN,42BAA42B","sourcesContent":["\n      :host {\n        display: block;\n        width: 100%;\n        margin: 80px 0 50px 0;\n      }\n\n      h1 {\n        color: #ffc421;\n        margin-bottom: 30px;\n      }\n      h1 > small {\n        color: #000000;\n      }\n\n      .jumbotron {\n        margin-bottom: 0;\n      }\n      .jumbotron > div {\n        margin: 20px;\n      }\n    "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.edc78ff3d643ce2b.js.map