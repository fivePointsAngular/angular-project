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

  login(user) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const use = users.find(x => x.email === user.email || x.password === user.password);

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
  this.isLoginSubject.next(false);
}

  isLoggedIn(): Observable <boolean>{
    return this.isLoginSubject.asObservable();
  }

  getUserType(typeUser) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users[typeUser];
  }

}
