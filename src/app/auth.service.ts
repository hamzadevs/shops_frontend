import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers ,Response } from '@angular/http';
import { Observable } from 'rxjs'
import 'rxjs/Rx'
@Injectable()
export class AuthService{
  constructor(private http: Http, private router: Router){

  }
  signup(name:string,email: string, password:string ){
    return this.http.post('http://shops.laravel.loc/api/user/signup',
    {name:name,email:email,password:password},
    {headers: new Headers({'X-Requested-With': 'XMLHttpResquest'})})
    .map((response: Response)=>{
      this.router.navigateByUrl('signin');
    });
  }

  Signin(email: string, password:string ){
    return this.http.post('http://shops.laravel.loc/api/user/signin',
    {email:email,password:password},
    {headers: new Headers({'X-Requested-With': 'XMLHttpResquest'})})
    .map((response: Response)=>{
      const token = response.json().token;
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_','/');
      return {token: token,decoded:JSON.parse(window.atob(base64))};
      }
    )
    .do(
      tokenData => {
        localStorage.setItem('token',tokenData.token);
        this.router.navigateByUrl('');
      }
    )
    ;
  }
  getToken(){
    return localStorage.getItem('token');
  }
  logout():Observable<boolean>{
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    return this.http.get('http://shops.laravel.loc/api/logout?token='+ this.getToken())
    .map((response: Response) => response.json().res)
    .catch((error: any )=>Observable.throw(error||'Server Error'));
  }
  isLoggedin():Observable<boolean>{
    return this.http.get('http://shops.laravel.loc/api/isloggedin?token='+ this.getToken())
    .map((response: Response) => response.json().res)
    .catch((error: any )=>Observable.throw(error||'Server Error'));
  }

}
