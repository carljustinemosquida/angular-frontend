import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../auth.service';
import { NotifierService } from 'angular-notifier';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss']
})
export class ActivateComponent implements OnInit {

	paramType:string = "LRN";
	paramValue: any;
	param:any = {};
	data:any[];

	constructor(
		private http: HttpClient,
		private notifier: NotifierService,
		private auth: AuthService){}

	ngOnInit(){}

	search(){
		const httpOptions = {
			headers: new HttpHeaders({
			  'Content-type': 'application/json'
			})
		};

		switch(this.paramType){
			case "LRN":
				this.param = {param: {lrn: this.paramValue}}
				break;
			case "Full Name":
				this.param =  {param:{fullName: this.paramValue}}
				break;
			case "Grade Level":
				this.param =  {param:{gradeLevel: this.paramValue}}
				break;
			case "Section":
				this.param = {param:{section: this.paramValue}}
				break;
		}

		console.log(this.param);
		return this.http.post<any>('http://localhost:3000/api/voters/searchVoter/',this.param, httpOptions)
			.pipe().subscribe(
				(data) => {
					if(data.length == 0){
						this.data = null;
						this.notifier.notify('error', "No Voters Found.");
					}else{
						this.data = data;
						this.notifier.notify('success', "Voters Found!");
					}

					console.log("Data:" + data);
				},
				(error)=> {
					this.notifier.notify('error',"Something is wrong. Check your input.");
					this.data = null;
					console.log(error);
				})
	}

	// Flips canVote true -> false vv.
	activate(voter){
		const authToken = this.auth.returnToken();
		const httpOptions = {
		headers: new HttpHeaders({
		  'Content-type': 'application/json',
		  'Authorization': authToken
		})}

		return this.http.put<any>('http://localhost:3000/api/voters/activateVoter/'+ voter.lrn, null, httpOptions).pipe().subscribe(
				data => {
					if(data.canVote)
						this.notifier.notify('success',"Voter Activated");
					else
						this.notifier.notify('error',"Voter Deactivated");
					
					this.data[this.data.indexOf(voter)] = data;
				},
				error => {
						this.notifier.notify('error',error.error);
				}
			);

			
	   }
	   
} 
