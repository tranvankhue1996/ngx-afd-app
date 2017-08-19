webpackHotUpdate(1,{

/***/ "./node_modules/css-loader/index.js!./src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


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

module.exports = "";

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

/***/ "./src/app/shared/views/layout/layout.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
var layout_component_1 = __webpack_require__("./src/app/shared/views/layout/layout.component.ts");
exports.layoutRoutes = [
    {
        path: 'layout',
        component: layout_component_1.LayoutComponent,
        data: { title: 'ABC' }
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    }
];


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzPzFlMGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcz8wNzNlKiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuaHRtbD8wNzk5Iiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cz8zMzFiIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL3ZpZXdzL2xheW91dC9sYXlvdXQucm91dGluZy50cz8xZjhkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztBQ1BBLG9COzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsb0NBQTBDO0FBUTFDLElBQWEsZ0JBQWdCO0lBQTdCO0lBQStCLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUM7QUFBbkIsZ0JBQWdCO0lBTjVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLDZCQUFhLDJDQUEwQjtRQUN2QyxTQUFTLG1CQUFJLDBDQUEyQjtLQUMzQyxDQUFDO0dBRVcsZ0JBQWdCLENBQUc7QUFBbkIsNENBQWdCOzs7Ozs7Ozs7OztBQ1I3Qix3RkFBd0U7QUFFeEUsa0dBQXFEO0FBRXhDLG9CQUFZLEdBQVc7SUFDaEM7UUFDSSxJQUFJLEVBQUUsUUFBUTtRQUNkLFNBQVMsRUFBRSxrQ0FBZTtRQUMxQixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0tBQ3pCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsU0FBUztRQUNmLFNBQVMsRUFBRSxvQ0FBZ0I7S0FDOUI7Q0FDSiIsImZpbGUiOiIxLjc0N2FkMzBiZjYzNTVjMGUwMjc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wcm9maWxlLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gXCJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FmZC1yZW5kZXItcHJvZmlsZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsgJy4vcHJvZmlsZS5jb21wb25lbnQuY3NzJyBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuLy4uLy4uLy4uL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxheW91dFJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBcclxuICAgICAgICBwYXRoOiAnbGF5b3V0JywgXHJcbiAgICAgICAgY29tcG9uZW50OiBMYXlvdXRDb21wb25lbnQsXHJcbiAgICAgICAgZGF0YTogeyB0aXRsZTogJ0FCQycgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAncHJvZmlsZScsXHJcbiAgICAgICAgY29tcG9uZW50OiBQcm9maWxlQ29tcG9uZW50XHJcbiAgICB9XHJcbl1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9zaGFyZWQvdmlld3MvbGF5b3V0L2xheW91dC5yb3V0aW5nLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==