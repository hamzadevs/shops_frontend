import { Injectable } from '@angular/core';
import { Http, Headers ,Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class ShopService{
  constructor(private http: Http){

  }
  getNearbyShops(){
    return this.http.get('http://shops.laravel.loc/api/shop/getall')
    .map(
      (response: Response) => {
        console.log(response.json().shops);
        return response.json().shops;
      }
    );
  }

}
