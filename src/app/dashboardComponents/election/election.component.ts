import { Component, OnInit } from '@angular/core';
import {ElectionService} from '../../election.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.scss']
})
export class ElectionComponent implements OnInit {
  electionData:any;
  hasNoElection:any;	
  electionStarted:any; 
  isElectionEnded:any;

  constructor(private election: ElectionService, private router: Router) { }

  ngOnInit() {
  	this.election.getElection().subscribe(data => {
      this.electionData = data;
      this.electionResults = data.results;
      this.hasNoElection = false;
      localStorage.setItem('hasNoElection', 'false');

      this.electionStarted = this.electionData.hasBegun;
      localStorage.setItem('electionStarted', this.electionStarted);

      this.isElectionEnded = this.electionData.hasEnded;
              localStorage.setItem('isElectionEnded', this.isElectionEnded);

  		}, error => { 
  			this.electionData = error.error;
        this.hasNoElection = true;
        localStorage.setItem('hasNoElection', 'true');

      }
  	);

  }

  hasBegun(){
      if (this.electionStarted) {
        localStorage.setItem('electionStarted', 'true');
        return this.electionStarted = true;
      } else {
        localStorage.setItem('electionStarted', 'false');
        return this.electionStarted = false;
      } 
  }

  hasEnded(){
      if (this.isElectionEnded){
        localStorage.setItem('isElectionEnded', 'true');
        return this.isElectionEnded = true;
      } else {
        localStorage.setItem('isElectionEnded', 'false');
        return this.isElectionEnded = false;
      }
  }

  createElection(){
    this.election.createElection().subscribe(data => {
      localStorage.setItem('hasNoElection', 'false');
      this.hasNoElection = false;
      window.location.reload(true);
    });

  }

  startElection(){
    this.election.startElection().subscribe(data => {
      localStorage.setItem('electionStarted', 'true');
      this.electionStarted = true;
      window.location.reload(true);
    });
  }

  electionResults; any;
  endElection(){
    this.election.endElection().subscribe(data => {
      localStorage.setItem('isElectionEnded', 'true');
      this.isElectionEnded = true;
      this.electionData = data;
      this.electionResults = data.results;
      });
  }

  deleteDbElection(){
    this.election.deleteElection().subscribe(data => {
      localStorage.setItem('electionStarted', 'false');
      localStorage.setItem('isElectionEnded', 'false');
      this.isElectionEnded = false;
      localStorage.setItem('hasNoElection', 'true');
      this.hasNoElection = true;
      this.router.navigate(['/dashboard']);
    });
  }

}
