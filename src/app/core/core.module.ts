import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon'
import { LoadsService } from './loader/loads.service';
import { ErrorComponent } from './errorMsg/error.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatIconModule
  ],
  exports: [HeaderComponent, FooterComponent, LoaderComponent, ErrorComponent]
})
export class CoreModule { }
