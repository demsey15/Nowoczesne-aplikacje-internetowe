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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var movie_list_component_1 = require('./movie-list/movie-list.component');
var router_1 = require('@angular/router');
var cart_service_1 = require('./cart/cart.service');
var form_service_1 = require('./form/form.service');
var about_component_1 = require('./about/about.component');
var movie_module_1 = require('./movie-list/movie.module');
var form_component_1 = require('./form/form.component');
//import {CartComponent} from './cart/cart.component';
var shared_module_1 = require('./shared-module');
var forms_1 = require('@angular/forms');
var routes = [
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'order', component: form_component_1.FormComponent },
    { path: 'list', component: movie_list_component_1.MovieListComponent },
    //{ path: 'list', loadChildren: 'app/movie-list/movie.module#MovieModule'},
    { path: 'list/:category', component: movie_list_component_1.MovieListComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, shared_module_1.SharedModule, movie_module_1.MovieModule,
                forms_1.ReactiveFormsModule,
                //MovieModule,
                //MovieModule, AboutModule, FormModule,
                router_1.RouterModule.forRoot(routes)],
            declarations: [app_component_1.AppComponent, about_component_1.AboutComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [cart_service_1.CartService, form_service_1.FormService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map