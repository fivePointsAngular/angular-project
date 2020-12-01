import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn : Observable<boolean>;
  constructor(private AuthServices: AuthService) {this.isLoggedIn = AuthServices.isLoggedIn(); }

  ngOnInit(): void {
    
  }
  logOutBar(){
    this.AuthServices.logout();
  }
  
}
