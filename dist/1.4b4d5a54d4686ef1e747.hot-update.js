webpackHotUpdate(1,{

/***/ "./node_modules/css-loader/index.js!./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/app/home/home.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "home";

/***/ }),

/***/ "./src/app/home/home.component.ts":
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
var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'afd-render-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")]
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/layout/layout.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var notfound_component_1 = __webpack_require__("./src/app/layout/notfound/notfound.component.ts");
exports.layoutRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        data: {
            title: 'Bill Chan'
        }
    },
    {
        path: '**',
        component: notfound_component_1.NotFoundComponent,
        data: {
            title: 'Not Found 404'
        }
    }
];


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzP2M3ZGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcz81ODEwKiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbD8yYjg1Iiwid2VicGFjazovLy8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cz9hYzUyIiwid2VicGFjazovLy8uL3NyYy9hcHAvbGF5b3V0L2xheW91dC5yb3V0aW5nLnRzP2E3NTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7O0FDUEEsd0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxvQ0FBMEM7QUFRMUMsSUFBYSxhQUFhO0lBQTFCO0lBQTRCLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUM7QUFBaEIsYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQiw2QkFBYSxxQ0FBdUI7UUFDcEMsU0FBUyxtQkFBSSxvQ0FBd0I7S0FDeEMsQ0FBQztHQUVXLGFBQWEsQ0FBRztBQUFoQixzQ0FBYTs7Ozs7Ozs7Ozs7QUNQMUIsK0VBQXlEO0FBQ3pELGtHQUFrRTtBQUVyRCxvQkFBWSxHQUFXO0lBQ2hDO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsOEJBQWE7UUFDeEIsSUFBSSxFQUFFO1lBQ0YsS0FBSyxFQUFFLFdBQVc7U0FDckI7S0FDSjtJQUNEO1FBQ0ksSUFBSSxFQUFFLElBQUk7UUFDVixTQUFTLEVBQUUsc0NBQWlCO1FBQzVCLElBQUksRUFBRTtZQUNGLEtBQUssRUFBRSxlQUFlO1NBQ3pCO0tBQ0o7Q0FDSixDQUFDIiwiZmlsZSI6IjEuNGI0ZDVhNTRkNDY4NmVmMWU3NDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2hvbWUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcImhvbWVcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FmZC1yZW5kZXItaG9tZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsgJy4vaG9tZS5jb21wb25lbnQuY3NzJyBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuLy4uL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBsYXlvdXRSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgXHJcbiAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCaWxsIENoYW4nXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICAgICAgcGF0aDogJyoqJywgXHJcbiAgICAgICAgY29tcG9uZW50OiBOb3RGb3VuZENvbXBvbmVudCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTm90IEZvdW5kIDQwNCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbl07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9hcHAvbGF5b3V0L2xheW91dC5yb3V0aW5nLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==