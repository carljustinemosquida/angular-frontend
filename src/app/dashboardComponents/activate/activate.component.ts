import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss']
})
export class ActivateComponent implements OnInit {
  lrn:any;
  isSearching = true;
  data:any;

  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit() {
  }

  search(){
  	return this.http.get<any>('http://localhost:3000/api/voters/searchVoter/'+this.lrn).pipe().subscribe(
  			data => { 
  				console.log(data);

  				this.data = data;
  				if (data.canVote == false){
  					this.isSearching = false;
  				} else if (data.canVote == true) {
  					alert('User alraedy voted');
  				} else {
  					alert ('Something went wrong. Please ask for technical assistance');
  				}
  			},
  			error => {
  				console.log(error);
  				alert(error.error);
  			}
  		);
  }

  onActivate(){
  	const lrn = this.data.lrn;
  	const authToken = this.auth.returnToken();
  	const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': authToken
      })}

  	return this.http.put<any>('http://localhost:3000/api/voters/activateVoter/'+lrn, null, httpOptions).pipe().subscribe(
  			data => {
  				console.log(data);
  				alert("Voter Activated");
  				this.isSearching = true;	
  			},
  			error => {console.log(error);
  					alert(error.error);
  			}
  		);
 	}
   	
} 
