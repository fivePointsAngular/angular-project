import { Observable, Subscriber } from 'rxjs';
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

  updateProfile(id, profilForm) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const pos = users.findIndex(element => element.id === parseInt(id));
    users.splice(pos, 1, profilForm.value);
    localStorage.setItem('users', JSON.stringify(users));
  }

}
