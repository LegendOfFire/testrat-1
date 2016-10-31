
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes : Routes = [
  { path : 'testrat',           redirectTo : 'testrat/dashboard', pathMatch : 'full' },
  { path : 'testrat/dashboard',  component : DashboardComponent },
];

@NgModule({
  imports : [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ]
})
export class AppRoutingModule {
}
