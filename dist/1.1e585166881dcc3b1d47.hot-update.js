webpackHotUpdate(1,{

/***/ "./node_modules/css-loader/index.js!./src/app/shared/layout/layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/app/app.module.ts":
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
var forms_1 = __webpack_require__(5);
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var layout_module_1 = __webpack_require__("./src/app/shared/layout/layout.module.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            layout_module_1.LayoutModule
        ],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/shared/layout/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var layout_component_1 = __webpack_require__("./src/app/shared/layout/layout.component.ts");
exports.LayoutComponent = layout_component_1.LayoutComponent;
var layout_routing_1 = __webpack_require__("./src/app/shared/layout/layout.routing.ts");
exports.layoutRoutes = layout_routing_1.layoutRoutes;


/***/ }),

/***/ "./src/app/shared/layout/layout.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/app/shared/layout/layout.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/app/shared/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> <div class=\"row\"> <div class=\"col-md-12\"> <h1>Hello {{name}}</h1> <p-calendar [(ngModel)]=\"value\"></p-calendar> </div> </div> </div>";

/***/ }),

/***/ "./src/app/shared/layout/layout.component.ts":
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
var LayoutComponent = (function () {
    function LayoutComponent() {
        this.name = 'Angular';
    }
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    core_1.Component({
        selector: 'app-layout',
        template: __webpack_require__("./src/app/shared/layout/layout.component.html"),
        styles: [__webpack_require__("./src/app/shared/layout/layout.component.css")]
    })
], LayoutComponent);
exports.LayoutComponent = LayoutComponent;


/***/ }),

/***/ "./src/app/shared/layout/layout.module.ts":
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
var router_1 = __webpack_require__(10);
var index_1 = __webpack_require__("./src/app/shared/layout/index.ts");
var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(index_1.layoutRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        declarations: [index_1.LayoutComponent]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;


/***/ }),

/***/ "./src/app/shared/layout/layout.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var layout_component_1 = __webpack_require__("./src/app/shared/layout/layout.component.ts");
exports.layoutRoutes = [
    {
        path: 'layout',
        component: layout_component_1.LayoutComponent,
        data: { title: '' }
    },
    {
        path: '',
        redirectTo: '/layout',
        pathMatch: 'full'
    }
];


/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(87);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3M/NWYwOSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5tb2R1bGUudHM/YzQ1ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9sYXlvdXQvaW5kZXgudHM/OWE1ZCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3M/ZDA4YSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQvbGF5b3V0L2xheW91dC5jb21wb25lbnQuaHRtbD84MmZhIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnRzP2EwYjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQvbGF5b3V0L2xheW91dC5tb2R1bGUudHM/YWNhYiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9sYXlvdXQvbGF5b3V0LnJvdXRpbmcudHM/MzAwZCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9AYW5ndWxhci9yb3V0ZXIuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3I/MTA3MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEEsb0NBQThDO0FBQzlDLHFDQUE2QztBQUM3QywrSEFBZ0Y7QUFDaEYsd0VBQWdEO0FBRWhELHNGQUE2RDtBQVc3RCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQztBQUFiLFNBQVM7SUFUckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFPO1lBQ1Ysb0NBQXVCO1lBQ3ZCLG1CQUFXO1lBQ1gsNEJBQVk7U0FDZjtRQUNELFlBQVksRUFBRSxDQUFFLDRCQUFZLENBQUU7UUFDOUIsU0FBUyxFQUFLLENBQUUsNEJBQVksQ0FBRTtLQUMvQixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVM7Ozs7Ozs7Ozs7O0FDaEJ0Qiw0RkFBcUQ7QUFBNUMsNERBQWU7QUFDeEIsd0ZBQWdEO0FBQXZDLG9EQUFZOzs7Ozs7Ozs7QUNBckI7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztBQ1BBLHNHQUFzRyxNQUFNLDRFOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTVHLG9DQUEwQztBQVExQyxJQUFhLGVBQWU7SUFONUI7UUFPRSxTQUFJLEdBQUcsU0FBUyxDQUFDO0lBR25CLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUM7QUFKWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0Qiw2QkFBYSxnREFBeUI7UUFDdEMsU0FBUyxtQkFBSSwrQ0FBMEI7S0FDeEMsQ0FBQztHQUVXLGVBQWUsQ0FJM0I7QUFKWSwwQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSNUIsb0NBQXlDO0FBQ3pDLHVDQUErQztBQUUvQyxzRUFHaUI7QUFZakIsSUFBYSxZQUFZO0lBQXpCO0lBQTJCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUM7QUFBZixZQUFZO0lBVnhCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLHFCQUFZLENBQUMsT0FBTyxDQUNoQixvQkFBWSxFQUNaLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLDhCQUE4QjthQUN6RDtTQUNKO1FBQ0QsWUFBWSxFQUFFLENBQUUsdUJBQWUsQ0FBRTtLQUNwQyxDQUFDO0dBRVcsWUFBWSxDQUFHO0FBQWYsb0NBQVk7Ozs7Ozs7Ozs7O0FDakJ6Qiw0RkFBcUQ7QUFFeEMsb0JBQVksR0FBVztJQUNoQztRQUNJLElBQUksRUFBRSxRQUFRO1FBQ2QsU0FBUyxFQUFFLGtDQUFlO1FBQzFCLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUM7S0FDckI7SUFDRDtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsVUFBVSxFQUFFLFNBQVM7UUFDckIsU0FBUyxFQUFFLE1BQU07S0FDcEI7Q0FDSjs7Ozs7Ozs7QUNkRCw4QyIsImZpbGUiOiIxLjFlNTg1MTY2ODgxZGNjM2IxZDQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9hcHAvc2hhcmVkL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NyYy9hcHAvc2hhcmVkL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSAgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL2xheW91dC9sYXlvdXQubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogICAgICBbIFxyXG4gICAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSwgXHJcbiAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICBMYXlvdXRNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogWyBBcHBDb21wb25lbnQgXSxcclxuICBib290c3RyYXA6ICAgIFsgQXBwQ29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiZXhwb3J0IHsgTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQuY29tcG9uZW50JztcclxuZXhwb3J0IHsgbGF5b3V0Um91dGVzIH0gZnJvbSAnLi9sYXlvdXQucm91dGluZyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9zaGFyZWQvbGF5b3V0L2luZGV4LnRzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2xheW91dC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvc2hhcmVkL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvYXBwL3NoYXJlZC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+IDxoMT5IZWxsbyB7e25hbWV9fTwvaDE+IDxwLWNhbGVuZGFyIFsobmdNb2RlbCldPVxcXCJ2YWx1ZVxcXCI+PC9wLWNhbGVuZGFyPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9zaGFyZWQvbGF5b3V0L2xheW91dC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvYXBwL3NoYXJlZC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbGF5b3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsgJy4vbGF5b3V0LmNvbXBvbmVudC5jc3MnIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRDb21wb25lbnQgIHsgXHJcbiAgbmFtZSA9ICdBbmd1bGFyJzsgXHJcbiAgdmFsdWU6IERhdGU7XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvc2hhcmVkL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJzsgXHJcblxyXG5pbXBvcnQgeyBcclxuICAgIExheW91dENvbXBvbmVudCxcclxuICAgIGxheW91dFJvdXRlc1xyXG59IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChcclxuICAgICAgICAgICAgbGF5b3V0Um91dGVzLFxyXG4gICAgICAgICAgICB7IGVuYWJsZVRyYWNpbmc6IHRydWUgfSAvLyA8LS0gZGVidWdnaW5nIHB1cnBvc2VzIG9ubHlcclxuICAgICAgICApXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbIExheW91dENvbXBvbmVudCBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9zaGFyZWQvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxheW91dFJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBcclxuICAgICAgICBwYXRoOiAnbGF5b3V0JywgXHJcbiAgICAgICAgY29tcG9uZW50OiBMYXlvdXRDb21wb25lbnQsXHJcbiAgICAgICAgZGF0YTogeyB0aXRsZTogJyd9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgIHJlZGlyZWN0VG86ICcvbGF5b3V0JyxcclxuICAgICAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xyXG4gICAgfVxyXG5dXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvc2hhcmVkL2xheW91dC9sYXlvdXQucm91dGluZy50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDg3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL0Bhbmd1bGFyL3JvdXRlci5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==