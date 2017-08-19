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
var LayoutComponent = (function () {
    function LayoutComponent(baseService) {
        this.baseService = baseService;
        this.name = 'Angular';
    }
    LayoutComponent.prototype.ngOnInit = function () {
        //set default service
        this.baseService.getTitle();
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


/***/ }),

/***/ "./src/app/shared/services/base.service.ts":
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
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(5);
var platform_browser_1 = __webpack_require__(4);
var BaseService = (function () {
    function BaseService(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
    }
    BaseService.prototype.getTitle = function () {
        var _this = this;
        //set title
        this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) {
            _this.titleService.setTitle(event['title']);
        });
    };
    return BaseService;
}());
BaseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        platform_browser_1.Title])
], BaseService);
exports.BaseService = BaseService;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnRzPzU3OTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQvc2VydmljZXMvYmFzZS5zZXJ2aWNlLnRzPzgxM2MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBa0Q7QUFDbEQsc0ZBQWdFO0FBUWhFLElBQWEsZUFBZTtJQUMxQix5QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFPNUMsU0FBSSxHQUFHLFNBQVMsQ0FBQztJQVA4QixDQUFDO0lBRWhELGtDQUFRLEdBQVI7UUFDRSxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBR0gsc0JBQUM7QUFBRCxDQUFDO0FBVFksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3Qiw2QkFBYSx5Q0FBeUI7UUFDdEMsU0FBUyxtQkFBSSx3Q0FBMEI7S0FDeEMsQ0FBQztxQ0FHaUMsMEJBQVc7R0FEakMsZUFBZSxDQVMzQjtBQVRZLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Q1Qix1QkFBa0M7QUFDbEMsdUJBQStCO0FBQy9CLHVCQUFvQztBQUNwQyxvQ0FBMkM7QUFDM0Msc0NBQXdFO0FBQ3hFLGdEQUFrRDtBQUdsRCxJQUFhLFdBQVc7SUFDcEIscUJBQW9CLE1BQWMsRUFDeEIsY0FBOEIsRUFDOUIsWUFBbUI7UUFGVCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBTztJQUFHLENBQUM7SUFFakMsOEJBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkcsV0FBVztRQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNiLE1BQU0sQ0FBQyxVQUFDLEtBQUssSUFBSyxZQUFLLFlBQVksc0JBQWEsRUFBOUIsQ0FBOEIsQ0FBQzthQUNqRCxHQUFHLENBQUMsY0FBTSxZQUFJLENBQUMsY0FBYyxFQUFuQixDQUFtQixDQUFDO2FBQzlCLEdBQUcsQ0FBQyxVQUFDLEtBQUs7WUFDUCxPQUFPLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUFDLENBQUM7WUFDdEQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUM7YUFDRCxNQUFNLENBQUMsVUFBQyxLQUFLLElBQUssWUFBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQTFCLENBQTBCLENBQUM7YUFDN0MsUUFBUSxDQUFDLFVBQUMsS0FBSyxJQUFLLFlBQUssQ0FBQyxJQUFJLEVBQVYsQ0FBVSxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxVQUFDLEtBQUs7WUFDYixLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7QUFwQlksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUVtQixlQUFNO1FBQ1IsdUJBQWM7UUFDaEIsd0JBQUs7R0FIcEIsV0FBVyxDQW9CdkI7QUFwQlksa0NBQVciLCJmaWxlIjoiMS5hOWNlODE0YjNiODJlODMyZjU2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuLy4uL3NoYXJlZC9zZXJ2aWNlcy9iYXNlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZmQtcmVuZGVyLWxheW91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xheW91dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbICcuL2xheW91dC5jb21wb25lbnQuY3NzJyBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHsgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXNlU2VydmljZTogQmFzZVNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy9zZXQgZGVmYXVsdCBzZXJ2aWNlXHJcbiAgICB0aGlzLmJhc2VTZXJ2aWNlLmdldFRpdGxlKCk7XHJcbiAgfVxyXG5cclxuICBuYW1lID0gJ0FuZ3VsYXInOyBcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnRzIiwiaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFzZVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgXHJcbiAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUpIHt9XHJcblxyXG4gICAgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgLy9zZXQgdGl0bGVcclxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHNcclxuICAgICAgICAgICAgLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZClcclxuICAgICAgICAgICAgLm1hcCgoKSA9PiB0aGlzLmFjdGl2YXRlZFJvdXRlKVxyXG4gICAgICAgICAgICAubWFwKChyb3V0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJvdXRlLmZpcnN0Q2hpbGQpIHsgcm91dGUgPSByb3V0ZS5maXJzdENoaWxkOyB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHJvdXRlKSA9PiByb3V0ZS5vdXRsZXQgPT09ICdwcmltYXJ5JylcclxuICAgICAgICAgICAgLm1lcmdlTWFwKChyb3V0ZSkgPT4gcm91dGUuZGF0YSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKGV2ZW50Wyd0aXRsZSddKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL3NoYXJlZC9zZXJ2aWNlcy9iYXNlLnNlcnZpY2UudHMiXSwic291cmNlUm9vdCI6IiJ9