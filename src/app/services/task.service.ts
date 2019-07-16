import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseModel } from '../models/responseModel';
import { Hosts } from '../enums/hosts';
import { newTaskModel } from '../models/newTaskModel';

let httpOptions = function(): any {
  return new HttpHeaders().set('Authorization', localStorage.getItem('token'));
};

let httpOptionsFull = function(): any {
  return new HttpHeaders()
    .set('Authorization', localStorage.getItem('token'))
    .set('Content-Type', 'application/json');
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) {}

  findTasks(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${Hosts.API_HOST}/task`, { headers: httpOptions() });
  }

  createTask(newTask: newTaskModel): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${Hosts.API_HOST}/task`, newTask, {
      headers: httpOptionsFull()
    });
  }

  editTask(taskToUpdate): Observable<ResponseModel> {
    return this.http.put<ResponseModel>(`${Hosts.API_HOST}/task`, taskToUpdate, {
      headers: httpOptionsFull()
    });
  }

  delTask(taskId: string): Observable<ResponseModel> {
    return this.http.delete<ResponseModel>(`${Hosts.API_HOST}/task/${taskId}`, {
      headers: httpOptions()
    });
  }

  shareTask(taskToShare): Observable<ResponseModel> {
    return this.http.put<ResponseModel>(`${Hosts.API_HOST}/task/share`, taskToShare, {
      headers: httpOptionsFull()
    });
  }

}
