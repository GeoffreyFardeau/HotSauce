import { Component, OnInit, Input } from '@angular/core';
import { SauceService } from '../sauce.service';
import { Sauces } from '../sauces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sauce-form',
  templateUrl: 'sauce-form.component.html',
})
export class SauceFormComponent implements OnInit {
sauce: Sauces


  constructor(private sauceService: SauceService,
              private router: Router) { }

  ngOnInit(): void {
    this.sauce = new Sauces();
  }

onSubmit(){
this.sauceService.addSauce(this.sauce).subscribe((response) => this.router.navigate(['/sauces', response.id]));


}


}


