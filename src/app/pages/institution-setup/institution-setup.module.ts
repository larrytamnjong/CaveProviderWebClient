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
  NbUserModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { InstitutionSetupComponent } from './institution-setup.component';
import { InstitutionRoutingModule } from './institution-setup-routing.module';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { InstitutionInformationComponent } from './institution-information/institution-information.component';



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
    InstitutionRoutingModule
  
  ],
  declarations: [
  InstitutionInformationComponent,
  InstitutionSetupComponent
  ],
  providers: [
    
  ],
})
export class InstitutionSetupModule { }
