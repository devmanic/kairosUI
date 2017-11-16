webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_admanic_ui__ = __webpack_require__("../../../../admanic-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_admanic_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_admanic_ui__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(toastManager, vcr, modalManager) {
        toastManager.setRootViewContainerRef(vcr);
        modalManager.setRootViewContainerRef(vcr);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-kairos-ui',
            template: "\n    <div>\n      <app-loader></app-loader>\n      <router-outlet></router-outlet>\n    </div>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_admanic_ui__["ToastService"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1_admanic_ui__["ModalManagerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gallery_gallery_module__ = __webpack_require__("../../../../../src/app/gallery/gallery.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_admanic_ui__ = __webpack_require__("../../../../admanic-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_admanic_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_admanic_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_7__gallery_gallery_module__["a" /* GalleryModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* AppRoutes */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8_admanic_ui__["ToastService"], __WEBPACK_IMPORTED_MODULE_8_admanic_ui__["ModalManagerService"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
var AppRoutes = [
    {
        path: '',
        redirectTo: '/gallery/list',
        pathMatch: 'full'
    },
    { path: '**', redirectTo: 'gallery/404' }
];


/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_routes__ = __webpack_require__("../../../../../src/app/auth/auth.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_admanic_ui__ = __webpack_require__("../../../../admanic-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_admanic_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_admanic_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__auth_routes__["a" /* AuthRoutes */]),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_admanic_ui__["InputModule"],
                __WEBPACK_IMPORTED_MODULE_5_admanic_ui__["ToastModule"].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]],
            providers: []
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");

var AuthRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */]
    }
];


/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: #eee;\n}\n.login-card{\n  width:500px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card login-card\">\n  <form class=\"card-body\" [formGroup]=\"form\" (submit)=\"formSubmitHandler($event)\">\n    <h3 class=\"card-title text-center\"> Kairos UI</h3>\n\n    <adm-input-container class=\"form-group\" label=\"APP ID\" [control]=\"form.get('app_id')\">\n      <input type=\"text\" placeholder=\"Kairos application id\" adm formControlName=\"app_id\">\n    </adm-input-container>\n\n    <adm-input-container class=\"form-group\" label=\"APP KEY\" [control]=\"form.get('app_key')\">\n      <input type=\"text\" placeholder=\"Kairos application key\" adm formControlName=\"app_key\">\n    </adm-input-container>\n\n\n    <adm-input-container>\n      <button type=\"submit\" class=\"btn btn-primary float-right\">Proceed</button>\n    </adm-input-container>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_credentials_service_ts__ = __webpack_require__("../../../../../src/app/shared/credentials.service.ts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(credsManager, router) {
        this.credsManager = credsManager;
        this.router = router;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            app_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255)]),
            app_key: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255)])
        });
        this.form.patchValue(this.credsManager.credentials);
    }
    LoginComponent.prototype.formSubmitHandler = function (e) {
        if (e) {
            e.preventDefault();
        }
        if (this.form.invalid) {
            return this.markFormAsDirty(this.form);
        }
        this.credsManager.credentials = this.form.value;
        this.router.navigate(['./gallery']);
    };
    LoginComponent.prototype.markFormAsDirty = function (form) {
        for (var ctrl in form['controls']) {
            form['controls'][ctrl].markAsTouched();
        }
        return false;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_credentials_service_ts__["a" /* CredentialsService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gallery/gallery-list/gallery-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_baseListComponent__ = __webpack_require__("../../../../../src/app/shared/components/baseListComponent.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryListComponent = (function (_super) {
    __extends(GalleryListComponent, _super);
    function GalleryListComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this._subscribers.push(_this.sdk.galleryList.subscribe(function (res) { return _this.list.next(res); }));
        _this.title = 'Gallery List';
        return _this;
    }
    GalleryListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gallery-list',
            template: "\n    <ng-container *ngIf=\"!(list|async).length; else galleryListTpl;\">\n      <div class=\"alert alert-light\" role=\"alert\">\n        Gallery list empty\n      </div>\n    </ng-container>\n\n    <ng-template #galleryListTpl>\n      <div class=\"list-group\">\n        <a *ngFor=\"let item of list|async\"\n           [routerLink]=\"['../', 'view',item]\"\n           class=\"list-group-item list-group-item-action\">{{item}}</a>\n      </div>\n    </ng-template>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], GalleryListComponent);
    return GalleryListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_components_baseListComponent__["a" /* default */]));



/***/ }),

/***/ "../../../../../src/app/gallery/gallery-view/gallery-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_baseListComponent__ = __webpack_require__("../../../../../src/app/shared/components/baseListComponent.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryViewComponent = (function (_super) {
    __extends(GalleryViewComponent, _super);
    function GalleryViewComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this.query = '';
        _this.galleryID = _this.route.params['value'].gallery_id;
        _this._subscribers.push(_this.sdk.getGalleryView(_this.galleryID)
            .subscribe(function (res) { return _this.list.next(res); }, function () {
            _this.router.navigate(['../../'], { relativeTo: _this.route });
        }));
        _this.title = "" + _this.galleryID;
        return _this;
    }
    GalleryViewComponent.prototype.confirmDelete = function () {
        var _this = this;
        this.modalManager.show({
            type: 'warning',
            title: "Are you sure ?",
            content: "Gallery: <strong class=\"text-bold\">" + this.galleryID + "</strong> will be deleted !"
        }, function () { return _this.deleteSubject.bind(_this)(); });
    };
    GalleryViewComponent.prototype.deleteSubject = function () {
        var _this = this;
        this.sdk.deleteGallery(this.galleryID)
            .subscribe(function (res) { return _this.onSuccessDeleteSubject.bind(_this)(res); });
    };
    GalleryViewComponent.prototype.onSuccessDeleteSubject = function (res) {
        this.toastManager.success(res);
        this.router.navigate(['../../'], { relativeTo: this.route });
    };
    GalleryViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gallery-view',
            template: "\n    <ng-container *ngIf=\"!(list|async).length; else galleryListTpl;\">\n      <div class=\"alert alert-light\" role=\"alert\">\n        Gallery subject list empty\n      </div>\n    </ng-container>\n\n    <ng-template #galleryListTpl>\n      <div class=\"row\">\n        <div class=\"col-md-3 col-sm-9\">\n          <adm-input-container class=\"form-group\">\n            <input adm type=\"text\" placeholder=\"Find in list\" [(ngModel)]=\"query\">\n          </adm-input-container>\n        </div>\n        <div class=\"col-md-9 col-sm-3 text-right\">\n          <button type=\"button\" (click)=\"confirmDelete()\" class=\"btn btn-sm btn-outline-danger\">Delete Gallery</button>\n        </div>\n      </div>\n      <p>Subjects:</p>\n      <div class=\"list-group\">\n        <a *ngFor=\"let item of list|async|listFilter:query; trackBy:trackByFn;\"\n           [routerLink]=\"['../', galleryID, item]\"\n           class=\"list-group-item list-group-item-action\">{{item}}</a>\n      </div>\n    </ng-template>\n\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], GalleryViewComponent);
    return GalleryViewComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_components_baseListComponent__["a" /* default */]));



/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'gallery-component',
            template: "\n    <app-navbar></app-navbar>\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gallery/gallery.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_admanic_ui__ = __webpack_require__("../../../../admanic-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_admanic_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_admanic_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_credentials_service_ts__ = __webpack_require__("../../../../../src/app/shared/credentials.service.ts.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryGuard = (function () {
    function GalleryGuard(credsManager, router, toastManager) {
        this.credsManager = credsManager;
        this.router = router;
        this.toastManager = toastManager;
    }
    GalleryGuard.prototype.canActivate = function (next, state) {
        if (!this.credsManager.isValidCredentials) {
            this.toastManager.warning('Please, set valid credentials');
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    GalleryGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_credentials_service_ts__["a" /* CredentialsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2_admanic_ui__["ToastService"]])
    ], GalleryGuard);
    return GalleryGuard;
}());



/***/ }),

/***/ "../../../../../src/app/gallery/gallery.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_list_gallery_list_component__ = __webpack_require__("../../../../../src/app/gallery/gallery-list/gallery-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gallery_routes__ = __webpack_require__("../../../../../src/app/gallery/gallery.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gallery_guard__ = __webpack_require__("../../../../../src/app/gallery/gallery.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_credentials_service_ts__ = __webpack_require__("../../../../../src/app/shared/credentials.service.ts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gallery_view_gallery_view_component__ = __webpack_require__("../../../../../src/app/gallery/gallery-view/gallery-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_list_filter_pipe__ = __webpack_require__("../../../../../src/app/shared/list-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__subject_view_subject_view_component__ = __webpack_require__("../../../../../src/app/gallery/subject-view/subject-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/gallery/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_admanic_ui__ = __webpack_require__("../../../../admanic-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_admanic_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_admanic_ui__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var GalleryModule = (function () {
    function GalleryModule() {
    }
    GalleryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__gallery_routes__["a" /* GalleryRoutes */]),
                __WEBPACK_IMPORTED_MODULE_13_admanic_ui__["InputModule"],
                __WEBPACK_IMPORTED_MODULE_13_admanic_ui__["ModalModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__gallery_guard__["a" /* GalleryGuard */],
                __WEBPACK_IMPORTED_MODULE_6__shared_credentials_service_ts__["a" /* CredentialsService */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gallery_list_gallery_list_component__["a" /* GalleryListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_8__gallery_view_gallery_view_component__["a" /* GalleryViewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shared_list_filter_pipe__["a" /* ListFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_11__subject_view_subject_view_component__["a" /* SubjectViewComponent */],
                __WEBPACK_IMPORTED_MODULE_12__navbar_navbar_component__["a" /* NavbarComponent */]
            ]
        })
    ], GalleryModule);
    return GalleryModule;
}());



/***/ }),

/***/ "../../../../../src/app/gallery/gallery.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gallery_list_gallery_list_component__ = __webpack_require__("../../../../../src/app/gallery/gallery-list/gallery-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery_guard__ = __webpack_require__("../../../../../src/app/gallery/gallery.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallery_view_gallery_view_component__ = __webpack_require__("../../../../../src/app/gallery/gallery-view/gallery-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subject_view_subject_view_component__ = __webpack_require__("../../../../../src/app/gallery/subject-view/subject-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_404_pate_component__ = __webpack_require__("../../../../../src/app/shared/components/404-pate.component.ts");






var GalleryRoutes = [
    {
        path: 'gallery',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__gallery_guard__["a" /* GalleryGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_2__gallery_component__["a" /* GalleryComponent */],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'prefix'
            },
            {
                path: 'list',
                component: __WEBPACK_IMPORTED_MODULE_0__gallery_list_gallery_list_component__["a" /* GalleryListComponent */]
            },
            {
                path: 'view',
                children: [
                    { path: ':gallery_id', component: __WEBPACK_IMPORTED_MODULE_3__gallery_view_gallery_view_component__["a" /* GalleryViewComponent */] }
                ]
            },
            {
                path: 'view/:gallery_id/:subject_id',
                component: __WEBPACK_IMPORTED_MODULE_4__subject_view_subject_view_component__["a" /* SubjectViewComponent */]
            },
            { path: '404', component: __WEBPACK_IMPORTED_MODULE_5__shared_components_404_pate_component__["a" /* Page404Component */] }
        ]
    }
];


/***/ }),

/***/ "../../../../../src/app/gallery/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_credentials_service_ts__ = __webpack_require__("../../../../../src/app/shared/credentials.service.ts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_title_service__ = __webpack_require__("../../../../../src/app/shared/title.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(credsManager, router, titleService) {
        this.credsManager = credsManager;
        this.router = router;
        this.titleService = titleService;
    }
    NavbarComponent.prototype.logout = function () {
        this.credsManager.clear();
        this.router.navigate(['/login']);
    };
    NavbarComponent.prototype.toggleNavBar = function () {
        this.showNavbar = !this.showNavbar;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: "\n    <nav class=\"navbar navbar-expand-sm navbar-light bg-light\">\n      <div class=\"container-fluid\">\n\n        <a [routerLink]=\"['/gallery', 'list']\" class=\"navbar-brand\">Kairos UI</a>\n        <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavBar()\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" [ngClass]=\"{'show':showNavbar}\">\n          <ul class=\"navbar-nav mr-auto\">\n\n          </ul>\n          <div class=\"form-inline\">\n            <button class=\"btn btn-outline-primary btn-sm\" type=\"button\" (click)=\"logout()\">Logout</button>\n          </div>\n        </div>\n      </div>\n    </nav>\n    <br>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-9\">\n          <ng-template [ngIf]=\"!!(titleService.title|async)\">\n            <h3 style=\"margin-bottom: 15px;\">{{titleService.title | async}}</h3>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_credentials_service_ts__["a" /* CredentialsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__shared_title_service__["a" /* TitleService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gallery/subject-view/subject-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_baseListComponent__ = __webpack_require__("../../../../../src/app/shared/components/baseListComponent.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubjectViewComponent = (function (_super) {
    __extends(SubjectViewComponent, _super);
    function SubjectViewComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this.galleryID = _this.route.params['value'].gallery_id;
        _this.subjectID = _this.route.params['value'].subject_id;
        _this.title = _this.galleryID + ": " + _this.subjectID;
        _this.sdk.getSubjectView(_this.galleryID, _this.subjectID)
            .subscribe(function (res) {
            _this.list.next(res);
        }, function () {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
        return _this;
    }
    SubjectViewComponent.prototype.confirmDelete = function () {
        var _this = this;
        this.modalManager.show({
            type: 'warning',
            title: "Are you sure ?",
            content: "Subject: <strong class=\"text-bold\">" + this.subjectID + "</strong> will be deleted !"
        }, function () { return _this.deleteSubject.bind(_this)(); });
    };
    SubjectViewComponent.prototype.deleteSubject = function () {
        var _this = this;
        this.sdk.deleteSubject(this.galleryID, this.subjectID)
            .subscribe(function (res) { return _this.onSuccessDeleteSubject.bind(_this)(res); });
    };
    SubjectViewComponent.prototype.onSuccessDeleteSubject = function (res) {
        this.toastManager.success(res);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    SubjectViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subject-view',
            template: "\n    <div class=\"row\" style=\"margin-bottom: 15px;\">\n      <div class=\"col-sm-9\">\n        <p>Faces:</p>\n      </div>\n      <div class=\"col-sm-3 text-right\">\n        <button type=\"button\" (click)=\"confirmDelete()\" class=\"btn btn-sm btn-outline-danger\">Delete Subject</button>\n      </div>\n    </div>\n    <ng-container *ngIf=\"!(list|async).length; else listTpl;\">\n      <div class=\"alert alert-light\" role=\"alert\">\n        Faces list empty\n      </div>\n    </ng-container>\n    <ng-template #listTpl>\n      <ul class=\"list-group\">\n        <li *ngFor=\"let item of list|async; trackBy:trackByFn;\"\n            class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-sm-8\">\n              {{item.face_id}}\n            </div>\n            <div class=\"col-sm-4 text-right\">\n              <small class=\"text-muted\">{{item.enrollment_timestamp | date:'fullDate'}}</small>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </ng-template>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], SubjectViewComponent);
    return SubjectViewComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_components_baseListComponent__["a" /* default */]));



/***/ }),

/***/ "../../../../../src/app/shared/components/404-pate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page404Component = (function () {
    function Page404Component() {
    }
    Page404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-404',
            template: "\n    <h1>404</h1>\n    <p>Page not found</p>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/baseListComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sdk_servive__ = __webpack_require__("../../../../../src/app/shared/sdk.servive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__title_service__ = __webpack_require__("../../../../../src/app/shared/title.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_admanic_ui__ = __webpack_require__("../../../../admanic-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_admanic_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_admanic_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BaseList = (function () {
    function BaseList(injector) {
        this.injector = injector;
        this.list = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        this.title = '';
        this._subscribers = [];
        this.sdk = injector.get(__WEBPACK_IMPORTED_MODULE_1__sdk_servive__["a" /* SdkService */]);
        this.titleService = injector.get(__WEBPACK_IMPORTED_MODULE_3__title_service__["a" /* TitleService */]);
        this.router = injector.get(__WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]);
        this.route = injector.get(__WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"]);
        this.toastManager = injector.get(__WEBPACK_IMPORTED_MODULE_5_admanic_ui__["ToastService"]);
        this.modalManager = injector.get(__WEBPACK_IMPORTED_MODULE_5_admanic_ui__["ModalManagerService"]);
    }
    BaseList.prototype.ngAfterViewInit = function () {
        this.titleService.setTitle(this.title);
    };
    BaseList.prototype.ngOnDestroy = function () {
        this.titleService.setTitle('');
        this._subscribers.forEach(function (el) {
            if (el instanceof __WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription__["a" /* Subscription */]) {
                el.unsubscribe();
            }
        });
    };
    BaseList.prototype.trackByFn = function (item, index) {
        return index;
    };
    BaseList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], BaseList);
    return BaseList;
}());
/* harmony default export */ __webpack_exports__["a"] = (BaseList);


/***/ }),

/***/ "../../../../../src/app/shared/components/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_service__ = __webpack_require__("../../../../../src/app/shared/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = (function () {
    function LoaderComponent(service) {
        this.service = service;
    }
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loader',
            template: "\n    <ng-template [ngIf]=\"service.isShow | async\">\n      <div class=\"apploader\"></div>\n    </ng-template>\n  ",
            styles: ["\n    .apploader {\n      height: 3px;\n      width: 100%;\n      position: fixed;\n      overflow: hidden;\n      background-color: #ddd;\n      left: 0;\n      right: 0;\n      z-index: 1;\n    }\n\n    .apploader:before {\n      display: block;\n      position: absolute;\n      content: \"\";\n      left: -200px;\n      width: 200px;\n      height: 4px;\n      background-color: #2980b9;\n      animation: loading 2s linear infinite;\n    }\n\n    @keyframes loading {\n      from {\n        left: -200px;\n        width: 30%;\n      }\n      50% {\n        width: 30%;\n      }\n      70% {\n        width: 70%;\n      }\n      80% {\n        left: 50%;\n      }\n      95% {\n        left: 120%;\n      }\n      to {\n        left: 100%;\n      }\n    }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__loader_service__["a" /* LoaderService */]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/credentials.service.ts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CredentialsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CredentialsService = (function () {
    function CredentialsService() {
        this.localStorageKey = 'app_creds';
    }
    Object.defineProperty(CredentialsService.prototype, "credentials", {
        get: function () {
            var data = JSON.parse(localStorage.getItem(this.localStorageKey));
            return this.isValid(data) ? data : { app_id: null, app_key: null };
        },
        set: function (creds) {
            if (this.isValid(creds)) {
                localStorage.setItem(this.localStorageKey, JSON.stringify(creds));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CredentialsService.prototype, "isValidCredentials", {
        get: function () {
            return this.isValid(this.credentials);
        },
        enumerable: true,
        configurable: true
    });
    CredentialsService.prototype.clear = function () {
        localStorage.removeItem(this.localStorageKey);
    };
    CredentialsService.prototype.isValid = function (data) {
        return !!data && Object(__WEBPACK_IMPORTED_MODULE_1_util__["isObject"])(data) && data.hasOwnProperty('app_id') && Object(__WEBPACK_IMPORTED_MODULE_1_util__["isString"])(data.app_id) && data.hasOwnProperty('app_key') && Object(__WEBPACK_IMPORTED_MODULE_1_util__["isString"])(data.app_key) && data.app_key.length > 3 && data.app_id.length > 3;
    };
    CredentialsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], CredentialsService);
    return CredentialsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/http-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SDKInceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credentials_service_ts__ = __webpack_require__("../../../../../src/app/shared/credentials.service.ts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_admanic_ui__ = __webpack_require__("../../../../admanic-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_admanic_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_admanic_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loader_service__ = __webpack_require__("../../../../../src/app/shared/loader.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SDKInceptor = (function () {
    function SDKInceptor(credsManager, loaderService, router, toastManager) {
        this.credsManager = credsManager;
        this.loaderService = loaderService;
        this.router = router;
        this.toastManager = toastManager;
        this.api_host = 'https://api.kairos.com/';
    }
    SDKInceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var authReq = request.clone({
            url: "" + this.api_host + request.url,
            setHeaders: __assign({ 'Content-type': 'application/json' }, this.credsManager.credentials)
        });
        this.loaderService.show();
        return next.handle(authReq).do(function (response) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpResponse */]) {
                _this.loaderService.hide();
                if (response.body.hasOwnProperty('Errors') && Array.isArray(response.body.Errors) && response.body.Errors.length) {
                    _this.toastManager.error(response.body.Errors[0].Message);
                    throw __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(response.body);
                }
            }
        }, function (err) {
            _this.loaderService.hide();
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                _this.toastManager.error(err.message);
                if (err.status === 403 || err.status === 0) {
                    _this.router.navigate(['./login']);
                }
            }
        });
    };
    SDKInceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__credentials_service_ts__["a" /* CredentialsService */],
            __WEBPACK_IMPORTED_MODULE_6__loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_5_admanic_ui__["ToastService"]])
    ], SDKInceptor);
    return SDKInceptor;
}());



/***/ }),

/***/ "../../../../../src/app/shared/list-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ListFilterPipe = (function () {
    function ListFilterPipe() {
    }
    ListFilterPipe.prototype.transform = function (arr, query) {
        if (query && typeof query === 'string') {
            return arr.filter(function (str) { return str.includes(query); });
        }
        return arr;
    };
    ListFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'listFilter'
        })
    ], ListFilterPipe);
    return ListFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoaderService = (function () {
    function LoaderService() {
        this._isShow = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](false);
        this.isShow = this._isShow.asObservable();
    }
    LoaderService.prototype.show = function () {
        this._isShow.next(true);
    };
    LoaderService.prototype.hide = function () {
        var _this = this;
        setTimeout(function () {
            _this._isShow.next(false);
        }, this._delay);
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/sdk.servive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SdkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SdkService = (function () {
    function SdkService(http) {
        this.http = http;
    }
    Object.defineProperty(SdkService.prototype, "galleryList", {
        get: function () {
            return this.http.post("gallery/list_all", {}).map(function (res) { return res.gallery_ids; });
        },
        enumerable: true,
        configurable: true
    });
    SdkService.prototype.getGalleryView = function (gallery_name) {
        return this.http.post('gallery/view', { gallery_name: gallery_name }).map(function (res) { return res.subject_ids; });
    };
    SdkService.prototype.deleteGallery = function (gallery_name) {
        return this.http.post('gallery/remove', { gallery_name: gallery_name }).map(function (res) { return res.message; });
    };
    SdkService.prototype.getSubjectView = function (gallery_name, subject_id) {
        return this.http.post('gallery/view_subject', { gallery_name: gallery_name, subject_id: subject_id }).map(function (res) { return res.face_ids; });
    };
    SdkService.prototype.deleteSubject = function (gallery_name, subject_id) {
        return this.http.post('gallery/remove_subject', {
            gallery_name: gallery_name,
            subject_id: subject_id
        }).map(function (res) { return res.message; });
    };
    SdkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], SdkService);
    return SdkService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sdk_servive__ = __webpack_require__("../../../../../src/app/shared/sdk.servive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__credentials_service_ts__ = __webpack_require__("../../../../../src/app/shared/credentials.service.ts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_interceptor_service__ = __webpack_require__("../../../../../src/app/shared/http-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loader_service__ = __webpack_require__("../../../../../src/app/shared/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_loader_component__ = __webpack_require__("../../../../../src/app/shared/components/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__title_service__ = __webpack_require__("../../../../../src/app/shared/title.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_404_pate_component__ = __webpack_require__("../../../../../src/app/shared/components/404-pate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var components = [
    __WEBPACK_IMPORTED_MODULE_7__components_loader_component__["a" /* LoaderComponent */],
    __WEBPACK_IMPORTED_MODULE_10__components_404_pate_component__["a" /* Page404Component */]
];
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__loader_service__["a" /* LoaderService */],
                __WEBPACK_IMPORTED_MODULE_8__title_service__["a" /* TitleService */],
                __WEBPACK_IMPORTED_MODULE_2__sdk_servive__["a" /* SdkService */],
                __WEBPACK_IMPORTED_MODULE_3__credentials_service_ts__["a" /* CredentialsService */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_5__http_interceptor_service__["a" /* SDKInceptor */], multi: true }
            ],
            declarations: components,
            exports: components
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/title.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TitleService = (function () {
    function TitleService() {
        this._title = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.title = this._title.asObservable();
    }
    TitleService.prototype.setTitle = function (title) {
        this._title.next(!!title && typeof title === 'string' ? title : null);
    };
    TitleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TitleService);
    return TitleService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map