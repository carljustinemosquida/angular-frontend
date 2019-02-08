import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import { Alert } from 'selenium-webdriver';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent {

  currPass: string;
  newPass: string;

  constructor(private authService: AuthService,  private notifier: NotifierService) { }

  changePassword(){
    this.authService.changePass({
      currentPass: this.currPass,
      newPass: this.newPass
    }).subscribe(
      res => { 
        this.notifier.notify('success',res.message);
      },
      error => { 
        this.notifier.notify('error', error.error);
      }
    );
  }

}
