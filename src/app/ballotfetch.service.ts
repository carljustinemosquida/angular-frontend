import { Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BallotfetchService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  token = this.authService.returnUserToken();

  fetch(){
    return this.http.get<any>('http://localhost:3000/api/candidates').pipe();
  }

  vote(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    };
    return this.http.put<any>('http://localhost:3000/api/candidates/voteCandidates/',data,httpOptions).pipe();
  }

  
}

