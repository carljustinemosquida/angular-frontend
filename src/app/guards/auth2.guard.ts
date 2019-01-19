import { Injectable } from '@angular/core';
import { Router, CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
import {Observable} from 'rxjs';
@Injectable()
export class Auth2Guard implements CanActivate{
  constructor (private authService:AuthService, private router:Router){

  }

  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :boolean
       {
    if (localStorage.getItem('hasNoElection') == 'true'){
      console.log(localStorage.getItem('hasNoElection') == 'true');
      this.router.navigate(['/dashboard/election']);
      return false;
    } else if (localStorage.getItem('hasNoElection') == 'false'){
      console.log(localStorage.getItem('hasNoElection') == 'false');
      return true;
    }
  }
}