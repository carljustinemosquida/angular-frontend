import { Component, OnInit } from '@angular/core';
import {BallotfetchService} from '../ballotfetch.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { Inject } from '@angular/core';  
import {Router} from "@angular/router";

@Component({
  selector: 'app-ballot-dialog',
  templateUrl: './ballot-dialog.component.html',
  styleUrls: ['./ballot-dialog.component.scss']
})
export class BallotDialogComponent implements OnInit {
 votesData:any;	

  constructor(private router: Router, private ballotfetch: BallotfetchService,  @Inject(MAT_DIALOG_DATA) private data) {
  	
   } 

  ngOnInit() {
  	
  }

  loading(){
    let time = 3;
    let timer = setInterval( function() {
      document.getElementById("loading").innerHTML = '<p style="text-align: center;"> Redirection in ' + time ;
      time = time - 1;

      if(time == 0){
        clearInterval(timer);
        this.redirect();
      }
    }, 1000)
  }

  redirect(){
    this.router.navigate(['/']);
  }

  onSubmitBallot(){ 
	console.log(this.data);
    return this.ballotfetch.vote(this.data).subscribe(
      data => {
        console.log(data);
        localStorage.clear();
        localStorage.setItem('user_receipt', data._id);
        document.getElementById("success").innerHTML = ' <p style="text-align: center;"> Thanks for voting </p> ';
        this.loading();
        },
        
      error => {
        console.log(error);
      });
  }

}
