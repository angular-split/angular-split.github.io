"use strict";
(self["webpackChunkangular_split_app"] = self["webpackChunkangular_split_app"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ui_components_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/components/topbar.component */ 1444);
var _class;





class AppComponent {
  constructor(router) {
    this.router = router;
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)).subscribe(event => {
      window.scrollTo(0, 0);
    });
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["sp-app-root"]],
  decls: 3,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "sp-topbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_ui_components_topbar_component__WEBPACK_IMPORTED_MODULE_0__.TopbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
  styles: ["[_nghost-%COMP%] {\n        display: block;\n        width: 100%;\n        height: 100%;\n      }\n      [_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n        padding-top: 54px;\n        width: 100%;\n        height: 100%;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZO01BQ2Q7TUFDQTtRQUNFLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsWUFBWTtNQUNkIiwiZmlsZSI6ImFwcC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICA6aG9zdCA+IGRpdiB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1NHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxjQUFjO1FBQ2QsV0FBVztRQUNYLFlBQVk7TUFDZDtNQUNBO1FBQ0UsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxZQUFZO01BQ2Q7O0FBRU4sZ2xCQUFnbEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICA6aG9zdCA+IGRpdiB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1NHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/ui.module */ 4608);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;









const routes = [{
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 4320)).then(m => m.HomeModule)
}, {
  path: 'changelog',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_changelog_changelog_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./changelog/changelog.module */ 3983)).then(m => m.ChangelogModule)
}, {
  path: 'documentation',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_documentation_documentation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./documentation/documentation.module */ 6630)).then(m => m.DocumentationModule)
}, {
  path: 'examples',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_examples_examples_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./examples/examples.module */ 9296)).then(m => m.ExamplesModule)
}];
class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule]
  });
})();

/***/ }),

/***/ 2807:
/*!*******************************************!*\
  !*** ./src/app/examples/example-types.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExampleEnum: () => (/* binding */ ExampleEnum)
/* harmony export */ });
var ExampleEnum;
(function (ExampleEnum) {
  ExampleEnum["CLICK"] = "click";
  ExampleEnum["CODE"] = "code";
  ExampleEnum["COLLAPSE"] = "collapse";
  ExampleEnum["DIR"] = "dir";
  ExampleEnum["GEEK"] = "geek";
  ExampleEnum["IFRAME"] = "iframe";
  ExampleEnum["MINMAX"] = "minmax";
  ExampleEnum["NESTED"] = "nested";
  ExampleEnum["SIMPLE"] = "simple";
  ExampleEnum["STYLE"] = "style";
  ExampleEnum["SYNC"] = "sync";
  ExampleEnum["TOGGLE"] = "toggle";
  ExampleEnum["TRANSITION"] = "transition";
  ExampleEnum["WORKSPACE"] = "workspace";
  ExampleEnum["GLOBAL"] = "global";
})(ExampleEnum || (ExampleEnum = {}));

/***/ }),

/***/ 1020:
/*!*********************************************!*\
  !*** ./src/app/examples/examples.routes.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exampleRoutes: () => (/* binding */ exampleRoutes)
/* harmony export */ });
/* harmony import */ var _example_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example-types */ 2807);

const srcUrlBase = 'https://github.com/angular-split/angular-split/blob/main/';
const srcUrlBaseApp = `${srcUrlBase}src/app/examples`;
const exampleRoutes = [{
  data: {
    type: _example_types__WEBPACK_IMPORTED_MODULE_0__.ExampleEnum.SIMPLE,
    label: 'Simple split',
    srcUrl: `${srcUrlBaseApp}/simple-split/simple-split.component.ts`
  },
  path: 'simple-split',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_examples_simple-split_simple-split_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./simple-split/simple-split.module */ 4603)).then(m => m.SimpleSplitModule)
}, {
  data: {
    type: _example_types__WEBPACK_IMPORTED_MODULE_0__.ExampleEnum.MINMAX,
    label: 'Split with minSize & maxSize',
    srcUrl: `${srcUrlBaseApp}/min-max-split/min-max-split.component.ts`
  },
  path: 'min-max-split',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_examples_min-max-split_min-max-split_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./min-max-split/min-max-split.module */ 5527)).then(m => m.MinMaxSplitModule)
}, {
  data: {
    type: _example_types__WEBPACK_IMPORTED_MODULE_0__.ExampleEnum.NESTED,
    label: 'Nested splits',
    srcUrl: `${srcUrlBaseApp}/nested-split/nested-split.component.ts`
  },
  path: 'nested-split',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_examples_nested-split_nested-split_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./nested-split/nested-split.module */ 589)).then(m => m.NestedSplitModule)
}, {
  data: {
    type: _example_types__WEBPACK_IMPORTED_MODULE_0__.ExampleEnum.IFRAME,
    label: 'Split containing iframes',
    srcUrl: `${srcUrlBaseApp}/iframes/iframes.component.ts`
  },
  path: 'iframes',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_examples_iframes_iframes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./iframes/iframes.module */ 6411)).then(m => m.IframesModule)
}, {
  data: {
    type: _example_types__WEBPACK_IMPORTED_MODULE_0__.ExampleEnum.TRANSITION,
    label: 'Split with transitions',
    srcUrl: `${srcUrlBaseApp}/split-transitions/split-transitions.component.ts`
  },
  path: 'split-transitions',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_examples_split-transitions_split-transitions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./split-transitions/split-transitions.module */ 5542)).then(m => m.SplitTransitionsModule)
}, {
  data: {
    type: _example_types__WEBPACK_IMPORTED_MODULE_0__.ExampleEnum.SYNC,
    label: 'Split synchronized',
    srcUrl: `${srcUrlBaseApp}/sync-split/sync-split.component.ts`
  },
  path: 'sync-split',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_examples_sync-split_sync-split_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sync-split/sync-split.module */ 1131)).then(m => m.SyncSplitModule)
}, {
  data: {
    type: _example_types__WEBPACK_IMPORTED_MODULE_0__.ExampleEnum.STYLE,
    label: 'Split with custom gutter style',
    srcUrl: `${srcUrlBaseApp}/custom-gutter-style/custom-gutter-style.component.ts`
  },
  path: 'custom-gutter-style',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_examples_custom-gutter-style_custom-gutter-style_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./custom-gutter-style/custom-gutter-style.module */ 1688)).then(m => m.CustomGutterStyleModule)
}, {
  data: {
    type: _example_types__WEBPACK_IMPORTED_MODULE_0__.ExampleEnum.TOGGLE,
    label: 'Toggling areas using <code>[visible]</code> and <code>*ngIf</code>',
    srcUrl: `${srcUrlBaseApp}/toggling-dom-and-visibility/toggling-dom-and-visibility.component.ts`
  },
  path: 'toggling-dom-and-visibility',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_examples_toggling-dom-and-visibility_toggling-dom-and-visibility_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./toggling-dom-and-visibility/toggling-dom-and-visibility.module */ 3860)).then(m => m.TogglingDomAndVisibilityModule)
}, {
  data: {
    type: _example_types__WEBPACK_IMPORTED_MODULE_0__.ExampleEnum.COLLAPSE,
    label: 'Collapse/Expand a specific area',
    srcUrl: `${srcUrlBaseApp}/collapse-expand/collapse-expand.component.ts`
  },
  path: 'collapse-expand',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_examples_collapse-expand_collapse-expand_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./collapse-expand/collapse-expand.module */ 3689)).then(m => m.CollapseExpandModule)
}, {
  data: {
    type: _example_types__WEBPACK_IMPORTED_MODULE_0__.ExampleEnum.CLICK,
    label: 'Roll/unroll area on <code>(gutterClick)</code> event',
    srcUrl: `${srcUrlBaseApp}/gutter-click-roll-unroll/gutter-click-roll-unroll.component.ts`
  },
  path: 'gutter-click-roll-unroll',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_examples_gutter-click-roll-unroll_gutter-click-roll-unroll_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./gutter-click-roll-unroll/gutter-click-roll-unroll.module */ 6982)).then(m => m.GutterClickRollUnrollModule)
}, {
  data: {
    type: _example_types__WEBPACK_IMPORTED_MODULE_0__.ExampleEnum.CODE,
    label: 'Access and interact <code>SplitComponent</code> from TS class',
    srcUrl: `${srcUrlBaseApp}/access-from-class/access-from-class.component.ts`
  },
  path: 'access-from-class',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_examples_access-from-class_access-from-class_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./access-from-class/access-from-class.module */ 489)).then(m => m.AccessFromClassModule)
}, {
  data: {
    type: _example_types__WEBPACK_IMPORTED_MODULE_0__.ExampleEnum.GEEK,
    label: 'Geek demo (100% dynamic)',
    srcUrl: `${srcUrlBaseApp}/geek-demo/geek-demo.component.ts`
  },
  path: 'geek-demo',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_examples_geek-demo_geek-demo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./geek-demo/geek-demo.module */ 154)).then(m => m.GeekDemoModule)
}, {
  data: {
    type: _example_types__WEBPACK_IMPORTED_MODULE_0__.ExampleEnum.DIR,
    label: 'Split inside right to left (RTL) page',
    srcUrl: `${srcUrlBaseApp}/dir-rtl/dir-rtl.component.ts`
  },
  path: 'dir-rtl',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_examples_dir-rtl_dir-rtl_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dir-rtl/dir-rtl.module */ 1311)).then(m => m.DirRtlModule)
}, {
  data: {
    type: _example_types__WEBPACK_IMPORTED_MODULE_0__.ExampleEnum.WORKSPACE,
    label: 'Fullscreen workspace saved in localStorage',
    srcUrl: `${srcUrlBaseApp}/workspace-localstorage/workspace-localstorage.component.ts`
  },
  path: 'workspace-localstorage',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_examples_workspace-localstorage_workspace-localstorage_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./workspace-localstorage/workspace-localstorage.module */ 4570)).then(m => m.WorkspaceLocalstorageModule)
}, {
  data: {
    type: _example_types__WEBPACK_IMPORTED_MODULE_0__.ExampleEnum.GLOBAL,
    label: 'Split with global settings',
    srcUrl: `${srcUrlBaseApp}/global-options/global-options.component.ts`
  },
  path: 'global-options',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_examples_global-options_global-options_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./global-options/global-options.module */ 5394)).then(m => m.GlobalOptionsModule)
}];

/***/ }),

/***/ 1755:
/*!*********************************************************!*\
  !*** ./src/app/ui/components/exampleTitle.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExampleTitleComponent: () => (/* binding */ ExampleTitleComponent)
/* harmony export */ });
/* harmony import */ var _examples_example_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../examples/example-types */ 2807);
/* harmony import */ var _examples_examples_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../examples/examples.routes */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
var _class;





class ExampleTitleComponent {
  set type(v) {
    const ex = _examples_examples_routes__WEBPACK_IMPORTED_MODULE_1__.exampleRoutes.find(e => e.data.type === v);
    if (!ex) {
      return;
    }
    this.label = this.sanitizer.bypassSecurityTrustHtml(ex.data.label);
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(ex.data.srcUrl);
  }
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this.exampleEnum = _examples_example_types__WEBPACK_IMPORTED_MODULE_0__.ExampleEnum;
  }
}
_class = ExampleTitleComponent;
_class.ɵfac = function ExampleTitleComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["sp-example-title"]],
  inputs: {
    type: "type"
  },
  decls: 5,
  vars: 2,
  consts: [[3, "innerHTML"], ["target", "_blank", 1, "btn", "btn-secondary", 3, "href"]],
  template: function ExampleTitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "View code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.label, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    }
  },
  styles: ["h4[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n      }\n      h4[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        margin-right: 20px;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVUaXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsYUFBYTtRQUNiLG1CQUFtQjtNQUNyQjtNQUNBO1FBQ0Usa0JBQWtCO01BQ3BCIiwiZmlsZSI6ImV4YW1wbGVUaXRsZS5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGg0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGg0ID4gZGl2IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgfVxuICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdWkvY29tcG9uZW50cy9leGFtcGxlVGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGFBQWE7UUFDYixtQkFBbUI7TUFDckI7TUFDQTtRQUNFLGtCQUFrQjtNQUNwQjs7QUFFTiw0ZUFBNGUiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGg0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGg0ID4gZGl2IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1444:
/*!***************************************************!*\
  !*** ./src/app/ui/components/topbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopbarComponent: () => (/* binding */ TopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var _examples_examples_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../examples/examples.routes */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 6605);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 7019);
var _class;










const _c0 = function (a1) {
  return ["/examples", a1];
};
function TopbarComponent_ul_21_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ex_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ex_r2.path))("innerHTML", ctx_r1.transform(ex_r2 == null ? null : ex_r2.data == null ? null : ex_r2.data.label), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function TopbarComponent_ul_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopbarComponent_ul_21_li_1_Template, 2, 4, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.examples);
  }
}
const _c1 = function () {
  return {
    exact: true
  };
};
class TopbarComponent {
  constructor(sanitizer, router) {
    this.sanitizer = sanitizer;
    this.router = router;
    this.isCollapsed = true;
    this.examples = _examples_examples_routes__WEBPACK_IMPORTED_MODULE_0__.exampleRoutes;
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationStart)).subscribe(event => {
      this.isCollapsed = true;
    });
  }
  transform(label) {
    return this.sanitizer.bypassSecurityTrustHtml(label);
  }
}
_class = TopbarComponent;
_class.ɵfac = function TopbarComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["sp-topbar"]],
  hostAttrs: [1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-dark", "bg-dark"],
  decls: 22,
  vars: 3,
  consts: [[1, "navbar-toggler", "hidden-lg-up", 3, "click"], [1, "navbar-toggler-icon"], [1, "mr-auto"], ["src", "/assets/logo.svg", "height", "28", "alt", "", 1, "mr-2"], ["routerLink", "/", 1, "navbar-brand"], [1, "collapse", "navbar-collapse", 3, "collapse"], [1, "nav", "navbar-nav"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/", 1, "nav-link"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/changelog", 1, "nav-link"], ["routerLink", "/documentation", 1, "nav-link"], ["dropdown", "", "routerLinkActive", "active", 1, "nav-item", "dropdown"], ["dropdownToggle", "", 1, "nav-link", "dropdown-toggle"], [1, "caret"], ["class", "dropdown-menu", "role", "menu", 4, "dropdownMenu"], ["role", "menu", 1, "dropdown-menu"], ["routerLinkActive", "active", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active"], [1, "dropdown-item", 3, "routerLink", "innerHTML"]],
  template: function TopbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_0_listener() {
        return ctx.isCollapsed = !ctx.isCollapsed;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "angular-split");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 9)(12, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Changelog");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 9)(15, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Documentation");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 12)(18, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Examples ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, TopbarComponent_ul_21_Template, 2, 1, "ul", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapse", ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__.CollapseDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__.BsDropdownDirective],
  styles: ["[_nghost-%COMP%] {\n        \n\n        position: absolute;\n      }\n\n      a.navbar-brand[_ngcontent-%COMP%], a.navbar-brand[_ngcontent-%COMP%]:hover {\n        font-weight: bold;\n        color: #ffc421;\n      }\n\n      li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n        cursor: pointer;\n      }\n\n      ul.dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:active, ul.dropdown-menu[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n        background-color: #eeeeee;\n        cursor: default;\n        color: #000000;\n      }\n\n      .navbar-toggler[_ngcontent-%COMP%] {\n        float: right;\n        margin-right: 20px;\n      }\n\n      @media (max-width: 992px) {\n        .container-fluid[_ngcontent-%COMP%] {\n          padding-left: 0;\n        }\n        a.navbar-brand[_ngcontent-%COMP%] {\n          margin-right: 0;\n        }\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0Usc0RBQXNEO1FBQ3RELGtCQUFrQjtNQUNwQjs7TUFFQTs7UUFFRSxpQkFBaUI7UUFDakIsY0FBYztNQUNoQjs7TUFFQTtRQUNFLGVBQWU7TUFDakI7O01BRUE7O1FBRUUseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixjQUFjO01BQ2hCOztNQUVBO1FBQ0UsWUFBWTtRQUNaLGtCQUFrQjtNQUNwQjs7TUFFQTtRQUNFO1VBQ0UsZUFBZTtRQUNqQjtRQUNBO1VBQ0UsZUFBZTtRQUNqQjtNQUNGIiwiZmlsZSI6InRvcGJhci5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgLyogVG8gb3ZlcnJpZGUgZGVmYXVsdCAnZml4ZWQnIHdobyBwcmV2ZW50IHNjcm9sbGluZyAqL1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB9XG5cbiAgICAgIGEubmF2YmFyLWJyYW5kLFxuICAgICAgYS5uYXZiYXItYnJhbmQ6aG92ZXIge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICNmZmM0MjE7XG4gICAgICB9XG5cbiAgICAgIGxpID4gYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgdWwuZHJvcGRvd24tbWVudSA+IGxpID4gYTphY3RpdmUsXG4gICAgICB1bC5kcm9wZG93bi1tZW51ID4gbGkuYWN0aXZlID4gYSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICB9XG5cbiAgICAgIC5uYXZiYXItdG9nZ2xlciB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIGEubmF2YmFyLWJyYW5kIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdWkvY29tcG9uZW50cy90b3BiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLHNEQUFzRDtRQUN0RCxrQkFBa0I7TUFDcEI7O01BRUE7O1FBRUUsaUJBQWlCO1FBQ2pCLGNBQWM7TUFDaEI7O01BRUE7UUFDRSxlQUFlO01BQ2pCOztNQUVBOztRQUVFLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsY0FBYztNQUNoQjs7TUFFQTtRQUNFLFlBQVk7UUFDWixrQkFBa0I7TUFDcEI7O01BRUE7UUFDRTtVQUNFLGVBQWU7UUFDakI7UUFDQTtVQUNFLGVBQWU7UUFDakI7TUFDRjs7QUFFTixvK0NBQW8rQyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3Qge1xuICAgICAgICAvKiBUbyBvdmVycmlkZSBkZWZhdWx0ICdmaXhlZCcgd2hvIHByZXZlbnQgc2Nyb2xsaW5nICovXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIH1cblxuICAgICAgYS5uYXZiYXItYnJhbmQsXG4gICAgICBhLm5hdmJhci1icmFuZDpob3ZlciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogI2ZmYzQyMTtcbiAgICAgIH1cblxuICAgICAgbGkgPiBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICB1bC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmFjdGl2ZSxcbiAgICAgIHVsLmRyb3Bkb3duLW1lbnUgPiBsaS5hY3RpdmUgPiBhIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIH1cblxuICAgICAgLm5hdmJhci10b2dnbGVyIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgYS5uYXZiYXItYnJhbmQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 4608:
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiModule: () => (/* binding */ UiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-split */ 6496);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 2072);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 6605);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 7019);
/* harmony import */ var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/sortable */ 2057);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 2406);
/* harmony import */ var _components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/exampleTitle.component */ 1755);
/* harmony import */ var _components_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/topbar.component */ 1444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;
















class UiModule {}
_class = UiModule;
_class.ɵfac = function UiModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__.ButtonsModule.forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__.CollapseModule.forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__.BsDropdownModule.forRoot(), ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_8__.SortableModule.forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule.forRoot(), angular_split__WEBPACK_IMPORTED_MODULE_10__.AngularSplitModule, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__.ButtonsModule, ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_8__.SortableModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiModule, {
    declarations: [_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_0__.ExampleTitleComponent, _components_topbar_component__WEBPACK_IMPORTED_MODULE_1__.TopbarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__.ButtonsModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__.CollapseModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__.BsDropdownModule, ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_8__.SortableModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule, angular_split__WEBPACK_IMPORTED_MODULE_10__.AngularSplitModule],
    exports: [_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_0__.ExampleTitleComponent, _components_topbar_component__WEBPACK_IMPORTED_MODULE_1__.TopbarComponent, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__.ButtonsModule, ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_8__.SortableModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule]
  });
})();

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 6496:
/*!*******************************************************!*\
  !*** ./dist/angular-split/fesm2022/angular-split.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANGULAR_SPLIT_DEFAULT_OPTIONS: () => (/* binding */ ANGULAR_SPLIT_DEFAULT_OPTIONS),
/* harmony export */   AngularSplitModule: () => (/* binding */ AngularSplitModule),
/* harmony export */   SplitAreaDirective: () => (/* binding */ SplitAreaDirective),
/* harmony export */   SplitComponent: () => (/* binding */ SplitComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 655);
var _class, _class2, _class3;






const _c0 = ["gutterEls"];
function _class_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function _class_ng_template_1_div_0_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.startKeyboardDrag($event, index_r2 * 2 + 1, index_r2 + 1));
    })("mousedown", function _class_ng_template_1_div_0_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.startMouseDrag($event, index_r2 * 2 + 1, index_r2 + 1));
    })("touchstart", function _class_ng_template_1_div_0_Template_div_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.startMouseDrag($event, index_r2 * 2 + 1, index_r2 + 1));
    })("mouseup", function _class_ng_template_1_div_0_Template_div_mouseup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.clickGutter($event, index_r2 + 1));
    })("touchend", function _class_ng_template_1_div_0_Template_div_touchend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.clickGutter($event, index_r2 + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const index_r2 = ctx_r17.index;
    const area_r1 = ctx_r17.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("flex-basis", ctx_r4.gutterSize, "px")("order", index_r2 * 2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r4.gutterAriaLabel)("aria-orientation", ctx_r4.direction)("aria-valuemin", area_r1.minSize)("aria-valuemax", area_r1.maxSize)("aria-valuenow", area_r1.size)("aria-valuetext", ctx_r4.getAriaAreaSizeText(area_r1.size));
  }
}
function _class_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, _class_ng_template_1_div_0_Template, 3, 10, "div", 1);
  }
  if (rf & 2) {
    const last_r3 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r3 === false);
  }
}
const _c1 = ["*"];
function getPointFromEvent(event) {
  // TouchEvent
  if (event.changedTouches !== undefined && event.changedTouches.length > 0) {
    return {
      x: event.changedTouches[0].clientX,
      y: event.changedTouches[0].clientY
    };
  }
  // MouseEvent
  else if (event.clientX !== undefined && event.clientY !== undefined) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  }
  // KeyboardEvent
  else if (event.currentTarget !== undefined) {
    const gutterEl = event.currentTarget;
    return {
      x: gutterEl.offsetLeft,
      y: gutterEl.offsetTop
    };
  }
  return null;
}
function pointDeltaEquals(lhs, rhs, deltaPx) {
  return Math.abs(lhs.x - rhs.x) <= deltaPx && Math.abs(lhs.y - rhs.y) <= deltaPx;
}
function getKeyboardEndpoint(event, direction) {
  // Return null if direction keys on the opposite axis were pressed
  if (direction === 'horizontal') {
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'PageUp':
      case 'PageDown':
        break;
      default:
        return null;
    }
  }
  if (direction === 'vertical') {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case 'PageUp':
      case 'PageDown':
        break;
      default:
        return null;
    }
  }
  const gutterEl = event.currentTarget;
  const offset = event.key === 'PageUp' || event.key === 'PageDown' ? 50 * 10 : 50;
  let offsetX = gutterEl.offsetLeft,
    offsetY = gutterEl.offsetTop;
  switch (event.key) {
    case 'ArrowLeft':
      offsetX -= offset;
      break;
    case 'ArrowRight':
      offsetX += offset;
      break;
    case 'ArrowUp':
      offsetY -= offset;
      break;
    case 'ArrowDown':
      offsetY += offset;
      break;
    case 'PageUp':
      if (direction === 'vertical') {
        offsetY -= offset;
      } else {
        offsetX += offset;
      }
      break;
    case 'PageDown':
      if (direction === 'vertical') {
        offsetY += offset;
      } else {
        offsetX -= offset;
      }
      break;
    default:
      return null;
  }
  return {
    x: offsetX,
    y: offsetY
  };
}
function getElementPixelSize(elRef, direction) {
  const rect = elRef.nativeElement.getBoundingClientRect();
  return direction === 'horizontal' ? rect.width : rect.height;
}
function getInputBoolean(v) {
  return typeof v === 'boolean' ? v : v === 'false' ? false : true;
}
function getInputPositiveNumber(v, defaultValue) {
  if (v === null || v === undefined) return defaultValue;
  v = Number(v);
  return !isNaN(v) && v >= 0 ? v : defaultValue;
}
function isUserSizesValid(unit, sizes) {
  // All sizes total must be 100 unless there are wildcards.
  // While having wildcards all other sizes sum should be less than 100.
  // There should be maximum one wildcard.
  if (unit === 'percent') {
    const total = sizes.reduce((total, s) => s !== '*' ? total + s : total, 0);
    const wildcardSizeAreas = sizes.filter(size => size === '*');
    if (wildcardSizeAreas.length > 1) {
      return false;
    }
    if (wildcardSizeAreas.length === 1) {
      return total < 100.1;
    }
    return total > 99.9 && total < 100.1;
  }
  // A size at null is mandatory but only one.
  if (unit === 'pixel') {
    return sizes.filter(s => s === '*').length === 1;
  }
}
function getAreaMinSize(a) {
  if (a.size === '*') {
    return null;
  }
  if (a.component.lockSize === true) {
    return a.size;
  }
  if (a.component.minSize === null) {
    return null;
  }
  if (a.component.minSize > a.size) {
    return a.size;
  }
  return a.component.minSize;
}
function getAreaMaxSize(a) {
  if (a.size === '*') {
    return null;
  }
  if (a.component.lockSize === true) {
    return a.size;
  }
  if (a.component.maxSize === null) {
    return null;
  }
  if (a.component.maxSize < a.size) {
    return a.size;
  }
  return a.component.maxSize;
}
function getGutterSideAbsorptionCapacity(unit, sideAreas, pixels, allAreasSizePixel) {
  return sideAreas.reduce((acc, area) => {
    const res = getAreaAbsorptionCapacity(unit, area, acc.remain, allAreasSizePixel);
    acc.list.push(res);
    acc.remain = res.pixelRemain;
    return acc;
  }, {
    remain: pixels,
    list: []
  });
}
function getAreaAbsorptionCapacity(unit, areaSnapshot, pixels, allAreasSizePixel) {
  // No pain no gain
  if (pixels === 0) {
    return {
      areaSnapshot,
      pixelAbsorb: 0,
      percentAfterAbsorption: areaSnapshot.sizePercentAtStart,
      pixelRemain: 0
    };
  }
  // Area start at zero and need to be reduced, not possible
  if (areaSnapshot.sizePixelAtStart === 0 && pixels < 0) {
    return {
      areaSnapshot,
      pixelAbsorb: 0,
      percentAfterAbsorption: 0,
      pixelRemain: pixels
    };
  }
  if (unit === 'percent') {
    return getAreaAbsorptionCapacityPercent(areaSnapshot, pixels, allAreasSizePixel);
  }
  if (unit === 'pixel') {
    return getAreaAbsorptionCapacityPixel(areaSnapshot, pixels, allAreasSizePixel);
  }
}
function getAreaAbsorptionCapacityPercent(areaSnapshot, pixels, allAreasSizePixel) {
  const tempPixelSize = areaSnapshot.sizePixelAtStart + pixels;
  const tempPercentSize = tempPixelSize / allAreasSizePixel * 100;
  // ENLARGE AREA
  if (pixels > 0) {
    // If maxSize & newSize bigger than it > absorb to max and return remaining pixels
    if (areaSnapshot.area.maxSize !== null && tempPercentSize > areaSnapshot.area.maxSize) {
      // Use area.area.maxSize as newPercentSize and return calculate pixels remaining
      const maxSizePixel = areaSnapshot.area.maxSize / 100 * allAreasSizePixel;
      return {
        areaSnapshot,
        pixelAbsorb: maxSizePixel,
        percentAfterAbsorption: areaSnapshot.area.maxSize,
        pixelRemain: areaSnapshot.sizePixelAtStart + pixels - maxSizePixel
      };
    }
    return {
      areaSnapshot,
      pixelAbsorb: pixels,
      percentAfterAbsorption: tempPercentSize > 100 ? 100 : tempPercentSize,
      pixelRemain: 0
    };
  }
  // REDUCE AREA
  else if (pixels < 0) {
    // If minSize & newSize smaller than it > absorb to min and return remaining pixels
    if (areaSnapshot.area.minSize !== null && tempPercentSize < areaSnapshot.area.minSize) {
      // Use area.area.minSize as newPercentSize and return calculate pixels remaining
      const minSizePixel = areaSnapshot.area.minSize / 100 * allAreasSizePixel;
      return {
        areaSnapshot,
        pixelAbsorb: minSizePixel,
        percentAfterAbsorption: areaSnapshot.area.minSize,
        pixelRemain: areaSnapshot.sizePixelAtStart + pixels - minSizePixel
      };
    }
    // If reduced under zero > return remaining pixels
    else if (tempPercentSize < 0) {
      // Use 0 as newPercentSize and return calculate pixels remaining
      return {
        areaSnapshot,
        pixelAbsorb: -areaSnapshot.sizePixelAtStart,
        percentAfterAbsorption: 0,
        pixelRemain: pixels + areaSnapshot.sizePixelAtStart
      };
    }
    return {
      areaSnapshot,
      pixelAbsorb: pixels,
      percentAfterAbsorption: tempPercentSize,
      pixelRemain: 0
    };
  }
}
function getAreaAbsorptionCapacityPixel(areaSnapshot, pixels, containerSizePixel) {
  const tempPixelSize = areaSnapshot.sizePixelAtStart + pixels;
  // ENLARGE AREA
  if (pixels > 0) {
    // If maxSize & newSize bigger than it > absorb to max and return remaining pixels
    if (areaSnapshot.area.maxSize !== null && tempPixelSize > areaSnapshot.area.maxSize) {
      return {
        areaSnapshot,
        pixelAbsorb: areaSnapshot.area.maxSize - areaSnapshot.sizePixelAtStart,
        percentAfterAbsorption: -1,
        pixelRemain: tempPixelSize - areaSnapshot.area.maxSize
      };
    }
    return {
      areaSnapshot,
      pixelAbsorb: pixels,
      percentAfterAbsorption: -1,
      pixelRemain: 0
    };
  }
  // REDUCE AREA
  else if (pixels < 0) {
    // If minSize & newSize smaller than it > absorb to min and return remaining pixels
    if (areaSnapshot.area.minSize !== null && tempPixelSize < areaSnapshot.area.minSize) {
      return {
        areaSnapshot,
        pixelAbsorb: areaSnapshot.area.minSize + pixels - tempPixelSize,
        percentAfterAbsorption: -1,
        pixelRemain: tempPixelSize - areaSnapshot.area.minSize
      };
    }
    // If reduced under zero > return remaining pixels
    else if (tempPixelSize < 0) {
      return {
        areaSnapshot,
        pixelAbsorb: -areaSnapshot.sizePixelAtStart,
        percentAfterAbsorption: -1,
        pixelRemain: pixels + areaSnapshot.sizePixelAtStart
      };
    }
    return {
      areaSnapshot,
      pixelAbsorb: pixels,
      percentAfterAbsorption: -1,
      pixelRemain: 0
    };
  }
}
function updateAreaSize(unit, item) {
  // Update size except for the wildcard size area
  if (item.areaSnapshot.area.size !== '*') {
    if (unit === 'percent') {
      item.areaSnapshot.area.size = item.percentAfterAbsorption;
    } else if (unit === 'pixel') {
      item.areaSnapshot.area.size = item.areaSnapshot.sizePixelAtStart + item.pixelAbsorb;
    }
  }
}
const ANGULAR_SPLIT_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('angular-split-global-config');

/**
 * angular-split
 *
 *
 *  PERCENT MODE ([unit]="'percent'")
 *  ___________________________________________________________________________________________
 * |       A       [g1]       B       [g2]       C       [g3]       D       [g4]       E       |
 * |-------------------------------------------------------------------------------------------|
 * |       20                 30                 20                 15                 15      | <-- [size]="x"
 * |               10px               10px               10px               10px               | <-- [gutterSize]="10"
 * |calc(20% - 8px)    calc(30% - 12px)   calc(20% - 8px)    calc(15% - 6px)    calc(15% - 6px)| <-- CSS flex-basis property (with flex-grow&shrink at 0)
 * |     152px              228px              152px              114px              114px     | <-- el.getBoundingClientRect().width
 * |___________________________________________________________________________________________|
 *                                                                                 800px         <-- el.getBoundingClientRect().width
 *  flex-basis = calc( { area.size }% - { area.size/100 * nbGutter*gutterSize }px );
 *
 *
 *  PIXEL MODE ([unit]="'pixel'")
 *  ___________________________________________________________________________________________
 * |       A       [g1]       B       [g2]       C       [g3]       D       [g4]       E       |
 * |-------------------------------------------------------------------------------------------|
 * |      100                250                 *                 150                100      | <-- [size]="y"
 * |               10px               10px               10px               10px               | <-- [gutterSize]="10"
 * |   0 0 100px          0 0 250px           1 1 auto          0 0 150px          0 0 100px   | <-- CSS flex property (flex-grow/flex-shrink/flex-basis)
 * |     100px              250px              200px              150px              100px     | <-- el.getBoundingClientRect().width
 * |___________________________________________________________________________________________|
 *                                                                                 800px         <-- el.getBoundingClientRect().width
 *
 */
class SplitComponent {
  set direction(v) {
    this._direction = v === 'vertical' ? 'vertical' : 'horizontal';
    this.renderer.addClass(this.elRef.nativeElement, `as-${this._direction}`);
    this.renderer.removeClass(this.elRef.nativeElement, `as-${this._direction === 'vertical' ? 'horizontal' : 'vertical'}`);
    this.build(false, false);
  }
  get direction() {
    return this._direction;
  }
  set unit(v) {
    this._unit = v === 'pixel' ? 'pixel' : 'percent';
    this.renderer.addClass(this.elRef.nativeElement, `as-${this._unit}`);
    this.renderer.removeClass(this.elRef.nativeElement, `as-${this._unit === 'pixel' ? 'percent' : 'pixel'}`);
    this.build(false, true);
  }
  get unit() {
    return this._unit;
  }
  set gutterSize(v) {
    this._gutterSize = getInputPositiveNumber(v, 11);
    this.build(false, false);
  }
  get gutterSize() {
    return this._gutterSize;
  }
  set gutterStep(v) {
    this._gutterStep = getInputPositiveNumber(v, 1);
  }
  get gutterStep() {
    return this._gutterStep;
  }
  set restrictMove(v) {
    this._restrictMove = getInputBoolean(v);
  }
  get restrictMove() {
    return this._restrictMove;
  }
  set useTransition(v) {
    this._useTransition = getInputBoolean(v);
    if (this._useTransition) {
      this.renderer.addClass(this.elRef.nativeElement, 'as-transition');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'as-transition');
    }
  }
  get useTransition() {
    return this._useTransition;
  }
  set disabled(v) {
    this._disabled = getInputBoolean(v);
    if (this._disabled) {
      this.renderer.addClass(this.elRef.nativeElement, 'as-disabled');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'as-disabled');
    }
  }
  get disabled() {
    return this._disabled;
  }
  set dir(v) {
    this._dir = v === 'rtl' ? 'rtl' : 'ltr';
    this.renderer.setAttribute(this.elRef.nativeElement, 'dir', this._dir);
  }
  get dir() {
    return this._dir;
  }
  set gutterDblClickDuration(v) {
    this._gutterDblClickDuration = getInputPositiveNumber(v, 0);
  }
  get gutterDblClickDuration() {
    return this._gutterDblClickDuration;
  }
  get transitionEnd() {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => this.transitionEndSubscriber = subscriber).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(20));
  }
  constructor(ngZone, elRef, cdRef, renderer, globalConfig) {
    this.ngZone = ngZone;
    this.elRef = elRef;
    this.cdRef = cdRef;
    this.renderer = renderer;
    this.gutterClickDeltaPx = 2;
    this._config = {
      direction: 'horizontal',
      unit: 'percent',
      gutterSize: 11,
      gutterStep: 1,
      restrictMove: false,
      useTransition: false,
      disabled: false,
      dir: 'ltr',
      gutterDblClickDuration: 0
    };
    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    this.gutterClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    this.gutterDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    this.dragProgressSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.dragProgress$ = this.dragProgressSubject.asObservable();
    this.isDragging = false;
    this.isWaitingClear = false;
    this.isWaitingInitialMove = false;
    this.dragListeners = [];
    this.snapshot = null;
    this.startPoint = null;
    this.endPoint = null;
    this.displayedAreas = [];
    this.hiddenAreas = [];
    this._clickTimeout = null;
    // To force adding default class, could be override by user @Input() or not
    this.direction = this._direction;
    this._config = globalConfig ? Object.assign(this._config, globalConfig) : this._config;
    Object.keys(this._config).forEach(property => {
      this[property] = this._config[property];
    });
  }
  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      // To avoid transition at first rendering
      setTimeout(() => this.renderer.addClass(this.elRef.nativeElement, 'as-init'));
    });
  }
  getNbGutters() {
    return this.displayedAreas.length === 0 ? 0 : this.displayedAreas.length - 1;
  }
  addArea(component) {
    const newArea = {
      component,
      order: 0,
      size: 0,
      minSize: null,
      maxSize: null,
      sizeBeforeCollapse: null,
      gutterBeforeCollapse: 0
    };
    if (component.visible === true) {
      this.displayedAreas.push(newArea);
      this.build(true, true);
    } else {
      this.hiddenAreas.push(newArea);
    }
  }
  removeArea(component) {
    if (this.displayedAreas.some(a => a.component === component)) {
      const area = this.displayedAreas.find(a => a.component === component);
      this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);
      this.build(true, true);
    } else if (this.hiddenAreas.some(a => a.component === component)) {
      const area = this.hiddenAreas.find(a => a.component === component);
      this.hiddenAreas.splice(this.hiddenAreas.indexOf(area), 1);
    }
  }
  updateArea(component, resetOrders, resetSizes) {
    if (component.visible === true) {
      this.build(resetOrders, resetSizes);
    }
  }
  showArea(component) {
    const area = this.hiddenAreas.find(a => a.component === component);
    if (area === undefined) {
      return;
    }
    const areas = this.hiddenAreas.splice(this.hiddenAreas.indexOf(area), 1);
    this.displayedAreas.push(...areas);
    this.build(true, true);
  }
  hideArea(comp) {
    const area = this.displayedAreas.find(a => a.component === comp);
    if (area === undefined) {
      return;
    }
    const areas = this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);
    areas.forEach(item => {
      item.order = 0;
      item.size = 0;
    });
    this.hiddenAreas.push(...areas);
    this.build(true, true);
  }
  getVisibleAreaSizes() {
    return this.displayedAreas.map(a => a.size);
  }
  setVisibleAreaSizes(sizes) {
    if (sizes.length !== this.displayedAreas.length) {
      return false;
    }
    const formattedSizes = sizes.map(s => getInputPositiveNumber(s, '*'));
    const isValid = isUserSizesValid(this.unit, formattedSizes);
    if (isValid === false) {
      return false;
    }
    // @ts-ignore
    this.displayedAreas.forEach((area, i) => area.component._size = formattedSizes[i]);
    this.build(false, true);
    return true;
  }
  build(resetOrders, resetSizes) {
    this.stopDragging();
    // ¤ AREAS ORDER
    if (resetOrders === true) {
      // If user provided 'order' for each area, use it to sort them.
      if (this.displayedAreas.every(a => a.component.order !== null)) {
        this.displayedAreas.sort((a, b) => a.component.order - b.component.order);
      }
      // Then set real order with multiples of 2, numbers between will be used by gutters.
      this.displayedAreas.forEach((area, i) => {
        area.order = i * 2;
        area.component.setStyleOrder(area.order);
      });
    }
    // ¤ AREAS SIZE
    if (resetSizes === true) {
      const useUserSizes = isUserSizesValid(this.unit, this.displayedAreas.map(a => a.component.size));
      switch (this.unit) {
        case 'percent':
          {
            const defaultSize = 100 / this.displayedAreas.length;
            this.displayedAreas.forEach(area => {
              area.size = useUserSizes ? area.component.size : defaultSize;
              area.minSize = getAreaMinSize(area);
              area.maxSize = getAreaMaxSize(area);
            });
            break;
          }
        case 'pixel':
          {
            if (useUserSizes) {
              this.displayedAreas.forEach(area => {
                area.size = area.component.size;
                area.minSize = getAreaMinSize(area);
                area.maxSize = getAreaMaxSize(area);
              });
            } else {
              const wildcardSizeAreas = this.displayedAreas.filter(a => a.component.size === '*');
              // No wildcard area > Need to select one arbitrarily > first
              if (wildcardSizeAreas.length === 0 && this.displayedAreas.length > 0) {
                this.displayedAreas.forEach((area, i) => {
                  area.size = i === 0 ? '*' : area.component.size;
                  area.minSize = i === 0 ? null : getAreaMinSize(area);
                  area.maxSize = i === 0 ? null : getAreaMaxSize(area);
                });
              } else if (wildcardSizeAreas.length > 1) {
                // More than one wildcard area > Need to keep only one arbitrarily > first
                let alreadyGotOne = false;
                this.displayedAreas.forEach(area => {
                  if (area.component.size === '*') {
                    if (alreadyGotOne === false) {
                      area.size = '*';
                      area.minSize = null;
                      area.maxSize = null;
                      alreadyGotOne = true;
                    } else {
                      area.size = 100;
                      area.minSize = null;
                      area.maxSize = null;
                    }
                  } else {
                    area.size = area.component.size;
                    area.minSize = getAreaMinSize(area);
                    area.maxSize = getAreaMaxSize(area);
                  }
                });
              }
            }
            break;
          }
      }
    }
    this.refreshStyleSizes();
    this.cdRef.markForCheck();
  }
  refreshStyleSizes() {
    ///////////////////////////////////////////
    // PERCENT MODE
    if (this.unit === 'percent') {
      // Only one area > flex-basis 100%
      if (this.displayedAreas.length === 1) {
        this.displayedAreas[0].component.setStyleFlex(0, 0, `100%`, false, false);
      } else {
        // Multiple areas > use each percent basis
        const sumGutterSize = this.getNbGutters() * this.gutterSize;
        this.displayedAreas.forEach(area => {
          // Area with wildcard size
          if (area.size === '*') {
            if (this.displayedAreas.length === 1) {
              area.component.setStyleFlex(1, 1, `100%`, false, false);
            } else {
              area.component.setStyleFlex(1, 1, `auto`, false, false);
            }
          } else {
            area.component.setStyleFlex(0, 0, `calc( ${area.size}% - ${area.size / 100 * sumGutterSize}px )`, area.minSize !== null && area.minSize === area.size, area.maxSize !== null && area.maxSize === area.size);
          }
        });
      }
    } else if (this.unit === 'pixel') {
      ///////////////////////////////////////////
      // PIXEL MODE
      this.displayedAreas.forEach(area => {
        // Area with wildcard size
        if (area.size === '*') {
          if (this.displayedAreas.length === 1) {
            area.component.setStyleFlex(1, 1, `100%`, false, false);
          } else {
            area.component.setStyleFlex(1, 1, `auto`, false, false);
          }
        } else {
          // Area with pixel size
          // Only one area > flex-basis 100%
          if (this.displayedAreas.length === 1) {
            area.component.setStyleFlex(0, 0, `100%`, false, false);
          } else {
            // Multiple areas > use each pixel basis
            area.component.setStyleFlex(0, 0, `${area.size}px`, area.minSize !== null && area.minSize === area.size, area.maxSize !== null && area.maxSize === area.size);
          }
        }
      });
    }
  }
  clickGutter(event, gutterNum) {
    const tempPoint = getPointFromEvent(event);
    // Be sure mouseup/touchend happened if touch/cursor is not moved.
    if (this.startPoint && pointDeltaEquals(this.startPoint, tempPoint, this.gutterClickDeltaPx) && (!this.isDragging || this.isWaitingInitialMove)) {
      // If timeout in progress and new click > clearTimeout & dblClickEvent
      if (this._clickTimeout !== null) {
        window.clearTimeout(this._clickTimeout);
        this._clickTimeout = null;
        this.notify('dblclick', gutterNum);
        this.stopDragging();
      } else {
        // Else start timeout to call clickEvent at end
        this._clickTimeout = window.setTimeout(() => {
          this._clickTimeout = null;
          this.notify('click', gutterNum);
          this.stopDragging();
        }, this.gutterDblClickDuration);
      }
    }
  }
  startKeyboardDrag(event, gutterOrder, gutterNum) {
    if (this.disabled === true || this.isWaitingClear === true) {
      return;
    }
    const endPoint = getKeyboardEndpoint(event, this.direction);
    if (endPoint === null) {
      return;
    }
    this.endPoint = endPoint;
    this.startPoint = getPointFromEvent(event);
    event.preventDefault();
    event.stopPropagation();
    this.setupForDragEvent(gutterOrder, gutterNum);
    this.startDragging();
    this.drag();
    this.stopDragging();
  }
  startMouseDrag(event, gutterOrder, gutterNum) {
    event.preventDefault();
    event.stopPropagation();
    this.startPoint = getPointFromEvent(event);
    if (this.startPoint === null || this.disabled === true || this.isWaitingClear === true) {
      return;
    }
    this.setupForDragEvent(gutterOrder, gutterNum);
    this.dragListeners.push(this.renderer.listen('document', 'mouseup', this.stopDragging.bind(this)));
    this.dragListeners.push(this.renderer.listen('document', 'touchend', this.stopDragging.bind(this)));
    this.dragListeners.push(this.renderer.listen('document', 'touchcancel', this.stopDragging.bind(this)));
    this.ngZone.runOutsideAngular(() => {
      this.dragListeners.push(this.renderer.listen('document', 'mousemove', this.mouseDragEvent.bind(this)));
      this.dragListeners.push(this.renderer.listen('document', 'touchmove', this.mouseDragEvent.bind(this)));
    });
    this.startDragging();
  }
  setupForDragEvent(gutterOrder, gutterNum) {
    this.snapshot = {
      gutterNum,
      lastSteppedOffset: 0,
      allAreasSizePixel: getElementPixelSize(this.elRef, this.direction) - this.getNbGutters() * this.gutterSize,
      allInvolvedAreasSizePercent: 100,
      areasBeforeGutter: [],
      areasAfterGutter: []
    };
    this.displayedAreas.forEach(area => {
      const areaSnapshot = {
        area,
        sizePixelAtStart: getElementPixelSize(area.component.elRef, this.direction),
        sizePercentAtStart: this.unit === 'percent' ? area.size : -1 // If pixel mode, anyway, will not be used.
      };

      if (area.order < gutterOrder) {
        if (this.restrictMove === true) {
          this.snapshot.areasBeforeGutter = [areaSnapshot];
        } else {
          this.snapshot.areasBeforeGutter.unshift(areaSnapshot);
        }
      } else if (area.order > gutterOrder) {
        if (this.restrictMove === true) {
          if (this.snapshot.areasAfterGutter.length === 0) {
            this.snapshot.areasAfterGutter = [areaSnapshot];
          }
        } else {
          this.snapshot.areasAfterGutter.push(areaSnapshot);
        }
      }
    });
    // allInvolvedAreasSizePercent is only relevant if there is restrictMove as otherwise the sum
    // is always 100.
    // Pixel mode doesn't have browser % problem which is the origin of allInvolvedAreasSizePercent.
    if (this.restrictMove && this.unit === 'percent') {
      const areaSnapshotBefore = this.snapshot.areasBeforeGutter[0];
      const areaSnapshotAfter = this.snapshot.areasAfterGutter[0];
      // We have a wildcard size area beside the dragged gutter.
      // In this case we can only calculate the size based on the move restricted areas.
      if (areaSnapshotBefore.area.size === '*' || areaSnapshotAfter.area.size === '*') {
        const notInvolvedAreasSizesPercent = this.displayedAreas.reduce((accum, area) => {
          if (areaSnapshotBefore.area !== area && areaSnapshotAfter.area !== area) {
            return accum + area.size;
          }
          return accum;
        }, 0);
        this.snapshot.allInvolvedAreasSizePercent = 100 - notInvolvedAreasSizesPercent;
      } else {
        // No wildcard or not beside the gutter - we can just sum the areas beside gutter percents.
        this.snapshot.allInvolvedAreasSizePercent = [...this.snapshot.areasBeforeGutter, ...this.snapshot.areasAfterGutter].reduce((t, a) => t + a.sizePercentAtStart, 0);
      }
    }
    if (this.snapshot.areasBeforeGutter.length === 0 || this.snapshot.areasAfterGutter.length === 0) {
      return;
    }
  }
  startDragging() {
    this.displayedAreas.forEach(area => area.component.lockEvents());
    this.isDragging = true;
    this.isWaitingInitialMove = true;
  }
  mouseDragEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    const tempPoint = getPointFromEvent(event);
    if (this._clickTimeout !== null && !pointDeltaEquals(this.startPoint, tempPoint, this.gutterClickDeltaPx)) {
      window.clearTimeout(this._clickTimeout);
      this._clickTimeout = null;
    }
    if (this.isDragging === false) {
      return;
    }
    this.endPoint = getPointFromEvent(event);
    if (this.endPoint === null) {
      return;
    }
    this.drag();
  }
  drag() {
    if (this.isWaitingInitialMove) {
      if (this.startPoint.x !== this.endPoint.x || this.startPoint.y !== this.endPoint.y) {
        this.ngZone.run(() => {
          this.isWaitingInitialMove = false;
          this.renderer.addClass(this.elRef.nativeElement, 'as-dragging');
          this.renderer.addClass(this.gutterEls.toArray()[this.snapshot.gutterNum - 1].nativeElement, 'as-dragged');
          this.notify('start', this.snapshot.gutterNum);
        });
      } else {
        return;
      }
    }
    // Calculate steppedOffset
    let offset = this.direction === 'horizontal' ? this.startPoint.x - this.endPoint.x : this.startPoint.y - this.endPoint.y;
    // RTL requires negative offset only in horizontal mode as in vertical
    // RTL has no effect on drag direction.
    if (this.dir === 'rtl' && this.direction === 'horizontal') {
      offset = -offset;
    }
    const steppedOffset = Math.round(offset / this.gutterStep) * this.gutterStep;
    if (steppedOffset === this.snapshot.lastSteppedOffset) {
      return;
    }
    this.snapshot.lastSteppedOffset = steppedOffset;
    // Need to know if each gutter side areas could reacts to steppedOffset
    let areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -steppedOffset, this.snapshot.allAreasSizePixel);
    let areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset, this.snapshot.allAreasSizePixel);
    // Each gutter side areas can't absorb all offset
    if (areasBefore.remain !== 0 && areasAfter.remain !== 0) {
      if (Math.abs(areasBefore.remain) === Math.abs(areasAfter.remain)) {} else if (Math.abs(areasBefore.remain) > Math.abs(areasAfter.remain)) {
        areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset + areasBefore.remain, this.snapshot.allAreasSizePixel);
      } else {
        areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -(steppedOffset - areasAfter.remain), this.snapshot.allAreasSizePixel);
      }
    } else if (areasBefore.remain !== 0) {
      // Areas before gutter can't absorbs all offset > need to recalculate sizes for areas after gutter.
      areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset + areasBefore.remain, this.snapshot.allAreasSizePixel);
    } else if (areasAfter.remain !== 0) {
      // Areas after gutter can't absorbs all offset > need to recalculate sizes for areas before gutter.
      areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -(steppedOffset - areasAfter.remain), this.snapshot.allAreasSizePixel);
    }
    if (this.unit === 'percent') {
      // Hack because of browser messing up with sizes using calc(X% - Ypx) -> el.getBoundingClientRect()
      // If not there, playing with gutters makes total going down to 99.99875% then 99.99286%, 99.98986%,..
      const all = [...areasBefore.list, ...areasAfter.list];
      const wildcardArea = all.find(a => a.percentAfterAbsorption == '*');
      // In case we have a wildcard area - always align the percents on the wildcard area.
      const areaToReset = wildcardArea ?? all.find(a => a.percentAfterAbsorption !== 0 && a.percentAfterAbsorption !== a.areaSnapshot.area.minSize && a.percentAfterAbsorption !== a.areaSnapshot.area.maxSize);
      if (areaToReset) {
        areaToReset.percentAfterAbsorption = this.snapshot.allInvolvedAreasSizePercent - all.filter(a => a !== areaToReset).reduce((total, a) => total + a.percentAfterAbsorption, 0);
      }
    }
    // Now we know areas could absorb steppedOffset, time to really update sizes
    areasBefore.list.forEach(item => updateAreaSize(this.unit, item));
    areasAfter.list.forEach(item => updateAreaSize(this.unit, item));
    this.refreshStyleSizes();
    this.notify('progress', this.snapshot.gutterNum);
  }
  stopDragging(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (this.isDragging === false) {
      return;
    }
    this.displayedAreas.forEach(area => area.component.unlockEvents());
    while (this.dragListeners.length > 0) {
      const fct = this.dragListeners.pop();
      if (fct) {
        fct();
      }
    }
    // Warning: Have to be before "notify('end')"
    // because "notify('end')"" can be linked to "[size]='x'" > "build()" > "stopDragging()"
    this.isDragging = false;
    // If moved from starting point, notify end
    if (this.isWaitingInitialMove === false) {
      this.notify('end', this.snapshot.gutterNum);
    }
    this.renderer.removeClass(this.elRef.nativeElement, 'as-dragging');
    this.renderer.removeClass(this.gutterEls.toArray()[this.snapshot.gutterNum - 1].nativeElement, 'as-dragged');
    this.snapshot = null;
    this.isWaitingClear = true;
    // Needed to let (click)="clickGutter(...)" event run and verify if mouse moved or not
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.startPoint = null;
        this.endPoint = null;
        this.isWaitingClear = false;
      });
    });
  }
  notify(type, gutterNum) {
    const sizes = this.getVisibleAreaSizes();
    if (type === 'start') {
      this.dragStart.emit({
        gutterNum,
        sizes
      });
    } else if (type === 'end') {
      this.dragEnd.emit({
        gutterNum,
        sizes
      });
    } else if (type === 'click') {
      this.gutterClick.emit({
        gutterNum,
        sizes
      });
    } else if (type === 'dblclick') {
      this.gutterDblClick.emit({
        gutterNum,
        sizes
      });
    } else if (type === 'transitionEnd') {
      if (this.transitionEndSubscriber) {
        this.ngZone.run(() => this.transitionEndSubscriber.next(sizes));
      }
    } else if (type === 'progress') {
      // Stay outside zone to allow users do what they want about change detection mechanism.
      this.dragProgressSubject.next({
        gutterNum,
        sizes
      });
    }
  }
  ngOnDestroy() {
    this.stopDragging();
  }
  collapseArea(comp, newSize, gutter) {
    const area = this.displayedAreas.find(a => a.component === comp);
    if (area === undefined) {
      return;
    }
    const whichGutter = gutter === 'right' ? 1 : -1;
    if (!area.sizeBeforeCollapse) {
      area.sizeBeforeCollapse = area.size;
      area.gutterBeforeCollapse = whichGutter;
    }
    area.size = newSize;
    const gtr = this.gutterEls.find(f => f.nativeElement.style.order === `${area.order + whichGutter}`);
    if (gtr) {
      this.renderer.addClass(gtr.nativeElement, 'as-split-gutter-collapsed');
    }
    this.updateArea(comp, false, false);
  }
  expandArea(comp) {
    const area = this.displayedAreas.find(a => a.component === comp);
    if (area === undefined) {
      return;
    }
    if (!area.sizeBeforeCollapse) {
      return;
    }
    area.size = area.sizeBeforeCollapse;
    area.sizeBeforeCollapse = null;
    const gtr = this.gutterEls.find(f => f.nativeElement.style.order === `${area.order + area.gutterBeforeCollapse}`);
    if (gtr) {
      this.renderer.removeClass(gtr.nativeElement, 'as-split-gutter-collapsed');
    }
    this.updateArea(comp, false, false);
  }
  getAriaAreaSizeText(size) {
    if (size === '*') {
      return null;
    }
    return size.toFixed(0) + ' ' + this.unit;
  }
  /** @nocollapse */
}
_class = SplitComponent;
_class.ɵfac = function _class_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ANGULAR_SPLIT_DEFAULT_OPTIONS, 8));
};
/** @nocollapse */_class.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["as-split"]],
  viewQuery: function _class_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gutterEls = _t);
    }
  },
  inputs: {
    direction: "direction",
    unit: "unit",
    gutterSize: "gutterSize",
    gutterStep: "gutterStep",
    restrictMove: "restrictMove",
    useTransition: "useTransition",
    disabled: "disabled",
    dir: "dir",
    gutterDblClickDuration: "gutterDblClickDuration",
    gutterClickDeltaPx: "gutterClickDeltaPx",
    gutterAriaLabel: "gutterAriaLabel"
  },
  outputs: {
    transitionEnd: "transitionEnd",
    dragStart: "dragStart",
    dragEnd: "dragEnd",
    gutterClick: "gutterClick",
    gutterDblClick: "gutterDblClick"
  },
  exportAs: ["asSplit"],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 1,
  consts: [["ngFor", "", 3, "ngForOf"], ["role", "separator", "tabindex", "0", "class", "as-split-gutter", 3, "flex-basis", "order", "keydown", "mousedown", "touchstart", "mouseup", "touchend", 4, "ngIf"], ["role", "separator", "tabindex", "0", 1, "as-split-gutter", 3, "keydown", "mousedown", "touchstart", "mouseup", "touchend"], ["gutterEls", ""], [1, "as-split-gutter-icon"]],
  template: function _class_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, _class_ng_template_1_Template, 1, 1, "ng-template", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedAreas);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  styles: ["[_nghost-%COMP%]{display:flex;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;overflow:hidden;width:100%;height:100%}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{border:none;flex-grow:0;flex-shrink:0;background-color:#eee;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%] > .as-split-gutter.as-split-gutter-collapsed[_ngcontent-%COMP%]{flex-basis:1px!important;pointer-events:none}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{width:100%;height:100%;background-position:center center;background-repeat:no-repeat}[_nghost-%COMP%]    >.as-split-area{flex-grow:0;flex-shrink:0;overflow-x:hidden;overflow-y:auto}[_nghost-%COMP%]    >.as-split-area.as-hidden{flex:0 1 0px!important;overflow-x:hidden;overflow-y:hidden}[_nghost-%COMP%]    >.as-split-area .iframe-fix{position:absolute;top:0;left:0;width:100%;height:100%}.as-horizontal[_nghost-%COMP%]{flex-direction:row}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:row;cursor:col-resize;height:100%}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)}.as-horizontal[_nghost-%COMP%]    >.as-split-area{height:100%}.as-vertical[_nghost-%COMP%]{flex-direction:column}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:column;cursor:row-resize;width:100%}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC)}.as-vertical[_nghost-%COMP%]    >.as-split-area{width:100%}.as-vertical[_nghost-%COMP%]    >.as-split-area.as-hidden{max-width:0}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:default}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)}.as-transition.as-init[_nghost-%COMP%]:not(.as-dragging) > .as-split-gutter[_ngcontent-%COMP%], .as-transition.as-init[_nghost-%COMP%]:not(.as-dragging)    >.as-split-area{transition:flex-basis .3s}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'as-split',
      exportAs: 'asSplit',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content>
    <ng-template ngFor [ngForOf]="displayedAreas" let-area="$implicit" let-index="index" let-last="last">
      <div
        role="separator"
        tabindex="0"
        *ngIf="last === false"
        #gutterEls
        class="as-split-gutter"
        [style.flex-basis.px]="gutterSize"
        [style.order]="index * 2 + 1"
        (keydown)="startKeyboardDrag($event, index * 2 + 1, index + 1)"
        (mousedown)="startMouseDrag($event, index * 2 + 1, index + 1)"
        (touchstart)="startMouseDrag($event, index * 2 + 1, index + 1)"
        (mouseup)="clickGutter($event, index + 1)"
        (touchend)="clickGutter($event, index + 1)"
        [attr.aria-label]="gutterAriaLabel"
        [attr.aria-orientation]="direction"
        [attr.aria-valuemin]="area.minSize"
        [attr.aria-valuemax]="area.maxSize"
        [attr.aria-valuenow]="area.size"
        [attr.aria-valuetext]="getAriaAreaSizeText(area.size)"
      >
        <div class="as-split-gutter-icon"></div>
      </div>
    </ng-template>`,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.Emulated,
      styles: [":host{display:flex;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;overflow:hidden;width:100%;height:100%}:host>.as-split-gutter{border:none;flex-grow:0;flex-shrink:0;background-color:#eee;display:flex;align-items:center;justify-content:center}:host>.as-split-gutter.as-split-gutter-collapsed{flex-basis:1px!important;pointer-events:none}:host>.as-split-gutter>.as-split-gutter-icon{width:100%;height:100%;background-position:center center;background-repeat:no-repeat}:host ::ng-deep>.as-split-area{flex-grow:0;flex-shrink:0;overflow-x:hidden;overflow-y:auto}:host ::ng-deep>.as-split-area.as-hidden{flex:0 1 0px!important;overflow-x:hidden;overflow-y:hidden}:host ::ng-deep>.as-split-area .iframe-fix{position:absolute;top:0;left:0;width:100%;height:100%}:host.as-horizontal{flex-direction:row}:host.as-horizontal>.as-split-gutter{flex-direction:row;cursor:col-resize;height:100%}:host.as-horizontal>.as-split-gutter>.as-split-gutter-icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)}:host.as-horizontal ::ng-deep>.as-split-area{height:100%}:host.as-vertical{flex-direction:column}:host.as-vertical>.as-split-gutter{flex-direction:column;cursor:row-resize;width:100%}:host.as-vertical>.as-split-gutter .as-split-gutter-icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC)}:host.as-vertical ::ng-deep>.as-split-area{width:100%}:host.as-vertical ::ng-deep>.as-split-area.as-hidden{max-width:0}:host.as-disabled>.as-split-gutter{cursor:default}:host.as-disabled>.as-split-gutter .as-split-gutter-icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)}:host.as-transition.as-init:not(.as-dragging)>.as-split-gutter,:host.as-transition.as-init:not(.as-dragging) ::ng-deep>.as-split-area{transition:flex-basis .3s}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [ANGULAR_SPLIT_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    direction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    unit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    gutterSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    gutterStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    restrictMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    useTransition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    gutterDblClickDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    gutterClickDeltaPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    gutterAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    transitionEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    gutterClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    gutterDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    gutterEls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
      args: ['gutterEls']
    }]
  });
})();
class SplitAreaDirective {
  set order(v) {
    this._order = getInputPositiveNumber(v, null);
    this.split.updateArea(this, true, false);
  }
  get order() {
    return this._order;
  }
  set size(v) {
    this._size = getInputPositiveNumber(v, '*');
    this.split.updateArea(this, false, true);
  }
  get size() {
    return this._size;
  }
  set minSize(v) {
    this._minSize = getInputPositiveNumber(v, null);
    this.split.updateArea(this, false, true);
  }
  get minSize() {
    return this._minSize;
  }
  set maxSize(v) {
    this._maxSize = getInputPositiveNumber(v, null);
    this.split.updateArea(this, false, true);
  }
  get maxSize() {
    return this._maxSize;
  }
  set lockSize(v) {
    this._lockSize = getInputBoolean(v);
    this.split.updateArea(this, false, true);
  }
  get lockSize() {
    return this._lockSize;
  }
  set visible(v) {
    this._visible = getInputBoolean(v);
    if (this._visible) {
      this.split.showArea(this);
      this.renderer.removeClass(this.elRef.nativeElement, 'as-hidden');
    } else {
      this.split.hideArea(this);
      this.renderer.addClass(this.elRef.nativeElement, 'as-hidden');
    }
  }
  get visible() {
    return this._visible;
  }
  constructor(ngZone, elRef, renderer, split) {
    this.ngZone = ngZone;
    this.elRef = elRef;
    this.renderer = renderer;
    this.split = split;
    this._order = null;
    this._size = null;
    this._minSize = null;
    this._maxSize = null;
    this._lockSize = false;
    this._visible = true;
    this.lockListeners = [];
    this.renderer.addClass(this.elRef.nativeElement, 'as-split-area');
  }
  ngOnInit() {
    this.split.addArea(this);
    this.ngZone.runOutsideAngular(() => {
      this.transitionListener = this.renderer.listen(this.elRef.nativeElement, 'transitionend', event => {
        // Limit only flex-basis transition to trigger the event
        if (event.propertyName === 'flex-basis') {
          this.split.notify('transitionEnd', -1);
        }
      });
    });
    const iframeFixDiv = this.renderer.createElement('div');
    this.renderer.addClass(iframeFixDiv, 'iframe-fix');
    this.dragStartSubscription = this.split.dragStart.subscribe(() => {
      this.renderer.setStyle(this.elRef.nativeElement, 'position', 'relative');
      this.renderer.appendChild(this.elRef.nativeElement, iframeFixDiv);
    });
    this.dragEndSubscription = this.split.dragEnd.subscribe(() => {
      this.renderer.removeStyle(this.elRef.nativeElement, 'position');
      this.renderer.removeChild(this.elRef.nativeElement, iframeFixDiv);
    });
  }
  setStyleOrder(value) {
    this.renderer.setStyle(this.elRef.nativeElement, 'order', value);
  }
  setStyleFlex(grow, shrink, basis, isMin, isMax) {
    // Need 3 separated properties to work on IE11 (https://github.com/angular/flex-layout/issues/323)
    this.renderer.setStyle(this.elRef.nativeElement, 'flex-grow', grow);
    this.renderer.setStyle(this.elRef.nativeElement, 'flex-shrink', shrink);
    this.renderer.setStyle(this.elRef.nativeElement, 'flex-basis', basis);
    if (isMin === true) {
      this.renderer.addClass(this.elRef.nativeElement, 'as-min');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'as-min');
    }
    if (isMax === true) {
      this.renderer.addClass(this.elRef.nativeElement, 'as-max');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'as-max');
    }
  }
  lockEvents() {
    this.ngZone.runOutsideAngular(() => {
      this.lockListeners.push(this.renderer.listen(this.elRef.nativeElement, 'selectstart', () => false));
      this.lockListeners.push(this.renderer.listen(this.elRef.nativeElement, 'dragstart', () => false));
    });
  }
  unlockEvents() {
    while (this.lockListeners.length > 0) {
      const fct = this.lockListeners.pop();
      if (fct) {
        fct();
      }
    }
  }
  ngOnDestroy() {
    this.unlockEvents();
    if (this.transitionListener) {
      this.transitionListener();
    }
    this.dragStartSubscription?.unsubscribe();
    this.dragEndSubscription?.unsubscribe();
    this.split.removeArea(this);
  }
  collapse(newSize = 0, gutter = 'right') {
    this.split.collapseArea(this, newSize, gutter);
  }
  expand() {
    this.split.expandArea(this);
  }
  /** @nocollapse */
}
_class2 = SplitAreaDirective;
_class2.ɵfac = function _class2_Factory(t) {
  return new (t || _class2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SplitComponent));
};
/** @nocollapse */_class2.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _class2,
  selectors: [["as-split-area"], ["", "as-split-area", ""]],
  inputs: {
    order: "order",
    size: "size",
    minSize: "minSize",
    maxSize: "maxSize",
    lockSize: "lockSize",
    visible: "visible"
  },
  exportAs: ["asSplitArea"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitAreaDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'as-split-area, [as-split-area]',
      exportAs: 'asSplitArea'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: SplitComponent
    }];
  }, {
    order: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    lockSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class AngularSplitModule {}
_class3 = AngularSplitModule;
/** @nocollapse */_class3.ɵfac = function _class3_Factory(t) {
  return new (t || _class3)();
};
/** @nocollapse */_class3.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class3
});
/** @nocollapse */_class3.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularSplitModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
      declarations: [SplitComponent, SplitAreaDirective],
      exports: [SplitComponent, SplitAreaDirective]
    }]
  }], null, null);
})();

/*
 * Public API Surface of angular-split
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.a8edd447c658667a.js.map