import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie-list/movie.component';

import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { CartService } from './cart/cart.service';
import {FormService} from './form/form.service';

import { AboutComponent } from './about/about.component';

import { MovieModule } from './movie-list/movie.module';
import { AboutModule } from './about/about.module';


import {FormComponent} from './form/form.component';
//import {CartComponent} from './cart/cart.component';

import {SharedModule} from './shared-module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
   { path: 'about', component: AboutComponent },
  {path: 'order', component: FormComponent },
 { path: 'list', component: MovieListComponent},
 //{ path: 'list', loadChildren: 'app/movie-list/movie.module#MovieModule'},
    {path: 'list/:category', component: MovieListComponent},
    
  { path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [ BrowserModule, HttpModule , FormsModule, SharedModule , MovieModule,
  ReactiveFormsModule,
  //MovieModule,
   //MovieModule, AboutModule, FormModule,
    RouterModule.forRoot(routes)],
  declarations: [ AppComponent,  AboutComponent],
  bootstrap: [ AppComponent ],
  providers: [ CartService, FormService ] 
})
export class AppModule { }
