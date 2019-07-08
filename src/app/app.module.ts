import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeDashboardComponent } from './Gestor/ge-dashboard/ge-dashboard.component';
import { AdmDashboardComponent } from './Admin/adm-dashboard/adm-dashboard.component';
import { AnDashboardComponent } from './Analista/an-dashboard/an-dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    GeDashboardComponent,
    AdmDashboardComponent,
    AnDashboardComponent,
    LoginComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
