import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  hidee = true;
  submited = true;
  registForm: FormGroup;
  selected = '';

  constructor(private AuthServices: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.registForm = new FormGroup({
      typeUser: new FormControl('', [Validators.required]),
      fname: new FormControl(''),
      lname: new FormControl(''),
      etbName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      fax: new FormControl('',),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      confpassword: new FormControl('', [Validators.required, Validators.minLength(5), RxwebValidators.compare({ fieldName: 'password' })]),
    });

  }

  updateValidation(newValue) {
    console.log(newValue);
    if (newValue === 'candidate') {
      this.registForm.controls.fname.setValidators(Validators.required);
      this.registForm.controls.lname.setValidators(Validators.required);
    }
    else if (newValue === 'establishment') {
      this.registForm.controls.etbName.setValidators(Validators.required);
    }

  }

  submitregister() {
    this.submited = true;
    if (this.registForm.invalid) {
      console.log("invalid");
      return;
    }
    this.AuthServices.register(this.registForm.value);
    this.route.navigateByUrl("login");
  }
}
