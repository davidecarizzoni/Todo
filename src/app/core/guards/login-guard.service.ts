import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanLoad {

  constructor(private router: Router) { }
  canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    if (sessionStorage.getItem("user") != null) {
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}
