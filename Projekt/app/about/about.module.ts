import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {AboutComponent } from './about.component';
import { AboutService } from './about.service';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: '', component: AboutComponent}
];

@NgModule({
    imports: [ 
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ AboutComponent ],
    exports: [ AboutComponent ],
    providers: [ AboutService ]
})
export class AboutModule {

} 