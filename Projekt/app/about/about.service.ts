import { Injectable } from '@angular/core';
import { About } from './about.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AboutService {

    constructor(private http: Http) {
    }

    getAbout () : Observable<About> {
         return this.http.get('http://localhost:8081/api/about')
            .map((res) => this.extractData(res));
    }

    private extractData(res: Response) {
     
     let body = res.json();
    
    console.log('pobieram about la la' + res.json().hours.monday);
      return body || { };
  }
}