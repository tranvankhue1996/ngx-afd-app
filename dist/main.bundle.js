webpackJsonp([1,3],{

/***/ "./node_modules/angular2-web-worker/web-worker.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(2);\r\nvar web_worker_1 = __webpack_require__(\"./node_modules/angular2-web-worker/web-worker.ts\");\r\nvar WebWorkerService = (function (_super) {\r\n    __extends(WebWorkerService, _super);\r\n    function WebWorkerService() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    return WebWorkerService;\r\n}(web_worker_1.WebWorkerService));\r\nWebWorkerService = __decorate([\r\n    core_1.Injectable()\r\n], WebWorkerService);\r\nexports.WebWorkerService = WebWorkerService;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/angular2-web-worker/web-worker.service.ts\n// module id = ./node_modules/angular2-web-worker/web-worker.service.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./~/angular2-web-worker/web-worker.service.ts?");

/***/ }),

/***/ "./node_modules/angular2-web-worker/web-worker.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar WebWorkerService = (function () {\r\n    function WebWorkerService() {\r\n        this.workerFunctionToUrlMap = new WeakMap();\r\n        this.promiseToWorkerMap = new WeakMap();\r\n    }\r\n    WebWorkerService.prototype.run = function (workerFunction, data) {\r\n        var url = this.getOrCreateWorkerUrl(workerFunction);\r\n        return this.runUrl(url, data);\r\n    };\r\n    WebWorkerService.prototype.runUrl = function (url, data) {\r\n        var worker = new Worker(url);\r\n        var promise = this.createPromiseForWorker(worker, data);\r\n        var promiseCleaner = this.createPromiseCleaner(promise);\r\n        this.promiseToWorkerMap.set(promise, worker);\r\n        promise\r\n            .then(promiseCleaner)\r\n            .catch(promiseCleaner);\r\n        return promise;\r\n    };\r\n    WebWorkerService.prototype.terminate = function (promise) {\r\n        return this.removePromise(promise);\r\n    };\r\n    WebWorkerService.prototype.getWorker = function (promise) {\r\n        return this.promiseToWorkerMap.get(promise);\r\n    };\r\n    WebWorkerService.prototype.createPromiseForWorker = function (worker, data) {\r\n        return new Promise(function (resolve, reject) {\r\n            worker.addEventListener('message', function (event) { return resolve(event.data); });\r\n            worker.addEventListener('error', reject);\r\n            worker.postMessage(data);\r\n        });\r\n    };\r\n    WebWorkerService.prototype.getOrCreateWorkerUrl = function (fn) {\r\n        if (!this.workerFunctionToUrlMap.has(fn)) {\r\n            var url = this.createWorkerUrl(fn);\r\n            this.workerFunctionToUrlMap.set(fn, url);\r\n            return url;\r\n        }\r\n        return this.workerFunctionToUrlMap.get(fn);\r\n    };\r\n    WebWorkerService.prototype.createWorkerUrl = function (resolve) {\r\n        var resolveString = resolve.toString();\r\n        var webWorkerTemplate = \"\\n            self.addEventListener('message', function(e) {\\n                postMessage((\" + resolveString + \")(e.data));\\n            });\\n        \";\r\n        var blob = new Blob([webWorkerTemplate], { type: 'text/javascript' });\r\n        return URL.createObjectURL(blob);\r\n    };\r\n    WebWorkerService.prototype.createPromiseCleaner = function (promise) {\r\n        var _this = this;\r\n        return function (event) {\r\n            _this.removePromise(promise);\r\n            return event;\r\n        };\r\n    };\r\n    WebWorkerService.prototype.removePromise = function (promise) {\r\n        var worker = this.promiseToWorkerMap.get(promise);\r\n        if (worker) {\r\n            worker.terminate();\r\n        }\r\n        this.promiseToWorkerMap.delete(promise);\r\n        return promise;\r\n    };\r\n    return WebWorkerService;\r\n}());\r\nexports.WebWorkerService = WebWorkerService;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/angular2-web-worker/web-worker.ts\n// module id = ./node_modules/angular2-web-worker/web-worker.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./~/angular2-web-worker/web-worker.ts?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(4)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader!./src/app/home/home.component.css\n// module id = ./node_modules/css-loader/index.js!./src/app/home/home.component.css\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/home/home.component.css?./~/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/app/layout/layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(4)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader!./src/app/layout/layout.component.css\n// module id = ./node_modules/css-loader/index.js!./src/app/layout/layout.component.css\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/layout/layout.component.css?./~/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/app/layout/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(4)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \".bd-navbar {\\r\\n    background: rebeccapurple;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader!./src/app/layout/navbar/navbar.component.css\n// module id = ./node_modules/css-loader/index.js!./src/app/layout/navbar/navbar.component.css\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/layout/navbar/navbar.component.css?./~/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/app/layout/notfound/notfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(4)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader!./src/app/layout/notfound/notfound.component.css\n// module id = ./node_modules/css-loader/index.js!./src/app/layout/notfound/notfound.component.css\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/layout/notfound/notfound.component.css?./~/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(4)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader!./src/app/product/product.component.css\n// module id = ./node_modules/css-loader/index.js!./src/app/product/product.component.css\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/product/product.component.css?./~/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(4)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader!./src/app/profile/profile.component.css\n// module id = ./node_modules/css-loader/index.js!./src/app/profile/profile.component.css\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/profile/profile.component.css?./~/css-loader");

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(2);\r\nvar AppComponent = (function () {\r\n    function AppComponent() {\r\n        this.name = 'Angular';\r\n    }\r\n    return AppComponent;\r\n}());\r\nAppComponent = __decorate([\r\n    core_1.Component({\r\n        selector: 'afd-studio-app',\r\n        template: \"\\n  <afd-render-layout></afd-render-layout>\\n  \"\r\n    })\r\n], AppComponent);\r\nexports.AppComponent = AppComponent;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/app.component.ts\n// module id = ./src/app/app.component.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/app.component.ts?");

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar web_worker_service_1 = __webpack_require__(\"./node_modules/angular2-web-worker/web-worker.service.ts\");\r\nvar home_service_1 = __webpack_require__(\"./src/app/home/home.service.ts\");\r\nvar core_1 = __webpack_require__(2);\r\nvar forms_1 = __webpack_require__(14);\r\nvar http_1 = __webpack_require__(7);\r\n// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';\r\nvar platform_browser_1 = __webpack_require__(6);\r\nvar app_component_1 = __webpack_require__(\"./src/app/app.component.ts\");\r\nvar layout_module_1 = __webpack_require__(\"./src/app/layout/layout.module.ts\");\r\nvar AppModule = (function () {\r\n    function AppModule() {\r\n    }\r\n    return AppModule;\r\n}());\r\nAppModule = __decorate([\r\n    core_1.NgModule({\r\n        imports: [\r\n            platform_browser_1.BrowserModule,\r\n            forms_1.FormsModule,\r\n            http_1.HttpModule,\r\n            layout_module_1.LayoutModule,\r\n        ],\r\n        declarations: [app_component_1.AppComponent],\r\n        providers: [platform_browser_1.Title, home_service_1.HomeService, web_worker_service_1.WebWorkerService],\r\n        bootstrap: [app_component_1.AppComponent]\r\n    })\r\n], AppModule);\r\nexports.AppModule = AppModule;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/app.module.ts\n// module id = ./src/app/app.module.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/app.module.ts?");

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

eval("\n        var result = __webpack_require__(\"./node_modules/css-loader/index.js!./src/app/home/home.component.css\");\n\n        if (typeof result === \"string\") {\n            module.exports = result;\n        } else {\n            module.exports = result.toString();\n        }\n    \n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/home/home.component.css\n// module id = ./src/app/home/home.component.css\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/home/home.component.css?");

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"GET TIME NOW FROM SERVER: <h3 [style.color]=\\\"red\\\">{{now}}</h3>\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/home/home.component.html\n// module id = ./src/app/home/home.component.html\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/home/home.component.html?");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar home_service_1 = __webpack_require__(\"./src/app/home/home.service.ts\");\r\nvar core_1 = __webpack_require__(2);\r\nvar web_worker_service_1 = __webpack_require__(\"./node_modules/angular2-web-worker/web-worker.service.ts\");\r\nvar HomeComponent = (function () {\r\n    function HomeComponent(homeService, webWorkerService) {\r\n        this.homeService = homeService;\r\n        this.webWorkerService = webWorkerService;\r\n        this.now = \"loading...\";\r\n    }\r\n    HomeComponent.prototype.ngOnInit = function () {\r\n        this.DoingWorker();\r\n    };\r\n    HomeComponent.prototype.DoingWorker = function () {\r\n        console.log('doing');\r\n        var i = 1;\r\n        var myInterval = setInterval(function () {\r\n            var x = Date.now();\r\n            console.log(x);\r\n            this.now = x.toString();\r\n            console.log('now: ', this.now);\r\n            i++;\r\n            if (i === 5) {\r\n                clearInterval(myInterval);\r\n            }\r\n        }, 3000);\r\n        var x = 1, y = 1;\r\n        console.log(\"x++ = %d, ++y = %d\", x++, ++y);\r\n    };\r\n    HomeComponent.prototype.getTime = function () {\r\n        var _this = this;\r\n        this.homeService.getTime()\r\n            .subscribe(function (success) {\r\n            console.log('success', success);\r\n            var time = new Date(success);\r\n            _this.now = time.toUTCString();\r\n        }, function (error) {\r\n            alert('Cannot get timer from server');\r\n        });\r\n    };\r\n    return HomeComponent;\r\n}());\r\nHomeComponent = __decorate([\r\n    core_1.Component({\r\n        selector: 'afd-render-home',\r\n        template: __webpack_require__(\"./src/app/home/home.component.html\"),\r\n        styles: [__webpack_require__(\"./src/app/home/home.component.css\")]\r\n    }),\r\n    __metadata(\"design:paramtypes\", [home_service_1.HomeService, web_worker_service_1.WebWorkerService])\r\n], HomeComponent);\r\nexports.HomeComponent = HomeComponent;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/home/home.component.ts\n// module id = ./src/app/home/home.component.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/home/home.component.ts?");

/***/ }),

/***/ "./src/app/home/home.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar constants_1 = __webpack_require__(\"./src/app/shared/constants/constants.ts\");\r\nvar http_1 = __webpack_require__(7);\r\nvar core_1 = __webpack_require__(2);\r\nvar HomeService = (function () {\r\n    function HomeService(http) {\r\n        this.http = http;\r\n    }\r\n    HomeService.prototype.getHeaders = function () {\r\n        var headers = new http_1.Headers();\r\n        return headers;\r\n    };\r\n    HomeService.prototype.getTime = function () {\r\n        return this.http.get(constants_1.Constants.HOST + constants_1.Constants.TIMER.GET_NOW, new http_1.RequestOptions({ headers: this.getHeaders() }))\r\n            .map(function (res) {\r\n            return res.json();\r\n        });\r\n    };\r\n    return HomeService;\r\n}());\r\nHomeService = __decorate([\r\n    core_1.Injectable(),\r\n    __metadata(\"design:paramtypes\", [http_1.Http])\r\n], HomeService);\r\nexports.HomeService = HomeService;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/home/home.service.ts\n// module id = ./src/app/home/home.service.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/home/home.service.ts?");

/***/ }),

/***/ "./src/app/layout/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar layout_component_1 = __webpack_require__(\"./src/app/layout/layout.component.ts\");\r\nexports.LayoutComponent = layout_component_1.LayoutComponent;\r\nvar layout_routing_1 = __webpack_require__(\"./src/app/layout/layout.routing.ts\");\r\nexports.layoutRoutes = layout_routing_1.layoutRoutes;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/layout/index.ts\n// module id = ./src/app/layout/index.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/layout/index.ts?");

/***/ }),

/***/ "./src/app/layout/layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

eval("\n        var result = __webpack_require__(\"./node_modules/css-loader/index.js!./src/app/layout/layout.component.css\");\n\n        if (typeof result === \"string\") {\n            module.exports = result;\n        } else {\n            module.exports = result.toString();\n        }\n    \n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/layout/layout.component.css\n// module id = ./src/app/layout/layout.component.css\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/layout/layout.component.css?");

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <afd-render-navbar></afd-render-navbar> <div class=\\\"container-fluid\\\"> <router-outlet></router-outlet> </div>\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/layout/layout.component.html\n// module id = ./src/app/layout/layout.component.html\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/layout/layout.component.html?");

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(2);\r\nvar base_service_1 = __webpack_require__(\"./src/app/shared/services/base.service.ts\");\r\nvar $ = __webpack_require__(8);\r\nvar LayoutComponent = (function () {\r\n    function LayoutComponent(baseService) {\r\n        this.baseService = baseService;\r\n    }\r\n    LayoutComponent.prototype.ngOnInit = function () {\r\n        //set default service\r\n        this.baseService.setTitle();\r\n        //loading content\r\n        $(window).on('load', function () {\r\n            $('.loader').fadeOut('slow');\r\n        });\r\n    };\r\n    return LayoutComponent;\r\n}());\r\nLayoutComponent = __decorate([\r\n    core_1.Component({\r\n        selector: 'afd-render-layout',\r\n        template: __webpack_require__(\"./src/app/layout/layout.component.html\"),\r\n        styles: [__webpack_require__(\"./src/app/layout/layout.component.css\")]\r\n    }),\r\n    __metadata(\"design:paramtypes\", [base_service_1.BaseService])\r\n], LayoutComponent);\r\nexports.LayoutComponent = LayoutComponent;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/layout/layout.component.ts\n// module id = ./src/app/layout/layout.component.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/layout/layout.component.ts?");

/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar home_component_1 = __webpack_require__(\"./src/app/home/home.component.ts\");\r\nvar notfound_component_1 = __webpack_require__(\"./src/app/layout/notfound/notfound.component.ts\");\r\nvar product_module_1 = __webpack_require__(\"./src/app/product/product.module.ts\");\r\nvar base_service_1 = __webpack_require__(\"./src/app/shared/services/base.service.ts\");\r\nvar navbar_component_1 = __webpack_require__(\"./src/app/layout/navbar/navbar.component.ts\");\r\nvar core_1 = __webpack_require__(2);\r\nvar router_1 = __webpack_require__(5);\r\nvar index_1 = __webpack_require__(\"./src/app/layout/index.ts\");\r\nvar profile_module_1 = __webpack_require__(\"./src/app/profile/profile.module.ts\");\r\nvar LayoutModule = (function () {\r\n    function LayoutModule() {\r\n    }\r\n    return LayoutModule;\r\n}());\r\nLayoutModule = __decorate([\r\n    core_1.NgModule({\r\n        imports: [\r\n            profile_module_1.ProfileModule,\r\n            product_module_1.ProductModule,\r\n            router_1.RouterModule.forRoot(index_1.layoutRoutes, { useHash: true })\r\n        ],\r\n        declarations: [\r\n            index_1.LayoutComponent,\r\n            home_component_1.HomeComponent,\r\n            navbar_component_1.NavbarComponent,\r\n            notfound_component_1.NotFoundComponent\r\n        ],\r\n        providers: [base_service_1.BaseService],\r\n        exports: [index_1.LayoutComponent]\r\n    })\r\n], LayoutModule);\r\nexports.LayoutModule = LayoutModule;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/layout/layout.module.ts\n// module id = ./src/app/layout/layout.module.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/layout/layout.module.ts?");

/***/ }),

/***/ "./src/app/layout/layout.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar home_component_1 = __webpack_require__(\"./src/app/home/home.component.ts\");\r\nvar notfound_component_1 = __webpack_require__(\"./src/app/layout/notfound/notfound.component.ts\");\r\nexports.layoutRoutes = [\r\n    {\r\n        path: '',\r\n        component: home_component_1.HomeComponent,\r\n        data: {\r\n            title: 'Bill Chan'\r\n        }\r\n    },\r\n    {\r\n        path: '**',\r\n        component: notfound_component_1.NotFoundComponent,\r\n        data: {\r\n            title: 'Not Found 404'\r\n        }\r\n    }\r\n];\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/layout/layout.routing.ts\n// module id = ./src/app/layout/layout.routing.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/layout/layout.routing.ts?");

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

eval("\n        var result = __webpack_require__(\"./node_modules/css-loader/index.js!./src/app/layout/navbar/navbar.component.css\");\n\n        if (typeof result === \"string\") {\n            module.exports = result;\n        } else {\n            module.exports = result.toString();\n        }\n    \n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/layout/navbar/navbar.component.css\n// module id = ./src/app/layout/navbar/navbar.component.css\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/layout/navbar/navbar.component.css?");

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<nav class=\\\"navbar navbar-expand-lg navbar-light bg-light\\\"> <a class=\\\"navbar-brand\\\" href=\\\"#\\\">AFD APP</a> <button class=\\\"navbar-toggler\\\" type=\\\"button\\\" data-toggle=\\\"collapse\\\" data-target=\\\"#navbarTogglerDemo02\\\" aria-controls=\\\"navbarTogglerDemo02\\\" aria-expanded=\\\"false\\\" aria-label=\\\"Toggle navigation\\\"> <span class=\\\"navbar-toggler-icon\\\"></span> </button> <div class=\\\"collapse navbar-collapse\\\"> <ul class=\\\"navbar-nav mr-auto mt-2 mt-lg-0\\\"> <li class=\\\"nav-item\\\"> <a class=\\\"nav-link\\\" routerLink=\\\"/\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{ exact: true }\\\">Home</a> </li> <li class=\\\"nav-item\\\"> <a class=\\\"nav-link\\\" routerLink=\\\"/profile\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{ exact: true }\\\">Profile</a> </li> <li class=\\\"nav-item\\\"> <a class=\\\"nav-link\\\" routerLink=\\\"/products\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{ exact: true }\\\">Product</a> </li> </ul> <form class=\\\"form-inline my-2 my-lg-0\\\"> <input class=\\\"form-control mr-sm-2\\\" type=\\\"text\\\" placeholder=\\\"Search\\\"> <button class=\\\"btn btn-outline-success my-2 my-sm-0\\\" type=\\\"submit\\\">Search</button> </form> </div> </nav>\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/layout/navbar/navbar.component.html\n// module id = ./src/app/layout/navbar/navbar.component.html\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/layout/navbar/navbar.component.html?");

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(2);\r\nvar NavbarComponent = (function () {\r\n    function NavbarComponent() {\r\n        this.name = \"abc\";\r\n    }\r\n    return NavbarComponent;\r\n}());\r\nNavbarComponent = __decorate([\r\n    core_1.Component({\r\n        selector: 'afd-render-navbar',\r\n        template: __webpack_require__(\"./src/app/layout/navbar/navbar.component.html\"),\r\n        styles: [__webpack_require__(\"./src/app/layout/navbar/navbar.component.css\")]\r\n    })\r\n], NavbarComponent);\r\nexports.NavbarComponent = NavbarComponent;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/layout/navbar/navbar.component.ts\n// module id = ./src/app/layout/navbar/navbar.component.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/layout/navbar/navbar.component.ts?");

/***/ }),

/***/ "./src/app/layout/notfound/notfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

eval("\n        var result = __webpack_require__(\"./node_modules/css-loader/index.js!./src/app/layout/notfound/notfound.component.css\");\n\n        if (typeof result === \"string\") {\n            module.exports = result;\n        } else {\n            module.exports = result.toString();\n        }\n    \n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/layout/notfound/notfound.component.css\n// module id = ./src/app/layout/notfound/notfound.component.css\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/layout/notfound/notfound.component.css?");

/***/ }),

/***/ "./src/app/layout/notfound/notfound.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"ui-g-12 ui-lg-12\\\"> <div class=\\\"ui-g-12 ui-lg-3\\\"></div> <div class=\\\"ui-g-12 ui-lg-4\\\"> File Not Found 404 ! </div> <div class=\\\"ui-g-12 ui-lg-3\\\"></div> </div>\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/layout/notfound/notfound.component.html\n// module id = ./src/app/layout/notfound/notfound.component.html\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/layout/notfound/notfound.component.html?");

/***/ }),

/***/ "./src/app/layout/notfound/notfound.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(2);\r\nvar NotFoundComponent = (function () {\r\n    function NotFoundComponent() {\r\n    }\r\n    return NotFoundComponent;\r\n}());\r\nNotFoundComponent = __decorate([\r\n    core_1.Component({\r\n        selector: 'afd-render-404',\r\n        template: __webpack_require__(\"./src/app/layout/notfound/notfound.component.html\"),\r\n        styles: [__webpack_require__(\"./src/app/layout/notfound/notfound.component.css\")]\r\n    })\r\n], NotFoundComponent);\r\nexports.NotFoundComponent = NotFoundComponent;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/layout/notfound/notfound.component.ts\n// module id = ./src/app/layout/notfound/notfound.component.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/layout/notfound/notfound.component.ts?");

/***/ }),

/***/ "./src/app/product/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar product_component_1 = __webpack_require__(\"./src/app/product/product.component.ts\");\r\nexports.ProductComponent = product_component_1.ProductComponent;\r\nvar product_routing_1 = __webpack_require__(\"./src/app/product/product.routing.ts\");\r\nexports.routesProduct = product_routing_1.routesProduct;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/product/index.ts\n// module id = ./src/app/product/index.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/product/index.ts?");

/***/ }),

/***/ "./src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

eval("\n        var result = __webpack_require__(\"./node_modules/css-loader/index.js!./src/app/product/product.component.css\");\n\n        if (typeof result === \"string\") {\n            module.exports = result;\n        } else {\n            module.exports = result.toString();\n        }\n    \n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/product/product.component.css\n// module id = ./src/app/product/product.component.css\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/product/product.component.css?");

/***/ }),

/***/ "./src/app/product/product.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"product <div class=\\\"row\\\"> <div class=\\\"col\\\"></div> <div class=\\\"col-10\\\"> <span class=\\\"border border-danger\\\"> <div class=\\\"embed-responsive embed-responsive-16by9 mh-100\\\"> <iframe class=\\\"embed-responsive-item\\\" src=\\\"https://www.youtube.com/embed/kJQP7kiw5Fk?ecver=2\\\" allowfullscreen></iframe> </div> </span> </div> <div class=\\\"col\\\"></div> </div>\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/product/product.component.html\n// module id = ./src/app/product/product.component.html\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/product/product.component.html?");

/***/ }),

/***/ "./src/app/product/product.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(2);\r\nvar ProductComponent = (function () {\r\n    function ProductComponent() {\r\n    }\r\n    return ProductComponent;\r\n}());\r\nProductComponent = __decorate([\r\n    core_1.Component({\r\n        selector: 'afd-render-product',\r\n        template: __webpack_require__(\"./src/app/product/product.component.html\"),\r\n        styles: [__webpack_require__(\"./src/app/product/product.component.css\")]\r\n    })\r\n], ProductComponent);\r\nexports.ProductComponent = ProductComponent;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/product/product.component.ts\n// module id = ./src/app/product/product.component.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/product/product.component.ts?");

/***/ }),

/***/ "./src/app/product/product.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar router_1 = __webpack_require__(5);\r\nvar core_1 = __webpack_require__(2);\r\nvar index_1 = __webpack_require__(\"./src/app/product/index.ts\");\r\nvar ProductModule = (function () {\r\n    function ProductModule() {\r\n    }\r\n    return ProductModule;\r\n}());\r\nProductModule = __decorate([\r\n    core_1.NgModule({\r\n        imports: [\r\n            router_1.RouterModule.forChild(index_1.routesProduct)\r\n        ],\r\n        declarations: [index_1.ProductComponent]\r\n    })\r\n], ProductModule);\r\nexports.ProductModule = ProductModule;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/product/product.module.ts\n// module id = ./src/app/product/product.module.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/product/product.module.ts?");

/***/ }),

/***/ "./src/app/product/product.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar product_component_1 = __webpack_require__(\"./src/app/product/product.component.ts\");\r\nexports.routesProduct = [\r\n    {\r\n        path: 'products',\r\n        children: [\r\n            {\r\n                path: '',\r\n                component: product_component_1.ProductComponent,\r\n                data: { title: 'Products' }\r\n            }\r\n        ],\r\n        pathMatch: 'full'\r\n    }\r\n];\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/product/product.routing.ts\n// module id = ./src/app/product/product.routing.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/product/product.routing.ts?");

/***/ }),

/***/ "./src/app/profile/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar profile_component_1 = __webpack_require__(\"./src/app/profile/profile.component.ts\");\r\nexports.ProfileComponent = profile_component_1.ProfileComponent;\r\nvar profile_routing_1 = __webpack_require__(\"./src/app/profile/profile.routing.ts\");\r\nexports.routesProfile = profile_routing_1.routesProfile;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/profile/index.ts\n// module id = ./src/app/profile/index.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/profile/index.ts?");

/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

eval("\n        var result = __webpack_require__(\"./node_modules/css-loader/index.js!./src/app/profile/profile.component.css\");\n\n        if (typeof result === \"string\") {\n            module.exports = result;\n        } else {\n            module.exports = result.toString();\n        }\n    \n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/profile/profile.component.css\n// module id = ./src/app/profile/profile.component.css\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/profile/profile.component.css?");

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"profile\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/profile/profile.component.html\n// module id = ./src/app/profile/profile.component.html\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/profile/profile.component.html?");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(2);\r\nvar ProfileComponent = (function () {\r\n    function ProfileComponent() {\r\n    }\r\n    return ProfileComponent;\r\n}());\r\nProfileComponent = __decorate([\r\n    core_1.Component({\r\n        selector: 'afd-render-profile',\r\n        template: __webpack_require__(\"./src/app/profile/profile.component.html\"),\r\n        styles: [__webpack_require__(\"./src/app/profile/profile.component.css\")]\r\n    })\r\n], ProfileComponent);\r\nexports.ProfileComponent = ProfileComponent;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/profile/profile.component.ts\n// module id = ./src/app/profile/profile.component.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/profile/profile.component.ts?");

/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar router_1 = __webpack_require__(5);\r\nvar core_1 = __webpack_require__(2);\r\nvar index_1 = __webpack_require__(\"./src/app/profile/index.ts\");\r\nvar ProfileModule = (function () {\r\n    function ProfileModule() {\r\n    }\r\n    return ProfileModule;\r\n}());\r\nProfileModule = __decorate([\r\n    core_1.NgModule({\r\n        imports: [\r\n            router_1.RouterModule.forChild(index_1.routesProfile)\r\n        ],\r\n        declarations: [index_1.ProfileComponent]\r\n    })\r\n], ProfileModule);\r\nexports.ProfileModule = ProfileModule;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/profile/profile.module.ts\n// module id = ./src/app/profile/profile.module.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/profile/profile.module.ts?");

/***/ }),

/***/ "./src/app/profile/profile.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar profile_component_1 = __webpack_require__(\"./src/app/profile/profile.component.ts\");\r\nexports.routesProfile = [\r\n    {\r\n        path: 'profile',\r\n        children: [\r\n            {\r\n                path: '',\r\n                component: profile_component_1.ProfileComponent,\r\n                data: { title: 'Profile' }\r\n            }\r\n        ]\r\n    }\r\n];\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/profile/profile.routing.ts\n// module id = ./src/app/profile/profile.routing.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/profile/profile.routing.ts?");

/***/ }),

/***/ "./src/app/shared/constants/constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Constants = {\r\n    HOST: \"http://localhost:52316/api/\",\r\n    TIMER: {\r\n        GET_NOW: \"timer\",\r\n    }\r\n};\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/shared/constants/constants.ts\n// module id = ./src/app/shared/constants/constants.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/shared/constants/constants.ts?");

/***/ }),

/***/ "./src/app/shared/services/base.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(9);\r\n__webpack_require__(10);\r\n__webpack_require__(11);\r\nvar core_1 = __webpack_require__(2);\r\nvar router_1 = __webpack_require__(5);\r\nvar platform_browser_1 = __webpack_require__(6);\r\nvar BaseService = (function () {\r\n    function BaseService(router, activatedRoute, titleService) {\r\n        this.router = router;\r\n        this.activatedRoute = activatedRoute;\r\n        this.titleService = titleService;\r\n    }\r\n    BaseService.prototype.setTitle = function () {\r\n        var _this = this;\r\n        //set title\r\n        this.router.events\r\n            .filter(function (event) { return event instanceof router_1.NavigationEnd; })\r\n            .map(function () { return _this.activatedRoute; })\r\n            .map(function (route) {\r\n            while (route.firstChild) {\r\n                route = route.firstChild;\r\n            }\r\n            return route;\r\n        })\r\n            .filter(function (route) { return route.outlet === 'primary'; })\r\n            .mergeMap(function (route) { return route.data; })\r\n            .subscribe(function (event) {\r\n            _this.titleService.setTitle(event['title']);\r\n        });\r\n    };\r\n    return BaseService;\r\n}());\r\nBaseService = __decorate([\r\n    core_1.Injectable(),\r\n    __metadata(\"design:paramtypes\", [router_1.Router,\r\n        router_1.ActivatedRoute,\r\n        platform_browser_1.Title])\r\n], BaseService);\r\nexports.BaseService = BaseService;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/shared/services/base.service.ts\n// module id = ./src/app/shared/services/base.service.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/shared/services/base.service.ts?");

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar platform_browser_dynamic_1 = __webpack_require__(13);\r\nvar core_1 = __webpack_require__(2);\r\nvar app_module_1 = __webpack_require__(\"./src/app/app.module.ts\");\r\nif (process.env.ENV === 'production') {\r\n    core_1.enableProdMode();\r\n}\r\nplatform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);\r\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/main.ts\n// module id = ./src/main.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(3))(247);\n\n//////////////////\n// WEBPACK FOOTER\n// delegated ./node_modules/rxjs/add/operator/map.js from dll-reference vendor\n// module id = 10\n// module chunks = 1\n\n//# sourceURL=webpack:///delegated_./node_modules/rxjs/add/operator/map.js_from_dll-reference_vendor?");

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(3))(253);\n\n//////////////////\n// WEBPACK FOOTER\n// delegated ./node_modules/rxjs/add/operator/mergeMap.js from dll-reference vendor\n// module id = 11\n// module chunks = 1\n\n//# sourceURL=webpack:///delegated_./node_modules/rxjs/add/operator/mergeMap.js_from_dll-reference_vendor?");

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(3))(57);\n\n//////////////////\n// WEBPACK FOOTER\n// delegated ./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js from dll-reference vendor\n// module id = 13\n// module chunks = 1\n\n//# sourceURL=webpack:///delegated_./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js_from_dll-reference_vendor?");

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(3))(9);\n\n//////////////////\n// WEBPACK FOOTER\n// delegated ./node_modules/@angular/forms/@angular/forms.es5.js from dll-reference vendor\n// module id = 14\n// module chunks = 1\n\n//# sourceURL=webpack:///delegated_./node_modules/@angular/forms/@angular/forms.es5.js_from_dll-reference_vendor?");

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(\"./node_modules/webpack-dev-server/client/index.js?http:/localhost:8080\");\n__webpack_require__(\"./node_modules/webpack/hot/dev-server.js\");\nmodule.exports = __webpack_require__(\"./src/main.ts\");\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi (webpack)-dev-server/client?http://localhost:8080 webpack/hot/dev-server ./src/main\n// module id = 17\n// module chunks = 1\n\n//# sourceURL=webpack:///multi_(webpack)-dev-server/client?");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(3))(1);\n\n//////////////////\n// WEBPACK FOOTER\n// delegated ./node_modules/@angular/core/@angular/core.es5.js from dll-reference vendor\n// module id = 2\n// module chunks = 1\n\n//# sourceURL=webpack:///delegated_./node_modules/@angular/core/@angular/core.es5.js_from_dll-reference_vendor?");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(3))(14);\n\n//////////////////\n// WEBPACK FOOTER\n// delegated ./node_modules/@angular/router/@angular/router.es5.js from dll-reference vendor\n// module id = 5\n// module chunks = 1\n\n//# sourceURL=webpack:///delegated_./node_modules/@angular/router/@angular/router.es5.js_from_dll-reference_vendor?");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(3))(23);\n\n//////////////////\n// WEBPACK FOOTER\n// delegated ./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js from dll-reference vendor\n// module id = 6\n// module chunks = 1\n\n//# sourceURL=webpack:///delegated_./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js_from_dll-reference_vendor?");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(3))(56);\n\n//////////////////\n// WEBPACK FOOTER\n// delegated ./node_modules/@angular/http/@angular/http.es5.js from dll-reference vendor\n// module id = 7\n// module chunks = 1\n\n//# sourceURL=webpack:///delegated_./node_modules/@angular/http/@angular/http.es5.js_from_dll-reference_vendor?");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(3))(102);\n\n//////////////////\n// WEBPACK FOOTER\n// delegated ./node_modules/jquery/dist/jquery.js from dll-reference vendor\n// module id = 8\n// module chunks = 1\n\n//# sourceURL=webpack:///delegated_./node_modules/jquery/dist/jquery.js_from_dll-reference_vendor?");

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(3))(237);\n\n//////////////////\n// WEBPACK FOOTER\n// delegated ./node_modules/rxjs/add/operator/filter.js from dll-reference vendor\n// module id = 9\n// module chunks = 1\n\n//# sourceURL=webpack:///delegated_./node_modules/rxjs/add/operator/filter.js_from_dll-reference_vendor?");

/***/ })

},[17]);