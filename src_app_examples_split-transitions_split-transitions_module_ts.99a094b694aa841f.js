"use strict";
(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_split-transitions_split-transitions_module_ts"],{

/***/ 9904:
/*!***************************************************************************!*\
  !*** ./src/app/examples/split-transitions/split-transitions.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitTransitionsComponent: () => (/* binding */ SplitTransitionsComponent)
/* harmony export */ });
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);
/* harmony import */ var _utils_format_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/format-date */ 3354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _ui_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/exampleTitle.component */ 1755);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-split */ 6496);
var _class;







const _c0 = ["logs"];
function SplitTransitionsComponent_li_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const l_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", l_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](l_r2.text);
  }
}
class SplitTransitionsComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__.AComponent {
  constructor() {
    super(...arguments);
    this.action = {
      a1s: 25,
      a2s: 50,
      a3s: 25,
      a1v: true,
      a2v: true,
      a3v: true,
      useTransition: true
    };
    this.logMessages = [];
    //
    this.only = 0;
    //
    this.keepA = true;
    this.keepB = true;
    this.keepC = true;
  }
  log(e) {
    this.logMessages.push({
      type: 'transitionEnd',
      text: `${(0,_utils_format_date__WEBPACK_IMPORTED_MODULE_1__.formatDate)(new Date())} > transitionEnd event > ${e}`
    });
    setTimeout(() => {
      if (this.logsEl.nativeElement.scroll) {
        ;
        this.logsEl.nativeElement.scroll({
          top: this.logMessages.length * 30
        });
      }
    });
  }
  left() {
    switch (this.only) {
      case 0:
      case 2:
      case 3:
        this.only = 1;
        return;
      case 1:
        this.only = 0;
        return;
    }
  }
  center() {
    switch (this.only) {
      case 0:
      case 1:
      case 3:
        this.only = 2;
        return;
      case 2:
        this.only = 0;
        return;
    }
  }
  right() {
    switch (this.only) {
      case 0:
      case 1:
      case 2:
        this.only = 3;
        return;
      case 3:
        this.only = 0;
        return;
    }
  }
}
_class = SplitTransitionsComponent;
_class.ɵfac = /*@__PURE__*/function () {
  let ɵSplitTransitionsComponent_BaseFactory;
  return function SplitTransitionsComponent_Factory(t) {
    return (ɵSplitTransitionsComponent_BaseFactory || (ɵSplitTransitionsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}();
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["sp-ex-transitions"]],
  viewQuery: function SplitTransitionsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.logsEl = _t.first);
    }
  },
  hostAttrs: [1, "split-example-page"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
  decls: 138,
  vars: 53,
  consts: [[1, "container"], [3, "type"], [1, "split-example"], ["direction", "horizontal", "disabled", "true", 3, "useTransition", "dragEnd", "transitionEnd"], ["order", "1", 3, "visible", "size"], ["order", "2", 3, "visible", "size"], ["order", "3", 3, "visible", "size"], [1, "btns"], [1, "btn", "btn-warning", 3, "click"], [1, "btn-group"], [1, "logs"], ["logs", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "split-example", "ex2", 2, "height", "150px"], ["useTransition", "true", "unit", "pixel"], ["size", "200", "minSize", "200", "order", "1", 3, "visible"], ["size", "*", "order", "2", 3, "visible"], ["size", "200", "minSize", "200", "order", "3", 3, "visible"], ["useTransition", "true", "unit", "percent"], ["size", "30", "minSize", "30", "order", "1", 3, "visible"], ["size", "40", "order", "2", 3, "visible"], ["size", "30", "minSize", "30", "order", "3", 3, "visible"], [3, "ngClass"]],
  template: function SplitTransitionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "sp-example-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "as-split", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dragEnd", function SplitTransitionsComponent_Template_as_split_dragEnd_4_listener($event) {
        ctx.action.a1s = $event.sizes[0];
        ctx.action.a2s = $event.sizes[1];
        return ctx.action.a3s = $event.sizes[2];
      })("transitionEnd", function SplitTransitionsComponent_Template_as_split_transitionEnd_4_listener($event) {
        return ctx.log($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "as-split-area", 4)(6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "as-split-area", 5)(9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "as-split-area", 6)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 7)(16, "div")(17, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SplitTransitionsComponent_Template_button_click_17_listener() {
        return ctx.action.useTransition = !ctx.action.useTransition;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 9)(20, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SplitTransitionsComponent_Template_label_click_20_listener() {
        return ctx.action.a1v = !ctx.action.a1v;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SplitTransitionsComponent_Template_label_click_22_listener() {
        return ctx.action.a2v = !ctx.action.a2v;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SplitTransitionsComponent_Template_label_click_24_listener() {
        return ctx.action.a3v = !ctx.action.a3v;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 9)(27, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SplitTransitionsComponent_Template_label_click_27_listener() {
        ctx.action.a1s = 25;
        ctx.action.a2s = 50;
        return ctx.action.a3s = 25;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Set sizes to 25/50/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SplitTransitionsComponent_Template_label_click_29_listener() {
        ctx.action.a1s = 40;
        ctx.action.a2s = 20;
        return ctx.action.a3s = 40;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Set sizes to 40/20/40");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 10)(32, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Events ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "(transitionEnd)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "ul", null, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, SplitTransitionsComponent_li_39_Template, 2, 2, "li", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "br")(41, "hr")(42, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 13)(44, "as-split", 14)(45, "as-split-area", 15)(46, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SplitTransitionsComponent_Template_button_click_46_listener() {
        return ctx.left();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "size: 200px");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "minSize: 200px");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "as-split-area", 16)(53, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SplitTransitionsComponent_Template_button_click_53_listener() {
        return ctx.center();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "size: *");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "as-split-area", 17)(58, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SplitTransitionsComponent_Template_button_click_58_listener() {
        return ctx.right();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "size: 200px");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "minSize: 200px");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 13)(65, "as-split", 18)(66, "as-split-area", 19)(67, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SplitTransitionsComponent_Template_button_click_67_listener() {
        return ctx.left();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "size: 30%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "minSize: 30%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "as-split-area", 20)(74, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SplitTransitionsComponent_Template_button_click_74_listener() {
        return ctx.center();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "size: 40%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "as-split-area", 21)(79, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SplitTransitionsComponent_Template_button_click_79_listener() {
        return ctx.right();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "size: 30%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "minSize: 30%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "br")(86, "hr")(87, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 7)(89, "div", 9)(90, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SplitTransitionsComponent_Template_label_click_90_listener() {
        return ctx.keepA = !ctx.keepA;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SplitTransitionsComponent_Template_label_click_92_listener() {
        return ctx.keepB = !ctx.keepB;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SplitTransitionsComponent_Template_label_click_94_listener() {
        return ctx.keepC = !ctx.keepC;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 13)(97, "as-split", 14)(98, "as-split-area", 15)(99, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "A");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "size: 200px");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "minSize: 200px");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "as-split-area", 16)(106, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "B");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](108, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "size: *");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "as-split-area", 17)(111, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "C");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "size: 200px");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "minSize: 200px");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 13)(118, "as-split", 18)(119, "as-split-area", 19)(120, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "A");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "size: 30%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](124, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "minSize: 30%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "as-split-area", 20)(127, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "B");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](129, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "size: 40%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "as-split-area", 21)(132, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "C");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](134, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "size: 30%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](136, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "minSize: 30%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.testChangeDetectorRun(), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.exampleEnum.TRANSITION);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("useTransition", ctx.action.useTransition);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.action.a1v)("size", ctx.action.a1s);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.action.a2v)("size", ctx.action.a2s);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.action.a3v)("size", ctx.action.a3s);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", !ctx.action.useTransition);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", "useTransition: " + ctx.action.useTransition, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", !ctx.action.a1v);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("area1: " + ctx.action.a1v);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", !ctx.action.a2v);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("area2: " + ctx.action.a2v);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", !ctx.action.a3v);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("area3: " + ctx.action.a3v);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", ctx.action.a1s === 25 || !ctx.action.a1v || !ctx.action.a2v || !ctx.action.a3v);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", ctx.action.a1s === 40 || !ctx.action.a1v || !ctx.action.a2v || !ctx.action.a3v);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.logMessages);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.only === 1 || ctx.only === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.only === 1 ? "LEFT \u2B05\uFE0F" : "LEFT \u27A1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.only === 2 || ctx.only === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.only === 2 ? "\u27A1 \uFE0FCENTER \u2B05" : "\uFE0F\u2B05 \uFE0FCENTER \u27A1", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.only === 3 || ctx.only === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.only === 3 ? "\u27A1 RIGHT" : "\u2B05\uFE0F RIGHT");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.only === 1 || ctx.only === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.only === 1 ? "LEFT \u2B05\uFE0F" : "LEFT \u27A1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.only === 2 || ctx.only === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.only === 2 ? "\u27A1 \uFE0FCENTER \u2B05" : "\uFE0F\u2B05 \uFE0FCENTER \u27A1", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.only === 3 || ctx.only === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.only === 3 ? "\u27A1 RIGHT" : "\u2B05\uFE0F RIGHT");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", !ctx.keepA);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("A: " + ctx.keepA);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", !ctx.keepB);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("B: " + ctx.keepB);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", !ctx.keepC);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("C: " + ctx.keepC);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.keepA);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.keepB);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.keepC);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.keepA);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.keepB);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.keepC);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ui_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_2__.ExampleTitleComponent, angular_split__WEBPACK_IMPORTED_MODULE_5__.SplitComponent, angular_split__WEBPACK_IMPORTED_MODULE_5__.SplitAreaDirective],
  styles: ["button[_ngcontent-%COMP%] {\n        margin: 4px;\n      }\n\n      .btns[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-around;\n        flex-wrap: wrap;\n      }\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-bottom: 10px;\n      }\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n      }\n\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n        flex: 1 1 20%;\n      }\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n        flex: 1 1 40%;\n      }\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n        flex: 1 1 40%;\n      }\n      .logs[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n        margin-bottom: 5px;\n      }\n      .logs[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n        height: 200px;\n        width: 100%;\n        overflow-y: scroll;\n        overflow-x: hidden;\n        border: 1px solid #bfbfbf;\n        background-color: #e8e8e8;\n      }\n\n      .as-split-area[_ngcontent-%COMP%] {\n        background: lightgrey;\n      }\n\n      .as-split-area.as-min[_ngcontent-%COMP%] {\n        background: green;\n      }\n\n      .as-split-area.as-max[_ngcontent-%COMP%] {\n        background: red;\n      }\n\n      [_nghost-%COMP%]   .ex2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n\n      [_nghost-%COMP%]   .ex2[_ngcontent-%COMP%]     .as-transition.as-init:not(.as-dragging) > .as-split-area, [_nghost-%COMP%]     .as-transition.as-init:not(.as-dragging) > .as-split-gutter {\n        transition: flex-basis 1s !important;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGl0LXRyYW5zaXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxXQUFXO01BQ2I7O01BRUE7UUFDRSxhQUFhO1FBQ2IsNkJBQTZCO1FBQzdCLGVBQWU7TUFDakI7TUFDQTtRQUNFLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtNQUNyQjtNQUNBO1FBQ0UsbUJBQW1CO01BQ3JCOztNQUVBO1FBQ0UsYUFBYTtNQUNmO01BQ0E7UUFDRSxhQUFhO01BQ2Y7TUFDQTtRQUNFLGFBQWE7TUFDZjtNQUNBO1FBQ0Usa0JBQWtCO01BQ3BCO01BQ0E7UUFDRSxhQUFhO1FBQ2IsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLHlCQUF5QjtNQUMzQjs7TUFFQTtRQUNFLHFCQUFxQjtNQUN2Qjs7TUFFQTtRQUNFLGlCQUFpQjtNQUNuQjs7TUFFQTtRQUNFLGVBQWU7TUFDakI7O01BRUE7UUFDRSxXQUFXO01BQ2I7O01BRUE7O1FBRUUsb0NBQW9DO01BQ3RDIiwiZmlsZSI6InNwbGl0LXRyYW5zaXRpb25zLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICB9XG5cbiAgICAgIC5idG5zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIH1cbiAgICAgIC5idG5zID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgICAuYnRucyA+IGRpdiA+IGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5idG5zID4gZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgICAgIGZsZXg6IDEgMSAyMCU7XG4gICAgICB9XG4gICAgICAuYnRucyA+IGRpdjpudGgtY2hpbGQoMikge1xuICAgICAgICBmbGV4OiAxIDEgNDAlO1xuICAgICAgfVxuICAgICAgLmJ0bnMgPiBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgZmxleDogMSAxIDQwJTtcbiAgICAgIH1cbiAgICAgIC5sb2dzID4gcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIH1cbiAgICAgIC5sb2dzID4gdWwge1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gICAgICB9XG5cbiAgICAgIC5hcy1zcGxpdC1hcmVhIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xuICAgICAgfVxuXG4gICAgICAuYXMtc3BsaXQtYXJlYS5hcy1taW4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgIH1cblxuICAgICAgLmFzLXNwbGl0LWFyZWEuYXMtbWF4IHtcbiAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCAuZXgyIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCAuZXgyIDo6bmctZGVlcCAuYXMtdHJhbnNpdGlvbi5hcy1pbml0Om5vdCguYXMtZHJhZ2dpbmcpID4gLmFzLXNwbGl0LWFyZWEsXG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFzLXRyYW5zaXRpb24uYXMtaW5pdDpub3QoLmFzLWRyYWdnaW5nKSA+IC5hcy1zcGxpdC1ndXR0ZXIge1xuICAgICAgICB0cmFuc2l0aW9uOiBmbGV4LWJhc2lzIDFzICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhhbXBsZXMvc3BsaXQtdHJhbnNpdGlvbnMvc3BsaXQtdHJhbnNpdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFdBQVc7TUFDYjs7TUFFQTtRQUNFLGFBQWE7UUFDYiw2QkFBNkI7UUFDN0IsZUFBZTtNQUNqQjtNQUNBO1FBQ0UsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsbUJBQW1CO01BQ3JCO01BQ0E7UUFDRSxtQkFBbUI7TUFDckI7O01BRUE7UUFDRSxhQUFhO01BQ2Y7TUFDQTtRQUNFLGFBQWE7TUFDZjtNQUNBO1FBQ0UsYUFBYTtNQUNmO01BQ0E7UUFDRSxrQkFBa0I7TUFDcEI7TUFDQTtRQUNFLGFBQWE7UUFDYixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIseUJBQXlCO01BQzNCOztNQUVBO1FBQ0UscUJBQXFCO01BQ3ZCOztNQUVBO1FBQ0UsaUJBQWlCO01BQ25COztNQUVBO1FBQ0UsZUFBZTtNQUNqQjs7TUFFQTtRQUNFLFdBQVc7TUFDYjs7TUFFQTs7UUFFRSxvQ0FBb0M7TUFDdEM7O0FBRU4sb2pGQUFvakYiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgfVxuXG4gICAgICAuYnRucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG4gICAgICAuYnRucyA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgICAgLmJ0bnMgPiBkaXYgPiBidXR0b24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuYnRucyA+IGRpdjpudGgtY2hpbGQoMSkge1xuICAgICAgICBmbGV4OiAxIDEgMjAlO1xuICAgICAgfVxuICAgICAgLmJ0bnMgPiBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgZmxleDogMSAxIDQwJTtcbiAgICAgIH1cbiAgICAgIC5idG5zID4gZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgICAgIGZsZXg6IDEgMSA0MCU7XG4gICAgICB9XG4gICAgICAubG9ncyA+IHAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICB9XG4gICAgICAubG9ncyA+IHVsIHtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICAgICAgfVxuXG4gICAgICAuYXMtc3BsaXQtYXJlYSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbiAgICAgIH1cblxuICAgICAgLmFzLXNwbGl0LWFyZWEuYXMtbWluIHtcbiAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgICB9XG5cbiAgICAgIC5hcy1zcGxpdC1hcmVhLmFzLW1heCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgLmV4MiBidXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgLmV4MiA6Om5nLWRlZXAgLmFzLXRyYW5zaXRpb24uYXMtaW5pdDpub3QoLmFzLWRyYWdnaW5nKSA+IC5hcy1zcGxpdC1hcmVhLFxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtZ3V0dGVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogZmxleC1iYXNpcyAxcyAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 5542:
/*!************************************************************************!*\
  !*** ./src/app/examples/split-transitions/split-transitions.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitTransitionsModule: () => (/* binding */ SplitTransitionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _split_transitions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./split-transitions.component */ 9904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;







class SplitTransitionsModule {}
_class = SplitTransitionsModule;
_class.ɵfac = function SplitTransitionsModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
    path: '',
    component: _split_transitions_component__WEBPACK_IMPORTED_MODULE_1__.SplitTransitionsComponent
  }]), angular_split__WEBPACK_IMPORTED_MODULE_5__.AngularSplitModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SplitTransitionsModule, {
    declarations: [_split_transitions_component__WEBPACK_IMPORTED_MODULE_1__.SplitTransitionsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, angular_split__WEBPACK_IMPORTED_MODULE_5__.AngularSplitModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_examples_split-transitions_split-transitions_module_ts.99a094b694aa841f.js.map