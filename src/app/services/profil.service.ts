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

  updateProfile(condidat){
    // update part 1
    const users= JSON.parse(localStorage.getItem("users")) || [];
console.log(users);

    const authentificated_id = users.findIndexOf(x => x.email === condidat.email);
    console.log(authentificated_id);
    users.splice( authentificated_id, 1, condidat);
    localStorage.setItem("users", JSON.stringify(users));
    // update part 2
const authentificated_user = this.getCondidat().find(x => x.email === condidat.email);
console.log(authentificated_user);



  }
}
