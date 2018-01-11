import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { routing } from './app.routing';
import { AuthService } from './auth.service';
import { ShopService } from './shop.service';
import { ShopsComponent } from './shops/shops.component';
import { ShopComponent } from './shop/shop.component';
import { PreferredshopsComponent } from './preferredshops/preferredshops.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ShopsComponent,
    ShopComponent,
    PreferredshopsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AuthService,ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
