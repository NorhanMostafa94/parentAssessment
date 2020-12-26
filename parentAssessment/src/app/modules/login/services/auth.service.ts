import { Injectable } from '@angular/core';
import { XhrService } from 'src/app/core/services/xhr.service';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private xhrService: XhrService) { }

  login(email, password) {
    return this.xhrService.call({
      url: 'login',
      method: 'POST',
      body: {
        "email": email,
        "password": password
      }
    }).pipe(map(res => {
      return res;
    }));
  }
}
