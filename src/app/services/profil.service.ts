import { Observable, Subscriber } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor() { }
  // updateProfile(email,profilForm){}
//   authentificated_id = users.findIndex( obj=> authentificated_user.email === obj.email);
//   users.splice( authentificated_id, 1, condidat);
//  localStorage.setItem("users", JSON.stringify(users));
//  // update part 2
//  const authentificated_user = JSON.parse(localStorage.getItem("authentificated_user"));
//  authentificated_user.splice( authentificated_id, 1, condidat);
  getCondidat() {
    const listCondidat = JSON.parse(localStorage.getItem("authentificated_user"));
    return listCondidat;
  }

  updateProfile(profilForm){
    // update part 1
    const users = JSON.parse(localStorage.getItem("users"));
 let updateItem = users.find(this.getCondidat,profilForm);
 let index = users.indexOf(updateItem);console.log(index);
 users[index]=profilForm;

  }

}
