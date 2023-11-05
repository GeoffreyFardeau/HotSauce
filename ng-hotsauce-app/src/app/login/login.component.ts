import { Component } from '@angular/core';
import { User } from '../user'
import { Router } from '@angular/router';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  user: User

  
    constructor(private router: Router,
                private loginService: LoginService) { }
    
  
    ngOnInit(): void {
      this.user = new User();
    }

    onSubmit(){
      this.loginService.loginMember(this.user).subscribe((response) => {
        this.loginService.setCookie(response.token),
        this.router.navigate(['/sauces'])
      }
    
      );
    }



    
}
