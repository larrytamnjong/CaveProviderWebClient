import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingComponent } from './accounting-component';



const routes: Routes = [
    {
        path: '',
        component: AccountingComponent,
        children: [
          
        ],
      },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountingRoutingModule {
}
