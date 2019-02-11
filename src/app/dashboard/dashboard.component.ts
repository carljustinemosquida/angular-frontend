import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
	 
  constructor(){}

  hasElection:any;
  isElectionStarted:any;

  ngOnInit() {
    this.checkElection();
    this.checkElectionStarted();
  }

  checkElection(){
    if (localStorage.getItem('hasNoElection') == 'false'){
      this.hasElection = true;
      return true ;
    } else {
      this.hasElection = false;
      return false;
    }
  }

  checkElectionStarted(){
    if (localStorage.getItem('electionStarted') == 'true'){
      this.isElectionStarted = true;
      return true;
    } else {
      this.isElectionStarted = false;
      return false;
    }
  }

  

}


