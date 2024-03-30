import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToastComponent } from './toast/toast.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SpinnerComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [SpinnerComponent,ToastComponent]
})
export class SharedModule { }
