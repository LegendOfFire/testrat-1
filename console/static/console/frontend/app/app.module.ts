
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { CreateNodeComponent } from './create-node.component';
import { AppRoutingModule } from './app-routing.module';
import { NodeService } from './node.service';

@NgModule({
  imports : [
    BrowserModule,
    FormsModule,
    Angular2FontawesomeModule,
    HttpModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    AppRoutingModule
  ],
  declarations : [
    AppComponent,
    DashboardComponent,
    CreateNodeComponent
  ],
  entryComponents : [ CreateNodeComponent ],
  providers : [ NodeService ],
  bootstrap : [ AppComponent ]
})
export class AppModule {
}
