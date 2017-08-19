webpackHotUpdate(1,{

/***/ "./node_modules/css-loader/index.js!./src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

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
            product_module_1.ProductModule,
            profile_module_1.ProfileModule
        ],
        declarations: [navbar_component_1.NavbarComponent, index_1.LayoutComponent],
        providers: [base_service_1.BaseService],
        exports: [index_1.LayoutComponent]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;


/***/ }),

/***/ "./src/app/profile/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
exports.ProfileComponent = profile_component_1.ProfileComponent;
var profile_routing_1 = __webpack_require__("./src/app/profile/profile.routing.ts");
exports.routesProfile = profile_routing_1.routesProfile;


/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/app/profile/profile.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "profile";

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
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
var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'afd-render-profile',
        template: __webpack_require__("./src/app/profile/profile.component.html"),
        styles: [__webpack_require__("./src/app/profile/profile.component.css")]
    })
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;


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
var router_1 = __webpack_require__(5);
var core_1 = __webpack_require__(3);
var index_1 = __webpack_require__("./src/app/profile/index.ts");
var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(index_1.routesProfile)
        ],
        declarations: [index_1.ProfileComponent]
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;


/***/ }),

/***/ "./src/app/profile/profile.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
exports.routesProfile = [
    {
        path: 'profile',
        children: [
            {
                path: '',
                component: profile_component_1.ProfileComponent,
                data: { title: 'Profile' }
            }
        ]
    }
];


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzPzFlMGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cz9iNWVkIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJvZmlsZS9pbmRleC50cz9kMmUyIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3M/MDczZSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWw/MDc5OSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHM/MzMxYiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUudHM/OGEyOCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5yb3V0aW5nLnRzPzM2ZjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLHNGQUFnRTtBQUNoRSxxRkFBK0Q7QUFDL0Qsb0NBQXlDO0FBQ3pDLHNDQUErQztBQUUvQywrREFHaUI7QUFFakIsa0ZBQTREO0FBQzVELGtGQUE0RDtBQWdCNUQsSUFBYSxZQUFZO0lBQXpCO0lBQTJCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUM7QUFBZixZQUFZO0lBZHhCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLHFCQUFZLENBQUMsT0FBTyxDQUNoQixvQkFBWSxFQUNaLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLDhCQUE4QjthQUN6RDtZQUNELDhCQUFhO1lBQ2IsOEJBQWE7U0FDaEI7UUFDRCxZQUFZLEVBQUUsQ0FBRSxrQ0FBZSxFQUFFLHVCQUFlLENBQUU7UUFDbEQsU0FBUyxFQUFFLENBQUUsMEJBQVcsQ0FBRTtRQUMxQixPQUFPLEVBQUUsQ0FBRSx1QkFBZSxDQUFFO0tBQy9CLENBQUM7R0FFVyxZQUFZLENBQUc7QUFBZixvQ0FBWTs7Ozs7Ozs7Ozs7QUMzQnpCLHdGQUF1RDtBQUE5QywrREFBZ0I7QUFDekIsb0ZBQWtEO0FBQXpDLHVEQUFhOzs7Ozs7Ozs7QUNBdEI7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztBQ1BBLDJCOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsb0NBQTBDO0FBUTFDLElBQWEsZ0JBQWdCO0lBQTdCO0lBQStCLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUM7QUFBbkIsZ0JBQWdCO0lBTjVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLDZCQUFhLDJDQUEwQjtRQUN2QyxTQUFTLG1CQUFJLDBDQUEyQjtLQUMzQyxDQUFDO0dBRVcsZ0JBQWdCLENBQUc7QUFBbkIsNENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1I3QixzQ0FBK0M7QUFDL0Msb0NBQXlDO0FBRXpDLGdFQUdpQjtBQVNqQixJQUFhLGFBQWE7SUFBMUI7SUFBNEIsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQztBQUFoQixhQUFhO0lBUHpCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLHFCQUFZLENBQUMsUUFBUSxDQUFDLHFCQUFhLENBQUM7U0FDdkM7UUFDRCxZQUFZLEVBQUUsQ0FBRSx3QkFBZ0IsQ0FBQztLQUNwQyxDQUFDO0dBRVcsYUFBYSxDQUFHO0FBQWhCLHNDQUFhOzs7Ozs7Ozs7OztBQ2YxQix3RkFBdUQ7QUFHMUMscUJBQWEsR0FBVztJQUNqQztRQUNJLElBQUksRUFBRSxTQUFTO1FBQ2YsUUFBUSxFQUFFO1lBQ047Z0JBQ0ksSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLG9DQUFnQjtnQkFDM0IsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTthQUM3QjtTQUNKO0tBQ0o7Q0FDSixDQUFDIiwiZmlsZSI6IjEuY2VhNGViODZlNTc1NjI4N2Y5ZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuLy4uL3NoYXJlZC9zZXJ2aWNlcy9iYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuLy4uL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJzsgXHJcblxyXG5pbXBvcnQgeyBcclxuICAgIExheW91dENvbXBvbmVudCxcclxuICAgIGxheW91dFJvdXRlc1xyXG59IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZU1vZHVsZSB9IGZyb20gJy4vLi4vcHJvZmlsZS9wcm9maWxlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFByb2R1Y3RNb2R1bGUgfSBmcm9tICcuLy4uL3Byb2R1Y3QvcHJvZHVjdC5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChcclxuICAgICAgICAgICAgbGF5b3V0Um91dGVzLFxyXG4gICAgICAgICAgICB7IGVuYWJsZVRyYWNpbmc6IHRydWUgfSAvLyA8LS0gZGVidWdnaW5nIHB1cnBvc2VzIG9ubHlcclxuICAgICAgICApLFxyXG4gICAgICAgIFByb2R1Y3RNb2R1bGUsXHJcbiAgICAgICAgUHJvZmlsZU1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogWyBOYXZiYXJDb21wb25lbnQsIExheW91dENvbXBvbmVudCBdLFxyXG4gICAgcHJvdmlkZXJzOiBbIEJhc2VTZXJ2aWNlIF0sXHJcbiAgICBleHBvcnRzOiBbIExheW91dENvbXBvbmVudCBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cyIsImV4cG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUuY29tcG9uZW50JztcclxuZXhwb3J0IHsgcm91dGVzUHJvZmlsZSB9IGZyb20gJy4vcHJvZmlsZS5yb3V0aW5nJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL3Byb2ZpbGUvaW5kZXgudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcHJvZmlsZS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwicHJvZmlsZVwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWZkLXJlbmRlci1wcm9maWxlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWyAnLi9wcm9maWxlLmNvbXBvbmVudC5jc3MnIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFxyXG4gICAgUHJvZmlsZUNvbXBvbmVudCxcclxuICAgIHJvdXRlc1Byb2ZpbGVcclxufSBmcm9tICcuL2luZGV4JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlc1Byb2ZpbGUpXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbIFByb2ZpbGVDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZU1vZHVsZSB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLm1vZHVsZS50cyIsImltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXNQcm9maWxlOiBSb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ3Byb2ZpbGUnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBQcm9maWxlQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogJ1Byb2ZpbGUnIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5yb3V0aW5nLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==