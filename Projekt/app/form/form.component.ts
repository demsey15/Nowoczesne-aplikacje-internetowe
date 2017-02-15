import { Component, OnInit } from '@angular/core'; 
import { BorrowModel } from './form.model';
import { Movie } from '../movie-list/movie.model';


import {  EventEmitter, Input, OnChanges } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {Observable} from 'rxjs/Rx';

import { FormService } from './form.service';
import { CartService } from '../cart/cart.service';

import { RouterModule, Routes } from '@angular/router';


@Component({
    selector: 'order',
    templateUrl: 'app/form/form.component.html',
    styleUrls: [ 'app/form/form.component.css' ],
})
export class FormComponent implements OnInit {

public borrowModel:BorrowModel = {"form": {
    "firstName": '',
    "lastName": '',
    "phone": ''},
    "movieIds":[]
};

private moviesInCart : Movie[];
private sum : string;
private regex = "^[0-9]{9}$|^[0-9]{10}$";
private regexp: any;

    constructor(private formService:FormService, private cartService:CartService) {
        this.moviesInCart = this.cartService.cart;
        this.sum = (Math.round(cartService.getTotal() * 100)/100).toFixed(2);
        this.regexp = new RegExp(this.regex);
    }

    ngOnInit () {
    }

    postOrder(){
        console.log(this.regexp.test(this.borrowModel.form.phone) + "");
        if(this.borrowModel.form.firstName != "" && 
            this.borrowModel.form.lastName != "" &&
            this.regexp.test(this.borrowModel.form.phone)){
        console.log('post');
           // Variable to hold a reference of addComment/updateComment
        let moviesOperation:Observable<BorrowModel[]>;

        let i = 0;
        for(i; i < this.cartService.cart.length; i++){
            this.borrowModel.movieIds.push(this.cartService.cart[i].id);
        }

        moviesOperation = this.formService.postMovies(this.borrowModel);
      /*
        // Subscribe to observable
        moviesOperation.subscribe( err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }   */
}     
}
}

          