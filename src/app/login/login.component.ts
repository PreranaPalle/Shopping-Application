import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommunicationService } from '../communication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   mobilenumber:String='';
   emailid:String='';
   otpgeneration:boolean=false;
   otpvalidation:boolean=false;
   otp:String='';
   validated:any;
   correctuser:any;
   studentimage:any;
   address:any;
  constructor(private fb:FormBuilder,private communicationService:CommunicationService){}
  loginForm=this.fb.group({
    image:[null, Validators.required],
    username:['',[Validators.required,Validators.minLength(4)]],
    mobilenumber:['',[Validators.required,Validators.minLength(12)]],
    address:['',Validators.required],
    emailid:['',Validators.email],
    password:['',Validators.required]
  });
  ongenerate(){
    console.log(this.loginForm.value)
    this.communicationService.generateEmailOtp(this.emailid,"otp",null)
    .subscribe();
    this.otpgeneration=true
    
  }
  onvalidate(emailid: String,otp: String):any{
    this.communicationService.validateEmailOtp(emailid,otp).subscribe((response:any)=>{     
      this.validated=response;
      if(this.validated=="verified"){
        alert("validated");
        this.otpvalidation=true;
      }
      else{
        alert('no');      
      }
    }
  );
 setTimeout(() => {
  console.log(this.validated);
  return this.validated;
 }, 3000);
}
  
  onSignUp(){
    console.log(this.loginForm.value)
    this.communicationService.saveUser(this.loginForm.value).subscribe((response:any)=>this.correctuser=response);
    alert("signed Up!!")
  }

}
