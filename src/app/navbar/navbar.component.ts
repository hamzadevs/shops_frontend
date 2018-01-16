import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public showNavbar : boolean;
  constructor(private authService: AuthService) {
    this.authService.isLoggedin().subscribe((mode : boolean) =>{
            this.showNavbar = mode;
            console.log(this.showNavbar);
        });
  }

  ngOnInit() {
  }

}
