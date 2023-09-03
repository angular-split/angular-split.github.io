"use strict";
(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_collapse-expand_collapse-expand_module_ts"],{

/***/ 901:
/*!***********************************************************************!*\
  !*** ./src/app/examples/collapse-expand/collapse-expand.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapseExpandComponent: () => (/* binding */ CollapseExpandComponent)
/* harmony export */ });
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ui_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/exampleTitle.component */ 1755);
var _class;






class CollapseExpandComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__.AComponent {
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
}
_class = CollapseExpandComponent;
_class.ɵfac = /*@__PURE__*/function () {
  let ɵCollapseExpandComponent_BaseFactory;
  return function CollapseExpandComponent_Factory(t) {
    return (ɵCollapseExpandComponent_BaseFactory || (ɵCollapseExpandComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}();
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["sp-ex-class-collapse"]],
  viewQuery: function CollapseExpandComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](angular_split__WEBPACK_IMPORTED_MODULE_3__.SplitComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](angular_split__WEBPACK_IMPORTED_MODULE_3__.SplitAreaDirective, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.splitEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.areasEl = _t);
    }
  },
  hostAttrs: [1, "split-example-page"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 43,
  vars: 4,
  consts: [[1, "container"], [3, "type"], [1, "split-example"], [3, "unit"], [3, "size"], [2, "height", "100%", "display", "flex", "justify-content", "center", "align-items", "center", "background-color", "antiquewhite"], [2, "height", "100%", "display", "flex", "justify-content", "center", "align-items", "center", "background-color", "gainsboro"], [2, "height", "100%", "display", "flex", "justify-content", "center", "align-items", "center", "background-color", "burlywood"], [1, "btns"], [1, "btn", "btn-warning", 2, "margin-right", "10px", 3, "click"], [1, "btn", "btn-warning", 3, "click"]],
  template: function CollapseExpandComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "sp-example-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "as-split", 3)(4, "as-split-area", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " area #1 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "as-split-area")(8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " area #2 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "as-split-area", 4)(11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " area #3 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ul")(15, "li")(16, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "collapse(newSize:number = 0)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " will force the area the be the width given and its gutter disabled.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li")(20, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "expand()");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " will restore the area to its size before it was collapsed.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br")(24, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 8)(26, "div")(27, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CollapseExpandComponent_Template_button_click_27_listener() {
        return ctx.onClose1();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Collapse #1 to 0px");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CollapseExpandComponent_Template_button_click_29_listener() {
        return ctx.onClose1(40);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Collapse #1 to 40px");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div")(32, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CollapseExpandComponent_Template_button_click_32_listener() {
        return ctx.onClose3();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Collapse #3 to 0px");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CollapseExpandComponent_Template_button_click_34_listener() {
        return ctx.onClose3(60);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Collapse #3 to 60px");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 8)(37, "div")(38, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CollapseExpandComponent_Template_button_click_38_listener() {
        return ctx.onExpand1();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Expand #1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div")(41, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CollapseExpandComponent_Template_button_click_41_listener() {
        return ctx.onExpand3();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Expand #3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.exampleEnum.COLLAPSE);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("unit", "pixel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", 200);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", 100);
    }
  },
  dependencies: [_ui_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_1__.ExampleTitleComponent, angular_split__WEBPACK_IMPORTED_MODULE_3__.SplitComponent, angular_split__WEBPACK_IMPORTED_MODULE_3__.SplitAreaDirective],
  styles: [".btns[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-around;\n      }\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxhcHNlLWV4cGFuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsYUFBYTtRQUNiLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsNkJBQTZCO01BQy9CO01BQ0E7UUFDRSxtQkFBbUI7TUFDckIiLCJmaWxlIjoiY29sbGFwc2UtZXhwYW5kLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmJ0bnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuICAgICAgLmJ0bnMgPiBkaXYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhhbXBsZXMvY29sbGFwc2UtZXhwYW5kL2NvbGxhcHNlLWV4cGFuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsYUFBYTtRQUNiLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsNkJBQTZCO01BQy9CO01BQ0E7UUFDRSxtQkFBbUI7TUFDckI7O0FBRU4sb25CQUFvbkIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5idG5zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIH1cbiAgICAgIC5idG5zID4gZGl2IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 3689:
/*!********************************************************************!*\
  !*** ./src/app/examples/collapse-expand/collapse-expand.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapseExpandModule: () => (/* binding */ CollapseExpandModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _collapse_expand_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapse-expand.component */ 901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;







class CollapseExpandModule {}
_class = CollapseExpandModule;
_class.ɵfac = function CollapseExpandModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
    path: '',
    component: _collapse_expand_component__WEBPACK_IMPORTED_MODULE_1__.CollapseExpandComponent
  }]), angular_split__WEBPACK_IMPORTED_MODULE_5__.AngularSplitModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CollapseExpandModule, {
    declarations: [_collapse_expand_component__WEBPACK_IMPORTED_MODULE_1__.CollapseExpandComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, angular_split__WEBPACK_IMPORTED_MODULE_5__.AngularSplitModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_examples_collapse-expand_collapse-expand_module_ts.67e3cdc7db82c210.js.map