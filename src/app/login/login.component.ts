import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: any;
  username: String;
  password: String;

  constructor(private auth: AuthService, private router: Router) { }

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
        this.router.navigate(['/dashboard/election']);
    }, err => {
        alert(err.error);
    });
  	
  }

}
