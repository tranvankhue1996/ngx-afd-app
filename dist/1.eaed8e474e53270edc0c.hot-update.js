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
var base_service_1 = __webpack_require__("./src/app/shared/services/base.service.ts");
var navbar_component_1 = __webpack_require__("./src/app/navbar/navbar.component.ts");
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(5);
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
            router_1.RouterModule.forRoot(index_1.layoutRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        declarations: [navbar_component_1.NavbarComponent, index_1.LayoutComponent],
        providers: [base_service_1.BaseService],
        exports: [index_1.LayoutComponent]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9sYXlvdXQubW9kdWxlLnRzP2I1ZWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRkFBZ0U7QUFDaEUscUZBQStEO0FBQy9ELG9DQUF5QztBQUN6QyxzQ0FBK0M7QUFFL0MsK0RBR2lCO0FBRWpCLGtGQUE0RDtBQUM1RCxrRkFBNEQ7QUFnQjVELElBQWEsWUFBWTtJQUF6QjtJQUEyQixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDO0FBQWYsWUFBWTtJQWR4QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCw4QkFBYTtZQUNiLDhCQUFhO1lBQ2IscUJBQVksQ0FBQyxPQUFPLENBQ2hCLG9CQUFZLEVBQ1osRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsOEJBQThCO2FBQ3pEO1NBQ0o7UUFDRCxZQUFZLEVBQUUsQ0FBRSxrQ0FBZSxFQUFFLHVCQUFlLENBQUU7UUFDbEQsU0FBUyxFQUFFLENBQUUsMEJBQVcsQ0FBRTtRQUMxQixPQUFPLEVBQUUsQ0FBRSx1QkFBZSxDQUFFO0tBQy9CLENBQUM7R0FFVyxZQUFZLENBQUc7QUFBZixvQ0FBWSIsImZpbGUiOiIxLmVhZWQ4ZTQ3NGU1MzI3MGVkYzBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL3NlcnZpY2VzL2Jhc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vLi4vbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInOyBcclxuXHJcbmltcG9ydCB7IFxyXG4gICAgTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgbGF5b3V0Um91dGVzXHJcbn0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlTW9kdWxlIH0gZnJvbSAnLi8uLi9wcm9maWxlL3Byb2ZpbGUubW9kdWxlJztcclxuaW1wb3J0IHsgUHJvZHVjdE1vZHVsZSB9IGZyb20gJy4vLi4vcHJvZHVjdC9wcm9kdWN0Lm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFByb2ZpbGVNb2R1bGUsXHJcbiAgICAgICAgUHJvZHVjdE1vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChcclxuICAgICAgICAgICAgbGF5b3V0Um91dGVzLFxyXG4gICAgICAgICAgICB7IGVuYWJsZVRyYWNpbmc6IHRydWUgfSAvLyA8LS0gZGVidWdnaW5nIHB1cnBvc2VzIG9ubHlcclxuICAgICAgICApXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbIE5hdmJhckNvbXBvbmVudCwgTGF5b3V0Q29tcG9uZW50IF0sXHJcbiAgICBwcm92aWRlcnM6IFsgQmFzZVNlcnZpY2UgXSxcclxuICAgIGV4cG9ydHM6IFsgTGF5b3V0Q29tcG9uZW50IF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUge31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL2xheW91dC9sYXlvdXQubW9kdWxlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==