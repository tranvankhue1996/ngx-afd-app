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
var product_module_1 = __webpack_require__("./src/app/product/product.module.ts");
var base_service_1 = __webpack_require__("./src/app/shared/services/base.service.ts");
var navbar_component_1 = __webpack_require__("./src/app/navbar/navbar.component.ts");
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
        declarations: [navbar_component_1.NavbarComponent, index_1.LayoutComponent],
        providers: [base_service_1.BaseService],
        exports: [index_1.LayoutComponent]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9sYXlvdXQubW9kdWxlLnRzP2I1ZWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRkFBNEQ7QUFDNUQsc0ZBQWdFO0FBQ2hFLHFGQUErRDtBQUMvRCxvQ0FBeUM7QUFDekMsc0NBQStDO0FBRS9DLCtEQUdpQjtBQUVqQixrRkFBNEQ7QUFhNUQsSUFBYSxZQUFZO0lBQXpCO0lBQTJCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUM7QUFBZixZQUFZO0lBWHhCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLDhCQUFhO1lBQ2IsOEJBQWE7WUFDYixxQkFBWSxDQUFDLE9BQU8sQ0FBQyxvQkFBWSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO1NBQ3hEO1FBQ0QsWUFBWSxFQUFFLENBQUUsa0NBQWUsRUFBRSx1QkFBZSxDQUFFO1FBQ2xELFNBQVMsRUFBRSxDQUFFLDBCQUFXLENBQUU7UUFDMUIsT0FBTyxFQUFFLENBQUUsdUJBQWUsQ0FBRTtLQUMvQixDQUFDO0dBRVcsWUFBWSxDQUFHO0FBQWYsb0NBQVkiLCJmaWxlIjoiMS40ZDc5ZTMzZWM0YjA5YWY2NjZkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdE1vZHVsZSB9IGZyb20gJy4vLi4vcHJvZHVjdC9wcm9kdWN0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQvc2VydmljZXMvYmFzZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7IFxyXG5cclxuaW1wb3J0IHsgXHJcbiAgICBMYXlvdXRDb21wb25lbnQsXHJcbiAgICBsYXlvdXRSb3V0ZXNcclxufSBmcm9tICcuL2luZGV4JztcclxuXHJcbmltcG9ydCB7IFByb2ZpbGVNb2R1bGUgfSBmcm9tICcuLy4uL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBQcm9maWxlTW9kdWxlLFxyXG4gICAgICAgIFByb2R1Y3RNb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QobGF5b3V0Um91dGVzLCB7IHVzZUhhc2g6IHRydWUgfSlcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFsgTmF2YmFyQ29tcG9uZW50LCBMYXlvdXRDb21wb25lbnQgXSxcclxuICAgIHByb3ZpZGVyczogWyBCYXNlU2VydmljZSBdLFxyXG4gICAgZXhwb3J0czogWyBMYXlvdXRDb21wb25lbnQgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExheW91dE1vZHVsZSB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwic291cmNlUm9vdCI6IiJ9