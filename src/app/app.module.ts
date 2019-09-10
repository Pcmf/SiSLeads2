import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WavesModule } from 'angular-bootstrap-md';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';

import { MatModulesImports } from './MatModulesImport';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeDashboardComponent } from './Gestor/ge-dashboard/ge-dashboard.component';
import { AdmDashboardComponent } from './Admin/adm-dashboard/adm-dashboard.component';
import { AnDashboardComponent } from './Analista/an-dashboard/an-dashboard.component';
import { LoginComponent } from './login/login.component';
import { DataService } from './Servicos/data.service';
import { AuthGuardService } from './auth-guard.service';
import { MenuComponent } from './Gestor/menu/menu.component';
import { MuralDialogComponent } from './XComuns/mural-dialog/mural-dialog.component';
import { FormContactoComponent } from './Gestor/form-contacto/form-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    GeDashboardComponent,
    AdmDashboardComponent,
    AnDashboardComponent,
    LoginComponent,
    MenuComponent,
    MuralDialogComponent,
    FormContactoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatModulesImports,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    ChartsModule,
    WavesModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [DataService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
