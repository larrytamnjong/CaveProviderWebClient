 

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable()
export class IdentityHttpService {

  get identityUrl(): string {
    return environment.identityUrl;
  }

  constructor(private http: HttpClient) {}



  get(endpoint: string, options?): Observable<any> {
    return this.http.get(`${this.identityUrl}/${endpoint}`, options);
  }

  post(endpoint: string, data, options?): Observable<any> {
    return this.http.post(`${this.identityUrl}/${endpoint}`, data, options);
  }

  put(endpoint: string, data, options?): Observable<any> {
    return this.http.put(`${this.identityUrl}/${endpoint}`, data, options);
  }

  delete(endpoint: string, options?): Observable<any> {
    return this.http.delete(`${this.identityUrl}/${endpoint}`, options);
  }
}
