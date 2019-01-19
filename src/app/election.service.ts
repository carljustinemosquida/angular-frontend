import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import  {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getElection(){
  	return this.http.get<any>('http://localhost:3000/api/election/').pipe();
  }
 
  createElection(){
  	const authToken = this.auth.returnToken();
  	 const httpOptions = {
  	 	headers: new HttpHeaders({
  	 		'Authorization' : authToken
  	 	})
  	 }
  	  return this.http.post<any>('http://localhost:3000/api/election/createElection',null,httpOptions).pipe();
  }

  startElection(){
    const authToken = this.auth.returnToken();
     const httpOptions = {
       headers: new HttpHeaders({
         'Authorization' : authToken
       })
     }
    return this.http.put<any>('http://localhost:3000/api/election/beginElection',null,httpOptions).pipe();
  }

  endElection(){
    const authToken = this.auth.returnToken();
     const httpOptions = {
       headers: new HttpHeaders({
         'Authorization' : authToken
       })
     }
  	return this.http.put<any>('http://localhost:3000/api/election/endElection',null,httpOptions).pipe();

  }

  deleteElection(){
  	const authToken = this.auth.returnToken();
  	 const httpOptions = {
  	 	headers: new HttpHeaders({
  	 		'Authorization' : authToken
  	 	})
    }

    return this.http.delete<any>('http://localhost:3000/api/election/deleteElection',httpOptions).pipe();
  }
}
