import { Injectable } from "@angular/core";
import { AcademicYear, AcademicYearData } from "../interfaces/academic-year";
import { AcademicYearApi } from "../api/academic-year.api";
import { Observable } from "rxjs";

@Injectable()
export class AcademicYearService extends AcademicYearData{
    constructor(private api: AcademicYearApi){
        super();
    }


     addAcademicYear(data: any): Observable<any>{
        return this.api.addAcademicYear(data);
    }
     getAcademicYears(): Observable<any>{
        return this.api.getAcademicYears();
    }
     deleteAcademicYear(data: any): Observable<any>{
        return this.api.deleteAcademicYear(data);
    }
     updateAcademicYear(data: AcademicYear): Observable<AcademicYear>{
        return this.api.updateAcademicYear(data);
    }
}