import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { ResponseModel } from '../models/responseModel';
import { logInModel } from '../models/logInModel';
import { Hosts } from '../enums/hosts';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) {}

  logIn(logInForm: logInModel): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${Hosts.API_HOST}/user/logIn`, logInForm, httpOptions);
  }
}
