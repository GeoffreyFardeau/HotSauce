import { Component, OnInit, inject } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { UserService } from './login/user.service';
import { Observable, map } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  isUserLoggedIn$: Observable<boolean>;
  firstName$: Observable<string>;

  token: any




  constructor(private loginService: LoginService,
    private router: Router, private userService: UserService) { }
    cookieService = inject(CookieService);

  ngOnInit(){
    this.token = this.loginService.getToken()
    this.isUserLoggedIn$ = this.userService.getUserState().pipe(map(userState => userState.isLoggedIn));
    this.firstName$ = this.userService.getUserState().pipe(map(userState => userState.firstName));
 
    console.log("zouzouzoué",this.token)
   
  }

  logout() {
    this.cookieService.deleteAll()
    this.userService.setUserState(false, '')
    this.router.navigate(['/sauces'])
  }

  
}
