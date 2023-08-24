(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_split-transitions_split-transitions_module_ts"],{

/***/ 9904:
/*!***************************************************************************!*\
  !*** ./src/app/examples/split-transitions/split-transitions.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitTransitionsComponent: () => (/* binding */ SplitTransitionsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_examples_split_transitions_split_transitions_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIGJ1dHRvbiB7CiAgICAgICAgbWFyZ2luOiA0cHg7CiAgICAgIH0KCiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgfQogICAgICAuYnRucyA_2BIGRpdiB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgIH0KICAgICAgLmJ0bnMgPiBkaXYgPiBidXR0b24gewogICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgIH0KCiAgICAgIC5idG5zID4gZGl2Om50aC1jaGlsZCgxKSB7CiAgICAgICAgZmxleDogMSAxIDIwJTsKICAgICAgfQogICAgICAuYnRucyA_2BIGRpdjpudGgtY2hpbGQoMikgewogICAgICAgIGZsZXg6IDEgMSA0MCU7CiAgICAgIH0KICAgICAgLmJ0bnMgPiBkaXY6bnRoLWNoaWxkKDMpIHsKICAgICAgICBmbGV4OiAxIDEgNDAlOwogICAgICB9CiAgICAgIC5sb2dzID4gcCB7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OwogICAgICB9CiAgICAgIC5sb2dzID4gdWwgewogICAgICAgIGhlaWdodDogMjAwcHg7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOwogICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjsKICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmOwogICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7CiAgICAgIH0KCiAgICAgIC5hcy1zcGxpdC1hcmVhIHsKICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7CiAgICAgIH0KCiAgICAgIC5hcy1zcGxpdC1hcmVhLmFzLW1pbiB7CiAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47CiAgICAgIH0KCiAgICAgIC5hcy1zcGxpdC1hcmVhLmFzLW1heCB7CiAgICAgICAgYmFja2dyb3VuZDogcmVkOwogICAgICB9CgogICAgICA6aG9zdCAuZXgyIGJ1dHRvbiB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgIH0KCiAgICAgIDpob3N0IC5leDIgOjpuZy1kZWVwIC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtYXJlYSwKICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtZ3V0dGVyIHsKICAgICAgICB0cmFuc2l0aW9uOiBmbGV4LWJhc2lzIDFzICFpbXBvcnRhbnQ7CiAgICAgIH0KICAgIA_3D_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_split_transitions_split_transitions_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/examples/split-transitions/split-transitions.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIGJ1dHRvbiB7CiAgICAgICAgbWFyZ2luOiA0cHg7CiAgICAgIH0KCiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgfQogICAgICAuYnRucyA%2BIGRpdiB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgIH0KICAgICAgLmJ0bnMgPiBkaXYgPiBidXR0b24gewogICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgIH0KCiAgICAgIC5idG5zID4gZGl2Om50aC1jaGlsZCgxKSB7CiAgICAgICAgZmxleDogMSAxIDIwJTsKICAgICAgfQogICAgICAuYnRucyA%2BIGRpdjpudGgtY2hpbGQoMikgewogICAgICAgIGZsZXg6IDEgMSA0MCU7CiAgICAgIH0KICAgICAgLmJ0bnMgPiBkaXY6bnRoLWNoaWxkKDMpIHsKICAgICAgICBmbGV4OiAxIDEgNDAlOwogICAgICB9CiAgICAgIC5sb2dzID4gcCB7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OwogICAgICB9CiAgICAgIC5sb2dzID4gdWwgewogICAgICAgIGhlaWdodDogMjAwcHg7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOwogICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjsKICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmOwogICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7CiAgICAgIH0KCiAgICAgIC5hcy1zcGxpdC1hcmVhIHsKICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7CiAgICAgIH0KCiAgICAgIC5hcy1zcGxpdC1hcmVhLmFzLW1pbiB7CiAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47CiAgICAgIH0KCiAgICAgIC5hcy1zcGxpdC1hcmVhLmFzLW1heCB7CiAgICAgICAgYmFja2dyb3VuZDogcmVkOwogICAgICB9CgogICAgICA6aG9zdCAuZXgyIGJ1dHRvbiB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgIH0KCiAgICAgIDpob3N0IC5leDIgOjpuZy1kZWVwIC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtYXJlYSwKICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtZ3V0dGVyIHsKICAgICAgICB0cmFuc2l0aW9uOiBmbGV4LWJhc2lzIDFzICFpbXBvcnRhbnQ7CiAgICAgIH0KICAgIA%3D%3D!./src/app/examples/split-transitions/split-transitions.component.ts */ 9926);
/* harmony import */ var _Users_beeman_dev_github_angular_split_angular_split_src_app_examples_split_transitions_split_transitions_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIGJ1dHRvbiB7CiAgICAgICAgbWFyZ2luOiA0cHg7CiAgICAgIH0KCiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgfQogICAgICAuYnRucyA_2BIGRpdiB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgIH0KICAgICAgLmJ0bnMgPiBkaXYgPiBidXR0b24gewogICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgIH0KCiAgICAgIC5idG5zID4gZGl2Om50aC1jaGlsZCgxKSB7CiAgICAgICAgZmxleDogMSAxIDIwJTsKICAgICAgfQogICAgICAuYnRucyA_2BIGRpdjpudGgtY2hpbGQoMikgewogICAgICAgIGZsZXg6IDEgMSA0MCU7CiAgICAgIH0KICAgICAgLmJ0bnMgPiBkaXY6bnRoLWNoaWxkKDMpIHsKICAgICAgICBmbGV4OiAxIDEgNDAlOwogICAgICB9CiAgICAgIC5sb2dzID4gcCB7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OwogICAgICB9CiAgICAgIC5sb2dzID4gdWwgewogICAgICAgIGhlaWdodDogMjAwcHg7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOwogICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjsKICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmOwogICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7CiAgICAgIH0KCiAgICAgIC5hcy1zcGxpdC1hcmVhIHsKICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7CiAgICAgIH0KCiAgICAgIC5hcy1zcGxpdC1hcmVhLmFzLW1pbiB7CiAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47CiAgICAgIH0KCiAgICAgIC5hcy1zcGxpdC1hcmVhLmFzLW1heCB7CiAgICAgICAgYmFja2dyb3VuZDogcmVkOwogICAgICB9CgogICAgICA6aG9zdCAuZXgyIGJ1dHRvbiB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgIH0KCiAgICAgIDpob3N0IC5leDIgOjpuZy1kZWVwIC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtYXJlYSwKICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtZ3V0dGVyIHsKICAgICAgICB0cmFuc2l0aW9uOiBmbGV4LWJhc2lzIDFzICFpbXBvcnRhbnQ7CiAgICAgIH0KICAgIA_3D_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_split_transitions_split_transitions_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_split_transitions_split_transitions_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIGJ1dHRvbiB7CiAgICAgICAgbWFyZ2luOiA0cHg7CiAgICAgIH0KCiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgfQogICAgICAuYnRucyA_2BIGRpdiB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgIH0KICAgICAgLmJ0bnMgPiBkaXYgPiBidXR0b24gewogICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgIH0KCiAgICAgIC5idG5zID4gZGl2Om50aC1jaGlsZCgxKSB7CiAgICAgICAgZmxleDogMSAxIDIwJTsKICAgICAgfQogICAgICAuYnRucyA_2BIGRpdjpudGgtY2hpbGQoMikgewogICAgICAgIGZsZXg6IDEgMSA0MCU7CiAgICAgIH0KICAgICAgLmJ0bnMgPiBkaXY6bnRoLWNoaWxkKDMpIHsKICAgICAgICBmbGV4OiAxIDEgNDAlOwogICAgICB9CiAgICAgIC5sb2dzID4gcCB7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OwogICAgICB9CiAgICAgIC5sb2dzID4gdWwgewogICAgICAgIGhlaWdodDogMjAwcHg7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOwogICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjsKICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmOwogICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7CiAgICAgIH0KCiAgICAgIC5hcy1zcGxpdC1hcmVhIHsKICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7CiAgICAgIH0KCiAgICAgIC5hcy1zcGxpdC1hcmVhLmFzLW1pbiB7CiAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47CiAgICAgIH0KCiAgICAgIC5hcy1zcGxpdC1hcmVhLmFzLW1heCB7CiAgICAgICAgYmFja2dyb3VuZDogcmVkOwogICAgICB9CgogICAgICA6aG9zdCAuZXgyIGJ1dHRvbiB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgIH0KCiAgICAgIDpob3N0IC5leDIgOjpuZy1kZWVwIC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtYXJlYSwKICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtZ3V0dGVyIHsKICAgICAgICB0cmFuc2l0aW9uOiBmbGV4LWJhc2lzIDFzICFpbXBvcnRhbnQ7CiAgICAgIH0KICAgIA_3D_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_split_transitions_split_transitions_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);
/* harmony import */ var _utils_format_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/format-date */ 3354);
var _class;





let SplitTransitionsComponent = (_class = class SplitTransitionsComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_1__.AComponent {
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
      text: `${(0,_utils_format_date__WEBPACK_IMPORTED_MODULE_2__.formatDate)(new Date())} > transitionEnd event > ${e}`
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
}, _class.propDecorators = {
  logsEl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
    args: ['logs']
  }]
}, _class);
SplitTransitionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'sp-ex-transitions',
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page'
  },
  template: `
    {{ testChangeDetectorRun() }}
    <div class="container">
      <sp-example-title [type]="exampleEnum.TRANSITION"></sp-example-title>
      <div class="split-example">
        <as-split
          direction="horizontal"
          disabled="true"
          [useTransition]="action.useTransition"
          (dragEnd)="action.a1s = $event.sizes[0]; action.a2s = $event.sizes[1]; action.a3s = $event.sizes[2]"
          (transitionEnd)="log($event)"
        >
          <as-split-area [visible]="action.a1v" [size]="action.a1s" order="1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </as-split-area>
          <as-split-area [visible]="action.a2v" [size]="action.a2s" order="2">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
              autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
              illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </as-split-area>
          <as-split-area [visible]="action.a3v" [size]="action.a3s" order="3">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
              autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
              illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </as-split-area>
        </as-split>
      </div>
      <br />
      <div class="btns">
        <div>
          <button
            class="btn btn-warning"
            [class.active]="!action.useTransition"
            (click)="action.useTransition = !action.useTransition"
          >
            {{ 'useTransition: ' + action.useTransition }}
          </button>
        </div>
        <div class="btn-group">
          <label class="btn btn-warning" [class.active]="!action.a1v" (click)="action.a1v = !action.a1v">{{
            'area1: ' + action.a1v
          }}</label>
          <label class="btn btn-warning" [class.active]="!action.a2v" (click)="action.a2v = !action.a2v">{{
            'area2: ' + action.a2v
          }}</label>
          <label class="btn btn-warning" [class.active]="!action.a3v" (click)="action.a3v = !action.a3v">{{
            'area3: ' + action.a3v
          }}</label>
        </div>
        <div class="btn-group">
          <label
            class="btn btn-warning"
            [class.disabled]="action.a1s === 25 || !action.a1v || !action.a2v || !action.a3v"
            (click)="action.a1s = 25; action.a2s = 50; action.a3s = 25"
            >Set sizes to 25/50/25</label
          >
          <label
            class="btn btn-warning"
            [class.disabled]="action.a1s === 40 || !action.a1v || !action.a2v || !action.a3v"
            (click)="action.a1s = 40; action.a2s = 20; action.a3s = 40"
            >Set sizes to 40/20/40</label
          >
        </div>
      </div>
      <div class="logs">
        <p>Events <code>(transitionEnd)</code>:</p>
        <ul #logs>
          <li *ngFor="let l of logMessages" [ngClass]="l.type">{{ l.text }}</li>
        </ul>
      </div>
      <br />
      <hr />
      <br />
      <div class="split-example ex2" style="height: 150px;">
        <as-split useTransition="true" unit="pixel">
          <as-split-area size="200" minSize="200" order="1" [visible]="only === 1 || only === 0">
            <button (click)="left()" class="btn btn-warning">{{ only === 1 ? 'LEFT ⬅️' : 'LEFT ➡' }}</button>
            <p>size: 200px<br />minSize: 200px</p>
          </as-split-area>
          <as-split-area size="*" order="2" [visible]="only === 2 || only === 0">
            <button (click)="center()" class="btn btn-warning">
              {{ only === 2 ? '➡ ️CENTER ⬅' : '️⬅ ️CENTER ➡' }}
            </button>
            <p>size: *</p>
          </as-split-area>
          <as-split-area size="200" minSize="200" order="3" [visible]="only === 3 || only === 0">
            <button (click)="right()" class="btn btn-warning">{{ only === 3 ? '➡ RIGHT' : '⬅️ RIGHT' }}</button>
            <p>size: 200px<br />minSize: 200px</p>
          </as-split-area>
        </as-split>
      </div>
      <div class="split-example ex2" style="height: 150px;">
        <as-split useTransition="true" unit="percent">
          <as-split-area size="30" minSize="30" order="1" [visible]="only === 1 || only === 0">
            <button (click)="left()" class="btn btn-warning">{{ only === 1 ? 'LEFT ⬅️' : 'LEFT ➡' }}</button>
            <p>size: 30%<br />minSize: 30%</p>
          </as-split-area>
          <as-split-area size="40" order="2" [visible]="only === 2 || only === 0">
            <button (click)="center()" class="btn btn-warning">
              {{ only === 2 ? '➡ ️CENTER ⬅' : '️⬅ ️CENTER ➡' }}
            </button>
            <p>size: 40%</p>
          </as-split-area>
          <as-split-area size="30" minSize="30" order="3" [visible]="only === 3 || only === 0">
            <button (click)="right()" class="btn btn-warning">{{ only === 3 ? '➡ RIGHT' : '⬅️ RIGHT' }}</button>
            <p>size: 30%<br />minSize: 30%</p>
          </as-split-area>
        </as-split>
      </div>
      <br />
      <hr />
      <br />
      <div class="btns">
        <div class="btn-group">
          <label class="btn btn-warning" [class.active]="!keepA" (click)="keepA = !keepA">{{ 'A: ' + keepA }}</label>
          <label class="btn btn-warning" [class.active]="!keepB" (click)="keepB = !keepB">{{ 'B: ' + keepB }}</label>
          <label class="btn btn-warning" [class.active]="!keepC" (click)="keepC = !keepC">{{ 'C: ' + keepC }}</label>
        </div>
      </div>
      <div class="split-example ex2" style="height: 150px;">
        <as-split useTransition="true" unit="pixel">
          <as-split-area size="200" minSize="200" order="1" [visible]="keepA">
            <p>A<br />size: 200px<br />minSize: 200px</p>
          </as-split-area>
          <as-split-area size="*" order="2" [visible]="keepB">
            <p>B<br />size: *</p>
          </as-split-area>
          <as-split-area size="200" minSize="200" order="3" [visible]="keepC">
            <p>C<br />size: 200px<br />minSize: 200px</p>
          </as-split-area>
        </as-split>
      </div>
      <div class="split-example ex2" style="height: 150px;">
        <as-split useTransition="true" unit="percent">
          <as-split-area size="30" minSize="30" order="1" [visible]="keepA">
            <p>A<br />size: 30%<br />minSize: 30%</p>
          </as-split-area>
          <as-split-area size="40" order="2" [visible]="keepB">
            <p>B<br />size: 40%</p>
          </as-split-area>
          <as-split-area size="30" minSize="30" order="3" [visible]="keepC">
            <p>C<br />size: 30%<br />minSize: 30%</p>
          </as-split-area>
        </as-split>
      </div>
    </div>
  `,
  styles: [(_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_split_transitions_split_transitions_component_ts_css_ngResource_Users_beeman_dev_github_angular_split_angular_split_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIGJ1dHRvbiB7CiAgICAgICAgbWFyZ2luOiA0cHg7CiAgICAgIH0KCiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgfQogICAgICAuYnRucyA_2BIGRpdiB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgIH0KICAgICAgLmJ0bnMgPiBkaXYgPiBidXR0b24gewogICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgIH0KCiAgICAgIC5idG5zID4gZGl2Om50aC1jaGlsZCgxKSB7CiAgICAgICAgZmxleDogMSAxIDIwJTsKICAgICAgfQogICAgICAuYnRucyA_2BIGRpdjpudGgtY2hpbGQoMikgewogICAgICAgIGZsZXg6IDEgMSA0MCU7CiAgICAgIH0KICAgICAgLmJ0bnMgPiBkaXY6bnRoLWNoaWxkKDMpIHsKICAgICAgICBmbGV4OiAxIDEgNDAlOwogICAgICB9CiAgICAgIC5sb2dzID4gcCB7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OwogICAgICB9CiAgICAgIC5sb2dzID4gdWwgewogICAgICAgIGhlaWdodDogMjAwcHg7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOwogICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjsKICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmOwogICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7CiAgICAgIH0KCiAgICAgIC5hcy1zcGxpdC1hcmVhIHsKICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7CiAgICAgIH0KCiAgICAgIC5hcy1zcGxpdC1hcmVhLmFzLW1pbiB7CiAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47CiAgICAgIH0KCiAgICAgIC5hcy1zcGxpdC1hcmVhLmFzLW1heCB7CiAgICAgICAgYmFja2dyb3VuZDogcmVkOwogICAgICB9CgogICAgICA6aG9zdCAuZXgyIGJ1dHRvbiB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgIH0KCiAgICAgIDpob3N0IC5leDIgOjpuZy1kZWVwIC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtYXJlYSwKICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtZ3V0dGVyIHsKICAgICAgICB0cmFuc2l0aW9uOiBmbGV4LWJhc2lzIDFzICFpbXBvcnRhbnQ7CiAgICAgIH0KICAgIA_3D_3D_Users_beeman_dev_github_angular_split_angular_split_src_app_examples_split_transitions_split_transitions_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
})], SplitTransitionsComponent);

/***/ }),

/***/ 5542:
/*!************************************************************************!*\
  !*** ./src/app/examples/split-transitions/split-transitions.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitTransitionsModule: () => (/* binding */ SplitTransitionsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _split_transitions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./split-transitions.component */ 9904);







let SplitTransitionsModule = class SplitTransitionsModule {};
SplitTransitionsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
    path: '',
    component: _split_transitions_component__WEBPACK_IMPORTED_MODULE_1__.SplitTransitionsComponent
  }]), angular_split__WEBPACK_IMPORTED_MODULE_6__.AngularSplitModule],
  declarations: [_split_transitions_component__WEBPACK_IMPORTED_MODULE_1__.SplitTransitionsComponent]
})], SplitTransitionsModule);

/***/ }),

/***/ 9926:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/examples/split-transitions/split-transitions.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIGJ1dHRvbiB7CiAgICAgICAgbWFyZ2luOiA0cHg7CiAgICAgIH0KCiAgICAgIC5idG5zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgfQogICAgICAuYnRucyA%2BIGRpdiB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgIH0KICAgICAgLmJ0bnMgPiBkaXYgPiBidXR0b24gewogICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICAgIH0KCiAgICAgIC5idG5zID4gZGl2Om50aC1jaGlsZCgxKSB7CiAgICAgICAgZmxleDogMSAxIDIwJTsKICAgICAgfQogICAgICAuYnRucyA%2BIGRpdjpudGgtY2hpbGQoMikgewogICAgICAgIGZsZXg6IDEgMSA0MCU7CiAgICAgIH0KICAgICAgLmJ0bnMgPiBkaXY6bnRoLWNoaWxkKDMpIHsKICAgICAgICBmbGV4OiAxIDEgNDAlOwogICAgICB9CiAgICAgIC5sb2dzID4gcCB7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OwogICAgICB9CiAgICAgIC5sb2dzID4gdWwgewogICAgICAgIGhlaWdodDogMjAwcHg7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOwogICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjsKICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmOwogICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7CiAgICAgIH0KCiAgICAgIC5hcy1zcGxpdC1hcmVhIHsKICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7CiAgICAgIH0KCiAgICAgIC5hcy1zcGxpdC1hcmVhLmFzLW1pbiB7CiAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47CiAgICAgIH0KCiAgICAgIC5hcy1zcGxpdC1hcmVhLmFzLW1heCB7CiAgICAgICAgYmFja2dyb3VuZDogcmVkOwogICAgICB9CgogICAgICA6aG9zdCAuZXgyIGJ1dHRvbiB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgIH0KCiAgICAgIDpob3N0IC5leDIgOjpuZy1kZWVwIC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtYXJlYSwKICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hcy10cmFuc2l0aW9uLmFzLWluaXQ6bm90KC5hcy1kcmFnZ2luZykgPiAuYXMtc3BsaXQtZ3V0dGVyIHsKICAgICAgICB0cmFuc2l0aW9uOiBmbGV4LWJhc2lzIDFzICFpbXBvcnRhbnQ7CiAgICAgIH0KICAgIA%3D%3D!./src/app/examples/split-transitions/split-transitions.component.ts ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
      button {
        margin: 4px;
      }

      .btns {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      .btns > div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
      }
      .btns > div > button {
        margin-bottom: 10px;
      }

      .btns > div:nth-child(1) {
        flex: 1 1 20%;
      }
      .btns > div:nth-child(2) {
        flex: 1 1 40%;
      }
      .btns > div:nth-child(3) {
        flex: 1 1 40%;
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

      .as-split-area {
        background: lightgrey;
      }

      .as-split-area.as-min {
        background: green;
      }

      .as-split-area.as-max {
        background: red;
      }

      :host .ex2 button {
        width: 100%;
      }

      :host .ex2 ::ng-deep .as-transition.as-init:not(.as-dragging) > .as-split-area,
      :host ::ng-deep .as-transition.as-init:not(.as-dragging) > .as-split-gutter {
        transition: flex-basis 1s !important;
      }
    
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGl0LXRyYW5zaXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxXQUFXO01BQ2I7O01BRUE7UUFDRSxhQUFhO1FBQ2IsNkJBQTZCO1FBQzdCLGVBQWU7TUFDakI7TUFDQTtRQUNFLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtNQUNyQjtNQUNBO1FBQ0UsbUJBQW1CO01BQ3JCOztNQUVBO1FBQ0UsYUFBYTtNQUNmO01BQ0E7UUFDRSxhQUFhO01BQ2Y7TUFDQTtRQUNFLGFBQWE7TUFDZjtNQUNBO1FBQ0Usa0JBQWtCO01BQ3BCO01BQ0E7UUFDRSxhQUFhO1FBQ2IsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLHlCQUF5QjtNQUMzQjs7TUFFQTtRQUNFLHFCQUFxQjtNQUN2Qjs7TUFFQTtRQUNFLGlCQUFpQjtNQUNuQjs7TUFFQTtRQUNFLGVBQWU7TUFDakI7O01BRUE7UUFDRSxXQUFXO01BQ2I7O01BRUE7O1FBRUUsb0NBQW9DO01BQ3RDIiwiZmlsZSI6InNwbGl0LXRyYW5zaXRpb25zLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICB9XG5cbiAgICAgIC5idG5zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIH1cbiAgICAgIC5idG5zID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgICAuYnRucyA+IGRpdiA+IGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5idG5zID4gZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgICAgIGZsZXg6IDEgMSAyMCU7XG4gICAgICB9XG4gICAgICAuYnRucyA+IGRpdjpudGgtY2hpbGQoMikge1xuICAgICAgICBmbGV4OiAxIDEgNDAlO1xuICAgICAgfVxuICAgICAgLmJ0bnMgPiBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgZmxleDogMSAxIDQwJTtcbiAgICAgIH1cbiAgICAgIC5sb2dzID4gcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIH1cbiAgICAgIC5sb2dzID4gdWwge1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gICAgICB9XG5cbiAgICAgIC5hcy1zcGxpdC1hcmVhIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xuICAgICAgfVxuXG4gICAgICAuYXMtc3BsaXQtYXJlYS5hcy1taW4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgIH1cblxuICAgICAgLmFzLXNwbGl0LWFyZWEuYXMtbWF4IHtcbiAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCAuZXgyIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCAuZXgyIDo6bmctZGVlcCAuYXMtdHJhbnNpdGlvbi5hcy1pbml0Om5vdCguYXMtZHJhZ2dpbmcpID4gLmFzLXNwbGl0LWFyZWEsXG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFzLXRyYW5zaXRpb24uYXMtaW5pdDpub3QoLmFzLWRyYWdnaW5nKSA+IC5hcy1zcGxpdC1ndXR0ZXIge1xuICAgICAgICB0cmFuc2l0aW9uOiBmbGV4LWJhc2lzIDFzICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgIl19 */`, "",{"version":3,"sources":["webpack://./src/app/examples/split-transitions/split-transitions.component.ts"],"names":[],"mappings":";MACM;QACE,WAAW;MACb;;MAEA;QACE,aAAa;QACb,6BAA6B;QAC7B,eAAe;MACjB;MACA;QACE,aAAa;QACb,mBAAmB;QACnB,uBAAuB;QACvB,mBAAmB;MACrB;MACA;QACE,mBAAmB;MACrB;;MAEA;QACE,aAAa;MACf;MACA;QACE,aAAa;MACf;MACA;QACE,aAAa;MACf;MACA;QACE,kBAAkB;MACpB;MACA;QACE,aAAa;QACb,WAAW;QACX,kBAAkB;QAClB,kBAAkB;QAClB,yBAAyB;QACzB,yBAAyB;MAC3B;;MAEA;QACE,qBAAqB;MACvB;;MAEA;QACE,iBAAiB;MACnB;;MAEA;QACE,eAAe;MACjB;;MAEA;QACE,WAAW;MACb;;MAEA;;QAEE,oCAAoC;MACtC;;AAEN,ojFAAojF","sourcesContent":["\n      button {\n        margin: 4px;\n      }\n\n      .btns {\n        display: flex;\n        justify-content: space-around;\n        flex-wrap: wrap;\n      }\n      .btns > div {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-bottom: 10px;\n      }\n      .btns > div > button {\n        margin-bottom: 10px;\n      }\n\n      .btns > div:nth-child(1) {\n        flex: 1 1 20%;\n      }\n      .btns > div:nth-child(2) {\n        flex: 1 1 40%;\n      }\n      .btns > div:nth-child(3) {\n        flex: 1 1 40%;\n      }\n      .logs > p {\n        margin-bottom: 5px;\n      }\n      .logs > ul {\n        height: 200px;\n        width: 100%;\n        overflow-y: scroll;\n        overflow-x: hidden;\n        border: 1px solid #bfbfbf;\n        background-color: #e8e8e8;\n      }\n\n      .as-split-area {\n        background: lightgrey;\n      }\n\n      .as-split-area.as-min {\n        background: green;\n      }\n\n      .as-split-area.as-max {\n        background: red;\n      }\n\n      :host .ex2 button {\n        width: 100%;\n      }\n\n      :host .ex2 ::ng-deep .as-transition.as-init:not(.as-dragging) > .as-split-area,\n      :host ::ng-deep .as-transition.as-init:not(.as-dragging) > .as-split-gutter {\n        transition: flex-basis 1s !important;\n      }\n    "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ })

}]);
//# sourceMappingURL=src_app_examples_split-transitions_split-transitions_module_ts.9eff722f5cb735c5.js.map