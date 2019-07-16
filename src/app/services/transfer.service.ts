import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }

  // this subject and function are used in order to make header reload when logIn button is clicked
  private msgSource = new BehaviorSubject<string>('default');
  telecast = this.msgSource.asObservable();

  toHeader(msg:string) {
    this.msgSource.next(msg);
  }


}
