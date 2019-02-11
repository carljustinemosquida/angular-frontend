import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {HomeService} from '../home.service';
import {Router} from "@angular/router";
import {NgForm} from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { ElectionService } from '../election.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	fullName:String;
	lrn:any;
	gradeLevel:any;
  section:String; 
  authToken:any;
  theme:any;
  bodytheme:any
  electionStatus:any;
  electionStarted: any;

  constructor(private service: HomeService, private election: ElectionService, private router: Router, private notifier: NotifierService) { }

  ngOnInit() {
  	this.section = '';
    this.theme = false;
    this.bodytheme = false;
    this.electionStarted = false;
    this.electionStatus = false;
    this.onChange();
    this.electionRunning();
  }

  electionRunning(){
    this.election.getElection().subscribe( 
      data => {
          this.electionStatus = true;
          if (data.hasBegun == true){
            this.electionStarted = true;
          } 
      }, error => {

      });
  }


  onChange() {
    if(this.theme == false){
      this.bodytheme = true;
      this.theme = true;
      document.body.style.backgroundColor = "#202027";
    } else if(this.theme == true){
      this.bodytheme = false;
      this.theme = false;
      document.body.style.backgroundColor = "#FFF";
    }
  } 

  onSubmit(userForm: NgForm){
  
    const user = {
  		fullName: this.fullName.replace(/ /g,'').toLowerCase(),
		  lrn: this.lrn,
		  gradeLevel: Number(this.gradeLevel),
		  section: this.section.replace(/ /g,'').toLowerCase()
  	}
     this.notifier.notify('info', 'Please wait for a moment')
    this.service.userChecker(user).subscribe(
      data => {
        localStorage.setItem('user_name', data.da);
        localStorage.setItem('user_lrn', user.lrn);
        this.notifier.notify('success',"Voter authenticated ...");
        this.service.storeToken(data.authToken);
        
        this.router.navigate(['/ballot']);
      }, error => {
        this.notifier.notify('success',"User Credentials Successfully Sended ");
        if (error.error == "Invalid Voter Details."){
          this.notifier.notify('error', error.error);
        } else if(!error.error == null){
          this.notifier.notify('error', error.error.name);
        } else {
          this.notifier.notify('error', error.error.message);
          this.notifier.notify('error', 'Please try again later');
        }
      });  

    userForm.resetForm();
  }
}
