import { Component, OnInit, Input } from '@angular/core';
import { Shop } from '../shop.interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Input() shop: Shop;
  constructor() { }

  ngOnInit() {
  }

}
