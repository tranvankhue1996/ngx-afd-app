webpackHotUpdate(1,{

/***/ "./src/app/layout/layout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var base_service_1 = __webpack_require__("./src/app/shared/services/base.service.ts");
var $ = __webpack_require__(11);
var LayoutComponent = (function () {
    function LayoutComponent(baseService) {
        this.baseService = baseService;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        //set default service
        this.baseService.setTitle();
        //loading content
        $(window).on('load', function () {
            $('.loader').fadeOut('slow');
        });
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    core_1.Component({
        selector: 'afd-render-layout',
        template: __webpack_require__("./src/app/layout/layout.component.html"),
        styles: [__webpack_require__("./src/app/layout/layout.component.css")]
    }),
    __metadata("design:paramtypes", [base_service_1.BaseService])
], LayoutComponent);
exports.LayoutComponent = LayoutComponent;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnRzPzU3OTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBa0Q7QUFDbEQsc0ZBQWdFO0FBQ2hFLGdDQUE0QjtBQVM1QixJQUFhLGVBQWU7SUFDMUIseUJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUVoRCxrQ0FBUSxHQUFSO1FBQ0UscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFNUIsaUJBQWlCO1FBQ2pCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ25CLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgsc0JBQUM7QUFBRCxDQUFDO0FBYlksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3Qiw2QkFBYSx5Q0FBeUI7UUFDdEMsU0FBUyxtQkFBSSx3Q0FBMEI7S0FDeEMsQ0FBQztxQ0FHaUMsMEJBQVc7R0FEakMsZUFBZSxDQWEzQjtBQWJZLDBDQUFlIiwiZmlsZSI6IjEuN2QwYTkzZjNmNGY3N2JlMjlkNmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQvc2VydmljZXMvYmFzZS5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWZkLXJlbmRlci1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyAnLi9sYXlvdXQuY29tcG9uZW50LmNzcycgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7IFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFzZVNlcnZpY2U6IEJhc2VTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vc2V0IGRlZmF1bHQgc2VydmljZVxyXG4gICAgdGhpcy5iYXNlU2VydmljZS5zZXRUaXRsZSgpO1xyXG5cclxuICAgIC8vbG9hZGluZyBjb250ZW50XHJcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgJCgnLmxvYWRlcicpLmZhZGVPdXQoJ3Nsb3cnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC50cyJdLCJzb3VyY2VSb290IjoiIn0=