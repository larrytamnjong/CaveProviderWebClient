
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersApi } from '../api/users.api';
import { HttpService } from '../api/http.service';
import { CountryData } from '../interfaces/common/countries';

import { NbAuthModule } from '@nebular/auth';
import { SettingsData } from '../interfaces/common/settings';
import { UserData } from '../interfaces/common/users';
import { UsersService } from '../services/users.service';
import { PermissionApi } from '../api/permission.api';


const API = [UsersApi, PermissionApi, HttpService];

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
