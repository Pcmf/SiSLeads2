import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GeDashboardComponent } from './Gestor/ge-dashboard/ge-dashboard.component';
import { AnDashboardComponent } from './Analista/an-dashboard/an-dashboard.component';
import { AdmDashboardComponent } from './Admin/adm-dashboard/adm-dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { FormContactoComponent } from './Gestor/form-contacto/form-contacto.component';

const routes: Routes = [
  {path: 'gestor', component: GeDashboardComponent, canActivate: [AuthGuardService]},
  {path: 'gestor/puxar', component: FormContactoComponent, canActivate: [AuthGuardService]},
  {path: 'analista', component: AnDashboardComponent, canActivate: [AuthGuardService]},
  {path: 'admin', component: AdmDashboardComponent, canActivate: [AuthGuardService]},
  {path: '**', component: LoginComponent},
  {path: '',  redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
