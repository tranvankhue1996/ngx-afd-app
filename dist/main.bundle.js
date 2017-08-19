webpackJsonp([1,3],{

/***/ "./node_modules/css-loader/index.js!./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/app/layout/layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".sk-cube-grid {\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: 100px auto;\r\n}\r\n\r\n.sk-cube-grid .sk-cube {\r\n  width: 33%;\r\n  height: 33%;\r\n  background-color: #333;\r\n  float: left;\r\n  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\r\n          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out; \r\n}\r\n.sk-cube-grid .sk-cube1 {\r\n  -webkit-animation-delay: 0.2s;\r\n          animation-delay: 0.2s; }\r\n.sk-cube-grid .sk-cube2 {\r\n  -webkit-animation-delay: 0.3s;\r\n          animation-delay: 0.3s; }\r\n.sk-cube-grid .sk-cube3 {\r\n  -webkit-animation-delay: 0.4s;\r\n          animation-delay: 0.4s; }\r\n.sk-cube-grid .sk-cube4 {\r\n  -webkit-animation-delay: 0.1s;\r\n          animation-delay: 0.1s; }\r\n.sk-cube-grid .sk-cube5 {\r\n  -webkit-animation-delay: 0.2s;\r\n          animation-delay: 0.2s; }\r\n.sk-cube-grid .sk-cube6 {\r\n  -webkit-animation-delay: 0.3s;\r\n          animation-delay: 0.3s; }\r\n.sk-cube-grid .sk-cube7 {\r\n  -webkit-animation-delay: 0s;\r\n          animation-delay: 0s; }\r\n.sk-cube-grid .sk-cube8 {\r\n  -webkit-animation-delay: 0.1s;\r\n          animation-delay: 0.1s; }\r\n.sk-cube-grid .sk-cube9 {\r\n  -webkit-animation-delay: 0.2s;\r\n          animation-delay: 0.2s; }\r\n\r\n@-webkit-keyframes sk-cubeGridScaleDelay {\r\n  0%, 70%, 100% {\r\n    -webkit-transform: scale3D(1, 1, 1);\r\n            transform: scale3D(1, 1, 1);\r\n  } 35% {\r\n    -webkit-transform: scale3D(0, 0, 1);\r\n            transform: scale3D(0, 0, 1); \r\n  }\r\n}\r\n\r\n@keyframes sk-cubeGridScaleDelay {\r\n  0%, 70%, 100% {\r\n    -webkit-transform: scale3D(1, 1, 1);\r\n            transform: scale3D(1, 1, 1);\r\n  } 35% {\r\n    -webkit-transform: scale3D(0, 0, 1);\r\n            transform: scale3D(0, 0, 1);\r\n  } \r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/app/layout/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".bd-navbar {\r\n    background: rebeccapurple;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/app/layout/notfound/notfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'afd-studio-app',
        template: "\n  <afd-render-layout></afd-render-layout>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var forms_1 = __webpack_require__(9);
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var platform_browser_1 = __webpack_require__(5);
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var layout_module_1 = __webpack_require__("./src/app/layout/layout.module.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            layout_module_1.LayoutModule
        ],
        declarations: [app_component_1.AppComponent],
        providers: [platform_browser_1.Title],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/app/home/home.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "home";

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'afd-render-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")]
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/layout/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var layout_component_1 = __webpack_require__("./src/app/layout/layout.component.ts");
exports.LayoutComponent = layout_component_1.LayoutComponent;
var layout_routing_1 = __webpack_require__("./src/app/layout/layout.routing.ts");
exports.layoutRoutes = layout_routing_1.layoutRoutes;


/***/ }),

/***/ "./src/app/layout/layout.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/app/layout/layout.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\"> <afd-render-navbar></afd-render-navbar> <div class=\"container-fluid\"> <div class=\"loader\"> <div class=\"sk-cube-grid\"> <div class=\"sk-cube sk-cube1\"></div> <div class=\"sk-cube sk-cube2\"></div> <div class=\"sk-cube sk-cube3\"></div> <div class=\"sk-cube sk-cube4\"></div> <div class=\"sk-cube sk-cube5\"></div> <div class=\"sk-cube sk-cube6\"></div> <div class=\"sk-cube sk-cube7\"></div> <div class=\"sk-cube sk-cube8\"></div> <div class=\"sk-cube sk-cube9\"></div> </div> </div> <router-outlet></router-outlet> </div> </div>";

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var base_service_1 = __webpack_require__("./src/app/shared/services/base.service.ts");
var $ = __webpack_require__(11);
var LayoutComponent = (function () {
    function LayoutComponent(baseService) {
        this.baseService = baseService;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        //set default service
        this.baseService.setTitle();
        //loading content
        $(window).on('load', function () {
            $('.loader').fadeOut('slow');
        });
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    core_1.Component({
        selector: 'afd-render-layout',
        template: __webpack_require__("./src/app/layout/layout.component.html"),
        styles: [__webpack_require__("./src/app/layout/layout.component.css")]
    }),
    __metadata("design:paramtypes", [base_service_1.BaseService])
], LayoutComponent);
exports.LayoutComponent = LayoutComponent;


/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var notfound_component_1 = __webpack_require__("./src/app/layout/notfound/notfound.component.ts");
var product_module_1 = __webpack_require__("./src/app/product/product.module.ts");
var base_service_1 = __webpack_require__("./src/app/shared/services/base.service.ts");
var navbar_component_1 = __webpack_require__("./src/app/layout/navbar/navbar.component.ts");
var core_1 = __webpack_require__(2);
var router_1 = __webpack_require__(4);
var index_1 = __webpack_require__("./src/app/layout/index.ts");
var profile_module_1 = __webpack_require__("./src/app/profile/profile.module.ts");
var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    core_1.NgModule({
        imports: [
            profile_module_1.ProfileModule,
            product_module_1.ProductModule,
            router_1.RouterModule.forRoot(index_1.layoutRoutes, { useHash: true })
        ],
        declarations: [
            index_1.LayoutComponent,
            home_component_1.HomeComponent,
            navbar_component_1.NavbarComponent,
            notfound_component_1.NotFoundComponent
        ],
        providers: [base_service_1.BaseService],
        exports: [index_1.LayoutComponent]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;


/***/ }),

/***/ "./src/app/layout/layout.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var notfound_component_1 = __webpack_require__("./src/app/layout/notfound/notfound.component.ts");
exports.layoutRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        data: {
            title: 'Bill Chan'
        }
    },
    {
        path: '**',
        component: notfound_component_1.NotFoundComponent,
        data: {
            title: 'Not Found 404'
        }
    }
];


/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/app/layout/navbar/navbar.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar\"> <a class=\"navbar-brand mr-0 mr-md-2\" href=\"/\" aria-label=\"Bootstrap\"> <svg class=\"d-block\" width=\"36\" height=\"36\" viewBox=\"0 0 612 612\" xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\"><title>Bootstrap</title><path fill=\"currentColor\" d=\"M510 8a94.3 94.3 0 0 1 94 94v408a94.3 94.3 0 0 1-94 94H102a94.3 94.3 0 0 1-94-94V102a94.3 94.3 0 0 1 94-94h408m0-8H102C45.9 0 0 45.9 0 102v408c0 56.1 45.9 102 102 102h408c56.1 0 102-45.9 102-102V102C612 45.9 566.1 0 510 0z\"></path><path fill=\"currentColor\" d=\"M196.77 471.5V154.43h124.15c54.27 0 91 31.64 91 79.1 0 33-24.17 63.72-54.71 69.21v1.76c43.07 5.49 70.75 35.82 70.75 78 0 55.81-40 89-107.45 89zm39.55-180.4h63.28c46.8 0 72.29-18.68 72.29-53 0-31.42-21.53-48.78-60-48.78h-75.57zm78.22 145.46c47.68 0 72.73-19.34 72.73-56s-25.93-55.37-76.46-55.37h-74.49v111.4z\"></path></svg> </a> <div class=\"navbar-nav-scroll\"> <ul class=\"navbar-nav bd-navbar-nav flex-row\"> <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Home</a> </li> <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a> </li> <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/products\" routerLinkActive=\"active\">Products</a> </li> </ul> </div> <ul class=\"navbar-nav flex-row ml-md-auto d-none d-md-flex\"> <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a> </li> </ul> </header>";

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var NavbarComponent = (function () {
    function NavbarComponent() {
        this.name = "abc";
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'afd-render-navbar',
        template: __webpack_require__("./src/app/layout/navbar/navbar.component.html"),
        styles: [__webpack_require__("./src/app/layout/navbar/navbar.component.css")]
    })
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/layout/notfound/notfound.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/app/layout/notfound/notfound.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/app/layout/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-5\"> <div class=\"col\"></div> <div class=\"col-6\"> File Not Found 404 ! </div> <div class=\"col\"></div> </div>";

/***/ }),

/***/ "./src/app/layout/notfound/notfound.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    core_1.Component({
        selector: 'afd-render-404',
        template: __webpack_require__("./src/app/layout/notfound/notfound.component.html"),
        styles: [__webpack_require__("./src/app/layout/notfound/notfound.component.css")]
    })
], NotFoundComponent);
exports.NotFoundComponent = NotFoundComponent;


/***/ }),

/***/ "./src/app/product/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var product_component_1 = __webpack_require__("./src/app/product/product.component.ts");
exports.ProductComponent = product_component_1.ProductComponent;
var product_routing_1 = __webpack_require__("./src/app/product/product.routing.ts");
exports.routesProduct = product_routing_1.routesProduct;


/***/ }),

/***/ "./src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/app/product/product.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "product <div class=\"row\"> <div class=\"col\"></div> <div class=\"col-10\"> <span class=\"border border-danger\"> <div class=\"embed-responsive embed-responsive-16by9 mh-100\"> <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/kJQP7kiw5Fk?ecver=2\" allowfullscreen></iframe> </div> </span> </div> <div class=\"col\"></div> </div>";

/***/ }),

/***/ "./src/app/product/product.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var ProductComponent = (function () {
    function ProductComponent() {
    }
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'afd-render-product',
        template: __webpack_require__("./src/app/product/product.component.html"),
        styles: [__webpack_require__("./src/app/product/product.component.css")]
    })
], ProductComponent);
exports.ProductComponent = ProductComponent;


/***/ }),

/***/ "./src/app/product/product.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(4);
var core_1 = __webpack_require__(2);
var index_1 = __webpack_require__("./src/app/product/index.ts");
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(index_1.routesProduct)
        ],
        declarations: [index_1.ProductComponent]
    })
], ProductModule);
exports.ProductModule = ProductModule;


/***/ }),

/***/ "./src/app/product/product.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var product_component_1 = __webpack_require__("./src/app/product/product.component.ts");
exports.routesProduct = [
    {
        path: 'products',
        children: [
            {
                path: '',
                component: product_component_1.ProductComponent,
                data: { title: 'Products' }
            }
        ],
        pathMatch: 'full'
    }
];


/***/ }),

/***/ "./src/app/profile/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
exports.ProfileComponent = profile_component_1.ProfileComponent;
var profile_routing_1 = __webpack_require__("./src/app/profile/profile.routing.ts");
exports.routesProfile = profile_routing_1.routesProfile;


/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/app/profile/profile.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "profile";

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'afd-render-profile',
        template: __webpack_require__("./src/app/profile/profile.component.html"),
        styles: [__webpack_require__("./src/app/profile/profile.component.css")]
    })
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(4);
var core_1 = __webpack_require__(2);
var index_1 = __webpack_require__("./src/app/profile/index.ts");
var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(index_1.routesProfile)
        ],
        declarations: [index_1.ProfileComponent]
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;


/***/ }),

/***/ "./src/app/profile/profile.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
exports.routesProfile = [
    {
        path: 'profile',
        children: [
            {
                path: '',
                component: profile_component_1.ProfileComponent,
                data: { title: 'Profile' }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/services/base.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
var core_1 = __webpack_require__(2);
var router_1 = __webpack_require__(4);
var platform_browser_1 = __webpack_require__(5);
var BaseService = (function () {
    function BaseService(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
    }
    BaseService.prototype.setTitle = function () {
        var _this = this;
        //set title
        this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) {
            _this.titleService.setTitle(event['title']);
        });
    };
    return BaseService;
}());
BaseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        platform_browser_1.Title])
], BaseService);
exports.BaseService = BaseService;


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(10);
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(86);

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(88);

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack-dev-server/client/index.js?http:/localhost:8080");
__webpack_require__("./node_modules/webpack/hot/dev-server.js");
module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(12);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(87);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(16);

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(151);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(161);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(167);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(84);

/***/ })

},[14]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3M/NTgxMCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sYXlvdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3M/OWM1MSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9sYXlvdXQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbGF5b3V0L2xheW91dC5yb3V0aW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcz9lNDA0Iiwid2VicGFjazovLy8uL3NyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sYXlvdXQvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcz8xNDRhIiwid2VicGFjazovLy8uL3NyYy9hcHAvbGF5b3V0L25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvbGF5b3V0L25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2R1Y3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcz81YTBiIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3Qucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2ZpbGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcz8wNzNlIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9zZXJ2aWNlcy9iYXNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL0Bhbmd1bGFyL2NvcmUuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9yb3V0ZXIvQGFuZ3VsYXIvcm91dGVyLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9tYXAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9mb3Jtcy9AYW5ndWxhci9mb3Jtcy5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSx3Q0FBeUMsa0JBQWtCLG1CQUFtQix5QkFBeUIsS0FBSyxnQ0FBZ0MsaUJBQWlCLGtCQUFrQiw2QkFBNkIsa0JBQWtCLHlFQUF5RSx5RUFBeUUsTUFBTSw2QkFBNkIsb0NBQW9DLG9DQUFvQyxFQUFFLDZCQUE2QixvQ0FBb0Msb0NBQW9DLEVBQUUsNkJBQTZCLG9DQUFvQyxvQ0FBb0MsRUFBRSw2QkFBNkIsb0NBQW9DLG9DQUFvQyxFQUFFLDZCQUE2QixvQ0FBb0Msb0NBQW9DLEVBQUUsNkJBQTZCLG9DQUFvQyxvQ0FBb0MsRUFBRSw2QkFBNkIsa0NBQWtDLGtDQUFrQyxFQUFFLDZCQUE2QixvQ0FBb0Msb0NBQW9DLEVBQUUsNkJBQTZCLG9DQUFvQyxvQ0FBb0MsRUFBRSxrREFBa0QscUJBQXFCLDRDQUE0Qyw0Q0FBNEMsT0FBTyxNQUFNLDRDQUE0Qyw0Q0FBNEMsUUFBUSxLQUFLLDBDQUEwQyxxQkFBcUIsNENBQTRDLDRDQUE0QyxPQUFPLE1BQU0sNENBQTRDLDRDQUE0QyxPQUFPLE1BQU07O0FBRTN5RDs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLHFDQUFzQyxrQ0FBa0MsS0FBSzs7QUFFN0U7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEEsb0NBQTBDO0FBUTFDLElBQWEsWUFBWTtJQU56QjtRQU9F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QyxzQkFBUyxDQUFDLENBQUM7Ozs7Ozs7O0FDSnBELDhDOzs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7QUNBQSw4Qzs7Ozs7OztBQ0FBLDhDOzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7QUNBQSwrQzs7Ozs7OztBQ0FBLCtDOzs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zay1jdWJlLWdyaWQge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBtYXJnaW46IDEwMHB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zay1jdWJlLWdyaWQgLnNrLWN1YmUge1xcclxcbiAgd2lkdGg6IDMzJTtcXHJcXG4gIGhlaWdodDogMzMlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgICBhbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0OyBcXHJcXG59XFxyXFxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTEge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XFxyXFxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4yczsgfVxcclxcbi5zay1jdWJlLWdyaWQgLnNrLWN1YmUyIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xcclxcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7IH1cXHJcXG4uc2stY3ViZS1ncmlkIC5zay1jdWJlMyB7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcXHJcXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzOyB9XFxyXFxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTQge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XFxyXFxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xczsgfVxcclxcbi5zay1jdWJlLWdyaWQgLnNrLWN1YmU1IHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xcclxcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7IH1cXHJcXG4uc2stY3ViZS1ncmlkIC5zay1jdWJlNiB7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcXHJcXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOyB9XFxyXFxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTcge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcclxcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDBzOyB9XFxyXFxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTgge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XFxyXFxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xczsgfVxcclxcbi5zay1jdWJlLWdyaWQgLnNrLWN1YmU5IHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xcclxcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7IH1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcXHJcXG4gIDAlLCA3MCUsIDEwMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XFxyXFxuICB9IDM1JSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTsgXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcXHJcXG4gIDAlLCA3MCUsIDEwMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XFxyXFxuICB9IDM1JSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcXHJcXG4gIH0gXFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYmQtbmF2YmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmViZWNjYXB1cnBsZTtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvYXBwL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zcmMvYXBwL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvYXBwL2xheW91dC9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3JjL2FwcC9sYXlvdXQvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FmZC1zdHVkaW8tYXBwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxhZmQtcmVuZGVyLWxheW91dD48L2FmZC1yZW5kZXItbGF5b3V0PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCAgeyBcclxuICBuYW1lID0gJ0FuZ3VsYXInOyBcclxuICB2YWx1ZTogRGF0ZTtcclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuLy8gaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlLCBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInOyBcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICcuL2xheW91dC9sYXlvdXQubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogICAgICBbIFxyXG4gICAgICBCcm93c2VyTW9kdWxlLCBcclxuICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgIExheW91dE1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbIEFwcENvbXBvbmVudCBdLFxyXG4gIHByb3ZpZGVyczogWyBUaXRsZSBdLFxyXG4gIGJvb3RzdHJhcDogICAgWyBBcHBDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaG9tZS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaG9tZVwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWZkLXJlbmRlci1ob21lJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWyAnLi9ob21lLmNvbXBvbmVudC5jc3MnIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwiZXhwb3J0IHsgTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQuY29tcG9uZW50JztcclxuZXhwb3J0IHsgbGF5b3V0Um91dGVzIH0gZnJvbSAnLi9sYXlvdXQucm91dGluZyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9sYXlvdXQvaW5kZXgudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbGF5b3V0LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm1haW5cXFwiPiA8YWZkLXJlbmRlci1uYXZiYXI+PC9hZmQtcmVuZGVyLW5hdmJhcj4gPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj4gPGRpdiBjbGFzcz1cXFwibG9hZGVyXFxcIj4gPGRpdiBjbGFzcz1cXFwic2stY3ViZS1ncmlkXFxcIj4gPGRpdiBjbGFzcz1cXFwic2stY3ViZSBzay1jdWJlMVxcXCI+PC9kaXY+IDxkaXYgY2xhc3M9XFxcInNrLWN1YmUgc2stY3ViZTJcXFwiPjwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJzay1jdWJlIHNrLWN1YmUzXFxcIj48L2Rpdj4gPGRpdiBjbGFzcz1cXFwic2stY3ViZSBzay1jdWJlNFxcXCI+PC9kaXY+IDxkaXYgY2xhc3M9XFxcInNrLWN1YmUgc2stY3ViZTVcXFwiPjwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJzay1jdWJlIHNrLWN1YmU2XFxcIj48L2Rpdj4gPGRpdiBjbGFzcz1cXFwic2stY3ViZSBzay1jdWJlN1xcXCI+PC9kaXY+IDxkaXYgY2xhc3M9XFxcInNrLWN1YmUgc2stY3ViZThcXFwiPjwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJzay1jdWJlIHNrLWN1YmU5XFxcIj48L2Rpdj4gPC9kaXY+IDwvZGl2PiA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+IDwvZGl2PiA8L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuLy4uL3NoYXJlZC9zZXJ2aWNlcy9iYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZmQtcmVuZGVyLWxheW91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xheW91dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbICcuL2xheW91dC5jb21wb25lbnQuY3NzJyBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHsgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXNlU2VydmljZTogQmFzZVNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy9zZXQgZGVmYXVsdCBzZXJ2aWNlXHJcbiAgICB0aGlzLmJhc2VTZXJ2aWNlLnNldFRpdGxlKCk7XHJcblxyXG4gICAgLy9sb2FkaW5nIGNvbnRlbnRcclxuICAgICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCcubG9hZGVyJykuZmFkZU91dCgnc2xvdycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vLi4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9kdWN0TW9kdWxlIH0gZnJvbSAnLi8uLi9wcm9kdWN0L3Byb2R1Y3QubW9kdWxlJztcclxuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuLy4uL3NoYXJlZC9zZXJ2aWNlcy9iYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJzsgXHJcblxyXG5pbXBvcnQgeyBcclxuICAgIExheW91dENvbXBvbmVudCxcclxuICAgIGxheW91dFJvdXRlc1xyXG59IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZU1vZHVsZSB9IGZyb20gJy4vLi4vcHJvZmlsZS9wcm9maWxlLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFByb2ZpbGVNb2R1bGUsXHJcbiAgICAgICAgUHJvZHVjdE1vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChsYXlvdXRSb3V0ZXMsIHsgdXNlSGFzaDogdHJ1ZSB9KVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogWyBcclxuICAgICAgICBMYXlvdXRDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcclxuICAgICAgICBOYXZiYXJDb21wb25lbnQsXHJcbiAgICAgICAgTm90Rm91bmRDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFsgQmFzZVNlcnZpY2UgXSxcclxuICAgIGV4cG9ydHM6IFsgTGF5b3V0Q29tcG9uZW50IF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUge31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL2xheW91dC9sYXlvdXQubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vLi4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxheW91dFJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBcclxuICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0JpbGwgQ2hhbidcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgICAgICBwYXRoOiAnKionLCBcclxuICAgICAgICBjb21wb25lbnQ6IE5vdEZvdW5kQ29tcG9uZW50LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdGl0bGU6ICdOb3QgRm91bmQgNDA0J1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9sYXlvdXQvbGF5b3V0LnJvdXRpbmcudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2YmFyLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGhlYWRlciBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1leHBhbmQgbmF2YmFyLWRhcmsgZmxleC1jb2x1bW4gZmxleC1tZC1yb3cgYmQtbmF2YmFyXFxcIj4gPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZCBtci0wIG1yLW1kLTJcXFwiIGhyZWY9XFxcIi9cXFwiIGFyaWEtbGFiZWw9XFxcIkJvb3RzdHJhcFxcXCI+IDxzdmcgY2xhc3M9XFxcImQtYmxvY2tcXFwiIHdpZHRoPVxcXCIzNlxcXCIgaGVpZ2h0PVxcXCIzNlxcXCIgdmlld0JveD1cXFwiMCAwIDYxMiA2MTJcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZm9jdXNhYmxlPVxcXCJmYWxzZVxcXCI+PHRpdGxlPkJvb3RzdHJhcDwvdGl0bGU+PHBhdGggZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiBkPVxcXCJNNTEwIDhhOTQuMyA5NC4zIDAgMCAxIDk0IDk0djQwOGE5NC4zIDk0LjMgMCAwIDEtOTQgOTRIMTAyYTk0LjMgOTQuMyAwIDAgMS05NC05NFYxMDJhOTQuMyA5NC4zIDAgMCAxIDk0LTk0aDQwOG0wLThIMTAyQzQ1LjkgMCAwIDQ1LjkgMCAxMDJ2NDA4YzAgNTYuMSA0NS45IDEwMiAxMDIgMTAyaDQwOGM1Ni4xIDAgMTAyLTQ1LjkgMTAyLTEwMlYxMDJDNjEyIDQ1LjkgNTY2LjEgMCA1MTAgMHpcXFwiPjwvcGF0aD48cGF0aCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIGQ9XFxcIk0xOTYuNzcgNDcxLjVWMTU0LjQzaDEyNC4xNWM1NC4yNyAwIDkxIDMxLjY0IDkxIDc5LjEgMCAzMy0yNC4xNyA2My43Mi01NC43MSA2OS4yMXYxLjc2YzQzLjA3IDUuNDkgNzAuNzUgMzUuODIgNzAuNzUgNzggMCA1NS44MS00MCA4OS0xMDcuNDUgODl6bTM5LjU1LTE4MC40aDYzLjI4YzQ2LjggMCA3Mi4yOS0xOC42OCA3Mi4yOS01MyAwLTMxLjQyLTIxLjUzLTQ4Ljc4LTYwLTQ4Ljc4aC03NS41N3ptNzguMjIgMTQ1LjQ2YzQ3LjY4IDAgNzIuNzMtMTkuMzQgNzIuNzMtNTZzLTI1LjkzLTU1LjM3LTc2LjQ2LTU1LjM3aC03NC40OXYxMTEuNHpcXFwiPjwvcGF0aD48L3N2Zz4gPC9hPiA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItbmF2LXNjcm9sbFxcXCI+IDx1bCBjbGFzcz1cXFwibmF2YmFyLW5hdiBiZC1uYXZiYXItbmF2IGZsZXgtcm93XFxcIj4gPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+IDxhIGNsYXNzPVxcXCJuYXYtbGlua1xcXCIgcm91dGVyTGluaz1cXFwiL1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVxcXCJ7IGV4YWN0OiB0cnVlIH1cXFwiPkhvbWU8L2E+IDwvbGk+IDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPiA8YSBjbGFzcz1cXFwibmF2LWxpbmtcXFwiIHJvdXRlckxpbms9XFxcIi9wcm9maWxlXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPlByb2ZpbGU8L2E+IDwvbGk+IDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPiA8YSBjbGFzcz1cXFwibmF2LWxpbmtcXFwiIHJvdXRlckxpbms9XFxcIi9wcm9kdWN0c1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj5Qcm9kdWN0czwvYT4gPC9saT4gPC91bD4gPC9kaXY+IDx1bCBjbGFzcz1cXFwibmF2YmFyLW5hdiBmbGV4LXJvdyBtbC1tZC1hdXRvIGQtbm9uZSBkLW1kLWZsZXhcXFwiPiA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rXFxcIiByb3V0ZXJMaW5rPVxcXCIvY29udGFjdFxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj5Db250YWN0PC9hPiA8L2xpPiA8L3VsPiA8L2hlYWRlcj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2FwcC9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZmQtcmVuZGVyLW5hdmJhcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWyAnLi9uYXZiYXIuY29tcG9uZW50LmNzcycgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcImFiY1wiO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm90Zm91bmQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2xheW91dC9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9hcHAvbGF5b3V0L25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInJvdyBwLTVcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPjwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtNlxcXCI+IEZpbGUgTm90IEZvdW5kIDQwNCAhIDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPjwvZGl2PiA8L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvbGF5b3V0L25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9hcHAvbGF5b3V0L25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FmZC1yZW5kZXItNDA0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9ub3Rmb3VuZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsgJy4vbm90Zm91bmQuY29tcG9uZW50LmNzcycgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdEZvdW5kQ29tcG9uZW50IHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9sYXlvdXQvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LnRzIiwiZXhwb3J0IHsgUHJvZHVjdENvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC5jb21wb25lbnQnO1xyXG5leHBvcnQgeyByb3V0ZXNQcm9kdWN0IH0gZnJvbSAnLi9wcm9kdWN0LnJvdXRpbmcnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvcHJvZHVjdC9pbmRleC50cyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wcm9kdWN0LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gXCJwcm9kdWN0IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+PC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC0xMFxcXCI+IDxzcGFuIGNsYXNzPVxcXCJib3JkZXIgYm9yZGVyLWRhbmdlclxcXCI+IDxkaXYgY2xhc3M9XFxcImVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OSBtaC0xMDBcXFwiPiA8aWZyYW1lIGNsYXNzPVxcXCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cXFwiIHNyYz1cXFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQva0pRUDdraXc1Rms/ZWN2ZXI9MlxcXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPiA8L2Rpdj4gPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sXFxcIj48L2Rpdj4gPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZmQtcmVuZGVyLXByb2R1Y3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbICcuL3Byb2R1Y3QuY29tcG9uZW50LmNzcycgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RDb21wb25lbnQge31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgXHJcbiAgICBQcm9kdWN0Q29tcG9uZW50LFxyXG4gICAgcm91dGVzUHJvZHVjdFxyXG59IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzUHJvZHVjdClcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFsgUHJvZHVjdENvbXBvbmVudCBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdE1vZHVsZSB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0Lm1vZHVsZS50cyIsImltcG9ydCB7IFByb2R1Y3RDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXNQcm9kdWN0OiBSb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ3Byb2R1Y3RzJyxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogUHJvZHVjdENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6ICdQcm9kdWN0cycgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xyXG4gICAgfVxyXG5dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LnJvdXRpbmcudHMiLCJleHBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9maWxlLmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IHJvdXRlc1Byb2ZpbGUgfSBmcm9tICcuL3Byb2ZpbGUucm91dGluZyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9wcm9maWxlL2luZGV4LnRzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3Byb2ZpbGUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcInByb2ZpbGVcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FmZC1yZW5kZXItcHJvZmlsZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsgJy4vcHJvZmlsZS5jb21wb25lbnQuY3NzJyBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBcclxuICAgIFByb2ZpbGVDb21wb25lbnQsXHJcbiAgICByb3V0ZXNQcm9maWxlXHJcbn0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXNQcm9maWxlKVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogWyBQcm9maWxlQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVNb2R1bGUge31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUudHMiLCJpbXBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzUHJvZmlsZTogUm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICdwcm9maWxlJyxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogUHJvZmlsZUNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6ICdQcm9maWxlJyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucm91dGluZy50cyIsImltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJhc2VTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIFxyXG4gICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgcHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlKSB7fVxyXG5cclxuICAgIHNldFRpdGxlKCkge1xyXG4gICAgICAgIC8vc2V0IHRpdGxlXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGV2ZW50KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXHJcbiAgICAgICAgICAgIC5tYXAoKCkgPT4gdGhpcy5hY3RpdmF0ZWRSb3V0ZSlcclxuICAgICAgICAgICAgLm1hcCgocm91dGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChyb3V0ZS5maXJzdENoaWxkKSB7IHJvdXRlID0gcm91dGUuZmlyc3RDaGlsZDsgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmlsdGVyKChyb3V0ZSkgPT4gcm91dGUub3V0bGV0ID09PSAncHJpbWFyeScpXHJcbiAgICAgICAgICAgIC5tZXJnZU1hcCgocm91dGUpID0+IHJvdXRlLmRhdGEpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZShldmVudFsndGl0bGUnXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9zaGFyZWQvc2VydmljZXMvYmFzZS5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcblxyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcclxuXHJcbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4udHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKSg4Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMykpKDg4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMykpKDEyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9AYW5ndWxhci9jb3JlLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMykpKDg3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL0Bhbmd1bGFyL3JvdXRlci5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKSgxNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKSgxNTEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9maWx0ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKSgxNjEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9tYXAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKSgxNjcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMykpKDg0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvZm9ybXMvQGFuZ3VsYXIvZm9ybXMuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==