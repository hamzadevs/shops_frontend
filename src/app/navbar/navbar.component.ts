import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public showNavbar : any = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedin().subscribe(response => this.showNavbar = response);
    console.log(this.showNavbar);
  }

  onSignout(){
    this.authService.logout().subscribe(response=>this.showNavbar = false);
  }

}
