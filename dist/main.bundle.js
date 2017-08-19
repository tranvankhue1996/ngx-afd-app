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
exports.push([module.i, "", ""]);

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
var core_1 = __webpack_require__(3);
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
var core_1 = __webpack_require__(3);
var forms_1 = __webpack_require__(9);
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var platform_browser_1 = __webpack_require__(4);
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
var core_1 = __webpack_require__(3);
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

module.exports = "<div class=\"loading\"> <afd-render-navbar></afd-render-navbar> <div class=\"container-fluid\"> <router-outlet></router-outlet> </div> </div>";

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
var core_1 = __webpack_require__(3);
var base_service_1 = __webpack_require__("./src/app/shared/services/base.service.ts");
var LayoutComponent = (function () {
    function LayoutComponent(baseService) {
        this.baseService = baseService;
        this.name = 'Angular';
    }
    LayoutComponent.prototype.ngOnInit = function () {
        //set default service
        this.baseService.setTitle();
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
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(5);
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
var core_1 = __webpack_require__(3);
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
var core_1 = __webpack_require__(3);
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
var core_1 = __webpack_require__(3);
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
var router_1 = __webpack_require__(5);
var core_1 = __webpack_require__(3);
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
var core_1 = __webpack_require__(3);
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
var router_1 = __webpack_require__(5);
var core_1 = __webpack_require__(3);
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
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(5);
var platform_browser_1 = __webpack_require__(4);
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

module.exports = (__webpack_require__(2))(86);

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack-dev-server/client/index.js?http:/localhost:8080");
__webpack_require__("./node_modules/webpack/hot/dev-server.js");
module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(12);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(16);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(87);

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(151);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(161);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(167);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(84);

/***/ })

},[13]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3M/NTgxMCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sYXlvdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3M/OWM1MSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9sYXlvdXQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbGF5b3V0L2xheW91dC5yb3V0aW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcz9lNDA0Iiwid2VicGFjazovLy8uL3NyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sYXlvdXQvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcz8xNDRhIiwid2VicGFjazovLy8uL3NyYy9hcHAvbGF5b3V0L25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvbGF5b3V0L25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2R1Y3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcz81YTBiIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3Qucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2ZpbGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcz8wNzNlIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9zZXJ2aWNlcy9iYXNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9AYW5ndWxhci9jb3JlLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL0Bhbmd1bGFyL3JvdXRlci5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvbWFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvZm9ybXMvQGFuZ3VsYXIvZm9ybXMuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSxxQ0FBc0Msa0NBQWtDLEtBQUs7O0FBRTdFOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLG9DQUEwQztBQVExQyxJQUFhLFlBQVk7SUFOekI7UUFPRSxTQUFJLEdBQUcsU0FBUyxDQUFDO0lBR25CLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUM7QUFKWSxZQUFZO0lBTnhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBRSxpREFFVDtLQUNGLENBQUM7R0FDVyxZQUFZLENBSXhCO0FBSlksb0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnpCLG9DQUE4QztBQUM5QyxxQ0FBNkM7QUFDN0Msa0ZBQWtGO0FBQ2xGLGdEQUFpRTtBQUNqRSx3RUFBZ0Q7QUFFaEQsK0VBQXNEO0FBWXRELElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDO0FBQWIsU0FBUztJQVZyQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQU87WUFDVixnQ0FBYTtZQUNiLG1CQUFXO1lBQ1gsNEJBQVk7U0FDZjtRQUNELFlBQVksRUFBRSxDQUFFLDRCQUFZLENBQUU7UUFDOUIsU0FBUyxFQUFFLENBQUUsd0JBQUssQ0FBRTtRQUNwQixTQUFTLEVBQUssQ0FBRSw0QkFBWSxDQUFFO0tBQy9CLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUzs7Ozs7Ozs7O0FDakJ0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QUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQztBQXBCWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBRW1CLGVBQU07UUFDUix1QkFBYztRQUNoQix3QkFBSztHQUhwQixXQUFXLENBb0J2QjtBQXBCWSxrQ0FBVzs7Ozs7Ozs7Ozs7QUNSeEIseURBQTJFO0FBRTNFLGtFQUE2QztBQUU3QyxpREFBc0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLENBQUM7Ozs7Ozs7O0FDSnBELDhDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7O0FDQUEsOEM7Ozs7Ozs7QUNBQSw4Qzs7Ozs7OztBQ0FBLCtDOzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7QUNBQSwrQzs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJkLW5hdmJhciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJlYmVjY2FwdXJwbGU7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL2FwcC9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3JjL2FwcC9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL2FwcC9sYXlvdXQvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NyYy9hcHAvbGF5b3V0L25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZmQtc3R1ZGlvLWFwcCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8YWZkLXJlbmRlci1sYXlvdXQ+PC9hZmQtcmVuZGVyLWxheW91dD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgIHsgXHJcbiAgbmFtZSA9ICdBbmd1bGFyJzsgXHJcbiAgdmFsdWU6IERhdGU7XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbi8vIGltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSwgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJzsgXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9ICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi9sYXlvdXQvbGF5b3V0Lm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6ICAgICAgWyBcclxuICAgICAgQnJvd3Nlck1vZHVsZSwgXHJcbiAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICBMYXlvdXRNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogWyBBcHBDb21wb25lbnQgXSxcclxuICBwcm92aWRlcnM6IFsgVGl0bGUgXSxcclxuICBib290c3RyYXA6ICAgIFsgQXBwQ29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2hvbWUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcImhvbWVcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FmZC1yZW5kZXItaG9tZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsgJy4vaG9tZS5jb21wb25lbnQuY3NzJyBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsImV4cG9ydCB7IExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IGxheW91dFJvdXRlcyB9IGZyb20gJy4vbGF5b3V0LnJvdXRpbmcnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvbGF5b3V0L2luZGV4LnRzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2xheW91dC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJsb2FkaW5nXFxcIj4gPGFmZC1yZW5kZXItbmF2YmFyPjwvYWZkLXJlbmRlci1uYXZiYXI+IDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+IDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4gPC9kaXY+IDwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL3NlcnZpY2VzL2Jhc2Uuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FmZC1yZW5kZXItbGF5b3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsgJy4vbGF5b3V0LmNvbXBvbmVudC5jc3MnIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgeyBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhc2VTZXJ2aWNlOiBCYXNlU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvL3NldCBkZWZhdWx0IHNlcnZpY2VcclxuICAgIHRoaXMuYmFzZVNlcnZpY2Uuc2V0VGl0bGUoKTtcclxuICB9XHJcblxyXG4gIG5hbWUgPSAnQW5ndWxhcic7IFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2R1Y3RNb2R1bGUgfSBmcm9tICcuLy4uL3Byb2R1Y3QvcHJvZHVjdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL3NlcnZpY2VzL2Jhc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInOyBcclxuXHJcbmltcG9ydCB7IFxyXG4gICAgTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgbGF5b3V0Um91dGVzXHJcbn0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlTW9kdWxlIH0gZnJvbSAnLi8uLi9wcm9maWxlL3Byb2ZpbGUubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgUHJvZmlsZU1vZHVsZSxcclxuICAgICAgICBQcm9kdWN0TW9kdWxlLFxyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KGxheW91dFJvdXRlcywgeyB1c2VIYXNoOiB0cnVlIH0pXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbIFxyXG4gICAgICAgIExheW91dENvbXBvbmVudCxcclxuICAgICAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgICAgIE5hdmJhckNvbXBvbmVudCxcclxuICAgICAgICBOb3RGb3VuZENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogWyBCYXNlU2VydmljZSBdLFxyXG4gICAgZXhwb3J0czogWyBMYXlvdXRDb21wb25lbnQgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExheW91dE1vZHVsZSB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgbGF5b3V0Um91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IFxyXG4gICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQmlsbCBDaGFuJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgICAgIHBhdGg6ICcqKicsIFxyXG4gICAgICAgIGNvbXBvbmVudDogTm90Rm91bmRDb21wb25lbnQsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0aXRsZTogJ05vdCBGb3VuZCA0MDQnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5dO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL2xheW91dC9sYXlvdXQucm91dGluZy50cyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYXZiYXIuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2FwcC9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gXCI8aGVhZGVyIGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWV4cGFuZCBuYXZiYXItZGFyayBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvdyBiZC1uYXZiYXJcXFwiPiA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kIG1yLTAgbXItbWQtMlxcXCIgaHJlZj1cXFwiL1xcXCIgYXJpYS1sYWJlbD1cXFwiQm9vdHN0cmFwXFxcIj4gPHN2ZyBjbGFzcz1cXFwiZC1ibG9ja1xcXCIgd2lkdGg9XFxcIjM2XFxcIiBoZWlnaHQ9XFxcIjM2XFxcIiB2aWV3Qm94PVxcXCIwIDAgNjEyIDYxMlxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmb2N1c2FibGU9XFxcImZhbHNlXFxcIj48dGl0bGU+Qm9vdHN0cmFwPC90aXRsZT48cGF0aCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIGQ9XFxcIk01MTAgOGE5NC4zIDk0LjMgMCAwIDEgOTQgOTR2NDA4YTk0LjMgOTQuMyAwIDAgMS05NCA5NEgxMDJhOTQuMyA5NC4zIDAgMCAxLTk0LTk0VjEwMmE5NC4zIDk0LjMgMCAwIDEgOTQtOTRoNDA4bTAtOEgxMDJDNDUuOSAwIDAgNDUuOSAwIDEwMnY0MDhjMCA1Ni4xIDQ1LjkgMTAyIDEwMiAxMDJoNDA4YzU2LjEgMCAxMDItNDUuOSAxMDItMTAyVjEwMkM2MTIgNDUuOSA1NjYuMSAwIDUxMCAwelxcXCI+PC9wYXRoPjxwYXRoIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgZD1cXFwiTTE5Ni43NyA0NzEuNVYxNTQuNDNoMTI0LjE1YzU0LjI3IDAgOTEgMzEuNjQgOTEgNzkuMSAwIDMzLTI0LjE3IDYzLjcyLTU0LjcxIDY5LjIxdjEuNzZjNDMuMDcgNS40OSA3MC43NSAzNS44MiA3MC43NSA3OCAwIDU1LjgxLTQwIDg5LTEwNy40NSA4OXptMzkuNTUtMTgwLjRoNjMuMjhjNDYuOCAwIDcyLjI5LTE4LjY4IDcyLjI5LTUzIDAtMzEuNDItMjEuNTMtNDguNzgtNjAtNDguNzhoLTc1LjU3em03OC4yMiAxNDUuNDZjNDcuNjggMCA3Mi43My0xOS4zNCA3Mi43My01NnMtMjUuOTMtNTUuMzctNzYuNDYtNTUuMzdoLTc0LjQ5djExMS40elxcXCI+PC9wYXRoPjwvc3ZnPiA8L2E+IDxkaXYgY2xhc3M9XFxcIm5hdmJhci1uYXYtc2Nyb2xsXFxcIj4gPHVsIGNsYXNzPVxcXCJuYXZiYXItbmF2IGJkLW5hdmJhci1uYXYgZmxleC1yb3dcXFwiPiA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rXFxcIiByb3V0ZXJMaW5rPVxcXCIvXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XFxcInsgZXhhY3Q6IHRydWUgfVxcXCI+SG9tZTwvYT4gPC9saT4gPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+IDxhIGNsYXNzPVxcXCJuYXYtbGlua1xcXCIgcm91dGVyTGluaz1cXFwiL3Byb2ZpbGVcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+UHJvZmlsZTwvYT4gPC9saT4gPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+IDxhIGNsYXNzPVxcXCJuYXYtbGlua1xcXCIgcm91dGVyTGluaz1cXFwiL3Byb2R1Y3RzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPlByb2R1Y3RzPC9hPiA8L2xpPiA8L3VsPiA8L2Rpdj4gPHVsIGNsYXNzPVxcXCJuYXZiYXItbmF2IGZsZXgtcm93IG1sLW1kLWF1dG8gZC1ub25lIGQtbWQtZmxleFxcXCI+IDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPiA8YSBjbGFzcz1cXFwibmF2LWxpbmtcXFwiIHJvdXRlckxpbms9XFxcIi9jb250YWN0XFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPkNvbnRhY3Q8L2E+IDwvbGk+IDwvdWw+IDwvaGVhZGVyPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvYXBwL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FmZC1yZW5kZXItbmF2YmFyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbICcuL25hdmJhci5jb21wb25lbnQuY3NzJyBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiYWJjXCI7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub3Rmb3VuZC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvbGF5b3V0L25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2FwcC9sYXlvdXQvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicm93IHAtNVxcXCI+IDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+PC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC02XFxcIj4gRmlsZSBOb3QgRm91bmQgNDA0ICEgPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+PC9kaXY+IDwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9sYXlvdXQvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2FwcC9sYXlvdXQvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWZkLXJlbmRlci00MDQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL25vdGZvdW5kLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWyAnLi9ub3Rmb3VuZC5jb21wb25lbnQuY3NzJyBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTm90Rm91bmRDb21wb25lbnQge31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL2xheW91dC9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQudHMiLCJleHBvcnQgeyBQcm9kdWN0Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IHJvdXRlc1Byb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3Qucm91dGluZyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9wcm9kdWN0L2luZGV4LnRzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3Byb2R1Y3QuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcInByb2R1Y3QgPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sXFxcIj48L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLTEwXFxcIj4gPHNwYW4gY2xhc3M9XFxcImJvcmRlciBib3JkZXItZGFuZ2VyXFxcIj4gPGRpdiBjbGFzcz1cXFwiZW1iZWQtcmVzcG9uc2l2ZSBlbWJlZC1yZXNwb25zaXZlLTE2Ynk5IG1oLTEwMFxcXCI+IDxpZnJhbWUgY2xhc3M9XFxcImVtYmVkLXJlc3BvbnNpdmUtaXRlbVxcXCIgc3JjPVxcXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9rSlFQN2tpdzVGaz9lY3Zlcj0yXFxcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+IDwvZGl2PiA8L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPjwvZGl2PiA8L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FmZC1yZW5kZXItcHJvZHVjdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsgJy4vcHJvZHVjdC5jb21wb25lbnQuY3NzJyBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdENvbXBvbmVudCB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBcclxuICAgIFByb2R1Y3RDb21wb25lbnQsXHJcbiAgICByb3V0ZXNQcm9kdWN0XHJcbn0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXNQcm9kdWN0KVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogWyBQcm9kdWN0Q29tcG9uZW50IF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TW9kdWxlIHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QubW9kdWxlLnRzIiwiaW1wb3J0IHsgUHJvZHVjdENvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlc1Byb2R1Y3Q6IFJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAncHJvZHVjdHMnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogJ1Byb2R1Y3RzJyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnXHJcbiAgICB9XHJcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3Qucm91dGluZy50cyIsImV4cG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUuY29tcG9uZW50JztcclxuZXhwb3J0IHsgcm91dGVzUHJvZmlsZSB9IGZyb20gJy4vcHJvZmlsZS5yb3V0aW5nJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL3Byb2ZpbGUvaW5kZXgudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcHJvZmlsZS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwicHJvZmlsZVwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWZkLXJlbmRlci1wcm9maWxlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWyAnLi9wcm9maWxlLmNvbXBvbmVudC5jc3MnIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFxyXG4gICAgUHJvZmlsZUNvbXBvbmVudCxcclxuICAgIHJvdXRlc1Byb2ZpbGVcclxufSBmcm9tICcuL2luZGV4JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlc1Byb2ZpbGUpXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbIFByb2ZpbGVDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZU1vZHVsZSB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLm1vZHVsZS50cyIsImltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXNQcm9maWxlOiBSb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ3Byb2ZpbGUnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBQcm9maWxlQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogJ1Byb2ZpbGUnIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5yb3V0aW5nLnRzIiwiaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFzZVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgXHJcbiAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUpIHt9XHJcblxyXG4gICAgc2V0VGl0bGUoKSB7XHJcbiAgICAgICAgLy9zZXQgdGl0bGVcclxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHNcclxuICAgICAgICAgICAgLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZClcclxuICAgICAgICAgICAgLm1hcCgoKSA9PiB0aGlzLmFjdGl2YXRlZFJvdXRlKVxyXG4gICAgICAgICAgICAubWFwKChyb3V0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJvdXRlLmZpcnN0Q2hpbGQpIHsgcm91dGUgPSByb3V0ZS5maXJzdENoaWxkOyB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHJvdXRlKSA9PiByb3V0ZS5vdXRsZXQgPT09ICdwcmltYXJ5JylcclxuICAgICAgICAgICAgLm1lcmdlTWFwKChyb3V0ZSkgPT4gcm91dGUuZGF0YSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKGV2ZW50Wyd0aXRsZSddKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL3NoYXJlZC9zZXJ2aWNlcy9iYXNlLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuXHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xyXG5cclxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL0Bhbmd1bGFyL2NvcmUuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9yb3V0ZXIvQGFuZ3VsYXIvcm91dGVyLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDE1MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDE2MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL21hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDE2Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoODQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9mb3Jtcy9AYW5ndWxhci9mb3Jtcy5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9