import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeDashboardComponent } from './Gestor/ge-dashboard/ge-dashboard.component';
import { AnDashboardComponent } from './Analista/an-dashboard/an-dashboard.component';
import { AdmDashboardComponent } from './Admin/adm-dashboard/adm-dashboard.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'gestor', component: GeDashboardComponent},
  {path: 'analista', component: AnDashboardComponent},
  {path: 'admin', component: AdmDashboardComponent},
  {path: '**', component: LoginComponent},
  {path: '',  redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
