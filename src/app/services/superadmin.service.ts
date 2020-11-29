import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperadminService {

  constructor() { }

  listEtablissement() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.filter(s => s.typeUser==="establishment"); 
    return user;
  }
  getEtablibyid(idd){
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user=users.find(element => element.id===parseInt(idd));
    return user;
  }
  updateEtbli(id,updateForm){
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const pos=users.findIndex(element => element.id===parseInt(id));
    users.splice(pos,1,updateForm.value);
     localStorage.setItem('users',JSON.stringify(users));
  };
  deleteEtbli(id){
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const pos=users.findIndex(element => element.id===parseInt(id));
    users.splice(pos,1);
    localStorage.setItem('users',JSON.stringify(users));
  };
}
