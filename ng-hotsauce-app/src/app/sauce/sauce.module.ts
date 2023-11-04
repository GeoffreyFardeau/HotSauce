import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSaucesComponent } from './list-sauces/list-sauces.component';
import { SauceInfosComponent } from './sauce-infos/sauce-infos.component';
import { RouterModule, Routes } from '@angular/router';
import { SauceService } from './sauce.service';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { SauceFormComponent } from './sauce-form/sauce-form.component';



const saucesRoutes: Routes = [
  {path : 'sauces/:id', component: SauceInfosComponent}
];


@NgModule({
  declarations: [
    ListSaucesComponent,
    SauceInfosComponent,
    SauceFormComponent,
  ],
  imports: [

    CommonModule,
    FormsModule,
    RouterModule.forChild(saucesRoutes)
  ],
  providers: [SauceService],
})
export class SauceModule { }
