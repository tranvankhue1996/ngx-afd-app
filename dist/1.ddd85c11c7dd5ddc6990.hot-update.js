webpackHotUpdate(1,{

/***/ "./node_modules/css-loader/index.js!./src/app/product/product.component.css":
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
            router_1.RouterModule.forRoot(index_1.layoutRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        declarations: [navbar_component_1.NavbarComponent, index_1.LayoutComponent],
        providers: [base_service_1.BaseService],
        exports: [index_1.LayoutComponent]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;


/***/ }),

/***/ "./src/app/product/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var product_component_1 = __webpack_require__("./src/app/product/product.component.ts");
exports.ProductComponent = product_component_1.ProductComponent;
var product_routing_1 = __webpack_require__("./src/app/product/product.routing.ts");
exports.routesProduct = product_routing_1.routesProduct;


/***/ }),

/***/ "./src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/app/product/product.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "product";

/***/ }),

/***/ "./src/app/product/product.component.ts":
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
var ProductComponent = (function () {
    function ProductComponent() {
    }
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'afd-render-product',
        template: __webpack_require__("./src/app/product/product.component.html"),
        styles: [__webpack_require__("./src/app/product/product.component.css")]
    })
], ProductComponent);
exports.ProductComponent = ProductComponent;


/***/ }),

/***/ "./src/app/product/product.module.ts":
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
var index_1 = __webpack_require__("./src/app/product/index.ts");
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(index_1.routesProduct, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        declarations: [index_1.ProductComponent]
    })
], ProductModule);
exports.ProductModule = ProductModule;


/***/ }),

/***/ "./src/app/product/product.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var product_component_1 = __webpack_require__("./src/app/product/product.component.ts");
exports.routesProduct = [
    {
        path: 'products',
        children: [
            {
                path: '',
                component: product_component_1.ProductComponent
            }
        ]
    }
];


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzP2RmMzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cz9iNWVkIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJvZHVjdC9pbmRleC50cz9lODY2Iiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3M/NWEwYioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50Lmh0bWw/MzNlMCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQudHM/MTFkZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5tb2R1bGUudHM/ZmE0OSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5yb3V0aW5nLnRzP2M1YWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLGtGQUE0RDtBQUM1RCxzRkFBZ0U7QUFDaEUscUZBQStEO0FBQy9ELG9DQUF5QztBQUN6QyxzQ0FBK0M7QUFFL0MsK0RBR2lCO0FBRWpCLGtGQUE0RDtBQWdCNUQsSUFBYSxZQUFZO0lBQXpCO0lBQTJCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUM7QUFBZixZQUFZO0lBZHhCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLDhCQUFhO1lBQ2IsOEJBQWE7WUFDYixxQkFBWSxDQUFDLE9BQU8sQ0FDaEIsb0JBQVksRUFDWixFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyw4QkFBOEI7YUFDekQ7U0FDSjtRQUNELFlBQVksRUFBRSxDQUFFLGtDQUFlLEVBQUUsdUJBQWUsQ0FBRTtRQUNsRCxTQUFTLEVBQUUsQ0FBRSwwQkFBVyxDQUFFO1FBQzFCLE9BQU8sRUFBRSxDQUFFLHVCQUFlLENBQUU7S0FDL0IsQ0FBQztHQUVXLFlBQVksQ0FBRztBQUFmLG9DQUFZOzs7Ozs7Ozs7OztBQzNCekIsd0ZBQXVEO0FBQTlDLCtEQUFnQjtBQUN6QixvRkFBa0Q7QUFBekMsdURBQWE7Ozs7Ozs7OztBQ0F0Qjs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7O0FDUEEsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxvQ0FBMEM7QUFRMUMsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBK0IsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQztBQUFuQixnQkFBZ0I7SUFONUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsNkJBQWEsMkNBQTBCO1FBQ3ZDLFNBQVMsbUJBQUksMENBQTJCO0tBQzNDLENBQUM7R0FFVyxnQkFBZ0IsQ0FBRztBQUFuQiw0Q0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjdCLHNDQUErQztBQUMvQyxvQ0FBeUM7QUFFekMsZ0VBR2lCO0FBWWpCLElBQWEsYUFBYTtJQUExQjtJQUE0QixDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDO0FBQWhCLGFBQWE7SUFWekIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wscUJBQVksQ0FBQyxPQUFPLENBQ2hCLHFCQUFhLEVBQ2IsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsOEJBQThCO2FBQ3pEO1NBQ0o7UUFDRCxZQUFZLEVBQUUsQ0FBRSx3QkFBZ0IsQ0FBRTtLQUNyQyxDQUFDO0dBRVcsYUFBYSxDQUFHO0FBQWhCLHNDQUFhOzs7Ozs7Ozs7OztBQ2xCMUIsd0ZBQXVEO0FBRzFDLHFCQUFhLEdBQVc7SUFDakM7UUFDSSxJQUFJLEVBQUUsVUFBVTtRQUNoQixRQUFRLEVBQUU7WUFDTjtnQkFDSSxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsb0NBQWdCO2FBQzlCO1NBQ0o7S0FDSjtDQUNKLENBQUMiLCJmaWxlIjoiMS5kZGQ4NWMxMWM3ZGQ1ZGRjNjk5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBQcm9kdWN0TW9kdWxlIH0gZnJvbSAnLi8uLi9wcm9kdWN0L3Byb2R1Y3QubW9kdWxlJztcclxuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuLy4uL3NoYXJlZC9zZXJ2aWNlcy9iYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuLy4uL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJzsgXHJcblxyXG5pbXBvcnQgeyBcclxuICAgIExheW91dENvbXBvbmVudCxcclxuICAgIGxheW91dFJvdXRlc1xyXG59IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZU1vZHVsZSB9IGZyb20gJy4vLi4vcHJvZmlsZS9wcm9maWxlLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFByb2ZpbGVNb2R1bGUsXHJcbiAgICAgICAgUHJvZHVjdE1vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChcclxuICAgICAgICAgICAgbGF5b3V0Um91dGVzLFxyXG4gICAgICAgICAgICB7IGVuYWJsZVRyYWNpbmc6IHRydWUgfSAvLyA8LS0gZGVidWdnaW5nIHB1cnBvc2VzIG9ubHlcclxuICAgICAgICApXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbIE5hdmJhckNvbXBvbmVudCwgTGF5b3V0Q29tcG9uZW50IF0sXHJcbiAgICBwcm92aWRlcnM6IFsgQmFzZVNlcnZpY2UgXSxcclxuICAgIGV4cG9ydHM6IFsgTGF5b3V0Q29tcG9uZW50IF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUge31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL2xheW91dC9sYXlvdXQubW9kdWxlLnRzIiwiZXhwb3J0IHsgUHJvZHVjdENvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC5jb21wb25lbnQnO1xyXG5leHBvcnQgeyByb3V0ZXNQcm9kdWN0IH0gZnJvbSAnLi9wcm9kdWN0LnJvdXRpbmcnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvcHJvZHVjdC9pbmRleC50cyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wcm9kdWN0LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gXCJwcm9kdWN0XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZmQtcmVuZGVyLXByb2R1Y3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbICcuL3Byb2R1Y3QuY29tcG9uZW50LmNzcycgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RDb21wb25lbnQge31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgXHJcbiAgICBQcm9kdWN0Q29tcG9uZW50LFxyXG4gICAgcm91dGVzUHJvZHVjdFxyXG59IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChcclxuICAgICAgICAgICAgcm91dGVzUHJvZHVjdCxcclxuICAgICAgICAgICAgeyBlbmFibGVUcmFjaW5nOiB0cnVlIH0gLy8gPC0tIGRlYnVnZ2luZyBwdXJwb3NlcyBvbmx5XHJcbiAgICAgICAgKVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogWyBQcm9kdWN0Q29tcG9uZW50IF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TW9kdWxlIHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QubW9kdWxlLnRzIiwiaW1wb3J0IHsgUHJvZHVjdENvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlc1Byb2R1Y3Q6IFJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAncHJvZHVjdHMnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0Q29tcG9uZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3Qucm91dGluZy50cyJdLCJzb3VyY2VSb290IjoiIn0=