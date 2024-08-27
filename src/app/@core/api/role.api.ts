import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Observable } from "rxjs";

@Injectable()

export class RoleApi {
    private readonly apiController: string = "Role"
    constructor(private api: HttpService){}

    getSignedInUserRoles(): Observable<any>{
        return this.api.get(`${this.apiController}/getsignedinuserroles`)
    }
}