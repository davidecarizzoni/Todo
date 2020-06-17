import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModule } from '../login.module';

@Injectable()
export class LoginService {

  constructor(private router: Router) { }

  executeLogin(username: string){
    sessionStorage.setItem("user", username);
    this.router.navigateByUrl("/home");
  }
}
