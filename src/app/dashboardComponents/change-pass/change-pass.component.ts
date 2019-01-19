import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent {

  currPass: string;
  newPass: string;

  constructor(private authService: AuthService) { }

  changePassword(){
    this.authService.changePass({
      currentPass: this.currPass,
      newPass: this.newPass
    }).subscribe(
      res => { // success 200 OK Status
        alert(res.message);
      },
      error => { // error handler
        alert(error.error);
      }
    );
  }

}
