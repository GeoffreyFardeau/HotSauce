import { Component, HostListener, OnInit } from '@angular/core';
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
finalNoteArray: number[] = [];

  constructor(private sauceService: SauceService,
              private router: Router) {}
ngOnInit(){
 this.sauceService.getAllSauces().subscribe(sauceList => {this.saucesList = sauceList
  this.boucleSauce(sauceList)})
 console.log(this.saucesList)

 
}
boucleSauce(saucesList: Sauces[] | undefined) {
    if (saucesList) {
        saucesList.forEach(sauce => {
            console.log(sauce.spicyness);

            for (let i = 0; i < sauce.spicyness; i++) {
                this.finalNoteArray.push(i + 1);
                console.log(this.finalNoteArray);
            }
        });
    }
}

goToSauce(sauce: Sauces){
 this.router.navigate(['/sauces', sauce.id])
}
}


