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
        providers: [base_service_1.BaseService, routing_module_1.RoutingModule],
        exports: [index_1.LayoutComponent]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9sYXlvdXQubW9kdWxlLnRzP2I1ZWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RkFBbUU7QUFDbkUsc0ZBQWdFO0FBQ2hFLHFGQUErRDtBQUMvRCxvQ0FBeUM7QUFFekMsK0RBRWlCO0FBRWpCLGtGQUE0RDtBQUM1RCxrRkFBNEQ7QUFhNUQsSUFBYSxZQUFZO0lBQXpCO0lBQTJCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUM7QUFBZixZQUFZO0lBWHhCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLDhCQUFhO1lBQ2IsOEJBQWE7WUFDYiw4QkFBYTtTQUNoQjtRQUNELFlBQVksRUFBRSxDQUFFLGtDQUFlLEVBQUUsdUJBQWUsQ0FBRTtRQUNsRCxTQUFTLEVBQUUsQ0FBRSwwQkFBVyxFQUFFLDhCQUFhLENBQUU7UUFDekMsT0FBTyxFQUFFLENBQUUsdUJBQWUsQ0FBRTtLQUMvQixDQUFDO0dBRVcsWUFBWSxDQUFHO0FBQWYsb0NBQVkiLCJmaWxlIjoiMS41YTlhZWQyOGQ2Njc5ZmI5MzNlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gJy4vLi4vc2hhcmVkL21vZHVsZXMvcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL3NlcnZpY2VzL2Jhc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vLi4vbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgXHJcbiAgICBMYXlvdXRDb21wb25lbnRcclxufSBmcm9tICcuL2luZGV4JztcclxuXHJcbmltcG9ydCB7IFByb2ZpbGVNb2R1bGUgfSBmcm9tICcuLy4uL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQcm9kdWN0TW9kdWxlIH0gZnJvbSAnLi8uLi9wcm9kdWN0L3Byb2R1Y3QubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgUHJvZmlsZU1vZHVsZSxcclxuICAgICAgICBQcm9kdWN0TW9kdWxlLFxyXG4gICAgICAgIFJvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFsgTmF2YmFyQ29tcG9uZW50LCBMYXlvdXRDb21wb25lbnQgXSxcclxuICAgIHByb3ZpZGVyczogWyBCYXNlU2VydmljZSwgUm91dGluZ01vZHVsZSBdLFxyXG4gICAgZXhwb3J0czogWyBMYXlvdXRDb21wb25lbnQgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExheW91dE1vZHVsZSB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwic291cmNlUm9vdCI6IiJ9