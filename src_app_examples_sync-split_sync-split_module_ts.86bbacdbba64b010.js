"use strict";
(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_sync-split_sync-split_module_ts"],{

/***/ 399:
/*!*************************************************************!*\
  !*** ./src/app/examples/sync-split/sync-split.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SyncSplitComponent: () => (/* binding */ SyncSplitComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7835);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);
/* harmony import */ var _utils_format_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/format-date */ 3354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ui_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/exampleTitle.component */ 1755);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-split */ 6496);
var _class;








const _c0 = ["mySplitA"];
const _c1 = ["mySplitB"];
const _c2 = ["mySplitC"];
class SyncSplitComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__.AComponent {
  constructor() {
    super(...arguments);
    this.sizes = [25, 75];
  }
  ngAfterViewInit() {
    this.sub = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)(this.mySplitAEl.dragProgress$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => ({
      name: 'A',
      data
    }))), this.mySplitBEl.dragProgress$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => ({
      name: 'B',
      data
    }))), this.mySplitCEl.dragProgress$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => ({
      name: 'C',
      data
    })))).subscribe(d => {
      if (d.name === 'A') {
        // If split A changed > update BC
        const sizesSplitA = this.mySplitAEl.getVisibleAreaSizes(); //d.data.sizes; <-- Could have use these values too
        this.mySplitBEl.setVisibleAreaSizes(sizesSplitA);
        this.mySplitCEl.setVisibleAreaSizes(sizesSplitA);
      } else if (d.name === 'B') {
        // Else if split B changed > update AC
        const sizesSplitB = this.mySplitBEl.getVisibleAreaSizes(); //d.data.sizes; <-- Could have use these values too
        this.mySplitAEl.setVisibleAreaSizes(sizesSplitB);
        this.mySplitCEl.setVisibleAreaSizes(sizesSplitB);
      } else if (d.name === 'C') {
        // Else if split C changed > update AB
        const sizesSplitC = this.mySplitCEl.getVisibleAreaSizes(); //d.data.sizes; <-- Could have use these values too
        this.mySplitAEl.setVisibleAreaSizes(sizesSplitC);
        this.mySplitBEl.setVisibleAreaSizes(sizesSplitC);
      }
      console.log(`${(0,_utils_format_date__WEBPACK_IMPORTED_MODULE_1__.formatDate)(new Date())} > dragProgress$ observable emitted, splits synchronized but current component change detection didn't run! (from split ${d.name})`);
    });
  }
  test() {}
  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
}
_class = SyncSplitComponent;
_class.ɵfac = /*@__PURE__*/function () {
  let ɵSyncSplitComponent_BaseFactory;
  return function SyncSplitComponent_Factory(t) {
    return (ɵSyncSplitComponent_BaseFactory || (ɵSyncSplitComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}();
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["sp-ex-sync"]],
  viewQuery: function SyncSplitComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.mySplitAEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.mySplitBEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.mySplitCEl = _t.first);
    }
  },
  hostAttrs: [1, "split-example-page"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  decls: 31,
  vars: 8,
  consts: [[1, "container"], [3, "type"], [1, "split-example"], ["direction", "vertical"], ["as-split-area", "", "size", "20"], ["direction", "horizontal"], ["mySplitA", ""], ["as-split-area", "", 3, "size"], [3, "size"], ["mySplitB", ""], ["size", "60"], ["mySplitC", ""], [1, "btn", "btn-warning", 3, "click"]],
  template: function SyncSplitComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "sp-example-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "as-split", 3)(5, "div", 4)(6, "as-split", 5, 6)(8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "A 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "as-split-area", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "A 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 4)(13, "as-split", 5, 9)(15, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "B 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "as-split-area", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "B 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "as-split-area", 10)(20, "as-split", 5, 11)(22, "as-split-area", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "C 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " C 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " Open devTools to view console.log() statements.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SyncSplitComponent_Template_button_click_29_listener() {
        return ctx.test();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Trigger change detection");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.testChangeDetectorRun(), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.exampleEnum.SYNC);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("size", ctx.sizes[0]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("size", ctx.sizes[1]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("size", ctx.sizes[0]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("size", ctx.sizes[1]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("size", ctx.sizes[0]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("size", ctx.sizes[1]);
    }
  },
  dependencies: [_ui_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_2__.ExampleTitleComponent, angular_split__WEBPACK_IMPORTED_MODULE_6__.SplitComponent, angular_split__WEBPACK_IMPORTED_MODULE_6__.SplitAreaDirective],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 1131:
/*!**********************************************************!*\
  !*** ./src/app/examples/sync-split/sync-split.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SyncSplitModule: () => (/* binding */ SyncSplitModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _sync_split_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sync-split.component */ 399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;







class SyncSplitModule {}
_class = SyncSplitModule;
_class.ɵfac = function SyncSplitModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
    path: '',
    component: _sync_split_component__WEBPACK_IMPORTED_MODULE_1__.SyncSplitComponent
  }]), angular_split__WEBPACK_IMPORTED_MODULE_5__.AngularSplitModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SyncSplitModule, {
    declarations: [_sync_split_component__WEBPACK_IMPORTED_MODULE_1__.SyncSplitComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, angular_split__WEBPACK_IMPORTED_MODULE_5__.AngularSplitModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_examples_sync-split_sync-split_module_ts.86bbacdbba64b010.js.map