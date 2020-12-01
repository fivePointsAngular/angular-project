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
  hide = true;
  submited = true;
  loginForm: FormGroup;

  constructor(private AuthServices: AuthService , private route: Router) { }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });

      this.AuthServices.register_super_admin();

  }

  submitlogin() {
    this.submited = true;
    if (this.loginForm.invalid) {
      return;
    }
    if ( this.AuthServices.login(this.loginForm.value)==="admin"){
      this.route.navigateByUrl("/admin");
    }
  if ( this.AuthServices.login(this.loginForm.value)==="establishment"){
    this.route.navigateByUrl("/MyApp");
  }
  if ( this.AuthServices.login(this.loginForm.value)==="candidate") {
    this.route.navigateByUrl("/profil");
  }
  }

}
