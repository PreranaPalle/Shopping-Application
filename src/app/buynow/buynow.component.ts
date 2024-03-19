import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent {
  product: any;
  numericalPart!:number;
  selectedNumber:number=1
  numbers: number[] = Array.from({ length: 10 }, (_, i) => i + 1); 
  user:any
 
  constructor(public sharedService:SharingService,public route:Router) {
    
  }
  ngOnInit(){
    this.sharedService.sharing2$.subscribe(product=>(this.product=product))
    this.sharedService.sharing$.subscribe(user=>(this.user=user))
    console.log(this.product +"product");
    console.log(this.user+"user");
    this.numericalPart = parseFloat(this.product.price.replace(/\D/g, ""));
    console.log(this.numericalPart);
    
  
    
  }
  onpay(){
    console.log(this.product.price);
    
     this.numericalPart = this.product.price.replace(/\D/g, "");
    console.log(this.selectedNumber*this.numericalPart);
    this.sharedService.sendPayValue(this.selectedNumber*this.numericalPart);
   
  }
 


}
