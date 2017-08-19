webpackHotUpdate(1,{

/***/ "./src/app/profile/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
exports.ProfileComponent = profile_component_1.ProfileComponent;


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
var core_1 = __webpack_require__(3);
var index_1 = __webpack_require__("./src/app/profile/index.ts");
var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    core_1.NgModule({
        declarations: [index_1.ProfileComponent]
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;


/***/ }),

/***/ "./src/app/shared/views/layout/layout.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var profile_module_1 = __webpack_require__("./src/app/profile/profile.module.ts");
var navbar_component_1 = __webpack_require__("./src/app/shared/views/navbar/navbar.component.ts");
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(7);
var index_1 = __webpack_require__("./src/app/shared/views/layout/index.ts");
var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    core_1.NgModule({
        imports: [
            profile_module_1.ProfileModule,
            router_1.RouterModule.forRoot(index_1.layoutRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        declarations: [navbar_component_1.NavbarComponent, index_1.LayoutComponent],
        exports: [index_1.LayoutComponent]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2ZpbGUvaW5kZXgudHM/ZDJlMiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUudHM/OGEyOCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC92aWV3cy9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cz8xZjU3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsd0ZBQXVEO0FBQTlDLCtEQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBekIsb0NBQXlDO0FBQ3pDLGdFQUVpQjtBQU1qQixJQUFhLGFBQWE7SUFBMUI7SUFBNEIsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQztBQUFoQixhQUFhO0lBSnpCLGVBQVEsQ0FBQztRQUNOLFlBQVksRUFBRSxDQUFFLHdCQUFnQixDQUFDO0tBQ3BDLENBQUM7R0FFVyxhQUFhLENBQUc7QUFBaEIsc0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDFCLGtGQUFrRTtBQUNsRSxrR0FBK0Q7QUFDL0Qsb0NBQXlDO0FBQ3pDLHNDQUErQztBQUUvQyw0RUFHaUI7QUFjakIsSUFBYSxZQUFZO0lBQXpCO0lBQTJCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUM7QUFBZixZQUFZO0lBWnhCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLDhCQUFhO1lBQ2IscUJBQVksQ0FBQyxPQUFPLENBQ2hCLG9CQUFZLEVBQ1osRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsOEJBQThCO2FBQ3pEO1NBQ0o7UUFDRCxZQUFZLEVBQUUsQ0FBRSxrQ0FBZSxFQUFFLHVCQUFlLENBQUU7UUFDbEQsT0FBTyxFQUFFLENBQUUsdUJBQWUsQ0FBRTtLQUMvQixDQUFDO0dBRVcsWUFBWSxDQUFHO0FBQWYsb0NBQVkiLCJmaWxlIjoiMS5mZTZhYWY0YzE0YjU0NWQ1ZGRmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZmlsZS5jb21wb25lbnQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvcHJvZmlsZS9pbmRleC50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFxyXG4gICAgUHJvZmlsZUNvbXBvbmVudCBcclxufSBmcm9tICcuL2luZGV4JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFsgUHJvZmlsZUNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlTW9kdWxlIHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUubW9kdWxlLnRzIiwiaW1wb3J0IHsgUHJvZmlsZU1vZHVsZSB9IGZyb20gJy4vLi4vLi4vLi4vcHJvZmlsZS9wcm9maWxlLm1vZHVsZSc7XHJcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vLi4vbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInOyBcclxuXHJcbmltcG9ydCB7IFxyXG4gICAgTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgbGF5b3V0Um91dGVzXHJcbn0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFByb2ZpbGVNb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoXHJcbiAgICAgICAgICAgIGxheW91dFJvdXRlcyxcclxuICAgICAgICAgICAgeyBlbmFibGVUcmFjaW5nOiB0cnVlIH0gLy8gPC0tIGRlYnVnZ2luZyBwdXJwb3NlcyBvbmx5XHJcbiAgICAgICAgKVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogWyBOYXZiYXJDb21wb25lbnQsIExheW91dENvbXBvbmVudCBdLFxyXG4gICAgZXhwb3J0czogWyBMYXlvdXRDb21wb25lbnQgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExheW91dE1vZHVsZSB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvc2hhcmVkL3ZpZXdzL2xheW91dC9sYXlvdXQubW9kdWxlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==