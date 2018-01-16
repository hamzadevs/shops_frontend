import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { Shop } from "../shop.interface";
import { ShopService } from "../shop.service";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  shops: Shop[];
  private isloggedin;
  private nearby = true;
  constructor(private shopService: ShopService, private authService: AuthService) {
    this.isloggedin = this.authService.isLoggedin();
  }
  ngOnInit() {
    this.shopService.getNearbyShops()
      .subscribe(
        (shops: Shop[]) => this.shops = shops,
        (error: Response) => console.log(error)
      );
  }


  onGetShops(){
    this.shopService.getNearbyShops()
      .subscribe(
        (shops: Shop[]) => this.shops = shops,
        (error: Response) => console.log(error)
      );
  }

}
