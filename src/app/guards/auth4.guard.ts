import { Injectable } from '@angular/core';
import { Router, CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs';
@Injectable()
export class Auth4Guard implements CanActivate  {
  constructor ( private router:Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :boolean
       {
    if(localStorage.getItem('user_lrn') == null) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }

}