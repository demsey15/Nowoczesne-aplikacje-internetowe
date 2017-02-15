import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from './movie.model';

@Component({
    selector: 'my-movie',
    templateUrl: 'app/movie-list/movie.component.html'
})
export class MovieComponent {
    @Input() public movie: Movie;

    @Output() removeTodoTask : EventEmitter<Movie> = 
        new EventEmitter<Movie>();
    
    removeTask () {
        this.removeTodoTask.emit(this.movie);
    }

}