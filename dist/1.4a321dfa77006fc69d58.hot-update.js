webpackHotUpdate(1,{

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
var routing_module_1 = __webpack_require__("./src/app/shared/modules/routing.module.ts");
var base_service_1 = __webpack_require__("./src/app/shared/services/base.service.ts");
var navbar_component_1 = __webpack_require__("./src/app/navbar/navbar.component.ts");
var core_1 = __webpack_require__(3);
var index_1 = __webpack_require__("./src/app/layout/index.ts");
var profile_module_1 = __webpack_require__("./src/app/profile/profile.module.ts");
var product_module_1 = __webpack_require__("./src/app/product/product.module.ts");
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
            routing_module_1.RoutingModule
        ],
        declarations: [navbar_component_1.NavbarComponent, index_1.LayoutComponent],
        providers: [base_service_1.BaseService],
        exports: [index_1.LayoutComponent]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;


/***/ }),

/***/ "./src/app/shared/modules/routing.module.ts":
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
var router_1 = __webpack_require__(5);
var profile_routing_1 = __webpack_require__("./src/app/profile/profile.routing.ts");
var product_routing_1 = __webpack_require__("./src/app/product/product.routing.ts");
var routesApp = [
    {
        path: '',
        children: [
            profile_routing_1.routesProfile,
            product_routing_1.routesProduct
        ],
        data: { title: 'KhueTranAFD' }
    }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routesApp)
        ]
    })
], RoutingModule);
exports.RoutingModule = RoutingModule;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9sYXlvdXQubW9kdWxlLnRzP2I1ZWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9yb3V0aW5nLm1vZHVsZS50cz83NTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUZBQW1FO0FBQ25FLHNGQUFnRTtBQUNoRSxxRkFBK0Q7QUFDL0Qsb0NBQXlDO0FBRXpDLCtEQUVpQjtBQUVqQixrRkFBNEQ7QUFDNUQsa0ZBQTREO0FBYTVELElBQWEsWUFBWTtJQUF6QjtJQUEyQixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDO0FBQWYsWUFBWTtJQVh4QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCw4QkFBYTtZQUNiLDhCQUFhO1lBQ2IsOEJBQWE7U0FDaEI7UUFDRCxZQUFZLEVBQUUsQ0FBRSxrQ0FBZSxFQUFFLHVCQUFlLENBQUU7UUFDbEQsU0FBUyxFQUFFLENBQUUsMEJBQVcsQ0FBRTtRQUMxQixPQUFPLEVBQUUsQ0FBRSx1QkFBZSxDQUFFO0tBQy9CLENBQUM7R0FFVyxZQUFZLENBQUc7QUFBZixvQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnpCLG9DQUF5QztBQUN6QyxzQ0FBdUQ7QUFFdkQsb0ZBQWdFO0FBQ2hFLG9GQUFnRTtBQUVoRSxJQUFNLFNBQVMsR0FBVztJQUN0QjtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsUUFBUSxFQUFFO1lBQ04sK0JBQWE7WUFDYiwrQkFBYTtTQUNoQjtRQUNELElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7S0FDakM7Q0FDSixDQUFDO0FBUUYsSUFBYSxhQUFhO0lBQTFCO0lBQTRCLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUM7QUFBaEIsYUFBYTtJQU56QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCxxQkFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7U0FDbkM7S0FDSixDQUFDO0dBRVcsYUFBYSxDQUFHO0FBQWhCLHNDQUFhIiwiZmlsZSI6IjEuNGEzMjFkZmE3NzAwNmZjNjlkNTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuLy4uL3NoYXJlZC9tb2R1bGVzL3JvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuLy4uL3NoYXJlZC9zZXJ2aWNlcy9iYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuLy4uL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFxyXG4gICAgTGF5b3V0Q29tcG9uZW50XHJcbn0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlTW9kdWxlIH0gZnJvbSAnLi8uLi9wcm9maWxlL3Byb2ZpbGUubW9kdWxlJztcclxuaW1wb3J0IHsgUHJvZHVjdE1vZHVsZSB9IGZyb20gJy4vLi4vcHJvZHVjdC9wcm9kdWN0Lm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFByb2ZpbGVNb2R1bGUsXHJcbiAgICAgICAgUHJvZHVjdE1vZHVsZSxcclxuICAgICAgICBSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbIE5hdmJhckNvbXBvbmVudCwgTGF5b3V0Q29tcG9uZW50IF0sXHJcbiAgICBwcm92aWRlcnM6IFsgQmFzZVNlcnZpY2UgXSxcclxuICAgIGV4cG9ydHM6IFsgTGF5b3V0Q29tcG9uZW50IF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUge31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL2xheW91dC9sYXlvdXQubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgcm91dGVzUHJvZmlsZSB9IGZyb20gJy4vLi4vLi4vcHJvZmlsZS9wcm9maWxlLnJvdXRpbmcnO1xyXG5pbXBvcnQgeyByb3V0ZXNQcm9kdWN0IH0gZnJvbSAnLi8uLi8uLi9wcm9kdWN0L3Byb2R1Y3Qucm91dGluZyc7XHJcblxyXG5jb25zdCByb3V0ZXNBcHA6IFJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICByb3V0ZXNQcm9maWxlLFxyXG4gICAgICAgICAgICByb3V0ZXNQcm9kdWN0XHJcbiAgICAgICAgXSxcclxuICAgICAgICBkYXRhOiB7IHRpdGxlOiAnS2h1ZVRyYW5BRkQnIH1cclxuICAgIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlc0FwcClcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSb3V0aW5nTW9kdWxlIHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9yb3V0aW5nLm1vZHVsZS50cyJdLCJzb3VyY2VSb290IjoiIn0=