import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tallyboard',
  templateUrl: './tallyboard.component.html',
  styleUrls: ['./tallyboard.component.scss']
})
export class TallyboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tallyPositions = ['President', 'Vice President', 'Secretary', 'Auditor', 'Treasurer', '']
  displayedColumns: string[] = ['position','name', 'votes'];
}
