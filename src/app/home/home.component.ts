import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {HomeService} from '../home.service';
import {Router} from "@angular/router";
import {NgForm} from '@angular/forms';
import { NotifierService } from 'angular-notifier';


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

  constructor(private service: HomeService, private router: Router, private notifier: NotifierService) { }

  ngOnInit() {
  	this.section = '';
    this.theme = true;
  }

  onChange() {
    if(this.theme == false){
      this.theme = true;
    } else if(this.theme == true){
      this.theme = false;
    }
  } 

  onSubmit(userForm: NgForm){
  
    const user = {
  		fullName: this.fullName.replace(/ /g,'').toLowerCase(),
		  lrn: this.lrn,
		  gradeLevel: Number(this.gradeLevel),
		  section: this.section.replace(/ /g,'').toLowerCase()
  	}

    this.service.userChecker(user).subscribe(
      data => {
        this.notifier.notify('success',"Waiting for Authentication ...");
        this.service.storeToken(data.authToken);
        this.router.navigate(['/ballot']);
      }, error => {
        this.notifier.notify('success',"User Credentials Successfully Sended ");
        if (error.error == "Invalid Voter Details."){
          this.notifier.notify('error', error.error);
        } else if(!error.error == null){
          this.notifier.notify('error', error.error.name);
        } else {
          this.notifier.notify('error', 'Sorry, Please try again');
        }
      });  

    localStorage.setItem('user_lrn', this.lrn);
    userForm.resetForm();
  }
}
