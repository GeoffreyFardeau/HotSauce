import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListSaucesComponent } from './sauce/list-sauces/list-sauces.component';
import { SauceInfosComponent } from './sauce/sauce-infos/sauce-infos.component';
import { SauceModule } from './sauce/sauce.module';
import { list } from 'postcss';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SearchSauceComponent } from './sauce/search-sauce/search-sauce.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchSauceComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SauceModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
