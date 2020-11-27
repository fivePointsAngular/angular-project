import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListCondidatsComponent } from './list-condidats/list-condidats.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ListCondidatsComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    ListCondidatsComponent
  ]
})
export class EtablissementModule { }
