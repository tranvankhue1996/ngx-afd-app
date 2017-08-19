webpackHotUpdate(1,{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3JvdXRpbmcubW9kdWxlLnRzPzc1MDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBeUM7QUFDekMsc0NBQXVEO0FBRXZELG9GQUFnRTtBQUNoRSxvRkFBZ0U7QUFFaEUsSUFBTSxTQUFTLEdBQVc7SUFDdEI7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLFFBQVEsRUFBRTtZQUNOLCtCQUFhO1lBQ2IsK0JBQWE7U0FDaEI7UUFDRCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFO0tBQ2pDO0NBQ0osQ0FBQztBQVFGLElBQWEsYUFBYTtJQUExQjtJQUE0QixDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDO0FBQWhCLGFBQWE7SUFOekIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wscUJBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1NBQ25DO0tBQ0osQ0FBQztHQUVXLGFBQWEsQ0FBRztBQUFoQixzQ0FBYSIsImZpbGUiOiIxLjIwYjcwMDc4ODk3ZmZlNDJiZjVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyByb3V0ZXNQcm9maWxlIH0gZnJvbSAnLi8uLi8uLi9wcm9maWxlL3Byb2ZpbGUucm91dGluZyc7XHJcbmltcG9ydCB7IHJvdXRlc1Byb2R1Y3QgfSBmcm9tICcuLy4uLy4uL3Byb2R1Y3QvcHJvZHVjdC5yb3V0aW5nJztcclxuXHJcbmNvbnN0IHJvdXRlc0FwcDogUm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHJvdXRlc1Byb2ZpbGUsXHJcbiAgICAgICAgICAgIHJvdXRlc1Byb2R1Y3RcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRhdGE6IHsgdGl0bGU6ICdLaHVlVHJhbkFGRCcgfVxyXG4gICAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzQXBwKVxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvdXRpbmdNb2R1bGUge31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3JvdXRpbmcubW9kdWxlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==