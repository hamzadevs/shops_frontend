import { Component, OnInit, Input } from '@angular/core';
import { Shop } from '../shop.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Input() shop: Shop;
  private isloggedin;
  constructor(private authService: AuthService) {
    this.isloggedin = this.authService.isLoggedin();
  }

  ngOnInit() {
  }
  onLike(){

  }
  onDislike(){

  }

}
