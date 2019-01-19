import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editpoll',
  templateUrl: './editpoll.component.html',
  styleUrls: ['./editpoll.component.scss']
})
export class EditpollComponent implements OnInit {
  position: String;

  constructor() { }

  ngOnInit() {
  }

  positions: format[] =[
  	{value: 'president'},
  	{value: 'vicepresident'},
  	{value: 'secretary'}
  ]

}

export interface format{
	value: String;
}