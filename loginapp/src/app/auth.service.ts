import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import { baseUrl } from 'src/environments/environment';
import { User } from './login/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new Subject<User>();

  constructor(private http:HttpClient) { }
  logIn(data: any): Observable<any>{
    return this.http.post(`http://3.108.105.101:8080/auth/login/`,data)
  }
}
