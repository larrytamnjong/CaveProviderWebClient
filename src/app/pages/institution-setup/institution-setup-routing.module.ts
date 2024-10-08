import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitutionSetupComponent } from './institution-setup.component';
import { InstitutionInformationComponent } from './institution-information/institution-information.component';
import { RouteGuard } from '../../@auth/route.guard';
import { AcademicPeriodComponent } from './academic-period/academic-period.component';


const routes: Routes = [
    {
        path: '',
        component: InstitutionSetupComponent,
        children: [
          {
            path: 'institution-information',
            component: InstitutionInformationComponent,
            canActivate: [RouteGuard('Institution Setup')]
          },
          {
            path: 'academic-period',
            component: AcademicPeriodComponent,
            canActivate: [RouteGuard('Institution Setup')]
          }
        ],
      },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutionRoutingModule {
}
