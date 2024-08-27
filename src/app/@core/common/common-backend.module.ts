
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersApi } from '../api/users.api';
import { HttpService } from '../api/http.service';
import { NbAuthModule } from '@nebular/auth';
import { UserData } from '../interfaces/common/users';
import { UsersService } from '../services/users.service';
import { RoleApi } from '../api/role.api';


const API = [UsersApi, RoleApi, HttpService];

const SERVICES = [

  { provide: UserData, useClass: UsersService },
 
  
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
