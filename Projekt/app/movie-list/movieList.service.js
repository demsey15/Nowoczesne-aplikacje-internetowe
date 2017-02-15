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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
    }
    MovieService.prototype.getMovies = function (categoryId) {
        var _this = this;
        console.log('pobieram filmy');
        // return this.http.get('app/movie-list/movies.json') //'http://localhost:8081/api/movies')
        return this.http.get('http://localhost:8081/api/movies')
            .map(function (res) { return _this.extractData(res, categoryId); });
    };
    MovieService.prototype.extractData = function (res, categoryId) {
        console.log("json: " + res.json() + ' ' + categoryId);
        var body = res.json();
        if (categoryId !== 'undefined' && categoryId !== undefined
            && categoryId !== 'list') {
            return body.filter(function (movie) {
                var categoryIds;
                categoryIds = movie.categoryIds;
                var category;
                var i = 0;
                for (i; i < categoryIds.length; i++) {
                    if (categoryIds[i] === categoryId) {
                        return true;
                    }
                }
                return false;
            }) || {};
        }
        else {
            return body || {};
        }
    };
    MovieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movieList.service.js.map