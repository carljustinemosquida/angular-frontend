import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: String;
  password:String;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onRegisterMethod(){
  	const credentials = {
      username : this.username,
      password: this.password
    }

    this.auth.register(credentials).subscribe(data => console.log(data));
  }

}
