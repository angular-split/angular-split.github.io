(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["geek-demo-geek-demo-module"],{

/***/ "0VdL":
/*!***********************************************************!*\
  !*** ./src/app/examples/geek-demo/geek-demo.component.ts ***!
  \***********************************************************/
/*! exports provided: GeekDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeekDemoComponent", function() { return GeekDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/sortable */ "mzC4");
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/AComponent */ "AD80");




var GeekDemoComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GeekDemoComponent, _super);
    function GeekDemoComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.d = {
            dir: 'horizontal',
            restrictMove: true,
            useTransition: true,
            gutterSize: null,
            gutterStep: null,
            width: null,
            height: null,
            areas: [
                { id: getRandomNum(), color: getRandomColor(), size: 25, present: true, visible: true },
                { id: getRandomNum(), color: getRandomColor(), size: 50, present: true, visible: true },
                { id: getRandomNum(), color: getRandomColor(), size: 25, present: true, visible: true },
            ],
        };
        return _this;
    }
    GeekDemoComponent.prototype.trackByFct = function (index, area) {
        return area.id;
    };
    GeekDemoComponent.prototype.addArea = function () {
        this.d.areas.push({
            id: getRandomNum(),
            color: getRandomColor(),
            size: 25,
            present: true,
            visible: true,
        });
        this.sortableComponent.writeValue(this.d.areas);
    };
    GeekDemoComponent.prototype.removeArea = function (area) {
        this.d.areas.splice(this.d.areas.indexOf(area), 1);
        this.sortableComponent.writeValue(this.d.areas);
    };
    GeekDemoComponent.propDecorators = {
        sortableComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_2__["SortableComponent"],] }]
    };
    GeekDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-ex-geek-demo',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                class: 'split-example-page',
            },
            template: "\n    {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <sp-example-title [type]=\"exampleEnum.GEEK\"></sp-example-title>\n      <div class=\"split-example\" style=\"background-color: #e5e0e0;\">\n        <as-split\n          [direction]=\"d.dir\"\n          [restrictMove]=\"d.restrictMove\"\n          [gutterSize]=\"d.gutterSize\"\n          [gutterStep]=\"d.gutterStep\"\n          [style.width]=\"d.width\"\n          [style.height]=\"d.height\"\n          [useTransition]=\"d.useTransition\"\n          style=\"background-color: #ffffff;\"\n        >\n          <ng-template ngFor let-area [ngForOf]=\"d.areas\" [ngForTrackBy]=\"trackByFct\" let-index=\"index\">\n            <as-split-area\n              *ngIf=\"area.present\"\n              [visible]=\"area.visible\"\n              [order]=\"index\"\n              [size]=\"area.size\"\n              [style.background-color]=\"area.color\"\n              >{{ area.id }}</as-split-area\n            >\n          </ng-template>\n        </as-split>\n      </div>\n      <div class=\"opts-prop\">\n        <div>\n          <button\n            class=\"btn btn-warning btn-sm\"\n            [class.active]=\"!d.useTransition\"\n            (click)=\"d.useTransition = !d.useTransition\"\n          >\n            {{ 'useTransition: ' + d.useTransition }}\n          </button>\n        </div>\n        <div>\n          <div class=\"btn-group\">\n            <label class=\"btn btn-warning btn-sm\" [(ngModel)]=\"d.dir\" btnRadio=\"horizontal\">horizontal</label>\n            <label class=\"btn btn-warning btn-sm\" [(ngModel)]=\"d.dir\" btnRadio=\"vertical\">vertical</label>\n          </div>\n        </div>\n        <div>\n          <label>Width:&nbsp;</label>\n          <div class=\"btn-group\">\n            <label class=\"btn btn-warning btn-sm\" [(ngModel)]=\"d.width\" [btnRadio]=\"null\">null</label>\n            <label class=\"btn btn-warning btn-sm\" [(ngModel)]=\"d.width\" btnRadio=\"400px\">400</label>\n            <label class=\"btn btn-warning btn-sm\" [(ngModel)]=\"d.width\" btnRadio=\"600px\">600</label>\n          </div>\n        </div>\n        <div>\n          <label>Height:&nbsp;</label>\n          <div class=\"btn-group\">\n            <label class=\"btn btn-warning btn-sm\" [(ngModel)]=\"d.height\" [btnRadio]=\"null\">null</label>\n            <label class=\"btn btn-warning btn-sm\" [(ngModel)]=\"d.height\" btnRadio=\"200px\">200</label>\n            <label class=\"btn btn-warning btn-sm\" [(ngModel)]=\"d.height\" btnRadio=\"350px\">350</label>\n          </div>\n        </div>\n        <div>\n          <label>Gutter size:&nbsp;</label>\n          <div class=\"btn-group\">\n            <label class=\"btn btn-warning btn-sm\" [(ngModel)]=\"d.gutterSize\" [btnRadio]=\"null\">null</label>\n            <label class=\"btn btn-warning btn-sm\" [(ngModel)]=\"d.gutterSize\" btnRadio=\"7\">7</label>\n            <label class=\"btn btn-warning btn-sm\" [(ngModel)]=\"d.gutterSize\" btnRadio=\"22\">22</label>\n          </div>\n        </div>\n        <div>\n          <label>Gutter step:&nbsp;</label>\n          <div class=\"btn-group\">\n            <label class=\"btn btn-warning btn-sm\" [(ngModel)]=\"d.gutterStep\" [btnRadio]=\"null\">null</label>\n            <label class=\"btn btn-warning btn-sm\" [(ngModel)]=\"d.gutterStep\" btnRadio=\"10\">10</label>\n            <label class=\"btn btn-warning btn-sm\" [(ngModel)]=\"d.gutterStep\" btnRadio=\"50\">50</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"opts-area\">\n        <div class=\"title\">\n          <label><b>Areas (drag elements to change order):</b></label>\n          <button class=\"btn btn-warning btn-sm\" (click)=\"addArea()\">Add area</button>\n        </div>\n        <bs-sortable [(ngModel)]=\"d.areas\" [itemTemplate]=\"itemTemplate\"></bs-sortable>\n\n        <ng-template #itemTemplate let-item=\"item\" let-index=\"index\">\n          <div [style.background-color]=\"item.value.color\" class=\"area-item id-{{ item.value.id }}\">\n            <div class=\"num\">{{ item.value.id }}</div>\n            <div>\n              <button\n                class=\"btn btn-warning btn-sm\"\n                [class.active]=\"!item.value.present\"\n                (click)=\"item.value.present = !item.value.present\"\n              >\n                {{ '*ngIf=\"' + item.value.present + '\"' }}\n              </button>\n              <button\n                class=\"btn btn-warning btn-sm\"\n                [class.active]=\"!item.value.visible\"\n                (click)=\"item.value.visible = !item.value.visible\"\n              >\n                {{ '[visible]=\"' + item.value.visible + '\"' }}\n              </button>\n              <button class=\"btn btn-warning btn-sm\" (click)=\"removeArea(item.value)\">Remove</button>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n  ",
            styles: ["\n      .as-split-area {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff,\n          1px -1px 0 #fff, -1px 1px 0 #fff;\n      }\n\n      .opts-prop {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-around;\n      }\n      .opts-prop > div {\n        margin-bottom: 10px;\n      }\n\n      .opts-area > .title {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 10px;\n  o      background-color: #e8e8e8;\n      }\n\n      .area-item {\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        padding: 4px;\n        cursor: move;\n      }\n      .area-item button {\n        margin: 0 5px;\n      }\n\n      .num {\n        color: #000000;\n        text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff,\n          1px -1px 0 #fff, -1px 1px 0 #fff;\n      }\n      label {\n        margin: 0;\n      }\n    "]
        })
    ], GeekDemoComponent);
    return GeekDemoComponent;
}(_ui_components_AComponent__WEBPACK_IMPORTED_MODULE_3__["AComponent"]));

function getRandomNum() {
    return Math.round(Math.random() * 1000);
}
function getRandomColor() {
    return '#' + ((Math.random() * 0xffffff) << 0).toString(16);
}


/***/ }),

/***/ "pnRM":
/*!********************************************************!*\
  !*** ./src/app/examples/geek-demo/geek-demo.module.ts ***!
  \********************************************************/
/*! exports provided: GeekDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeekDemoModule", function() { return GeekDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-split */ "vX8g");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/ui.module */ "oRDy");
/* harmony import */ var _geek_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./geek-demo.component */ "0VdL");








var GeekDemoModule = /** @class */ (function () {
    function GeekDemoModule() {
    }
    GeekDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_6__["UiModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _geek_demo_component__WEBPACK_IMPORTED_MODULE_7__["GeekDemoComponent"] }]),
                angular_split__WEBPACK_IMPORTED_MODULE_5__["AngularSplitModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            declarations: [_geek_demo_component__WEBPACK_IMPORTED_MODULE_7__["GeekDemoComponent"]],
        })
    ], GeekDemoModule);
    return GeekDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=geek-demo-geek-demo-module.js.map