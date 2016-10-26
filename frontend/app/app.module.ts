
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { NodeDetailComponent } from './node-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { NodeService } from './node.service';

@NgModule({
  imports : [
    BrowserModule,
    FormsModule,
    Angular2FontawesomeModule,
    AppRoutingModule
  ],
  declarations : [
    AppComponent,
    DashboardComponent,
    NodeDetailComponent
  ],
  providers : [ NodeService ],
  bootstrap : [ AppComponent ]
})
export class AppModule {
}
