 

import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';


@Injectable()
export class UsersApi {
  private readonly apiController: string = 'Authentication';

  constructor(private api: HttpService) {}

  getCurrentUser(): Observable<any>{
     return this.api.get(`${this.apiController}/getuser`);
  }

 
}
