import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLogicService {

  constructor(private authService: AuthService) { }

  login(email, password) {
    return this.authService.login(email, password).pipe(map(res => {
      return res;
    }));
  }

  checkIsLoggedIn() {
    return JSON.parse(localStorage.getItem('token'));
  }

  resetLocalStorage() {
    localStorage.removeItem("token");
  }

  getToken() {
    return JSON.parse(localStorage.getItem('token'));
  }
}
