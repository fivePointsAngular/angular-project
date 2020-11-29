import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SuperadminService } from '../services/superadmin.service';

@Component({
  selector: 'app-super-administrateur',
  templateUrl: './super-administrateur.component.html',
  styleUrls: ['./super-administrateur.component.css']
})
export class SuperAdministrateurComponent implements OnInit {
  etablis: Array<any>;
  DATA : Array<any>=[];
  dataSource = new MatTableDataSource(this.DATA)

  constructor(private SuperadminServices: SuperadminService) { }

  ngOnInit(): void {
    this.etablis=this.SuperadminServices.listEtablissement();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
