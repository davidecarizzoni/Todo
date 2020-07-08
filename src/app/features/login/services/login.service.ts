import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/model/user.interface';
import { saveCurrentUser } from 'src/app/redux/user/user.action';

@Injectable()
export class LoginService {

  constructor(private router: Router, private authService: AuthService, private store: Store) { }

  //DA COMPLETARE PER LA LOGIN CON REDUX
  executeLogin(username: string) {
    this.authService.doLogin(username).subscribe((users: User[]) => {
      if (users && users.length > 0) {
        console.log(users.length)
        sessionStorage.setItem("user", JSON.stringify(users[0]));
        this.store.dispatch(saveCurrentUser({user: users[0]}));
        this.router.navigateByUrl("/home");
      }else{
        alert("Login errata");
      }
    }, ()=>{
      alert("Login in errore");
    });

  }
}
