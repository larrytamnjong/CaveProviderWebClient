import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdentityHttpService } from './common/identity-http.service';



@Injectable()
export class UsersApi {
  private readonly apiController: string = 'Authentication';

  constructor(private api: IdentityHttpService) {}

  getSignedInUserDetails(): Observable<any>{
     return this.api.get(`${this.apiController}/getsignedinuserdetails`);
  }

 
}
