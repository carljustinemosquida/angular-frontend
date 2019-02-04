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
  theme:any;

  constructor(private service: HomeService, private router: Router) { }

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
    console.log(this.theme);
  } 

  onSubmit(userForm: NgForm){
  
    const user = {
  		fullName: this.fullName.replace(/ /g,'').toLowerCase(),
		  lrn: this.lrn,
		  gradeLevel: Number(this.gradeLevel),
		  section: this.section.replace(/ /g,'').toLowerCase()
  
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
