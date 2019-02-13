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
/* harmony import */ var _components_account_creation_account_creation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/account-creation/account-creation.component */ "./src/app/components/account-creation/account-creation.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/container/container.component */ "./src/app/components/container/container.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-menu/main-menu.component */ "./src/app/components/main-menu/main-menu.component.ts");
/* harmony import */ var _components_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/new-event/new-event.component */ "./src/app/components/new-event/new-event.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_participant_register_participant_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/participant-register/participant-register.component */ "./src/app/components/participant-register/participant-register.component.ts");
/* harmony import */ var _components_participant_search_participant_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/participant-search/participant-search.component */ "./src/app/components/participant-search/participant-search.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_tournament_tournament_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tournament/tournament.component */ "./src/app/components/tournament/tournament.component.ts");












var routes = [
    {
        path: 'main',
        component: _components_container_container_component__WEBPACK_IMPORTED_MODULE_3__["ContainerComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
        children: [
            {
                path: 'menu',
                component: _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_5__["MainMenuComponent"]
            },
            {
                path: 'event',
                children: [
                    {
                        path: 'new',
                        component: _components_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_6__["NewEventComponent"]
                    },
                    {
                        path: 'active',
                        component: _components_tournament_tournament_component__WEBPACK_IMPORTED_MODULE_11__["TournamentComponent"]
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
    // {
    //   path:'',
    //   component: MainMenuComponent
    // },
    {
        path: 'registration',
        component: _components_account_creation_account_creation_component__WEBPACK_IMPORTED_MODULE_1__["AccountCreationComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]]
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

module.exports = "<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _pipes_search_util_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/search-util.pipe */ "./src/app/pipes/search-util.pipe.ts");
/* harmony import */ var _components_tournament_tournament_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/tournament/tournament.component */ "./src/app/components/tournament/tournament.component.ts");
/* harmony import */ var _components_tournament_item_tournament_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/tournament-item/tournament-item.component */ "./src/app/components/tournament-item/tournament-item.component.ts");


















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
                _components_participant_search_participant_search_component__WEBPACK_IMPORTED_MODULE_14__["ParticipantSearchComponent"],
                _pipes_search_util_pipe__WEBPACK_IMPORTED_MODULE_15__["SearchUtilPipe"],
                _components_tournament_tournament_component__WEBPACK_IMPORTED_MODULE_16__["TournamentComponent"],
                _components_tournament_item_tournament_item_component__WEBPACK_IMPORTED_MODULE_17__["TournamentItemComponent"]
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

module.exports = ".margin-left{\r\n    margin-left: 40px !important;\r\n}\r\n#btn{\r\n    margin-right: 34px;\r\n}\r\n/* #participant-registration{ */\r\n#changeme{\r\n background: radial-gradient(#fd6119, #682d00);\r\nbackground-size: 150% 100%;\r\n    }\r\n#pad{\r\n    padding-top: 5%;\r\n}\r\n#fullpage{\r\n    position:fixed;\r\n    padding:0;\r\n    margin:0;\r\n\r\n\r\n    left:0;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n#organizer-registration{\r\n    padding: 15px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50LWNyZWF0aW9uL2FjY291bnQtY3JlYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBR0EsK0JBQStCO0FBQzNCO0NBQ0gsNkNBQTZDO0FBQzlDLDBCQUEwQjtJQUN0QjtBQUNKO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksY0FBYztJQUNkLFNBQVM7SUFDVCxRQUFROzs7SUFHUixNQUFNOztJQUVOLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxhQUFhO0VBQ2Ysc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50LWNyZWF0aW9uL2FjY291bnQtY3JlYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tbGVmdHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuI2J0bntcclxuICAgIG1hcmdpbi1yaWdodDogMzRweDtcclxufVxyXG5cclxuXHJcbi8qICNwYXJ0aWNpcGFudC1yZWdpc3RyYXRpb257ICovXHJcbiAgICAjY2hhbmdlbWV7XHJcbiBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoI2ZkNjExOSwgIzY4MmQwMCk7XHJcbmJhY2tncm91bmQtc2l6ZTogMTUwJSAxMDAlO1xyXG4gICAgfVxyXG4jcGFke1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcblxyXG4jZnVsbHBhZ2V7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1hcmdpbjowO1xyXG5cclxuXHJcbiAgICBsZWZ0OjA7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNvcmdhbml6ZXItcmVnaXN0cmF0aW9ue1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/account-creation/account-creation.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/account-creation/account-creation.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-primary bg\" id=fullpage>\r\n<div class=\"row justify-content-center align-items-center\">\r\n    <div class=\"col-10 col-sm-2 col-md-6\" id=pad>\r\n      <div class=\"card mt-sm-3 mb-sm-5 \" id=\"my-preview-div\">\r\n\r\n\r\n<div class=\"form-container w-400 p-3 h-150\" id=\"organizer-registration\">\r\n    <button type=\"button\" class=\"btn btn-light\"> <i class=\"fas fa-angle-left\"></i> </button>\r\n    <h4 class=\" pb-3 section one text-center \">Account Creation</h4>\r\n  <form #organizerForm=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\r\n    <div>\r\n      <label for=\"username\">Username: </label>\r\n      <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"Username\" [(ngModel)]=\"newOrganizer.username\" required>\r\n    </div>\r\n    <div>\r\n      <label for=\"password\">Password: </label>\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Password\" [(ngModel)]=\"newOrganizer.password\" required>\r\n    </div>\r\n    <div>\r\n      <label for=\"email\">E-mail: </label>\r\n      <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Email\" [(ngModel)]=\"newOrganizer.email\" required>\r\n    </div>\r\n    <div class=\"btn-toolbar d-flex justify-content-around\">\r\n      <button  class=\"btn btn-success btn-sm col m-3\" type=\"button\" [disabled]=\"!organizerForm.valid\">Submit</button>\r\n      <button  class=\"btn btn-danger btn-sm col m-3\" type=\"button\">Reset</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>"

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
/* harmony import */ var _model_organizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/organizer */ "./src/app/model/organizer.ts");
/* harmony import */ var _services_organizer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/organizer.service */ "./src/app/services/organizer.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var AccountCreationComponent = /** @class */ (function () {
    function AccountCreationComponent(organizerService, location) {
        this.organizerService = organizerService;
        this.location = location;
        this.newOrganizer = new _model_organizer__WEBPACK_IMPORTED_MODULE_2__["Organizer"];
    }
    AccountCreationComponent.prototype.ngOnInit = function () {
    };
    AccountCreationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.organizerService.registerOrganizer(this.newOrganizer, function () {
            _this.location.back();
        }, function (err) {
            console.log(err);
        });
    };
    AccountCreationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-creation',
            template: __webpack_require__(/*! ./account-creation.component.html */ "./src/app/components/account-creation/account-creation.component.html"),
            styles: [__webpack_require__(/*! ./account-creation.component.css */ "./src/app/components/account-creation/account-creation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_organizer_service__WEBPACK_IMPORTED_MODULE_3__["OrganizerService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
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

module.exports = "\r\n\r\n  :root {\r\n    --input-padding-x: 1.5rem;\r\n    --input-padding-y: .75rem;\r\n  }\r\n  \r\n  body {\r\n    background: #007bff;\r\n    background: linear-gradient(to right, #0062E6, #33AEFF);\r\n\r\n    position:fixed;\r\n    padding:0;\r\n    margin:0;\r\n\r\n    top:0;\r\n    left:0;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  \r\n  .card-signin {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  .card-signin .card-title {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .card-signin .card-body {\r\n    padding: 2rem;\r\n  }\r\n  \r\n  .form-signin {\r\n    width: 100%;\r\n  }\r\n  \r\n  .form-signin .btn {\r\n    font-size: 80%;\r\n    border-radius: 5rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n    transition: all 0.2s;\r\n  }\r\n  \r\n  .form-label-group {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .form-label-group input {\r\n    height: auto;\r\n    border-radius: 2rem;\r\n  }\r\n  \r\n  .form-label-group>input,\r\n  .form-label-group>label {\r\n    padding: var(--input-padding-y) var(--input-padding-x);\r\n  }\r\n  \r\n  .form-label-group>label {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n    /* Override default `<label>` margin */\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    transition: all .1s ease-in-out;\r\n  }\r\n  \r\n  .form-label-group input::-webkit-input-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::-ms-input-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input:not(:placeholder-shown) {\r\n    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n  }\r\n  \r\n  .form-label-group input:not(:placeholder-shown)~label {\r\n    padding-top: calc(var(--input-padding-y) / 3);\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n    font-size: 12px;\r\n    color: #777;\r\n  }\r\n  \r\n  .btn-google {\r\n    color: white;\r\n    background-color: #ea4335;\r\n  }\r\n  \r\n  .btn-facebook {\r\n    color: white;\r\n    background-color: #3b5998;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBRUU7SUFDRSx5QkFBeUI7SUFDekIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHVEQUF1RDs7SUFFdkQsY0FBYztJQUNkLFNBQVM7SUFDVCxRQUFROztJQUVSLEtBQUs7SUFDTCxNQUFNOztJQUVOLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDhDQUE4QztFQUNoRDs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjs7RUFFQTs7SUFFRSxzREFBc0Q7RUFDeEQ7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFNQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFNQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLDRFQUE0RTtJQUM1RSxnREFBZ0Q7RUFDbEQ7O0VBRUE7SUFDRSw2Q0FBNkM7SUFDN0MsZ0RBQWdEO0lBQ2hELGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1oseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuICA6cm9vdCB7XHJcbiAgICAtLWlucHV0LXBhZGRpbmcteDogMS41cmVtO1xyXG4gICAgLS1pbnB1dC1wYWRkaW5nLXk6IC43NXJlbTtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA2MkU2LCAjMzNBRUZGKTtcclxuXHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1hcmdpbjowO1xyXG5cclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1zaWduaW4ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXNpZ25pbiAuY2FyZC10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1zaWduaW4gLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1zaWduaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLXNpZ25pbiAuYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cD5pbnB1dCxcclxuICAuZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIHZhcigtLWlucHV0LXBhZGRpbmcteCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgKyB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICogKDIgLyAzKSk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pfmxhYmVsIHtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gIH1cclxuICBcclxuICAuYnRuLWdvb2dsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE0MzM1O1xyXG4gIH1cclxuICBcclxuICAuYnRuLWZhY2Vib29rIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <body>\r\n   \r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n            <div class=\"card card-signin my-5\" id=\"login-form\"> \r\n              <div class=\"card-body form-container\">\r\n                <h5 class=\"card-title text-center\">Sign In</h5>\r\n                <form class=\"form-signin\" #loginForm=\"ngForm\" novalidate (ngSubmit)=\"loginSubmit()\">\r\n                  <div class=\"form-label-group h-50\">\r\n                    <input style=\"height:50px; padding-left:17px\" type=\"email\" name=\"user_email\" id=\"inputEmail\" class=\"form-control \" placeholder=\"email\" [(ngModel)]=\"username\" required autofocus>\r\n                    <label for=\"inputEmail\" class =\" ml-3\">Email address</label>\r\n                  </div>\r\n    \r\n                  <div class=\"form-label-group\">\r\n                  \r\n                    <input style=\"height:50px; padding-left:17px\" type=\"password\"  [(ngModel)]=\"password\"  name=\"password\" id=\"inputPassword\" class=\"form-control \" placeholder=\"Password\" required>\r\n                    <label for=\"inputPassword\" class =\"ml-3\">Password</label>\r\n                  </div>\r\n    \r\n                  \r\n                  <button [disabled]=\"!loginForm.valid\" class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">Sign in</button>\r\n                  <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"button\" (click)=\"accountCreation()\">Create new account</button>\r\n                  \r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </body>\r\n\r\n\r\n"

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
        this.returnUrl = this.route.snapshot.queryParams[''] || '/';
    };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        // localStorage.setItem('testItem', JSON.stringify({username: this.username, password: this.password}));
        this.authService.authenticate(this.username, this.password, function () { return _this.router.navigate([_this.returnUrl]); }, function (err) {
            console.log("Username/Password pair not found");
            console.log(err);
        });
    };
    LoginComponent.prototype.accountCreation = function () {
        this.router.navigate(['/registration']);
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

module.exports = "#wow {\r\n    background: #007bff;\r\n    background: linear-gradient(to right, #0062E6, #33AEFF);\r\n    height: 100%;\r\n}\r\nbody {\r\n    background: #007bff;\r\n    background: linear-gradient(to right, #0062E6, #33AEFF);\r\n\r\n    position:fixed;\r\n    padding:0;\r\n    margin:0;\r\n    left:0;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\nbutton{\r\n    height: 100px;\r\n}\r\nhtml{\r\n    background: #007bff;\r\n        background: linear-gradient(to right, #0062E6, #33AEFF);\r\n    \r\n\r\n     \r\n      \r\n        background-size: cover;\r\n      \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsdURBQXVEO0lBQ3ZELFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix1REFBdUQ7O0lBRXZELGNBQWM7SUFDZCxTQUFTO0lBQ1QsUUFBUTtJQUNSLE1BQU07O0lBRU4sV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNGO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO1FBQ2YsdURBQXVEOzs7OztRQUt2RCxzQkFBc0I7O0FBRTlCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd293IHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDYyRTYsICMzM0FFRkYpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogIzAwN2JmZjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNjJFNiwgIzMzQUVGRik7XHJcblxyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGxlZnQ6MDtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbmJ1dHRvbntcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuaHRtbHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA2MkU2LCAjMzNBRUZGKTtcclxuICAgIFxyXG5cclxuICAgICBcclxuICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/main-menu/main-menu.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body  id=\"wow\" >\r\n\r\n    <div  class=\" container d-flex p-3 mx-auto flex-column\">\r\n        <div class = \"column \">\r\n            <div class = \"row m-5\">\r\n                <button type=\"button\" class=\"col btn btn-light \" (click)=\"goToEventCreator()\">\r\n                        <i class=\"far fa-calendar-plus mr-1\"></i>\r\n                    Create new Event</button></div>\r\n            <div class = \"row  m-5\">\r\n                <button type=\"button\" class=\"col btn btn-light\" (click)=\"goToParticipantRegistry()\">\r\n                    <i class=\"far fa-address-card mr-1\"></i>  \r\n                    Register new Participant</button>\r\n            </div>\r\n            <div class = \"row  m-5\"> \r\n                    <button type=\"button\" class=\"col btn btn-light\" (click)=\"goToParticipantLookup()\"> <i class=\"far fa-address-book mr-1\"></i> Participant Lookup</button></div>\r\n        </div>\r\n    </div>\r\n</body>"

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

module.exports = "ul {\r\n  list-style: none;\r\n  border-bottom: 1px solid #bbbb;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  display: inline-block;\r\n  margin-right: 20px;\r\n}\r\n\r\nnav{\r\nz-index: 10;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBQ0E7QUFDQSxXQUFXO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiYmJiO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5saSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5uYXZ7XHJcbnotaW5kZXg6IDEwO1xyXG59XHJcbiJdfQ== */"

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
    function NavigationComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavigationComponent.prototype.ngOnInit = function () {
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
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "label{\r\n  width: 9em;\r\n}\r\n/*textarea{\r\n  height: 5em;\r\n  width: 20em;\r\n}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXctZXZlbnQvbmV3LWV2ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTs7O0VBR0UiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ldy1ldmVudC9uZXctZXZlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVse1xyXG4gIHdpZHRoOiA5ZW07XHJcbn1cclxuLyp0ZXh0YXJlYXtcclxuICBoZWlnaHQ6IDVlbTtcclxuICB3aWR0aDogMjBlbTtcclxufSovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/new-event/new-event.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/new-event/new-event.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\" id=\"event-creation\">\r\n  <form #eventForm=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\r\n    <div>\r\n      <label for=\"count\">Player Count: </label>\r\n      <input type=\"number\" name=\"count\" id=\"count\" min=\"2\" value=\"2\" [(ngModel)]=\"newEvent.player_count\" required>\r\n    </div>\r\n    <div>\r\n      <label for=\"type\">Event Type: </label>\r\n      <select name=\"type\" id=\"type\" [(ngModel)]=\"newEvent.evt_type\" required>\r\n        <option ng-selected=\"selected\" value=\"Custom\">Custom</option>\r\n        <option value=\"Single Elimination\">Single Elimination</option>\r\n        <option value=\"Double Elimination\">Double Elimination</option>\r\n        <option value=\"Swiss\">Swiss</option>\r\n        <option value=\"Round Robin\">Round Robin</option>\r\n      </select>\r\n    </div>\r\n    <div>\r\n      <label for=\"description\" style=\"vertical-align: top;\">Event Description: </label>\r\n      <textarea name=\"description\" id=\"description\" placeholder=\"Event Description\" [(ngModel)]=\"newEvent.evt_desc\" required></textarea>\r\n    </div>\r\n    <div>\r\n      <button type=\"submit\" [disabled]=\"!eventForm.valid\">Submit</button>\r\n      <button type=\"reset\">Reset</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

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
/* harmony import */ var _model_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/event */ "./src/app/model/event.ts");



var NewEventComponent = /** @class */ (function () {
    function NewEventComponent() {
        this.newEvent = new _model_event__WEBPACK_IMPORTED_MODULE_2__["Event"]();
        this.in_progress = true;
        this.newOrganizer = JSON.parse(localStorage.getItem('authToken'));
    }
    NewEventComponent.prototype.ngOnInit = function () {
    };
    NewEventComponent.prototype.onSubmit = function () {
        var organizer = JSON.parse(localStorage.getItem('authToken'));
        console.log("Organizer test: ", organizer);
        var organizerId = JSON.parse(localStorage.getItem('authToken')).id;
        console.log("Id test: ", organizerId);
        this.newEvent.organizer_id = this.newOrganizer.managerId;
        console.log("Organizer id: ", this.newEvent.organizer_id, " player count: ", this.newEvent.player_count);
        console.log("Event Type: ", this.newEvent.evt_type, " Event Description: ", this.newEvent.evt_desc);
        if (this.newEvent.in_progress == true) {
            console.log("Tournament is currently in progress");
        }
        else
            console.log("Tournament is not currently in progress");
        console.log(this.newOrganizer);
        console.log(this.newOrganizer.managerId);
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

module.exports = ".margin-left{\r\n    margin-left: 40px !important;\r\n}\r\n#btn{\r\n    margin-right: 34px;\r\n}\r\n/* #participant-registration{ */\r\n#changeme{\r\n background: radial-gradient(#fd6119, #682d00);\r\nbackground-size: 150% 100%;\r\n    }\r\n#pad{\r\n    padding-top: 5%;\r\n}\r\n#fullpage{\r\n    position:fixed;\r\n    padding:0;\r\n    margin:0;\r\n\r\n\r\n    left:0;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n#shiftdown{\r\n    padding: 15px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWNpcGFudC1yZWdpc3Rlci9wYXJ0aWNpcGFudC1yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFHQSwrQkFBK0I7QUFDM0I7Q0FDSCw2Q0FBNkM7QUFDOUMsMEJBQTBCO0lBQ3RCO0FBQ0o7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxjQUFjO0lBQ2QsU0FBUztJQUNULFFBQVE7OztJQUdSLE1BQU07O0lBRU4sV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGFBQWE7RUFDZixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhcnRpY2lwYW50LXJlZ2lzdGVyL3BhcnRpY2lwYW50LXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLWxlZnR7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiNidG57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM0cHg7XHJcbn1cclxuXHJcblxyXG4vKiAjcGFydGljaXBhbnQtcmVnaXN0cmF0aW9ueyAqL1xyXG4gICAgI2NoYW5nZW1le1xyXG4gYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCNmZDYxMTksICM2ODJkMDApO1xyXG5iYWNrZ3JvdW5kLXNpemU6IDE1MCUgMTAwJTtcclxuICAgIH1cclxuI3BhZHtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxufVxyXG5cclxuI2Z1bGxwYWdle1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtYXJnaW46MDtcclxuXHJcblxyXG4gICAgbGVmdDowO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jc2hpZnRkb3due1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/participant-register/participant-register.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/participant-register/participant-register.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"bg-primary bg\" id=fullpage>\r\n  <div class=\"row justify-content-center align-items-center\">\r\n    <div class=\"col-10 col-sm-2 col-md-6\" id=pad>\r\n      <div class=\"card mt-sm-3 mb-sm-5 \" id=\"my-preview-div\">\r\n        <div class=\"form-container w-400 p-3 h-150 \" id=\"shiftdown\">\r\n            <button type=\"button\" class=\"btn btn-light\"> <i class=\"fas fa-angle-left\"></i> </button>\r\n          <h4 class=\" pb-3 section one text-center \">Participant Registration</h4>\r\n          <form class=\"pb-3\" #participantForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n              <label for=\"firstName\">First Name: </label>\r\n              <input type=\"text\" id=\"firstName\" class=\"form-control\" placeholder= \"Bobby\"[(ngModel)]=\"newParticipant.firstName\" name=\"firstName\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"lastName\">Last Name: </label>\r\n              <input type=\"text\" id=\"lastName\"  class=\"form-control\" placeholder= \"Kernel\"[(ngModel)]=\"newParticipant.lastName\" name=\"lastName\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email: </label>\r\n              <input type=\"email\" id=\"email\"  class=\"form-control\" placeholder= \"BobbyK@gmail.com\"[(ngModel)]=\"newParticipant.email\" name=\"email\" required>\r\n            </div>\r\n            <div class=\"btn-toolbar d-flex justify-content-around\"> \r\n              <button  class=\"btn btn-success btn-sm col m-3\" type=\"button\" id=\"submit\" (click)=\"createReturn()\" [disabled]=\"!participantForm.form.valid\"> Submit</button>\r\n              <button  class=\"btn btn-danger btn-sm col m-3\"type=\"button\" id=\"reset\" >Reset</button>\r\n              <button  class=\"btn btn-info btn-sm col m-3\"  type=\"button\" id=\"loop\" (click)=\"createContinue(participantForm)\">Sumbit and add new participant</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

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
/* harmony import */ var _model_participant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/participant */ "./src/app/model/participant.ts");
/* harmony import */ var _services_participant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/participant.service */ "./src/app/services/participant.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var ParticipantRegisterComponent = /** @class */ (function () {
    function ParticipantRegisterComponent(participantService, location) {
        this.participantService = participantService;
        this.location = location;
        this.newParticipant = new _model_participant__WEBPACK_IMPORTED_MODULE_2__["Participant"];
    }
    ParticipantRegisterComponent.prototype.ngOnInit = function () {
        this.newParticipant.firstName = '';
        this.newParticipant.lastName = '';
        this.newParticipant.email = '';
    };
    ParticipantRegisterComponent.prototype.createReturn = function () {
        var _this = this;
        localStorage.setItem('newParticipant', JSON.stringify(this.newParticipant));
        this.participantService.registerParticipant(function () {
            _this.location.back();
        }, function (err) {
            console.log(err);
        });
    };
    ParticipantRegisterComponent.prototype.createContinue = function (participantForm) {
        var _this = this;
        localStorage.setItem('newParticipant', JSON.stringify(this.newParticipant));
        this.participantService.registerParticipant(function () {
            _this.newParticipant = new _model_participant__WEBPACK_IMPORTED_MODULE_2__["Participant"];
            participantForm.resetForm();
        }, function (err) {
            console.log(err);
        });
    };
    ParticipantRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-participant-register',
            template: __webpack_require__(/*! ./participant-register.component.html */ "./src/app/components/participant-register/participant-register.component.html"),
            styles: [__webpack_require__(/*! ./participant-register.component.css */ "./src/app/components/participant-register/participant-register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_participant_service__WEBPACK_IMPORTED_MODULE_3__["ParticipantService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
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

module.exports = "ul {\r\n  list-style: none;\r\n}\r\ni,input{\r\n  float: right;\r\n  padding: 6px;\r\n  margin-top: 8px;\r\n  margin-right: 16px;\r\n  border: none;\r\n  font-size: 17px;\r\n}\r\n#search{\r\n  padding-top: 10px;\r\n}\r\n#back{\r\n  margin-top:3px;\r\n  padding-left:20px;\r\n /* padding-bottom:3px; */\r\n}\r\n/* tr:nth-child(odd)   { background-color:#4285F4; } */\r\ntr:nth-child(even)    { background-color:#E2E9FF; }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWNpcGFudC1zZWFyY2gvcGFydGljaXBhbnQtc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0NBQ2xCLHdCQUF3QjtBQUN6QjtBQUNBLHNEQUFzRDtBQUN0RCx3QkFBd0Isd0JBQXdCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhcnRpY2lwYW50LXNlYXJjaC9wYXJ0aWNpcGFudC1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmksaW5wdXR7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuI3NlYXJjaHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4jYmFja3tcclxuICBtYXJnaW4tdG9wOjNweDtcclxuICBwYWRkaW5nLWxlZnQ6MjBweDtcclxuIC8qIHBhZGRpbmctYm90dG9tOjNweDsgKi9cclxufVxyXG4vKiB0cjpudGgtY2hpbGQob2RkKSAgIHsgYmFja2dyb3VuZC1jb2xvcjojNDI4NUY0OyB9ICovXHJcbnRyOm50aC1jaGlsZChldmVuKSAgICB7IGJhY2tncm91bmQtY29sb3I6I0UyRTlGRjsgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/participant-search/participant-search.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/participant-search/participant-search.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5\">\r\n  <h1 class=\"d-flex justify-content-center\"> Participation Lookup</h1>\r\n    <button type=\"button\"  (click)=\"goBack()\" class=\"btn btn-light\"> <i id=\"back\" class=\"fas fa-angle-left\"></i> </button>\r\n  <i id =\"search\"class=\"fas fa-search \"></i>\r\n  <input class =\" \"[(ngModel)]=\"searchText\" placeholder=\"Participant Name\">\r\n</div>\r\n<div>\r\n<table class=\"table table-hover\">\r\n    <thead class=\"thead-dark\">\r\n  <tr>\r\n    <th scope=\"col\">Id</th><th scope=\"col\">Name</th>\r\n  </tr>\r\n    </thead>\r\n  <tr scope=\"row\" *ngFor=\"let p of participants | searchUtil : 'name' : searchText; let i = index\">\r\n    <td>{{p.player_Id}}</td>\r\n    <td>{{p.firstName}} {{p.lastName}}</td>\r\n  </tr>\r\n</table>\r\n\r\n</div>\r\n"

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
            localStorage.removeItem('participants');
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
    ParticipantSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-participant-search',
            template: __webpack_require__(/*! ./participant-search.component.html */ "./src/app/components/participant-search/participant-search.component.html"),
            styles: [__webpack_require__(/*! ./participant-search.component.css */ "./src/app/components/participant-search/participant-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_participant_service__WEBPACK_IMPORTED_MODULE_2__["ParticipantService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], ParticipantSearchComponent);
    return ParticipantSearchComponent;
}());



/***/ }),

/***/ "./src/app/components/tournament-item/tournament-item.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/tournament-item/tournament-item.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG91cm5hbWVudC1pdGVtL3RvdXJuYW1lbnQtaXRlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/tournament-item/tournament-item.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/tournament-item/tournament-item.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<tr>-->\n  <!--<td>Joe Milne</td><td>VS.</td><td>Chris Oberg</td><td><input type=\"number\" value=\"0\" style=\"width: 4em; float: right;\"/></td><td><input type=\"number\" value=\"0\" style=\"width: 4em; float: right;\"/></td><td><input type=\"checkbox\" style=\"margin-left: 30%;\" required/></td>-->\n<!--</tr>-->\n\n<form>\n  <div>\n    <table>\n      <tr>\n        <th>Player 1</th><th>VS.</th><th>Player 2</th><th>Player 1 Wins:</th><th>Player 2 Wins:</th><th>Lock result</th>\n      </tr>\n      <tr>\n        <td>Joe Milne</td><td>VS.</td><td>Chris Oberg</td><td><input type=\"number\" value=\"0\" style=\"width: 4em; float: right;\"/></td><td><input type=\"number\" value=\"0\" style=\"width: 4em; float: right;\"/></td><td><input type=\"checkbox\" style=\"margin-left: 30%;\" required/></td>\n      </tr>\n      <!--<app-tournament-item></app-tournament-item>-->\n    </table>\n  </div>\n  <button type=\"button\" [disabled]=\"true\">Submit round results</button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/tournament-item/tournament-item.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/tournament-item/tournament-item.component.ts ***!
  \*************************************************************************/
/*! exports provided: TournamentItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentItemComponent", function() { return TournamentItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TournamentItemComponent = /** @class */ (function () {
    function TournamentItemComponent() {
    }
    TournamentItemComponent.prototype.ngOnInit = function () {
    };
    TournamentItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tournament-item',
            template: __webpack_require__(/*! ./tournament-item.component.html */ "./src/app/components/tournament-item/tournament-item.component.html"),
            styles: [__webpack_require__(/*! ./tournament-item.component.css */ "./src/app/components/tournament-item/tournament-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TournamentItemComponent);
    return TournamentItemComponent;
}());



/***/ }),

/***/ "./src/app/components/tournament/tournament.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/tournament/tournament.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG91cm5hbWVudC90b3VybmFtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/tournament/tournament.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/tournament/tournament.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tournament works!\n</p>\n<app-tournament-item></app-tournament-item>\n<!--<form>\n  <div>\n    <table>\n      <tr>\n        <th>Player 1</th><th>VS.</th><th>Player 2</th><th>Player 1 Wins:</th><th>Player 2 Wins:</th><th>Lock result</th>\n      </tr>\n      &lt;!&ndash;<tr>\n        <td>Joe Milne</td><td>VS.</td><td>Chris Oberg</td><td><input type=\"number\" value=\"0\" style=\"width: 4em; float: right;\"/></td><td><input type=\"number\" value=\"0\" style=\"width: 4em; float: right;\"/></td><td><input type=\"checkbox\" style=\"margin-left: 30%;\" required/></td>\n      </tr>&ndash;&gt;\n      <app-tournament-item></app-tournament-item>\n    </table>\n  </div>\n  <button type=\"button\" [disabled]=\"true\">Submit round results</button>\n</form>-->\n"

/***/ }),

/***/ "./src/app/components/tournament/tournament.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/tournament/tournament.component.ts ***!
  \***************************************************************/
/*! exports provided: TournamentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentComponent", function() { return TournamentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TournamentComponent = /** @class */ (function () {
    function TournamentComponent() {
    }
    TournamentComponent.prototype.ngOnInit = function () {
    };
    TournamentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tournament',
            template: __webpack_require__(/*! ./tournament.component.html */ "./src/app/components/tournament/tournament.component.html"),
            styles: [__webpack_require__(/*! ./tournament.component.css */ "./src/app/components/tournament/tournament.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TournamentComponent);
    return TournamentComponent;
}());



/***/ }),

/***/ "./src/app/model/event.ts":
/*!********************************!*\
  !*** ./src/app/model/event.ts ***!
  \********************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event = /** @class */ (function () {
    function Event() {
        this.in_progress = true;
    }
    return Event;
}());



/***/ }),

/***/ "./src/app/model/organizer.ts":
/*!************************************!*\
  !*** ./src/app/model/organizer.ts ***!
  \************************************/
/*! exports provided: Organizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Organizer", function() { return Organizer; });
var Organizer = /** @class */ (function () {
    function Organizer() {
    }
    return Organizer;
}());



/***/ }),

/***/ "./src/app/model/participant.ts":
/*!**************************************!*\
  !*** ./src/app/model/participant.ts ***!
  \**************************************/
/*! exports provided: Participant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Participant", function() { return Participant; });
var Participant = /** @class */ (function () {
    function Participant() {
    }
    return Participant;
}());



/***/ }),

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

/***/ "./src/app/services/organizer.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/organizer.service.ts ***!
  \***********************************************/
/*! exports provided: OrganizerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizerService", function() { return OrganizerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var OrganizerService = /** @class */ (function () {
    function OrganizerService(http) {
        this.http = http;
        this.organizerUrl = 'http://localhost:8080/organizer';
    }
    OrganizerService.prototype.registerOrganizer = function (newOrganizer, success, fail) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        var options = { headers: headers };
        return this.http.post(this.organizerUrl + '/addorganizer', newOrganizer, options).toPromise()
            .then(function (resp) {
            success();
        }, function (err) {
            fail(err);
        });
    };
    OrganizerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrganizerService);
    return OrganizerService;
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
        this.participantUrl = 'http://localhost:8080/player';
    }
    ParticipantService.prototype.getAllParticipants = function (success, fail) {
        return this.http.get(this.participantUrl + '/players').toPromise()
            .then(function (resp) {
            localStorage.setItem('participants', JSON.stringify(resp));
            console.log('Got Participants');
            success();
        }, function (err) {
            fail(err);
        });
    };
    ParticipantService.prototype.registerParticipant = function (success, fail) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        var options = { headers: headers };
        var newParticipant = JSON.parse(localStorage.getItem('newParticipant'));
        return this.http.post(this.participantUrl + '/addplayer', JSON.stringify(newParticipant), options).toPromise()
            .then(function (resp) {
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

module.exports = __webpack_require__(/*! C:\Users\Star\Desktop\project_2\project2\TournamentManager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map