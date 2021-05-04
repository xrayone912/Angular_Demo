import { Component } from '@angular/core';
import { DataService } from './Services/data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular11Demo';

    constructor(private DataService: DataService,
      private router: Router,) {
  
    }
  
  ngOnInit(){
    //Call fake request from DataService for import data
    this.DataService.dataImport();
  }
  
  //Methode (button routing to Table Component) 
  nextComponent(){
    this.router.navigate(["/table"]);
  }

}
  