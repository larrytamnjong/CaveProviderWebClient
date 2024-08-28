import { Observable } from "rxjs";
export class Institution{
    code: string;
    alternativeCode: string;
    name: string;
    physicalAddress: string;
    postBoxAddress: string;
    email: string;
    phoneNumber: string;
    id: string;
}


export abstract class InstitutionData{
    abstract addOrUpdateInstitutionDetails(data: any): Observable<any>;
    abstract getInstitutionDetails(): Observable<any>;
}