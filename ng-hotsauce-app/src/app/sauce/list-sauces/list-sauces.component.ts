import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-list-sauces',
  templateUrl: './list-sauces.component.html',
  styles: [
  ]
})
export class ListSaucesComponent implements OnInit {
sauces: any[] = [];

  constructor() {}
ngOnInit(){
   axios.get('http://localhost:3000/sauces').then((response) => {
    this.sauces = response.data;
    console.log(this.sauces);
  })
}}

