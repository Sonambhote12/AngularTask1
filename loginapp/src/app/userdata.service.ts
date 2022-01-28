import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { 
    //fetching data from api 
  } 
  getUserData(){
    let apiurl="http://3.108.105.101:8080";
    return this.http.get(apiurl);
  }
 
}
