import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthLogicService } from 'src/app/modules/login/services/auth-logic.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authLogicService: AuthLogicService, private router: Router,) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    if (this.authLogicService.checkIsLoggedIn()) {
      return this.checkIsLogged(url);
    }
    else {
      return this.checkIsLogged(url);
    }
    return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  checkIsLogged(url: string) {
    let res: boolean = false;
    let redirectUrl: string;

    if (!url.includes('/login')) {
      if (this.authLogicService.checkIsLoggedIn()) {
        return true;
      }
      else {
        redirectUrl = '/login';
      }
    }
    else if (url.includes('/login')) {
      if (!this.authLogicService.checkIsLoggedIn()) {
        return true;
      }
      else {
        redirectUrl = '/users';
      }
    }


    if (redirectUrl) {
      this.router.navigate([redirectUrl]);
    }

    return res;
  }


}
