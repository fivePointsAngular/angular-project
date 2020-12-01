import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { EtablissementService } from 'src/app/etablissement.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  submited = false;
  registForm: FormGroup;

  constructor(private etablissementService : EtablissementService, private router: Router) { }

  ngOnInit(): void {
    this.registForm = new FormGroup({
      fname: new FormControl('',Validators.required),
      lname: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      confpassword: new FormControl('', [Validators.required, Validators.minLength(5), RxwebValidators.compare({ fieldName: 'password' })]),
    });

  }
  submitCondidat() {
    this.submited = true;
    if (this.registForm.invalid) {
      console.log("invalid");
      return;
    }
    this.etablissementService.addCondidat(this.registForm.value);
    this.router.navigateByUrl("/MyApp");
  }

}
