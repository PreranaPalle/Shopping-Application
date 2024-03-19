import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { LoginComponent } from '../login/login.component';
import { FormBuilder } from '@angular/forms';
import { SharingService } from '../sharing.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [LoginComponent]
})
export class SignupComponent{
  constructor(public communicationService: CommunicationService, public sharingService: SharingService, public fb: FormBuilder, private login: LoginComponent,public location:Location) { }
  forgot: boolean = false;
  emailid: String = ''
  password: String = '';

  user: any;
  loggedin: boolean = false;
  generateotp: boolean = false;
  otp: String = '';
  validated: String = '';
  // ngOnInit(){
  //   this.sharingService.sharing$.subscribe(user=>this.user=user);
   
  // }
  onForgot() {
    this.forgot = true;
  }
  ongenerate() {

    this.communicationService.generateEmailOtp(this.emailid,"otp",null)
      .subscribe(
        response => {
          console.log("API response:", response);
          this.generateotp = true;
        },
        error => {
          console.error("API Error:", error);
        }
      );


  }
  // onvalidate(){
  //   console.log(this.otp);
  //   this.communicationService.validateEmailOtp(this.emailid,this.otp)
  //   .subscribe((response)=>{this.validated=response; console.log(this.validated+"value")});
  // }
  onlogin() {
    this.communicationService.validatelogin(this.emailid, this.password).subscribe((response: any) => {      
      this.user = response; this.loggedin = true;
      alert("Hi " + response.username);
      this.sharingService.sendValue(this.user);
      this.location.back();
    })
   

  }
  onVerify() {
    console.log("verify");
    this.validated = this.login.onvalidate(this.emailid, this.otp);
    setTimeout(() => {
      console.log("sign compoentn", this.validated);

    }, 4000);

    // let login=new LoginComponent(this.fb,this.communicationService);
    // this.validated=login.onvalidate(this.emailid,this.otp);
    // console.log(this.validated+"bhh");

  }

}
