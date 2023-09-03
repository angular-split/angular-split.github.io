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
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ui_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/exampleTitle.component */ 1755);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-split */ 6496);
var _class;




class IframesComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__.AComponent {}
_class = IframesComponent;
_class.ɵfac = /*@__PURE__*/function () {
  let ɵIframesComponent_BaseFactory;
  return function IframesComponent_Factory(t) {
    return (ɵIframesComponent_BaseFactory || (ɵIframesComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}();
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["sp-ex-nested"]],
  hostAttrs: [1, "split-example-page"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 11,
  vars: 2,
  consts: [[1, "container"], [3, "type"], [1, "split-example", 2, "height", "400px"], ["direction", "horizontal"], ["split", ""], ["size", "40"], ["src", "https://angular-split.github.io", "frameborder", "0", "scrolling", "no", "width", "100%", "height", "100%"], ["size", "60"]],
  template: function IframesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "sp-example-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "as-split", 3, 4)(6, "as-split-area", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "iframe", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "as-split-area", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "iframe", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.testChangeDetectorRun(), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.exampleEnum.IFRAME);
    }
  },
  dependencies: [_ui_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_1__.ExampleTitleComponent, angular_split__WEBPACK_IMPORTED_MODULE_3__.SplitComponent, angular_split__WEBPACK_IMPORTED_MODULE_3__.SplitAreaDirective],
  encapsulation: 2,
  changeDetection: 0
});

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _iframes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iframes.component */ 5112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;







class IframesModule {}
_class = IframesModule;
_class.ɵfac = function IframesModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
    path: '',
    component: _iframes_component__WEBPACK_IMPORTED_MODULE_1__.IframesComponent
  }]), angular_split__WEBPACK_IMPORTED_MODULE_5__.AngularSplitModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](IframesModule, {
    declarations: [_iframes_component__WEBPACK_IMPORTED_MODULE_1__.IframesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, angular_split__WEBPACK_IMPORTED_MODULE_5__.AngularSplitModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_examples_iframes_iframes_module_ts.005bbd2f10fefe44.js.map