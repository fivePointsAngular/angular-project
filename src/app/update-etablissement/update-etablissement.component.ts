import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-etablissement',
  templateUrl: './update-etablissement.component.html',
  styleUrls: ['./update-etablissement.component.css']
})
export class UpdateEtablissementComponent implements OnInit {
  hide = true;
  hidee = true;
  submited = true;
  updateForm;
  selected = '';

  constructor() { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      etbName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      phone: new FormControl('', [Validators.required]),
      fax: new FormControl('',),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      newpassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });

  }

}
