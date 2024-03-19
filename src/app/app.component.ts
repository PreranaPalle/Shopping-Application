import { Component, Input } from '@angular/core';
import { MenComponent } from './men/men.component';
import { WomensComponent } from './womens/womens.component';
import { SharingService } from './sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MenComponent,WomensComponent]
})
export class AppComponent {
  constructor(public route:Router){}
  title = 'shopping';
 searchproduct:String='';
 navigateToSearch(){
  if (this.searchproduct && this.searchproduct.trim() !== '') {
    this.route.navigate(['/search', this.searchproduct.trim().replace(/ /g, '-')]);
  }
  
 }
    
  
}


  

