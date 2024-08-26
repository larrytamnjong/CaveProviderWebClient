

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UsersApi } from '../api/users.api';
import { UserData, User, Login } from '../interfaces/common/users';

import { NbAuthService } from '@nebular/auth';


@Injectable()
export class UsersService extends UserData {

  constructor(private api: UsersApi, private authService: NbAuthService) {
    super();
  }


  getCurrentUser(): Observable<User>{
    return this.api.getCurrentUser();
  }

  
}
