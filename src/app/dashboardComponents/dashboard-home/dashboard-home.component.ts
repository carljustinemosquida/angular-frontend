import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})

export class DashboardHomeComponent {

  tallyPositions: string[] = ['President', 'Vice President', 'Secretary'];
  displayedColumns: string[] = ['party', 'name', 'votes'];

}

