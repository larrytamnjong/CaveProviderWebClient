import { Observable } from "rxjs";
import { RoleData } from "../interfaces/common/role";
import { RoleApi } from "../api/role.api";
import { Injectable } from "@angular/core";

@Injectable()
export class RoleService extends RoleData{

    constructor(private api: RoleApi){
        super();
    }
    getSignedInUserRoles(): Observable<any> {
        return this.api.getSignedInUserRoles();
    }
}