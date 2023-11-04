import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSaucesComponent } from './list-sauces/list-sauces.component';
import { SauceInfosComponent } from './sauce-infos/sauce-infos.component';
import { RouterModule, Routes } from '@angular/router';
import { SauceService } from './sauce.service';


const saucesRoutes: Routes = [
  {path : 'sauces/:id', component: SauceInfosComponent}
];


@NgModule({
  declarations: [
    ListSaucesComponent,
    SauceInfosComponent
  ],
  imports: [

    CommonModule,
    RouterModule.forChild(saucesRoutes)
  ],
  providers: [SauceService],
})
export class SauceModule { }
