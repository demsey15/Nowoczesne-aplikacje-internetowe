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
var movieList_service_1 = require('./movieList.service');
var cart_service_1 = require('../cart/cart.service');
var router_1 = require('@angular/router');
var MovieListComponent = (function () {
    function MovieListComponent(movieService, activatedRoute, cartService) {
        this.movieService = movieService;
        this.activatedRoute = activatedRoute;
        this.cartService = cartService;
        this.movies = [];
    }
    Object.defineProperty(MovieListComponent.prototype, "categoriesArray", {
        get: function () {
            return MovieListComponent.categories;
        },
        enumerable: true,
        configurable: true
    });
    MovieListComponent.prototype.addMovieToCart = function (movie) {
        this.cartService.addMovie(movie);
    };
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('init' + this.activatedRoute.params['category']);
        this.activatedRoute.params.subscribe(function (param) {
            //   this.movieService.getMovies(param.category).subscribe( //
            //    this.movieService.getMovies(undefined).subscribe( 
            //   console.log("z param" + param[category]);
            _this.movieService.getMovies(param['category']).subscribe(function (data) {
                _this.movies = data;
                if (MovieListComponent.categories.length === 0) {
                    _this.movies.forEach(function (movie) {
                        var currentCategories;
                        var category;
                        currentCategories = movie.categoryIds;
                        console.log(movie + " " + currentCategories);
                        var i = 0;
                        currentCategories.forEach(function (category) {
                            if (MovieListComponent.categories.indexOf(category) === -1) {
                                MovieListComponent.categories.push(category);
                                console.log(MovieListComponent.categories);
                            }
                        });
                    });
                }
                console.log(_this.movies.length);
            });
        });
    };
    MovieListComponent.categories = [];
    MovieListComponent = __decorate([
        core_1.Component({
            selector: 'my-movie-list',
            templateUrl: 'app/movie-list/movie-list.component.html',
            styleUrls: ['app/movie-list/movie-list.component.css'],
            providers: [movieList_service_1.MovieService]
        }), 
        __metadata('design:paramtypes', [movieList_service_1.MovieService, router_1.ActivatedRoute, cart_service_1.CartService])
    ], MovieListComponent);
    return MovieListComponent;
}());
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movie-list.component.js.map