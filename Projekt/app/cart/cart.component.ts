import { Component, OnInit } from '@angular/core'; 
import { Movie } from '../movie-list/movie.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from './cart.service';

@Component({
    selector: 'my-movie-cart',
    templateUrl: 'app/cart/cart.component.html',
    styleUrls: [ 'app/cart/cart.component.css' ],
})
export class CartComponent implements OnInit {

    public  borrowedMovies:Array<Movie> = [];
  
    
    constructor(private cartService:CartService) {
       cartService.tomovies.subscribe(movies => {
           this.borrowedMovies = movies;
       })
    }

    get sum(){
        return (Math.round(this.cartService.getTotal() * 100)/100).toFixed(2);
    }
    
    ngOnInit () {

    }

    removeMovieFromCart(movie: Movie){
        this.cartService.removeMovie(movie);
    }
  
} 