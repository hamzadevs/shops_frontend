import { Injectable } from '@angular/core';
import { Http, Headers ,Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import 'rxjs/Rx';

@Injectable()
export class ShopService{
  constructor(private http: Http, private authService: AuthService){

  }
  getNearbyShops(){
    return this.http.get('http://shops.laravel.loc/api/shop/getall?token='+this.authService.getToken())
    .map(
      (response: Response) => {
        console.log(response.json().shops);
        return response.json().shops;
      }
    );
  }
  getPrefferedShops(){
    return this.http.get('http://shops.laravel.loc/api/shop/getpreffered?token='+this.authService.getToken())
    .map(
      (response: Response) => {
        console.log(response.json().shops);
        return response.json().shops;
      }
    );
  }
  likeShop($id){
    return this.http.get('http://shops.laravel.loc/api/shop/like/'+$id+'?token='+this.authService.getToken())
    .map(
      (response: Response) => {
        console.log(response.json().shops);
        return response.json().shops;
      }
    );
  }

  dislikeShop($id){
    return this.http.get('http://shops.laravel.loc/api/shop/dislike/'+$id+'?token='+this.authService.getToken())
    .map(
      (response: Response) => {
        console.log(response.json().shops);
        return response.json().shops;
      }
    );
  }

}
