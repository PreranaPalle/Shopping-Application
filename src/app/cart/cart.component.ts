import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { SharingService } from '../sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  user: any;
  constructor(public communicationService:CommunicationService,public sharingService:SharingService,public route:Router){}
  cartproducts:any[]=[];
  ngOnInit(){
    this.sharingService.sharing$.subscribe(user => {
      this.user = user;
      console.log('User data received:', this.user);
      
    });
    console.log(this.user);
    
    if(this.user==null){
      alert("Please login to view products in cart!")
      this.route.navigate(["/signup"]);
    }
    else{
    this.communicationService.getCartProducts(this.user.id)
    .subscribe(
      (data: any[]) => {
        this.cartproducts = data;
      },
      error => {
        console.error('Error fetching cart products:', error);
        // Handle error if needed..
      }
    );

  }
}
  
}
