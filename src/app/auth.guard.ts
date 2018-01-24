import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  public isLoggedin: boolean = false;
  public redirectUrl: string;

  constructor(private router: Router, private authService:AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.redirectUrl = state.url;
    return this.checkLogin(this.redirectUrl);
  }

  checkLogin(url: string):boolean{
    if(this.isLoggedin){
      return true;
    }else{
      this.authService.isLoggedin().subscribe(
        response => {
          this.isLoggedin = true;
          this.router.navigateByUrl(url);
        },
        error => {
          this.isLoggedin = false;
          this.router.navigateByUrl('signin');
        }
      );
    }
  }
}
