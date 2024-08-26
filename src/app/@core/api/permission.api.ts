import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Observable } from "rxjs";

@Injectable()

export class PermissionApi {
    private readonly apiController: string = "Permission"
    constructor(private api: HttpService){}

    getUserPermissionNames(): Observable<any>{
        return this.api.get(`${this.apiController}/getuserpermissionnames`)
    }
}