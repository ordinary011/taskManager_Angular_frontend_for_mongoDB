import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseModel } from '../models/responseModel';
import { signUpModel } from '../models/signUpModel';
import { Hosts } from '../enums/hosts';

const httpHeader = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  signUp(signUpForm: signUpModel): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${Hosts.API_HOST}/user`, signUpForm, httpHeader);
  }
}
