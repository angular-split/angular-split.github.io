(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["src_app_examples_custom-gutter-style_custom-gutter-style_module_ts"],{

/***/ 710:
/*!*******************************************************************************!*\
  !*** ./src/app/examples/custom-gutter-style/custom-gutter-style.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomGutterStyleComponent: () => (/* binding */ CustomGutterStyleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _custom_gutter_style_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-gutter-style.component.scss?ngResource */ 7354);
/* harmony import */ var _custom_gutter_style_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_gutter_style_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/AComponent */ 9982);




let CustomGutterStyleComponent = class CustomGutterStyleComponent extends _ui_components_AComponent__WEBPACK_IMPORTED_MODULE_1__.AComponent {
  constructor() {
    super(...arguments);
    this.direction = 'horizontal';
  }
};
CustomGutterStyleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'sp-ex-custom-gutter-style',
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page'
  },
  template: `
    {{ testChangeDetectorRun() }}
    <div class="container">
      <sp-example-title [type]="exampleEnum.STYLE"></sp-example-title>
      <div class="split-example ex-a">
        <as-split [direction]="direction" gutterSize="35">
          <as-split-area [size]="30">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </as-split-area>
          <as-split-area [size]="70">
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
      <div class="split-example ex-b">
        <as-split [direction]="direction" restrictMove="true" gutterSize="1">
          <as-split-area [size]="30"
            ><p>
              A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A
            </p></as-split-area
          >
          <as-split-area [size]="50"
            ><p>
              B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B
            </p></as-split-area
          >
          <as-split-area [size]="20"
            ><p>
              C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C
            </p></as-split-area
          >
        </as-split>
      </div>
      <br />
      <div class="btns">
        <button class="btn btn-warning" (click)="direction = direction === 'horizontal' ? 'vertical' : 'horizontal'">
          {{ 'Toggle direction: "' + direction + '"' }}
        </button>
      </div>
    </div>
  `,
  styles: [(_custom_gutter_style_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_0___default())]
})], CustomGutterStyleComponent);

/***/ }),

/***/ 1688:
/*!****************************************************************************!*\
  !*** ./src/app/examples/custom-gutter-style/custom-gutter-style.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomGutterStyleModule: () => (/* binding */ CustomGutterStyleModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/ui.module */ 4608);
/* harmony import */ var _custom_gutter_style_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-gutter-style.component */ 710);







let CustomGutterStyleModule = class CustomGutterStyleModule {};
CustomGutterStyleModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
    path: '',
    component: _custom_gutter_style_component__WEBPACK_IMPORTED_MODULE_1__.CustomGutterStyleComponent
  }]), angular_split__WEBPACK_IMPORTED_MODULE_6__.AngularSplitModule],
  declarations: [_custom_gutter_style_component__WEBPACK_IMPORTED_MODULE_1__.CustomGutterStyleComponent]
})], CustomGutterStyleModule);

/***/ }),

/***/ 7354:
/*!********************************************************************************************!*\
  !*** ./src/app/examples/custom-gutter-style/custom-gutter-style.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host .ex-a as-split {
  overflow: inherit;
  /* Code by Chris Bracco (https://chrisbracco.com/a-simple-css-tooltip/) */
  /* Show tooltip content on hover */
}
:host .ex-a as-split ::ng-deep .as-split-gutter {
  background-color: yellow !important;
  align-items: flex-end !important;
  pointer-events: none;
}
:host .ex-a as-split ::ng-deep .as-split-gutter > .as-split-gutter-icon {
  pointer-events: all;
  transition: all 0.3s;
  opacity: 0.6;
}
:host .ex-a as-split ::ng-deep .as-split-gutter > .as-split-gutter-icon:hover {
  opacity: 1;
}
:host .ex-a as-split.as-horizontal ::ng-deep .as-split-gutter-icon {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAjCAYAAABl/XGVAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANkSURBVEiJrddfaJdlFAfwzztda6tdZNo/pZstWlmhSy8siiwhGfQP3IWRIGUEJRgFQXTbZRBeFBhlBv25iFD6s4zCqI0GaWXEhNK5tTCUsJGUWQtOF++zeH7vfnO/3/JcPef7nOd8z3ne5znPeWlCgi3BeHAieDoomlnfDNGy4HBwabAoGAieOReOW4Lu4IIMuyd4LdMXBceCJY36bamXAb7C2/g+eC5YgFPonLYr+DXZ3J/WtQZ9wfrgvEazejHYmsbtwa7g1eDC4OegPbNdGXwdtAXDwVvBm8Fg0DpnZliMsRT9n9iCbmzAPtybZfeNMutnMVawsSgz/QmbGsnsoeD1CrYs+DHYFuytzD0RTAWPZtiGYGcjZK3BgaC/gvcFI+nYL60EEsGTGbYq+CRYF7wQPBWcPxthV8qkq4K/FJwJNmdYWyLbnmGXBKeD74L7gpeDV86WYX+wP2jLsDuS460V26lgT6YXiWxV0tuDk/UOCCjKYz2OuzN4EL+ho2L+Oy6qXe54wYGkT1H/NOayG32Zh7/xkez4JzmN/Zl+PX7J9CsxMRfZXtwZtUG9X4fsD3yW6bfgaKZ3YfSsZKlKjEp7n2RA9h2TnMJQpt+sNtPuOcky5+uzAE5ipGIzVjCZ6V3YQXlY8DDea4RsBFdVsOHpQdriLzL9Guwqyq2lvK/HC4YEPcGHwQdR7nWNBL3BpxWsJRsvqLwOj0/XxTR3KOidnvw42BTcFoxWCYOlwaEGdmDaviMbb47yCv0HTGaRrA2+rCy+Lvi2UbJs3ZJgLOipIasYHQmuyPT+4I15kO0OtlXBo8HFFaPbg4XBAym6m+ZBdiTK56oG3BusyfTH0kcdD3YGy5slSn5ORPXFDrbnVTxhq/Ns50HUGeUDWiML8QOuzsGi9vbPR1aoc4JblIV1Y6TG5RzJGtnFr5H02g4HO2bs8zwk2BOsO5tBWyIbCi7/H0RFlP1kZyPGD6brMKN0NUjWE2Xf2fCCG1N0i+e2nrH2keD5enN1q35RRvYu7mqWDLfi84bJkgxi9TzIenGwWbIJWX/YhFyGY82SjeHaqNOzzybBSkymxqg5SaXsYJQt+fIo+/p8viNYkd6td4KJYO1s/ub8c0wVvx83KJ/8FuXF/wdncFhZmgawr+Cv2Xz9Cy1ParntgE8FAAAAAElFTkSuQmCC") !important;
  width: 27px !important;
  height: 35px !important;
  cursor: grab;
  margin-bottom: 5px;
}
:host .ex-a as-split.as-vertical ::ng-deep .as-split-gutter-icon {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAYAAAAgqdWEAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOxSURBVEiJtddtzNdTGAfwz7+6y91qKpaGF0UjY8JmrIw1sdj0YFMeMzYLJWaUmac1bfQiw0hkkjErTy+whrARm0zztHmYp3mayjyFkny9+J3bfv7uf3e3/p03v3Od872u8z3Xua7rnB9tamFQmB1eDhvC7+G7sCZcHw5u11o9ETkmPBBODgeGjtBZ+qeEZWFjeCKM2Z1ExodN4eKwPBzdAtc/XB6+DbPbsfCwcEI5jqXhvfBLeCacFfrvhI2R4f1wW2jU5xotFPrhMIwt38PLd198ibexHi9hbYM/ermp4ViD1Q2ubgU6LjwafgwJH4cHw5XhxDCsN4v2QGifEuDTmic6wpJC4KewIBzSwkiPR9ELQqeH7/+1ybCoEFka9qqNd4ZTwx0lZW8Pg9tFpqzxdLilSzggbA831gATwqrC+vkwP4xuJ4naWhPD5jBIuDG8HfqGGaW/KkwJA5sURxV822pFaISPwpmNsBq/YgS2YVaDD+tgnIQ5GIXzG7y1iwQGNNhak+9Dp/BpiZcVoW8NMDjMDR+UenJuSfldbs0ZFC4K65XsWd+1UBgabi3p/UqYXC9O4YhwXbghdPxPMvPCkTV5fPhFqaCTyuBp4ZvwQji2ycDk8E54N8xpjqdekrkszKrJR4Ytwlep7o1zwp+p7o+6J4aEx8I9qarwLrfimcU1eVL4vB9+wBDcjXkNbq+B9sMjuKJRlf92tYH4syaPwzrhs+KNN5o8MrSk+fFtJNFle3mYX/qdJYlmCJ8UQjObFFaEle0mUmx/HMaFPqneQe+GDiVYE/avgSeEv8IRO2m8IxwVLgn3hyk7wB4Tfk715Fib6lV4aNfkveHzJoVnw3M9LD41LA6vht/Khr4MN4XOFnqN2ua/CHemepb8A7gmrK3JI4pXprYwODJV+V4TFtZInB36tNpA0V0YtpQC+t+3VJge3qzJ0wrrvt1gO8K6cs57hNfDi6nd9C1IDC0xuK3VJruAo4snpoc9w5Ph2hbY21JdDQPCXeWI9tiB7WHF8xtSVfTWRGpKTxV3p7hxeDeYS0tsjC1BuDHs08LeQYXs5lTPkEWtsN0pd4bVhczD3cxflao6n1fkh8KCbnBjUv2ObE91r81sFcw9Edq7kJlaGxseVoat4cLa+DvN6ZvqV2VLOcaJvSbQDaGvS0BOS3UrbyqZM74J91q4uSZfUDby+I5iqLdkJqSqyNtTPSvmhgHd4OaWzFiWqtZsLTVjh6m9W1qqMr6kBPRH4Yx22P0bNcolauCjiTYAAAAASUVORK5CYII=") !important;
  width: 35px !important;
  height: 29px !important;
  cursor: grab;
  margin-right: 5px;
}
:host .ex-a as-split ::ng-deep .as-split-gutter > .as-split-gutter-icon {
  position: relative;
  z-index: 2;
  /* Hide the tooltip content by default */
  /* Position tooltip above the element */
  /* Triangle hack to make tooltip look like a speech bubble */
}
:host .ex-a as-split ::ng-deep .as-split-gutter > .as-split-gutter-icon:before, :host .ex-a as-split ::ng-deep .as-split-gutter > .as-split-gutter-icon:after {
  visibility: hidden;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
  opacity: 0;
  pointer-events: none;
}
:host .ex-a as-split ::ng-deep .as-split-gutter > .as-split-gutter-icon:before {
  position: absolute;
  bottom: 110%;
  left: 50%;
  margin-bottom: 5px;
  margin-left: -80px;
  padding: 7px;
  width: 160px;
  border-radius: 3px;
  background-color: hsla(0, 0%, 20%, 0.9);
  color: #fff;
  content: "Drag me if you can!";
  text-align: center;
  font-size: 14px;
  line-height: 1.2;
}
:host .ex-a as-split ::ng-deep .as-split-gutter > .as-split-gutter-icon:after {
  position: absolute;
  bottom: 110%;
  left: 50%;
  margin-left: -5px;
  width: 0;
  border-top: 5px solid hsla(0, 0%, 20%, 0.9);
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  content: " ";
  font-size: 0;
  line-height: 0;
}
:host .ex-a as-split ::ng-deep .as-split-gutter.as-dragged > .as-split-gutter-icon,
:host .ex-a as-split ::ng-deep .as-split-gutter > .as-split-gutter-icon:hover {
  opacity: 1;
}
:host .ex-a as-split ::ng-deep .as-split-gutter.as-dragged > .as-split-gutter-icon:before, :host .ex-a as-split ::ng-deep .as-split-gutter.as-dragged > .as-split-gutter-icon:after,
:host .ex-a as-split ::ng-deep .as-split-gutter > .as-split-gutter-icon:hover:before,
:host .ex-a as-split ::ng-deep .as-split-gutter > .as-split-gutter-icon:hover:after {
  visibility: visible;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=100)";
  opacity: 1;
}
:host .ex-b as-split .as-split-area {
  background-color: lightgrey;
}
:host .ex-b as-split .as-split-area > p {
  padding: 5px;
}
:host .ex-b as-split ::ng-deep .as-split-gutter {
  background-color: grey !important;
  position: relative;
}
:host .ex-b as-split ::ng-deep .as-split-gutter-icon {
  background-image: none !important;
  background-color: black;
  transition: opacity 0.3s;
  opacity: 0;
  position: absolute;
}
:host .ex-b as-split ::ng-deep .as-split-gutter.as-dragged .as-split-gutter-icon,
:host .ex-b as-split ::ng-deep .as-split-gutter-icon:hover {
  opacity: 0.1;
}
:host .ex-b as-split.as-horizontal ::ng-deep .as-split-gutter-icon {
  width: 17px !important;
  left: -8px;
  right: 8px;
}
:host .ex-b as-split.as-vertical ::ng-deep .as-split-gutter-icon {
  height: 17px !important;
  top: -8px;
  bottom: 8px;
}
:host .btns {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1ndXR0ZXItc3R5bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtFQWtDQSx5RUFBQTtFQWtEQSxrQ0FBQTtBQWxGSjtBQUFJO0VBQ0UsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FBRU47QUFBTTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBRVI7QUFBUTtFQUNFLFVBQUE7QUFFVjtBQUdJO0VBQ0UsODJDQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUROO0FBSUk7RUFDRSxzOUNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRk47QUFPSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLHdDQUFBO0VBVUEsdUNBQUE7RUFrQkEsNERBQUE7QUFoQ047QUFLTTtFQUVFLGtCQUFBO0VBQ0EsZ0VBQUE7RUFDQSw2REFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQUpSO0FBUU07RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTlI7QUFVTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7RUFDQSwyQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFSUjtBQWFJOztFQUVFLFVBQUE7QUFYTjtBQWFNOzs7RUFFRSxtQkFBQTtFQUNBLGtFQUFBO0VBQ0EsK0RBQUE7RUFDQSxVQUFBO0FBVlI7QUFnQkk7RUFDRSwyQkFBQTtBQWROO0FBZ0JNO0VBQ0UsWUFBQTtBQWRSO0FBa0JJO0VBQ0UsaUNBQUE7RUFDQSxrQkFBQTtBQWhCTjtBQW1CSTtFQUNFLGlDQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQWpCTjtBQW9CSTs7RUFFRSxZQUFBO0FBbEJOO0FBc0JNO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQXBCUjtBQXdCTTtFQUNFLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUF0QlI7QUEyQkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUF6QkoiLCJmaWxlIjoiY3VzdG9tLWd1dHRlci1zdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmV4LWEgYXMtc3BsaXQge1xuICAgIG92ZXJmbG93OiBpbmhlcml0O1xuXG4gICAgOjpuZy1kZWVwIC5hcy1zcGxpdC1ndXR0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAmID4gLmFzLXNwbGl0LWd1dHRlci1pY29uIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5hcy1ob3Jpem9udGFsIDo6bmctZGVlcCAuYXMtc3BsaXQtZ3V0dGVyLWljb24ge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJzQUFBQWpDQVlBQUFCbC9YR1ZBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQU94QUFBRHNRQmxTc09Hd0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFOa1NVUkJWRWlKcmRkZmFKZGxGQWZ3enp0ZGE2dGRaTm8vcFpzdFdsbWhTeThzaWl3aEdmUVAzSVdSSUdVRUpSZ0ZRWFRiWlJCZUZCaGxCdjI1aUZENnM0ekNxSTBHYVdYRWhOSzV0VENVc0pHVVdRdE9GKyt6ZUg3dmZuTy8zL0pjUGVmN25PZDh6M25lNXpuUGVXbENnaTNCZUhBaWVEb29tbG5mRE5HeTRIQndhYkFvR0FpZU9SZU9XNEx1NElJTXV5ZDRMZE1YQmNlQ0pZMzZiYW1YQWI3QzIvZytlQzVZZ0ZQb25MWXIrRFhaM0ovV3RRWjl3ZnJndkVhemVqSFltc2J0d2E3ZzFlREM0T2VnUGJOZEdYd2R0QVhEd1Z2Qm04RmcwRHBuWmxpTXNSVDluOWlDYm16QVB0eWJaZmVOTXV0bk1WYXdzU2d6L1FtYkdzbnNvZUQxQ3JZcytESFlGdXl0ekQwUlRBV1BadGlHWUdjalpLM0JnYUMvZ3ZjRkkrbllMNjBFRXNHVEdiWXErQ1JZRjd3UVBCV2NQeHRoVjhxa3E0Sy9GSndKTm1kWVd5TGJubUdYQktlRDc0TDdncGVEVjg2V1lYK3dQMmpMc0R1UzQ2MFYyNmxnVDZZWGlXeFYwdHVEay9VT0NDaktZejJPdXpONEVMK2hvMkwrT3k2cVhlNTR3WUdrVDFIL05PYXlHMzJaaDcveGtlejRKem1OL1psK1BYN0o5Q3N4TVJmWlh0d1p0VUc5WDRmc0QzeVc2YmZnYUtaM1lmU3NaS2xLakVwN24yUkE5aDJUbk1KUXB0K3NOdFB1T2NreTUrdXpBRTVpcEdJelZqQ1o2VjNZUVhsWThERGVhNFJzQkZkVnNPSHBRZHJpTHpMOUd1d3F5cTJsdksvSEM0WUVQY0dId1FkUjduV05CTDNCcHhXc0pSc3ZxTHdPajAvWHhUUjNLT2lkbnZ3NDJCVGNGb3hXQ1lPbHdhRUdkbURhdmlNYmI0N3lDdjBIVEdhUnJBMityQ3krTHZpMlViSnMzWkpnTE9pcElhc1lIUW11eVBUKzRJMTVrTzBPdGxYQm84SEZGYVBiZzRYQkF5bTZtK1pCZGlUSzU2b0czQnVzeWZUSDBrY2REM1lHeTVzbFNuNU9SUFhGRHJiblZUeGhxL05zNTBIVUdlVURXaU1MOFFPdXpzR2k5dmJQUjFhb2M0SmJsSVYxWTZURzVSekpHdG5GcjVIMDJnNEhPMmJzOHp3azJCT3NPNXRCV3lJYkNpNy9IMFJGbFAxa1p5UEdENmJyTUtOME5ValdFMlhmMmZDQ0cxTjBpK2UybnJIMmtlRDVlbk4xcTM1UlJ2WXU3bXFXRExmaTg0YkprZ3hpOVR6SWVuR3dXYklKV1gvWWhGeUdZODJTamVIYXFOT3p6eWJCU2t5bXhxZzVTYVhzWUpRdCtmSW8rL3A4dmlOWWtkNnRkNEtKWU8xcy91YjhjMHdWdng4M0tKLzhGdVhGL3dkbmNGaFptZ2F3citDdjJYejlDeTFQYXJudGdFOEZBQUFBQUVsRlRrU3VRbUNDJykgIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAyN3B4ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgICAgIGN1cnNvcjogZ3JhYjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAmLmFzLXZlcnRpY2FsIDo6bmctZGVlcCAuYXMtc3BsaXQtZ3V0dGVyLWljb24ge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNNQUFBQWRDQVlBQUFBZ3FkV0VBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQU94QUFBRHNRQmxTc09Hd0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFPeFNVUkJWRWlKdGRkdHpOZFRHQWZ3ejcrNnk5MXFLcGFHRjBValk4Sm1ySXcxc2RqMFlGTWVNellMSldhVW1hYzFiZlFpdzBoa2tqRXJUeSt3aHJBUm0wenp0SG1ZcDNtYXlqeUZrbnk5K0ozYmZ2N3VmM2UzL3AwM3YzT2Q4NzJ1OHozWHVhN3JuQjl0YW1GUW1CMWVEaHZDNytHN3NDWmNIdzV1MTFvOUVUa21QQkJPRGdlR2p0QlorcWVFWldGamVDS00yWjFFeG9kTjRlS3dQQnpkQXRjL1hCNitEYlBic2ZDd2NFSTVqcVhodmZCTGVDYWNGZnJ2aEkyUjRmMXdXMmpVNXhvdEZQcmhNSXd0MzhQTGQxOThpYmV4SGk5aGJZTS9lcm1wNFZpRDFRMnViZ1U2TGp3YWZnd0pINGNIdzVYaHhEQ3NONHYyUUdpZkV1RFRtaWM2d3BKQzRLZXdJQnpTd2tpUFI5RUxRcWVINy8rMXliQ29FRmthOXFxTmQ0WlR3eDBsWlc4UGc5dEZwcXp4ZExpbFN6Z2diQTgzMWdBVHdxckMrdmt3UDR4dUo0bmFXaFBENWpCSXVERzhIZnFHR2FXL0trd0pBNXNVUnhWODIycEZhSVNQd3BtTnNCcS9ZZ1MyWVZhREQrdGduSVE1R0lYekc3eTFpd1FHTk5oYWsrOURwL0JwaVpjVm9XOE5NRGpNRFIrVWVuSnVTZmxkYnMwWkZDNEs2NVhzV2QrMVVCZ2FiaTNwL1VxWVhDOU80WWh3WGJnaGRQeFBNdlBDa1RWNWZQaEZxYUNUeXVCcDRadndRamkyeWNEazhFNTROOHhwanFkZWtya3N6S3JKUjRZdHdsZXA3bzF6d3ArcDdvKzZKNGFFeDhJOXFhcndMcmZpbWNVMWVWTDR2Qjkrd0JEY2pYa05icStCOXNNanVLSlJsZjkydFlINHN5YVB3enJocytLTk41bzhNclNrK2ZGdEpORmxlM21ZWC9xZEpZbG1DSjhVUWpPYkZGYUVsZTBtVW14L0hNYUZQcW5lUWUrR0RpVllFL2F2Z1NlRXY4SVJPMm04SXh3VkxnbjNoeWs3d0I0VGZrNzE1RmliNmxWNGFOZmt2ZUh6Sm9WbnczTTlMRDQxTEE2dmh0L0tocjRNTjRYT0ZucU4ydWEvQ0hlbWVwYjhBN2dtckszSkk0cFhwcll3T0RKVitWNFRGdFpJbkIzNnROcEEwVjBZdHBRQyt0KzNWSmdlM3F6SjB3cnJ2dDFnTzhLNmNzNTdoTmZEaTZuZDlDMUlEQzB4dUszVkpydUFvNHNucG9jOXc1UGgyaGJZMjFKZERRUENYZVdJOXRpQjdXSEY4eHRTVmZUV1JHcEtUeFYzcDdoeGVEZVlTMHRzakMxQnVESHMwOExlUVlYczVsVFBrRVd0c04wcGQ0YlZoY3pEM2N4ZmxhbzZuMWZraDhLQ2JuQmpVdjJPYkU5MXI4MXNGY3c5RWRxN2tKbGFHeHNlVm9hdDRjTGErRHZONlp2cVYyVkxPY2FKdlNiUURhR3ZTMEJPUzNVcmJ5cVpNNzRKOTFxNHVTWmZVRGJ5K0k1aXFMZGtKcVNxeU50VFBTdm1oZ0hkNE9hV3pGaVdxdFpzTFRWamg2bTlXMXFxTXI2a0JQUkg0WXgyMlAwYk5jb2xhdUNqaVRZQUFBQUFTVVZPUks1Q1lJST0nKSAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IDM1cHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMjlweCAhaW1wb3J0YW50O1xuICAgICAgY3Vyc29yOiBncmFiO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuXG4gICAgLyogQ29kZSBieSBDaHJpcyBCcmFjY28gKGh0dHBzOi8vY2hyaXNicmFjY28uY29tL2Etc2ltcGxlLWNzcy10b29sdGlwLykgKi9cblxuICAgIDo6bmctZGVlcCAuYXMtc3BsaXQtZ3V0dGVyID4gLmFzLXNwbGl0LWd1dHRlci1pY29uIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDI7XG5cbiAgICAgIC8qIEhpZGUgdGhlIHRvb2x0aXAgY29udGVudCBieSBkZWZhdWx0ICovXG4gICAgICAmOmJlZm9yZSxcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIC1tcy1maWx0ZXI6ICdwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKSc7XG4gICAgICAgIGZpbHRlcjogJ3Byb2dpZDogRFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKSc7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuXG4gICAgICAvKiBQb3NpdGlvbiB0b29sdGlwIGFib3ZlIHRoZSBlbGVtZW50ICovXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAxMTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC04MHB4O1xuICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAyMCUsIDAuOSk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBjb250ZW50OiAnRHJhZyBtZSBpZiB5b3UgY2FuISc7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgfVxuXG4gICAgICAvKiBUcmlhbmdsZSBoYWNrIHRvIG1ha2UgdG9vbHRpcCBsb29rIGxpa2UgYSBzcGVlY2ggYnViYmxlICovXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDExMCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQgaHNsYSgwLCAwJSwgMjAlLCAwLjkpO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICBmb250LXNpemU6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIFNob3cgdG9vbHRpcCBjb250ZW50IG9uIGhvdmVyICovXG4gICAgOjpuZy1kZWVwIC5hcy1zcGxpdC1ndXR0ZXIuYXMtZHJhZ2dlZCA+IC5hcy1zcGxpdC1ndXR0ZXItaWNvbixcbiAgICA6Om5nLWRlZXAgLmFzLXNwbGl0LWd1dHRlciA+IC5hcy1zcGxpdC1ndXR0ZXItaWNvbjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAmOmJlZm9yZSxcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAtbXMtZmlsdGVyOiAncHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MTAwKSc7XG4gICAgICAgIGZpbHRlcjogJ3Byb2dpZDogRFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0xMDApJztcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZXgtYiBhcy1zcGxpdCB7XG4gICAgLmFzLXNwbGl0LWFyZWEge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuXG4gICAgICAmID4gcCB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICA6Om5nLWRlZXAgLmFzLXNwbGl0LWd1dHRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwIC5hcy1zcGxpdC1ndXR0ZXItaWNvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwIC5hcy1zcGxpdC1ndXR0ZXIuYXMtZHJhZ2dlZCAuYXMtc3BsaXQtZ3V0dGVyLWljb24sXG4gICAgOjpuZy1kZWVwIC5hcy1zcGxpdC1ndXR0ZXItaWNvbjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwLjE7XG4gICAgfVxuXG4gICAgJi5hcy1ob3Jpem9udGFsIHtcbiAgICAgIDo6bmctZGVlcCAuYXMtc3BsaXQtZ3V0dGVyLWljb24ge1xuICAgICAgICB3aWR0aDogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICBsZWZ0OiAtOHB4O1xuICAgICAgICByaWdodDogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAmLmFzLXZlcnRpY2FsIHtcbiAgICAgIDo6bmctZGVlcCAuYXMtc3BsaXQtZ3V0dGVyLWljb24ge1xuICAgICAgICBoZWlnaHQ6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgdG9wOiAtOHB4O1xuICAgICAgICBib3R0b206IDhweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYnRucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxufVxuIl19 */`, "",{"version":3,"sources":["webpack://./src/app/examples/custom-gutter-style/custom-gutter-style.component.scss"],"names":[],"mappings":"AACE;EACE,iBAAA;EAkCA,yEAAA;EAkDA,kCAAA;AAlFJ;AAAI;EACE,mCAAA;EACA,gCAAA;EACA,oBAAA;AAEN;AAAM;EACE,mBAAA;EACA,oBAAA;EACA,YAAA;AAER;AAAQ;EACE,UAAA;AAEV;AAGI;EACE,82CAAA;EACA,sBAAA;EACA,uBAAA;EACA,YAAA;EACA,kBAAA;AADN;AAII;EACE,s9CAAA;EACA,sBAAA;EACA,uBAAA;EACA,YAAA;EACA,iBAAA;AAFN;AAOI;EACE,kBAAA;EACA,UAAA;EAEA,wCAAA;EAUA,uCAAA;EAkBA,4DAAA;AAhCN;AAKM;EAEE,kBAAA;EACA,gEAAA;EACA,6DAAA;EACA,UAAA;EACA,oBAAA;AAJR;AAQM;EACE,kBAAA;EACA,YAAA;EACA,SAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,uCAAA;EACA,WAAA;EACA,8BAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;AANR;AAUM;EACE,kBAAA;EACA,YAAA;EACA,SAAA;EACA,iBAAA;EACA,QAAA;EACA,2CAAA;EACA,mCAAA;EACA,kCAAA;EACA,YAAA;EACA,YAAA;EACA,cAAA;AARR;AAaI;;EAEE,UAAA;AAXN;AAaM;;;EAEE,mBAAA;EACA,kEAAA;EACA,+DAAA;EACA,UAAA;AAVR;AAgBI;EACE,2BAAA;AAdN;AAgBM;EACE,YAAA;AAdR;AAkBI;EACE,iCAAA;EACA,kBAAA;AAhBN;AAmBI;EACE,iCAAA;EACA,uBAAA;EACA,wBAAA;EACA,UAAA;EACA,kBAAA;AAjBN;AAoBI;;EAEE,YAAA;AAlBN;AAsBM;EACE,sBAAA;EACA,UAAA;EACA,UAAA;AApBR;AAwBM;EACE,uBAAA;EACA,SAAA;EACA,WAAA;AAtBR;AA2BE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;AAzBJ;AACA,orUAAorU","sourcesContent":[":host {\n  .ex-a as-split {\n    overflow: inherit;\n\n    ::ng-deep .as-split-gutter {\n      background-color: yellow !important;\n      align-items: flex-end !important;\n      pointer-events: none;\n\n      & > .as-split-gutter-icon {\n        pointer-events: all;\n        transition: all 0.3s;\n        opacity: 0.6;\n\n        &:hover {\n          opacity: 1;\n        }\n      }\n    }\n\n    &.as-horizontal ::ng-deep .as-split-gutter-icon {\n      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAjCAYAAABl/XGVAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANkSURBVEiJrddfaJdlFAfwzztda6tdZNo/pZstWlmhSy8siiwhGfQP3IWRIGUEJRgFQXTbZRBeFBhlBv25iFD6s4zCqI0GaWXEhNK5tTCUsJGUWQtOF++zeH7vfnO/3/JcPef7nOd8z3ne5znPeWlCgi3BeHAieDoomlnfDNGy4HBwabAoGAieOReOW4Lu4IIMuyd4LdMXBceCJY36bamXAb7C2/g+eC5YgFPonLYr+DXZ3J/WtQZ9wfrgvEazejHYmsbtwa7g1eDC4OegPbNdGXwdtAXDwVvBm8Fg0DpnZliMsRT9n9iCbmzAPtybZfeNMutnMVawsSgz/QmbGsnsoeD1CrYs+DHYFuytzD0RTAWPZtiGYGcjZK3BgaC/gvcFI+nYL60EEsGTGbYq+CRYF7wQPBWcPxthV8qkq4K/FJwJNmdYWyLbnmGXBKeD74L7gpeDV86WYX+wP2jLsDuS460V26lgT6YXiWxV0tuDk/UOCCjKYz2OuzN4EL+ho2L+Oy6qXe54wYGkT1H/NOayG32Zh7/xkez4JzmN/Zl+PX7J9CsxMRfZXtwZtUG9X4fsD3yW6bfgaKZ3YfSsZKlKjEp7n2RA9h2TnMJQpt+sNtPuOcky5+uzAE5ipGIzVjCZ6V3YQXlY8DDea4RsBFdVsOHpQdriLzL9Guwqyq2lvK/HC4YEPcGHwQdR7nWNBL3BpxWsJRsvqLwOj0/XxTR3KOidnvw42BTcFoxWCYOlwaEGdmDaviMbb47yCv0HTGaRrA2+rCy+Lvi2UbJs3ZJgLOipIasYHQmuyPT+4I15kO0OtlXBo8HFFaPbg4XBAym6m+ZBdiTK56oG3BusyfTH0kcdD3YGy5slSn5ORPXFDrbnVTxhq/Ns50HUGeUDWiML8QOuzsGi9vbPR1aoc4JblIV1Y6TG5RzJGtnFr5H02g4HO2bs8zwk2BOsO5tBWyIbCi7/H0RFlP1kZyPGD6brMKN0NUjWE2Xf2fCCG1N0i+e2nrH2keD5enN1q35RRvYu7mqWDLfi84bJkgxi9TzIenGwWbIJWX/YhFyGY82SjeHaqNOzzybBSkymxqg5SaXsYJQt+fIo+/p8viNYkd6td4KJYO1s/ub8c0wVvx83KJ/8FuXF/wdncFhZmgawr+Cv2Xz9Cy1ParntgE8FAAAAAElFTkSuQmCC') !important;\n      width: 27px !important;\n      height: 35px !important;\n      cursor: grab;\n      margin-bottom: 5px;\n    }\n\n    &.as-vertical ::ng-deep .as-split-gutter-icon {\n      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAYAAAAgqdWEAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOxSURBVEiJtddtzNdTGAfwz7+6y91qKpaGF0UjY8JmrIw1sdj0YFMeMzYLJWaUmac1bfQiw0hkkjErTy+whrARm0zztHmYp3mayjyFkny9+J3bfv7uf3e3/p03v3Od872u8z3Xua7rnB9tamFQmB1eDhvC7+G7sCZcHw5u11o9ETkmPBBODgeGjtBZ+qeEZWFjeCKM2Z1ExodN4eKwPBzdAtc/XB6+DbPbsfCwcEI5jqXhvfBLeCacFfrvhI2R4f1wW2jU5xotFPrhMIwt38PLd198ibexHi9hbYM/ermp4ViD1Q2ubgU6LjwafgwJH4cHw5XhxDCsN4v2QGifEuDTmic6wpJC4KewIBzSwkiPR9ELQqeH7/+1ybCoEFka9qqNd4ZTwx0lZW8Pg9tFpqzxdLilSzggbA831gATwqrC+vkwP4xuJ4naWhPD5jBIuDG8HfqGGaW/KkwJA5sURxV822pFaISPwpmNsBq/YgS2YVaDD+tgnIQ5GIXzG7y1iwQGNNhak+9Dp/BpiZcVoW8NMDjMDR+UenJuSfldbs0ZFC4K65XsWd+1UBgabi3p/UqYXC9O4YhwXbghdPxPMvPCkTV5fPhFqaCTyuBp4ZvwQji2ycDk8E54N8xpjqdekrkszKrJR4Ytwlep7o1zwp+p7o+6J4aEx8I9qarwLrfimcU1eVL4vB9+wBDcjXkNbq+B9sMjuKJRlf92tYH4syaPwzrhs+KNN5o8MrSk+fFtJNFle3mYX/qdJYlmCJ8UQjObFFaEle0mUmx/HMaFPqneQe+GDiVYE/avgSeEv8IRO2m8IxwVLgn3hyk7wB4Tfk715Fib6lV4aNfkveHzJoVnw3M9LD41LA6vht/Khr4MN4XOFnqN2ua/CHemepb8A7gmrK3JI4pXprYwODJV+V4TFtZInB36tNpA0V0YtpQC+t+3VJge3qzJ0wrrvt1gO8K6cs57hNfDi6nd9C1IDC0xuK3VJruAo4snpoc9w5Ph2hbY21JdDQPCXeWI9tiB7WHF8xtSVfTWRGpKTxV3p7hxeDeYS0tsjC1BuDHs08LeQYXs5lTPkEWtsN0pd4bVhczD3cxflao6n1fkh8KCbnBjUv2ObE91r81sFcw9Edq7kJlaGxseVoat4cLa+DvN6ZvqV2VLOcaJvSbQDaGvS0BOS3UrbyqZM74J91q4uSZfUDby+I5iqLdkJqSqyNtTPSvmhgHd4OaWzFiWqtZsLTVjh6m9W1qqMr6kBPRH4Yx22P0bNcolauCjiTYAAAAASUVORK5CYII=') !important;\n      width: 35px !important;\n      height: 29px !important;\n      cursor: grab;\n      margin-right: 5px;\n    }\n\n    /* Code by Chris Bracco (https://chrisbracco.com/a-simple-css-tooltip/) */\n\n    ::ng-deep .as-split-gutter > .as-split-gutter-icon {\n      position: relative;\n      z-index: 2;\n\n      /* Hide the tooltip content by default */\n      &:before,\n      &:after {\n        visibility: hidden;\n        -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';\n        filter: 'progid: DXImageTransform.Microsoft.Alpha(Opacity=0)';\n        opacity: 0;\n        pointer-events: none;\n      }\n\n      /* Position tooltip above the element */\n      &:before {\n        position: absolute;\n        bottom: 110%;\n        left: 50%;\n        margin-bottom: 5px;\n        margin-left: -80px;\n        padding: 7px;\n        width: 160px;\n        border-radius: 3px;\n        background-color: hsla(0, 0%, 20%, 0.9);\n        color: #fff;\n        content: 'Drag me if you can!';\n        text-align: center;\n        font-size: 14px;\n        line-height: 1.2;\n      }\n\n      /* Triangle hack to make tooltip look like a speech bubble */\n      &:after {\n        position: absolute;\n        bottom: 110%;\n        left: 50%;\n        margin-left: -5px;\n        width: 0;\n        border-top: 5px solid hsla(0, 0%, 20%, 0.9);\n        border-right: 5px solid transparent;\n        border-left: 5px solid transparent;\n        content: ' ';\n        font-size: 0;\n        line-height: 0;\n      }\n    }\n\n    /* Show tooltip content on hover */\n    ::ng-deep .as-split-gutter.as-dragged > .as-split-gutter-icon,\n    ::ng-deep .as-split-gutter > .as-split-gutter-icon:hover {\n      opacity: 1;\n\n      &:before,\n      &:after {\n        visibility: visible;\n        -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';\n        filter: 'progid: DXImageTransform.Microsoft.Alpha(Opacity=100)';\n        opacity: 1;\n      }\n    }\n  }\n\n  .ex-b as-split {\n    .as-split-area {\n      background-color: lightgrey;\n\n      & > p {\n        padding: 5px;\n      }\n    }\n\n    ::ng-deep .as-split-gutter {\n      background-color: grey !important;\n      position: relative;\n    }\n\n    ::ng-deep .as-split-gutter-icon {\n      background-image: none !important;\n      background-color: black;\n      transition: opacity 0.3s;\n      opacity: 0;\n      position: absolute;\n    }\n\n    ::ng-deep .as-split-gutter.as-dragged .as-split-gutter-icon,\n    ::ng-deep .as-split-gutter-icon:hover {\n      opacity: 0.1;\n    }\n\n    &.as-horizontal {\n      ::ng-deep .as-split-gutter-icon {\n        width: 17px !important;\n        left: -8px;\n        right: 8px;\n      }\n    }\n    &.as-vertical {\n      ::ng-deep .as-split-gutter-icon {\n        height: 17px !important;\n        top: -8px;\n        bottom: 8px;\n      }\n    }\n  }\n\n  .btns {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ })

}]);
//# sourceMappingURL=src_app_examples_custom-gutter-style_custom-gutter-style_module_ts.f863513954a5e803.js.map