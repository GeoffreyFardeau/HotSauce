import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSaucesComponent } from './sauce/list-sauces/list-sauces.component';
import { SauceInfosComponent } from './sauce/sauce-infos/sauce-infos.component';
import { LoginComponent } from './login/login.component';
import { SauceFormComponent } from './sauce/sauce-form/sauce-form.component';

const routes: Routes = [
  { path : 'sauces', component: ListSaucesComponent },
  {path : 'sauces/:id', component: SauceInfosComponent},
  {path: 'login', component:LoginComponent},
  {path: 'sauce-form', component:SauceFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
