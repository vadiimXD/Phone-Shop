import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon'
import { LoadsService } from './loader/loads.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatIconModule
  ],
  exports: [HeaderComponent, FooterComponent, LoaderComponent]
})
export class CoreModule { }
