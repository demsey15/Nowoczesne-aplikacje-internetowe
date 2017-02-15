import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MovieListComponent } from './movie-list.component';
import { MovieComponent } from './movie.component';
import { MovieService } from './movieList.service';

//import { CartComponent } from '../cart/cart.component'

import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '../about/about.component';

import {SharedModule} from '../shared-module';

import {FormComponent} from '../form/form.component';


const routes: Routes = [
    {path: ':category', component: MovieListComponent},
    {path: 'list', component: MovieListComponent},
    {path: 'order', component: FormComponent}, //zmienić na komponent zamówienia
  //   {path: 'about', component: AboutComponent},
    // { path: '', component: MovieListComponent }
];


@NgModule({
    imports: [ 
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes).ngModule,
        SharedModule
    ],
    declarations: [ MovieListComponent, MovieComponent ],
    exports: [  MovieListComponent ]
})
export class MovieModule {

} 