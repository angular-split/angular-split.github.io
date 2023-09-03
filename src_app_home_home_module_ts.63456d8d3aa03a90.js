"use strict";
(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_home_home_module_ts"],{

/***/ 6459:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;


class HomeComponent {
  constructor() {
    this.version = _angular_core__WEBPACK_IMPORTED_MODULE_0__.VERSION.full;
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
}
_class = HomeComponent;
_class.ɵfac = function HomeComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["sp-home"]],
  decls: 63,
  vars: 4,
  consts: [[1, "container"], [1, "jumbotron"], [1, "text-center"], ["src", "/assets/logo.svg", "height", "100", "alt", "", 1, "m-auto"], [1, "mt-3"], [1, "mt-3", "text-muted"], ["href", "https://www.npmjs.com/package/angular-split"], ["src", "https://img.shields.io/npm/v/angular-split/latest.svg?style=flat-square", "alt", "npm latest version", "height", "18"], ["src", "https://img.shields.io/npm/v/angular-split/next.svg?style=flat-square", "alt", "npm next version", "height", "18"], ["href", "https://discord.gg/Qm9MPCg"], ["src", "https://img.shields.io/discord/748677963142135818?color=7289DA&label=Angular%20Discord&logo=discord&logoColor=white&style=flat-square", "alt", "Angular Discord", "height", "18"], [3, "innerText"], ["src", "https://img.shields.io/discord/748677963142135818?color=7289DA&label=Angular%20Discord&logo=discord&logoColor=white&style=flat-square"], ["href", "https://stackblitz.com/fork/angular-split-demo", "target", "_blank"], ["href", "https://github.com/bertrandg"], ["href", "https://github.com/beeman"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "angular-split");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Angular UI library to split views and allow dragging to resize areas using CSS flexbox layout.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Install npm module:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "pre", 11)(22, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Add angular module to your app:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "pre", 11)(26, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Define splits in your template:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "pre", 11)(30, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Support:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " If you have an issue using the library, feel free to join our chat! We are part of the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Angular Community");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Discord and you can ask questions in the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "#questions");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " channel or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Help");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " forum there. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2)(44, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Bug report:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " If you find a bug, open an issue with a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "StackBlitz");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " demo showing it. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Credits:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " This library is built by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Bertrand Gaillard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " and maintained by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Bram Borggreve");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Running on Angular v", ctx.version, ".");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx.code1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx.code2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx.code3);
    }
  },
  styles: ["[_nghost-%COMP%] {\n        display: block;\n        width: 100%;\n        margin: 80px 0 50px 0;\n      }\n\n      h1[_ngcontent-%COMP%] {\n        color: #ffc421;\n        margin-bottom: 30px;\n      }\n      h1[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n        color: #000000;\n      }\n\n      .jumbotron[_ngcontent-%COMP%] {\n        margin-bottom: 0;\n      }\n      .jumbotron[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        margin: 20px;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGNBQWM7UUFDZCxXQUFXO1FBQ1gscUJBQXFCO01BQ3ZCOztNQUVBO1FBQ0UsY0FBYztRQUNkLG1CQUFtQjtNQUNyQjtNQUNBO1FBQ0UsY0FBYztNQUNoQjs7TUFFQTtRQUNFLGdCQUFnQjtNQUNsQjtNQUNBO1FBQ0UsWUFBWTtNQUNkIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiA4MHB4IDAgNTBweCAwO1xuICAgICAgfVxuXG4gICAgICBoMSB7XG4gICAgICAgIGNvbG9yOiAjZmZjNDIxO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgfVxuICAgICAgaDEgPiBzbWFsbCB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgfVxuXG4gICAgICAuanVtYm90cm9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICAgIC5qdW1ib3Ryb24gPiBkaXYge1xuICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICB9XG4gICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxjQUFjO1FBQ2QsV0FBVztRQUNYLHFCQUFxQjtNQUN2Qjs7TUFFQTtRQUNFLGNBQWM7UUFDZCxtQkFBbUI7TUFDckI7TUFDQTtRQUNFLGNBQWM7TUFDaEI7O01BRUE7UUFDRSxnQkFBZ0I7TUFDbEI7TUFDQTtRQUNFLFlBQVk7TUFDZDs7QUFFTiw0MkJBQTQyQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogODBweCAwIDUwcHggMDtcbiAgICAgIH1cblxuICAgICAgaDEge1xuICAgICAgICBjb2xvcjogI2ZmYzQyMTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIH1cbiAgICAgIGgxID4gc21hbGwge1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIH1cblxuICAgICAgLmp1bWJvdHJvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgICAuanVtYm90cm9uID4gZGl2IHtcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4320:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 6459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





class HomeModule {}
_class = HomeModule;
_class.ɵfac = function HomeModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
    path: '',
    component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.63456d8d3aa03a90.js.map