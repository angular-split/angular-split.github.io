(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_gutter-click-roll-unroll_gutter-click-roll-unroll_module_ts"],{

/***/ 1635:
/*!*****************************************************************************************!*\
  !*** ./src/app/examples/gutter-click-roll-unroll/gutter-click-roll-unroll.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GutterClickRollUnrollComponent: () => (/* binding */ GutterClickRollUnrollComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_examples_gutter_click_roll_unroll_gutter_click_roll_unroll_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIGFzLXNwbGl0LmFzLXRyYW5zaXRpb24uYXMtaW5pdDpub3QoLmFzLWRyYWdnaW5nKSA6Om5nLWRlZXAgPiAuYXMtc3BsaXQtZ3V0dGVyLAogICAgICBhcy1zcGxpdC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtYXJlYSB7CiAgICAgICAgdHJhbnNpdGlvbjogZmxleC1iYXNpcyAxLjVzICFpbXBvcnRhbnQ7CiAgICAgIH0KICAgICAgYXMtc3BsaXQuYXMtZGlzYWJsZWQgOjpuZy1kZWVwID4gLmFzLXNwbGl0LWd1dHRlciB7CiAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7CiAgICAgIH0KCiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgfQogICAgICAuYnRucyA_2BIGRpdiB7CiAgICAgICAgZmxleDogMSAxIDUwJTsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgIH0KICAgICAgLmJ0bnMgPiBkaXYgPiBidXR0b24gewogICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgIH0KICAgICAgLmxvZ3MgPiBwIHsKICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7CiAgICAgIH0KICAgICAgLmxvZ3MgPiB1bCB7CiAgICAgICAgaGVpZ2h0OiAyMDBweDsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7CiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOwogICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7CiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODsKICAgICAgfQogICAg_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_gutter_click_roll_unroll_gutter_click_roll_unroll_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/examples/gutter-click-roll-unroll/gutter-click-roll-unroll.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIGFzLXNwbGl0LmFzLXRyYW5zaXRpb24uYXMtaW5pdDpub3QoLmFzLWRyYWdnaW5nKSA6Om5nLWRlZXAgPiAuYXMtc3BsaXQtZ3V0dGVyLAogICAgICBhcy1zcGxpdC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtYXJlYSB7CiAgICAgICAgdHJhbnNpdGlvbjogZmxleC1iYXNpcyAxLjVzICFpbXBvcnRhbnQ7CiAgICAgIH0KICAgICAgYXMtc3BsaXQuYXMtZGlzYWJsZWQgOjpuZy1kZWVwID4gLmFzLXNwbGl0LWd1dHRlciB7CiAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7CiAgICAgIH0KCiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgfQogICAgICAuYnRucyA%2BIGRpdiB7CiAgICAgICAgZmxleDogMSAxIDUwJTsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgIH0KICAgICAgLmJ0bnMgPiBkaXYgPiBidXR0b24gewogICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgIH0KICAgICAgLmxvZ3MgPiBwIHsKICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7CiAgICAgIH0KICAgICAgLmxvZ3MgPiB1bCB7CiAgICAgICAgaGVpZ2h0OiAyMDBweDsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7CiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOwogICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7CiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODsKICAgICAgfQogICAg!./src/app/examples/gutter-click-roll-unroll/gutter-click-roll-unroll.component.ts */ 2069);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_examples_gutter_click_roll_unroll_gutter_click_roll_unroll_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIGFzLXNwbGl0LmFzLXRyYW5zaXRpb24uYXMtaW5pdDpub3QoLmFzLWRyYWdnaW5nKSA6Om5nLWRlZXAgPiAuYXMtc3BsaXQtZ3V0dGVyLAogICAgICBhcy1zcGxpdC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtYXJlYSB7CiAgICAgICAgdHJhbnNpdGlvbjogZmxleC1iYXNpcyAxLjVzICFpbXBvcnRhbnQ7CiAgICAgIH0KICAgICAgYXMtc3BsaXQuYXMtZGlzYWJsZWQgOjpuZy1kZWVwID4gLmFzLXNwbGl0LWd1dHRlciB7CiAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7CiAgICAgIH0KCiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgfQogICAgICAuYnRucyA_2BIGRpdiB7CiAgICAgICAgZmxleDogMSAxIDUwJTsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgIH0KICAgICAgLmJ0bnMgPiBkaXYgPiBidXR0b24gewogICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgIH0KICAgICAgLmxvZ3MgPiBwIHsKICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7CiAgICAgIH0KICAgICAgLmxvZ3MgPiB1bCB7CiAgICAgICAgaGVpZ2h0OiAyMDBweDsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7CiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOwogICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7CiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODsKICAgICAgfQogICAg_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_gutter_click_roll_unroll_gutter_click_roll_unroll_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_gutter_click_roll_unroll_gutter_click_roll_unroll_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIGFzLXNwbGl0LmFzLXRyYW5zaXRpb24uYXMtaW5pdDpub3QoLmFzLWRyYWdnaW5nKSA6Om5nLWRlZXAgPiAuYXMtc3BsaXQtZ3V0dGVyLAogICAgICBhcy1zcGxpdC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtYXJlYSB7CiAgICAgICAgdHJhbnNpdGlvbjogZmxleC1iYXNpcyAxLjVzICFpbXBvcnRhbnQ7CiAgICAgIH0KICAgICAgYXMtc3BsaXQuYXMtZGlzYWJsZWQgOjpuZy1kZWVwID4gLmFzLXNwbGl0LWd1dHRlciB7CiAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7CiAgICAgIH0KCiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgfQogICAgICAuYnRucyA_2BIGRpdiB7CiAgICAgICAgZmxleDogMSAxIDUwJTsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgIH0KICAgICAgLmJ0bnMgPiBkaXYgPiBidXR0b24gewogICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgIH0KICAgICAgLmxvZ3MgPiBwIHsKICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7CiAgICAgIH0KICAgICAgLmxvZ3MgPiB1bCB7CiAgICAgICAgaGVpZ2h0OiAyMDBweDsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7CiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOwogICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7CiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODsKICAgICAgfQogICAg_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_gutter_click_roll_unroll_gutter_click_roll_unroll_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);
/* harmony import */ var _utils_format_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/format-date */ 3354);
var _class;






let GutterClickRollUnrollComponent = (_class = class GutterClickRollUnrollComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_1__.AComponent {
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
      size: 50,
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
      console.log(`${(0,_utils_format_date__WEBPACK_IMPORTED_MODULE_2__.formatDate)(new Date())} > dragProgress$ observable emitted but current component change detection didn't run!`, data);
    });
  }
  log(type, e) {
    this.logMessages.push({
      type,
      text: `${(0,_utils_format_date__WEBPACK_IMPORTED_MODULE_2__.formatDate)(new Date())} > ${type} event > ${JSON.stringify(e)}`
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
        this.areas[1].size += this.areas[0].size;
        this.areas[0].size = 0;
      } else if (this.areas[1].size > 25) {
        this.areas[1].size -= 25;
        this.areas[0].size = 25;
      } else {
        this.areas[0].size = 25;
        this.areas[1].size = 50;
        this.areas[2].size = 25;
      }
    } else if (e.gutterNum === 2) {
      if (this.areas[2].size > 0) {
        this.areas[1].size += this.areas[2].size;
        this.areas[2].size = 0;
      } else if (this.areas[1].size > 25) {
        this.areas[1].size -= 25;
        this.areas[2].size = 25;
      } else {
        this.areas[0].size = 25;
        this.areas[1].size = 50;
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
}, _class.propDecorators = {
  mySplitEl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
    args: ['mySplit']
  }],
  logsEl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
    args: ['logs']
  }]
}, _class);
GutterClickRollUnrollComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'sp-ex-gutter-click',
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page'
  },
  template: `
    {{ testChangeDetectorRun() }}
    <div class="container">
      <sp-example-title [type]="exampleEnum.CLICK"></sp-example-title>
      <div class="split-example">
        <as-split
          #mySplit
          [disabled]="isDisabled"
          gutterSize="10"
          [gutterDblClickDuration]="dblClickTime"
          direction="horizontal"
          [useTransition]="useTransition"
          (dragStart)="log('dragStart', $event)"
          (dragEnd)="log('dragEnd', $event)"
          (gutterClick)="log('gutterClick', $event)"
          (gutterDblClick)="log('gutterDblClick', $event)"
          (transitionEnd)="log('transitionEnd', $event)"
        >
          <as-split-area *ngFor="let a of areas" [size]="a.size" [order]="a.order">
            <p>{{ a.content }}</p>
          </as-split-area>
        </as-split>
      </div>
      <br />
      <div class="btns">
        <div>
          <button class="btn btn-warning" [class.active]="!useTransition" (click)="useTransition = !useTransition">
            {{ 'useTransition: ' + useTransition }}
          </button>
        </div>
        <div>
          <button class="btn btn-warning" [class.active]="!isDisabled" (click)="isDisabled = !isDisabled">
            {{ 'isDisabled: ' + isDisabled }}
          </button>
        </div>
        <div>
          <label>Property <code>[gutterDblClickDuration]</code>:&nbsp;</label>
          <div class="btn-group">
            <label
              class="btn btn-warning"
              tooltip="When set to 0ms, 'click' is instant and 'dblclick' is impossible."
              [class.disabled]="dblClickTime === 0"
              (click)="dblClickTime = 0"
              >0ms</label
            >
            <label
              class="btn btn-warning"
              tooltip="When set to 500ms, 'click' is delayed and 'dblclick' is possible."
              [class.disabled]="dblClickTime === 500"
              (click)="dblClickTime = 500"
              >500ms</label
            >
          </div>
        </div>
      </div>
      <div class="logs">
        <p>All <code>as-split</code> events emitted:</p>
        <ul #logs>
          <li *ngFor="let l of logMessages" [ngClass]="l.type">{{ l.text }}</li>
        </ul>
      </div>
    </div>
  `,
  styles: [(_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_gutter_click_roll_unroll_gutter_click_roll_unroll_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIGFzLXNwbGl0LmFzLXRyYW5zaXRpb24uYXMtaW5pdDpub3QoLmFzLWRyYWdnaW5nKSA6Om5nLWRlZXAgPiAuYXMtc3BsaXQtZ3V0dGVyLAogICAgICBhcy1zcGxpdC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtYXJlYSB7CiAgICAgICAgdHJhbnNpdGlvbjogZmxleC1iYXNpcyAxLjVzICFpbXBvcnRhbnQ7CiAgICAgIH0KICAgICAgYXMtc3BsaXQuYXMtZGlzYWJsZWQgOjpuZy1kZWVwID4gLmFzLXNwbGl0LWd1dHRlciB7CiAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7CiAgICAgIH0KCiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgfQogICAgICAuYnRucyA_2BIGRpdiB7CiAgICAgICAgZmxleDogMSAxIDUwJTsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgIH0KICAgICAgLmJ0bnMgPiBkaXYgPiBidXR0b24gewogICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgIH0KICAgICAgLmxvZ3MgPiBwIHsKICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7CiAgICAgIH0KICAgICAgLmxvZ3MgPiB1bCB7CiAgICAgICAgaGVpZ2h0OiAyMDBweDsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7CiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOwogICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7CiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODsKICAgICAgfQogICAg_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_gutter_click_roll_unroll_gutter_click_roll_unroll_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
})], GutterClickRollUnrollComponent);

/***/ }),

/***/ 6982:
/*!**************************************************************************************!*\
  !*** ./src/app/examples/gutter-click-roll-unroll/gutter-click-roll-unroll.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GutterClickRollUnrollModule: () => (/* binding */ GutterClickRollUnrollModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _gutter_click_roll_unroll_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gutter-click-roll-unroll.component */ 1635);







let GutterClickRollUnrollModule = class GutterClickRollUnrollModule {};
GutterClickRollUnrollModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
    path: '',
    component: _gutter_click_roll_unroll_component__WEBPACK_IMPORTED_MODULE_1__.GutterClickRollUnrollComponent
  }]), angular_split__WEBPACK_IMPORTED_MODULE_6__.AngularSplitModule],
  declarations: [_gutter_click_roll_unroll_component__WEBPACK_IMPORTED_MODULE_1__.GutterClickRollUnrollComponent]
})], GutterClickRollUnrollModule);

/***/ }),

/***/ 2069:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/examples/gutter-click-roll-unroll/gutter-click-roll-unroll.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIGFzLXNwbGl0LmFzLXRyYW5zaXRpb24uYXMtaW5pdDpub3QoLmFzLWRyYWdnaW5nKSA6Om5nLWRlZXAgPiAuYXMtc3BsaXQtZ3V0dGVyLAogICAgICBhcy1zcGxpdC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtYXJlYSB7CiAgICAgICAgdHJhbnNpdGlvbjogZmxleC1iYXNpcyAxLjVzICFpbXBvcnRhbnQ7CiAgICAgIH0KICAgICAgYXMtc3BsaXQuYXMtZGlzYWJsZWQgOjpuZy1kZWVwID4gLmFzLXNwbGl0LWd1dHRlciB7CiAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7CiAgICAgIH0KCiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgfQogICAgICAuYnRucyA%2BIGRpdiB7CiAgICAgICAgZmxleDogMSAxIDUwJTsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgIH0KICAgICAgLmJ0bnMgPiBkaXYgPiBidXR0b24gewogICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgIH0KICAgICAgLmxvZ3MgPiBwIHsKICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7CiAgICAgIH0KICAgICAgLmxvZ3MgPiB1bCB7CiAgICAgICAgaGVpZ2h0OiAyMDBweDsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7CiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOwogICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7CiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODsKICAgICAgfQogICAg!./src/app/examples/gutter-click-roll-unroll/gutter-click-roll-unroll.component.ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
      as-split.as-transition.as-init:not(.as-dragging) ::ng-deep > .as-split-gutter,
      as-split.as-transition.as-init:not(.as-dragging) > .as-split-area {
        transition: flex-basis 1.5s !important;
      }
      as-split.as-disabled ::ng-deep > .as-split-gutter {
        cursor: pointer !important;
      }

      .btns {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      .btns > div {
        flex: 1 1 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .btns > div > button {
        margin-bottom: 10px;
      }
      .logs > p {
        margin-bottom: 5px;
      }
      .logs > ul {
        height: 200px;
        width: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        border: 1px solid #bfbfbf;
        background-color: #e8e8e8;
      }
    
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1dHRlci1jbGljay1yb2xsLXVucm9sbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNOztRQUVFLHNDQUFzQztNQUN4QztNQUNBO1FBQ0UsMEJBQTBCO01BQzVCOztNQUVBO1FBQ0UsYUFBYTtRQUNiLDZCQUE2QjtRQUM3QixlQUFlO01BQ2pCO01BQ0E7UUFDRSxhQUFhO1FBQ2IsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7TUFDckI7TUFDQTtRQUNFLG1CQUFtQjtNQUNyQjtNQUNBO1FBQ0Usa0JBQWtCO01BQ3BCO01BQ0E7UUFDRSxhQUFhO1FBQ2IsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLHlCQUF5QjtNQUMzQiIsImZpbGUiOiJndXR0ZXItY2xpY2stcm9sbC11bnJvbGwuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBhcy1zcGxpdC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgOjpuZy1kZWVwID4gLmFzLXNwbGl0LWd1dHRlcixcbiAgICAgIGFzLXNwbGl0LmFzLXRyYW5zaXRpb24uYXMtaW5pdDpub3QoLmFzLWRyYWdnaW5nKSA+IC5hcy1zcGxpdC1hcmVhIHtcbiAgICAgICAgdHJhbnNpdGlvbjogZmxleC1iYXNpcyAxLjVzICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBhcy1zcGxpdC5hcy1kaXNhYmxlZCA6Om5nLWRlZXAgPiAuYXMtc3BsaXQtZ3V0dGVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5idG5zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIH1cbiAgICAgIC5idG5zID4gZGl2IHtcbiAgICAgICAgZmxleDogMSAxIDUwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuYnRucyA+IGRpdiA+IGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgICAubG9ncyA+IHAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICB9XG4gICAgICAubG9ncyA+IHVsIHtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICAgICAgfVxuICAgICJdfQ== */`, "",{"version":3,"sources":["webpack://./src/app/examples/gutter-click-roll-unroll/gutter-click-roll-unroll.component.ts"],"names":[],"mappings":";MACM;;QAEE,sCAAsC;MACxC;MACA;QACE,0BAA0B;MAC5B;;MAEA;QACE,aAAa;QACb,6BAA6B;QAC7B,eAAe;MACjB;MACA;QACE,aAAa;QACb,aAAa;QACb,uBAAuB;QACvB,mBAAmB;MACrB;MACA;QACE,mBAAmB;MACrB;MACA;QACE,kBAAkB;MACpB;MACA;QACE,aAAa;QACb,WAAW;QACX,kBAAkB;QAClB,kBAAkB;QAClB,yBAAyB;QACzB,yBAAyB;MAC3B;;AAEN,o0DAAo0D","sourcesContent":["\n      as-split.as-transition.as-init:not(.as-dragging) ::ng-deep > .as-split-gutter,\n      as-split.as-transition.as-init:not(.as-dragging) > .as-split-area {\n        transition: flex-basis 1.5s !important;\n      }\n      as-split.as-disabled ::ng-deep > .as-split-gutter {\n        cursor: pointer !important;\n      }\n\n      .btns {\n        display: flex;\n        justify-content: space-around;\n        flex-wrap: wrap;\n      }\n      .btns > div {\n        flex: 1 1 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      .btns > div > button {\n        margin-bottom: 10px;\n      }\n      .logs > p {\n        margin-bottom: 5px;\n      }\n      .logs > ul {\n        height: 200px;\n        width: 100%;\n        overflow-y: scroll;\n        overflow-x: hidden;\n        border: 1px solid #bfbfbf;\n        background-color: #e8e8e8;\n      }\n    "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ })

}]);
//# sourceMappingURL=src_app_examples_gutter-click-roll-unroll_gutter-click-roll-unroll_module_ts.85e7542ed4fb89c6.js.map