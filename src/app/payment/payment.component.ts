import { Component } from '@angular/core';
import { SharingService } from '../sharing.service';
import { Router } from '@angular/router';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  user: any;
  mode:any;
  payClick:boolean=false;
  product: any;
  constructor(public sharedService:SharingService,public route:Router,public communicationService:CommunicationService) {
    
  }
  ngOnInit(){
    this.sharedService.sharing$.subscribe(user=>(this.user=user))
    console.log(this.user);
    if(this.user==null){
      alert("Please login to add the product to cart")
      this.route.navigate(["/signup"])
      
    }
    this.sharedService.sharingpay$.subscribe(product=>this.product=product)

    
  }
  onModeChange(event:any){
    this.mode=event.target.value  
  }
  pay(){
    this.payClick=true;
    console.log("p");
    

  }
  onproceed(){
    console.log(this.user.emailid+"mail");
    this.communicationService.generateEmailOtp(this.user.emailid,"pay",this.product).subscribe();
    if(this.mode=='COD'){
      alert("Order has been placed!!Please pay Rs."+this.product+"/- on the arrival of product.");
    }
    else{
    alert("Payment Successfull!!!")
    }
    this.route.navigate(["/"]);
   
    
    
  }

}
