import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//components
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ShopsComponent } from './shops/shops.component';
import { ShopComponent } from './shop/shop.component';
import { PrefferedshopComponent } from './prefferedshop/prefferedshop.component';
//routing
import { routing } from './app.routing';
//services
import { AuthService } from './auth.service';
import { ShopService } from './shop.service';
//guards
import { AuthGuard } from './auth.guard';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ShopsComponent,
    ShopComponent,
    PrefferedshopComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AuthService,ShopService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
