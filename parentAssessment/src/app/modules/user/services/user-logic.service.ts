import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserLogicService {

  payload = {
    page: 1
  }

  constructor(private userService: UserService) { }

  getUsersList(payload) {
    return this.userService.getUsersList(payload).pipe(map(res => {
      return res;
    }));
  }

  getUserDetails(id) {
    return this.userService.getUserDetails(id).pipe(map(res => {
      return res;
    }));
  }

  createUser(user) {
    return this.userService.createUser(user).pipe(map(res => {
      return res;
    }));
  }

  updateUser(id, user) {
    return this.userService.updateUser(id, user).pipe(map(res => {
      return res;
    }));
  }
}
