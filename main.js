(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/beeman/oss/angular-split/src/main.ts */"zUnb");


/***/ }),

/***/ "3Ryi":
/*!*******************************************!*\
  !*** ./src/app/examples/example-types.ts ***!
  \*******************************************/
/*! exports provided: ExampleEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleEnum", function() { return ExampleEnum; });
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
})(ExampleEnum || (ExampleEnum = {}));


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function (event) {
            window.scrollTo(0, 0);
        });
    }
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-app-root',
            template: "\n    <sp-topbar></sp-topbar>\n    <div>\n      <router-outlet></router-outlet>\n    </div>\n  ",
            styles: ["\n      :host {\n        display: block;\n        width: 100%;\n        height: 100%;\n      }\n      :host > div {\n        padding-top: 54px;\n        width: 100%;\n        height: 100%;\n      }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "TYPU":
/*!*********************************************!*\
  !*** ./src/app/examples/examples.routes.ts ***!
  \*********************************************/
/*! exports provided: exampleRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exampleRoutes", function() { return exampleRoutes; });
/* harmony import */ var _example_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example-types */ "3Ryi");

var srcUrlBase = 'https://github.com/angular-split/angular-split/blob/main/';
var srcUrlBaseApp = srcUrlBase + "src/app/examples";
var exampleRoutes = [
    {
        data: {
            type: _example_types__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].SIMPLE,
            label: 'Simple split',
            srcUrl: srcUrlBaseApp + "/simple-split/simple-split.component.ts",
        },
        path: 'simple-split',
        loadChildren: function () { return Promise.all(/*! import() | simple-split-simple-split-module */[__webpack_require__.e("common"), __webpack_require__.e("simple-split-simple-split-module")]).then(__webpack_require__.bind(null, /*! ./simple-split/simple-split.module */ "UIUF")).then(function (m) { return m.SimpleSplitModule; }); },
    },
    {
        data: {
            type: _example_types__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].MINMAX,
            label: 'Split with minSize & maxSize',
            srcUrl: srcUrlBaseApp + "/min-max-split/min-max-split.component.ts",
        },
        path: 'min-max-split',
        loadChildren: function () { return Promise.all(/*! import() | min-max-split-min-max-split-module */[__webpack_require__.e("common"), __webpack_require__.e("min-max-split-min-max-split-module")]).then(__webpack_require__.bind(null, /*! ./min-max-split/min-max-split.module */ "Jov6")).then(function (m) { return m.MinMaxSplitModule; }); },
    },
    {
        data: {
            type: _example_types__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].NESTED,
            label: 'Nested splits',
            srcUrl: srcUrlBaseApp + "/nested-split/nested-split.component.ts",
        },
        path: 'nested-split',
        loadChildren: function () { return Promise.all(/*! import() | nested-split-nested-split-module */[__webpack_require__.e("common"), __webpack_require__.e("nested-split-nested-split-module")]).then(__webpack_require__.bind(null, /*! ./nested-split/nested-split.module */ "r7pf")).then(function (m) { return m.NestedSplitModule; }); },
    },
    {
        data: {
            type: _example_types__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].IFRAME,
            label: 'Split containing iframes',
            srcUrl: srcUrlBaseApp + "/iframes/iframes.component.ts",
        },
        path: 'iframes',
        loadChildren: function () { return Promise.all(/*! import() | iframes-iframes-module */[__webpack_require__.e("common"), __webpack_require__.e("iframes-iframes-module")]).then(__webpack_require__.bind(null, /*! ./iframes/iframes.module */ "wEbp")).then(function (m) { return m.IframesModule; }); },
    },
    {
        data: {
            type: _example_types__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].TRANSITION,
            label: 'Split with transitions',
            srcUrl: srcUrlBaseApp + "/split-transitions/split-transitions.component.ts",
        },
        path: 'split-transitions',
        loadChildren: function () { return Promise.all(/*! import() | split-transitions-split-transitions-module */[__webpack_require__.e("common"), __webpack_require__.e("split-transitions-split-transitions-module")]).then(__webpack_require__.bind(null, /*! ./split-transitions/split-transitions.module */ "bqVE")).then(function (m) { return m.SplitTransitionsModule; }); },
    },
    {
        data: {
            type: _example_types__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].SYNC,
            label: 'Split synchronized',
            srcUrl: srcUrlBaseApp + "/sync-split/sync-split.component.ts",
        },
        path: 'sync-split',
        loadChildren: function () { return Promise.all(/*! import() | sync-split-sync-split-module */[__webpack_require__.e("common"), __webpack_require__.e("sync-split-sync-split-module")]).then(__webpack_require__.bind(null, /*! ./sync-split/sync-split.module */ "dXdp")).then(function (m) { return m.SyncSplitModule; }); },
    },
    {
        data: {
            type: _example_types__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].STYLE,
            label: 'Split with custom gutter style',
            srcUrl: srcUrlBaseApp + "/custom-gutter-style/custom-gutter-style.component.ts",
        },
        path: 'custom-gutter-style',
        loadChildren: function () {
            return Promise.all(/*! import() | custom-gutter-style-custom-gutter-style-module */[__webpack_require__.e("common"), __webpack_require__.e("custom-gutter-style-custom-gutter-style-module")]).then(__webpack_require__.bind(null, /*! ./custom-gutter-style/custom-gutter-style.module */ "8BWw")).then(function (m) { return m.CustomGutterStyleModule; });
        },
    },
    {
        data: {
            type: _example_types__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].TOGGLE,
            label: 'Toggling areas using <code>[visible]</code> and <code>*ngIf</code>',
            srcUrl: srcUrlBaseApp + "/toggling-dom-and-visibility/toggling-dom-and-visibility.component.ts",
        },
        path: 'toggling-dom-and-visibility',
        loadChildren: function () {
            return Promise.all(/*! import() | toggling-dom-and-visibility-toggling-dom-and-visibility-module */[__webpack_require__.e("common"), __webpack_require__.e("toggling-dom-and-visibility-toggling-dom-and-visibility-module")]).then(__webpack_require__.bind(null, /*! ./toggling-dom-and-visibility/toggling-dom-and-visibility.module */ "XJ+q")).then(function (m) { return m.TogglingDomAndVisibilityModule; });
        },
    },
    {
        data: {
            type: _example_types__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].COLLAPSE,
            label: 'Collapse/Expand a specific area',
            srcUrl: srcUrlBaseApp + "/collapse-expand/collapse-expand.component.ts",
        },
        path: 'collapse-expand',
        loadChildren: function () { return Promise.all(/*! import() | collapse-expand-collapse-expand-module */[__webpack_require__.e("common"), __webpack_require__.e("collapse-expand-collapse-expand-module")]).then(__webpack_require__.bind(null, /*! ./collapse-expand/collapse-expand.module */ "gUNX")).then(function (m) { return m.CollapseExpandModule; }); },
    },
    {
        data: {
            type: _example_types__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].CLICK,
            label: 'Roll/unroll area on <code>(gutterClick)</code> event',
            srcUrl: srcUrlBaseApp + "/gutter-click-roll-unroll/gutter-click-roll-unroll.component.ts",
        },
        path: 'gutter-click-roll-unroll',
        loadChildren: function () {
            return Promise.all(/*! import() | gutter-click-roll-unroll-gutter-click-roll-unroll-module */[__webpack_require__.e("common"), __webpack_require__.e("gutter-click-roll-unroll-gutter-click-roll-unroll-module")]).then(__webpack_require__.bind(null, /*! ./gutter-click-roll-unroll/gutter-click-roll-unroll.module */ "xhZi")).then(function (m) { return m.GutterClickRollUnrollModule; });
        },
    },
    {
        data: {
            type: _example_types__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].CODE,
            label: 'Access and interact <code>SplitComponent</code> from TS class',
            srcUrl: srcUrlBaseApp + "/access-from-class/access-from-class.component.ts",
        },
        path: 'access-from-class',
        loadChildren: function () { return Promise.all(/*! import() | access-from-class-access-from-class-module */[__webpack_require__.e("common"), __webpack_require__.e("access-from-class-access-from-class-module")]).then(__webpack_require__.bind(null, /*! ./access-from-class/access-from-class.module */ "ktm8")).then(function (m) { return m.AccessFromClassModule; }); },
    },
    {
        data: {
            type: _example_types__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].GEEK,
            label: 'Geek demo (100% dynamic)',
            srcUrl: srcUrlBaseApp + "/geek-demo/geek-demo.component.ts",
        },
        path: 'geek-demo',
        loadChildren: function () { return Promise.all(/*! import() | geek-demo-geek-demo-module */[__webpack_require__.e("common"), __webpack_require__.e("geek-demo-geek-demo-module")]).then(__webpack_require__.bind(null, /*! ./geek-demo/geek-demo.module */ "pnRM")).then(function (m) { return m.GeekDemoModule; }); },
    },
    {
        data: {
            type: _example_types__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].DIR,
            label: 'Split inside right to left (RTL) page',
            srcUrl: srcUrlBaseApp + "/dir-rtl/dir-rtl.component.ts",
        },
        path: 'dir-rtl',
        loadChildren: function () { return Promise.all(/*! import() | dir-rtl-dir-rtl-module */[__webpack_require__.e("common"), __webpack_require__.e("dir-rtl-dir-rtl-module")]).then(__webpack_require__.bind(null, /*! ./dir-rtl/dir-rtl.module */ "lTBL")).then(function (m) { return m.DirRtlModule; }); },
    },
    {
        data: {
            type: _example_types__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].WORKSPACE,
            label: 'Fullscreen workspace saved in localStorage',
            srcUrl: srcUrlBaseApp + "/workspace-localstorage/workspace-localstorage.component.ts",
        },
        path: 'workspace-localstorage',
        loadChildren: function () {
            return Promise.all(/*! import() | workspace-localstorage-workspace-localstorage-module */[__webpack_require__.e("common"), __webpack_require__.e("workspace-localstorage-workspace-localstorage-module")]).then(__webpack_require__.bind(null, /*! ./workspace-localstorage/workspace-localstorage.module */ "ufoH")).then(function (m) { return m.WorkspaceLocalstorageModule; });
        },
    },
];


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/ui.module */ "oRDy");









var routes = [
    { path: '', loadChildren: function () { return __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(function (m) { return m.HomeModule; }); } },
    { path: 'changelog', loadChildren: function () { return __webpack_require__.e(/*! import() | changelog-changelog-module */ "changelog-changelog-module").then(__webpack_require__.bind(null, /*! ./changelog/changelog.module */ "j+8M")).then(function (m) { return m.ChangelogModule; }); } },
    {
        path: 'documentation',
        loadChildren: function () { return __webpack_require__.e(/*! import() | documentation-documentation-module */ "documentation-documentation-module").then(__webpack_require__.bind(null, /*! ./documentation/documentation.module */ "Z9WT")).then(function (m) { return m.DocumentationModule; }); },
    },
    {
        path: 'examples',
        loadChildren: function () { return __webpack_require__.e(/*! import() | examples-examples-module */ "examples-examples-module").then(__webpack_require__.bind(null, /*! ./examples/examples.module */ "ieWF")).then(function (m) { return m.ExamplesModule; }); },
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_8__["UiModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "bXS6":
/*!***************************************************!*\
  !*** ./src/app/ui/components/topbar.component.ts ***!
  \***************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _examples_examples_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../examples/examples.routes */ "TYPU");






var TopbarComponent = /** @class */ (function () {
    function TopbarComponent(sanitizer, router) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.router = router;
        this.isCollapsed = true;
        this.examples = _examples_examples_routes__WEBPACK_IMPORTED_MODULE_5__["exampleRoutes"];
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]; })).subscribe(function (event) {
            _this.isCollapsed = true;
        });
    }
    TopbarComponent.prototype.transform = function (label) {
        return this.sanitizer.bypassSecurityTrustHtml(label);
    };
    TopbarComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    TopbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-topbar',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                class: 'navbar navbar-expand-lg fixed-top navbar-dark bg-dark',
            },
            template: "\n    <button class=\"navbar-toggler hidden-lg-up\" (click)=\"isCollapsed = !isCollapsed\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <span class=\"mr-auto\">\n      <img src=\"/assets/logo.svg\" height=\"28\" class=\"mr-2\" alt=\"\" />\n      <a class=\"navbar-brand\" routerLink=\"/\">angular-split</a>\n    </span>\n    <div class=\"collapse navbar-collapse\" [collapse]=\"isCollapsed\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n          <a class=\"nav-link\" routerLink=\"/\">Home</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/changelog\">Changelog</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/documentation\">Documentation</a>\n        </li>\n        <li class=\"nav-item dropdown\" dropdown routerLinkActive=\"active\">\n          <a class=\"nav-link dropdown-toggle\" dropdownToggle>Examples <span class=\"caret\"></span></a>\n          <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n            <li *ngFor=\"let ex of examples\" routerLinkActive=\"active\">\n              <a\n                class=\"dropdown-item\"\n                [routerLink]=\"['/examples', ex.path]\"\n                [innerHTML]=\"transform(ex?.data?.label)\"\n              ></a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  ",
            styles: ["\n      :host {\n        /* To override default 'fixed' who prevent scrolling */\n        position: absolute;\n      }\n\n      a.navbar-brand,\n      a.navbar-brand:hover {\n        font-weight: bold;\n        color: #ffc421;\n      }\n\n      li > a {\n        cursor: pointer;\n      }\n\n      ul.dropdown-menu > li > a:active,\n      ul.dropdown-menu > li.active > a {\n        background-color: #eeeeee;\n        cursor: default;\n        color: #000000;\n      }\n\n      .navbar-toggler {\n        float: right;\n        margin-right: 20px;\n      }\n\n      @media (max-width: 992px) {\n        .container-fluid {\n          padding-left: 0;\n        }\n        a.navbar-brand {\n          margin-right: 0;\n        }\n      }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TopbarComponent);
    return TopbarComponent;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "oRDy":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-split */ "vX8g");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "s3T5");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/sortable */ "mzC4");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var _components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/exampleTitle.component */ "y7ZB");
/* harmony import */ var _components_topbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/topbar.component */ "bXS6");












var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_8__["SortableModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"].forRoot(),
                angular_split__WEBPACK_IMPORTED_MODULE_4__["AngularSplitModule"],
            ],
            declarations: [_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTitleComponent"], _components_topbar_component__WEBPACK_IMPORTED_MODULE_11__["TopbarComponent"]],
            exports: [_components_exampleTitle_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTitleComponent"], _components_topbar_component__WEBPACK_IMPORTED_MODULE_11__["TopbarComponent"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"], ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_8__["SortableModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"]],
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "vX8g":
/*!*******************************************************************!*\
  !*** ./dist/angular-split/__ivy_ngcc__/fesm2015/angular-split.js ***!
  \*******************************************************************/
/*! exports provided: AngularSplitModule, SplitAreaDirective, SplitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularSplitModule", function() { return AngularSplitModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitAreaDirective", function() { return SplitAreaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitComponent", function() { return SplitComponent; });
/* harmony import */ var _Users_beeman_oss_angular_split_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var _Users_beeman_oss_angular_split_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _Users_beeman_oss_angular_split_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} event
 * @return {?}
 */



var _c0 = ["gutterEls"];

function SplitComponent_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mousedown", function SplitComponent_ng_template_1_div_0_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      var index_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r5.startDragging($event, index_r1 * 2 + 1, index_r1 + 1);
    })("touchstart", function SplitComponent_ng_template_1_div_0_Template_div_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      var index_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r8.startDragging($event, index_r1 * 2 + 1, index_r1 + 1);
    })("mouseup", function SplitComponent_ng_template_1_div_0_Template_div_mouseup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      var index_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r10.clickGutter($event, index_r1 + 1);
    })("touchend", function SplitComponent_ng_template_1_div_0_Template_div_touchend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      var index_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r12.clickGutter($event, index_r1 + 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var index_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("flex-basis", ctx_r3.gutterSize, "px")("order", index_r1 * 2 + 1);
  }
}

function SplitComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SplitComponent_ng_template_1_div_0_Template, 3, 4, "div", 1);
  }

  if (rf & 2) {
    var last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", last_r2 === false);
  }
}

var _c1 = ["*"];

function getPointFromEvent(event) {
  // TouchEvent
  if (
  /** @type {?} */
  event.changedTouches !== undefined &&
  /** @type {?} */
  event.changedTouches.length > 0) {
    return {
      x:
      /** @type {?} */
      event.changedTouches[0].clientX,
      y:
      /** @type {?} */
      event.changedTouches[0].clientY
    };
  } // MouseEvent
  else if (
    /** @type {?} */
    event.clientX !== undefined &&
    /** @type {?} */
    event.clientY !== undefined) {
      return {
        x:
        /** @type {?} */
        event.clientX,
        y:
        /** @type {?} */
        event.clientY
      };
    }

  return null;
}
/**
 * @param {?} elRef
 * @param {?} direction
 * @return {?}
 */


function getElementPixelSize(elRef, direction) {
  /** @type {?} */
  var rect =
  /** @type {?} */
  elRef.nativeElement.getBoundingClientRect();
  return direction === 'horizontal' ? rect.width : rect.height;
}
/**
 * @param {?} v
 * @return {?}
 */


function getInputBoolean(v) {
  return typeof v === 'boolean' ? v : v === 'false' ? false : true;
}
/**
 * @template T
 * @param {?} v
 * @param {?} defaultValue
 * @return {?}
 */


function getInputPositiveNumber(v, defaultValue) {
  if (v === null || v === undefined) return defaultValue;
  v = Number(v);
  return !isNaN(v) && v >= 0 ? v : defaultValue;
}
/**
 * @param {?} unit
 * @param {?} sizes
 * @return {?}
 */


function isUserSizesValid(unit, sizes) {
  // All sizes have to be not null and total should be 100
  if (unit === 'percent') {
    /** @type {?} */
    var total = sizes.reduce(
    /**
    * @param {?} total
    * @param {?} s
    * @return {?}
    */
    function (total, s) {
      return s !== null ? total + s : total;
    }, 0);
    return sizes.every(
    /**
    * @param {?} s
    * @return {?}
    */
    function (s) {
      return s !== null;
    }) && total > 99.9 && total < 100.1;
  } // A size at null is mandatory but only one.


  if (unit === 'pixel') {
    return sizes.filter(
    /**
    * @param {?} s
    * @return {?}
    */
    function (s) {
      return s === null;
    }).length === 1;
  }
}
/**
 * @param {?} a
 * @return {?}
 */


function getAreaMinSize(a) {
  if (a.size === null) {
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
/**
 * @param {?} a
 * @return {?}
 */


function getAreaMaxSize(a) {
  if (a.size === null) {
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
/**
 * @param {?} unit
 * @param {?} sideAreas
 * @param {?} pixels
 * @param {?} allAreasSizePixel
 * @return {?}
 */


function getGutterSideAbsorptionCapacity(unit, sideAreas, pixels, allAreasSizePixel) {
  return sideAreas.reduce(
  /**
  * @param {?} acc
  * @param {?} area
  * @return {?}
  */
  function (acc, area) {
    /** @type {?} */
    var res = getAreaAbsorptionCapacity(unit, area, acc.remain, allAreasSizePixel);
    acc.list.push(res);
    acc.remain = res.pixelRemain;
    return acc;
  }, {
    remain: pixels,
    list: []
  });
}
/**
 * @param {?} unit
 * @param {?} areaSnapshot
 * @param {?} pixels
 * @param {?} allAreasSizePixel
 * @return {?}
 */


function getAreaAbsorptionCapacity(unit, areaSnapshot, pixels, allAreasSizePixel) {
  // No pain no gain
  if (pixels === 0) {
    return {
      areaSnapshot: areaSnapshot,
      pixelAbsorb: 0,
      percentAfterAbsorption: areaSnapshot.sizePercentAtStart,
      pixelRemain: 0
    };
  } // Area start at zero and need to be reduced, not possible


  if (areaSnapshot.sizePixelAtStart === 0 && pixels < 0) {
    return {
      areaSnapshot: areaSnapshot,
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
/**
 * @param {?} areaSnapshot
 * @param {?} pixels
 * @param {?} allAreasSizePixel
 * @return {?}
 */


function getAreaAbsorptionCapacityPercent(areaSnapshot, pixels, allAreasSizePixel) {
  /** @type {?} */
  var tempPixelSize = areaSnapshot.sizePixelAtStart + pixels;
  /** @type {?} */

  var tempPercentSize = tempPixelSize / allAreasSizePixel * 100 // ENLARGE AREA
  ; // ENLARGE AREA

  if (pixels > 0) {
    // If maxSize & newSize bigger than it > absorb to max and return remaining pixels
    if (areaSnapshot.area.maxSize !== null && tempPercentSize > areaSnapshot.area.maxSize) {
      // Use area.area.maxSize as newPercentSize and return calculate pixels remaining

      /** @type {?} */
      var maxSizePixel = areaSnapshot.area.maxSize / 100 * allAreasSizePixel;
      return {
        areaSnapshot: areaSnapshot,
        pixelAbsorb: maxSizePixel,
        percentAfterAbsorption: areaSnapshot.area.maxSize,
        pixelRemain: areaSnapshot.sizePixelAtStart + pixels - maxSizePixel
      };
    }

    return {
      areaSnapshot: areaSnapshot,
      pixelAbsorb: pixels,
      percentAfterAbsorption: tempPercentSize > 100 ? 100 : tempPercentSize,
      pixelRemain: 0
    };
  } // REDUCE AREA
  else if (pixels < 0) {
      // If minSize & newSize smaller than it > absorb to min and return remaining pixels
      if (areaSnapshot.area.minSize !== null && tempPercentSize < areaSnapshot.area.minSize) {
        // Use area.area.minSize as newPercentSize and return calculate pixels remaining

        /** @type {?} */
        var minSizePixel = areaSnapshot.area.minSize / 100 * allAreasSizePixel;
        return {
          areaSnapshot: areaSnapshot,
          pixelAbsorb: minSizePixel,
          percentAfterAbsorption: areaSnapshot.area.minSize,
          pixelRemain: areaSnapshot.sizePixelAtStart + pixels - minSizePixel
        };
      } // If reduced under zero > return remaining pixels
      else if (tempPercentSize < 0) {
          // Use 0 as newPercentSize and return calculate pixels remaining
          return {
            areaSnapshot: areaSnapshot,
            pixelAbsorb: -areaSnapshot.sizePixelAtStart,
            percentAfterAbsorption: 0,
            pixelRemain: pixels + areaSnapshot.sizePixelAtStart
          };
        }

      return {
        areaSnapshot: areaSnapshot,
        pixelAbsorb: pixels,
        percentAfterAbsorption: tempPercentSize,
        pixelRemain: 0
      };
    }
}
/**
 * @param {?} areaSnapshot
 * @param {?} pixels
 * @param {?} containerSizePixel
 * @return {?}
 */


function getAreaAbsorptionCapacityPixel(areaSnapshot, pixels, containerSizePixel) {
  /** @type {?} */
  var tempPixelSize = areaSnapshot.sizePixelAtStart + pixels // ENLARGE AREA
  ; // ENLARGE AREA

  if (pixels > 0) {
    // If maxSize & newSize bigger than it > absorb to max and return remaining pixels
    if (areaSnapshot.area.maxSize !== null && tempPixelSize > areaSnapshot.area.maxSize) {
      return {
        areaSnapshot: areaSnapshot,
        pixelAbsorb: areaSnapshot.area.maxSize - areaSnapshot.sizePixelAtStart,
        percentAfterAbsorption: -1,
        pixelRemain: tempPixelSize - areaSnapshot.area.maxSize
      };
    }

    return {
      areaSnapshot: areaSnapshot,
      pixelAbsorb: pixels,
      percentAfterAbsorption: -1,
      pixelRemain: 0
    };
  } // REDUCE AREA
  else if (pixels < 0) {
      // If minSize & newSize smaller than it > absorb to min and return remaining pixels
      if (areaSnapshot.area.minSize !== null && tempPixelSize < areaSnapshot.area.minSize) {
        return {
          areaSnapshot: areaSnapshot,
          pixelAbsorb: areaSnapshot.area.minSize + pixels - tempPixelSize,
          percentAfterAbsorption: -1,
          pixelRemain: tempPixelSize - areaSnapshot.area.minSize
        };
      } // If reduced under zero > return remaining pixels
      else if (tempPixelSize < 0) {
          return {
            areaSnapshot: areaSnapshot,
            pixelAbsorb: -areaSnapshot.sizePixelAtStart,
            percentAfterAbsorption: -1,
            pixelRemain: pixels + areaSnapshot.sizePixelAtStart
          };
        }

      return {
        areaSnapshot: areaSnapshot,
        pixelAbsorb: pixels,
        percentAfterAbsorption: -1,
        pixelRemain: 0
      };
    }
}
/**
 * @param {?} unit
 * @param {?} item
 * @return {?}
 */


function updateAreaSize(unit, item) {
  if (unit === 'percent') {
    item.areaSnapshot.area.size = item.percentAfterAbsorption;
  } else if (unit === 'pixel') {
    // Update size except for the wildcard size area
    if (item.areaSnapshot.area.size !== null) {
      item.areaSnapshot.area.size = item.areaSnapshot.sizePixelAtStart + item.pixelAbsorb;
    }
  }
}
/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/split.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

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


var SplitComponent = /*#__PURE__*/function () {
  /**
   * @param {?} ngZone
   * @param {?} elRef
   * @param {?} cdRef
   * @param {?} renderer
   */
  function SplitComponent(ngZone, elRef, cdRef, renderer) {
    Object(_Users_beeman_oss_angular_split_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SplitComponent);

    this.ngZone = ngZone;
    this.elRef = elRef;
    this.cdRef = cdRef;
    this.renderer = renderer;
    this._direction = 'horizontal';
    this._unit = 'percent';
    this._gutterSize = 11;
    this._gutterStep = 1;
    this._restrictMove = false;
    this._useTransition = false;
    this._disabled = false;
    this._dir = 'ltr';
    this._gutterDblClickDuration = 0;
    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](false);
    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](false);
    this.gutterClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](false);
    this.gutterDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](false);
    this.dragProgressSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    this.dragProgress$ = this.dragProgressSubject.asObservable();
    this.isDragging = false;
    this.isWaitingClear = false;
    this.dragListeners = [];
    this.snapshot = null;
    this.startPoint = null;
    this.endPoint = null;
    this.displayedAreas = [];
    this.hiddenAreas = [];
    this._clickTimeout = null; // To force adding default class, could be override by user @Input() or not

    this.direction = this._direction;
  }
  /**
   * @param {?} v
   * @return {?}
   */


  Object(_Users_beeman_oss_angular_split_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SplitComponent, [{
    key: "ngAfterViewInit",

    /**
     * @return {?}
     */
    value: function ngAfterViewInit() {
      var _this = this;

      this.ngZone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        // To avoid transition at first rendering
        setTimeout(
        /**
        * @return {?}
        */
        function () {
          return _this.renderer.addClass(_this.elRef.nativeElement, 'as-init');
        });
      });
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "getNbGutters",
    value: function getNbGutters() {
      return this.displayedAreas.length === 0 ? 0 : this.displayedAreas.length - 1;
    }
    /**
     * @param {?} component
     * @return {?}
     */

  }, {
    key: "addArea",
    value: function addArea(component) {
      /** @type {?} */
      var newArea = {
        component: component,
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
    /**
     * @param {?} component
     * @return {?}
     */

  }, {
    key: "removeArea",
    value: function removeArea(component) {
      if (this.displayedAreas.some(
      /**
      * @param {?} a
      * @return {?}
      */
      function (a) {
        return a.component === component;
      })) {
        /** @type {?} */
        var area = this.displayedAreas.find(
        /**
        * @param {?} a
        * @return {?}
        */
        function (a) {
          return a.component === component;
        });
        this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);
        this.build(true, true);
      } else if (this.hiddenAreas.some(
      /**
      * @param {?} a
      * @return {?}
      */
      function (a) {
        return a.component === component;
      })) {
        /** @type {?} */
        var _area = this.hiddenAreas.find(
        /**
        * @param {?} a
        * @return {?}
        */
        function (a) {
          return a.component === component;
        });

        this.hiddenAreas.splice(this.hiddenAreas.indexOf(_area), 1);
      }
    }
    /**
     * @param {?} component
     * @param {?} resetOrders
     * @param {?} resetSizes
     * @return {?}
     */

  }, {
    key: "updateArea",
    value: function updateArea(component, resetOrders, resetSizes) {
      if (component.visible === true) {
        this.build(resetOrders, resetSizes);
      }
    }
    /**
     * @param {?} component
     * @return {?}
     */

  }, {
    key: "showArea",
    value: function showArea(component) {
      var _this$displayedAreas;

      /** @type {?} */
      var area = this.hiddenAreas.find(
      /**
      * @param {?} a
      * @return {?}
      */
      function (a) {
        return a.component === component;
      });

      if (area === undefined) {
        return;
      }
      /** @type {?} */


      var areas = this.hiddenAreas.splice(this.hiddenAreas.indexOf(area), 1);

      (_this$displayedAreas = this.displayedAreas).push.apply(_this$displayedAreas, Object(_Users_beeman_oss_angular_split_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(areas));

      this.build(true, true);
    }
    /**
     * @param {?} comp
     * @return {?}
     */

  }, {
    key: "hideArea",
    value: function hideArea(comp) {
      var _this$hiddenAreas;

      /** @type {?} */
      var area = this.displayedAreas.find(
      /**
      * @param {?} a
      * @return {?}
      */
      function (a) {
        return a.component === comp;
      });

      if (area === undefined) {
        return;
      }
      /** @type {?} */


      var areas = this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);
      areas.forEach(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        item.order = 0;
        item.size = 0;
      });

      (_this$hiddenAreas = this.hiddenAreas).push.apply(_this$hiddenAreas, Object(_Users_beeman_oss_angular_split_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(areas));

      this.build(true, true);
    }
    /**
     * @return {?}
     */

  }, {
    key: "getVisibleAreaSizes",
    value: function getVisibleAreaSizes() {
      return this.displayedAreas.map(
      /**
      * @param {?} a
      * @return {?}
      */
      function (a) {
        return a.size === null ? '*' : a.size;
      });
    }
    /**
     * @param {?} sizes
     * @return {?}
     */

  }, {
    key: "setVisibleAreaSizes",
    value: function setVisibleAreaSizes(sizes) {
      if (sizes.length !== this.displayedAreas.length) {
        return false;
      }
      /** @type {?} */


      var formattedSizes = sizes.map(
      /**
      * @param {?} s
      * @return {?}
      */
      function (s) {
        return getInputPositiveNumber(s, null);
      });
      /** @type {?} */

      var isValid = isUserSizesValid(this.unit, formattedSizes);

      if (isValid === false) {
        return false;
      } // @ts-ignore


      this.displayedAreas.forEach(
      /**
      * @param {?} area
      * @param {?} i
      * @return {?}
      */
      function (area, i) {
        return area.component._size = formattedSizes[i];
      });
      this.build(false, true);
      return true;
    }
    /**
     * @private
     * @param {?} resetOrders
     * @param {?} resetSizes
     * @return {?}
     */

  }, {
    key: "build",
    value: function build(resetOrders, resetSizes) {
      this.stopDragging(); // ¤ AREAS ORDER

      if (resetOrders === true) {
        // If user provided 'order' for each area, use it to sort them.
        if (this.displayedAreas.every(
        /**
        * @param {?} a
        * @return {?}
        */
        function (a) {
          return a.component.order !== null;
        })) {
          this.displayedAreas.sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            return (
              /** @type {?} */
              a.component.order -
              /** @type {?} */
              b.component.order
            );
          });
        } // Then set real order with multiples of 2, numbers between will be used by gutters.


        this.displayedAreas.forEach(
        /**
        * @param {?} area
        * @param {?} i
        * @return {?}
        */
        function (area, i) {
          area.order = i * 2;
          area.component.setStyleOrder(area.order);
        });
      } // ¤ AREAS SIZE


      if (resetSizes === true) {
        /** @type {?} */
        var useUserSizes = isUserSizesValid(this.unit, this.displayedAreas.map(
        /**
        * @param {?} a
        * @return {?}
        */
        function (a) {
          return a.component.size;
        }));

        switch (this.unit) {
          case 'percent':
            {
              /** @type {?} */
              var defaultSize = 100 / this.displayedAreas.length;
              this.displayedAreas.forEach(
              /**
              * @param {?} area
              * @return {?}
              */
              function (area) {
                area.size = useUserSizes ?
                /** @type {?} */
                area.component.size : defaultSize;
                area.minSize = getAreaMinSize(area);
                area.maxSize = getAreaMaxSize(area);
              });
              break;
            }

          case 'pixel':
            {
              if (useUserSizes) {
                this.displayedAreas.forEach(
                /**
                * @param {?} area
                * @return {?}
                */
                function (area) {
                  area.size = area.component.size;
                  area.minSize = getAreaMinSize(area);
                  area.maxSize = getAreaMaxSize(area);
                });
              } else {
                /** @type {?} */
                var wildcardSizeAreas = this.displayedAreas.filter(
                /**
                * @param {?} a
                * @return {?}
                */
                function (a) {
                  return a.component.size === null;
                }) // No wildcard area > Need to select one arbitrarily > first
                ; // No wildcard area > Need to select one arbitrarily > first

                if (wildcardSizeAreas.length === 0 && this.displayedAreas.length > 0) {
                  this.displayedAreas.forEach(
                  /**
                  * @param {?} area
                  * @param {?} i
                  * @return {?}
                  */
                  function (area, i) {
                    area.size = i === 0 ? null : area.component.size;
                    area.minSize = i === 0 ? null : getAreaMinSize(area);
                    area.maxSize = i === 0 ? null : getAreaMaxSize(area);
                  });
                } else if (wildcardSizeAreas.length > 1) {
                  // More than one wildcard area > Need to keep only one arbitrarily > first

                  /** @type {?} */
                  var alreadyGotOne = false;
                  this.displayedAreas.forEach(
                  /**
                  * @param {?} area
                  * @return {?}
                  */
                  function (area) {
                    if (area.component.size === null) {
                      if (alreadyGotOne === false) {
                        area.size = null;
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
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "refreshStyleSizes",
    value: function refreshStyleSizes() {
      var _this2 = this;

      ///////////////////////////////////////////
      // PERCENT MODE
      if (this.unit === 'percent') {
        // Only one area > flex-basis 100%
        if (this.displayedAreas.length === 1) {
          this.displayedAreas[0].component.setStyleFlex(0, 0, "100%", false, false);
        } else {
          // Multiple areas > use each percent basis

          /** @type {?} */
          var sumGutterSize = this.getNbGutters() * this.gutterSize;
          this.displayedAreas.forEach(
          /**
          * @param {?} area
          * @return {?}
          */
          function (area) {
            area.component.setStyleFlex(0, 0, "calc( ".concat(area.size, "% - ").concat(
            /** @type {?} */
            area.size / 100 * sumGutterSize, "px )"), area.minSize !== null && area.minSize === area.size, area.maxSize !== null && area.maxSize === area.size);
          });
        }
      } else if (this.unit === 'pixel') {
        ///////////////////////////////////////////
        // PIXEL MODE
        this.displayedAreas.forEach(
        /**
        * @param {?} area
        * @return {?}
        */
        function (area) {
          // Area with wildcard size
          if (area.size === null) {
            if (_this2.displayedAreas.length === 1) {
              area.component.setStyleFlex(1, 1, "100%", false, false);
            } else {
              area.component.setStyleFlex(1, 1, "auto", false, false);
            }
          } else {
            // Area with pixel size
            // Only one area > flex-basis 100%
            if (_this2.displayedAreas.length === 1) {
              area.component.setStyleFlex(0, 0, "100%", false, false);
            } else {
              // Multiple areas > use each pixel basis
              area.component.setStyleFlex(0, 0, "".concat(area.size, "px"), area.minSize !== null && area.minSize === area.size, area.maxSize !== null && area.maxSize === area.size);
            }
          }
        });
      }
    }
    /**
     * @param {?} event
     * @param {?} gutterNum
     * @return {?}
     */

  }, {
    key: "clickGutter",
    value: function clickGutter(event, gutterNum) {
      var _this3 = this;

      /** @type {?} */
      var tempPoint = getPointFromEvent(event) // Be sure mouseup/touchend happened at same point as mousedown/touchstart to trigger click/dblclick
      ; // Be sure mouseup/touchend happened at same point as mousedown/touchstart to trigger click/dblclick

      if (this.startPoint && this.startPoint.x === tempPoint.x && this.startPoint.y === tempPoint.y) {
        // If timeout in progress and new click > clearTimeout & dblClickEvent
        if (this._clickTimeout !== null) {
          window.clearTimeout(this._clickTimeout);
          this._clickTimeout = null;
          this.notify('dblclick', gutterNum);
          this.stopDragging();
        } else {
          // Else start timeout to call clickEvent at end
          this._clickTimeout = window.setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this3._clickTimeout = null;

            _this3.notify('click', gutterNum);

            _this3.stopDragging();
          }, this.gutterDblClickDuration);
        }
      }
    }
    /**
     * @param {?} event
     * @param {?} gutterOrder
     * @param {?} gutterNum
     * @return {?}
     */

  }, {
    key: "startDragging",
    value: function startDragging(event, gutterOrder, gutterNum) {
      var _this4 = this;

      event.preventDefault();
      event.stopPropagation();
      this.startPoint = getPointFromEvent(event);

      if (this.startPoint === null || this.disabled === true || this.isWaitingClear === true) {
        return;
      }

      this.snapshot = {
        gutterNum: gutterNum,
        lastSteppedOffset: 0,
        allAreasSizePixel: getElementPixelSize(this.elRef, this.direction) - this.getNbGutters() * this.gutterSize,
        allInvolvedAreasSizePercent: 100,
        areasBeforeGutter: [],
        areasAfterGutter: []
      };
      this.displayedAreas.forEach(
      /**
      * @param {?} area
      * @return {?}
      */
      function (area) {
        /** @type {?} */
        var areaSnapshot = {
          area: area,
          sizePixelAtStart: getElementPixelSize(area.component.elRef, _this4.direction),
          sizePercentAtStart: _this4.unit === 'percent' ? area.size : -1
        };

        if (area.order < gutterOrder) {
          if (_this4.restrictMove === true) {
            _this4.snapshot.areasBeforeGutter = [areaSnapshot];
          } else {
            _this4.snapshot.areasBeforeGutter.unshift(areaSnapshot);
          }
        } else if (area.order > gutterOrder) {
          if (_this4.restrictMove === true) {
            if (_this4.snapshot.areasAfterGutter.length === 0) {
              _this4.snapshot.areasAfterGutter = [areaSnapshot];
            }
          } else {
            _this4.snapshot.areasAfterGutter.push(areaSnapshot);
          }
        }
      });
      this.snapshot.allInvolvedAreasSizePercent = [].concat(Object(_Users_beeman_oss_angular_split_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.snapshot.areasBeforeGutter), Object(_Users_beeman_oss_angular_split_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.snapshot.areasAfterGutter)).reduce(
      /**
      * @param {?} t
      * @param {?} a
      * @return {?}
      */
      function (t, a) {
        return t + a.sizePercentAtStart;
      }, 0);

      if (this.snapshot.areasBeforeGutter.length === 0 || this.snapshot.areasAfterGutter.length === 0) {
        return;
      }

      this.dragListeners.push(this.renderer.listen('document', 'mouseup', this.stopDragging.bind(this)));
      this.dragListeners.push(this.renderer.listen('document', 'touchend', this.stopDragging.bind(this)));
      this.dragListeners.push(this.renderer.listen('document', 'touchcancel', this.stopDragging.bind(this)));
      this.ngZone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        _this4.dragListeners.push(_this4.renderer.listen('document', 'mousemove', _this4.dragEvent.bind(_this4)));

        _this4.dragListeners.push(_this4.renderer.listen('document', 'touchmove', _this4.dragEvent.bind(_this4)));
      });
      this.displayedAreas.forEach(
      /**
      * @param {?} area
      * @return {?}
      */
      function (area) {
        return area.component.lockEvents();
      });
      this.isDragging = true;
      this.renderer.addClass(this.elRef.nativeElement, 'as-dragging');
      this.renderer.addClass(this.gutterEls.toArray()[this.snapshot.gutterNum - 1].nativeElement, 'as-dragged');
      this.notify('start', this.snapshot.gutterNum);
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "dragEvent",
    value: function dragEvent(event) {
      var _this5 = this;

      event.preventDefault();
      event.stopPropagation();

      if (this._clickTimeout !== null) {
        window.clearTimeout(this._clickTimeout);
        this._clickTimeout = null;
      }

      if (this.isDragging === false) {
        return;
      }

      this.endPoint = getPointFromEvent(event);

      if (this.endPoint === null) {
        return;
      } // Calculate steppedOffset

      /** @type {?} */


      var offset = this.direction === 'horizontal' ? this.startPoint.x - this.endPoint.x : this.startPoint.y - this.endPoint.y;

      if (this.dir === 'rtl') {
        offset = -offset;
      }
      /** @type {?} */


      var steppedOffset = Math.round(offset / this.gutterStep) * this.gutterStep;

      if (steppedOffset === this.snapshot.lastSteppedOffset) {
        return;
      }

      this.snapshot.lastSteppedOffset = steppedOffset; // Need to know if each gutter side areas could reacts to steppedOffset

      /** @type {?} */

      var areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -steppedOffset, this.snapshot.allAreasSizePixel);
      /** @type {?} */

      var areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset, this.snapshot.allAreasSizePixel) // Each gutter side areas can't absorb all offset
      ; // Each gutter side areas can't absorb all offset

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

        /** @type {?} */
        var all = [].concat(Object(_Users_beeman_oss_angular_split_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(areasBefore.list), Object(_Users_beeman_oss_angular_split_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(areasAfter.list));
        /** @type {?} */

        var areaToReset = all.find(
        /**
        * @param {?} a
        * @return {?}
        */
        function (a) {
          return a.percentAfterAbsorption !== 0 && a.percentAfterAbsorption !== a.areaSnapshot.area.minSize && a.percentAfterAbsorption !== a.areaSnapshot.area.maxSize;
        });

        if (areaToReset) {
          areaToReset.percentAfterAbsorption = this.snapshot.allInvolvedAreasSizePercent - all.filter(
          /**
          * @param {?} a
          * @return {?}
          */
          function (a) {
            return a !== areaToReset;
          }).reduce(
          /**
          * @param {?} total
          * @param {?} a
          * @return {?}
          */
          function (total, a) {
            return total + a.percentAfterAbsorption;
          }, 0);
        }
      } // Now we know areas could absorb steppedOffset, time to really update sizes


      areasBefore.list.forEach(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        return updateAreaSize(_this5.unit, item);
      });
      areasAfter.list.forEach(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        return updateAreaSize(_this5.unit, item);
      });
      this.refreshStyleSizes();
      this.notify('progress', this.snapshot.gutterNum);
    }
    /**
     * @private
     * @param {?=} event
     * @return {?}
     */

  }, {
    key: "stopDragging",
    value: function stopDragging(event) {
      var _this6 = this;

      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (this.isDragging === false) {
        return;
      }

      this.displayedAreas.forEach(
      /**
      * @param {?} area
      * @return {?}
      */
      function (area) {
        return area.component.unlockEvents();
      });

      while (this.dragListeners.length > 0) {
        /** @type {?} */
        var fct = this.dragListeners.pop();

        if (fct) {
          fct();
        }
      } // Warning: Have to be before "notify('end')"
      // because "notify('end')"" can be linked to "[size]='x'" > "build()" > "stopDragging()"


      this.isDragging = false; // If moved from starting point, notify end

      if (this.endPoint && (this.startPoint.x !== this.endPoint.x || this.startPoint.y !== this.endPoint.y)) {
        this.notify('end', this.snapshot.gutterNum);
      }

      this.renderer.removeClass(this.elRef.nativeElement, 'as-dragging');
      this.renderer.removeClass(this.gutterEls.toArray()[this.snapshot.gutterNum - 1].nativeElement, 'as-dragged');
      this.snapshot = null;
      this.isWaitingClear = true; // Needed to let (click)="clickGutter(...)" event run and verify if mouse moved or not

      this.ngZone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        setTimeout(
        /**
        * @return {?}
        */
        function () {
          _this6.startPoint = null;
          _this6.endPoint = null;
          _this6.isWaitingClear = false;
        });
      });
    }
    /**
     * @param {?} type
     * @param {?} gutterNum
     * @return {?}
     */

  }, {
    key: "notify",
    value: function notify(type, gutterNum) {
      var _this7 = this;

      /** @type {?} */
      var sizes = this.getVisibleAreaSizes();

      if (type === 'start') {
        this.dragStart.emit({
          gutterNum: gutterNum,
          sizes: sizes
        });
      } else if (type === 'end') {
        this.dragEnd.emit({
          gutterNum: gutterNum,
          sizes: sizes
        });
      } else if (type === 'click') {
        this.gutterClick.emit({
          gutterNum: gutterNum,
          sizes: sizes
        });
      } else if (type === 'dblclick') {
        this.gutterDblClick.emit({
          gutterNum: gutterNum,
          sizes: sizes
        });
      } else if (type === 'transitionEnd') {
        if (this.transitionEndSubscriber) {
          this.ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return _this7.transitionEndSubscriber.next(sizes);
          });
        }
      } else if (type === 'progress') {
        // Stay outside zone to allow users do what they want about change detection mechanism.
        this.dragProgressSubject.next({
          gutterNum: gutterNum,
          sizes: sizes
        });
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.stopDragging();
    }
    /**
     * @param {?} comp
     * @param {?} newSize
     * @param {?} gutter
     * @return {?}
     */

  }, {
    key: "collapseArea",
    value: function collapseArea(comp, newSize, gutter) {
      /** @type {?} */
      var area = this.displayedAreas.find(
      /**
      * @param {?} a
      * @return {?}
      */
      function (a) {
        return a.component === comp;
      });

      if (area === undefined) {
        return;
      }
      /** @type {?} */


      var whichGutter = gutter === 'right' ? 1 : -1;

      if (!area.sizeBeforeCollapse) {
        area.sizeBeforeCollapse = area.size;
        area.gutterBeforeCollapse = whichGutter;
      }

      area.size = newSize;
      /** @type {?} */

      var gtr = this.gutterEls.find(
      /**
      * @param {?} f
      * @return {?}
      */
      function (f) {
        return f.nativeElement.style.order === "".concat(area.order + whichGutter);
      });

      if (gtr) {
        this.renderer.addClass(gtr.nativeElement, 'as-split-gutter-collapsed');
      }

      this.updateArea(comp, false, false);
    }
    /**
     * @param {?} comp
     * @return {?}
     */

  }, {
    key: "expandArea",
    value: function expandArea(comp) {
      /** @type {?} */
      var area = this.displayedAreas.find(
      /**
      * @param {?} a
      * @return {?}
      */
      function (a) {
        return a.component === comp;
      });

      if (area === undefined) {
        return;
      }

      if (!area.sizeBeforeCollapse) {
        return;
      }

      area.size = area.sizeBeforeCollapse;
      area.sizeBeforeCollapse = null;
      /** @type {?} */

      var gtr = this.gutterEls.find(
      /**
      * @param {?} f
      * @return {?}
      */
      function (f) {
        return f.nativeElement.style.order === "".concat(area.order + area.gutterBeforeCollapse);
      });

      if (gtr) {
        this.renderer.removeClass(gtr.nativeElement, 'as-split-gutter-collapsed');
      }

      this.updateArea(comp, false, false);
    }
  }, {
    key: "direction",
    set: function set(v) {
      this._direction = v === 'vertical' ? 'vertical' : 'horizontal';
      this.renderer.addClass(this.elRef.nativeElement, "as-".concat(this._direction));
      this.renderer.removeClass(this.elRef.nativeElement, "as-".concat(this._direction === 'vertical' ? 'horizontal' : 'vertical'));
      this.build(false, false);
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._direction;
    }
    /**
     * @param {?} v
     * @return {?}
     */

  }, {
    key: "unit",
    set: function set(v) {
      this._unit = v === 'pixel' ? 'pixel' : 'percent';
      this.renderer.addClass(this.elRef.nativeElement, "as-".concat(this._unit));
      this.renderer.removeClass(this.elRef.nativeElement, "as-".concat(this._unit === 'pixel' ? 'percent' : 'pixel'));
      this.build(false, true);
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._unit;
    }
    /**
     * @param {?} v
     * @return {?}
     */

  }, {
    key: "gutterSize",
    set: function set(v) {
      this._gutterSize = getInputPositiveNumber(v, 11);
      this.build(false, false);
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._gutterSize;
    }
    /**
     * @param {?} v
     * @return {?}
     */

  }, {
    key: "gutterStep",
    set: function set(v) {
      this._gutterStep = getInputPositiveNumber(v, 1);
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._gutterStep;
    }
    /**
     * @param {?} v
     * @return {?}
     */

  }, {
    key: "restrictMove",
    set: function set(v) {
      this._restrictMove = getInputBoolean(v);
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._restrictMove;
    }
    /**
     * @param {?} v
     * @return {?}
     */

  }, {
    key: "useTransition",
    set: function set(v) {
      this._useTransition = getInputBoolean(v);

      if (this._useTransition) {
        this.renderer.addClass(this.elRef.nativeElement, 'as-transition');
      } else {
        this.renderer.removeClass(this.elRef.nativeElement, 'as-transition');
      }
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._useTransition;
    }
    /**
     * @param {?} v
     * @return {?}
     */

  }, {
    key: "disabled",
    set: function set(v) {
      this._disabled = getInputBoolean(v);

      if (this._disabled) {
        this.renderer.addClass(this.elRef.nativeElement, 'as-disabled');
      } else {
        this.renderer.removeClass(this.elRef.nativeElement, 'as-disabled');
      }
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._disabled;
    }
    /**
     * @param {?} v
     * @return {?}
     */

  }, {
    key: "dir",
    set: function set(v) {
      this._dir = v === 'rtl' ? 'rtl' : 'ltr';
      this.renderer.setAttribute(this.elRef.nativeElement, 'dir', this._dir);
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._dir;
    }
    /**
     * @param {?} v
     * @return {?}
     */

  }, {
    key: "gutterDblClickDuration",
    set: function set(v) {
      this._gutterDblClickDuration = getInputPositiveNumber(v, 0);
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._gutterDblClickDuration;
    }
    /**
     * @return {?}
     */

  }, {
    key: "transitionEnd",
    get: function get() {
      var _this8 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](
      /**
      * @param {?} subscriber
      * @return {?}
      */
      function (subscriber) {
        return _this8.transitionEndSubscriber = subscriber;
      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(20));
    }
  }]);

  return SplitComponent;
}();

SplitComponent.ɵfac = function SplitComponent_Factory(t) {
  return new (t || SplitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]));
};

SplitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SplitComponent,
  selectors: [["as-split"]],
  viewQuery: function SplitComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.gutterEls = _t);
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
    gutterDblClickDuration: "gutterDblClickDuration"
  },
  outputs: {
    dragStart: "dragStart",
    dragEnd: "dragEnd",
    gutterClick: "gutterClick",
    gutterDblClick: "gutterDblClick",
    transitionEnd: "transitionEnd"
  },
  exportAs: ["asSplit"],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 1,
  consts: [["ngFor", "", 3, "ngForOf"], ["class", "as-split-gutter", 3, "flex-basis", "order", "mousedown", "touchstart", "mouseup", "touchend", 4, "ngIf"], [1, "as-split-gutter", 3, "mousedown", "touchstart", "mouseup", "touchend"], ["gutterEls", ""], [1, "as-split-gutter-icon"]],
  template: function SplitComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SplitComponent_ng_template_1_Template, 1, 1, "ng-template", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.displayedAreas);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
  styles: ["[_nghost-%COMP%]{align-items:stretch;display:flex;flex-wrap:nowrap;height:100%;justify-content:flex-start;overflow:hidden;width:100%}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{align-items:center;background-color:#eee;display:flex;flex-grow:0;flex-shrink:0;justify-content:center}[_nghost-%COMP%] > .as-split-gutter.as-split-gutter-collapsed[_ngcontent-%COMP%]{flex-basis:1px!important;pointer-events:none}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;height:100%;width:100%}[_nghost-%COMP%]    >.as-split-area{flex-grow:0;flex-shrink:0;overflow-x:hidden;overflow-y:auto}[_nghost-%COMP%]    >.as-split-area.as-hidden{flex:0 1 0px!important;overflow-x:hidden;overflow-y:hidden}.as-horizontal[_nghost-%COMP%]{flex-direction:row}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:col-resize;flex-direction:row;height:100%}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==\")}.as-horizontal[_nghost-%COMP%]    >.as-split-area{height:100%}.as-vertical[_nghost-%COMP%]{flex-direction:column}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:row-resize;flex-direction:column;width:100%}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC\")}.as-vertical[_nghost-%COMP%]    >.as-split-area{width:100%}.as-vertical[_nghost-%COMP%]    >.as-split-area.as-hidden{max-width:0}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:default}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url()}.as-transition.as-init[_nghost-%COMP%]:not(.as-dragging)    >.as-split-area, .as-transition.as-init[_nghost-%COMP%]:not(.as-dragging) > .as-split-gutter[_ngcontent-%COMP%]{transition:flex-basis .3s}"],
  changeDetection: 0
});
/** @nocollapse */

SplitComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
  }];
};

SplitComponent.propDecorators = {
  direction: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  unit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  gutterSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  gutterStep: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  restrictMove: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  useTransition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  dir: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  gutterDblClickDuration: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  transitionEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  dragStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  dragEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  gutterClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  gutterDblClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  gutterEls: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
    args: ['gutterEls']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SplitComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      selector: 'as-split',
      exportAs: 'asSplit',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
      template: " <ng-content></ng-content>\n    <ng-template ngFor [ngForOf]=\"displayedAreas\" let-index=\"index\" let-last=\"last\">\n      <div\n        *ngIf=\"last === false\"\n        #gutterEls\n        class=\"as-split-gutter\"\n        [style.flex-basis.px]=\"gutterSize\"\n        [style.order]=\"index * 2 + 1\"\n        (mousedown)=\"startDragging($event, index * 2 + 1, index + 1)\"\n        (touchstart)=\"startDragging($event, index * 2 + 1, index + 1)\"\n        (mouseup)=\"clickGutter($event, index + 1)\"\n        (touchend)=\"clickGutter($event, index + 1)\"\n      >\n        <div class=\"as-split-gutter-icon\"></div>\n      </div>\n    </ng-template>",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
      styles: [":host{align-items:stretch;display:flex;flex-wrap:nowrap;height:100%;justify-content:flex-start;overflow:hidden;width:100%}:host>.as-split-gutter{align-items:center;background-color:#eee;display:flex;flex-grow:0;flex-shrink:0;justify-content:center}:host>.as-split-gutter.as-split-gutter-collapsed{flex-basis:1px!important;pointer-events:none}:host>.as-split-gutter>.as-split-gutter-icon{background-position:50%;background-repeat:no-repeat;height:100%;width:100%}:host ::ng-deep>.as-split-area{flex-grow:0;flex-shrink:0;overflow-x:hidden;overflow-y:auto}:host ::ng-deep>.as-split-area.as-hidden{flex:0 1 0px!important;overflow-x:hidden;overflow-y:hidden}:host.as-horizontal{flex-direction:row}:host.as-horizontal>.as-split-gutter{cursor:col-resize;flex-direction:row;height:100%}:host.as-horizontal>.as-split-gutter>.as-split-gutter-icon{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==\")}:host.as-horizontal ::ng-deep>.as-split-area{height:100%}:host.as-vertical{flex-direction:column}:host.as-vertical>.as-split-gutter{cursor:row-resize;flex-direction:column;width:100%}:host.as-vertical>.as-split-gutter .as-split-gutter-icon{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC\")}:host.as-vertical ::ng-deep>.as-split-area{width:100%}:host.as-vertical ::ng-deep>.as-split-area.as-hidden{max-width:0}:host.as-disabled>.as-split-gutter{cursor:default}:host.as-disabled>.as-split-gutter .as-split-gutter-icon{background-image:url()}:host.as-transition.as-init:not(.as-dragging) ::ng-deep>.as-split-area,:host.as-transition.as-init:not(.as-dragging)>.as-split-gutter{transition:flex-basis .3s}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
    }];
  }, {
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    gutterClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    gutterDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    direction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    unit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    gutterSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    gutterStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    restrictMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    useTransition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    dir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    gutterDblClickDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    transitionEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    gutterEls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
      args: ['gutterEls']
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * Generated from: lib/directive/split-area.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var SplitAreaDirective = /*#__PURE__*/function () {
  /**
   * @param {?} ngZone
   * @param {?} elRef
   * @param {?} renderer
   * @param {?} split
   */
  function SplitAreaDirective(ngZone, elRef, renderer, split) {
    Object(_Users_beeman_oss_angular_split_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SplitAreaDirective);

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
  /**
   * @param {?} v
   * @return {?}
   */


  Object(_Users_beeman_oss_angular_split_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SplitAreaDirective, [{
    key: "ngOnInit",

    /**
     * @return {?}
     */
    value: function ngOnInit() {
      var _this9 = this;

      this.split.addArea(this);
      this.ngZone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        _this9.transitionListener = _this9.renderer.listen(_this9.elRef.nativeElement, 'transitionend',
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          // Limit only flex-basis transition to trigger the event
          if (event.propertyName === 'flex-basis') {
            _this9.split.notify('transitionEnd', -1);
          }
        });
      });
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setStyleOrder",
    value: function setStyleOrder(value) {
      this.renderer.setStyle(this.elRef.nativeElement, 'order', value);
    }
    /**
     * @param {?} grow
     * @param {?} shrink
     * @param {?} basis
     * @param {?} isMin
     * @param {?} isMax
     * @return {?}
     */

  }, {
    key: "setStyleFlex",
    value: function setStyleFlex(grow, shrink, basis, isMin, isMax) {
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
    /**
     * @return {?}
     */

  }, {
    key: "lockEvents",
    value: function lockEvents() {
      var _this10 = this;

      this.ngZone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        _this10.lockListeners.push(_this10.renderer.listen(_this10.elRef.nativeElement, 'selectstart',
        /**
        * @return {?}
        */
        function () {
          return false;
        }));

        _this10.lockListeners.push(_this10.renderer.listen(_this10.elRef.nativeElement, 'dragstart',
        /**
        * @return {?}
        */
        function () {
          return false;
        }));
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "unlockEvents",
    value: function unlockEvents() {
      while (this.lockListeners.length > 0) {
        /** @type {?} */
        var fct = this.lockListeners.pop();

        if (fct) {
          fct();
        }
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.unlockEvents();

      if (this.transitionListener) {
        this.transitionListener();
      }

      this.split.removeArea(this);
    }
    /**
     * @param {?=} newSize
     * @param {?=} gutter
     * @return {?}
     */

  }, {
    key: "collapse",
    value: function collapse() {
      var newSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var gutter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'right';
      this.split.collapseArea(this, newSize, gutter);
    }
    /**
     * @return {?}
     */

  }, {
    key: "expand",
    value: function expand() {
      this.split.expandArea(this);
    }
  }, {
    key: "order",
    set: function set(v) {
      this._order = getInputPositiveNumber(v, null);
      this.split.updateArea(this, true, false);
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._order;
    }
    /**
     * @param {?} v
     * @return {?}
     */

  }, {
    key: "size",
    set: function set(v) {
      this._size = getInputPositiveNumber(v, null);
      this.split.updateArea(this, false, true);
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._size;
    }
    /**
     * @param {?} v
     * @return {?}
     */

  }, {
    key: "minSize",
    set: function set(v) {
      this._minSize = getInputPositiveNumber(v, null);
      this.split.updateArea(this, false, true);
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._minSize;
    }
    /**
     * @param {?} v
     * @return {?}
     */

  }, {
    key: "maxSize",
    set: function set(v) {
      this._maxSize = getInputPositiveNumber(v, null);
      this.split.updateArea(this, false, true);
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._maxSize;
    }
    /**
     * @param {?} v
     * @return {?}
     */

  }, {
    key: "lockSize",
    set: function set(v) {
      this._lockSize = getInputBoolean(v);
      this.split.updateArea(this, false, true);
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._lockSize;
    }
    /**
     * @param {?} v
     * @return {?}
     */

  }, {
    key: "visible",
    set: function set(v) {
      this._visible = getInputBoolean(v);

      if (this._visible) {
        this.split.showArea(this);
        this.renderer.removeClass(this.elRef.nativeElement, 'as-hidden');
      } else {
        this.split.hideArea(this);
        this.renderer.addClass(this.elRef.nativeElement, 'as-hidden');
      }
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._visible;
    }
  }]);

  return SplitAreaDirective;
}();

SplitAreaDirective.ɵfac = function SplitAreaDirective_Factory(t) {
  return new (t || SplitAreaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](SplitComponent));
};

SplitAreaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: SplitAreaDirective,
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
/** @nocollapse */

SplitAreaDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
  }, {
    type: SplitComponent
  }];
};

SplitAreaDirective.propDecorators = {
  order: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  size: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  minSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  maxSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  lockSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  visible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SplitAreaDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: 'as-split-area, [as-split-area]',
      exportAs: 'asSplitArea'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
    }, {
      type: SplitComponent
    }];
  }, {
    order: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    minSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    maxSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    lockSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * Generated from: lib/module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var AngularSplitModule = /*#__PURE__*/function () {
  function AngularSplitModule() {
    Object(_Users_beeman_oss_angular_split_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AngularSplitModule);
  }

  Object(_Users_beeman_oss_angular_split_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AngularSplitModule, null, [{
    key: "forRoot",

    /**
     * @return {?}
     */
    value: function forRoot() {
      console.warn("AngularSplitModule.forRoot() is deprecated and will be removed in v6");
      return {
        ngModule: AngularSplitModule,
        providers: []
      };
    }
    /**
     * @return {?}
     */

  }, {
    key: "forChild",
    value: function forChild() {
      console.warn("AngularSplitModule.forChild() is deprecated and will be removed in v6");
      return {
        ngModule: AngularSplitModule,
        providers: []
      };
    }
  }]);

  return AngularSplitModule;
}();

AngularSplitModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AngularSplitModule
});
AngularSplitModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  factory: function AngularSplitModule_Factory(t) {
    return new (t || AngularSplitModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AngularSplitModule, {
    declarations: function declarations() {
      return [SplitComponent, SplitAreaDirective];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
    },
    exports: function exports() {
      return [SplitComponent, SplitAreaDirective];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AngularSplitModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
      declarations: [SplitComponent, SplitAreaDirective],
      exports: [SplitComponent, SplitAreaDirective]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-split.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ }),

/***/ "y7ZB":
/*!*********************************************************!*\
  !*** ./src/app/ui/components/exampleTitle.component.ts ***!
  \*********************************************************/
/*! exports provided: ExampleTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTitleComponent", function() { return ExampleTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _examples_example_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../examples/example-types */ "3Ryi");
/* harmony import */ var _examples_examples_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../examples/examples.routes */ "TYPU");





var ExampleTitleComponent = /** @class */ (function () {
    function ExampleTitleComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.exampleEnum = _examples_example_types__WEBPACK_IMPORTED_MODULE_3__["ExampleEnum"];
    }
    Object.defineProperty(ExampleTitleComponent.prototype, "type", {
        set: function (v) {
            var ex = _examples_examples_routes__WEBPACK_IMPORTED_MODULE_4__["exampleRoutes"].find(function (e) { return e.data.type === v; });
            if (!ex) {
                return;
            }
            this.label = this.sanitizer.bypassSecurityTrustHtml(ex.data.label);
            this.url = this.sanitizer.bypassSecurityTrustResourceUrl(ex.data.srcUrl);
        },
        enumerable: false,
        configurable: true
    });
    ExampleTitleComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    ExampleTitleComponent.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    ExampleTitleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-example-title',
            template: "\n    <h4>\n      <div [innerHTML]=\"label\"></div>\n      <a class=\"btn btn-secondary\" [href]=\"url\" target=\"_blank\">View code</a>\n    </h4>\n    <hr />\n  ",
            styles: ["\n      h4 {\n        display: flex;\n        align-items: center;\n      }\n      h4 > div {\n        margin-right: 20px;\n      }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], ExampleTitleComponent);
    return ExampleTitleComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map