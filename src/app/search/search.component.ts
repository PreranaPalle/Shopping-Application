import { Component } from '@angular/core';
import { MenComponent } from '../men/men.component';
import { WomensComponent } from '../womens/womens.component';
import { ActivatedRoute } from '@angular/router';
import { CommunicationService } from '../communication.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[MenComponent,WomensComponent]
})
export class SearchComponent {
  constructor(public men:MenComponent,public women:WomensComponent,public route:ActivatedRoute,public communicationService:CommunicationService){
    this.searchproductname=this.route.snapshot. params['searchproduct'].replace(/-/g, ' ');
  }
  searchproductname:any;
  search:boolean=false;
  public message=[];
  searchedproduct:any;
  menimage:any;
  womenImage:any;
  allimages:any;
  mergedObject:any;
  ngOnInit(){
    forkJoin([
      this.communicationService.getProductsByGender('M'),
      this.communicationService.getProductsByGender('F')
    ]).subscribe(([menResponse, womenResponse]) => {
      this.menimage = menResponse;
      this.womenImage = womenResponse;
      this.mergedObject = this.menimage.concat(this.womenImage);
  
      for (let i of this.mergedObject) {
        if (i.name == this.searchproductname) {
          this.searchedproduct = i;
        }
      }
    });
  }


    
  

}
