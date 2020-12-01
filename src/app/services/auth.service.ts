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
    user['id'] = users.length;
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users))
  }
  register_super_admin() {
    const super_admin = { email: "marwensghair@gmail.com", password: "admin", typeUser: "admin" , fname: "marwen", lname: "sghair"}
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const ad = users.find(x => x.typeUser==="admin")
     if (ad === undefined) {
       users.push(super_admin)
       localStorage.setItem("users", JSON.stringify(users))
     }
  }

  login(user) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userFound = users.find(u => u.email === user.email && u.password === user.password);
    if (userFound !== undefined) {
      localStorage.setItem('authentificated_user', JSON.stringify(userFound));
      localStorage.setItem('token', 'JWT');
      this.isLoginSubject.next(true);
      if (userFound.typeUser === 'admin') {
        return 'admin';
      }
      if (userFound.typeUser === 'establishment') {
        return 'establishment';
      }
      if (userFound.typeUser === 'candidate') {
        return 'candidate'
      }
    }
  }

  public isAuthentificated(): boolean {
    const token = localStorage.getItem('token');
    if (token == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('authentificated_user');
    this.isLoginSubject.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }



}
