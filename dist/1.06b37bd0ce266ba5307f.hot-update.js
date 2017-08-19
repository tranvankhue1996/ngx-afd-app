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
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(5);
var platform_browser_1 = __webpack_require__(4);
var LayoutComponent = (function () {
    function LayoutComponent(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.name = 'Angular';
    }
    LayoutComponent.prototype.ngOnInit = function () {
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
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    core_1.Component({
        selector: 'afd-render-layout',
        template: __webpack_require__("./src/app/layout/layout.component.html"),
        styles: [__webpack_require__("./src/app/layout/layout.component.css")]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        platform_browser_1.Title])
], LayoutComponent);
exports.LayoutComponent = LayoutComponent;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnRzPzU3OTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBa0M7QUFDbEMsdUJBQStCO0FBQy9CLHVCQUFvQztBQUVwQyxvQ0FBa0Q7QUFDbEQsc0NBQXdFO0FBQ3hFLGdEQUFrRDtBQVFsRCxJQUFhLGVBQWU7SUFDMUIseUJBQW9CLE1BQWMsRUFDdEIsY0FBOEIsRUFDOUIsWUFBbUI7UUFGWCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBTztRQWtCL0IsU0FBSSxHQUFHLFNBQVMsQ0FBQztJQWxCaUIsQ0FBQztJQUVuQyxrQ0FBUSxHQUFSO1FBQUEsaUJBY0M7UUFiQyxXQUFXO1FBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ2IsTUFBTSxDQUFDLFVBQUMsS0FBSyxJQUFLLFlBQUssWUFBWSxzQkFBYSxFQUE5QixDQUE4QixDQUFDO2FBQ2pELEdBQUcsQ0FBQyxjQUFNLFlBQUksQ0FBQyxjQUFjLEVBQW5CLENBQW1CLENBQUM7YUFDOUIsR0FBRyxDQUFDLFVBQUMsS0FBSztZQUNQLE9BQU8sS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQUMsQ0FBQztZQUN0RCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQzthQUNELE1BQU0sQ0FBQyxVQUFDLEtBQUssSUFBSyxZQUFLLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBMUIsQ0FBMEIsQ0FBQzthQUM3QyxRQUFRLENBQUMsVUFBQyxLQUFLLElBQUssWUFBSyxDQUFDLElBQUksRUFBVixDQUFVLENBQUM7YUFDL0IsU0FBUyxDQUFDLFVBQUMsS0FBSztZQUNiLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUdILHNCQUFDO0FBQUQsQ0FBQztBQXRCWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLDZCQUFhLHlDQUF5QjtRQUN0QyxTQUFTLG1CQUFJLHdDQUEwQjtLQUN4QyxDQUFDO3FDQUc0QixlQUFNO1FBQ04sdUJBQWM7UUFDaEIsd0JBQUs7R0FIcEIsZUFBZSxDQXNCM0I7QUF0QlksMENBQWUiLCJmaWxlIjoiMS4wNmIzN2JkMGNlMjY2YmE1MzA3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXAnO1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FmZC1yZW5kZXItbGF5b3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsgJy4vbGF5b3V0LmNvbXBvbmVudC5jc3MnIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgeyBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBcclxuICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgIHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBUaXRsZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvL3NldCB0aXRsZVxyXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzXHJcbiAgICAgICAgLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZClcclxuICAgICAgICAubWFwKCgpID0+IHRoaXMuYWN0aXZhdGVkUm91dGUpXHJcbiAgICAgICAgLm1hcCgocm91dGUpID0+IHtcclxuICAgICAgICAgICAgd2hpbGUgKHJvdXRlLmZpcnN0Q2hpbGQpIHsgcm91dGUgPSByb3V0ZS5maXJzdENoaWxkOyB9XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIoKHJvdXRlKSA9PiByb3V0ZS5vdXRsZXQgPT09ICdwcmltYXJ5JylcclxuICAgICAgICAubWVyZ2VNYXAoKHJvdXRlKSA9PiByb3V0ZS5kYXRhKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKGV2ZW50Wyd0aXRsZSddKTtcclxuICAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5hbWUgPSAnQW5ndWxhcic7IFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQudHMiXSwic291cmNlUm9vdCI6IiJ9