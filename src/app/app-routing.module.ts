import { ProfilComponent } from './profil/profil.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { LoginComponent } from './login/login.component';
import { MyApplicationComponent } from './my-application/my-application.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { DashboardComponent } from './etablissement/dashboard/dashboard.component';
import { SuperAdministrateurComponent } from './super-administrateur/super-administrateur.component';
import { UpdateEtablissementComponent } from './update-etablissement/update-etablissement.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'register',
    component: RegisterComponent,

  },
  {
    path: 'MyApp',
    component: MyApplicationComponent,
    children: [{
      path: '',
      component: EtablissementComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'profil',
    component: ProfilComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: SuperAdministrateurComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'etablissement/update/:id',
    component: UpdateEtablissementComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'error500',
    component: Error500Component
  },
  {
    path: '**',
    component: Error404Component
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
