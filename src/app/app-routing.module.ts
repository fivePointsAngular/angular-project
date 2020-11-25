import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { LoginComponent } from './login/login.component';
import { MyApplicationComponent } from './my-application/my-application.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },{
    path: 'register',
    component: RegisterComponent,
  } ,
  {
    path: 'MyApp',
    component: MyApplicationComponent,
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
