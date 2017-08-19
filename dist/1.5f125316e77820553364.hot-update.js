webpackHotUpdate(1,{

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
            router_1.RouterModule.forRoot(index_1.layoutRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        declarations: [navbar_component_1.NavbarComponent, index_1.LayoutComponent],
        exports: [index_1.LayoutComponent]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;


/***/ }),

/***/ "./src/app/shared/views/navbar/navbar.component.ts":
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
var NavbarComponent = (function () {
    function NavbarComponent() {
        this.name = "abc";
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'app-navbar',
        template: "<div class=\"row\">\n    <div class=\"col-md-12\">navbar</div>\n</div>"
    })
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC92aWV3cy9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cz8xZjU3Iiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL3ZpZXdzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzPzZhY2IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrR0FBK0Q7QUFDL0Qsb0NBQXlDO0FBQ3pDLHNDQUErQztBQUUvQyw0RUFHaUI7QUFhakIsSUFBYSxZQUFZO0lBQXpCO0lBQTJCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUM7QUFBZixZQUFZO0lBWHhCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLHFCQUFZLENBQUMsT0FBTyxDQUNoQixvQkFBWSxFQUNaLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLDhCQUE4QjthQUN6RDtTQUNKO1FBQ0QsWUFBWSxFQUFFLENBQUUsa0NBQWUsRUFBRSx1QkFBZSxDQUFFO1FBQ2xELE9BQU8sRUFBRSxDQUFFLHVCQUFlLENBQUU7S0FDL0IsQ0FBQztHQUVXLFlBQVksQ0FBRztBQUFmLG9DQUFZOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCekIsb0NBQTBDO0FBUzFDLElBQWEsZUFBZTtJQVA1QjtRQVFJLFNBQUksR0FBVyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQztBQUZZLGVBQWU7SUFQM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSx3RUFFUDtLQUNOLENBQUM7R0FFVyxlQUFlLENBRTNCO0FBRlksMENBQWUiLCJmaWxlIjoiMS41ZjEyNTMxNmU3NzgyMDU1MzM2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7IFxyXG5cclxuaW1wb3J0IHsgXHJcbiAgICBMYXlvdXRDb21wb25lbnQsXHJcbiAgICBsYXlvdXRSb3V0ZXNcclxufSBmcm9tICcuL2luZGV4JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoXHJcbiAgICAgICAgICAgIGxheW91dFJvdXRlcyxcclxuICAgICAgICAgICAgeyBlbmFibGVUcmFjaW5nOiB0cnVlIH0gLy8gPC0tIGRlYnVnZ2luZyBwdXJwb3NlcyBvbmx5XHJcbiAgICAgICAgKVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogWyBOYXZiYXJDb21wb25lbnQsIExheW91dENvbXBvbmVudCBdLFxyXG4gICAgZXhwb3J0czogWyBMYXlvdXRDb21wb25lbnQgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExheW91dE1vZHVsZSB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvc2hhcmVkL3ZpZXdzL2xheW91dC9sYXlvdXQubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLW5hdmJhcicsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5uYXZiYXI8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcImFiY1wiO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9zaGFyZWQvdmlld3MvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwic291cmNlUm9vdCI6IiJ9