import { Observable } from "rxjs";
export class Institution {
    id: string;
    code: string;
    alternativeCode: string;
    name: string;
    physicalAddress: string;
    postBoxAddress: string;
    email: string;
    phoneNumber: string;
    logo: string;
}


export abstract class InstitutionData{
    abstract addOrUpdateInstitutionDetails(data: any): Observable<any>;
    abstract getInstitutionDetails(): Observable<any>;
}