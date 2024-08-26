import { Observable } from "rxjs";
import { PermissionData } from "../interfaces/common/permission";
import { PermissionApi } from "../api/permission.api";
import { Injectable } from "@angular/core";

@Injectable()
export class PermissionService extends PermissionData{

    constructor(private api: PermissionApi){
        super();
    }
    getUserPermissionNames(): Observable<any> {
        return this.api.getUserPermissionNames();
    }
}