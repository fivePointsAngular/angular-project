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
    console.log("idd",typeof(idd));
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user=users.find(element => element.id===parseInt(idd));
    console.log(user);
    return user;
  }
  updateEtbli(id,updateForm){
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(id,1,updateForm.value);
     localStorage.setItem('users',JSON.stringify(users));
  };
  
}
