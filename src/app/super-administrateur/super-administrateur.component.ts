import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-administrateur',
  templateUrl: './super-administrateur.component.html',
  styleUrls: ['./super-administrateur.component.css']
})
export class SuperAdministrateurComponent implements OnInit {
  users = [
    {
     
      etbName: "alpha formation",
      email: "marwen@gmail.com",
      fax: "7285293",
      fname: "hhhh",
      lname: "hhhhhhhhhh",
      password: "hhhhhhhhhhhhhhh",
      confpassword: "hhhhhhhh",
      phone: "85963741",
      typeUser: "candidate",

    },
    {
      etbName: "fivePoints",
      email: "marwen@gmail.com",
      fax: "7812346",
      fname: "hhhh",
      lname: "hhhhhhhhhh",
      password: "hhhhhhhhhhhhhhh",
      confpassword: "hhhhhhhh",
      phone: "7418523",
      typeUser: "candidate",

    }, {
      etbName: "skpaa",
      email: "marwen@gmail.com",
      fax: "4567892",
      fname: "hhhh",
      lname: "hhhhhhhhhh",
      password: "hhhhhhhhhhhhhhh",
      confpassword: "hhhhhhhh",
      phone: "85963741",
      typeUser: "candidate",

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
