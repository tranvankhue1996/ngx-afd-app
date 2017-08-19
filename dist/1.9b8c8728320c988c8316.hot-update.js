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
            router_1.RouterModule.forRoot(index_1.layoutRoutes, { useHash: false })
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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9sYXlvdXQubW9kdWxlLnRzP2I1ZWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrRUFBeUQ7QUFDekQsa0dBQWtFO0FBQ2xFLGtGQUE0RDtBQUM1RCxzRkFBZ0U7QUFDaEUsNEZBQTREO0FBQzVELG9DQUF5QztBQUN6QyxzQ0FBK0M7QUFFL0MsK0RBR2lCO0FBRWpCLGtGQUE0RDtBQWtCNUQsSUFBYSxZQUFZO0lBQXpCO0lBQTJCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUM7QUFBZixZQUFZO0lBaEJ4QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCw4QkFBYTtZQUNiLDhCQUFhO1lBQ2IscUJBQVksQ0FBQyxPQUFPLENBQUMsb0JBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUN6RDtRQUNELFlBQVksRUFBRTtZQUNWLHVCQUFlO1lBQ2YsOEJBQWE7WUFDYixrQ0FBZTtZQUNmLHNDQUFpQjtTQUNwQjtRQUNELFNBQVMsRUFBRSxDQUFFLDBCQUFXLENBQUU7UUFDMUIsT0FBTyxFQUFFLENBQUUsdUJBQWUsQ0FBRTtLQUMvQixDQUFDO0dBRVcsWUFBWSxDQUFHO0FBQWYsb0NBQVkiLCJmaWxlIjoiMS45YjhjODcyODMyMGM5ODhjODMxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vLi4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9kdWN0TW9kdWxlIH0gZnJvbSAnLi8uLi9wcm9kdWN0L3Byb2R1Y3QubW9kdWxlJztcclxuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuLy4uL3NoYXJlZC9zZXJ2aWNlcy9iYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJzsgXHJcblxyXG5pbXBvcnQgeyBcclxuICAgIExheW91dENvbXBvbmVudCxcclxuICAgIGxheW91dFJvdXRlc1xyXG59IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZU1vZHVsZSB9IGZyb20gJy4vLi4vcHJvZmlsZS9wcm9maWxlLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFByb2ZpbGVNb2R1bGUsXHJcbiAgICAgICAgUHJvZHVjdE1vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChsYXlvdXRSb3V0ZXMsIHsgdXNlSGFzaDogZmFsc2UgfSlcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFsgXHJcbiAgICAgICAgTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgTmF2YmFyQ29tcG9uZW50LFxyXG4gICAgICAgIE5vdEZvdW5kQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbIEJhc2VTZXJ2aWNlIF0sXHJcbiAgICBleHBvcnRzOiBbIExheW91dENvbXBvbmVudCBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cyJdLCJzb3VyY2VSb290IjoiIn0=