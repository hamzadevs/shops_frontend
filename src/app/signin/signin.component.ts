import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authservice: AuthService, private router:Router) { }

  ngOnInit() {
  }

  onSignin(form: NgForm){
    this.authservice.Signin(form.value.email, form.value.password)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate['/'];},
      error => console.log(error)
    );
  }

}
