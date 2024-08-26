import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';



@Injectable()
export class UsersApi {
  private readonly apiController: string = 'Authentication';

  constructor(private api: HttpService) {}

  getCurrentUser(): Observable<any>{
     return this.api.get(`${this.apiController}/getsignedinuser`);
  }

 
}
