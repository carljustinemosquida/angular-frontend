import { Component, OnInit } from '@angular/core';
import {BallotfetchService} from '../ballotfetch.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { Inject } from '@angular/core';  


@Component({
  selector: 'app-ballot-dialog',
  templateUrl: './ballot-dialog.component.html',
  styleUrls: ['./ballot-dialog.component.scss']
})
export class BallotDialogComponent implements OnInit {
 votesData:any;	

  constructor(private ballotfetch: BallotfetchService,  @Inject(MAT_DIALOG_DATA) private data) {
  	
   }

  ngOnInit() {
  	
  }

  onSubmitBallot(){ 
	console.log(this.data);
    return this.ballotfetch.vote(this.data).subscribe(
      data => {
        console.log(data);
        localStorage.clear();
        localStorage.setItem('user_receipt', data._id);
      },
      error => {
        console.log(error);
      });
  }

}
