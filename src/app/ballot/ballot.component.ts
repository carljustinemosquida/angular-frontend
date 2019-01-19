import { Component, OnInit } from '@angular/core';
import { Candidates } from './candidates';
import {BallotfetchService} from '../ballotfetch.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.scss']
})

export class BallotComponent implements OnInit {
  data:any;
  president:any;
  vicePresident:any;
  secretary:any;
  auditor:any;
  treasurer:any;
  pio:any;
  g7rep:any;
  g8rep:any;
  g9rep:any;
  g10rep:any;
  g11rep:any;
  g12rep:any;
  
  repList: number[] = [];

  constructor(private ballotfetch: BallotfetchService, private router: Router){}

  ngOnInit() {
  	this.fetchCandidates();
  
  }
  
  fetchCandidates(){
  	return this.ballotfetch.fetch().subscribe(
  		  res => {
          this.data = res;
  		   	console.log(res);
  		 }

  		);
  }

  onSubmitBallot(){
    const voter = localStorage.getItem('user_lrn');
    const voterId = parseInt(voter);
    const voteList: number[] = [this.president, this.vicePresident, this.secretary,this.auditor,this.pio];
    const allVotes = voteList.concat(this.repList);
    const votesData = {
      voterLRN: voterId,
      votes: allVotes
    }
    //return console.log(votesData);

    return this.ballotfetch.vote(votesData).subscribe(
      data => {console.log(data.results.message);},
      error => {console.log(error);}
      );
  }

  addLrnToArray(lrn, event){
    if(event.checked){
      this.repList.push(lrn);
    } else {
      let i = this.repList.indexOf(lrn);
      this.repList.splice(i, 1);
     }

  }
	
}

