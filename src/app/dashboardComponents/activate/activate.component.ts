import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../auth.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss']
})
export class ActivateComponent implements OnInit {
  lrn:any;
  isSearching = true;
  data:any;

  constructor(private http: HttpClient, private auth: AuthService, private notifier: NotifierService) { }

  ngOnInit() {
  }
 
  search(){
  	return this.http.get<any>('http://localhost:3000/api/voters/searchVoter/'+this.lrn).pipe().subscribe(
  			data => { 
  				
  				this.data = data;
  				if (data.canVote == false){
  					this.isSearching = false;
  				} else if (data.canVote == true) {
            this.notifier.notify('error','User already voted');
  					
  				} else {
  					 this.notifier.notify('error','Something went wrong. Please ask for technical assistance');
  				}
  			},
  			error => {
  			   this.notifier.notify('error',error.error);
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
  				 this.notifier.notify('success',"Voter Activated");
  				this.isSearching = true;	
  			},
  			error => {
  					this.notifier.notify('error',error.error);
  			}
  		);
 	}
   	
} 
