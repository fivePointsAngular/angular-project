import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(user) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users))
  }
  login(user) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const use = users.find(x => x.email == user.email || x.password == user.password);

    if (use !== undefined) {
      localStorage.setItem('token', 'JWT');
      return true;
    } else {
      return false;
    }
  }
}
