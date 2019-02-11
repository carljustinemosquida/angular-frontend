import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: any;
  username: String;
  password: String;

  constructor(private auth: AuthService, private router: Router, private notifier: NotifierService) { }

  ngOnInit() {
  }

   onLoginMethod(){
  	const credentials = {
      username : this.username,
      password: this.password
    }

    this.auth.authenticate(credentials).subscribe(
      data => {
        this.auth.storeToken(data.authToken);
        this.notifier.notify('success',"Session Authenticated");
        this.router.navigate(['/dashboard/election']);
    }, err => {
         this.notifier.notify('error',err.error);
    });
  	
  }

}
