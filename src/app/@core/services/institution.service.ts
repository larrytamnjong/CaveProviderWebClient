import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UsersApi } from '../api/users.api';

import { InstitutionData } from '../interfaces/institution';
import { InstitutionApi } from '../api/institution.api';


@Injectable()
export class InstitutionService extends InstitutionData {

  constructor(private api: InstitutionApi) {
    super();
  }


  getInstitutionDetails(): Observable<any>{
    return this.api.getInstitutionDetails();
  }
  addOrUpdateInstitutionDetails(data: any): Observable<any> {
      return this.api.addOrUpdateInstitutionDetails(data);
  }

  
}
