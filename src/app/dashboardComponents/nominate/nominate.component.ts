import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {NominateService} from '../../nominate.service';
import {Nominee} from './nominee';


@Component({
  selector: 'app-nominate',
  templateUrl: './nominate.component.html',
  styleUrls: ['./nominate.component.scss']
})
export class NominateComponent implements OnInit {

  lrn:number;
  fullName:String;
  party: String;
  gradeLevel:number;
  section:String;
  position:String;


  constructor(private nominate: NominateService) { }

  ngOnInit() {
  }
 
  onNominateMethod(nominateForm: NgForm) {
    const candidate = {
      lrn: this.lrn,
      fullName: this.fullName,
      party: this.party,
      gradeLevel: this.gradeLevel,
      section: this.section,
      position: this.position
    }
    this.nominate.addNominee(candidate).subscribe( data => console.log(data));

    nominateForm.resetForm();

  } 

  
}  
