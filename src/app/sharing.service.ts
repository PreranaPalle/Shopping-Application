import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  private sharingSource: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  sharing$: Observable<any> = this.sharingSource.asObservable();
  private sharingSource2: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  sharing2$: Observable<any> = this.sharingSource2.asObservable();
  private sharingSourcePay: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  sharingpay$: Observable<any> = this.sharingSourcePay.asObservable();
  constructor() { }
  sendValue(message:any){
    this.sharingSource.next(message);
  }
  sendValue2(message:any){
    this.sharingSource2.next(message);
  }
  sendPayValue(message:any){
    this.sharingSourcePay.next(message);
  }
  
}
