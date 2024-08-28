
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersApi } from '../api/users.api';
import { IdentityHttpService } from '../api/identity-http.service';
import { NbAuthModule } from '@nebular/auth';
import { UserData } from '../interfaces/common/users';
import { UsersService } from '../services/users.service';
import { RoleApi } from '../api/role.api';
import { ApiHttpService } from '../api/api-http.service';
import { InstitutionApi } from '../api/institution.api';
import { InstitutionData } from '../interfaces/common/institution';
import { InstitutionService } from '../services/institution.service';


const API = [IdentityHttpService, ApiHttpService, UsersApi, RoleApi, InstitutionApi];

const SERVICES = [

  { provide: UserData, useClass: UsersService },
  {provide: InstitutionData, useClass: InstitutionService}
 
  
];

@NgModule({
  imports: [CommonModule, NbAuthModule],
})
export class CommonBackendModule {
  static forRoot(): ModuleWithProviders<CommonBackendModule> {
    return {
      ngModule: CommonBackendModule,
      providers: [
        ...API,
        ...SERVICES,
      ],
    };
  }
}
