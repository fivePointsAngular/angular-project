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
  updateProfile(updatedProfil) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const auth_user = JSON.parse(localStorage.getItem("authentificated_user"));
    if (auth_user !== undefined) {
      auth_user.adresse = updatedProfil.adresse;
      auth_user.age = updatedProfil.age;
      auth_user.adresse = updatedProfil.adresse;
      auth_user.degree = updatedProfil.degree;
      auth_user.image = updatedProfil.image;
      localStorage.setItem("authentificated_user", JSON.stringify(auth_user));
      if (users !== undefined) {
        const pos = users.findIndex(user => user.id === parseInt(auth_user.id));
        users.splice(pos, 1, auth_user);
        localStorage.setItem('users', JSON.stringify(users));
      }
    }
  }

}
