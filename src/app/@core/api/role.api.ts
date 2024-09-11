import { Injectable } from "@angular/core";
import { IdentityHttpService } from "./common/identity-http.service";
import { Observable } from "rxjs";

@Injectable()

export class RoleApi {
    private readonly apiController: string = "Role"
    constructor(private api: IdentityHttpService){}

    getSignedInUserRoles(): Observable<any>{
        return this.api.get(`${this.apiController}/getsignedinuserroles`)
    }
}