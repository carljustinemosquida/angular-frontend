import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {HomeService} from '../home.service';
import {Router} from "@angular/router";
import {NgForm} from '@angular/forms';

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

  constructor(private service: HomeService, private router: Router) { }

  ngOnInit() {
  	this.section = '';
  }

  onSubmit(userForm: NgForm){
    const trimmedSection = this.section.replace(/ /g,'').toLowerCase();
  
    const user = {
  		fullName: this.fullName,
		  lrn: this.lrn,
		  gradeLevel: this. gradeLevel,
		  section: trimmedSection
  	}

    console.log(user);
    this.service.userChecker(user).subscribe(
      data => {
        console.log(data);                     
      
        this.service.storeToken(data.authToken);
        this.router.navigate(['/ballot']);
      }, error => {
        console.log(error);
        alert("Processing your data ...");
        if (error.error == "Invalid Voter Details."){
          alert(error.error);
        } else {
          alert(error.error.name);
        }
      });  

    localStorage.setItem('user_lrn', this.lrn);
    userForm.resetForm();
  }
}
