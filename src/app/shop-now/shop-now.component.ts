import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-now',
  templateUrl: './shop-now.component.html',
  styleUrls: ['./shop-now.component.css']
})
export class ShopNowComponent {
  constructor(public route:Router){}
  menclick: boolean=false;
  womenclick:boolean=false;
  ngOnInit(){
    this.menclick=true;
  }
  onmenclick(){
    this.menclick=true;
    this.womenclick=false;
  }
  onwomenclick(){
    this.womenclick=true;
    this.menclick=false;
  }

}
