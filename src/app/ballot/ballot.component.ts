import { Component, OnInit } from '@angular/core';
import { Candidates } from './candidates';
import {BallotfetchService} from '../ballotfetch.service';
import {Router} from '@angular/router';
import {BallotDialogComponent} from '../ballot-dialog/ballot-dialog.component';
import {MatDialog, MatDialogConfig} from "@angular/material";


@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.scss']
})

export class BallotComponent implements OnInit {
  data:any;
  user:any;
  lrn:any;
  president:any;
  vicePresident:any;
  secretary:any;
  auditor:any;
  treasurer:any;
  pio:any;
  po:any;
  g9Chairman:any;
  g10Chairman:any;
  
  // g7rep:any;
  // g8rep:any;
  // g9rep:any;
  // g10rep:any;
  // g11rep:any;
  // g12rep:any;
  
  // repList: number[] = [];

  constructor(private dialog: MatDialog, private ballotfetch: BallotfetchService, private router: Router){}

  ngOnInit() {
  	this.fetchCandidates();
    this.lrn = localStorage.getItem('user_lrn');
    this.user = localStorage.getItem('user_name');
    
  }
  
  fetchCandidates(){
  	return this.ballotfetch.fetch().subscribe(
  		  res => {
          this.data = res;
  		   	console.log(res);
  		 });
  }

   openDialog() {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = true;

        const voter = localStorage.getItem('user_lrn');
        const voterId = parseInt(voter);
        const voteList: number[] = [this.president, this.vicePresident, this.secretary, this.treasurer,this.auditor,this.pio,this.po,this.g9Chairman, this.g10Chairman];
        //const allVotes = voteList.concat(this.repList);
       
        dialogConfig.data = {
            voterLRN: voterId,
            votes: voteList
        };

        this.dialog.open(BallotDialogComponent, dialogConfig);
   }

  // addLrnToArray(lrn, event){
  //   if(event.checked){
  //     this.repList.push(lrn);
  //   } else {
  //     let i = this.repList.indexOf(lrn);
  //     this.repList.splice(i, 1);
  //    }
  // }
	
}

 