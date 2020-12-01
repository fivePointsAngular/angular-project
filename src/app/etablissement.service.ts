import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

  constructor() { }

  listCondidats() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const connectedUser = JSON.parse(localStorage.getItem("authentificated_user")) || [];  
    const list_condidat=users.filter(use =>use.etbName===connectedUser.etbName&&use.typeUser==='candidate');
    return list_condidat;
  }
  addCondidat(user){
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const connectedUser = JSON.parse(localStorage.getItem("authentificated_user")) || [];

    user['typeUser']='candidate';
    user['etbName']=connectedUser.etbName;
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users))
  }
  deleteCondidats(condidats, i) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const condi=users.findIndex(cond =>cond.email==condidats[i].email)
    users.splice(condi, 1);
    localStorage.setItem("users", JSON.stringify(users));
  }
  
}
