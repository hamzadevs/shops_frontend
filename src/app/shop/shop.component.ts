import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Shop } from '../shop.interface';
import { AuthService } from '../auth.service';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Input() shop: Shop;
  public nearby: boolean = false;
  constructor(private authService: AuthService,private router: Router,private shopService:ShopService) {
  }

  ngOnInit() {
    if(this.router.url ==="/") this.nearby = true;
    else this.nearby=false;
  }
  onLike($id){
    this.shopService.likeShop($id);
  }
  onDislike($id){
    this.shopService.dislikeShop($id);
  }

}
