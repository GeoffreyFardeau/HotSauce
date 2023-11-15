import { Injectable, Output } from '@angular/core';
import { Sauces } from './sauces';
import { Observable } from 'rxjs';
import { catchError, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from '../comments';
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


    deleteSauce(id: number): Observable<Sauces> {
      return this.http.delete<Sauces>(`http://localhost:3000/sauces/${id}`).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, undefined)
        ))}
  

addSauce(sauce: Sauces): Observable<Sauces> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  }) }

 
  return this.http.post<Sauces>('http://localhost:3000/sauces/',JSON.stringify(sauce), httpOptions).pipe(tap((response) => this.log (response)),
  catchError((error) => this.handleError(error, null))

  )}

  addComment(comment: any): Observable<any> {
    return this.http.post<Comment>('http://localhost:3000/comment/',(comment)).pipe(tap((response) => this.log (response)),)
  }

  searchSauceList(term: string): Observable<Sauces[]> {
    if (term.length <=1) {
      return of([]);
      
    }
    return this.http.get<Sauces>(`http://localhost:3000/searchSauce/?name=${term}`).pipe(
      tap((response) => this.log (response)),
      catchError((error) => this.handleError(error, [])
      )
    )
  }

private handleError(error: Error, errorValue: any) {
  console.error(error)
  return of(errorValue)

}

private log(response: any){
  console.table(response)
  }}
