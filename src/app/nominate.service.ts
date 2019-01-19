import { Injectable } from '@angular/core';
import {Nominee} from './dashboardComponents/nominate/nominee';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {AuthService} from './auth.service';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NominateService {

  constructor(private http:HttpClient, private authService: AuthService) { }

  fetchNominee(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
  return this.http.get<any>('http://localhost:3000/api/candidates',httpOptions).pipe();

  }

  addNominee(data:any ){
    const authToken = this.authService.returnToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': authToken
      })
    }
    console.log(httpOptions);
    return this.http.post<any>('http://localhost:3000/api/candidates/nominateCandidate', data, httpOptions).pipe();
  }

  
  updateNominee(data:any, id){
    const authToken = this.authService.returnToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': authToken
      })
    }
    return this.http.put<any>(`http://localhost:3000/api/candidates/updateCandidate/${id}`, data,httpOptions).pipe();

  }

  deleteNominee(id:any): Observable<any>{
    const authToken = this.authService.returnToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': authToken
      })
    }
    const url = `http://localhost:3000/api/candidates/removeCandidate/${id}`;
    return this.http.delete<any>(url,httpOptions).pipe();

  }
}
