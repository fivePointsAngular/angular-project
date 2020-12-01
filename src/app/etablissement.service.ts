import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

  constructor() { }

  listCondidats() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users;
  }
}
