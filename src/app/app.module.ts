import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http"

import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';;
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { StaticModule } from './static/static.module';
import { PhonesModule } from './phones/phones.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    UserModule,
    StaticModule,
    PhonesModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
