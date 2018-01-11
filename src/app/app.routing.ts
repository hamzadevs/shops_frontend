import { ModuleWithProviders } from '@angular/core' ;
import { Routes,RouterModule } from "@angular/router";
import { ShopsComponent } from './shops/shops.component' ;
import { SignupComponent } from './signup/signup.component' ;
import { SigninComponent } from './signin/signin.component' ;

const APP_ROUTES: Routes = [
  {path:"",component:ShopsComponent},
  {path:"signup",component:SignupComponent},
  {path:"signin",component:SigninComponent}
];

export const routing: ModuleWithProviders=RouterModule.forRoot(APP_ROUTES);
