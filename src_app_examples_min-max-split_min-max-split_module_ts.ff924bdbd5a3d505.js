"use strict";
(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_min-max-split_min-max-split_module_ts"],{

/***/ 7300:
/*!*******************************************************************!*\
  !*** ./src/app/examples/min-max-split/min-max-split.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinMaxSplitComponent: () => (/* binding */ MinMaxSplitComponent)
/* harmony export */ });
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/exampleTitle.component */ 1755);
var _class;




class MinMaxSplitComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__.AComponent {
  constructor() {
    super(...arguments);
    this.restrictMove = false;
  }
  log(x) {
    console.log('dragEnd ', x.sizes, ' total > ', x.sizes.reduce((t, s) => t + s, 0));
  }
}
_class = MinMaxSplitComponent;
_class.ɵfac = /*@__PURE__*/function () {
  let ɵMinMaxSplitComponent_BaseFactory;
  return function MinMaxSplitComponent_Factory(t) {
    return (ɵMinMaxSplitComponent_BaseFactory || (ɵMinMaxSplitComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}();
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  hostAttrs: [1, "split-example-page"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 108,
  vars: 5,
  consts: [[1, "container"], [3, "type"], [1, "split-example", "ex-percent"], ["unit", "percent", "gutterSize", "30", 3, "restrictMove", "dragEnd"], ["size", "30", "minSize", "20", "maxSize", "30"], [1, "txt-min"], [1, "txt-max"], ["size", "40", "minSize", "30", "maxSize", "50"], ["size", "30", "minSize", "20", "maxSize", "50"], [1, "split-example", "ex-pixel"], ["unit", "pixel", "gutterSize", "30", 3, "restrictMove", "dragEnd"], ["size", "200", "minSize", "100", "maxSize", "200"], ["size", "*"], ["size", "150", "lockSize", "true"], [1, "txt-minmax"], ["size", "250", "minSize", "250", "maxSize", "400"], [1, "btns"], [1, "btn", "btn-warning", 3, "click"]],
  template: function MinMaxSplitComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "sp-example-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Percent mode:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2)(6, "as-split", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragEnd", function MinMaxSplitComponent_Template_as_split_dragEnd_6_listener($event) {
        return ctx.log($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "as-split-area", 4)(8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "size=\"30\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "minSize=\"20\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "maxSize=\"30\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "MIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 6)(18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "MAX");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "as-split-area", 7)(21, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "size=\"40\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "minSize=\"30\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "maxSize=\"50\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 5)(28, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "MIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 6)(31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "MAX");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "as-split-area", 8)(34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "size=\"30\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "minSize=\"20\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "maxSize=\"50\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 5)(41, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "MIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 6)(44, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "MAX");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Pixel mode:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 9)(49, "as-split", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragEnd", function MinMaxSplitComponent_Template_as_split_dragEnd_49_listener($event) {
        return ctx.log($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "as-split-area", 11)(51, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "size=\"200\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "minSize=\"100\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "maxSize=\"200\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 5)(58, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "MIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 6)(61, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "MAX");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "as-split-area", 12)(64, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "size=\"*\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 5)(67, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "MIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 6)(70, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "MAX");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "as-split-area", 13)(73, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "size=\"150\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "lockSize=\"true\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "br")(78, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Same as");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "minSize=\"150\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "maxSize=\"150\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 14)(85, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "MIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "&");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "MAX");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "as-split-area", 15)(92, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "size=\"250\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "minSize=\"250\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "maxSize=\"400\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 5)(99, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "MIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 6)(102, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "MAX");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 16)(106, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MinMaxSplitComponent_Template_button_click_106_listener() {
        return ctx.restrictMove = !ctx.restrictMove;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.testChangeDetectorRun(), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.exampleEnum.MINMAX);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("restrictMove", ctx.restrictMove);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("restrictMove", ctx.restrictMove);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", "Restrict move: \"" + ctx.restrictMove + "\"", " ");
    }
  },
  dependencies: [angular_split__WEBPACK_IMPORTED_MODULE_3__.SplitComponent, angular_split__WEBPACK_IMPORTED_MODULE_3__.SplitAreaDirective, _ui_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_1__.ExampleTitleComponent],
  styles: [".btns[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n\n      .txt-min[_ngcontent-%COMP%], .txt-max[_ngcontent-%COMP%], .txt-minmax[_ngcontent-%COMP%] {\n        pointer-events: none;\n        position: absolute;\n        opacity: 0;\n        transition: opacity 0.2s;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      .txt-min[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .txt-max[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .txt-minmax[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n        font-size: 30px;\n        font-weight: bold;\n        color: #cccccc;\n        text-align: center;\n      }\n\n      as-split-area[_ngcontent-%COMP%] {\n        background: lightblue;\n        transition: background 0.2s;\n        position: relative;\n        overflow: hidden !important;\n      }\n\n      as-split-area[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n        position: absolute;\n        font-size: 12px;\n        font-weight: bold;\n        padding: 5px;\n        line-height: 12px;\n      }\n\n      as-split-area.as-min[_ngcontent-%COMP%] {\n        background: green;\n      }\n      as-split-area.as-min[_ngcontent-%COMP%]   .txt-min[_ngcontent-%COMP%] {\n        opacity: 1;\n      }\n      as-split-area.as-max[_ngcontent-%COMP%] {\n        background: red;\n      }\n      as-split-area.as-max[_ngcontent-%COMP%]   .txt-max[_ngcontent-%COMP%] {\n        opacity: 1;\n      }\n      as-split-area.as-min.as-max[_ngcontent-%COMP%] {\n        background: #ff77e7;\n      }\n      as-split-area.as-min.as-max[_ngcontent-%COMP%]   .txt-minmax[_ngcontent-%COMP%] {\n        opacity: 1;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbi1tYXgtc3BsaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGVBQWU7TUFDakI7O01BRUE7OztRQUdFLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLHdCQUF3QjtRQUN4QixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGdCQUFnQjtNQUNsQjs7TUFFQTs7O1FBR0UsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2Qsa0JBQWtCO01BQ3BCOztNQUVBO1FBQ0UscUJBQXFCO1FBQ3JCLDJCQUEyQjtRQUMzQixrQkFBa0I7UUFDbEIsMkJBQTJCO01BQzdCOztNQUVBO1FBQ0Usa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGlCQUFpQjtNQUNuQjs7TUFFQTtRQUNFLGlCQUFpQjtNQUNuQjtNQUNBO1FBQ0UsVUFBVTtNQUNaO01BQ0E7UUFDRSxlQUFlO01BQ2pCO01BQ0E7UUFDRSxVQUFVO01BQ1o7TUFDQTtRQUNFLG1CQUFtQjtNQUNyQjtNQUNBO1FBQ0UsVUFBVTtNQUNaIiwiZmlsZSI6Im1pbi1tYXgtc3BsaXQuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuYnRucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG5cbiAgICAgIC50eHQtbWluLFxuICAgICAgLnR4dC1tYXgsXG4gICAgICAudHh0LW1pbm1heCB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC50eHQtbWluID4gcCxcbiAgICAgIC50eHQtbWF4ID4gcCxcbiAgICAgIC50eHQtbWlubWF4ID4gcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjY2NjY2NjO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGFzLXNwbGl0LWFyZWEge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIGFzLXNwbGl0LWFyZWEgPiBwIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgICAgfVxuXG4gICAgICBhcy1zcGxpdC1hcmVhLmFzLW1pbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgICAgfVxuICAgICAgYXMtc3BsaXQtYXJlYS5hcy1taW4gLnR4dC1taW4ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgICAgYXMtc3BsaXQtYXJlYS5hcy1tYXgge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICB9XG4gICAgICBhcy1zcGxpdC1hcmVhLmFzLW1heCAudHh0LW1heCB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgICBhcy1zcGxpdC1hcmVhLmFzLW1pbi5hcy1tYXgge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY3N2U3O1xuICAgICAgfVxuICAgICAgYXMtc3BsaXQtYXJlYS5hcy1taW4uYXMtbWF4IC50eHQtbWlubWF4IHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhhbXBsZXMvbWluLW1heC1zcGxpdC9taW4tbWF4LXNwbGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixlQUFlO01BQ2pCOztNQUVBOzs7UUFHRSxvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVix3QkFBd0I7UUFDeEIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLFlBQVk7UUFDWixnQkFBZ0I7TUFDbEI7O01BRUE7OztRQUdFLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsY0FBYztRQUNkLGtCQUFrQjtNQUNwQjs7TUFFQTtRQUNFLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0Isa0JBQWtCO1FBQ2xCLDJCQUEyQjtNQUM3Qjs7TUFFQTtRQUNFLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixpQkFBaUI7TUFDbkI7O01BRUE7UUFDRSxpQkFBaUI7TUFDbkI7TUFDQTtRQUNFLFVBQVU7TUFDWjtNQUNBO1FBQ0UsZUFBZTtNQUNqQjtNQUNBO1FBQ0UsVUFBVTtNQUNaO01BQ0E7UUFDRSxtQkFBbUI7TUFDckI7TUFDQTtRQUNFLFVBQVU7TUFDWjs7QUFFTixveEZBQW94RiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmJ0bnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgfVxuXG4gICAgICAudHh0LW1pbixcbiAgICAgIC50eHQtbWF4LFxuICAgICAgLnR4dC1taW5tYXgge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAudHh0LW1pbiA+IHAsXG4gICAgICAudHh0LW1heCA+IHAsXG4gICAgICAudHh0LW1pbm1heCA+IHAge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogI2NjY2NjYztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBhcy1zcGxpdC1hcmVhIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICBhcy1zcGxpdC1hcmVhID4gcCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAgIH1cblxuICAgICAgYXMtc3BsaXQtYXJlYS5hcy1taW4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgIH1cbiAgICAgIGFzLXNwbGl0LWFyZWEuYXMtbWluIC50eHQtbWluIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICAgIGFzLXNwbGl0LWFyZWEuYXMtbWF4IHtcbiAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgfVxuICAgICAgYXMtc3BsaXQtYXJlYS5hcy1tYXggLnR4dC1tYXgge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgICAgYXMtc3BsaXQtYXJlYS5hcy1taW4uYXMtbWF4IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmNzdlNztcbiAgICAgIH1cbiAgICAgIGFzLXNwbGl0LWFyZWEuYXMtbWluLmFzLW1heCAudHh0LW1pbm1heCB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 5527:
/*!****************************************************************!*\
  !*** ./src/app/examples/min-max-split/min-max-split.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinMaxSplitModule: () => (/* binding */ MinMaxSplitModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _min_max_split_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./min-max-split.component */ 7300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;







class MinMaxSplitModule {}
_class = MinMaxSplitModule;
_class.ɵfac = function MinMaxSplitModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, angular_split__WEBPACK_IMPORTED_MODULE_4__.AngularSplitModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
    path: '',
    component: _min_max_split_component__WEBPACK_IMPORTED_MODULE_1__.MinMaxSplitComponent
  }]), _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MinMaxSplitModule, {
    declarations: [_min_max_split_component__WEBPACK_IMPORTED_MODULE_1__.MinMaxSplitComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, angular_split__WEBPACK_IMPORTED_MODULE_4__.AngularSplitModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_examples_min-max-split_min-max-split_module_ts.ff924bdbd5a3d505.js.map