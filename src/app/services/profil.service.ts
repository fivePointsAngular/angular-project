import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor() { }

  getCondidat() {
    const listCondidat = JSON.parse(localStorage.getItem("authentificated_user"));
    return listCondidat;
  }
}
