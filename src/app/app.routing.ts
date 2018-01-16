import { ModuleWithProviders } from '@angular/core' ;
import { Routes,RouterModule } from "@angular/router";
import { ShopsComponent } from './shops/shops.component' ;
import { SignupComponent } from './signup/signup.component' ;
import { SigninComponent } from './signin/signin.component' ;
import { PrefferedshopComponent } from './prefferedshop/prefferedshop.component' ;
import { AuthGuard } from './auth.guard' ;

const APP_ROUTES: Routes = [
  {path:"",component:ShopsComponent,canActivate:[AuthGuard]},
  {path:"signup",component:SignupComponent},
  {path:"signin",component:SigninComponent},
  {path:"preffer",component:PrefferedshopComponent,canActivate:[AuthGuard]}
];

export const routing: ModuleWithProviders=RouterModule.forRoot(APP_ROUTES);
