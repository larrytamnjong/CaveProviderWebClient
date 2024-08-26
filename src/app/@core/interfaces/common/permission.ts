import { Observable } from "rxjs";

export abstract class PermissionData{
    abstract getUserPermissionNames(): Observable<any>;
}