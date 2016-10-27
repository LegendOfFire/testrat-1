
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NodeDetailComponent } from './node-detail.component';

const routes : Routes = [
  { path : 'testrat',           redirectTo : 'testrat/dashboard', pathMatch : 'full' },
  { path : 'testrat/dashboard',  component : DashboardComponent },
  { path : 'testrat/detail/:id', component : NodeDetailComponent }
];

@NgModule({
  imports : [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ]
})
export class AppRoutingModule {
}
