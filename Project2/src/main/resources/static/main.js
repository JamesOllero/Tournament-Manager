(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-menu/main-menu.component */ "./src/app/components/main-menu/main-menu.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/container/container.component */ "./src/app/components/container/container.component.ts");
/* harmony import */ var _components_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/new-event/new-event.component */ "./src/app/components/new-event/new-event.component.ts");
/* harmony import */ var _components_participant_register_participant_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/participant-register/participant-register.component */ "./src/app/components/participant-register/participant-register.component.ts");
/* harmony import */ var _components_participant_search_participant_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/participant-search/participant-search.component */ "./src/app/components/participant-search/participant-search.component.ts");










var routes = [
    {
        path: 'main',
        component: _components_container_container_component__WEBPACK_IMPORTED_MODULE_6__["ContainerComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
        children: [
            {
                path: 'menu',
                component: _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_3__["MainMenuComponent"]
            },
            {
                path: 'event',
                children: [
                    {
                        path: 'new',
                        component: _components_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_7__["NewEventComponent"]
                    }
                ]
            },
            {
                path: 'participant',
                children: [
                    {
                        path: 'register',
                        component: _components_participant_register_participant_register_component__WEBPACK_IMPORTED_MODULE_8__["ParticipantRegisterComponent"]
                    },
                    {
                        path: 'search',
                        component: _components_participant_search_participant_search_component__WEBPACK_IMPORTED_MODULE_9__["ParticipantSearchComponent"]
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'menu',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: '**',
        redirectTo: 'main'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TournamentManager';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_account_creation_account_creation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/account-creation/account-creation.component */ "./src/app/components/account-creation/account-creation.component.ts");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main-menu/main-menu.component */ "./src/app/components/main-menu/main-menu.component.ts");
/* harmony import */ var _components_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/new-event/new-event.component */ "./src/app/components/new-event/new-event.component.ts");
/* harmony import */ var _components_participant_register_participant_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/participant-register/participant-register.component */ "./src/app/components/participant-register/participant-register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/container/container.component */ "./src/app/components/container/container.component.ts");
/* harmony import */ var _components_participant_search_participant_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/participant-search/participant-search.component */ "./src/app/components/participant-search/participant-search.component.ts");
<<<<<<< HEAD
<<<<<<< master
/* harmony import */ var _pipes_search_util_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/search-util.pipe */ "./src/app/pipes/search-util.pipe.ts");

=======
>>>>>>> Code Update
=======
>>>>>>> Joe















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_account_creation_account_creation_component__WEBPACK_IMPORTED_MODULE_7__["AccountCreationComponent"],
                _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_8__["MainMenuComponent"],
                _components_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_9__["NewEventComponent"],
                _components_participant_register_participant_register_component__WEBPACK_IMPORTED_MODULE_10__["ParticipantRegisterComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"],
                _components_container_container_component__WEBPACK_IMPORTED_MODULE_13__["ContainerComponent"],
<<<<<<< HEAD
<<<<<<< master
                _components_participant_search_participant_search_component__WEBPACK_IMPORTED_MODULE_14__["ParticipantSearchComponent"],
                _pipes_search_util_pipe__WEBPACK_IMPORTED_MODULE_15__["SearchUtilPipe"]
=======
                _components_participant_search_participant_search_component__WEBPACK_IMPORTED_MODULE_14__["ParticipantSearchComponent"]
>>>>>>> Code Update
=======
                _components_participant_search_participant_search_component__WEBPACK_IMPORTED_MODULE_14__["ParticipantSearchComponent"]
>>>>>>> Joe
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/account-creation/account-creation.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/account-creation/account-creation.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC1jcmVhdGlvbi9hY2NvdW50LWNyZWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/account-creation/account-creation.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/account-creation/account-creation.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\" id=\"participant-registration\">\r\n  <form (ngSubmit)=\"onSubmit()\" #organizerForm=\"ngForm\">\r\n    <div>\r\n      <label for=\"username\">Username: </label>\r\n      <input type=\"text\" id=\"username\" [(ngModel)]=\"newOrganizer.username\" name=\"username\" required>\r\n    </div>\r\n    <div>\r\n      <label for=\"password\">Last Name: </label>\r\n      <input type=\"password\" id=\"password\" [(ngModel)]=\"newOrganizer.password\" name=\"password\" required>\r\n    </div>\r\n    <div>\r\n      <label for=\"email\">E-mail: </label>\r\n      <input type=\"email\" id=\"email\" [(ngModel)]=\"newOrganizer.email\" name=\"email\" required>\r\n    </div>\r\n    <div>\r\n      <button type=\"submit\" [disabled]=\"!organizerForm.form.valid\">Submit</button>\r\n      <button type=\"reset\">Reset</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/account-creation/account-creation.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/account-creation/account-creation.component.ts ***!
  \***************************************************************************/
/*! exports provided: AccountCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountCreationComponent", function() { return AccountCreationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccountCreationComponent = /** @class */ (function () {
    function AccountCreationComponent() {
    }
    AccountCreationComponent.prototype.ngOnInit = function () {
    };
    AccountCreationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-creation',
            template: __webpack_require__(/*! ./account-creation.component.html */ "./src/app/components/account-creation/account-creation.component.html"),
            styles: [__webpack_require__(/*! ./account-creation.component.css */ "./src/app/components/account-creation/account-creation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccountCreationComponent);
    return AccountCreationComponent;
}());



/***/ }),

/***/ "./src/app/components/container/container.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/container/container.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/container/container.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/container/container.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navs\">\r\n  <span>\r\n    <app-navigation [navItems]=\"navs\"></app-navigation>\r\n  </span>\r\n</div>\r\n<router-outlet></router-outlet>\r\n\r\n\r\n<!--This is a comment to force a recomiple and reindex-->\r\n"

/***/ }),

/***/ "./src/app/components/container/container.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/container/container.component.ts ***!
  \*************************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Auth/auth.service */ "./src/app/services/Auth/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ContainerComponent.prototype.ngOnInit = function () {
        this.navs = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].navigator;
    };
    ContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-container',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/components/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.css */ "./src/app/components/container/container.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\" id=\"login-form\">\r\n  <form #loginForm=\"ngForm\" novalidate (ngSubmit)=\"loginSubmit()\">\r\n    <div>\r\n      <input type=\"text\" name=\"user_email\" placeholder=\"email\" [(ngModel)]=\"username\" required>\r\n    </div>\r\n    <div>\r\n      <input type=\"password\" name=\"password\" placeholder=\"password\" [(ngModel)]=\"password\" required>\r\n    </div>\r\n    <div>\r\n      <button type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\r\n      <button type=\"reset\">Reset</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Auth/auth.service */ "./src/app/services/Auth/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        // localStorage.setItem('testItem', JSON.stringify({username: this.username, password: this.password}));
        this.authService.authenticate(this.username, this.password, function () { return _this.router.navigate([_this.returnUrl]); }, function (err) {
            console.log("Username/Password pair not found");
            console.log(err);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/main-menu/main-menu.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/main-menu/main-menu.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><button (click)=\"goToEventCreator()\">Create new Event</button></div>\r\n<div><button (click)=\"goToParticipantRegistry()\">Register new Participant</button></div>\r\n<div><button (click)=\"goToParticipantLookup()\">Participant Lookup</button></div>\r\n"

/***/ }),

/***/ "./src/app/components/main-menu/main-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Auth/auth.service */ "./src/app/services/Auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    MainMenuComponent.prototype.ngOnInit = function () {
    };
    MainMenuComponent.prototype.goToEventCreator = function () {
        this.router.navigate(['/main/event/new']);
    };
    MainMenuComponent.prototype.goToParticipantRegistry = function () {
        this.router.navigate(['/main/participant/register']);
    };
    MainMenuComponent.prototype.goToParticipantLookup = function () {
        this.router.navigate(['/main/participant/search']);
    };
    MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/components/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.css */ "./src/app/components/main-menu/main-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n  list-style: none;\r\n  border-bottom: 1px solid #bbbb;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  display: inline-block;\r\n  margin-right: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiYmJiO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5saSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <ul>\r\n    <li *ngFor=\"let item of navItems\">\r\n      <a [routerLink]=[item.link] class=\"nav-link\">{{item.title}}</a>\r\n    </li>\r\n    <button (click)=\"logout()\">Logout</button>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Auth/auth.service */ "./src/app/services/Auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.returnUrl = 'logout';
    };
    NavigationComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NavigationComponent.prototype, "navItems", void 0);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/new-event/new-event.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/new-event/new-event.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3LWV2ZW50L25ldy1ldmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/new-event/new-event.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/new-event/new-event.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  new-event works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/new-event/new-event.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/new-event/new-event.component.ts ***!
  \*************************************************************/
/*! exports provided: NewEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEventComponent", function() { return NewEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewEventComponent = /** @class */ (function () {
    function NewEventComponent() {
    }
    NewEventComponent.prototype.ngOnInit = function () {
    };
    NewEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-event',
            template: __webpack_require__(/*! ./new-event.component.html */ "./src/app/components/new-event/new-event.component.html"),
            styles: [__webpack_require__(/*! ./new-event.component.css */ "./src/app/components/new-event/new-event.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewEventComponent);
    return NewEventComponent;
}());



/***/ }),

/***/ "./src/app/components/participant-register/participant-register.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/participant-register/participant-register.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-left{\r\n    margin-left: 40px !important;\r\n}\r\n#btn{\r\n    margin-right: 34px;\r\n}\r\n/* #participant-registration{ */\r\n#changeme{\r\n background: radial-gradient(#fd6119, #682d00);\r\nbackground-size: 150% 100%;\r\n\r\n\r\n}\r\n#my-preview-div {\r\n    -webkit-transform: scale(2.0);\r\n            transform: scale(2.0);   \r\n    /* height: 500px;\r\n    weight: 700px;   */\r\n    }\r\nhtml { \r\n        background-color: lightblue; \r\n        background-size: cover;\r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWNpcGFudC1yZWdpc3Rlci9wYXJ0aWNpcGFudC1yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFHQSwrQkFBK0I7QUFDM0I7Q0FDSCw2Q0FBNkM7QUFDOUMsMEJBQTBCOzs7QUFHMUI7QUFDQTtJQUNJLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckI7c0JBQ2tCO0lBQ2xCO0FBRUE7UUFDSSwyQkFBMkI7UUFDM0Isc0JBQXNCO01BQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWNpcGFudC1yZWdpc3Rlci9wYXJ0aWNpcGFudC1yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbi1sZWZ0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG4jYnRue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzNHB4O1xyXG59XHJcblxyXG5cclxuLyogI3BhcnRpY2lwYW50LXJlZ2lzdHJhdGlvbnsgKi9cclxuICAgICNjaGFuZ2VtZXtcclxuIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjZmQ2MTE5LCAjNjgyZDAwKTtcclxuYmFja2dyb3VuZC1zaXplOiAxNTAlIDEwMCU7XHJcblxyXG5cclxufVxyXG4jbXktcHJldmlldy1kaXYge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyLjApOyAgIFxyXG4gICAgLyogaGVpZ2h0OiA1MDBweDtcclxuICAgIHdlaWdodDogNzAwcHg7ICAgKi9cclxuICAgIH1cclxuXHJcbiAgICBodG1sIHsgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlOyBcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICB9Il19 */"

/***/ }),

/***/ "./src/app/components/participant-register/participant-register.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/participant-register/participant-register.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"bg-primary\" id=\"html\" >\r\n    <div class=\"row justify-content-center align-items-center\" style=\"height:100vh\">\r\n        <div class=\"col-4\">\r\n            <div class=\"card mt-sm-3 mb-sm-5 \" id=\"my-preview-div\">\r\n<div  class=\"form-container w-400 p-3 h-150 \" >\r\n  <h4  class=\" pb-3 section one text-center \">Participant Registration</h4>\r\n  <form class=\"pb-3\" (ngSubmit)=\"onSubmit()\" #participantForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <!-- <button class=glyphicon-chevron-left></button>  -->\r\n      <label for=\"firstName\">First Name: </label>\r\n      <input type=\"text\" class=\"form-control\" placeholder= \"Bobby\"[(ngModel)]=\"newParticipant.firstName\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"lastName\">Last Name: </label>\r\n      <input type=\"text\" id=\"lastName\"  class=\"form-control\" placeholder= \"Kernel\"[(ngModel)]=\"newParticipant.lastName\" name=\"lastName\" required>\r\n    </div>\r\n  \r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email: </label>\r\n    <input type=\"email\" id=\"email\"  class=\"form-control\" placeholder= \"BobbyK@gmail.com\"[(ngModel)]=\"newParticipant.email\" name=\"lastName\" required>\r\n  </div >\r\n    \r\n    <div class=\"btn-toolbar \"> \r\n      <button  class=\"btn btn-success btn-sm col \" type=\"button\" id=\"btn\" [disabled]=\"!participantForm.form.valid\"> Submit</button>\r\n    \r\n      <button  class=\"btn btn-danger btn-sm col \"type=\"button\" id=\"btn\" >Reset</button>\r\n      <button  class=\"btn btn-info btn-sm col\"  type=\"button\" id=\"\">Sumbit and add new participant</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/participant-register/participant-register.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/participant-register/participant-register.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ParticipantRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantRegisterComponent", function() { return ParticipantRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ParticipantRegisterComponent = /** @class */ (function () {
    function ParticipantRegisterComponent() {
    }
    ParticipantRegisterComponent.prototype.ngOnInit = function () {
    };
    ParticipantRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-participant-register',
            template: __webpack_require__(/*! ./participant-register.component.html */ "./src/app/components/participant-register/participant-register.component.html"),
            styles: [__webpack_require__(/*! ./participant-register.component.css */ "./src/app/components/participant-register/participant-register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ParticipantRegisterComponent);
    return ParticipantRegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/participant-search/participant-search.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/participant-search/participant-search.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
<<<<<<< master
module.exports = "ul {\r\n  list-style: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWNpcGFudC1zZWFyY2gvcGFydGljaXBhbnQtc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhcnRpY2lwYW50LXNlYXJjaC9wYXJ0aWNpcGFudC1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbiJdfQ== */"
=======
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFydGljaXBhbnQtc2VhcmNoL3BhcnRpY2lwYW50LXNlYXJjaC5jb21wb25lbnQuY3NzIn0= */"
>>>>>>> Code Update
=======
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFydGljaXBhbnQtc2VhcmNoL3BhcnRpY2lwYW50LXNlYXJjaC5jb21wb25lbnQuY3NzIn0= */"
>>>>>>> Joe

/***/ }),

/***/ "./src/app/components/participant-search/participant-search.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/participant-search/participant-search.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
<<<<<<< master
module.exports = "<input [(ngModel)]=\"searchText\" placeholder=\"Participant Name\">\r\n<table>\r\n  <tr>\r\n    <th>Id</th><th>Name</th>\r\n  </tr>\r\n  <tr *ngFor=\"let p of participants | searchUtil : 'name' : searchText; let i = index\">\r\n    <td>{{p.player_Id}}</td>\r\n    <td>{{p.firstName}} {{p.lastName}}</td>\r\n  </tr>\r\n</table>\r\n<button type=\"button\" (click)=\"goBack()\">Go Back</button>\r\n"
=======
module.exports = "<p>\n  participant-search works!\n</p>\n"
>>>>>>> Code Update
=======
module.exports = "<p>\n  participant-search works!\n</p>\n"
>>>>>>> Joe

/***/ }),

/***/ "./src/app/components/participant-search/participant-search.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/participant-search/participant-search.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ParticipantSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantSearchComponent", function() { return ParticipantSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
<<<<<<< HEAD
<<<<<<< master
/* harmony import */ var _services_participant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/participant.service */ "./src/app/services/participant.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var ParticipantSearchComponent = /** @class */ (function () {
    function ParticipantSearchComponent(participantService, location) {
        this.participantService = participantService;
        this.location = location;
    }
    ParticipantSearchComponent.prototype.ngOnInit = function () {
        this.getParticipants();
    };
    ParticipantSearchComponent.prototype.getParticipants = function () {
        var _this = this;
        this.participantService.getAllParticipants(function () {
            var participantArr = JSON.parse(localStorage.getItem('participants'));
            // localStorage.removeItem('participants');
            var i;
            for (i = 0; i < participantArr.length; i++) {
                participantArr[i].name = participantArr[i].firstName + ' ' + participantArr[i].lastName;
            }
            _this.participants = participantArr;
            return;
        }, function (err) {
            console.log(err);
        });
    };
    ParticipantSearchComponent.prototype.goBack = function () {
        this.location.back();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ParticipantSearchComponent.prototype, "searchText", void 0);
=======
=======
>>>>>>> Joe


var ParticipantSearchComponent = /** @class */ (function () {
    function ParticipantSearchComponent() {
    }
    ParticipantSearchComponent.prototype.ngOnInit = function () {
    };
<<<<<<< HEAD
>>>>>>> Code Update
=======
>>>>>>> Joe
    ParticipantSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-participant-search',
            template: __webpack_require__(/*! ./participant-search.component.html */ "./src/app/components/participant-search/participant-search.component.html"),
            styles: [__webpack_require__(/*! ./participant-search.component.css */ "./src/app/components/participant-search/participant-search.component.css")]
        }),
<<<<<<< HEAD
<<<<<<< master
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_participant_service__WEBPACK_IMPORTED_MODULE_2__["ParticipantService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
=======
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
>>>>>>> Code Update
=======
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
>>>>>>> Joe
    ], ParticipantSearchComponent);
    return ParticipantSearchComponent;
}());



/***/ }),

<<<<<<< HEAD
<<<<<<< master
/***/ "./src/app/pipes/search-util.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/search-util.pipe.ts ***!
  \*******************************************/
/*! exports provided: SearchUtilPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUtilPipe", function() { return SearchUtilPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchUtilPipe = /** @class */ (function () {
    function SearchUtilPipe() {
    }
    SearchUtilPipe.prototype.transform = function (items, field, value) {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(function (singleItem) {
            return singleItem[field].toLowerCase().includes(value.toLowerCase());
        });
    };
    SearchUtilPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'searchUtil' })
    ], SearchUtilPipe);
    return SearchUtilPipe;
}());



/***/ }),

=======
>>>>>>> Code Update
=======
>>>>>>> Joe
/***/ "./src/app/services/Auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/Auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    // OrganizersUrl = 'https://api.myjson.com/bins/1de9pk';
    function AuthService(http) {
        this.http = http;
        this.authUrl = 'http://localhost:8080/organizer/getid';
    }
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('authToken') !== null;
    };
    AuthService.prototype.authenticate = function (username, password, success, fail) {
        return this.http.post(this.authUrl, JSON.stringify({ email: username, password: password }), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .toPromise()
            .then(function (resp) {
            localStorage.setItem('authToken', JSON.stringify(resp));
            success();
        }, function (err) {
            fail(err);
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('authToken')) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/participant.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/participant.service.ts ***!
  \*************************************************/
/*! exports provided: ParticipantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantService", function() { return ParticipantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ParticipantService = /** @class */ (function () {
    function ParticipantService(http) {
        this.http = http;
        this.participantUrl = 'http://localhost:8080/player/players';
    }
    ParticipantService.prototype.getAllParticipants = function (success, fail) {
        return this.http.get(this.participantUrl).toPromise()
            .then(function (resp) {
            localStorage.setItem('participants', JSON.stringify(resp));
            console.log('Got Participants');
            success();
        }, function (err) {
            fail(err);
        });
    };
    ParticipantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ParticipantService);
    return ParticipantService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: "http://localhost:3000",
    navigator: [
        {
            title: 'Main Menu',
            link: 'menu'
        },
        {
            title: 'Create Event',
            link: 'event/new'
        },
        {
            title: 'Create Account',
            link: 'account/register'
        },
        {
            title: 'Register New Participant',
            link: 'participant/register'
        },
        {
            title: 'View In-Progress Events',
            link: 'event/active'
        }
    ]
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programming\project_2\Project2\TournamentManager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map