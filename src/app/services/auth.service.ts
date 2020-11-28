import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoginSubject = new BehaviorSubject<boolean>(this.isAuthentificated())
  constructor() { }

  register(user) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users))
  }
  register_super_admin(sup_admin) {
    const admin = JSON.parse(localStorage.getItem("admin")) || [];
    admin.push(sup_admin);
    localStorage.setItem("admin", JSON.stringify(admin))
  }

  login(user) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const use = users.find(x => x.email === user.email || x.password === user.password);
    localStorage.setItem('authentificated_user', JSON.stringify(use));

    if (use !== undefined) {
      localStorage.setItem('token', 'JWT');
      return true;
    } else {
      return false;
    }
  }

  public isAuthentificated(): boolean{
    const token = localStorage.getItem('token');
    if(token == null){
      return false;
    }else{
      return true;
    }
  }

logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('authentificated_user');
  this.isLoginSubject.next(false);
}

  isLoggedIn(): Observable <boolean>{
    return this.isLoginSubject.asObservable();
  }



}
