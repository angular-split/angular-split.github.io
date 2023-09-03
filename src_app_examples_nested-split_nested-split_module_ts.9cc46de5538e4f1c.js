"use strict";
(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_nested-split_nested-split_module_ts"],{

/***/ 8047:
/*!*****************************************************************!*\
  !*** ./src/app/examples/nested-split/nested-split.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NestedComponent: () => (/* binding */ NestedComponent)
/* harmony export */ });
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/exampleTitle.component */ 1755);
var _class;




class NestedComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__.AComponent {}
_class = NestedComponent;
_class.ɵfac = /*@__PURE__*/function () {
  let ɵNestedComponent_BaseFactory;
  return function NestedComponent_Factory(t) {
    return (ɵNestedComponent_BaseFactory || (ɵNestedComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}();
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["sp-ex-nested"]],
  hostAttrs: [1, "split-example-page"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 24,
  vars: 3,
  consts: [[1, "container"], [3, "type"], [1, "split-example", 2, "height", "400px"], ["direction", "horizontal", "restrictMove", "true", 3, "useTransition"], ["size", "40"], ["direction", "vertical", "restrictMove", "true"], ["size", "60"], ["size", "25"], ["size", "75"]],
  template: function NestedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "sp-example-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "as-split", 3)(5, "as-split-area", 4)(6, "as-split", 5)(7, "as-split-area")(8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "as-split-area")(11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "as-split-area")(14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "as-split-area", 6)(17, "as-split", 5)(18, "as-split-area", 7)(19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "as-split-area", 8)(22, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.testChangeDetectorRun(), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.exampleEnum.NESTED);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("useTransition", true);
    }
  },
  dependencies: [angular_split__WEBPACK_IMPORTED_MODULE_3__.SplitComponent, angular_split__WEBPACK_IMPORTED_MODULE_3__.SplitAreaDirective, _ui_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_1__.ExampleTitleComponent],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 589:
/*!**************************************************************!*\
  !*** ./src/app/examples/nested-split/nested-split.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NestedSplitModule: () => (/* binding */ NestedSplitModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _nested_split_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nested-split.component */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;







class NestedSplitModule {}
_class = NestedSplitModule;
_class.ɵfac = function NestedSplitModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, angular_split__WEBPACK_IMPORTED_MODULE_4__.AngularSplitModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
    path: '',
    component: _nested_split_component__WEBPACK_IMPORTED_MODULE_1__.NestedComponent
  }]), _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NestedSplitModule, {
    declarations: [_nested_split_component__WEBPACK_IMPORTED_MODULE_1__.NestedComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, angular_split__WEBPACK_IMPORTED_MODULE_4__.AngularSplitModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_examples_nested-split_nested-split_module_ts.9cc46de5538e4f1c.js.map