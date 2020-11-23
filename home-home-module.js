(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.version = _angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"].full;
        this.code1 = "npm install angular-split";
        this.code2 = "import { AngularSplitModule } from 'angular-split';\n\n@NgModule({\n  imports: [\n    AngularSplitModule,\n    ...\n  ],\n  ...\n})\nexport class AppModule {}";
        this.code3 = "<div style=\"width: 500px; height: 500px; background: yellow;\">\n  <as-split direction=\"horizontal\">\n    <as-split-area [size]=\"40\">\n      <p>LEFT</p>\n    </as-split-area>\n    <as-split-area [size]=\"60\">\n      <p>RIGHT</p>\n    </as-split-area>\n  </as-split>\n</div>";
    }
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-home',
            template: "\n    <div class=\"container\">\n      <div class=\"jumbotron\">\n        <div class=\"text-center\">\n          <img src=\"/assets/logo.svg\" height=\"100\" class=\"m-auto\" alt=\"\" />\n          <h1 class=\"mt-3\">angular-split</h1>\n          <h4>Angular UI library to split views and allow dragging to resize areas using CSS flexbox layout.</h4>\n          <h5 class=\"mt-3 text-muted\">Running on Angular v{{ version }}.</h5>\n          <a href=\"https://www.npmjs.com/package/angular-split\"\n            ><img\n              src=\"https://img.shields.io/npm/v/angular-split/latest.svg?style=flat-square\"\n              alt=\"npm latest version\"\n              height=\"18\" /></a\n          >&nbsp;<a href=\"https://www.npmjs.com/package/angular-split\"\n            ><img\n              src=\"https://img.shields.io/npm/v/angular-split/next.svg?style=flat-square\"\n              alt=\"npm next version\"\n              height=\"18\" /></a\n          >&nbsp;<a href=\"https://discord.gg/Qm9MPCg\">\n            <img\n              src=\"https://img.shields.io/discord/748677963142135818?color=7289DA&label=%23angular-split&logo=discord&logoColor=white&style=flat-square\"\n              alt=\"angular-split on Angular Discord\"\n              height=\"18\"\n            />\n          </a>\n        </div>\n        <br />\n        <h5>Install npm module:</h5>\n        <pre [innerText]=\"code1\"></pre>\n        <br />\n        <h5>Add angular module to your app:</h5>\n        <pre [innerText]=\"code2\"></pre>\n        <br />\n        <h5>Define splits in your template:</h5>\n        <pre [innerText]=\"code3\"></pre>\n        <br />\n        <h5>Support:</h5>\n        If you have an issue using the library, feel free to join our chat! We are part of the\n        <a href=\"https://discord.gg/Qm9MPCg\">Angular Community</a> Discord and you can ask questions in the\n        <strong>#angular-chat</strong> room there.\n\n        <div class=\"text-center\">\n          <a href=\"https://discord.gg/Qm9MPCg\">\n            <img\n              src=\"https://img.shields.io/discord/748677963142135818?color=7289DA&label=%23angular-split&logo=discord&logoColor=white&style=flat-square\"\n            />\n          </a>\n        </div>\n\n        <h5>Bug report:</h5>\n        <p>\n          If you find a bug, open an issue with a\n          <a href=\"https://stackblitz.com/fork/angular-split-demo\" target=\"_blank\">StackBlitz</a> demo showing it.\n        </p>\n        <h5>Credits:</h5>\n        <p>\n          This library is built by <a href=\"https://github.com/bertrandg\">Bertrand Gaillard</a> and maintained by\n          <a href=\"https://github.com/beeman\">Bram Borggreve</a>.\n        </p>\n      </div>\n    </div>\n  ",
            styles: ["\n      :host {\n        display: block;\n        width: 100%;\n        margin: 80px 0 50px 0;\n      }\n\n      h1 {\n        color: #ffc421;\n        margin-bottom: 30px;\n      }\n      h1 > small {\n        color: #000000;\n      }\n\n      .jumbotron {\n        margin-bottom: 0;\n      }\n      .jumbotron > div {\n        margin: 20px;\n      }\n    "]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "9vUh");





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }])],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map