import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cartproducts } from './cartproducts';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  res:any;
  apiurl="http://localhost:8080/cart"
  getCartByUser="http://localhost:8080/cart/user"
  getproductsbygender="http://localhost:8080/cart"
  generateemailotpurl="http://localhost:8080/otp/sendEmailOtp"
  validateemailotpurl="http://localhost:8080/otp/validateEmailOtp"
  saveUserUrl="http://localhost:8080/otp/save"
  validateloginurl="http://localhost:8080/otp/verify"
  postImage="http://localhost:8080/postImage"
  getRandProducts="http://localhost:8080/cart"
  constructor(private http:HttpClient) { }
   cartproducts:Array<any>=[];
   getProductsByGender(gender:any):Observable<any>{
    return this.http.get(`${this.getproductsbygender}/${gender}`)
   }
   postCartProducts(cartproducts:Cartproducts):Observable<any>{ 
    return this.http.post(this.apiurl,cartproducts);
   }
   getCartProducts(user:any):Observable<any[]>{
  
    return this.http.get<any>(`${this.getCartByUser}/${user}`);
   }
   generateEmailOtp(emailid:any,mailtype:any,amount:any):Observable<any>{
    const formData = new FormData();
    formData.append('emailid', emailid);
    formData.append('mailtype', mailtype);
    formData.append('amount', amount);
    return this.http.post(this.generateemailotpurl,formData,{responseType: 'text'});
   }
   validateEmailOtp(emailid:String,otp:String):Observable<any>{
    return this.http.get(`${this.validateemailotpurl}/${emailid}/${otp}`,{responseType: 'text'});
   }
   saveUser(user:Object){
    return this.http.post(this.saveUserUrl,user,{responseType: 'text'})
    // return this.http.post(this.postImage,user,{responseType: 'text'})
   }
   validatelogin(emailid:String,password:String):Observable<any>{
    return this.http.post(`${this.validateloginurl}/${emailid}/${password}`,{responseType: 'text'})
   }
   getRandomProducts(gender:any){
    return this.http.get(`${this.getRandProducts}/gender`,{responseType: 'text'})
   }
}
