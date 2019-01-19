import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TallyService {
  constructor(private http: HttpClient) { }

  fetchTally(position){
    return this.http.get<any[]>("http://localhost:3000/api/candidates/tally/" + position);
  }

  fetchVotedStudents(gradeLevel){
    return this.http.get<any>("http://localhost:3000/api/voters/totalVoted/" + gradeLevel);
  }

  fetchTotalStudents(gradeLevel){
    return this.http.get<any>("http://localhost:3000/api/voters/totalVoters/" + gradeLevel);
  }
}
