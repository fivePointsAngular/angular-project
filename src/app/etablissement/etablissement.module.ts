import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListCondidatsComponent } from './list-condidats/list-condidats.component';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    SidebarComponent,
    ListCondidatsComponent,
    DashboardComponent,
    
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    ListCondidatsComponent,
    DashboardComponent
  ]
})
export class EtablissementModule { }
