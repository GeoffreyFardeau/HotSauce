import { Component, OnInit } from '@angular/core';
import { Sauces } from '../sauces'
import { SauceService } from '../sauce.service';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-sauce',
  templateUrl: './search-sauce.component.html',
  styles: [
  ]
})
export class SearchSauceComponent implements OnInit {
  searchTerms = new Subject<string>();
  sauces$: Observable<Sauces[]>;
  constructor(private router: Router,
    private sauceService: SauceService) {}

    ngOnInit(): void {
      this.sauces$ = this.searchTerms.pipe(
  
        debounceTime(100),
        distinctUntilChanged(),
        switchMap((term)=> this.sauceService.searchSauceList(term))
    
       )

    }

    search(term: string) {
      this.searchTerms.next(term);
  
    }
  
    goToDetail(sauce: Sauces) {
      const link = ['/sauces', sauce.id];
      this.router.navigate(link);
    }

}
