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
var form_service_1 = require('./form.service');
var cart_service_1 = require('../cart/cart.service');
var FormComponent = (function () {
    function FormComponent(formService, cartService) {
        this.formService = formService;
        this.cartService = cartService;
        this.borrowModel = { "form": {
                "firstName": '',
                "lastName": '',
                "phone": '' },
            "movieIds": []
        };
        this.regex = "^[0-9]{9}$|^[0-9]{10}$";
        this.moviesInCart = this.cartService.cart;
        this.sum = (Math.round(cartService.getTotal() * 100) / 100).toFixed(2);
        this.regexp = new RegExp(this.regex);
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.postOrder = function () {
        console.log(this.regexp.test(this.borrowModel.form.phone) + "");
        if (this.borrowModel.form.firstName != "" &&
            this.borrowModel.form.lastName != "" &&
            this.regexp.test(this.borrowModel.form.phone)) {
            console.log('post');
            // Variable to hold a reference of addComment/updateComment
            var moviesOperation = void 0;
            var i = 0;
            for (i; i < this.cartService.cart.length; i++) {
                this.borrowModel.movieIds.push(this.cartService.cart[i].id);
            }
            moviesOperation = this.formService.postMovies(this.borrowModel);
        }
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'order',
            templateUrl: 'app/form/form.component.html',
            styleUrls: ['app/form/form.component.css'],
        }), 
        __metadata('design:paramtypes', [form_service_1.FormService, cart_service_1.CartService])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map