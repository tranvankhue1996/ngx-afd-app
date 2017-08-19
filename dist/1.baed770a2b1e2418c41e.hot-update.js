webpackHotUpdate(1,{

/***/ "./node_modules/css-loader/index.js!./src/app/profile/profile.component.css":
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
var base_service_1 = __webpack_require__("./src/app/shared/services/base.service.ts");
var navbar_component_1 = __webpack_require__("./src/app/navbar/navbar.component.ts");
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(5);
var index_1 = __webpack_require__("./src/app/layout/index.ts");
var product_module_1 = __webpack_require__("./src/app/product/product.module.ts");
var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(index_1.layoutRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
            product_module_1.ProductModule
        ],
        declarations: [navbar_component_1.NavbarComponent, index_1.LayoutComponent],
        providers: [base_service_1.BaseService],
        exports: [index_1.LayoutComponent]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;


/***/ }),

/***/ "./src/app/profile/index.ts":
false,

/***/ "./src/app/profile/profile.component.css":
false,

/***/ "./src/app/profile/profile.component.html":
false,

/***/ "./src/app/profile/profile.component.ts":
false,

/***/ "./src/app/profile/profile.module.ts":
false,

/***/ "./src/app/profile/profile.routing.ts":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9sYXlvdXQubW9kdWxlLnRzP2I1ZWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRkFBZ0U7QUFDaEUscUZBQStEO0FBQy9ELG9DQUF5QztBQUN6QyxzQ0FBK0M7QUFFL0MsK0RBR2lCO0FBR2pCLGtGQUE0RDtBQWU1RCxJQUFhLFlBQVk7SUFBekI7SUFBMkIsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQztBQUFmLFlBQVk7SUFieEIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wscUJBQVksQ0FBQyxPQUFPLENBQ2hCLG9CQUFZLEVBQ1osRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsOEJBQThCO2FBQ3pEO1lBQ0QsOEJBQWE7U0FDaEI7UUFDRCxZQUFZLEVBQUUsQ0FBRSxrQ0FBZSxFQUFFLHVCQUFlLENBQUU7UUFDbEQsU0FBUyxFQUFFLENBQUUsMEJBQVcsQ0FBRTtRQUMxQixPQUFPLEVBQUUsQ0FBRSx1QkFBZSxDQUFFO0tBQy9CLENBQUM7R0FFVyxZQUFZLENBQUc7QUFBZixvQ0FBWSIsImZpbGUiOiIxLmJhZWQ3NzBhMmIxZTI0MThjNDFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL3NlcnZpY2VzL2Jhc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vLi4vbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInOyBcclxuXHJcbmltcG9ydCB7IFxyXG4gICAgTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgbGF5b3V0Um91dGVzXHJcbn0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlTW9kdWxlIH0gZnJvbSAnLi8uLi9wcm9maWxlL3Byb2ZpbGUubW9kdWxlJztcclxuaW1wb3J0IHsgUHJvZHVjdE1vZHVsZSB9IGZyb20gJy4vLi4vcHJvZHVjdC9wcm9kdWN0Lm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFxyXG4gICAgICAgICAgICBsYXlvdXRSb3V0ZXMsXHJcbiAgICAgICAgICAgIHsgZW5hYmxlVHJhY2luZzogdHJ1ZSB9IC8vIDwtLSBkZWJ1Z2dpbmcgcHVycG9zZXMgb25seVxyXG4gICAgICAgICksXHJcbiAgICAgICAgUHJvZHVjdE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogWyBOYXZiYXJDb21wb25lbnQsIExheW91dENvbXBvbmVudCBdLFxyXG4gICAgcHJvdmlkZXJzOiBbIEJhc2VTZXJ2aWNlIF0sXHJcbiAgICBleHBvcnRzOiBbIExheW91dENvbXBvbmVudCBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cyJdLCJzb3VyY2VSb290IjoiIn0=