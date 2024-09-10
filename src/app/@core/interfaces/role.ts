import { Observable } from "rxjs";

export abstract class RoleData{
    abstract getSignedInUserRoles(): Observable<any>;
}