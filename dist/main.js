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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_front_page_front_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/front-page/front-page.component */ "./src/app/components/front-page/front-page.component.ts");
/* harmony import */ var _components_house_house_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/house/house.component */ "./src/app/components/house/house.component.ts");
/* harmony import */ var _components_account_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/account/signup/signup.component */ "./src/app/components/account/signup/signup.component.ts");
/* harmony import */ var _components_account_log_off_log_off_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/account/log-off/log-off.component */ "./src/app/components/account/log-off/log-off.component.ts");
/* harmony import */ var _components_account_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/account/login/login.component */ "./src/app/components/account/login/login.component.ts");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/account/account.component */ "./src/app/components/account/account.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'house/:id', component: _components_house_house_component__WEBPACK_IMPORTED_MODULE_3__["HouseComponent"] },
    { path: 'signup', component: _components_account_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'login', component: _components_account_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'log-of', component: _components_account_log_off_log_off_component__WEBPACK_IMPORTED_MODULE_5__["LogOffComponent"] },
    { path: 'account', component: _components_account_account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"] },
    {
        path: '**',
        component: _components_front_page_front_page_component__WEBPACK_IMPORTED_MODULE_2__["FrontPageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_front_page_front_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/front-page/front-page.component */ "./src/app/components/front-page/front-page.component.ts");
/* harmony import */ var _components_front_page_search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/front-page/search/search.component */ "./src/app/components/front-page/search/search.component.ts");
/* harmony import */ var _components_front_page_houses_list_houses_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/front-page/houses-list/houses-list.component */ "./src/app/components/front-page/houses-list/houses-list.component.ts");
/* harmony import */ var _components_house_house_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/house/house.component */ "./src/app/components/house/house.component.ts");
/* harmony import */ var _components_account_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/account/login/login.component */ "./src/app/components/account/login/login.component.ts");
/* harmony import */ var _components_account_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/account/signup/signup.component */ "./src/app/components/account/signup/signup.component.ts");
/* harmony import */ var _components_account_log_off_log_off_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/account/log-off/log-off.component */ "./src/app/components/account/log-off/log-off.component.ts");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/account/account.component */ "./src/app/components/account/account.component.ts");
/* harmony import */ var _components_add_property_add_property_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/add-property/add-property.component */ "./src/app/components/add-property/add-property.component.ts");
/* harmony import */ var _services_houses_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/houses.service */ "./src/app/services/houses.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_front_page_front_page_component__WEBPACK_IMPORTED_MODULE_10__["FrontPageComponent"],
                _components_front_page_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"],
                _components_front_page_houses_list_houses_list_component__WEBPACK_IMPORTED_MODULE_12__["HousesListComponent"],
                _components_house_house_component__WEBPACK_IMPORTED_MODULE_13__["HouseComponent"],
                _components_account_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _components_account_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
                _components_account_log_off_log_off_component__WEBPACK_IMPORTED_MODULE_16__["LogOffComponent"],
                _components_account_account_component__WEBPACK_IMPORTED_MODULE_17__["AccountComponent"],
                _components_add_property_add_property_component__WEBPACK_IMPORTED_MODULE_18__["AddPropertyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"]
            ],
            providers: [_services_houses_service__WEBPACK_IMPORTED_MODULE_19__["HousesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [_components_add_property_add_property_component__WEBPACK_IMPORTED_MODULE_18__["AddPropertyComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/account/account.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/account/account.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"account-container\">\n    <h2 class=\"example-h2\">Account Michal Sisak</h2>\n    <mat-tab-group class=\"demo-tab-group\">\n      <mat-tab label=\"Your houses\">\n        <div class=\"houses-container\">\n            <mat-card *ngFor=\"let house of houses; let i = index\">\n              <mat-card-header>\n                <div mat-card-avatar class=\"example-header-image\" [routerLink]=\"['/house', house.id]\">\n                  <i class=\"material-icons\">beach_access</i>\n                </div>\n                <mat-card-title>{{house.name}}</mat-card-title>\n                <mat-card-subtitle>{{house.address.city}}</mat-card-subtitle>\n              </mat-card-header>\n              <img mat-card-image src=\"../../../../assets/{{ i + 1}}.PNG\" alt=\"Photo of a Shiba Inu\">\n              <mat-card-content>\n                <i class=\"material-icons\">pets</i>\n                <i class=\"material-icons\">child_care</i>\n                <p>{{house.price}}€/night</p>\n              </mat-card-content>\n              <mat-card-actions>\n                <button mat-button><i class=\"material-icons\">edit</i></button>\n                <button mat-button (click)=\"initDelete(i, house._id)\"><i class=\"material-icons\">delete</i></button>\n              </mat-card-actions>\n            </mat-card>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"History rentals\">\n        <div class=\"demo-tab-content\">\n          <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n          </mat-form-field>\n          \n          <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 historyRentals\">\n          \n            <!-- Position Column -->\n            <ng-container matColumnDef=\"position\">\n              <th mat-header-cell *matHeaderCellDef> Date. </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n            </ng-container>\n          \n            <!-- Name Column -->\n            <ng-container matColumnDef=\"name\">\n              <th mat-header-cell *matHeaderCellDef> Price </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n            </ng-container>\n          \n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"weight\">\n              <th mat-header-cell *matHeaderCellDef> Visitors </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n            </ng-container>\n          \n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"symbol\">\n              <th mat-header-cell *matHeaderCellDef> Status </th>\n              <td mat-cell *matCellDef=\"let element\" [ngClass]=\"getPaymentClass(element)\"> {{element.symbol}} </td>\n            </ng-container>\n          \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n        </div>\n      </mat-tab>\n      <!-- <mat-tab label=\"Account settings\">\n        <div class=\"demo-tab-content\">\n          Oops, we can't find any information about you. Please check later.\n        </div>  \n      </mat-tab> -->\n    </mat-tab-group>\n        </div>\n  <button mat-fab id=\"add-property\">\n    <mat-icon aria-label=\"Example icon-button with a heart icon\" (click)=\"openDialog()\">add</mat-icon>\n  </button>\n  <div *ngIf=\"showConfirmDelete\" class=\"confirm-delete\">\n    <div class=\"confirmPopup\">\n      <div class=\"text\">\n        Do you really want to delete this log?\n      </div>\n      <button type=\"button\" class=\"btn btn-delete\" (click)=\"deleteLog(i, id)\">DELETE</button>\n      <button type=\"button\" class=\"btn btn-cancel\" (click)=\"this.showConfirmDelete = false\">CANCEL</button>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/account/account.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/components/account/account.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.account-container {\n  width: 100%;\n  padding: 1rem 2rem;\n  box-sizing: border-box; }\n\n.mat-card {\n  width: 15rem;\n  margin-top: 1rem; }\n\n.houses-container {\n  display: flex;\n  flex-flow: wrap;\n  justify-content: space-between;\n  padding: 0 0.5rem; }\n\nbutton i {\n  color: #67bdc8; }\n\n::ng-deep .mat-tab-body-wrapper {\n  padding-top: 1rem; }\n\n.historyRentals td:nth-child(2) {\n  font-style: italic; }\n\n.historyRentals .paid {\n  color: #22630a; }\n\n.historyRentals .notPaid {\n  color: #913535; }\n\n#add-property {\n  position: fixed;\n  right: 2rem;\n  bottom: 2rem;\n  z-index: 1; }\n\n.confirm-delete {\n  position: fixed;\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  color: white;\n  text-align: center;\n  padding: 5rem 0;\n  font-weight: bold;\n  z-index: 1; }\n\n.confirm-delete .confirmPopup {\n    background: white;\n    padding: 5rem;\n    color: #5c5858;\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n    margin: 0 auto;\n    border-radius: 3px;\n    box-shadow: 0 2px 13px 4px rgba(0, 0, 0, 0.23); }\n\n.confirm-delete .confirmPopup .text {\n      margin-bottom: 3rem; }\n\n.confirm-delete .confirmPopup button {\n      border: none;\n      padding: 0.5rem 0.7rem;\n      border-radius: 2px;\n      letter-spacing: 1px; }\n\n.confirm-delete .confirmPopup .btn-delete {\n      margin-right: 1rem;\n      background: linear-gradient(90deg, #763131, #d55252); }\n"

/***/ }),

/***/ "./src/app/components/account/account.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/account/account.component.ts ***!
  \*********************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_property_add_property_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-property/add-property.component */ "./src/app/components/add-property/add-property.component.ts");
/* harmony import */ var _services_houses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/houses.service */ "./src/app/services/houses.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountComponent = /** @class */ (function () {
    // =  [
    //   {
    //     'id': 1, 'name': 'Lovely house', 'type': 'house',
    //     'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
    //     'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
    //   },
    //   {
    //     'id': 2, 'name': 'Lovely house', 'type': 'house',
    //     'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
    //     'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
    //   },
    //   {
    //     'id': 3, 'name': 'Lovely house', 'type': 'house',
    //     'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
    //     'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
    //   },
    //   {
    //     'id': 4, 'name': 'Lovely house', 'type': 'house',
    //     'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
    //     'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
    //   },
    //   {
    //     'id': 5, 'name': 'Lovely house', 'type': 'house',
    //     'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
    //     'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
    //   },
    //   {
    //     'id': 6, 'name': 'Lovely house', 'type': 'house',
    //     'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
    //     'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
    //   },
    //   {
    //     'id': 7, 'name': 'Lovely house', 'type': 'house',
    //     'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
    //     'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
    //   },
    //   {
    //     'id': 8, 'name': 'Lovely house', 'type': 'house',
    //     'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
    //     'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
    //   },
    //   {
    //     'id': 9, 'name': 'Lovely house', 'type': 'house',
    //     'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
    //     'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
    //   }
    // ];
    function AccountComponent(dialog, _housesService, snackBar) {
        this.dialog = dialog;
        this._housesService = _housesService;
        this.snackBar = snackBar;
        this.showConfirmDelete = false;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.getAllHouses();
    }
    AccountComponent.prototype.getAllHouses = function () {
        var _this = this;
        this._housesService.getAllHouses()
            .subscribe(function (res) {
            console.log(res);
            _this.houses = res;
        });
    };
    AccountComponent.prototype.initDelete = function (i, id) {
        this.showConfirmDelete = true;
        this.logToDeleteIndex = i;
        this.logToDeleteId = id;
    };
    AccountComponent.prototype.deleteLog = function (i, id) {
        var _this = this;
        this.showConfirmDelete = false;
        console.log(this.logToDeleteId);
        this._housesService.deleteProperty(this.logToDeleteId)
            .then(function (res) {
            if (res.status === 200) {
                _this.snackBar.open('Property has been succesfully deleted.');
                setTimeout(function () {
                    _this.snackBar.dismiss();
                }, 3000);
            }
        });
        this.houses.splice(this.logToDeleteIndex, 1);
        // this._notificationService.showNotification('Log has been deleted! 💣🗑️');
    };
    AccountComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AccountComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_add_property_add_property_component__WEBPACK_IMPORTED_MODULE_2__["AddPropertyComponent"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    AccountComponent.prototype.getPaymentClass = function (status) {
        if (status.symbol === 'Paid') {
            return 'paid';
        }
        else {
            return 'notPaid';
        }
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/components/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.sass */ "./src/app/components/account/account.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _services_houses_service__WEBPACK_IMPORTED_MODULE_3__["HousesService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], AccountComponent);
    return AccountComponent;
}());

var ELEMENT_DATA = [
    { position: '20.05 - 08.06', name: '350€', weight: 'Lady Gaga + 4', symbol: 'Paid' },
    { position: '12.05 - 18.05', name: '900€', weight: 'Apple', symbol: 'Not Paid' },
    { position: '06.05 - 11.05', name: '750€', weight: 'Matt Damon + 1', symbol: 'Paid' },
    { position: '29.04 - 05.05', name: '3600€', weight: 'Brad Pitt + 5', symbol: 'Paid' },
    { position: '26.04 - 27.04', name: '200€', weight: 'Donald Trump + 2', symbol: 'Not Paid' },
    { position: '26.04 - 10.05', name: '2400€', weight: 'Aaron Rodgers + 3', symbol: 'Paid' },
    { position: '20.04 - 25.04', name: '750€', weight: 'Bill Clinton + 1', symbol: 'Paid' },
    { position: '01.04 - 17.04', name: '2400€', weight: 'DHL', symbol: 'Paid' },
    { position: '23.03 - 30.03', name: '1050€', weight: 'Elon Musk + 1', symbol: 'Paid' },
    { position: '16.03 - 20.03', name: '700€', weight: 'Kevin Hart + 5', symbol: 'Paid' },
    { position: '13.03 - 14.03', name: '150€', weight: 'Jackie Chan + 2', symbol: 'Paid' },
    { position: '30.03 - 12.03', name: '1875€', weight: 'Bruce Willis + 1', symbol: 'Not Paid' }
];


/***/ }),

/***/ "./src/app/components/account/log-off/log-off.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/account/log-off/log-off.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  log-off works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/account/log-off/log-off.component.sass":
/*!*******************************************************************!*\
  !*** ./src/app/components/account/log-off/log-off.component.sass ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/account/log-off/log-off.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/account/log-off/log-off.component.ts ***!
  \*****************************************************************/
/*! exports provided: LogOffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOffComponent", function() { return LogOffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogOffComponent = /** @class */ (function () {
    function LogOffComponent() {
    }
    LogOffComponent.prototype.ngOnInit = function () {
    };
    LogOffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log-off',
            template: __webpack_require__(/*! ./log-off.component.html */ "./src/app/components/account/log-off/log-off.component.html"),
            styles: [__webpack_require__(/*! ./log-off.component.sass */ "./src/app/components/account/log-off/log-off.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], LogOffComponent);
    return LogOffComponent;
}());



/***/ }),

/***/ "./src/app/components/account/login/login.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/account/login/login.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/account/login/login.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/components/account/login/login.component.sass ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/account/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/account/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/account/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.sass */ "./src/app/components/account/login/login.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/account/signup/signup.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/account/signup/signup.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  signup works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/account/signup/signup.component.sass":
/*!*****************************************************************!*\
  !*** ./src/app/components/account/signup/signup.component.sass ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/account/signup/signup.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/account/signup/signup.component.ts ***!
  \***************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/account/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.sass */ "./src/app/components/account/signup/signup.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/add-property/add-property.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-property/add-property.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-property-container\">\n  <h1>Add Property</h1>\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm)\">\n    <mat-dialog-content>\n      <mat-form-field>\n        <input formControlName=\"name\" matInput placeholder=\"Name\">\n      </mat-form-field>\n  \n      <mat-form-field>\n        <input formControlName=\"typeOfProperty\" matInput placeholder=\"Type of property\">\n      </mat-form-field>\n  \n      <mat-form-field>\n        <input formControlName=\"country\" matInput placeholder=\"Country\">\n      </mat-form-field>\n  \n      <mat-form-field>\n        <input formControlName=\"city\" matInput placeholder=\"City\">\n      </mat-form-field>\n  \n      <mat-form-field>\n        <input formControlName=\"street\" matInput placeholder=\"Street\">\n      </mat-form-field>\n      <div>\n        <label>Picture</label>\n        <input mat-raised-button type=\"file\" hidden id=\"myFile\">\n        <button mat-raised-button matTooltip=\"Maximum size of picture should be 3Mb. We only support .PNG and .JPG\" type=\"button\" (click)=\"openFileWindow()\">Upload picture</button>\n        <button type=\"button\" (click)=\"upload()\"></button>\n      </div>\n      \n      <mat-form-field>\n        <input formControlName=\"phone\" matInput placeholder=\"Phone of the owner\">\n      </mat-form-field>\n  \n      <mat-form-field>\n        <input formControlName=\"price\" matInput placeholder=\"Price per night\">\n      </mat-form-field>\n  \n      <mat-form-field>\n        <input formControlName=\"maxPeople\" matInput placeholder=\"Maximum number of people\">\n      </mat-form-field>\n  \n      <mat-checkbox formControlName=\"familyFriendly\" >Family friendly</mat-checkbox>\n      <mat-checkbox formControlName=\"petFriendly\" >Pet friendly</mat-checkbox>\n  \n      <mat-form-field>\n        <textarea formControlName=\"description\" matInput placeholder=\"Description\"></textarea>\n      </mat-form-field>\n  \n      <mat-form-field>\n        <mat-select placeholder=\"Select\">\n          <mat-option value=\"option\">Option</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </mat-dialog-content>\n    <button mat-raised-button type=\"submit\" class=\"btn submit-btn\" [disabled]=\"!myForm.valid\">Add</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/add-property/add-property.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-property/add-property.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-property-container {\n  width: 50vw;\n  padding: 0 5rem 0; }\n  .add-property-container mat-dialog-content {\n    display: flex;\n    flex-flow: column; }\n  label {\n  margin-right: 1rem;\n  color: #9fa1a7; }\n"

/***/ }),

/***/ "./src/app/components/add-property/add-property.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-property/add-property.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPropertyComponent", function() { return AddPropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_houses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/houses.service */ "./src/app/services/houses.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL = 'http://localhost:3000/api/upload';
var AddPropertyComponent = /** @class */ (function () {
    function AddPropertyComponent(fb, _housesService, snackBar, el, http) {
        this.fb = fb;
        this._housesService = _housesService;
        this.snackBar = snackBar;
        this.el = el;
        this.http = http;
        console.log(this.uuidv4());
    }
    AddPropertyComponent.prototype.uuidv4 = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            // tslint:disable-next-line:no-bitwise
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    AddPropertyComponent.prototype.openFileWindow = function () {
        document.getElementById('myFile').click();
    };
    AddPropertyComponent.prototype.onSubmit = function (myForm) {
        var _this = this;
        console.log(myForm);
        var newHouse = {
            id: this.uuidv4(),
            name: myForm.value.name,
            typeOfProperty: myForm.value.typeOfProperty,
            address: {
                country: myForm.value.country,
                city: myForm.value.city,
                street: myForm.value.street
            },
            // picture: '',
            phone: myForm.value.phone,
            price: myForm.value.price,
            maxPeople: myForm.value.maxPeople,
            familyFriendly: myForm.value.familyFriendly,
            petFriendly: myForm.value.petFriendly,
            description: myForm.value.description
        };
        this._housesService.insertProperty(newHouse)
            .then(function (res) {
            console.log(res);
            if (res.message = 'Log has been succesfully added.') {
                _this.snackBar.open('Property has been succesfully added.');
                setTimeout(function () {
                    _this.snackBar.dismiss();
                }, 3000);
            }
            else {
                _this.snackBar.open('There was a problem with adding a property. Please try again.');
                setTimeout(function () {
                    _this.snackBar.dismiss();
                }, 3000);
            }
        });
    };
    AddPropertyComponent.prototype.upload = function () {
        // let fileList: FileList = event.target.files;
        var inputEl = this.el.nativeElement.querySelector('#myFile');
        var fileCount = inputEl.files.length;
        if (fileCount > 0) {
            var file = inputEl.files.item(0);
            var formData = new FormData();
            formData.append('uploadFile', file, 'house');
            this._housesService.uploadImage(inputEl.files.item(0));
            this.http.post(URL, formData);
            // locate the file element meant for the file upload.
            // get the total amount of files attached to the file input.
            // create a new fromdata instance
            // const formData = new FormData();
            // check if the filecount is greater than zero, to be sure a file was selected.
            // if (fileCount > 0) { // a file was selected
            // append the key name 'photo' with the first file in the element
            // formData.append('photo', inputEl.files.item(0));
            // console.log(inputEl.files.item(0));
            // call the angular http method
            // tslint:disable-next-line:max-line-length
            // post the form data to the url defined above and map the response.
            // Then subscribe //to initiate the post. if you don't subscribe, angular wont post.
            // }
        }
    };
    AddPropertyComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            typeOfProperty: '',
            country: '',
            city: '',
            street: '',
            // picture: '',
            phone: '',
            price: '',
            maxPeople: '',
            familyFriendly: '',
            petFriendly: '',
            description: ''
            // name: ['', Validators.required],
            // typeOfProperty: ['', Validators.required],
            // country: ['', Validators.required],
            // city: ['', Validators.required],
            // street: ['', Validators.required],
            // picture: '',
            // phone: ['', Validators.required],
            // price: ['', Validators.required],
            // maxPeople: ['', Validators.required],
            // familyFriendly: '',
            // petFriendly: '',
            // description: ['', Validators.required]
        });
    };
    AddPropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-property',
            template: __webpack_require__(/*! ./add-property.component.html */ "./src/app/components/add-property/add-property.component.html"),
            styles: [__webpack_require__(/*! ./add-property.component.sass */ "./src/app/components/add-property/add-property.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_houses_service__WEBPACK_IMPORTED_MODULE_2__["HousesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AddPropertyComponent);
    return AddPropertyComponent;
}());



/***/ }),

/***/ "./src/app/components/front-page/front-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/front-page/front-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"mainPhoto\">\n      <h1>Find A Home For Your Dream Vacation</h1>\n    <app-search></app-search>\n  </div>\n  <div class=\"houses-container\">\n    <h1>Some lovely houses waiting just for you</h1>\n    <app-houses-list></app-houses-list>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/front-page/front-page.component.sass":
/*!*****************************************************************!*\
  !*** ./src/app/components/front-page/front-page.component.sass ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainPhoto {\n  background-image: url(\"/../../assets/buildings-overlay.jpg\");\n  width: 100%;\n  height: 90vh;\n  background-size: cover;\n  background-position: 20%;\n  -webkit-filter: saturate(112%);\n          filter: saturate(112%);\n  padding: 2rem;\n  box-sizing: border-box;\n  display: flex;\n  align-self: safe;\n  justify-content: center;\n  flex-flow: column;\n  margin-top: -4rem; }\n  .mainPhoto h1 {\n    text-align: center;\n    font-family: Roboto;\n    font-weight: 300;\n    color: white;\n    text-shadow: 2px 1px 4px rgba(69, 64, 64, 0.75); }\n  .houses-container {\n  padding: 2rem 5rem; }\n  .houses-container h1 {\n    font-weight: 300;\n    text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/front-page/front-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/front-page/front-page.component.ts ***!
  \***************************************************************/
/*! exports provided: FrontPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontPageComponent", function() { return FrontPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FrontPageComponent = /** @class */ (function () {
    function FrontPageComponent() {
    }
    FrontPageComponent.prototype.ngOnInit = function () {
    };
    FrontPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-front-page',
            template: __webpack_require__(/*! ./front-page.component.html */ "./src/app/components/front-page/front-page.component.html"),
            styles: [__webpack_require__(/*! ./front-page.component.sass */ "./src/app/components/front-page/front-page.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], FrontPageComponent);
    return FrontPageComponent;
}());



/***/ }),

/***/ "./src/app/components/front-page/houses-list/houses-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/front-page/houses-list/houses-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"houses\">\n  <mat-card class=\"example-card\" *ngFor=\"let house of houses; let i = index\" [routerLink]=\"['/house', house.id]\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"><i class=\"material-icons\">beach_access</i></div>\n      <mat-card-title >{{house.name}}</mat-card-title>\n      <mat-card-subtitle>{{house.address.city}}</mat-card-subtitle>\n    </mat-card-header>\n      <img mat-card-image src='../../../../assets/{{ i +1 }}.PNG' alt=\"Photo of a Shiba Inu\">\n    <mat-card-content>\n      <i class=\"material-icons\" *ngIf=\"house.petFriendly\">pets</i>\n      <i class=\"material-icons\" *ngIf=\"house.familyFriendly\">child_care</i>\n      <p>{{house.price}}€/night</p>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/front-page/houses-list/houses-list.component.sass":
/*!******************************************************************************!*\
  !*** ./src/app/components/front-page/houses-list/houses-list.component.sass ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".houses {\n  display: flex;\n  flex-flow: wrap;\n  justify-content: space-between;\n  margin-top: 5rem; }\n\nmat-card {\n  width: 15rem;\n  margin-bottom: 3rem;\n  background: linear-gradient(-90deg, rgba(230, 69, 69, 0.8), rgba(230, 44, 116, 0.99));\n  transition: all 0.3s ease-in-out;\n  color: white; }\n\nmat-card:hover {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    cursor: pointer; }\n\nmat-card a {\n    color: white; }\n\nmat-card img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: 12rem; }\n\nmat-card mat-card-content {\n    display: inline-flex;\n    justify-content: space-around;\n    width: 100%;\n    align-items: center; }\n\nmat-card mat-card-content p {\n      margin-top: 0;\n      font-size: 18px;\n      font-weight: 300; }\n"

/***/ }),

/***/ "./src/app/components/front-page/houses-list/houses-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/front-page/houses-list/houses-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: HousesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousesListComponent", function() { return HousesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_houses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/houses.service */ "./src/app/services/houses.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HousesListComponent = /** @class */ (function () {
    function HousesListComponent(_housesService) {
        this._housesService = _housesService;
        this.houses = [
            { 'id': 1, 'name': 'Lovely house', 'type': 'house',
                'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
                'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
            },
            { 'id': 2, 'name': 'Lovely house', 'type': 'house',
                'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
                'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
            },
            { 'id': 3, 'name': 'Lovely house', 'type': 'house',
                'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
                'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
            },
            { 'id': 4, 'name': 'Lovely house', 'type': 'house',
                'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
                'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
            },
            { 'id': 5, 'name': 'Lovely house', 'type': 'house',
                'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
                'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
            },
            { 'id': 6, 'name': 'Lovely house', 'type': 'house',
                'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
                'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
            },
            { 'id': 7, 'name': 'Lovely house', 'type': 'house',
                'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
                'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
            },
            { 'id': 8, 'name': 'Lovely house', 'type': 'house',
                'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
                'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
            },
            { 'id': 9, 'name': 'Lovely house', 'type': 'house',
                'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
                'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
            }
        ];
    }
    HousesListComponent.prototype.getAllHouses = function () {
        var _this = this;
        this._housesService.getAllHouses()
            .subscribe(function (res) {
            console.log(res);
            _this.houses = res;
        });
    };
    HousesListComponent.prototype.ngOnInit = function () {
        this.getAllHouses();
    };
    HousesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-houses-list',
            template: __webpack_require__(/*! ./houses-list.component.html */ "./src/app/components/front-page/houses-list/houses-list.component.html"),
            styles: [__webpack_require__(/*! ./houses-list.component.sass */ "./src/app/components/front-page/houses-list/houses-list.component.sass")]
        }),
        __metadata("design:paramtypes", [_services_houses_service__WEBPACK_IMPORTED_MODULE_1__["HousesService"]])
    ], HousesListComponent);
    return HousesListComponent;
}());



/***/ }),

/***/ "./src/app/components/front-page/search/search.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/front-page/search/search.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"City\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Number of nights\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Type of house\">\n      <mat-option value=\"option\">Family house</mat-option>\n      <mat-option value=\"option\">Beach house</mat-option>\n      <mat-option value=\"option\">Cottage</mat-option>\n      <mat-option value=\"option\">Flat</mat-option>\n      <mat-option value=\"option\">Castle</mat-option>\n      <mat-option value=\"option\">Farm house</mat-option>\n      <mat-option value=\"option\">Houseboat</mat-option>\n      <mat-option value=\"option\">Igloo</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Travelers\">\n      <mat-option value=\"option\">1</mat-option>\n      <mat-option value=\"option\">2</mat-option>\n      <mat-option value=\"option\">3</mat-option>\n      <mat-option value=\"option\">4</mat-option>\n      <mat-option value=\"option\">5</mat-option>\n      <mat-option value=\"option\">6</mat-option>\n      <mat-option value=\"option\">7</mat-option>\n      <mat-option value=\"option\">8</mat-option>\n      <mat-option value=\"option\">9</mat-option>\n      <mat-option value=\"option\">10+</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <button mat-raised-button (click)=\"searchForApartmants()\">Search</button>\n</div>"

/***/ }),

/***/ "./src/app/components/front-page/search/search.component.sass":
/*!********************************************************************!*\
  !*** ./src/app/components/front-page/search/search.component.sass ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  margin: 0 auto; }\n\n.search-container {\n  background: rgba(255, 255, 255, 0.95);\n  margin: 0 auto;\n  padding: 1.5rem 2rem;\n  display: inline-flex;\n  justify-content: space-around;\n  align-items: baseline;\n  border-radius: 3px;\n  flex-flow: wrap; }\n\n.search-container mat-form-field {\n    margin-right: 0.5rem; }\n"

/***/ }),

/***/ "./src/app/components/front-page/search/search.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/front-page/search/search.component.ts ***!
  \******************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(fb) {
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }
    SearchComponent.prototype.searchForApartmants = function () {
        setTimeout(function () {
            var x = document.querySelector(".houses-container");
            x.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
        console.log(this.options);
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/front-page/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.sass */ "./src/app/components/front-page/search/search.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/house/house.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/house/house.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  house works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/house/house.component.sass":
/*!*******************************************************!*\
  !*** ./src/app/components/house/house.component.sass ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/house/house.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/house/house.component.ts ***!
  \*****************************************************/
/*! exports provided: HouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseComponent", function() { return HouseComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HouseComponent = /** @class */ (function () {
    function HouseComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    HouseComponent.prototype.ngOnInit = function () {
        this.activatedRoute.params.subscribe(function (params) {
            var house = params['id'];
            console.log(house);
        });
    };
    HouseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-house',
            template: __webpack_require__(/*! ./house.component.html */ "./src/app/components/house/house.component.html"),
            styles: [__webpack_require__(/*! ./house.component.sass */ "./src/app/components/house/house.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], HouseComponent);
    return HouseComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n     <a href=\"#\" [routerLink]=\"['/']\">HolidayHouse</a>\n      <div class=\"buttons\">\n          <button mat-raised-button id=\"login\" routerLink=\"account\" >Account</button>\n      </div>\n    </mat-toolbar>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n  background: transparent; }\n  .sidenav-container a {\n    font-weight: 300;\n    letter-spacing: 7px;\n    margin-left: 1rem;\n    color: white; }\n  .sidenav-container #sign-up {\n    margin-right: 1rem;\n    background: linear-gradient(#3fb3bb, #2f98a5); }\n  .sidenav-container #sign-up:hover {\n      background: linear-gradient(#3098a0, #20818d); }\n  .sidenav-container #login {\n    background: linear-gradient(#3fbb95, #2fa57e); }\n  .sidenav-container #login:hover {\n      background: linear-gradient(#38a886, #288f6d); }\n  .sidenav {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24); }\n  mat-toolbar.mat-primary {\n  background: linear-gradient(-90deg, rgba(81, 207, 186, 0.81), rgba(48, 163, 194, 0.78));\n  justify-content: space-between; }\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.showSidebar = false;
        this.isHandset = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset);
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.sass */ "./src/app/components/navbar/navbar.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/houses.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/houses.service.ts ***!
  \********************************************/
/*! exports provided: HousesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousesService", function() { return HousesService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Http, Headers, RequestOptions } from '@angular/http';

var HousesService = /** @class */ (function () {
    function HousesService(_http) {
        this._http = _http;
    }
    HousesService.prototype.getAllHouses = function () {
        var _this = this;
        return this._http.get('/api/houses').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return _this.result = result.data; }));
    };
    HousesService.prototype.uploadImage = function (img) {
        console.log(img);
        var headers = new Headers();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        // headers.append('Content-Type', 'multipart/form-data');
        // headers.append('Accept', 'application/json');
        // const requestOptions = {
        //   params: new HttpParams()
        // };
        // requestOptions.params.set('headers', 'headers');
        // const options = new RequestOptions({ headers: headers });
        return this._http.post('/api/upload-image', img, {
            headers: { 'Content-Type': 'multipart/form-data', 'Accept': 'application/json' }
        })
            .subscribe(function (data) { return console.log('success'); }, function (error) { return console.log(error); });
    };
    // return new Promise((resolve, reject) => {
    //   this._http.post('/api/upload-image', img)
    //     .subscribe(res => {
    //       // this.add(res);
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    // });
    // }
    HousesService.prototype.insertProperty = function (newHouse) {
        var _this = this;
        console.log(newHouse);
        return new Promise(function (resolve, reject) {
            _this._http.post('/api/add-house', newHouse)
                .subscribe(function (res) {
                // this.add(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    HousesService.prototype.deleteProperty = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post('/api/delete-house/' + id, id)
                .subscribe(function (res) {
                resolve(res);
                console.log(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    HousesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HousesService);
    return HousesService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sisak\Documents\Code\school\HolidayHouse\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map