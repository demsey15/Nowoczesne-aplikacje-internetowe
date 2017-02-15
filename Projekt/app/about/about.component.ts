import { Component, OnInit } from '@angular/core'; 
import { About } from './about.model';
import { AboutService } from './about.service';

@Component({
    selector: 'about',
    templateUrl: 'app/about/about.component.html',
    styleUrls: [ 'app/about/about.component.css' ],
    providers: [ AboutService ]
})
export class AboutComponent implements OnInit {

    public about:About = {"name": 'imie', "hours": { "monday": "",
    "thusday": "",
    "wednesday": "",
    "thursday": "",
    "friday": "",
    "saturday": "",
    "sunday": ""
  }};

    constructor(private aboutService: AboutService) {
    }

    ngOnInit () {
          this.aboutService.getAbout().subscribe(
                data => { console.log(data); this.about = data;}
                    );          
                }  
    

                
}
          