import { Observable } from "rxjs";
export class AcademicYear {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    isActive: boolean;
}

export abstract class AcademicYearData {
    abstract addAcademicYear(data: any): Observable<any>;
    abstract getAcademicYears(): Observable<any>;
    abstract deleteAcademicYear(data: any): Observable<any>;
    abstract updateAcademicYear(data: AcademicYear): Observable<any>;
}   