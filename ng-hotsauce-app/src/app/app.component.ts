import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  token: any




  constructor(private loginService: LoginService,
    private router: Router) { }



  ngOnInit(){
  const token = this.loginService.getToken()
  console.log("ici",token)
this.token = token
   
  }
  title = 'Hot Sauce !';

  logout() {
    this.loginService.logout()
    this.router.navigate(['/sauces'])
  }

  
}
