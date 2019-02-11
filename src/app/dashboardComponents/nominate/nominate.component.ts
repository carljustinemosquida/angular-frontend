import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {NominateService} from '../../nominate.service';
import {Nominee} from './nominee';
import { NotifierService } from 'angular-notifier';


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


  constructor(private nominate: NominateService, private notifier: NotifierService) { }

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
    this.nominate.addNominee(candidate).subscribe( 
      data => {
        const message = 'Candidate ' + data.result.fullName + ' of ' + data.result.party + ' nominated as ' + data.result.position ;
        this.notifier.notify('success', message);
        console.log(data);
      }, error => {
        this.notifier.notify('error', 'Something went wrong');
        this.notifier.notify('error', 'Please try again later');
        console.log(error);
      });

    nominateForm.resetForm();

  } 

  
}  
