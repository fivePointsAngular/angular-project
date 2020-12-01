import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { EtablissementService } from '../etablissement.service';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit {
  name: string;
  id:any;
  position: number;
  weight: number;
  symbol: string;
  DATA : Array<any>=[];
  condidats: Array<any>[];
  displayedColumns: string[] = ['fname', 'lname', 'email', 'phone'];
  dataSource = new MatTableDataSource(this.DATA)
   

  constructor(private etablissementService: EtablissementService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.condidats=this.etablissementService.listCondidats();
    
  }
 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deleteUser(i){
    this.etablissementService.deleteCondidats(this.condidats,i)
    this.condidats=this.etablissementService.listCondidats();
    
    }
}
