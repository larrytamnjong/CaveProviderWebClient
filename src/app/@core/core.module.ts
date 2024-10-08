import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule,  } from '@nebular/auth';


import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  AnalyticsService,
  LayoutService,
  PlayerService,
  StateService,
} from './utils';


import { UsersService } from './services/users.service';

import { InitUserService } from '../@theme/services/init-user.service';
import { CommonBackendModule } from './common/common-backend.module';
import { UserData } from './interfaces/users';

export const NB_CORE_PROVIDERS = [

  ...CommonBackendModule.forRoot().providers,



  AnalyticsService,
  LayoutService,
  PlayerService,
  StateService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
        UsersService,
        InitUserService,
        { provide: UserData, useClass: UsersService },
      ],
      
    };
  }
}
