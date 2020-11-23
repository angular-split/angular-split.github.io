(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documentation-documentation-module"],{

/***/ "331X":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/documentation/documentation.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h4>\n    <b>SplitComponent</b>&nbsp;<span class=\"sel\"\n      >(selector: '<span class=\"selContent\">as-split</span>' / exportAs: '<span class=\"selContent\">asSplit</span\n      >')</span\n    >\n  </h4>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>@Input()</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Details</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let prop of splitDoc.inputs\">\n        <td>{{ prop.name }}</td>\n        <td>{{ prop.type }}</td>\n        <td>\n          <code>{{ prop.default }}</code>\n        </td>\n        <td [innerHTML]=\"prop.details\"></td>\n      </tr>\n    </tbody>\n  </table>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>@Output()</th>\n        <th>Value</th>\n        <th>Details</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let event of splitDoc.outputs\">\n        <td>{{ event.name }}</td>\n        <td>\n          <code>{{ event.value }}</code>\n        </td>\n        <td [innerHTML]=\"event.details\"></td>\n      </tr>\n    </tbody>\n  </table>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>Access from TS class</th>\n        <th>Type</th>\n        <th>Details</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of splitDoc.class\">\n        <td>{{ item.name }}</td>\n        <td>\n          <code>{{ item.type }}</code>\n        </td>\n        <td [innerHTML]=\"item.details\"></td>\n      </tr>\n    </tbody>\n  </table>\n  <br /><br />\n\n  <h4>\n    <b>SplitAreaDirective</b>&nbsp;<span class=\"sel\"\n      >(selector: '<span class=\"selContent\">as-split-area, [as-split-area]</span>' / exportAs: '<span class=\"selContent\"\n        >asSplitArea</span\n      >')</span\n    >\n  </h4>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>@Input()</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Details</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let prop of splitAreaDoc.inputs\">\n        <td>{{ prop.name }}</td>\n        <td>{{ prop.type }}</td>\n        <td>\n          <code>{{ prop.default }}</code>\n        </td>\n        <td [innerHTML]=\"prop.details\"></td>\n      </tr>\n    </tbody>\n  </table>\n  <br /><br />\n\n  <h4><b>CSS classes</b></h4>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th style=\"width: 40%\">Split element classes</th>\n        <th>Details</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let x of cssClasses.split\">\n        <td>\n          <code>{{ x.name }}</code>\n        </td>\n        <td [innerHTML]=\"x.details\"></td>\n      </tr>\n    </tbody>\n  </table>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th style=\"width: 40%\">Area element classes</th>\n        <th>Details</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let x of cssClasses.area\">\n        <td>\n          <code>{{ x.name }}</code>\n        </td>\n        <td [innerHTML]=\"x.details\"></td>\n      </tr>\n    </tbody>\n  </table>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th style=\"width: 40%\">Gutter element classes</th>\n        <th>Details</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let x of cssClasses.gutter\">\n        <td>\n          <code>{{ x.name }}</code>\n        </td>\n        <td [innerHTML]=\"x.details\"></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ "PknT":
/*!**********************************************************!*\
  !*** ./src/app/documentation/documentation.component.ts ***!
  \**********************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_documentation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./documentation.component.html */ "331X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent() {
        this.splitDoc = {
            inputs: [
                {
                    name: 'dir',
                    type: 'string',
                    default: '"ltr"',
                    details: 'Indicates the directionality of the areas: <code>"ltr"</code> (left to right) or <code>"rtl"</code> (right to left).',
                },
                {
                    name: 'direction',
                    type: 'string',
                    default: '"horizontal"',
                    details: 'Select split direction: <code>"horizontal"</code> or <code>"vertical"</code>.',
                },
                {
                    name: 'disabled',
                    type: 'boolean',
                    default: 'false',
                    details: 'Disable the dragging feature (remove cursor/image on gutters). <code>(gutterClick)</code>/<code>(gutterDblClick)</code> still emits.',
                },
                {
                    name: 'gutterDblClickDuration',
                    type: 'number',
                    default: '0',
                    details: "Milliseconds to detect a double click on a gutter. Set it around 300-500ms if you want to use <code>(gutterDblClick)</code> event.",
                },
                {
                    name: 'gutterSize',
                    type: 'number',
                    default: '11',
                    details: "Gutters's size (dragging elements) in pixels.",
                },
                {
                    name: 'gutterStep',
                    type: 'number',
                    default: '1',
                    details: "Gutter step while moving in pixels.",
                },
                {
                    name: 'restrictMove',
                    type: 'boolean',
                    default: 'false',
                    details: 'Set to <code>true</code> if you want to limit gutter move to adjacent areas only.',
                },
                {
                    name: 'unit',
                    type: 'string',
                    default: '"percent"',
                    details: "Selected unit you want to use: <code>\"percent\"</code> or <code>\"pixel\"</code> to specify area sizes.",
                },
                {
                    name: 'useTransition',
                    type: 'boolean',
                    default: 'false',
                    details: 'Add transition when toggling visibility using <code>[visible]</code> or <code>[size]</code> changes.<br><u>Warning: Transitions are not working for <a href="https://github.com/philipwalton/flexbugs#flexbug-16">IE/Edge/Safari</a></u>',
                },
            ],
            outputs: [
                {
                    name: 'dragEnd',
                    value: '{gutterNum: number, sizes: Array<number>}',
                    details: 'Emit when drag ends.',
                },
                {
                    name: 'dragStart',
                    value: '{gutterNum: number, sizes: Array<number>}',
                    details: 'Emit when drag starts.',
                },
                {
                    name: 'gutterDblClick',
                    value: '{gutterNum: number, sizes: Array<number>}',
                    details: 'Emit when user double clicks on a gutter. See <code>[gutterDblClickDuration]</code> input.',
                },
                {
                    name: 'gutterClick',
                    value: '{gutterNum: number, sizes: Array<number>}',
                    details: 'Emit when user clicks on a gutter. See <code>[gutterDblClickDuration]</code> input.',
                },
                {
                    name: 'transitionEnd',
                    value: 'Array<number>',
                    details: 'Emit when transition ends (could be triggered from <code>[visible]</code> or <code>[size]</code> changes).<br>Only if <code>[useTransition]="true"</code>.<br><u>Warning: Transitions are not working for <a href="https://github.com/philipwalton/flexbugs#flexbug-16">IE/Edge/Safari</a></u>',
                },
            ],
            class: [
                {
                    name: 'dragProgress$',
                    type: 'Observable<{gutterNum: number, sizes: Array<number>}>',
                    details: "Emit when dragging. Replace old <code>(dragProgress)</code> template event for better flexibility about change detection mechanism.<br><u>Warning: Running outside zone by design, if you need to notify angular add</u> <code>this.splitEl.dragProgress$.subscribe(x => this.ngZone.run(() => this.x = x));</code>",
                },
                {
                    name: 'getVisibleAreaSizes()',
                    type: '() => Array<number>',
                    details: 'Get all <b>visible</b> area sizes.',
                },
                {
                    name: 'setVisibleAreaSizes()',
                    type: '(Array<number>) => boolean',
                    details: 'Set all <b>visible</b> area sizes in one go, return a boolean to know if input values were correct. Useful when combined with <code>dragProgress$</code> to sync multiple splits.',
                },
            ],
        };
        this.splitAreaDoc = {
            inputs: [
                {
                    name: 'lockSize',
                    type: 'boolean',
                    default: 'false',
                    details: "Lock area size, same as <code>minSize</code> = <code>maxSize</code> = <code>size</code>.<br><u>Not working when <code>[size]=\"'*'\"</code></u>",
                },
                {
                    name: 'maxSize',
                    type: 'number',
                    default: 'null',
                    details: "Maximum pixel or percent size, can't be bigger than provided <code>size</code>.<br><u>Not working when <code>[size]=\"'*'\"</code></u>",
                },
                {
                    name: 'minSize',
                    type: 'number',
                    default: 'null',
                    details: "Minimum pixel or percent size, can't be smaller than provided <code>size</code>.<br><u>Not working when <code>[size]=\"'*'\"</code></u>",
                },
                {
                    name: 'order',
                    type: 'number',
                    default: 'null',
                    details: "Order of the area. Used to maintain the order of areas when toggling their visibility. Toggling area visibility without specifying an <code>order</code> leads to weird behavior",
                },
                {
                    name: 'size',
                    type: "number|'*'",
                    default: '-',
                    details: "Size of the area in selected unit (<code>percent</code>/<code>pixel</code>).<br><u>Percent mode:</u> All areas sizes should equal to 100, If not, all areas will have the same size.<br><u>Pixel mode:</u> An area with  wildcard size (<code>[size]=\"'*'\"</code>) is mandatory (only one) and can't have <code>[visible]=\"false\"</code> or <code>minSize</code>/<code>maxSize</code>/<code>lockSize</code> properties.",
                },
                {
                    name: 'visible',
                    type: 'boolean',
                    default: 'true',
                    details: "Hide area visually but still present in the DOM, use <code>ngIf</code> to completely remove it.<br><u>Not working when <code>[size]=\"'*'\"</code></u>",
                },
            ],
        };
        this.cssClasses = {
            split: [
                { name: 'ui-init', details: 'Added after component initialization.' },
                {
                    name: 'ui-horizontal / ui-vertical',
                    details: 'Depends on <code>&lt;ui-split [direction]="x"&gt;</code>.',
                },
                {
                    name: 'ui-disabled',
                    details: 'Added when <code>&lt;ui-split [disabled]="true"&gt;</code>.',
                },
                {
                    name: 'ui-transition',
                    details: 'Added when <code>&lt;ui-split [useTransition]="true"&gt;</code>.',
                },
                { name: 'ui-dragging', details: 'Added while a gutter is dragged.' },
            ],
            area: [
                { name: 'ui-split-area', details: 'Added on all areas.' },
                {
                    name: 'ui-hidden',
                    details: 'Added when <code>&lt;ui-split-area [visible]="false"&gt;</code>.',
                },
            ],
            gutter: [
                { name: 'ui-split-gutter', details: 'Added on all gutters.' },
                { name: 'ui-dragged', details: 'Added on gutter while dragged.' },
            ],
        };
    }
    DocumentationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'sp-doc',
            template: _raw_loader_documentation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: ["\n      :host {\n        display: block;\n        width: 100%;\n        margin: 50px 0;\n      }\n      h4 {\n        margin: 20px 0;\n      }\n      .sel {\n        font-size: 16px;\n        color: #adadad;\n      }\n      tr > th {\n        color: #adadad;\n      }\n      tr > th:first-child,\n      .selContent {\n        font-weight: bold;\n        color: #ffc421;\n      }\n      tr > td:first-child {\n        font-weight: bold;\n      }\n    "]
        })
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "Z9WT":
/*!*******************************************************!*\
  !*** ./src/app/documentation/documentation.module.ts ***!
  \*******************************************************/
/*! exports provided: DocumentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationModule", function() { return DocumentationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation.component */ "PknT");





var DocumentationModule = /** @class */ (function () {
    function DocumentationModule() {
    }
    DocumentationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _documentation_component__WEBPACK_IMPORTED_MODULE_4__["DocumentationComponent"] }])],
            declarations: [_documentation_component__WEBPACK_IMPORTED_MODULE_4__["DocumentationComponent"]],
        })
    ], DocumentationModule);
    return DocumentationModule;
}());



/***/ })

}]);
//# sourceMappingURL=documentation-documentation-module.js.map