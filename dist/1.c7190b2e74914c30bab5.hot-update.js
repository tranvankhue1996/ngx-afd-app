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
var core_1 = __webpack_require__(3);
var base_service_1 = __webpack_require__("./src/app/shared/services/base.service.ts");
var $;
var LayoutComponent = (function () {
    function LayoutComponent(baseService) {
        this.baseService = baseService;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        //set default service
        this.baseService.setTitle();
        //loading content
        $(window).load(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnRzPzU3OTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBa0Q7QUFDbEQsc0ZBQWdFO0FBRWhFLElBQUksQ0FBTSxDQUFDO0FBU1gsSUFBYSxlQUFlO0lBQzFCLHlCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7SUFFaEQsa0NBQVEsR0FBUjtRQUNFLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTVCLGlCQUFpQjtRQUNqQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUgsc0JBQUM7QUFBRCxDQUFDO0FBYlksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3Qiw2QkFBYSx5Q0FBeUI7UUFDdEMsU0FBUyxtQkFBSSx3Q0FBMEI7S0FDeEMsQ0FBQztxQ0FHaUMsMEJBQVc7R0FEakMsZUFBZSxDQWEzQjtBQWJZLDBDQUFlIiwiZmlsZSI6IjEuYzcxOTBiMmU3NDkxNGMzMGJhYjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQvc2VydmljZXMvYmFzZS5zZXJ2aWNlJztcclxuXHJcbnZhciAkOiBhbnk7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZmQtcmVuZGVyLWxheW91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xheW91dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbICcuL2xheW91dC5jb21wb25lbnQuY3NzJyBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHsgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXNlU2VydmljZTogQmFzZVNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy9zZXQgZGVmYXVsdCBzZXJ2aWNlXHJcbiAgICB0aGlzLmJhc2VTZXJ2aWNlLnNldFRpdGxlKCk7XHJcblxyXG4gICAgLy9sb2FkaW5nIGNvbnRlbnRcclxuICAgICQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCcubG9hZGVyJykuZmFkZU91dCgnc2xvdycpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQudHMiXSwic291cmNlUm9vdCI6IiJ9