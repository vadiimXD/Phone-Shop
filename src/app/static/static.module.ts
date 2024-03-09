import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [ErrorComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  exports: [ErrorComponent, HomeComponent]
})
export class StaticModule { }
