import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSaucesComponent } from './sauce/list-sauces/list-sauces.component';
import { SauceInfosComponent } from './sauce/sauce-infos/sauce-infos.component';

const routes: Routes = [
  { path : 'sauces', component: ListSaucesComponent },
  {path : 'sauces/:id', component: SauceInfosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
