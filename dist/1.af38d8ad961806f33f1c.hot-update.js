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
            .filter(function (event) { return event instanceof router_1.NavigationStart; })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnRzPzU3OTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBa0M7QUFDbEMsdUJBQStCO0FBQy9CLHVCQUFvQztBQUVwQyxvQ0FBa0Q7QUFDbEQsc0NBQTBFO0FBQzFFLGdEQUFrRDtBQVFsRCxJQUFhLGVBQWU7SUFDMUIseUJBQW9CLE1BQWMsRUFDdEIsY0FBOEIsRUFDOUIsWUFBbUI7UUFGWCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBTztRQWtCL0IsU0FBSSxHQUFHLFNBQVMsQ0FBQztJQWxCaUIsQ0FBQztJQUVuQyxrQ0FBUSxHQUFSO1FBQUEsaUJBY0M7UUFiQyxXQUFXO1FBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ2IsTUFBTSxDQUFDLFVBQUMsS0FBSyxJQUFLLFlBQUssWUFBWSx3QkFBZSxFQUFoQyxDQUFnQyxDQUFDO2FBQ25ELEdBQUcsQ0FBQyxjQUFNLFlBQUksQ0FBQyxjQUFjLEVBQW5CLENBQW1CLENBQUM7YUFDOUIsR0FBRyxDQUFDLFVBQUMsS0FBSztZQUNQLE9BQU8sS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQUMsQ0FBQztZQUN0RCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQzthQUNELE1BQU0sQ0FBQyxVQUFDLEtBQUssSUFBSyxZQUFLLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBMUIsQ0FBMEIsQ0FBQzthQUM3QyxRQUFRLENBQUMsVUFBQyxLQUFLLElBQUssWUFBSyxDQUFDLElBQUksRUFBVixDQUFVLENBQUM7YUFDL0IsU0FBUyxDQUFDLFVBQUMsS0FBSztZQUNiLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUdILHNCQUFDO0FBQUQsQ0FBQztBQXRCWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLDZCQUFhLHlDQUF5QjtRQUN0QyxTQUFTLG1CQUFJLHdDQUEwQjtLQUN4QyxDQUFDO3FDQUc0QixlQUFNO1FBQ04sdUJBQWM7UUFDaEIsd0JBQUs7R0FIcEIsZUFBZSxDQXNCM0I7QUF0QlksMENBQWUiLCJmaWxlIjoiMS5hZjM4ZDhhZDk2MTgwNmYzM2YxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXAnO1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWZkLXJlbmRlci1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyAnLi9sYXlvdXQuY29tcG9uZW50LmNzcycgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7IFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIFxyXG4gICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgcHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vc2V0IHRpdGxlXHJcbiAgICB0aGlzLnJvdXRlci5ldmVudHNcclxuICAgICAgICAuZmlsdGVyKChldmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpXHJcbiAgICAgICAgLm1hcCgoKSA9PiB0aGlzLmFjdGl2YXRlZFJvdXRlKVxyXG4gICAgICAgIC5tYXAoKHJvdXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHdoaWxlIChyb3V0ZS5maXJzdENoaWxkKSB7IHJvdXRlID0gcm91dGUuZmlyc3RDaGlsZDsgfVxyXG4gICAgICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKChyb3V0ZSkgPT4gcm91dGUub3V0bGV0ID09PSAncHJpbWFyeScpXHJcbiAgICAgICAgLm1lcmdlTWFwKChyb3V0ZSkgPT4gcm91dGUuZGF0YSlcclxuICAgICAgICAuc3Vic2NyaWJlKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZShldmVudFsndGl0bGUnXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuYW1lID0gJ0FuZ3VsYXInOyBcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==