"use strict";
(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_geek-demo_geek-demo_module_ts"],{

/***/ 3677:
/*!***********************************************************!*\
  !*** ./src/app/examples/geek-demo/geek-demo.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeekDemoComponent: () => (/* binding */ GeekDemoComponent)
/* harmony export */ });
/* harmony import */ var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/sortable */ 2057);
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _ui_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/exampleTitle.component */ 1755);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 2072);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
var _class;









function GeekDemoComponent_ng_template_5_as_split_area_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "as-split-area", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const area_r3 = ctx_r6.$implicit;
    const index_r4 = ctx_r6.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", area_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", area_r3.visible)("order", index_r4)("size", area_r3.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](area_r3.id);
  }
}
function GeekDemoComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, GeekDemoComponent_ng_template_5_as_split_area_0_Template, 2, 6, "as-split-area", 23);
  }
  if (rf & 2) {
    const area_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", area_r3.present);
  }
}
function GeekDemoComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GeekDemoComponent_ng_template_64_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const item_r7 = restoredCtx.item;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r7.value.present = !item_r7.value.present);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GeekDemoComponent_ng_template_64_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const item_r7 = restoredCtx.item;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r7.value.visible = !item_r7.value.visible);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GeekDemoComponent_ng_template_64_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const item_r7 = restoredCtx.item;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.removeArea(item_r7.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("area-item id-", item_r7.value.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", item_r7.value.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7.value.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", !item_r7.value.present);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", "*ngIf=\"" + item_r7.value.present + "\"", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", !item_r7.value.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", "[visible]=\"" + item_r7.value.visible + "\"", " ");
  }
}
class GeekDemoComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_0__.AComponent {
  constructor() {
    super(...arguments);
    this.d = {
      dir: 'horizontal',
      restrictMove: true,
      useTransition: true,
      gutterSize: null,
      gutterStep: null,
      width: null,
      height: null,
      areas: [{
        id: getRandomNum(),
        color: getRandomColor(),
        size: 25,
        present: true,
        visible: true
      }, {
        id: getRandomNum(),
        color: getRandomColor(),
        size: 50,
        present: true,
        visible: true
      }, {
        id: getRandomNum(),
        color: getRandomColor(),
        size: 25,
        present: true,
        visible: true
      }]
    };
  }
  trackByFct(index, area) {
    return area.id;
  }
  addArea() {
    this.d.areas.push({
      id: getRandomNum(),
      color: getRandomColor(),
      size: 25,
      present: true,
      visible: true
    });
    this.sortableComponent.writeValue(this.d.areas);
  }
  removeArea(area) {
    this.d.areas.splice(this.d.areas.indexOf(area), 1);
    this.sortableComponent.writeValue(this.d.areas);
  }
}
_class = GeekDemoComponent;
_class.ɵfac = /*@__PURE__*/function () {
  let ɵGeekDemoComponent_BaseFactory;
  return function GeekDemoComponent_Factory(t) {
    return (ɵGeekDemoComponent_BaseFactory || (ɵGeekDemoComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}();
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["sp-ex-geek-demo"]],
  viewQuery: function GeekDemoComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_3__.SortableComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sortableComponent = _t.first);
    }
  },
  hostAttrs: [1, "split-example-page"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 66,
  vars: 36,
  consts: [[1, "container"], [3, "type"], [1, "split-example", 2, "background-color", "#e5e0e0"], [2, "background-color", "#ffffff", 3, "direction", "restrictMove", "gutterSize", "gutterStep", "useTransition"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [1, "opts-prop"], [1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "btn-group"], ["btnRadio", "horizontal", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], ["btnRadio", "vertical", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "btnRadio", "ngModelChange"], ["btnRadio", "400px", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], ["btnRadio", "600px", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], ["btnRadio", "200px", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], ["btnRadio", "350px", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], ["btnRadio", "7", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], ["btnRadio", "22", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], ["btnRadio", "10", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], ["btnRadio", "50", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], [1, "opts-area"], [1, "title"], [3, "ngModel", "itemTemplate", "ngModelChange"], ["itemTemplate", ""], [3, "visible", "order", "size", "background-color", 4, "ngIf"], [3, "visible", "order", "size"], [1, "num"]],
  template: function GeekDemoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "sp-example-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "as-split", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, GeekDemoComponent_ng_template_5_Template, 1, 1, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "div")(8, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GeekDemoComponent_Template_button_click_8_listener() {
        return ctx.d.useTransition = !ctx.d.useTransition;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div")(11, "div", 7)(12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_12_listener($event) {
        return ctx.d.dir = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_14_listener($event) {
        return ctx.d.dir = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div")(17, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Width:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7)(20, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_20_listener($event) {
        return ctx.d.width = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "null");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_22_listener($event) {
        return ctx.d.width = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "400");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_24_listener($event) {
        return ctx.d.width = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "600");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div")(27, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Height:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 7)(30, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_30_listener($event) {
        return ctx.d.height = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "null");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_32_listener($event) {
        return ctx.d.height = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "200");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_34_listener($event) {
        return ctx.d.height = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "350");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div")(37, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Gutter size:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 7)(40, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_40_listener($event) {
        return ctx.d.gutterSize = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "null");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_42_listener($event) {
        return ctx.d.gutterSize = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "7");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_44_listener($event) {
        return ctx.d.gutterSize = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div")(47, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Gutter step:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 7)(50, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_50_listener($event) {
        return ctx.d.gutterStep = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "null");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_52_listener($event) {
        return ctx.d.gutterStep = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_54_listener($event) {
        return ctx.d.gutterStep = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 19)(57, "div", 20)(58, "label")(59, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Areas (drag elements to change order):");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GeekDemoComponent_Template_button_click_61_listener() {
        return ctx.addArea();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Add area");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "bs-sortable", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_bs_sortable_ngModelChange_63_listener($event) {
        return ctx.d.areas = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, GeekDemoComponent_ng_template_64_Template, 10, 12, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.testChangeDetectorRun(), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.exampleEnum.GEEK);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.d.width)("height", ctx.d.height);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("direction", ctx.d.dir)("restrictMove", ctx.d.restrictMove)("gutterSize", ctx.d.gutterSize)("gutterStep", ctx.d.gutterStep)("useTransition", ctx.d.useTransition);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.d.areas)("ngForTrackBy", ctx.trackByFct);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", !ctx.d.useTransition);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", "useTransition: " + ctx.d.useTransition, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.d.dir);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.d.dir);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.d.width)("btnRadio", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.d.width);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.d.width);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.d.height)("btnRadio", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.d.height);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.d.height);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.d.gutterSize)("btnRadio", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.d.gutterSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.d.gutterSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.d.gutterStep)("btnRadio", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.d.gutterStep);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.d.gutterStep);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.d.areas)("itemTemplate", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ui_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_1__.ExampleTitleComponent, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__.ButtonRadioDirective, ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_3__.SortableComponent, angular_split__WEBPACK_IMPORTED_MODULE_6__.SplitComponent, angular_split__WEBPACK_IMPORTED_MODULE_6__.SplitAreaDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel],
  styles: [".as-split-area[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        text-shadow:\n          2px 0 0 #fff,\n          -2px 0 0 #fff,\n          0 2px 0 #fff,\n          0 -2px 0 #fff,\n          1px 1px #fff,\n          -1px -1px 0 #fff,\n          1px -1px 0 #fff,\n          -1px 1px 0 #fff;\n      }\n\n      .opts-prop[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-around;\n      }\n      .opts-prop[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n      }\n\n      .opts-area[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 10px;\n        background-color: #e8e8e8;\n      }\n\n      .area-item[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        padding: 4px;\n        cursor: move;\n      }\n      .area-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        margin: 0 5px;\n      }\n\n      .num[_ngcontent-%COMP%] {\n        color: #000000;\n        text-shadow:\n          2px 0 0 #fff,\n          -2px 0 0 #fff,\n          0 2px 0 #fff,\n          0 -2px 0 #fff,\n          1px 1px #fff,\n          -1px -1px 0 #fff,\n          1px -1px 0 #fff,\n          -1px 1px 0 #fff;\n      }\n      label[_ngcontent-%COMP%] {\n        margin: 0;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlZWstZGVtby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkI7Ozs7Ozs7O3lCQVFpQjtNQUNuQjs7TUFFQTtRQUNFLGFBQWE7UUFDYixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLDZCQUE2QjtNQUMvQjtNQUNBO1FBQ0UsbUJBQW1CO01BQ3JCOztNQUVBO1FBQ0UsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw4QkFBOEI7UUFDOUIsYUFBYTtRQUNiLHlCQUF5QjtNQUMzQjs7TUFFQTtRQUNFLGFBQWE7UUFDYiw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixZQUFZO01BQ2Q7TUFDQTtRQUNFLGFBQWE7TUFDZjs7TUFFQTtRQUNFLGNBQWM7UUFDZDs7Ozs7Ozs7eUJBUWlCO01BQ25CO01BQ0E7UUFDRSxTQUFTO01BQ1giLCJmaWxlIjoiZ2Vlay1kZW1vLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmFzLXNwbGl0LWFyZWEge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1zaGFkb3c6XG4gICAgICAgICAgMnB4IDAgMCAjZmZmLFxuICAgICAgICAgIC0ycHggMCAwICNmZmYsXG4gICAgICAgICAgMCAycHggMCAjZmZmLFxuICAgICAgICAgIDAgLTJweCAwICNmZmYsXG4gICAgICAgICAgMXB4IDFweCAjZmZmLFxuICAgICAgICAgIC0xcHggLTFweCAwICNmZmYsXG4gICAgICAgICAgMXB4IC0xcHggMCAjZmZmLFxuICAgICAgICAgIC0xcHggMXB4IDAgI2ZmZjtcbiAgICAgIH1cblxuICAgICAgLm9wdHMtcHJvcCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG4gICAgICAub3B0cy1wcm9wID4gZGl2IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgLm9wdHMtYXJlYSA+IC50aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgICAgIH1cblxuICAgICAgLmFyZWEtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgIH1cbiAgICAgIC5hcmVhLWl0ZW0gYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgIH1cblxuICAgICAgLm51bSB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICB0ZXh0LXNoYWRvdzpcbiAgICAgICAgICAycHggMCAwICNmZmYsXG4gICAgICAgICAgLTJweCAwIDAgI2ZmZixcbiAgICAgICAgICAwIDJweCAwICNmZmYsXG4gICAgICAgICAgMCAtMnB4IDAgI2ZmZixcbiAgICAgICAgICAxcHggMXB4ICNmZmYsXG4gICAgICAgICAgLTFweCAtMXB4IDAgI2ZmZixcbiAgICAgICAgICAxcHggLTFweCAwICNmZmYsXG4gICAgICAgICAgLTFweCAxcHggMCAjZmZmO1xuICAgICAgfVxuICAgICAgbGFiZWwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhhbXBsZXMvZ2Vlay1kZW1vL2dlZWstZGVtby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkI7Ozs7Ozs7O3lCQVFpQjtNQUNuQjs7TUFFQTtRQUNFLGFBQWE7UUFDYixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLDZCQUE2QjtNQUMvQjtNQUNBO1FBQ0UsbUJBQW1CO01BQ3JCOztNQUVBO1FBQ0UsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw4QkFBOEI7UUFDOUIsYUFBYTtRQUNiLHlCQUF5QjtNQUMzQjs7TUFFQTtRQUNFLGFBQWE7UUFDYiw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixZQUFZO01BQ2Q7TUFDQTtRQUNFLGFBQWE7TUFDZjs7TUFFQTtRQUNFLGNBQWM7UUFDZDs7Ozs7Ozs7eUJBUWlCO01BQ25CO01BQ0E7UUFDRSxTQUFTO01BQ1g7O0FBRU4sbzdFQUFvN0UiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5hcy1zcGxpdC1hcmVhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRleHQtc2hhZG93OlxuICAgICAgICAgIDJweCAwIDAgI2ZmZixcbiAgICAgICAgICAtMnB4IDAgMCAjZmZmLFxuICAgICAgICAgIDAgMnB4IDAgI2ZmZixcbiAgICAgICAgICAwIC0ycHggMCAjZmZmLFxuICAgICAgICAgIDFweCAxcHggI2ZmZixcbiAgICAgICAgICAtMXB4IC0xcHggMCAjZmZmLFxuICAgICAgICAgIDFweCAtMXB4IDAgI2ZmZixcbiAgICAgICAgICAtMXB4IDFweCAwICNmZmY7XG4gICAgICB9XG5cbiAgICAgIC5vcHRzLXByb3Age1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuICAgICAgLm9wdHMtcHJvcCA+IGRpdiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5vcHRzLWFyZWEgPiAudGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gICAgICB9XG5cbiAgICAgIC5hcmVhLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBjdXJzb3I6IG1vdmU7XG4gICAgICB9XG4gICAgICAuYXJlYS1pdGVtIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICB9XG5cbiAgICAgIC5udW0ge1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgdGV4dC1zaGFkb3c6XG4gICAgICAgICAgMnB4IDAgMCAjZmZmLFxuICAgICAgICAgIC0ycHggMCAwICNmZmYsXG4gICAgICAgICAgMCAycHggMCAjZmZmLFxuICAgICAgICAgIDAgLTJweCAwICNmZmYsXG4gICAgICAgICAgMXB4IDFweCAjZmZmLFxuICAgICAgICAgIC0xcHggLTFweCAwICNmZmYsXG4gICAgICAgICAgMXB4IC0xcHggMCAjZmZmLFxuICAgICAgICAgIC0xcHggMXB4IDAgI2ZmZjtcbiAgICAgIH1cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});
function getRandomNum() {
  return Math.round(Math.random() * 1000);
}
function getRandomColor() {
  return '#' + (Math.random() * 0xffffff << 0).toString(16);
}

/***/ }),

/***/ 154:
/*!********************************************************!*\
  !*** ./src/app/examples/geek-demo/geek-demo.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeekDemoModule: () => (/* binding */ GeekDemoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _geek_demo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geek-demo.component */ 3677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;








class GeekDemoModule {}
_class = GeekDemoModule;
_class.ɵfac = function GeekDemoModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
    path: '',
    component: _geek_demo_component__WEBPACK_IMPORTED_MODULE_1__.GeekDemoComponent
  }]), angular_split__WEBPACK_IMPORTED_MODULE_5__.AngularSplitModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GeekDemoModule, {
    declarations: [_geek_demo_component__WEBPACK_IMPORTED_MODULE_1__.GeekDemoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, angular_split__WEBPACK_IMPORTED_MODULE_5__.AngularSplitModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_examples_geek-demo_geek-demo_module_ts.d3f394f04bb1d75f.js.map