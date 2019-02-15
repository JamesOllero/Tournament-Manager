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
/* harmony import */ var _components_account_creation_account_creation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/account-creation/account-creation.component */ "./src/app/components/account-creation/account-creation.component.ts");
/* harmony import */ var _components_tournament_tournament_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tournament/tournament.component */ "./src/app/components/tournament/tournament.component.ts");
/* harmony import */ var _components_seeding_seeding_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/seeding/seeding.component */ "./src/app/components/seeding/seeding.component.ts");













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
                    },
                    {
                        path: 'active',
                        component: _components_tournament_tournament_component__WEBPACK_IMPORTED_MODULE_11__["TournamentComponent"]
                    },
                    {
                        path: 'seeding',
                        component: _components_seeding_seeding_component__WEBPACK_IMPORTED_MODULE_12__["SeedingComponent"]
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
    //   path: '',
    //   component: NewEventComponent
    // },
    {
        path: 'registration',
        component: _components_account_creation_account_creation_component__WEBPACK_IMPORTED_MODULE_10__["AccountCreationComponent"]
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
/* harmony import */ var _components_seeding_seeding_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/seeding/seeding.component */ "./src/app/components/seeding/seeding.component.ts");



















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
                _components_tournament_item_tournament_item_component__WEBPACK_IMPORTED_MODULE_17__["TournamentItemComponent"],
                _components_seeding_seeding_component__WEBPACK_IMPORTED_MODULE_18__["SeedingComponent"]
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

module.exports = "<div class=\"bg-primary bg\" id=fullpage>\r\n  <div class=\"row justify-content-center align-items-center\">\r\n    <div class=\"col-10 col-sm-2 col-md-6\" id=pad>\r\n      <div class=\"card mt-sm-3 mb-sm-5 \" id=\"my-preview-div\">\r\n\r\n        <div class=\"form-container w-400 p-3 h-150\" id=\"organizer-registration\">\r\n          <button type=\"button\" class=\"btn btn-light\" (click)=\"redirect()\"> <i class=\"fas fa-angle-left\"></i> </button>\r\n          <h4 class=\" pb-3 section one text-center \">Account Creation</h4>\r\n          <form #organizerForm=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\r\n            <div>\r\n              <label for=\"username\">Username: </label>\r\n              <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"Username\" [(ngModel)]=\"newOrganizer.username\" required>\r\n            </div>\r\n            <div>\r\n              <label for=\"password\">Password: </label>\r\n              <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Password\" [(ngModel)]=\"newOrganizer.password\" required>\r\n            </div>\r\n            <div>\r\n              <label for=\"email\">E-mail: </label>\r\n              <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Email\" [(ngModel)]=\"newOrganizer.email\" required>\r\n            </div>\r\n            <div class=\"btn-toolbar d-flex justify-content-around\">\r\n              <button  class=\"btn btn-success btn-sm col m-3\" type=\"button\" [disabled]=\"!organizerForm.valid\">Submit</button>\r\n              <button  class=\"btn btn-danger btn-sm col m-3\" type=\"button\">Reset</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
    AccountCreationComponent.prototype.ngOnInit = function () { };
    AccountCreationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.organizerService.registerOrganizer(this.newOrganizer, function () {
            _this.location.back();
        }, function (err) {
            console.log(err);
        });
    };
    AccountCreationComponent.prototype.redirect = function () {
        this.location.back();
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

module.exports = "\r\n\r\n  :root {\r\n    --input-padding-x: 1.5rem;\r\n    --input-padding-y: .75rem;\r\n  }\r\n  \r\n  body {\r\n    background: #007bff;\r\n    background: linear-gradient(to right, #0062E6, #33AEFF);\r\n\r\n    position:fixed;\r\n    padding:0;\r\n    margin:0;\r\n\r\n    top:0;\r\n    left:0;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  \r\n  .card-signin {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  .card-signin .card-title {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .card-signin .card-body {\r\n    padding: 2rem;\r\n  }\r\n  \r\n  .form-signin {\r\n    width: 100%;\r\n  }\r\n  \r\n  .form-signin .btn {\r\n    font-size: 80%;\r\n    border-radius: 5rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n    transition: all 0.2s;\r\n  }\r\n  \r\n  .form-label-group {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .form-label-group input {\r\n    height: auto;\r\n    border-radius: 2rem;\r\n  }\r\n  \r\n  .form-label-group>input,\r\n  .form-label-group>label {\r\n    padding: var(--input-padding-y) var(--input-padding-x);\r\n  }\r\n  \r\n  .form-label-group>label {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n    /* Override default `<label>` margin */\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    transition: all .1s ease-in-out;\r\n  }\r\n  \r\n  .form-label-group input::-webkit-input-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::-ms-input-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input:not(:placeholder-shown) {\r\n    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n  }\r\n  \r\n  .form-label-group input:not(:placeholder-shown)~label {\r\n    padding-top: calc(var(--input-padding-y) / 3);\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n    font-size: 12px;\r\n    color: #777;\r\n  }\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBRUU7SUFDRSx5QkFBeUI7SUFDekIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHVEQUF1RDs7SUFFdkQsY0FBYztJQUNkLFNBQVM7SUFDVCxRQUFROztJQUVSLEtBQUs7SUFDTCxNQUFNOztJQUVOLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDhDQUE4QztFQUNoRDs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjs7RUFFQTs7SUFFRSxzREFBc0Q7RUFDeEQ7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFNQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFNQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLDRFQUE0RTtJQUM1RSxnREFBZ0Q7RUFDbEQ7O0VBRUE7SUFDRSw2Q0FBNkM7SUFDN0MsZ0RBQWdEO0lBQ2hELGVBQWU7SUFDZixXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAgOnJvb3Qge1xyXG4gICAgLS1pbnB1dC1wYWRkaW5nLXg6IDEuNXJlbTtcclxuICAgIC0taW5wdXQtcGFkZGluZy15OiAuNzVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogIzAwN2JmZjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNjJFNiwgIzMzQUVGRik7XHJcblxyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtYXJnaW46MDtcclxuXHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtc2lnbmluIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1zaWduaW4gLmNhcmQtdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtc2lnbmluIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tc2lnbmluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1zaWduaW4gLmJ0biB7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXA+aW5wdXQsXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xyXG4gICAgcGFkZGluZzogdmFyKC0taW5wdXQtcGFkZGluZy15KSB2YXIoLS1pbnB1dC1wYWRkaW5nLXgpO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICsgdmFyKC0taW5wdXQtcGFkZGluZy15KSAqICgyIC8gMykpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKX5sYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICB9XHJcbiAgXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <body>\r\n   \r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n            <div class=\"card card-signin my-5\" id=\"login-form\"> \r\n              <div class=\"card-body form-container\">\r\n                <h5 class=\"card-title text-center\">Sign In</h5>\r\n                <form class=\"form-signin\" #loginForm=\"ngForm\" novalidate (ngSubmit)=\"loginSubmit()\">\r\n                  <div class=\"form-label-group h-50\">\r\n                    <input style=\"height:50px; padding-left:17px\" type=\"email\" name=\"user_email\" id=\"inputEmail\" class=\"form-control \" placeholder=\"email\" [(ngModel)]=\"username\" required autofocus>\r\n                    <label for=\"inputEmail\" class =\" ml-3\">Email address</label>\r\n                  </div>\r\n                  <div class=\"form-label-group\">\r\n                    <input style=\"height:50px; padding-left:17px\" type=\"password\"  [(ngModel)]=\"password\"  name=\"password\" id=\"inputPassword\" class=\"form-control \" placeholder=\"Password\" required>\r\n                    <label for=\"inputPassword\" class =\"ml-3\">Password</label>\r\n                  </div>\r\n                  <button [disabled]=\"!loginForm.valid\" class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">Sign in</button>\r\n                  <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"button\" (click)=\"accountCreation()\">Create new account</button>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </body>\r\n\r\n\r\n"

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

module.exports = "<body  id=\"wow\" >\r\n\r\n    <div  class=\" container d-flex p-3 mx-auto flex-column\">\r\n        <div class = \"column \">\r\n            <div class = \"row m-5\">\r\n                \r\n                <button type=\"button\" class=\"col btn btn-light \" (click)=\"goToEventCreator()\">\r\n                        <i class=\"far fa-calendar-plus mr-1\"></i>\r\n                    Create new Event</button></div>\r\n            <div class = \"row  m-5\">\r\n                <button type=\"button\" class=\"col btn btn-light\" (click)=\"goToParticipantRegistry()\">\r\n                    <i class=\"far fa-address-card mr-1\"></i>  \r\n                    Register new Participant</button>\r\n            </div>\r\n            <div class = \"row  m-5\"> \r\n                    <button type=\"button\" class=\"col btn btn-light\" (click)=\"goToParticipantLookup()\"> <i class=\"far fa-address-book mr-1\"></i> Participant Lookup</button></div>\r\n        </div>\r\n    </div>\r\n</body>"

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

module.exports = "ul {\r\n  list-style: none;\r\n  border-bottom: 1px solid #bbbb;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  display: inline-block;\r\n  margin-right: 20px;\r\n}\r\n\r\nnav{\r\nz-index: 10;\r\n}\r\n\r\n#logout{\r\n  float: right;\r\n  margin-right: 20px;\r\n  margin-top: 5px;\r\n  padding: 0;\r\nborder: none;\r\nbackground: none;\r\ncolor:red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixVQUFVO0FBQ1osWUFBWTtBQUNaLGdCQUFnQjtBQUNoQixTQUFTO0FBQ1QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiYmJiO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5saSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5uYXZ7XHJcbnotaW5kZXg6IDEwO1xyXG59XHJcbiNsb2dvdXR7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgcGFkZGluZzogMDtcclxuYm9yZGVyOiBub25lO1xyXG5iYWNrZ3JvdW5kOiBub25lO1xyXG5jb2xvcjpyZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <ul>\r\n    <li *ngFor=\"let item of navItems\">\r\n      <a [routerLink]=[item.link] class=\"nav-link\">{{item.title}}</a>\r\n      \r\n    </li>\r\n    <button (click)=\"logout()\" id=\"logout\"><i class=\"fas fa-sign-out-alt\"></i>Logout</button>\r\n  </ul>\r\n</nav>\r\n"

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

module.exports = "/* label{\r\n  width: 9em;\r\n}\r\n/*textarea{\r\n  height: 5em;\r\n  width: 20em;\r\n}*/\r\n\r\n#pad{\r\n  padding-top: 5%;\r\n}\r\n\r\n#bar{\r\n  position: absolute;\r\n  padding:0;\r\n  margin:0;\r\n\r\n  background: #007bff;\r\n  background: linear-gradient(to right, #0062E6, #33AEFF);\r\n  left:0;\r\n\r\n  width: 100%;\r\n  height: 100%;\r\n  font-size: 1.25em;\r\n \r\n}\r\n\r\nselect, textarea{\r\n  border: none;\r\n  background-color:rgb(181, 213, 255);\r\n\r\n}\r\n\r\n#center {\r\n  margin: auto;\r\n  width: 50%;\r\n  \r\n  padding: 10px;\r\n}\r\n\r\n#my-preview-div{\r\n  width: -webkit-max-content;\r\n  width: -moz-max-content;\r\n  width: max-content;\r\n  background-color: white;\r\n  \r\n}\r\n\r\n/* option:nth-child(odd)   { background-color:rgb(181, 213, 255); }\r\noption:nth-child(even)    { background-color:white; } */\r\n\r\n.scroll {\r\n  \r\n  overflow-y: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXctZXZlbnQvbmV3LWV2ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztFQU1FOztBQUVGO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTs7RUFFUixtQkFBbUI7RUFDbkIsdURBQXVEO0VBQ3ZELE1BQU07O0VBRU4sV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7O0FBRW5COztBQUNBO0VBQ0UsWUFBWTtFQUNaLG1DQUFtQzs7QUFFckM7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTs7RUFFVixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQix1QkFBdUI7O0FBRXpCOztBQUNBO3VEQUN1RDs7QUFHdkQ7O0VBRUUsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uZXctZXZlbnQvbmV3LWV2ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBsYWJlbHtcclxuICB3aWR0aDogOWVtO1xyXG59XHJcbi8qdGV4dGFyZWF7XHJcbiAgaGVpZ2h0OiA1ZW07XHJcbiAgd2lkdGg6IDIwZW07XHJcbn0qL1xyXG5cclxuI3BhZHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuXHJcbiNiYXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6MDtcclxuICBtYXJnaW46MDtcclxuXHJcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDYyRTYsICMzM0FFRkYpO1xyXG4gIGxlZnQ6MDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gXHJcbn1cclxuc2VsZWN0LCB0ZXh0YXJlYXtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTgxLCAyMTMsIDI1NSk7XHJcblxyXG59XHJcbiNjZW50ZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG4gIFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuI215LXByZXZpZXctZGl2e1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBcclxufVxyXG4vKiBvcHRpb246bnRoLWNoaWxkKG9kZCkgICB7IGJhY2tncm91bmQtY29sb3I6cmdiKDE4MSwgMjEzLCAyNTUpOyB9XHJcbm9wdGlvbjpudGgtY2hpbGQoZXZlbikgICAgeyBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlOyB9ICovXHJcblxyXG5cclxuLnNjcm9sbCB7XHJcbiAgXHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/new-event/new-event.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/new-event/new-event.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"bar\" class=\"bg-primary\">\r\n    \r\n\r\n  <div class=\"d-flex justify-content-center\" id=pad>\r\n    <div class=\"card p-4 \" id=\"my-preview-div\">\r\n\r\n      <div class=\"d-flex justify-content-center card-body\" id=\"center\">\r\n        <form #eventForm=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\r\n          <button type=\"button\" class=\"btn btn-light\"> <i class=\"fas fa-angle-left\"></i> </button>\r\n          <h1  class=\"d-flex justify-content-center mb-4\" >Customize your event</h1>\r\n\r\n    \r\n    <div>\r\n      <label class=\"mb-4 pr-4\" for=\"type\">Event Type: </label>\r\n      <select name=\"type\" id=\"type\" [(ngModel)]=\"usedFormat\" required>\r\n        <option selected [ngValue]=\"null\" disabled>Choose an Event Type</option>\r\n        <option style=\"background-color: white\" *ngFor=\"let format of formats\" [ngValue]=\"format\">{{format.title}}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"mb-4\">\r\n      <label for=\"description\" style=\"vertical-align: top;\">Event Description: </label>\r\n      <textarea name=\"event-description\" id=\"description\"  class=\"form-control\" placeholder=\"Event Description\" [(ngModel)]=\"evt_desc\" required></textarea>\r\n    </div>\r\n    <div class=\"d-flex justify-content-around mt-4 \">\r\n      <label id=\"player-count\">Player Count: {{playerCount}}</label>\r\n      <label for=\"manualization\">Manually Assign Seeding: <input name=\"manualization\" type=\"checkbox\" id=\"manualization\" [(ngModel)]=\"manual\"></label>\r\n      \r\n    </div>\r\n   \r\n\r\n    \r\n    <div class=\"d-flex justify-content-around\">\r\n      \r\n      <select class=\"m-3 participants\" multiple name=\"entrantSelectable\" [(ngModel)]=\"entrants\" style=\"min-width: 500px\">\r\n        <option *ngFor=\"let participant of participants\" [ngValue]=\"participant\">{{participant.name}}</option>\r\n      </select>\r\n    \r\n      <select class=\"m-3\" multiple name=\"entrantRemovable\" [(ngModel)]=\"removals\" style=\"min-width: 500px\">\r\n        <option *ngFor=\"let entrant of currentEntrants\" [ngValue]=\"entrant\">{{entrant.name}}</option>\r\n      </select>\r\n  </div>\r\n\r\n      <div class=\"d-flex justify-content-around\">\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"addParticipants()\">Add Participants</button>\r\n        <button type=\"button\"  class=\"btn btn-danger\" (click)=\"removeParticipants()\">Remove Participants</button>\r\n      </div>\r\n\r\n          <div class=\"d-flex justify-content-center\">\r\n            <button type=\"sumbit\" class=\"btn btn-primary nt-5 w50\" [disabled]=\"!eventForm.valid\">Submit</button>\r\n          </div>\r\n        </form>\r\n    </div>\r\n\r\n  </div>\r\n  </div>\r\n\r\n</body>\r\n"

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
/* harmony import */ var _services_participant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/participant.service */ "./src/app/services/participant.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/event */ "./src/app/model/event.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");







var NewEventComponent = /** @class */ (function () {
    function NewEventComponent(participantService, router, eventService) {
        this.participantService = participantService;
        this.router = router;
        this.eventService = eventService;
        this.manualSeedUrl = "/main/event/seeding";
        this.randomSeedUrl = "/main/event/active";
        this.playerCount = 0;
        this.entrants = new Array();
        this.currentEntrants = new Array();
        this.removals = new Array();
    }
    NewEventComponent.prototype.ngOnInit = function () {
        this.getParticipants();
        this.formats = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].formats;
        this.submitDisabled = false;
    };
    NewEventComponent.prototype.getParticipants = function () {
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
    NewEventComponent.prototype.addParticipants = function () {
        var i;
        for (i = 0; i < this.entrants.length; i++) {
            this.currentEntrants.push(this.entrants[i]);
            var index = this.participants.indexOf(this.entrants[i]);
            this.participants.splice(index, 1);
        }
        this.entrants = [];
        this.playerCount = this.currentEntrants.length;
    };
    NewEventComponent.prototype.removeParticipants = function () {
        var i;
        for (i = 0; i < this.removals.length; i++) {
            this.participants.push(this.removals[i]);
            var index = this.currentEntrants.indexOf(this.removals[i]);
            this.currentEntrants.splice(index, 1);
        }
        this.removals = [];
        this.playerCount = this.currentEntrants.length;
    };
    // Debugging method
    NewEventComponent.prototype.getEvents = function () {
        this.eventService.getAllEvents(function () {
            console.log('We did the thing');
        }, function (err) {
            console.log(err);
        });
    };
    NewEventComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.playerCount < 2) {
            alert("You don't have enough participants to begin a tournament.\nPlease ensure there are at least two entrants.");
            return;
        }
        var newEvent = new _model_event__WEBPACK_IMPORTED_MODULE_4__["Event"]();
        //newEvent.organizer = JSON.parse(localStorage.getItem('authToken'));
        newEvent.organizers = JSON.parse(localStorage.getItem('authToken'));
        // newEvent.organizerId = JSON.parse(localStorage.getItem('authToken')).managerId;
        console.log(newEvent.organizers);
        newEvent.participants = this.currentEntrants;
        newEvent.eventType = this.usedFormat.title;
        newEvent.in_progress = true;
        newEvent.description = this.evt_desc;
        newEvent.playerNum = this.currentEntrants.length;
        localStorage.setItem('newEvent', JSON.stringify(newEvent));
        this.eventService.postNewEvent(function () {
            _this.eventService.activatePlayers();
            _this.eventService.beginEvent();
            console.log(JSON.parse(localStorage.getItem('newEvent')));
            _this.router.navigateByUrl('/main/event/active');
        }, function (err) {
            console.log(err);
        });
    };
    NewEventComponent.prototype.redirect = function () {
        this.router.navigate(['main']);
    };
    NewEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-event',
            template: __webpack_require__(/*! ./new-event.component.html */ "./src/app/components/new-event/new-event.component.html"),
            styles: [__webpack_require__(/*! ./new-event.component.css */ "./src/app/components/new-event/new-event.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_participant_service__WEBPACK_IMPORTED_MODULE_2__["ParticipantService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"]])
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

module.exports = "<div class=\"bg-primary bg\" id=fullpage>\r\n  <div class=\"row justify-content-center align-items-center\">\r\n    <div class=\"col-10 col-sm-2 col-md-6\" id=pad>\r\n      <div class=\"card mt-sm-3 mb-sm-5 \" id=\"my-preview-div\">\r\n        <div class=\"form-container w-400 p-3 h-150 \" id=\"shiftdown\">\r\n          <button type=\"button\" class=\"btn btn-light\" (click)=\"redirect()\"> <i class=\"fas fa-angle-left\"></i> </button>\r\n          <h4 class=\" pb-3 section one text-center \">Participant Registration</h4>\r\n          <form class=\"pb-3\" #participantForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n              <label for=\"firstName\">First Name: </label>\r\n              <input type=\"text\" id=\"firstName\" class=\"form-control\" placeholder= \"Bobby\"[(ngModel)]=\"newParticipant.firstName\" name=\"firstName\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"lastName\">Last Name: </label>\r\n              <input type=\"text\" id=\"lastName\"  class=\"form-control\" placeholder= \"Kernel\"[(ngModel)]=\"newParticipant.lastName\" name=\"lastName\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email: </label>\r\n              <input type=\"email\" id=\"email\"  class=\"form-control\" placeholder= \"BobbyK@gmail.com\"[(ngModel)]=\"newParticipant.email\" name=\"email\" required>\r\n            </div>\r\n            <div class=\"btn-toolbar d-flex justify-content-around\"> \r\n              <button  class=\"btn btn-success btn-sm col m-3\" type=\"button\" id=\"submit\" (click)=\"createReturn()\" [disabled]=\"!participantForm.form.valid\"> Submit</button>\r\n              <button  class=\"btn btn-danger btn-sm col m-3\"type=\"button\" id=\"reset\" >Reset</button>\r\n              <button  class=\"btn btn-info btn-sm col m-3\"  type=\"button\" id=\"loop\" (click)=\"createContinue(participantForm)\">Sumbit and add new participant</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ParticipantRegisterComponent = /** @class */ (function () {
    function ParticipantRegisterComponent(participantService, location, router) {
        this.participantService = participantService;
        this.location = location;
        this.router = router;
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
    ParticipantRegisterComponent.prototype.redirect = function () {
        this.router.navigate(['main']);
    };
    ParticipantRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-participant-register',
            template: __webpack_require__(/*! ./participant-register.component.html */ "./src/app/components/participant-register/participant-register.component.html"),
            styles: [__webpack_require__(/*! ./participant-register.component.css */ "./src/app/components/participant-register/participant-register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_participant_service__WEBPACK_IMPORTED_MODULE_3__["ParticipantService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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

/***/ "./src/app/components/seeding/seeding.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/seeding/seeding.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VlZGluZy9zZWVkaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/seeding/seeding.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/seeding/seeding.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  seeding works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/seeding/seeding.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/seeding/seeding.component.ts ***!
  \*********************************************************/
/*! exports provided: SeedingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeedingComponent", function() { return SeedingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SeedingComponent = /** @class */ (function () {
    function SeedingComponent() {
    }
    SeedingComponent.prototype.ngOnInit = function () {
    };
    SeedingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seeding',
            template: __webpack_require__(/*! ./seeding.component.html */ "./src/app/components/seeding/seeding.component.html"),
            styles: [__webpack_require__(/*! ./seeding.component.css */ "./src/app/components/seeding/seeding.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SeedingComponent);
    return SeedingComponent;
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

module.exports = "<form>\r\n  <label>Event ID: {{currentEvent.eventId}}</label><br>\r\n  <label>Round Number: {{currentRound.roundNum}}</label>\r\n  <div>\r\n    <table>\r\n      <tr>\r\n        <th>Player 1</th><th>VS.</th><th>Player 2</th><th>Player 1 Score:</th><th>Player 2 Score:</th><th>Lock result</th>\r\n      </tr>\r\n      <tr *ngFor=\"let match of roundMatches\">\r\n        <td>{{match.p1.name}}</td><td>VS.</td><td>{{match.p2.name}}</td><td><input name=\"P1Score\" [(ngModel)]=\"match.p1Score\" type=\"number\" value=\"0\" style=\"width: 4em; float: right;\"/></td><td><input name=\"P2Score\" [(ngModel)]=\"match.p2Score\" type=\"number\" value=\"0\" style=\"width: 4em; float: right;\"/></td><td><input type=\"checkbox\" name=\"lockCheck\" [(ngModel)]=\"match.lock\" style=\"margin-left: 30%;\" required/></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <button type=\"button\" (click)=\"roundSubmit()\">Submit round results</button> <button type=\"button\" (click)=\"finalSubmit()\">Tournament is over</button>\r\n</form>\r\n"

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
/* harmony import */ var _services_matchmaking_matchmaking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/matchmaking/matchmaking.service */ "./src/app/services/matchmaking/matchmaking.service.ts");



var TournamentItemComponent = /** @class */ (function () {
    function TournamentItemComponent(matchmakingService) {
        this.matchmakingService = matchmakingService;
    }
    TournamentItemComponent.prototype.ngOnInit = function () {
        this.currentEvent = JSON.parse(localStorage.getItem('newEvent'));
        var indexing = this.currentEvent.rounds.length;
        this.currentRound = this.currentEvent.rounds[indexing - 1];
        this.roundMatches = this.currentRound.matches;
    };
    TournamentItemComponent.prototype.roundSubmit = function () {
        for (var i in this.roundMatches) {
            if (!this.roundMatches[i].lock) {
                alert("Not all matches locked.");
                return;
            }
        }
        console.log("It's the end of the round!");
        this.matchmakingService.advanceRound(this.currentEvent, this.currentRound, this.roundMatches);
        this.ngOnInit();
        //else if (localStorage.parse('newEvent').type == "Double Elimination"){
        // this.matchmakingService.doubleElim(localStorage.parse('newEvent').participants);
        //}
        // else if (localStorage.parse('newEvent').type == "Swiss") {
        //   this.matchmakingService.Pseudorandom(localStorage.parse('newEvent').participants);
        // }
    };
    TournamentItemComponent.prototype.finalSubmit = function () {
        console.log("It's the final submit!");
        // set inProgress to false!
        // Add
    };
    TournamentItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tournament-item',
            template: __webpack_require__(/*! ./tournament-item.component.html */ "./src/app/components/tournament-item/tournament-item.component.html"),
            styles: [__webpack_require__(/*! ./tournament-item.component.css */ "./src/app/components/tournament-item/tournament-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_matchmaking_matchmaking_service__WEBPACK_IMPORTED_MODULE_2__["MatchmakingService"]])
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

module.exports = "<p>\r\n  This is the tournament!\r\n</p>\r\n<p>\r\n  Below are your round pairings!\r\n</p>\r\n<app-tournament-item></app-tournament-item>\r\n"

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

/***/ "./src/app/model/event-participant.ts":
/*!********************************************!*\
  !*** ./src/app/model/event-participant.ts ***!
  \********************************************/
/*! exports provided: EventParticipant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventParticipant", function() { return EventParticipant; });
var EventParticipant = /** @class */ (function () {
    function EventParticipant() {
    }
    return EventParticipant;
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
    }
    return Event;
}());



/***/ }),

/***/ "./src/app/model/match.ts":
/*!********************************!*\
  !*** ./src/app/model/match.ts ***!
  \********************************/
/*! exports provided: Match */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Match", function() { return Match; });
var Match = /** @class */ (function () {
    function Match() {
    }
    return Match;
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

/***/ "./src/app/model/round.ts":
/*!********************************!*\
  !*** ./src/app/model/round.ts ***!
  \********************************/
/*! exports provided: Round */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Round", function() { return Round; });
var Round = /** @class */ (function () {
    function Round() {
    }
    return Round;
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

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_event_participant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/event-participant */ "./src/app/model/event-participant.ts");
/* harmony import */ var _model_round__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/round */ "./src/app/model/round.ts");
/* harmony import */ var _matchmaking_matchmaking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchmaking/matchmaking.service */ "./src/app/services/matchmaking/matchmaking.service.ts");






var EventService = /** @class */ (function () {
    function EventService(http, matchmakingService) {
        this.http = http;
        this.matchmakingService = matchmakingService;
        this.eventUrl = 'http://localhost:8080/event';
    }
    EventService.prototype.postNewEvent = function (success, fail) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        var options = { headers: headers };
        var newEvent = JSON.parse(localStorage.getItem('newEvent'));
        return this.http.post(this.eventUrl + '/addevent', JSON.stringify(newEvent), options).toPromise()
            .then(function (resp) {
            localStorage.setItem('eventItem', JSON.stringify(resp));
            newEvent.eventId = JSON.parse(localStorage.getItem('eventItem')).id;
            localStorage.removeItem('eventItem');
            localStorage.setItem('newEvent', JSON.stringify(newEvent));
            success();
        }, function (err) {
            fail(err);
        });
    };
    EventService.prototype.getAllEvents = function (success, fail) {
        return this.http.get(this.eventUrl + '/events').toPromise()
            .then(function (resp) {
            localStorage.setItem('allEvents', JSON.stringify(resp));
            console.log('Got Events');
            success();
        }, function (err) {
            fail(err);
        });
    };
    EventService.prototype.activatePlayers = function () {
        var event = JSON.parse(localStorage.getItem('newEvent'));
        var i;
        event.activeParticipants = new Array();
        for (i = 0; i < event.participants.length; i++) {
            var activeParticipant = new _model_event_participant__WEBPACK_IMPORTED_MODULE_3__["EventParticipant"]();
            activeParticipant.participantId = event.participants[i].participantId;
            activeParticipant.localWins = 0;
            activeParticipant.localLosses = 0;
            activeParticipant.localDraws = 0;
            activeParticipant.name = event.participants[i].name;
            activeParticipant.dropped = false;
            activeParticipant.eventId = event.eventId;
            event.activeParticipants.push(activeParticipant);
        }
        localStorage.setItem('newEvent', JSON.stringify(event));
    };
    EventService.prototype.beginEvent = function () {
        var roundOne = new _model_round__WEBPACK_IMPORTED_MODULE_4__["Round"]();
        var event = JSON.parse(localStorage.getItem('newEvent'));
        event.rounds = new Array();
        roundOne.roundId = 1;
        roundOne.participants = event.activeParticipants;
        roundOne.roundNum = 1;
        roundOne.eventId = event.eventId;
        roundOne.current = true;
        roundOne.matches = this.matchmakingService.Random(roundOne.participants);
        event.rounds.push(roundOne);
        localStorage.setItem('newEvent', JSON.stringify(event));
        return;
    };
    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _matchmaking_matchmaking_service__WEBPACK_IMPORTED_MODULE_5__["MatchmakingService"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/matchmaking/matchmaking.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/matchmaking/matchmaking.service.ts ***!
  \*************************************************************/
/*! exports provided: MatchmakingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchmakingService", function() { return MatchmakingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_event_participant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/event-participant */ "./src/app/model/event-participant.ts");
/* harmony import */ var _model_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/match */ "./src/app/model/match.ts");
/* harmony import */ var _model_round__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/round */ "./src/app/model/round.ts");





var MatchmakingService = /** @class */ (function () {
    function MatchmakingService() {
        this.player1 = new Array();
        this.player2 = new Array();
    }
    MatchmakingService_1 = MatchmakingService;
    MatchmakingService.prototype.advanceRound = function (event, round, matches) {
        this.player1 = [];
        this.player2 = [];
        event.activeParticipants = this.compareResults(matches);
        // this.compareResults(matches);
        // event.activeParticipants = this.singleElim(event.activeParticipants);
        console.log("This is after the compareResults method ", event.activeParticipants);
        if (event.eventType === 'Single Elimination') {
            event.activeParticipants = this.singleElim(event.activeParticipants);
        }
        round.current = false;
        console.log("This is from advanceRound method ", event.activeParticipants);
        event.rounds.push(this.generateRound(event.activeParticipants, round));
        localStorage.setItem('newEvent', JSON.stringify(event));
    };
    MatchmakingService.prototype.singleElim = function (people) {
        //console.log(people);
        var winners = people;
        //console.log(winners);
        console.log("I'm in the single Elim method");
        var roundBye;
        if (winners.length % 2 != 0) {
            var set = false;
            while (set == false) {
                var rand = Math.floor(Math.random() * winners.length);
                if (winners[rand].bye == false) {
                    set = true;
                    roundBye = winners[rand].name;
                }
            }
        }
        for (var i = 0; i < winners.length - 1; i += 2) {
            console.log(i);
            if (winners[i].name != roundBye) {
                if (winners[i].localWins > winners[i + 1].localWins) {
                    winners.splice(i + 1, 1);
                    winners[i].localWins++;
                }
                else if (winners[i].localWins < winners[i + 1].localWins) {
                    winners.splice(i, 1);
                    winners[i + 1].localWins++;
                }
                console.log(winners[i].name, " has ", winners[i].localWins, " wins.");
                console.log(winners[i + 1].name, " has ", winners[i + 1].localWins, " wins.");
            }
        }
        return winners;
    };
    // doubleElim(people: Array<Participant>){
    //   // TO-DO
    //   let winners : Array<Participant>;
    //   let losers: Array<Participant>;
    //
    //   return null;
    // }
    MatchmakingService.prototype.randomWeight = function (rando) {
        var rand;
        // let rand: number[];
        // for (let i = 0; i < rando.length; i++){
        //   rand[i] = this.random();
        // }
        // return rand;
    };
    MatchmakingService.prototype.random = function () {
        return Math.pow((Math.random() * 100), (Math.random() * 100));
    };
    MatchmakingService.prototype.pairings = function (people, roundId) {
        var bye = new _model_event_participant__WEBPACK_IMPORTED_MODULE_2__["EventParticipant"]();
        bye.name = "Bye";
        for (var i = people.length - 1; i >= 0; i -= 2) {
            if (i == 0 && people.length % 2 != 0) {
                this.player1.push(people[i]);
                this.player2.push(bye);
            }
            else {
                this.player1.push(people[i]);
                this.player2.push(people[i - 1]);
            }
        }
        var newMatches = new Array();
        for (var i = 0; i < this.player1.length; i++) {
            var match = new _model_match__WEBPACK_IMPORTED_MODULE_3__["Match"]();
            match.p1 = this.player1[i];
            match.p2 = this.player2[i];
            match.p1Score = 0;
            match.p2Score = 0;
            match.roundId = roundId;
            match.lock = false;
            match.p1Drop = false;
            match.p2Drop = false;
            newMatches.push(match);
        }
        return newMatches;
    };
    MatchmakingService.prototype.Pseudorandom = function (people) {
        var sorted;
        for (var i = 0; i < people.length; i += 2) {
            var p1 = people[i];
            var p2 = people[i + 1];
            sorted = people.sort(function (p1, p2) {
                if (MatchmakingService_1.weight(p1) > MatchmakingService_1.weight(p2)) {
                    return 1;
                }
                else if (MatchmakingService_1.weight(p1) < MatchmakingService_1.weight(p2)) {
                    return -1;
                }
                return 0;
            });
        }
        return sorted;
    };
    MatchmakingService.prototype.Random = function (people) {
        var rand = new Array(people.length);
        var randomized = new Array();
        var sorted;
        var _loop_1 = function (i) {
            rand[i] = this_1.random();
            rand[i + 1] = this_1.random();
            var p1 = people[i];
            var p2 = people[i + 1];
            sorted = people.sort(function (p1, p2) {
                if (rand[i] > rand[i + 1]) {
                    return 1;
                }
                else if (rand[i] < rand[i + 1]) {
                    return -1;
                }
                return 0;
            });
        };
        var this_1 = this;
        for (var i = 0; i < people.length; i += 2) {
            _loop_1(i);
        }
        for (var i = 0; i < sorted.length; i += 2) {
            var match = new _model_match__WEBPACK_IMPORTED_MODULE_3__["Match"]();
            match.p1 = sorted[i];
            match.p2 = sorted[i + 1];
            match.p1Drop = false;
            match.p2Drop = false;
            match.lock = false;
            match.p1Score = 0;
            match.p2Score = 0;
            match.roundId = 1;
            randomized.push(match);
        }
        return randomized;
    };
    MatchmakingService.weight = function (p) {
        var result;
        var total = p.wins + p.losses + p.draws;
        if (total != 0) {
            result = (((p.wins * 3) + p.draws) / total);
        }
        else {
            result = 0;
        }
        return result;
    };
    // This is causing the problem of one person being dropped.
    MatchmakingService.prototype.compareResults = function (matches) {
        console.log("I'm inside the compareResults method!");
        console.log("The matches are as follows: ", matches);
        var array = new Array();
        for (var i in matches) {
            if (matches[i].p1Score > matches[i].p2Score) {
                matches[i].p1.localWins++;
                array.push(matches[i].p1);
                //array.push(matches[i].p2);
                matches[i].p2.localLosses++;
                console.log("Case 1 array: ", array);
            }
            //else if(matches[i].p1Score<matches[i].p2Score){
            else {
                matches[i].p2.localWins++;
                //array.push(matches[i].p1);
                matches[i].p1.localLosses++;
                array.push(matches[i].p2);
                console.log("Case 2 array: ", array);
            }
        }
        console.log("The array compare is returning is this: ", array);
        return array;
    };
    MatchmakingService.prototype.generateRound = function (availableParticipants, oldRound) {
        var newRound = new _model_round__WEBPACK_IMPORTED_MODULE_4__["Round"]();
        newRound.roundId = Math.round(Math.random() * 10);
        newRound.roundNum = oldRound.roundNum + 1;
        newRound.participants = availableParticipants;
        newRound.eventId = oldRound.eventId;
        newRound.matches = this.pairings(newRound.participants, newRound.roundId);
        return newRound;
    };
    var MatchmakingService_1;
    MatchmakingService = MatchmakingService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MatchmakingService);
    return MatchmakingService;
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
    ],
    formats: [
        {
            title: 'Custom',
            type: 'Custom'
        },
        {
            title: 'Single Elimination',
            type: 'Elimination'
        },
        {
            title: 'Double Elimination',
            type: 'Elimination'
        },
        {
            title: 'Swiss',
            type: 'Wide'
        },
        {
            title: 'Round Robin',
            type: 'Wide'
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

module.exports = __webpack_require__(/*! C:\Users\Joe Milne\Desktop\Revature\Project_2\project_2\Project2\TournamentManager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map