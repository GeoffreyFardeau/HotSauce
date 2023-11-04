import { Injectable } from '@angular/core';
import axios from 'axios';
import { Sauces } from './sauces';
import { Observable } from 'rxjs';
import { catchError, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SauceService {

  constructor(private http: HttpClient) { }


getAllSauces():Observable<Sauces[]> {
 return this.http.get<Sauces[]>('http://localhost:3000/sauces').pipe(
  tap((response) => this.log (response)),
  catchError((error) => this.handleError(error, undefined)
))
}

getSauceById(id: number): Observable<Sauces> {
  return this.http.get<Sauces>(`http://localhost:3000/sauces/${id}`).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, undefined)
    ))}

private handleError(error: Error, errorValue: any) {
  console.error(error)
  return of(errorValue)

}

private log(response: any){
  console.table(response)
  }}
