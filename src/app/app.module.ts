import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { ProfilComponent } from './profil/profil.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { CdkTableModule } from '@angular/cdk/table';
import { AvatarComponent } from './avatar/avatar.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { SuperAdministrateurComponent } from './super-administrateur/super-administrateur.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

import { UpdateEtablissementComponent } from './update-etablissement/update-etablissement.component';

import { MyApplicationModule } from './my-application/my-application.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    Error404Component,
    Error500Component,
    ProfilComponent,
    AvatarComponent,
    SuperAdministrateurComponent,
    UpdateEtablissementComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatRippleModule,
    CdkTableModule,
    RxReactiveFormsModule,
    AlifeFileToBase64Module,
    MyApplicationModule,
    RxReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
