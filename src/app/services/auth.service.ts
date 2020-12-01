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
    const super_admin = { email: "marwensghair@gmail.com", password: "admin" }
    const admin = JSON.parse(localStorage.getItem("admin")) || [];
    console.log(admin);
    if (admin === []) {
      admin.push(super_admin)
      localStorage.setItem("admin", JSON.stringify(admin))
    }
  }
  
  login(user) {
    const admin = JSON.parse(localStorage.getItem("admin")) || [];
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const admins = admin.find(ad => ad.email === user.email || ad.password === user.password);
    if (admins !== undefined) {
      localStorage.setItem('token', 'JWT');
      this.isLoginSubject.next(true);
      return "admin";
    }
    const use = users.find(x => x.email === user.email || x.password === user.password);
    if (use.typeUser === "establishment") {
      return "establishment";
    }
    else
      if (use.typeUser === "candidate") {
        return "candidate"
      }
    localStorage.setItem('authentificated_user', JSON.stringify(use));
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

  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
   }



}
