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
var MovieComponent = (function () {
    function MovieComponent() {
        this.removeTodoTask = new core_1.EventEmitter();
    }
    MovieComponent.prototype.removeTask = function () {
        this.removeTodoTask.emit(this.movie);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MovieComponent.prototype, "movie", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MovieComponent.prototype, "removeTodoTask", void 0);
    MovieComponent = __decorate([
        core_1.Component({
            selector: 'my-movie',
            templateUrl: 'app/movie-list/movie.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MovieComponent);
    return MovieComponent;
}());
exports.MovieComponent = MovieComponent;
//# sourceMappingURL=movie.component.js.map