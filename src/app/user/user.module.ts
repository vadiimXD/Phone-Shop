import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { CheckDirective } from './check.directive';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { MatIconModule } from '@angular/material/icon';
import { ImageDirective } from '../validators/image.directive';




@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    CheckDirective,
    CartComponent,
    ImageDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatIconModule
  ],
  exports: [RegisterComponent, LoginComponent, ProfileComponent, CartComponent]
})
export class UserModule { }
