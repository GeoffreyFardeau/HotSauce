import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SauceService } from '../sauce.service';
import { Sauces } from '../sauces';

@Component({
  selector: 'app-sauce-infos',
  templateUrl: './sauce-infos.component.html',
  styles: [
  ]
})
export class SauceInfosComponent implements OnInit{
  sauceList: Sauces[] | undefined
  sauce: Sauces | undefined

  constructor(private sauceService: SauceService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void  {
    const sauceId: string | null = this.route.snapshot.paramMap.get('id');
    console.log(sauceId)

    if(sauceId) {
      this.sauceService.getSauceById(+sauceId).subscribe(sauce => this.sauce = sauce)

    } else {
      this.sauce = undefined
    }
   
  }

deleteSauce(id: any){
  this.sauceService.deleteSauce(id).subscribe((response) => this.router.navigate(['/sauces']));
  

}

}
