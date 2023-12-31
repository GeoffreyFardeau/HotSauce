import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User} from './user';
import { Observable, catchError, of, tap } from 'rxjs';
import * as jwt from 'jsonwebtoken';
import {CookieService} from 'ngx-cookie-service';
import { jwtDecode } from "jwt-decode";
import { UserService } from './login/user.service';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;


  



  constructor(private http: HttpClient,
    private cookieService: CookieService, private userService : UserService) { }


  loginMember(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    }) }
   
    return this.http.post<User>('http://localhost:3000/login/',JSON.stringify(user), httpOptions).pipe(tap((response) => this.log (response)),
    catchError((error) => this.handleError(error, null)), tap((response) => this.userService.setUserState(true, response.firstname)),
  
    )

  }

 setCookie (token: any) {
  this.cookieService.set('token', token);

 const decoded = jwtDecode(token)
 console.log(decoded)
 console.log("coucou",decoded)
};

getToken() {
  interface CustomJwtPayload extends jwt.JwtPayload {
    id: string;
  }
 const token = this.cookieService.get('token');

 if(!token){
  return null

 }
 const decoded = jwtDecode(token) as CustomJwtPayload
return decoded

}

logout() {
  this.cookieService.delete('token');
  this.isLoggedIn = false
  
}




private handleError(error: Error, errorValue: any) {
  console.error(error)
  return of(errorValue)

}

private log(response: any){
  console.table(response)
  }



  setLoggedIn(): void {
    this.isLoggedIn = true;
  }
  
}




