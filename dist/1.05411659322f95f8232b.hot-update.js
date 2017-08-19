webpackHotUpdate(1,{

/***/ "./node_modules/css-loader/index.js!./src/app/layout/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".bd-navbar {\r\n    background: rebeccapurple;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/app/navbar/navbar.component.css":
false,

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
            router_1.RouterModule.forRoot(index_1.layoutRoutes, { useHash: false })
        ],
        declarations: [
            index_1.LayoutComponent,
            navbar_component_1.NavbarComponent,
            notfound_component_1.NotFoundComponent
        ],
        providers: [base_service_1.BaseService],
        exports: [index_1.LayoutComponent]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;


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

module.exports = "<header class=\"navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar\"> <a class=\"navbar-brand mr-0 mr-md-2\" href=\"/\" aria-label=\"Bootstrap\"> <svg class=\"d-block\" width=\"36\" height=\"36\" viewBox=\"0 0 612 612\" xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\"><title>Bootstrap</title><path fill=\"currentColor\" d=\"M510 8a94.3 94.3 0 0 1 94 94v408a94.3 94.3 0 0 1-94 94H102a94.3 94.3 0 0 1-94-94V102a94.3 94.3 0 0 1 94-94h408m0-8H102C45.9 0 0 45.9 0 102v408c0 56.1 45.9 102 102 102h408c56.1 0 102-45.9 102-102V102C612 45.9 566.1 0 510 0z\"></path><path fill=\"currentColor\" d=\"M196.77 471.5V154.43h124.15c54.27 0 91 31.64 91 79.1 0 33-24.17 63.72-54.71 69.21v1.76c43.07 5.49 70.75 35.82 70.75 78 0 55.81-40 89-107.45 89zm39.55-180.4h63.28c46.8 0 72.29-18.68 72.29-53 0-31.42-21.53-48.78-60-48.78h-75.57zm78.22 145.46c47.68 0 72.73-19.34 72.73-56s-25.93-55.37-76.46-55.37h-74.49v111.4z\"></path></svg> </a> <div class=\"navbar-nav-scroll\"> <ul class=\"navbar-nav bd-navbar-nav flex-row\"> <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\">Home</a> </li> <li class=\"nav-item\"> <a class=\"nav-link active\" routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a> </li> <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/products\" routerLinkActive=\"active\">Products</a> </li> </ul> </div> <ul class=\"navbar-nav flex-row ml-md-auto d-none d-md-flex\"> <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a> </li> </ul> </header>";

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

/***/ "./src/app/navbar/navbar.component.css":
false,

/***/ "./src/app/navbar/navbar.component.html":
false,

/***/ "./src/app/navbar/navbar.component.ts":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3M/Y2MzNCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9sYXlvdXQubW9kdWxlLnRzP2I1ZWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzP2U0MDQqIiwid2VicGFjazovLy8uL3NyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWw/NjVhMCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cz9jMzI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSxxQ0FBc0Msa0NBQWtDLEtBQUs7O0FBRTdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLGtHQUFrRTtBQUNsRSxrRkFBNEQ7QUFDNUQsc0ZBQWdFO0FBQ2hFLDRGQUE0RDtBQUM1RCxvQ0FBeUM7QUFDekMsc0NBQStDO0FBRS9DLCtEQUdpQjtBQUVqQixrRkFBNEQ7QUFpQjVELElBQWEsWUFBWTtJQUF6QjtJQUEyQixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDO0FBQWYsWUFBWTtJQWZ4QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCw4QkFBYTtZQUNiLDhCQUFhO1lBQ2IscUJBQVksQ0FBQyxPQUFPLENBQUMsb0JBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUN6RDtRQUNELFlBQVksRUFBRTtZQUNWLHVCQUFlO1lBQ2Ysa0NBQWU7WUFDZixzQ0FBaUI7U0FDcEI7UUFDRCxTQUFTLEVBQUUsQ0FBRSwwQkFBVyxDQUFFO1FBQzFCLE9BQU8sRUFBRSxDQUFFLHVCQUFlLENBQUU7S0FDL0IsQ0FBQztHQUVXLFlBQVksQ0FBRztBQUFmLG9DQUFZOzs7Ozs7Ozs7QUM1QnpCOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7QUNQQSwrakQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxvQ0FBMEM7QUFRMUMsSUFBYSxlQUFlO0lBTjVCO1FBT0ksU0FBSSxHQUFXLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDO0FBRlksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLG1CQUFtQjtRQUM3Qiw2QkFBYSxnREFBeUI7UUFDdEMsU0FBUyxtQkFBSSwrQ0FBMEI7S0FDMUMsQ0FBQztHQUVXLGVBQWUsQ0FFM0I7QUFGWSwwQ0FBZSIsImZpbGUiOiIxLjA1NDExNjU5MzIyZjk1ZjgyMzJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYmQtbmF2YmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmViZWNjYXB1cnBsZTtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvYXBwL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zcmMvYXBwL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHsgTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2R1Y3RNb2R1bGUgfSBmcm9tICcuLy4uL3Byb2R1Y3QvcHJvZHVjdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL3NlcnZpY2VzL2Jhc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInOyBcclxuXHJcbmltcG9ydCB7IFxyXG4gICAgTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgbGF5b3V0Um91dGVzXHJcbn0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlTW9kdWxlIH0gZnJvbSAnLi8uLi9wcm9maWxlL3Byb2ZpbGUubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgUHJvZmlsZU1vZHVsZSxcclxuICAgICAgICBQcm9kdWN0TW9kdWxlLFxyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KGxheW91dFJvdXRlcywgeyB1c2VIYXNoOiBmYWxzZSB9KVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogWyBcclxuICAgICAgICBMYXlvdXRDb21wb25lbnQsXHJcbiAgICAgICAgTmF2YmFyQ29tcG9uZW50LFxyXG4gICAgICAgIE5vdEZvdW5kQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbIEJhc2VTZXJ2aWNlIF0sXHJcbiAgICBleHBvcnRzOiBbIExheW91dENvbXBvbmVudCBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYXZiYXIuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2FwcC9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gXCI8aGVhZGVyIGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWV4cGFuZCBuYXZiYXItZGFyayBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvdyBiZC1uYXZiYXJcXFwiPiA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kIG1yLTAgbXItbWQtMlxcXCIgaHJlZj1cXFwiL1xcXCIgYXJpYS1sYWJlbD1cXFwiQm9vdHN0cmFwXFxcIj4gPHN2ZyBjbGFzcz1cXFwiZC1ibG9ja1xcXCIgd2lkdGg9XFxcIjM2XFxcIiBoZWlnaHQ9XFxcIjM2XFxcIiB2aWV3Qm94PVxcXCIwIDAgNjEyIDYxMlxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmb2N1c2FibGU9XFxcImZhbHNlXFxcIj48dGl0bGU+Qm9vdHN0cmFwPC90aXRsZT48cGF0aCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIGQ9XFxcIk01MTAgOGE5NC4zIDk0LjMgMCAwIDEgOTQgOTR2NDA4YTk0LjMgOTQuMyAwIDAgMS05NCA5NEgxMDJhOTQuMyA5NC4zIDAgMCAxLTk0LTk0VjEwMmE5NC4zIDk0LjMgMCAwIDEgOTQtOTRoNDA4bTAtOEgxMDJDNDUuOSAwIDAgNDUuOSAwIDEwMnY0MDhjMCA1Ni4xIDQ1LjkgMTAyIDEwMiAxMDJoNDA4YzU2LjEgMCAxMDItNDUuOSAxMDItMTAyVjEwMkM2MTIgNDUuOSA1NjYuMSAwIDUxMCAwelxcXCI+PC9wYXRoPjxwYXRoIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgZD1cXFwiTTE5Ni43NyA0NzEuNVYxNTQuNDNoMTI0LjE1YzU0LjI3IDAgOTEgMzEuNjQgOTEgNzkuMSAwIDMzLTI0LjE3IDYzLjcyLTU0LjcxIDY5LjIxdjEuNzZjNDMuMDcgNS40OSA3MC43NSAzNS44MiA3MC43NSA3OCAwIDU1LjgxLTQwIDg5LTEwNy40NSA4OXptMzkuNTUtMTgwLjRoNjMuMjhjNDYuOCAwIDcyLjI5LTE4LjY4IDcyLjI5LTUzIDAtMzEuNDItMjEuNTMtNDguNzgtNjAtNDguNzhoLTc1LjU3em03OC4yMiAxNDUuNDZjNDcuNjggMCA3Mi43My0xOS4zNCA3Mi43My01NnMtMjUuOTMtNTUuMzctNzYuNDYtNTUuMzdoLTc0LjQ5djExMS40elxcXCI+PC9wYXRoPjwvc3ZnPiA8L2E+IDxkaXYgY2xhc3M9XFxcIm5hdmJhci1uYXYtc2Nyb2xsXFxcIj4gPHVsIGNsYXNzPVxcXCJuYXZiYXItbmF2IGJkLW5hdmJhci1uYXYgZmxleC1yb3dcXFwiPiA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rXFxcIiByb3V0ZXJMaW5rPVxcXCIvXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPkhvbWU8L2E+IDwvbGk+IDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPiA8YSBjbGFzcz1cXFwibmF2LWxpbmsgYWN0aXZlXFxcIiByb3V0ZXJMaW5rPVxcXCIvcHJvZmlsZVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj5Qcm9maWxlPC9hPiA8L2xpPiA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rXFxcIiByb3V0ZXJMaW5rPVxcXCIvcHJvZHVjdHNcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+UHJvZHVjdHM8L2E+IDwvbGk+IDwvdWw+IDwvZGl2PiA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXYgZmxleC1yb3cgbWwtbWQtYXV0byBkLW5vbmUgZC1tZC1mbGV4XFxcIj4gPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+IDxhIGNsYXNzPVxcXCJuYXYtbGlua1xcXCIgcm91dGVyTGluaz1cXFwiL2NvbnRhY3RcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+Q29udGFjdDwvYT4gPC9saT4gPC91bD4gPC9oZWFkZXI+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWZkLXJlbmRlci1uYXZiYXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL25hdmJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsgJy4vbmF2YmFyLmNvbXBvbmVudC5jc3MnIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJhYmNcIjtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==