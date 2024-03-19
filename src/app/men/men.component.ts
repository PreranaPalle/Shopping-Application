import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { SharingService } from '../sharing.service';
import { Router } from '@angular/router';
import { Cartproducts } from '../cartproducts';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  constructor(public communicationService: CommunicationService, public sharingService: SharingService,public route:Router) { }
  @Output()
  public name = new EventEmitter();
  public share: any;
  public user: any;
  menData:any;
  public cartArray:any []=[];
  ngOnInit() {
    this.communicationService.getProductsByGender('M').subscribe(response=>this.menData=response);
    
    
    this.sharingService.sharing$.subscribe(user => {
      this.user = user;
      console.log('User data received:', this.user);
      
    });
   

  }
  getuser(){
    console.log(this.user+"bnnn");
    
  }
  compare = (map1: any, map2: any) => {
     if (map1.price.length < map2.price.length) {
      return -1;
    } else if (map1.price.length > map2.price.length) {
      return 1;
    } else {
      if (map1.price < map2.price) {
        return -1;
      } else if (map1.price > map2.price) {
        return 1;
      } else {
        return 0; 
      }
    }
  };


  
  onRelevance(){
    window.location.reload();
  }
  onAscSort() {
    
    this.menData.sort(this.compare);
  }
  onDescSort() {
    this.menData.sort(this.compare).reverse();
  }



  onCartClick(value: any): void {
    this.cartArray.push(value)
  
    const cartitem:Cartproducts={
      cartproducts:this.cartArray,
      user:this.user
    }
    console.log(this.user);
    if(this.user==null){
      alert("Please login to add the product to cart")
      this.route.navigate(["/signup"])
      
    }
    else{
    
    if (!this.communicationService.cartproducts.includes(value)) {
      this.communicationService.postCartProducts(cartitem)
        .subscribe(
          response => {
            console.log("API response:", response);
            alert("Added to cart!");
          },
          error => {
            console.error("API Error:", error);
          }
        );
    }
    }
  }

}
