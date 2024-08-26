 

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartTableData } from '../../interfaces/common/smart-table';

import { SmartTableService } from './smart-table.service';
import { PeriodsService } from './periods.service';
import { SettingsData } from '../../interfaces/common/settings';
import { SettingsService } from './settings.service';

const SERVICES = [

  { provide: SmartTableData, useClass: SmartTableService },
  { provide: PeriodsService, useClass: PeriodsService },
  { provide: SettingsData, useClass: SettingsService },
];

@NgModule({
  imports: [CommonModule],
})
export class CommonMockModule {
  static forRoot(): ModuleWithProviders<CommonMockModule> {
    return {
      ngModule: CommonMockModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
