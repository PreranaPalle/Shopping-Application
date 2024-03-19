import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WomensComponent } from './womens/womens.component';
import { MenComponent } from './men/men.component';
import { ShopNowComponent } from './shop-now/shop-now.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';
import { BuynowComponent } from './buynow/buynow.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
 {
  path:'',component:HomeComponent
 },
 {
  path:'women',component:WomensComponent
 },
 {
  path:'men',component:MenComponent
 },
 {
  path:'shopnow',component:ShopNowComponent
 },
 {
  path:'cart',component:CartComponent
 },
 {
  path:'login',component:LoginComponent
 },
 {
  path:'signup',component:SignupComponent
 },
 {
  path:'search/:searchproduct',component:SearchComponent
 },
 {
  path:'buynow',component:BuynowComponent
 },
 {
  path:'pay',component:PaymentComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
