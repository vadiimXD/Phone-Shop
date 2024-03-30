import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './static/home/home.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { CatalogComponent } from './phones/catalog/catalog.component';
import { SearchComponent } from './phones/search/search.component';
import { CreateComponent } from './phones/create/create.component';
import { EditComponent } from './phones/edit/edit.component';
import { DetailsComponent } from './phones/details/details.component';
import { ErrorComponent } from './static/error/error.component';
import { ProfileComponent } from './user/profile/profile.component';
import { authGuard } from './user/auth.guard';
import { CartComponent } from './user/cart/cart.component';
import { loginGuard } from './user/login.guard';
import { ownerGuard } from './phones/owner.guard';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent, canActivate: [authGuard] },
  { path: "login", component: LoginComponent, canActivate: [authGuard] },
  { path: "catalog", component: CatalogComponent },
  { path: "search", component: SearchComponent },
  { path: "add/offer", component: CreateComponent, canActivate: [loginGuard] },
  { path: "edit/:offerId", component: EditComponent, canActivate: [loginGuard, ownerGuard] },
  { path: "cart", component: CartComponent },
  { path: "details/:offerId", component: DetailsComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [loginGuard] },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
