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
  constructor(private shopService: ShopService, private authService: AuthService) {
  }
  ngOnInit() {
    this.shopService.getNearbyShops()
      .subscribe(
        (shops: Shop[]) => this.shops = shops,
        (error: Response) => console.log(error)
      );
  }


  onGetPrefferShops(){
    this.shopService.getPrefferedShops()
      .subscribe(
        (shops: Shop[]) => this.shops = shops,
        (error: Response) => console.log(error)
      );
  }

}
