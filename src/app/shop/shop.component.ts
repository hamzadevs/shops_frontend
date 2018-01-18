import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() shopLiked = new EventEmitter<Shop>();
  public nearby: boolean = false;
  constructor(private authService: AuthService,private router: Router,private shopService:ShopService) {
  }

  ngOnInit() {
    if(this.router.url ==="/") this.nearby = true;
    else this.nearby=false;
  }
  onLike(){
    this.shopService.likeShop(this.shop.id)
    .subscribe(
      (response)=>{
        this.shopLiked.emit(this.shop);
        console.log(response);
    });
  }
  onDislike(){
    this.shopService.dislikeShop(this.shop.id)
    .subscribe(
      (response)=>{
        this.shopLiked.emit(this.shop);
        console.log(response);
    });
  }

}
