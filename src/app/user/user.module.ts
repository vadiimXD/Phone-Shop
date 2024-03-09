import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { CheckDirective } from './check.directive';




@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    CheckDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [RegisterComponent, LoginComponent, ProfileComponent]
})
export class UserModule { }
