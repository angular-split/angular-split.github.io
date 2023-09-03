"use strict";
(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_gutter-click-roll-unroll_gutter-click-roll-unroll_module_ts"],{

/***/ 1635:
/*!*****************************************************************************************!*\
  !*** ./src/app/examples/gutter-click-roll-unroll/gutter-click-roll-unroll.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GutterClickRollUnrollComponent: () => (/* binding */ GutterClickRollUnrollComponent)
/* harmony export */ });
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);
/* harmony import */ var _utils_format_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/format-date */ 3354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _ui_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/exampleTitle.component */ 1755);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 2406);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-split */ 6496);
var _class;









const _c0 = ["mySplit"];
const _c1 = ["logs"];
function GutterClickRollUnrollComponent_as_split_area_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "as-split-area", 14)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", a_r4.size)("order", a_r4.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](a_r4.content);
  }
}
function GutterClickRollUnrollComponent_li_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const l_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", l_r5.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](l_r5.text);
  }
}
class GutterClickRollUnrollComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__.AComponent {
  constructor() {
    super(...arguments);
    this.isDisabled = true;
    this.useTransition = true;
    this.dblClickTime = 0;
    this.logMessages = [];
    this.areas = [{
      size: 25,
      order: 1,
      content: 'fg fdkjuh dfskhf dkujv fd vifdk hvdkuh fg'
    }, {
      size: '*',
      order: 2,
      content: 'sd h vdshhf deuyf gduyeg hudeg hudfg  fd vifdk hvdkuh fg'
    }, {
      size: 25,
      order: 3,
      content: 'sd jslfd ijgil dfhlt jkgvbnhj fl bhjgflh jfglhj fl h fg'
    }];
  }
  ngAfterViewInit() {
    this.sub = this.mySplitEl.dragProgress$.subscribe(data => {
      console.log(`${(0,_utils_format_date__WEBPACK_IMPORTED_MODULE_1__.formatDate)(new Date())} > dragProgress$ observable emitted but current component change detection didn't run!`, data);
    });
  }
  log(...[type, e]) {
    this.logMessages.push({
      type,
      text: `${(0,_utils_format_date__WEBPACK_IMPORTED_MODULE_1__.formatDate)(new Date())} > ${type} event > ${JSON.stringify(e)}`
    });
    setTimeout(() => {
      if (this.logsEl.nativeElement.scroll) {
        ;
        this.logsEl.nativeElement.scroll({
          top: this.logMessages.length * 30
        });
      }
    });
    if (type === 'gutterClick') {
      this.gutterClick(e);
    } else if (type === 'dragEnd') {
      this.areas[0].size = e.sizes[0];
      this.areas[1].size = e.sizes[1];
      this.areas[2].size = e.sizes[2];
    }
  }
  gutterClick(e) {
    if (e.gutterNum === 1) {
      if (this.areas[0].size > 0) {
        this.areas[0].size = 0;
      } else {
        this.areas[0].size = 25;
      }
    } else if (e.gutterNum === 2) {
      if (this.areas[2].size > 0) {
        this.areas[2].size = 0;
      } else {
        this.areas[2].size = 25;
      }
    }
  }
  dragEnd(e) {
    this.areas[0].size = e.sizes[0];
    this.areas[1].size = e.sizes[1];
    this.areas[2].size = e.sizes[2];
  }
  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
}
_class = GutterClickRollUnrollComponent;
_class.ɵfac = /*@__PURE__*/function () {
  let ɵGutterClickRollUnrollComponent_BaseFactory;
  return function GutterClickRollUnrollComponent_Factory(t) {
    return (ɵGutterClickRollUnrollComponent_BaseFactory || (ɵGutterClickRollUnrollComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}();
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["sp-ex-gutter-click"]],
  viewQuery: function GutterClickRollUnrollComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mySplitEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.logsEl = _t.first);
    }
  },
  hostAttrs: [1, "split-example-page"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
  decls: 35,
  vars: 17,
  consts: [[1, "container"], [3, "type"], [1, "split-example"], ["gutterSize", "10", "direction", "horizontal", 3, "disabled", "gutterDblClickDuration", "useTransition", "dragStart", "dragEnd", "gutterClick", "gutterDblClick", "transitionEnd"], ["mySplit", ""], [3, "size", "order", 4, "ngFor", "ngForOf"], [1, "btns"], [1, "btn", "btn-warning", 3, "click"], [1, "btn-group"], ["tooltip", "When set to 0ms, 'click' is instant and 'dblclick' is impossible.", 1, "btn", "btn-warning", 3, "click"], ["tooltip", "When set to 500ms, 'click' is delayed and 'dblclick' is possible.", 1, "btn", "btn-warning", 3, "click"], [1, "logs"], ["logs", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "size", "order"], [3, "ngClass"]],
  template: function GutterClickRollUnrollComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "sp-example-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "as-split", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dragStart", function GutterClickRollUnrollComponent_Template_as_split_dragStart_4_listener($event) {
        return ctx.log("dragStart", $event);
      })("dragEnd", function GutterClickRollUnrollComponent_Template_as_split_dragEnd_4_listener($event) {
        return ctx.log("dragEnd", $event);
      })("gutterClick", function GutterClickRollUnrollComponent_Template_as_split_gutterClick_4_listener($event) {
        return ctx.log("gutterClick", $event);
      })("gutterDblClick", function GutterClickRollUnrollComponent_Template_as_split_gutterDblClick_4_listener($event) {
        return ctx.log("gutterDblClick", $event);
      })("transitionEnd", function GutterClickRollUnrollComponent_Template_as_split_transitionEnd_4_listener($event) {
        return ctx.log("transitionEnd", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, GutterClickRollUnrollComponent_as_split_area_6_Template, 3, 3, "as-split-area", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div")(10, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GutterClickRollUnrollComponent_Template_button_click_10_listener() {
        return ctx.useTransition = !ctx.useTransition;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div")(13, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GutterClickRollUnrollComponent_Template_button_click_13_listener() {
        return ctx.isDisabled = !ctx.isDisabled;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div")(16, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Property ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "[gutterDblClickDuration]");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, ":\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 8)(22, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GutterClickRollUnrollComponent_Template_label_click_22_listener() {
        return ctx.dblClickTime = 0;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "0ms");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GutterClickRollUnrollComponent_Template_label_click_24_listener() {
        return ctx.dblClickTime = 500;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "500ms");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 11)(27, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "All ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "as-split");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " events emitted:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ul", null, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, GutterClickRollUnrollComponent_li_34_Template, 2, 2, "li", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.testChangeDetectorRun(), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.exampleEnum.CLICK);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isDisabled)("gutterDblClickDuration", ctx.dblClickTime)("useTransition", ctx.useTransition);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.areas);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", !ctx.useTransition);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", "useTransition: " + ctx.useTransition, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", !ctx.isDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", "isDisabled: " + ctx.isDisabled, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", ctx.dblClickTime === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", ctx.dblClickTime === 500);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.logMessages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ui_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_2__.ExampleTitleComponent, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipDirective, angular_split__WEBPACK_IMPORTED_MODULE_6__.SplitComponent, angular_split__WEBPACK_IMPORTED_MODULE_6__.SplitAreaDirective],
  styles: ["as-split.as-transition.as-init[_ngcontent-%COMP%]:not(.as-dragging)     > .as-split-gutter, as-split.as-transition.as-init[_ngcontent-%COMP%]:not(.as-dragging)    > .as-split-area[_ngcontent-%COMP%] {\n        transition: flex-basis 1.5s !important;\n      }\n      as-split.as-disabled[_ngcontent-%COMP%]     > .as-split-gutter {\n        cursor: pointer !important;\n      }\n\n      .btns[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-around;\n        flex-wrap: wrap;\n      }\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        flex: 1 1 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n      }\n      .logs[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n        margin-bottom: 5px;\n      }\n      .logs[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n        height: 200px;\n        width: 100%;\n        overflow-y: scroll;\n        overflow-x: hidden;\n        border: 1px solid #bfbfbf;\n        background-color: #e8e8e8;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1dHRlci1jbGljay1yb2xsLXVucm9sbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNOztRQUVFLHNDQUFzQztNQUN4QztNQUNBO1FBQ0UsMEJBQTBCO01BQzVCOztNQUVBO1FBQ0UsYUFBYTtRQUNiLDZCQUE2QjtRQUM3QixlQUFlO01BQ2pCO01BQ0E7UUFDRSxhQUFhO1FBQ2IsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7TUFDckI7TUFDQTtRQUNFLG1CQUFtQjtNQUNyQjtNQUNBO1FBQ0Usa0JBQWtCO01BQ3BCO01BQ0E7UUFDRSxhQUFhO1FBQ2IsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLHlCQUF5QjtNQUMzQiIsImZpbGUiOiJndXR0ZXItY2xpY2stcm9sbC11bnJvbGwuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBhcy1zcGxpdC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgOjpuZy1kZWVwID4gLmFzLXNwbGl0LWd1dHRlcixcbiAgICAgIGFzLXNwbGl0LmFzLXRyYW5zaXRpb24uYXMtaW5pdDpub3QoLmFzLWRyYWdnaW5nKSA+IC5hcy1zcGxpdC1hcmVhIHtcbiAgICAgICAgdHJhbnNpdGlvbjogZmxleC1iYXNpcyAxLjVzICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBhcy1zcGxpdC5hcy1kaXNhYmxlZCA6Om5nLWRlZXAgPiAuYXMtc3BsaXQtZ3V0dGVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5idG5zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIH1cbiAgICAgIC5idG5zID4gZGl2IHtcbiAgICAgICAgZmxleDogMSAxIDUwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuYnRucyA+IGRpdiA+IGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgICAubG9ncyA+IHAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICB9XG4gICAgICAubG9ncyA+IHVsIHtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICAgICAgfVxuICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhhbXBsZXMvZ3V0dGVyLWNsaWNrLXJvbGwtdW5yb2xsL2d1dHRlci1jbGljay1yb2xsLXVucm9sbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNOztRQUVFLHNDQUFzQztNQUN4QztNQUNBO1FBQ0UsMEJBQTBCO01BQzVCOztNQUVBO1FBQ0UsYUFBYTtRQUNiLDZCQUE2QjtRQUM3QixlQUFlO01BQ2pCO01BQ0E7UUFDRSxhQUFhO1FBQ2IsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7TUFDckI7TUFDQTtRQUNFLG1CQUFtQjtNQUNyQjtNQUNBO1FBQ0Usa0JBQWtCO01BQ3BCO01BQ0E7UUFDRSxhQUFhO1FBQ2IsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLHlCQUF5QjtNQUMzQjs7QUFFTixvMERBQW8wRCIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgYXMtc3BsaXQuYXMtdHJhbnNpdGlvbi5hcy1pbml0Om5vdCguYXMtZHJhZ2dpbmcpIDo6bmctZGVlcCA+IC5hcy1zcGxpdC1ndXR0ZXIsXG4gICAgICBhcy1zcGxpdC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtYXJlYSB7XG4gICAgICAgIHRyYW5zaXRpb246IGZsZXgtYmFzaXMgMS41cyAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgYXMtc3BsaXQuYXMtZGlzYWJsZWQgOjpuZy1kZWVwID4gLmFzLXNwbGl0LWd1dHRlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuYnRucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG4gICAgICAuYnRucyA+IGRpdiB7XG4gICAgICAgIGZsZXg6IDEgMSA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmJ0bnMgPiBkaXYgPiBidXR0b24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgICAgLmxvZ3MgPiBwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgfVxuICAgICAgLmxvZ3MgPiB1bCB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 6982:
/*!**************************************************************************************!*\
  !*** ./src/app/examples/gutter-click-roll-unroll/gutter-click-roll-unroll.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GutterClickRollUnrollModule: () => (/* binding */ GutterClickRollUnrollModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _gutter_click_roll_unroll_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gutter-click-roll-unroll.component */ 1635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;







class GutterClickRollUnrollModule {}
_class = GutterClickRollUnrollModule;
_class.ɵfac = function GutterClickRollUnrollModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
    path: '',
    component: _gutter_click_roll_unroll_component__WEBPACK_IMPORTED_MODULE_1__.GutterClickRollUnrollComponent
  }]), angular_split__WEBPACK_IMPORTED_MODULE_5__.AngularSplitModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GutterClickRollUnrollModule, {
    declarations: [_gutter_click_roll_unroll_component__WEBPACK_IMPORTED_MODULE_1__.GutterClickRollUnrollComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, angular_split__WEBPACK_IMPORTED_MODULE_5__.AngularSplitModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_examples_gutter-click-roll-unroll_gutter-click-roll-unroll_module_ts.b84b371f4da84b71.js.map