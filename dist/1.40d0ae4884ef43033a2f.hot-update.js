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
            router_1.RouterModule.forRoot(index_1.layoutRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
            profile_module_1.ProfileModule,
            product_module_1.ProductModule
        ],
        declarations: [navbar_component_1.NavbarComponent, index_1.LayoutComponent],
        providers: [base_service_1.BaseService],
        exports: [index_1.LayoutComponent]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9sYXlvdXQubW9kdWxlLnRzP2I1ZWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRkFBZ0U7QUFDaEUscUZBQStEO0FBQy9ELG9DQUF5QztBQUN6QyxzQ0FBK0M7QUFFL0MsK0RBR2lCO0FBRWpCLGtGQUE0RDtBQUM1RCxrRkFBNEQ7QUFnQjVELElBQWEsWUFBWTtJQUF6QjtJQUEyQixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDO0FBQWYsWUFBWTtJQWR4QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCxxQkFBWSxDQUFDLE9BQU8sQ0FDaEIsb0JBQVksRUFDWixFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyw4QkFBOEI7YUFDekQ7WUFDRCw4QkFBYTtZQUNiLDhCQUFhO1NBQ2hCO1FBQ0QsWUFBWSxFQUFFLENBQUUsa0NBQWUsRUFBRSx1QkFBZSxDQUFFO1FBQ2xELFNBQVMsRUFBRSxDQUFFLDBCQUFXLENBQUU7UUFDMUIsT0FBTyxFQUFFLENBQUUsdUJBQWUsQ0FBRTtLQUMvQixDQUFDO0dBRVcsWUFBWSxDQUFHO0FBQWYsb0NBQVkiLCJmaWxlIjoiMS40MGQwYWU0ODg0ZWY0MzAzM2EyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuLy4uL3NoYXJlZC9zZXJ2aWNlcy9iYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuLy4uL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJzsgXHJcblxyXG5pbXBvcnQgeyBcclxuICAgIExheW91dENvbXBvbmVudCxcclxuICAgIGxheW91dFJvdXRlc1xyXG59IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZU1vZHVsZSB9IGZyb20gJy4vLi4vcHJvZmlsZS9wcm9maWxlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFByb2R1Y3RNb2R1bGUgfSBmcm9tICcuLy4uL3Byb2R1Y3QvcHJvZHVjdC5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChcclxuICAgICAgICAgICAgbGF5b3V0Um91dGVzLFxyXG4gICAgICAgICAgICB7IGVuYWJsZVRyYWNpbmc6IHRydWUgfSAvLyA8LS0gZGVidWdnaW5nIHB1cnBvc2VzIG9ubHlcclxuICAgICAgICApLFxyXG4gICAgICAgIFByb2ZpbGVNb2R1bGUsXHJcbiAgICAgICAgUHJvZHVjdE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogWyBOYXZiYXJDb21wb25lbnQsIExheW91dENvbXBvbmVudCBdLFxyXG4gICAgcHJvdmlkZXJzOiBbIEJhc2VTZXJ2aWNlIF0sXHJcbiAgICBleHBvcnRzOiBbIExheW91dENvbXBvbmVudCBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cyJdLCJzb3VyY2VSb290IjoiIn0=