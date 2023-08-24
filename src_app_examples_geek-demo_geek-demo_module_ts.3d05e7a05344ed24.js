(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_geek-demo_geek-demo_module_ts"],{

/***/ 3677:
/*!***********************************************************!*\
  !*** ./src/app/examples/geek-demo/geek-demo.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeekDemoComponent: () => (/* binding */ GeekDemoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_examples_geek_demo_geek_demo_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5hcy1zcGxpdC1hcmVhIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgdGV4dC1zaGFkb3c6CiAgICAgICAgICAycHggMCAwICNmZmYsCiAgICAgICAgICAtMnB4IDAgMCAjZmZmLAogICAgICAgICAgMCAycHggMCAjZmZmLAogICAgICAgICAgMCAtMnB4IDAgI2ZmZiwKICAgICAgICAgIDFweCAxcHggI2ZmZiwKICAgICAgICAgIC0xcHggLTFweCAwICNmZmYsCiAgICAgICAgICAxcHggLTFweCAwICNmZmYsCiAgICAgICAgICAtMXB4IDFweCAwICNmZmY7CiAgICAgIH0KCiAgICAgIC5vcHRzLXByb3AgewogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7CiAgICAgIH0KICAgICAgLm9wdHMtcHJvcCA_2BIGRpdiB7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsKICAgICAgfQoKICAgICAgLm9wdHMtYXJlYSA_2BIC50aXRsZSB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsKICAgICAgICBwYWRkaW5nOiAxMHB4OwogICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7CiAgICAgIH0KCiAgICAgIC5hcmVhLWl0ZW0gewogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBwYWRkaW5nOiA0cHg7CiAgICAgICAgY3Vyc29yOiBtb3ZlOwogICAgICB9CiAgICAgIC5hcmVhLWl0ZW0gYnV0dG9uIHsKICAgICAgICBtYXJnaW46IDAgNXB4OwogICAgICB9CgogICAgICAubnVtIHsKICAgICAgICBjb2xvcjogIzAwMDAwMDsKICAgICAgICB0ZXh0LXNoYWRvdzoKICAgICAgICAgIDJweCAwIDAgI2ZmZiwKICAgICAgICAgIC0ycHggMCAwICNmZmYsCiAgICAgICAgICAwIDJweCAwICNmZmYsCiAgICAgICAgICAwIC0ycHggMCAjZmZmLAogICAgICAgICAgMXB4IDFweCAjZmZmLAogICAgICAgICAgLTFweCAtMXB4IDAgI2ZmZiwKICAgICAgICAgIDFweCAtMXB4IDAgI2ZmZiwKICAgICAgICAgIC0xcHggMXB4IDAgI2ZmZjsKICAgICAgfQogICAgICBsYWJlbCB7CiAgICAgICAgbWFyZ2luOiAwOwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_geek_demo_geek_demo_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/examples/geek-demo/geek-demo.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5hcy1zcGxpdC1hcmVhIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgdGV4dC1zaGFkb3c6CiAgICAgICAgICAycHggMCAwICNmZmYsCiAgICAgICAgICAtMnB4IDAgMCAjZmZmLAogICAgICAgICAgMCAycHggMCAjZmZmLAogICAgICAgICAgMCAtMnB4IDAgI2ZmZiwKICAgICAgICAgIDFweCAxcHggI2ZmZiwKICAgICAgICAgIC0xcHggLTFweCAwICNmZmYsCiAgICAgICAgICAxcHggLTFweCAwICNmZmYsCiAgICAgICAgICAtMXB4IDFweCAwICNmZmY7CiAgICAgIH0KCiAgICAgIC5vcHRzLXByb3AgewogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7CiAgICAgIH0KICAgICAgLm9wdHMtcHJvcCA%2BIGRpdiB7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsKICAgICAgfQoKICAgICAgLm9wdHMtYXJlYSA%2BIC50aXRsZSB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsKICAgICAgICBwYWRkaW5nOiAxMHB4OwogICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7CiAgICAgIH0KCiAgICAgIC5hcmVhLWl0ZW0gewogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBwYWRkaW5nOiA0cHg7CiAgICAgICAgY3Vyc29yOiBtb3ZlOwogICAgICB9CiAgICAgIC5hcmVhLWl0ZW0gYnV0dG9uIHsKICAgICAgICBtYXJnaW46IDAgNXB4OwogICAgICB9CgogICAgICAubnVtIHsKICAgICAgICBjb2xvcjogIzAwMDAwMDsKICAgICAgICB0ZXh0LXNoYWRvdzoKICAgICAgICAgIDJweCAwIDAgI2ZmZiwKICAgICAgICAgIC0ycHggMCAwICNmZmYsCiAgICAgICAgICAwIDJweCAwICNmZmYsCiAgICAgICAgICAwIC0ycHggMCAjZmZmLAogICAgICAgICAgMXB4IDFweCAjZmZmLAogICAgICAgICAgLTFweCAtMXB4IDAgI2ZmZiwKICAgICAgICAgIDFweCAtMXB4IDAgI2ZmZiwKICAgICAgICAgIC0xcHggMXB4IDAgI2ZmZjsKICAgICAgfQogICAgICBsYWJlbCB7CiAgICAgICAgbWFyZ2luOiAwOwogICAgICB9CiAgICA%3D!./src/app/examples/geek-demo/geek-demo.component.ts */ 439);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_examples_geek_demo_geek_demo_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5hcy1zcGxpdC1hcmVhIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgdGV4dC1zaGFkb3c6CiAgICAgICAgICAycHggMCAwICNmZmYsCiAgICAgICAgICAtMnB4IDAgMCAjZmZmLAogICAgICAgICAgMCAycHggMCAjZmZmLAogICAgICAgICAgMCAtMnB4IDAgI2ZmZiwKICAgICAgICAgIDFweCAxcHggI2ZmZiwKICAgICAgICAgIC0xcHggLTFweCAwICNmZmYsCiAgICAgICAgICAxcHggLTFweCAwICNmZmYsCiAgICAgICAgICAtMXB4IDFweCAwICNmZmY7CiAgICAgIH0KCiAgICAgIC5vcHRzLXByb3AgewogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7CiAgICAgIH0KICAgICAgLm9wdHMtcHJvcCA_2BIGRpdiB7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsKICAgICAgfQoKICAgICAgLm9wdHMtYXJlYSA_2BIC50aXRsZSB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsKICAgICAgICBwYWRkaW5nOiAxMHB4OwogICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7CiAgICAgIH0KCiAgICAgIC5hcmVhLWl0ZW0gewogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBwYWRkaW5nOiA0cHg7CiAgICAgICAgY3Vyc29yOiBtb3ZlOwogICAgICB9CiAgICAgIC5hcmVhLWl0ZW0gYnV0dG9uIHsKICAgICAgICBtYXJnaW46IDAgNXB4OwogICAgICB9CgogICAgICAubnVtIHsKICAgICAgICBjb2xvcjogIzAwMDAwMDsKICAgICAgICB0ZXh0LXNoYWRvdzoKICAgICAgICAgIDJweCAwIDAgI2ZmZiwKICAgICAgICAgIC0ycHggMCAwICNmZmYsCiAgICAgICAgICAwIDJweCAwICNmZmYsCiAgICAgICAgICAwIC0ycHggMCAjZmZmLAogICAgICAgICAgMXB4IDFweCAjZmZmLAogICAgICAgICAgLTFweCAtMXB4IDAgI2ZmZiwKICAgICAgICAgIDFweCAtMXB4IDAgI2ZmZiwKICAgICAgICAgIC0xcHggMXB4IDAgI2ZmZjsKICAgICAgfQogICAgICBsYWJlbCB7CiAgICAgICAgbWFyZ2luOiAwOwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_geek_demo_geek_demo_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_geek_demo_geek_demo_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5hcy1zcGxpdC1hcmVhIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgdGV4dC1zaGFkb3c6CiAgICAgICAgICAycHggMCAwICNmZmYsCiAgICAgICAgICAtMnB4IDAgMCAjZmZmLAogICAgICAgICAgMCAycHggMCAjZmZmLAogICAgICAgICAgMCAtMnB4IDAgI2ZmZiwKICAgICAgICAgIDFweCAxcHggI2ZmZiwKICAgICAgICAgIC0xcHggLTFweCAwICNmZmYsCiAgICAgICAgICAxcHggLTFweCAwICNmZmYsCiAgICAgICAgICAtMXB4IDFweCAwICNmZmY7CiAgICAgIH0KCiAgICAgIC5vcHRzLXByb3AgewogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7CiAgICAgIH0KICAgICAgLm9wdHMtcHJvcCA_2BIGRpdiB7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsKICAgICAgfQoKICAgICAgLm9wdHMtYXJlYSA_2BIC50aXRsZSB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsKICAgICAgICBwYWRkaW5nOiAxMHB4OwogICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7CiAgICAgIH0KCiAgICAgIC5hcmVhLWl0ZW0gewogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBwYWRkaW5nOiA0cHg7CiAgICAgICAgY3Vyc29yOiBtb3ZlOwogICAgICB9CiAgICAgIC5hcmVhLWl0ZW0gYnV0dG9uIHsKICAgICAgICBtYXJnaW46IDAgNXB4OwogICAgICB9CgogICAgICAubnVtIHsKICAgICAgICBjb2xvcjogIzAwMDAwMDsKICAgICAgICB0ZXh0LXNoYWRvdzoKICAgICAgICAgIDJweCAwIDAgI2ZmZiwKICAgICAgICAgIC0ycHggMCAwICNmZmYsCiAgICAgICAgICAwIDJweCAwICNmZmYsCiAgICAgICAgICAwIC0ycHggMCAjZmZmLAogICAgICAgICAgMXB4IDFweCAjZmZmLAogICAgICAgICAgLTFweCAtMXB4IDAgI2ZmZiwKICAgICAgICAgIDFweCAtMXB4IDAgI2ZmZiwKICAgICAgICAgIC0xcHggMXB4IDAgI2ZmZjsKICAgICAgfQogICAgICBsYWJlbCB7CiAgICAgICAgbWFyZ2luOiAwOwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_geek_demo_geek_demo_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/sortable */ 2057);
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);
var _class;





let GeekDemoComponent = (_class = class GeekDemoComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_1__.AComponent {
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
}, _class.propDecorators = {
  sortableComponent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
    args: [ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_3__.SortableComponent]
  }]
}, _class);
GeekDemoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'sp-ex-geek-demo',
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page'
  },
  template: `
    {{ testChangeDetectorRun() }}
    <div class="container">
      <sp-example-title [type]="exampleEnum.GEEK"></sp-example-title>
      <div class="split-example" style="background-color: #e5e0e0;">
        <as-split
          [direction]="d.dir"
          [restrictMove]="d.restrictMove"
          [gutterSize]="d.gutterSize"
          [gutterStep]="d.gutterStep"
          [style.width]="d.width"
          [style.height]="d.height"
          [useTransition]="d.useTransition"
          style="background-color: #ffffff;"
        >
          <ng-template ngFor let-area [ngForOf]="d.areas" [ngForTrackBy]="trackByFct" let-index="index">
            <as-split-area
              *ngIf="area.present"
              [visible]="area.visible"
              [order]="index"
              [size]="area.size"
              [style.background-color]="area.color"
              >{{ area.id }}</as-split-area
            >
          </ng-template>
        </as-split>
      </div>
      <div class="opts-prop">
        <div>
          <button
            class="btn btn-warning btn-sm"
            [class.active]="!d.useTransition"
            (click)="d.useTransition = !d.useTransition"
          >
            {{ 'useTransition: ' + d.useTransition }}
          </button>
        </div>
        <div>
          <div class="btn-group">
            <label class="btn btn-warning btn-sm" [(ngModel)]="d.dir" btnRadio="horizontal">horizontal</label>
            <label class="btn btn-warning btn-sm" [(ngModel)]="d.dir" btnRadio="vertical">vertical</label>
          </div>
        </div>
        <div>
          <label>Width:&nbsp;</label>
          <div class="btn-group">
            <label class="btn btn-warning btn-sm" [(ngModel)]="d.width" [btnRadio]="null">null</label>
            <label class="btn btn-warning btn-sm" [(ngModel)]="d.width" btnRadio="400px">400</label>
            <label class="btn btn-warning btn-sm" [(ngModel)]="d.width" btnRadio="600px">600</label>
          </div>
        </div>
        <div>
          <label>Height:&nbsp;</label>
          <div class="btn-group">
            <label class="btn btn-warning btn-sm" [(ngModel)]="d.height" [btnRadio]="null">null</label>
            <label class="btn btn-warning btn-sm" [(ngModel)]="d.height" btnRadio="200px">200</label>
            <label class="btn btn-warning btn-sm" [(ngModel)]="d.height" btnRadio="350px">350</label>
          </div>
        </div>
        <div>
          <label>Gutter size:&nbsp;</label>
          <div class="btn-group">
            <label class="btn btn-warning btn-sm" [(ngModel)]="d.gutterSize" [btnRadio]="null">null</label>
            <label class="btn btn-warning btn-sm" [(ngModel)]="d.gutterSize" btnRadio="7">7</label>
            <label class="btn btn-warning btn-sm" [(ngModel)]="d.gutterSize" btnRadio="22">22</label>
          </div>
        </div>
        <div>
          <label>Gutter step:&nbsp;</label>
          <div class="btn-group">
            <label class="btn btn-warning btn-sm" [(ngModel)]="d.gutterStep" [btnRadio]="null">null</label>
            <label class="btn btn-warning btn-sm" [(ngModel)]="d.gutterStep" btnRadio="10">10</label>
            <label class="btn btn-warning btn-sm" [(ngModel)]="d.gutterStep" btnRadio="50">50</label>
          </div>
        </div>
      </div>
      <div class="opts-area">
        <div class="title">
          <label><b>Areas (drag elements to change order):</b></label>
          <button class="btn btn-warning btn-sm" (click)="addArea()">Add area</button>
        </div>
        <bs-sortable [(ngModel)]="d.areas" [itemTemplate]="itemTemplate"></bs-sortable>

        <ng-template #itemTemplate let-item="item" let-index="index">
          <div [style.background-color]="item.value.color" class="area-item id-{{ item.value.id }}">
            <div class="num">{{ item.value.id }}</div>
            <div>
              <button
                class="btn btn-warning btn-sm"
                [class.active]="!item.value.present"
                (click)="item.value.present = !item.value.present"
              >
                {{ '*ngIf="' + item.value.present + '"' }}
              </button>
              <button
                class="btn btn-warning btn-sm"
                [class.active]="!item.value.visible"
                (click)="item.value.visible = !item.value.visible"
              >
                {{ '[visible]="' + item.value.visible + '"' }}
              </button>
              <button class="btn btn-warning btn-sm" (click)="removeArea(item.value)">Remove</button>
            </div>
          </div>
        </ng-template>
      </div>
    </div>
  `,
  styles: [(_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_geek_demo_geek_demo_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5hcy1zcGxpdC1hcmVhIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgdGV4dC1zaGFkb3c6CiAgICAgICAgICAycHggMCAwICNmZmYsCiAgICAgICAgICAtMnB4IDAgMCAjZmZmLAogICAgICAgICAgMCAycHggMCAjZmZmLAogICAgICAgICAgMCAtMnB4IDAgI2ZmZiwKICAgICAgICAgIDFweCAxcHggI2ZmZiwKICAgICAgICAgIC0xcHggLTFweCAwICNmZmYsCiAgICAgICAgICAxcHggLTFweCAwICNmZmYsCiAgICAgICAgICAtMXB4IDFweCAwICNmZmY7CiAgICAgIH0KCiAgICAgIC5vcHRzLXByb3AgewogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7CiAgICAgIH0KICAgICAgLm9wdHMtcHJvcCA_2BIGRpdiB7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsKICAgICAgfQoKICAgICAgLm9wdHMtYXJlYSA_2BIC50aXRsZSB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsKICAgICAgICBwYWRkaW5nOiAxMHB4OwogICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7CiAgICAgIH0KCiAgICAgIC5hcmVhLWl0ZW0gewogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBwYWRkaW5nOiA0cHg7CiAgICAgICAgY3Vyc29yOiBtb3ZlOwogICAgICB9CiAgICAgIC5hcmVhLWl0ZW0gYnV0dG9uIHsKICAgICAgICBtYXJnaW46IDAgNXB4OwogICAgICB9CgogICAgICAubnVtIHsKICAgICAgICBjb2xvcjogIzAwMDAwMDsKICAgICAgICB0ZXh0LXNoYWRvdzoKICAgICAgICAgIDJweCAwIDAgI2ZmZiwKICAgICAgICAgIC0ycHggMCAwICNmZmYsCiAgICAgICAgICAwIDJweCAwICNmZmYsCiAgICAgICAgICAwIC0ycHggMCAjZmZmLAogICAgICAgICAgMXB4IDFweCAjZmZmLAogICAgICAgICAgLTFweCAtMXB4IDAgI2ZmZiwKICAgICAgICAgIDFweCAtMXB4IDAgI2ZmZiwKICAgICAgICAgIC0xcHggMXB4IDAgI2ZmZjsKICAgICAgfQogICAgICBsYWJlbCB7CiAgICAgICAgbWFyZ2luOiAwOwogICAgICB9CiAgICA_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_geek_demo_geek_demo_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
})], GeekDemoComponent);
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeekDemoModule: () => (/* binding */ GeekDemoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _geek_demo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geek-demo.component */ 3677);








let GeekDemoModule = class GeekDemoModule {};
GeekDemoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
    path: '',
    component: _geek_demo_component__WEBPACK_IMPORTED_MODULE_1__.GeekDemoComponent
  }]), angular_split__WEBPACK_IMPORTED_MODULE_6__.AngularSplitModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule],
  declarations: [_geek_demo_component__WEBPACK_IMPORTED_MODULE_1__.GeekDemoComponent]
})], GeekDemoModule);

/***/ }),

/***/ 439:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/examples/geek-demo/geek-demo.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5hcy1zcGxpdC1hcmVhIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgdGV4dC1zaGFkb3c6CiAgICAgICAgICAycHggMCAwICNmZmYsCiAgICAgICAgICAtMnB4IDAgMCAjZmZmLAogICAgICAgICAgMCAycHggMCAjZmZmLAogICAgICAgICAgMCAtMnB4IDAgI2ZmZiwKICAgICAgICAgIDFweCAxcHggI2ZmZiwKICAgICAgICAgIC0xcHggLTFweCAwICNmZmYsCiAgICAgICAgICAxcHggLTFweCAwICNmZmYsCiAgICAgICAgICAtMXB4IDFweCAwICNmZmY7CiAgICAgIH0KCiAgICAgIC5vcHRzLXByb3AgewogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7CiAgICAgIH0KICAgICAgLm9wdHMtcHJvcCA%2BIGRpdiB7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsKICAgICAgfQoKICAgICAgLm9wdHMtYXJlYSA%2BIC50aXRsZSB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsKICAgICAgICBwYWRkaW5nOiAxMHB4OwogICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7CiAgICAgIH0KCiAgICAgIC5hcmVhLWl0ZW0gewogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBwYWRkaW5nOiA0cHg7CiAgICAgICAgY3Vyc29yOiBtb3ZlOwogICAgICB9CiAgICAgIC5hcmVhLWl0ZW0gYnV0dG9uIHsKICAgICAgICBtYXJnaW46IDAgNXB4OwogICAgICB9CgogICAgICAubnVtIHsKICAgICAgICBjb2xvcjogIzAwMDAwMDsKICAgICAgICB0ZXh0LXNoYWRvdzoKICAgICAgICAgIDJweCAwIDAgI2ZmZiwKICAgICAgICAgIC0ycHggMCAwICNmZmYsCiAgICAgICAgICAwIDJweCAwICNmZmYsCiAgICAgICAgICAwIC0ycHggMCAjZmZmLAogICAgICAgICAgMXB4IDFweCAjZmZmLAogICAgICAgICAgLTFweCAtMXB4IDAgI2ZmZiwKICAgICAgICAgIDFweCAtMXB4IDAgI2ZmZiwKICAgICAgICAgIC0xcHggMXB4IDAgI2ZmZjsKICAgICAgfQogICAgICBsYWJlbCB7CiAgICAgICAgbWFyZ2luOiAwOwogICAgICB9CiAgICA%3D!./src/app/examples/geek-demo/geek-demo.component.ts ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
      .as-split-area {
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow:
          2px 0 0 #fff,
          -2px 0 0 #fff,
          0 2px 0 #fff,
          0 -2px 0 #fff,
          1px 1px #fff,
          -1px -1px 0 #fff,
          1px -1px 0 #fff,
          -1px 1px 0 #fff;
      }

      .opts-prop {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
      }
      .opts-prop > div {
        margin-bottom: 10px;
      }

      .opts-area > .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        background-color: #e8e8e8;
      }

      .area-item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 4px;
        cursor: move;
      }
      .area-item button {
        margin: 0 5px;
      }

      .num {
        color: #000000;
        text-shadow:
          2px 0 0 #fff,
          -2px 0 0 #fff,
          0 2px 0 #fff,
          0 -2px 0 #fff,
          1px 1px #fff,
          -1px -1px 0 #fff,
          1px -1px 0 #fff,
          -1px 1px 0 #fff;
      }
      label {
        margin: 0;
      }
    
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlZWstZGVtby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkI7Ozs7Ozs7O3lCQVFpQjtNQUNuQjs7TUFFQTtRQUNFLGFBQWE7UUFDYixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLDZCQUE2QjtNQUMvQjtNQUNBO1FBQ0UsbUJBQW1CO01BQ3JCOztNQUVBO1FBQ0UsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw4QkFBOEI7UUFDOUIsYUFBYTtRQUNiLHlCQUF5QjtNQUMzQjs7TUFFQTtRQUNFLGFBQWE7UUFDYiw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixZQUFZO01BQ2Q7TUFDQTtRQUNFLGFBQWE7TUFDZjs7TUFFQTtRQUNFLGNBQWM7UUFDZDs7Ozs7Ozs7eUJBUWlCO01BQ25CO01BQ0E7UUFDRSxTQUFTO01BQ1giLCJmaWxlIjoiZ2Vlay1kZW1vLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmFzLXNwbGl0LWFyZWEge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1zaGFkb3c6XG4gICAgICAgICAgMnB4IDAgMCAjZmZmLFxuICAgICAgICAgIC0ycHggMCAwICNmZmYsXG4gICAgICAgICAgMCAycHggMCAjZmZmLFxuICAgICAgICAgIDAgLTJweCAwICNmZmYsXG4gICAgICAgICAgMXB4IDFweCAjZmZmLFxuICAgICAgICAgIC0xcHggLTFweCAwICNmZmYsXG4gICAgICAgICAgMXB4IC0xcHggMCAjZmZmLFxuICAgICAgICAgIC0xcHggMXB4IDAgI2ZmZjtcbiAgICAgIH1cblxuICAgICAgLm9wdHMtcHJvcCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG4gICAgICAub3B0cy1wcm9wID4gZGl2IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgLm9wdHMtYXJlYSA+IC50aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgICAgIH1cblxuICAgICAgLmFyZWEtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgIH1cbiAgICAgIC5hcmVhLWl0ZW0gYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgIH1cblxuICAgICAgLm51bSB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICB0ZXh0LXNoYWRvdzpcbiAgICAgICAgICAycHggMCAwICNmZmYsXG4gICAgICAgICAgLTJweCAwIDAgI2ZmZixcbiAgICAgICAgICAwIDJweCAwICNmZmYsXG4gICAgICAgICAgMCAtMnB4IDAgI2ZmZixcbiAgICAgICAgICAxcHggMXB4ICNmZmYsXG4gICAgICAgICAgLTFweCAtMXB4IDAgI2ZmZixcbiAgICAgICAgICAxcHggLTFweCAwICNmZmYsXG4gICAgICAgICAgLTFweCAxcHggMCAjZmZmO1xuICAgICAgfVxuICAgICAgbGFiZWwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgIl19 */`, "",{"version":3,"sources":["webpack://./src/app/examples/geek-demo/geek-demo.component.ts"],"names":[],"mappings":";MACM;QACE,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB;;;;;;;;yBAQiB;MACnB;;MAEA;QACE,aAAa;QACb,eAAe;QACf,mBAAmB;QACnB,6BAA6B;MAC/B;MACA;QACE,mBAAmB;MACrB;;MAEA;QACE,aAAa;QACb,mBAAmB;QACnB,8BAA8B;QAC9B,aAAa;QACb,yBAAyB;MAC3B;;MAEA;QACE,aAAa;QACb,6BAA6B;QAC7B,mBAAmB;QACnB,YAAY;QACZ,YAAY;MACd;MACA;QACE,aAAa;MACf;;MAEA;QACE,cAAc;QACd;;;;;;;;yBAQiB;MACnB;MACA;QACE,SAAS;MACX;;AAEN,o7EAAo7E","sourcesContent":["\n      .as-split-area {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        text-shadow:\n          2px 0 0 #fff,\n          -2px 0 0 #fff,\n          0 2px 0 #fff,\n          0 -2px 0 #fff,\n          1px 1px #fff,\n          -1px -1px 0 #fff,\n          1px -1px 0 #fff,\n          -1px 1px 0 #fff;\n      }\n\n      .opts-prop {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-around;\n      }\n      .opts-prop > div {\n        margin-bottom: 10px;\n      }\n\n      .opts-area > .title {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 10px;\n        background-color: #e8e8e8;\n      }\n\n      .area-item {\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        padding: 4px;\n        cursor: move;\n      }\n      .area-item button {\n        margin: 0 5px;\n      }\n\n      .num {\n        color: #000000;\n        text-shadow:\n          2px 0 0 #fff,\n          -2px 0 0 #fff,\n          0 2px 0 #fff,\n          0 -2px 0 #fff,\n          1px 1px #fff,\n          -1px -1px 0 #fff,\n          1px -1px 0 #fff,\n          -1px 1px 0 #fff;\n      }\n      label {\n        margin: 0;\n      }\n    "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ })

}]);
//# sourceMappingURL=src_app_examples_geek-demo_geek-demo_module_ts.3d05e7a05344ed24.js.map