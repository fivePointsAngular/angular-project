import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from '../etablissement/sidebar/sidebar.component';
import { ListCondidatsComponent } from '../etablissement/list-condidats/list-condidats.component';
import { DashboardComponent } from '../etablissement/dashboard/dashboard.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ListCondidatsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MyApplicationModule { }
