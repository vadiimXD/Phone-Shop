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


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent, },
  { path: "login", component: LoginComponent },
{ path: "catalog", component: CatalogComponent },
{ path: "search", component: SearchComponent },
{ path: "add/offer", component: CreateComponent },
{ path: "edit/:offerId", component: EditComponent },
{ path: "details/:offerId", component: DetailsComponent },
{ path: 'profile', component: ProfileComponent },
{ path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
