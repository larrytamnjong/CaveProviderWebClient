import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHttpService } from './api-http.service';



@Injectable()
export class InstitutionApi {
  private readonly apiController: string = 'Institution';

  constructor(private api: ApiHttpService) {}

  getInstitutionDetails(): Observable<any>{
     return this.api.get(`${this.apiController}/getinstitutiondetails`);
  }
  addOrUpdateInstitutionDetails(data: any): Observable<any>{
    return this.api.post(`${this.apiController}/addorupdateinstitutiondetails`, data)
  }
 
}
