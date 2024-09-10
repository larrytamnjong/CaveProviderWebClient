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

import { FormsModule as ngFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { TranscriptComponent } from './transcript-component';
import { TranscriptRoutingModule } from './transcript-routing.module';



@NgModule({
  imports: [
    TranscriptRoutingModule,
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
  TranscriptComponent
  ],
  providers: [
    
  ],
})
export class TranscriptModule { }
