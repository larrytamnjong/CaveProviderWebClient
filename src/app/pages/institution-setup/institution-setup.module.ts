import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbCalendarKitModule,
  NbCalendarModule,
  NbCalendarRangeModule,
 
  NbRouteTabsetModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { InstitutionSetupComponent } from './institution-setup.component';
import { InstitutionRoutingModule } from './institution-setup-routing.module';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { InstitutionInformationComponent } from './institution-information/institution-information.component';
import { AcademicPeriodComponent } from './academic-period/academic-period.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { AcademicYearDialogComponent } from './academic-period/academic-year-dialog/academic-year-dialog';





@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    InstitutionRoutingModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbCalendarModule,
    NbCalendarKitModule,
    NbCalendarRangeModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule

  ],
  declarations: [
  InstitutionInformationComponent,
  InstitutionSetupComponent,
  AcademicPeriodComponent,
  AcademicYearDialogComponent
  ],
  providers: [
    
  ],
})
export class InstitutionSetupModule { }
