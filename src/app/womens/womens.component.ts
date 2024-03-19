import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { Cartproducts } from '../cartproducts';
import { Router } from '@angular/router';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css']
})
export class WomensComponent {
  cartArray: any[]=[];
  user: any;
  constructor(public communicationService:CommunicationService,public route:Router,public sharingService:SharingService){}
  womenData:any
  ngOnInit(){
    this.communicationService.getProductsByGender('F').subscribe(response=>this.womenData=response);
    this.sharingService.sharing$.subscribe(user => {
      this.user = user;
      console.log('User data received:', this.user);
      
    });
  }

  compare = (map1:any, map2:any) => {
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
  onAscSort(){
    this.womenData.sort(this.compare);

    
   }
   onDescSort(){
    this.womenData.sort(this.compare).reverse();  
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
  onBuyNow(product: any) {
    this.route.navigate(['/buynow']);
    this.sharingService.sendValue2(product);

  }
  


}
