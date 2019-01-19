import { Component, OnInit, Input } from '@angular/core';
import { TallyService } from '../../../tally.service';

@Component({
  selector: 'app-voter-pie-chart',
  templateUrl: './voter-pie-chart.component.html',
  styleUrls: ['./voter-pie-chart.component.scss']
})
export class VoterPieChartComponent implements OnInit{

  @Input("grade") gradeLevel: string;
  fetchedTotalVoters: boolean;
  fetchedTotalVoted: boolean;
  totalVoters: number;
  totalVoted: any[];
  constructor(private tallyService: TallyService){}

  ngOnInit(){
    this.fetchVotedStudents()
      .then(() => this.fetchedTotalVoted = true)
      .catch((error) =>  console.log(error));
    
    this.fetchTotalStudents()
      .then(() => this.fetchedTotalVoters = true)
      .catch((error) =>  console.log(error));
  }


  fetchVotedStudents(){
    return new Promise((resolve, reject) => {
      this.tallyService.fetchVotedStudents(this.gradeLevel).subscribe(
        (res) => {
          if(this.gradeLevel == "all"){
            this.totalVoted = [{"name": "All Grade Levels", "value": res.totalVoters}];
          }else{
            this.totalVoted = [{"name": "Grade " + this.gradeLevel, "value": res.totalVoters}];
          }

          resolve();
        }, 
        (error) => reject(error));
    });
  }

  fetchTotalStudents(){
    return new Promise((resolve, reject) => {
      this.tallyService.fetchTotalStudents(this.gradeLevel).subscribe(
        (res) => {
          this.totalVoters = res.totalVoters;
          resolve();
        }, 
        (error) => reject(error));
    })
  }

  view : any[] = [0, 0];

  colorScheme =  {
    domain: [ '#f40d30', '#A10A28', '#C7B42C', '#AAAAAA' ]
  };

  public customColors = [
    { 
      name: 'showLabels',
      value: '#ffffff'
    },
    { 
      name: 'Student already voted',
      value: '#ffffff'
    }
  ];

  showLabels = "Voted Students";
}
