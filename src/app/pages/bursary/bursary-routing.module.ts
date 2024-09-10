import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BursaryComponent } from './bursary-component';



const routes: Routes = [
    {
        path: '',
        component: BursaryComponent,
        children: [
          
        ],
      },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BursaryRoutingModule {
}
