import { Component, OnInit } from '@angular/core';
import  {Sauces} from '../sauces'
import { Router } from '@angular/router';
import { SauceService } from '../sauce.service';

@Component({
  selector: 'app-list-sauces',
  templateUrl: './list-sauces.component.html',
  styles: [
  ]
})
export class ListSaucesComponent implements OnInit {
saucesList: Sauces[] | undefined

  constructor(private sauceService: SauceService,
              private router: Router) {}
ngOnInit(){
 this.sauceService.getAllSauces().subscribe(sauceList => this.saucesList = sauceList)
 console.log(this.saucesList)
 
}


goToSauce(sauce: Sauces){
 this.router.navigate(['/sauces', sauce.id])
}}

