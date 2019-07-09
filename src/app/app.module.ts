import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatModulesImports } from './MatModulesImport';

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
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatModulesImports,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
