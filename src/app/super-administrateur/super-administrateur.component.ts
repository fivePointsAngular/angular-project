import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EtablissementService } from '../etablissement.service';

@Component({
  selector: 'app-super-administrateur',
  templateUrl: './super-administrateur.component.html',
  styleUrls: ['./super-administrateur.component.css']
})
export class SuperAdministrateurComponent implements OnInit {
  etablis: Array<any>;
  DATA : Array<any>=[];
  dataSource = new MatTableDataSource(this.DATA)

  constructor(private etablissementService: EtablissementService) { }

  ngOnInit(): void {
    this.etablis=this.etablissementService.listCondidats();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
