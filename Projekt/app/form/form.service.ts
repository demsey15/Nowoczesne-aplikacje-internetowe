import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BorrowModel }  from './form.model';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FormService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private postUrl = 'http://localhost:8081/api/borrow'; 

     postMovies (body: BorrowModel): any{//Observable<BorrowModel[]> {
        
        let bodyString = JSON.stringify(body); 
        let headers      = new Headers({ 'Content-Type': 'application/json' });
        let options       = new RequestOptions({ headers: headers }); 

        console.log("post:" +bodyString);
         this.http.post(this.postUrl, bodyString, options); 
                       //  .map((res:Response) => res.json()) ;
                         //.catch((error:any) => Observable.throw(error.json.error || 'Server error')); 
    }   

}