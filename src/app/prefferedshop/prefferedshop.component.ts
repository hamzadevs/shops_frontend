import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { Shop } from "../shop.interface";
import { ShopService } from "../shop.service";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-prefferedshop',
  templateUrl: './prefferedshop.component.html',
  styleUrls: ['./prefferedshop.component.css']
})
export class PrefferedshopComponent implements OnInit {
  shops: Shop[];
  private nearby = false;
  constructor(private shopService: ShopService, private authService: AuthService) { }

  ngOnInit() {
    this.shopService.getPrefferedShops()
      .subscribe(
        (shops: Shop[]) => this.shops = shops,
        (error: Response) => console.log(error)
      );
  }

  onHidden(shop: Shop){
    const position = this.shops.findIndex(
      (shopEl: Shop) =>{
        return shopEl.id == shop.id;
      }
    );
    this.shops.splice(position, 1);
  }

}
