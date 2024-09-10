import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  TranscriptComponent } from './transcript-component';



const routes: Routes = [
    {
        path: '',
        component: TranscriptComponent,
        children: [
          
        ],
      },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranscriptRoutingModule {
}
