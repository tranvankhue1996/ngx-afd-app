webpackHotUpdate(1,{

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
        declarations: [index_1.LayoutComponent],
        exports: [index_1.LayoutComponent]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cz9hY2FiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0NBQXlDO0FBQ3pDLHVDQUErQztBQUUvQyxzRUFHaUI7QUFhakIsSUFBYSxZQUFZO0lBQXpCO0lBQTJCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUM7QUFBZixZQUFZO0lBWHhCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLHFCQUFZLENBQUMsT0FBTyxDQUNoQixvQkFBWSxFQUNaLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLDhCQUE4QjthQUN6RDtTQUNKO1FBQ0QsWUFBWSxFQUFFLENBQUUsdUJBQWUsQ0FBRTtRQUNqQyxPQUFPLEVBQUUsQ0FBRSx1QkFBZSxDQUFFO0tBQy9CLENBQUM7R0FFVyxZQUFZLENBQUc7QUFBZixvQ0FBWSIsImZpbGUiOiIxLmJjMGQ4NjNlNjdmMWIxODJlNDZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInOyBcclxuXHJcbmltcG9ydCB7IFxyXG4gICAgTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgbGF5b3V0Um91dGVzXHJcbn0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFxyXG4gICAgICAgICAgICBsYXlvdXRSb3V0ZXMsXHJcbiAgICAgICAgICAgIHsgZW5hYmxlVHJhY2luZzogdHJ1ZSB9IC8vIDwtLSBkZWJ1Z2dpbmcgcHVycG9zZXMgb25seVxyXG4gICAgICAgIClcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFsgTGF5b3V0Q29tcG9uZW50IF0sXHJcbiAgICBleHBvcnRzOiBbIExheW91dENvbXBvbmVudCBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9zaGFyZWQvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwic291cmNlUm9vdCI6IiJ9