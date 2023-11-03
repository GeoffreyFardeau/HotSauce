import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListSaucesComponent } from './sauce/list-sauces/list-sauces.component';
import { SauceInfosComponent } from './sauce/sauce-infos/sauce-infos.component';
import { SauceModule } from './sauce/sauce.module';
import { list } from 'postcss';

@NgModule({
  declarations: [
    AppComponent,
    ListSaucesComponent,
    SauceInfosComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    HttpClientModule,
    SauceModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
