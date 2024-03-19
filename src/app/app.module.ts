import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormatTimePipe, HomeComponent } from './home/home.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { WomensComponent } from './womens/womens.component';
import { MenComponent } from './men/men.component';
import { ShopNowComponent } from './shop-now/shop-now.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { BuynowComponent } from './buynow/buynow.component';
import { PaymentComponent } from './payment/payment.component';
import { AngularMapsComponent } from './angular-maps/angular-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormatTimePipe,
    WomensComponent,
    MenComponent,
    ShopNowComponent,
    CartComponent,
    SignupComponent,
    LoginComponent,
    SearchComponent,
    BuynowComponent,
    PaymentComponent,
    AngularMapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right'
    }),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
