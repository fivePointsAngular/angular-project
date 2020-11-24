import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  hidee = true;
  submited=true;
  registForm :FormGroup;
 

  
  constructor(private AuthServices :AuthService) { }

  ngOnInit(): void {
    this.registForm=new FormGroup({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required,Validators.minLength(5)]),
      confpassword: new FormControl('', [Validators.required,Validators.minLength(5)]),
    });
    
    
  }
  submitregister() {
    this.submited = true;
    if (this.registForm.invalid) {
      console.log("invalid");
      return;
    }
   
   this.AuthServices.register(this.registForm.value);
    
  }
}
