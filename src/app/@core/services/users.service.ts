

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UsersApi } from '../api/users.api';
import { UserData, User, Login } from '../interfaces/users';

import { NbAuthService } from '@nebular/auth';


@Injectable()
export class UsersService extends UserData {

  constructor(private api: UsersApi, private authService: NbAuthService) {
    super();
  }


  getSignedInUserDetails(): Observable<User>{
    return this.api.getSignedInUserDetails();
  }

  
}
