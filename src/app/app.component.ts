import { Component } from '@angular/core';
import { NavigateService } from './navigation/navigate-service.service';
import{GeneralService} from './services/general.service' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'freelancer';
  constructor(private navigateService:NavigateService,
   ){
     

  }

  
}
