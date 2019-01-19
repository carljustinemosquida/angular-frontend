import { Component, OnInit, Input } from '@angular/core';
import { TallyService } from '../../../tally.service';

@Component({
  selector: 'app-tally-row',
  templateUrl: './tally-row.component.html',
  styleUrls: ['./tally-row.component.scss']
})

export class TallyRowComponent implements OnInit {

  @Input("tallyPos") tallyPositions: string[];
  @Input("columns") displayedColumns: string[];
  talliedResults: any[] = [];
  
  maxTallyLength: number = 0;
  heightRatio: string = "100:20";

  dataFetched: boolean = false;
 
  constructor(private tallyService: TallyService) {}

  ngOnInit() {
    this.fetchTally()
      .then(() => this.dataFetched = true)
      .catch((error) => console.log(error));
  }

  fetchTally(){
    return new Promise((resolve, reject) => {
      this.tallyPositions.forEach(element => {
        this.tallyService.fetchTally(element).subscribe(res => {
          this.talliedResults.push(res);
  
          if(res.length > this.maxTallyLength){
            this.maxTallyLength = res.length;
            this.heightRatio = "100:" + String(20 + (15 * this.maxTallyLength));
          }
        }, (error) => reject(error));
      });
      resolve();
    })
  }
}