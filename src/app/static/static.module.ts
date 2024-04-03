import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ErrorComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ErrorComponent, HomeComponent]
})
export class StaticModule { }
