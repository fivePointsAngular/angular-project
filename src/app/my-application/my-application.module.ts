import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EtablissementModule } from '../etablissement/etablissement.module';
import { EtablissementComponent } from '../etablissement/etablissement.component';
import { MyApplicationComponent } from './my-application.component';
import { MaterialModule } from '../material/material.module';





@NgModule({
  declarations: [
    MyApplicationComponent,
    EtablissementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EtablissementModule,
    MaterialModule,
  ]
})
export class MyApplicationModule { }
