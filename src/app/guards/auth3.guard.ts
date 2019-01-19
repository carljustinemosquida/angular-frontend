import { Injectable } from '@angular/core';
import { Router, CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
import {Observable} from 'rxjs';
@Injectable()
export class Auth3Guard implements CanActivate{
  constructor (private authService:AuthService, private router:Router){

  }

  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :boolean
       {
    if (localStorage.getItem('electionStarted') == 'false'){
      return true;
    } else if (localStorage.getItem('electionStarted') == 'true'){
      return false;
    }
  }
}