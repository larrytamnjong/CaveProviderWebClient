import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { InstitutionSetupComponent } from './institution-setup/institution-setup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'institution-setup',
      component: InstitutionSetupComponent,
      loadChildren: () => import('./institution-setup/institution-setup.module')
      .then(module=> module.InstitutionSetupModule)
    },
    {
      path: 'staff',
      loadChildren: () => import('./staff/staff.module')
        .then(m => m.StaffModule),
    },
    {
      path: 'student',
      loadChildren: () => import('./student/student.module')
        .then(m => m.StudentModule),
    },
    {
      path: 'result',
      loadChildren: () => import('./result/result.module')
        .then(m => m.ResultModule),
    },
    {
      path: 'report-card',
      loadChildren: () => import('./report-card/report-card.module')
        .then(m => m.ReportCardModule),
    },
    {
      path: 'transcript',
      loadChildren: () => import('./transcript/transcript.module')
        .then(m => m.TranscriptModule),
    },
    {
      path: 'bursary',
      loadChildren: () => import('./bursary/bursary.module')
        .then(m => m.BursaryModule),
    },
    {
      path: 'accounting',
      loadChildren: () => import('./accounting/accounting.module')
        .then(m => m.AccountingModule),
    },
    {
      path: 'settings',
      loadChildren: () => import('./settings/settings.module')
        .then(m => m.SettingsModule),
    },
   
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
