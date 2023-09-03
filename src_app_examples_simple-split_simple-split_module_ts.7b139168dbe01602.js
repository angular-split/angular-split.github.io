"use strict";
(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_simple-split_simple-split_module_ts"],{

/***/ 4273:
/*!*****************************************************************!*\
  !*** ./src/app/examples/simple-split/simple-split.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleSplitComponent: () => (/* binding */ SimpleSplitComponent)
/* harmony export */ });
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/exampleTitle.component */ 1755);
var _class;





const _c0 = ["split"];
const _c1 = ["area1"];
const _c2 = ["area2"];
class SimpleSplitComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__.AComponent {
  constructor() {
    super();
    this.direction = 'horizontal';
    this.sizes = {
      percentWithoutWildcards: {
        area1: 30,
        area2: 70
      },
      percentWithWildcards: {
        area1: '*',
        area2: 20,
        area3: 10
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
  dragEndPercentWithoutWildcards({
    sizes
  }) {
    this.sizes.percentWithoutWildcards.area1 = sizes[0];
    this.sizes.percentWithoutWildcards.area2 = sizes[1];
  }
  dragEndPercentWithWildcards({
    sizes
  }) {
    this.sizes.percentWithWildcards.area1 = sizes[0];
    this.sizes.percentWithWildcards.area2 = sizes[1];
    this.sizes.percentWithWildcards.area3 = sizes[2];
  }
  dragEndPixel({
    sizes
  }) {
    this.sizes.pixel.area1 = sizes[0];
    this.sizes.pixel.area2 = sizes[1];
    this.sizes.pixel.area3 = sizes[2];
  }
}
_class = SimpleSplitComponent;
_class.ɵfac = function SimpleSplitComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["sp-ex-simple"]],
  viewQuery: function SimpleSplitComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.split = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.area1 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.area2 = _t.first);
    }
  },
  hostAttrs: [1, "split-example-page"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 110,
  vars: 14,
  consts: [[1, "container"], [3, "type"], [1, "split-example", "ex-percent"], ["unit", "percent", "gutterAriaLabel", "adjustable divider between two views", 3, "direction", "dragEnd"], ["split", "asSplit"], ["size", "30"], ["area1", "asSplitArea"], ["size", "70"], ["area2", "asSplitArea"], [1, "split-example", "ex-percent-wc"], ["size", "*"], ["size", "20"], ["size", "10"], [1, "split-example", "ex-pixel"], ["unit", "pixel", 3, "direction", "dragEnd"], ["size", "120"], ["size", "160"], [1, "btns"], [1, "btn", "btn-warning", 3, "click"]],
  template: function SimpleSplitComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "sp-example-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Percent mode (No wildcards):");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2)(6, "as-split", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragEnd", function SimpleSplitComponent_Template_as_split_dragEnd_6_listener($event) {
        return ctx.dragEndPercentWithoutWildcards($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "as-split-area", 5, 6)(10, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Initial size: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "30%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Current size: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "as-split-area", 7, 8)(22, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Initial size: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "70%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Current size: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Percent mode (With wildcards):");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 9)(35, "as-split", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragEnd", function SimpleSplitComponent_Template_as_split_dragEnd_35_listener($event) {
        return ctx.dragEndPercentWithWildcards($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "as-split-area", 10)(37, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Initial size: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Current size: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "as-split-area", 11)(48, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Initial size: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "20%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Current size: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "as-split-area", 12)(59, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Initial size: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "10%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " Current size: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Pixel mode:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 13)(72, "as-split", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragEnd", function SimpleSplitComponent_Template_as_split_dragEnd_72_listener($event) {
        return ctx.dragEndPixel($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "as-split-area", 15)(74, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Initial size: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "120px");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " Current size: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, " Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "as-split-area", 10)(85, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Initial size: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, " Current size: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "as-split-area", 16)(96, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Initial size: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "160px");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, " Current size: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, " Eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 17)(108, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SimpleSplitComponent_Template_button_click_108_listener() {
        return ctx.direction = ctx.direction === "horizontal" ? "vertical" : "horizontal";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.testChangeDetectorRun(), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.exampleEnum.SIMPLE);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("direction", ctx.direction);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.sizes.percentWithoutWildcards.area1, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.sizes.percentWithoutWildcards.area2, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("direction", ctx.direction);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.sizes.percentWithWildcards.area1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.sizes.percentWithWildcards.area2, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.sizes.percentWithWildcards.area3, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("direction", ctx.direction);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.sizes.pixel.area1, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.sizes.pixel.area2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.sizes.pixel.area3, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", "Toggle direction: \"" + ctx.direction + "\"", " ");
    }
  },
  dependencies: [angular_split__WEBPACK_IMPORTED_MODULE_3__.SplitComponent, angular_split__WEBPACK_IMPORTED_MODULE_3__.SplitAreaDirective, _ui_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_1__.ExampleTitleComponent],
  styles: [".btns[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsZS1zcGxpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsZUFBZTtNQUNqQiIsImZpbGUiOiJzaW1wbGUtc3BsaXQuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuYnRucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG4gICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhhbXBsZXMvc2ltcGxlLXNwbGl0L3NpbXBsZS1zcGxpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsZUFBZTtNQUNqQjs7QUFFTixvZkFBb2YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5idG5zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 4603:
/*!**************************************************************!*\
  !*** ./src/app/examples/simple-split/simple-split.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleSplitModule: () => (/* binding */ SimpleSplitModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _simple_split_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-split.component */ 4273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;







class SimpleSplitModule {}
_class = SimpleSplitModule;
_class.ɵfac = function SimpleSplitModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
    path: '',
    component: _simple_split_component__WEBPACK_IMPORTED_MODULE_1__.SimpleSplitComponent
  }]), angular_split__WEBPACK_IMPORTED_MODULE_5__.AngularSplitModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SimpleSplitModule, {
    declarations: [_simple_split_component__WEBPACK_IMPORTED_MODULE_1__.SimpleSplitComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, angular_split__WEBPACK_IMPORTED_MODULE_5__.AngularSplitModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_examples_simple-split_simple-split_module_ts.7b139168dbe01602.js.map