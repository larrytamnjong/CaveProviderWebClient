import { Injectable } from "@angular/core";
import { ApiHttpService } from "./common/api-http.service";
import { Observable } from "rxjs";
import { AcademicYear } from "../interfaces/academic-year";
@Injectable()
export class AcademicYearApi {
  private readonly apiController: string = 'AcademicYear';

  constructor(private api: ApiHttpService) {}

   addAcademicYear(data: any): Observable<any>{
    return this.api.post(`${this.apiController}/addacademicyear`, data);
   }
   getAcademicYears(): Observable<any>{
    return this.api.get(`${this.apiController}/getacademicyears`);
   }
   deleteAcademicYear(data: any): Observable<any>{
    return this.api.delete(`${this.apiController}/deleteacademicyear`, data);
   }
   updateAcademicYear(data: AcademicYear): Observable<any>{
    return this.api.put(`${this.apiController}/updateacademicyear`, data);
   }
 
}