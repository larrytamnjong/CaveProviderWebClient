
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersApi } from '../api/users.api';
import { IdentityHttpService } from '../api/common/identity-http.service';
import { NbAuthModule } from '@nebular/auth';
import { UserData } from '../interfaces/users';
import { UsersService } from '../services/users.service';
import { RoleApi } from '../api/role.api';
import { ApiHttpService } from '../api/common/api-http.service';
import { InstitutionApi } from '../api/institution.api';
import { InstitutionData } from '../interfaces/institution';
import { InstitutionService } from '../services/institution.service';
import { AcademicYearData } from '../interfaces/academic-year';
import { AcademicYearService } from '../services/academic-year.service';
import { AcademicYearApi } from '../api/academic-year.api';


const API = [IdentityHttpService, ApiHttpService, UsersApi, RoleApi, InstitutionApi, AcademicYearApi];

const SERVICES = [

  { provide: UserData, useClass: UsersService },
  {provide: InstitutionData, useClass: InstitutionService},
  {provide: AcademicYearData, useClass: AcademicYearService}
 
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
