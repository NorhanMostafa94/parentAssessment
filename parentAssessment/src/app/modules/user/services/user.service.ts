import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { XhrService } from 'src/app/core/services/xhr.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private xhrService: XhrService) { }

  getUsersList(payload) {
    return this.xhrService.call({
      url: `users?page=${payload.page}`,
      method: 'GET',
    }).pipe(map(res => {
      return res;
    }));
  }

  getUserDetails(id) {
    return this.xhrService.call({
      url: `users/${id}`,
      method: 'GET'
    }).pipe(map(res => {
      return res;
    }));
  }

  createUser(user) {
    return this.xhrService.call({
      url: 'users',
      method: 'POST',
      body: {
        name: user.name,
        job: user.job
      }
    }).pipe(map(res => {
      return res;
    }));
  }

  updateUser(id, user) {
    return this.xhrService.call({
      url: `users/${id}`,
      method: 'POST',
      body: {
        name: user.name,
        job: user.job
      }
    }).pipe(map(res => {
      return res;
    }));
  }

  deleteUser(id) {
    return this.xhrService.call({
      url: `users/${id}`,
      method: 'DELETE'
    }).pipe(map(res => {
      return res;
    }));
  }
}
