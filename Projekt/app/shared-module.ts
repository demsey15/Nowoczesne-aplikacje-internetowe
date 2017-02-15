import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {FormComponent} from './form/form.component';

import { CartComponent } from './cart/cart.component'

import { RouterModule, Routes } from '@angular/router';



@NgModule({
    imports: [
        CommonModule,
        FormsModule
     ],
    declarations: [
         CartComponent, FormComponent
    ],
    exports: [
        CartComponent, FormComponent
    ]
})

export class SharedModule {}