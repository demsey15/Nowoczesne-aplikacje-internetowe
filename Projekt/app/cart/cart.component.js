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
var cart_service_1 = require('./cart.service');
var CartComponent = (function () {
    function CartComponent(cartService) {
        var _this = this;
        this.cartService = cartService;
        this.borrowedMovies = [];
        cartService.tomovies.subscribe(function (movies) {
            _this.borrowedMovies = movies;
        });
    }
    Object.defineProperty(CartComponent.prototype, "sum", {
        get: function () {
            return (Math.round(this.cartService.getTotal() * 100) / 100).toFixed(2);
        },
        enumerable: true,
        configurable: true
    });
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.removeMovieFromCart = function (movie) {
        this.cartService.removeMovie(movie);
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'my-movie-cart',
            templateUrl: 'app/cart/cart.component.html',
            styleUrls: ['app/cart/cart.component.css'],
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map