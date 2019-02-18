import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken : any;
  user: any;

  constructor( private http: HttpClient ) { }

  exportToken(){
    return this.authToken;
  }

  //this must be only one time to create admin account
  register(data: IAuth){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.post<IAuth>('api/admin/', data, httpOptions).pipe();
  }

  isLogged(){
    if(localStorage.getItem('id_token') == null){
      return false;
    } else {
      return true;
    }
  }

  authenticate(data: any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.post<any>('api/admin/auth/', data, httpOptions).pipe();
  }

  storeToken(token){
    localStorage.setItem('id_token', token);
    this.authToken = token;
  }

  returnToken(){
    return localStorage.getItem('id_token');
  }

  returnUserToken(){
    return localStorage.getItem('user_token');
  }

  loadToken(){
    const token = localStorage.getItem('id_token');  
    this.authToken = token;
  }

  changePass(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('id_token')
      })
    };

    return this.http.put<any>('api/admin/changePass', data, httpOptions).pipe();
  }

}


export interface IAuth {
  username: String;
  password: String;
}