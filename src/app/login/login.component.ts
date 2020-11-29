import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  super_admin={email:"marwensghair@gmail.com",password:"admin"}
  hide = true;
  submited = true;
  loginForm: FormGroup;

  constructor(private AuthServices: AuthService , private route: Router) { }

  save_superAdmin(super_admin){
    this.AuthServices.register_super_admin(super_admin);
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(5)]),
    });
    this.save_superAdmin(this.super_admin);

  }
  
  submitlogin() {
    this.submited = true;
    if (this.loginForm.invalid) {
      console.log("invalid");
      return;                   
    }

  if ( this.AuthServices.login(this.loginForm.value)){
    this.route.navigateByUrl("/MyApp");
  }

  }

}
