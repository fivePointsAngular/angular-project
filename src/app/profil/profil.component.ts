import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
image:string="http://thedesignangel.co.uk/wp-content/uploads/2012/12/300-80x80-copy.jpg";
  submited=true;
  profilForm :FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.profilForm=new FormGroup({
    name: new FormControl('', [Validators.required]),
    adresse : new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    degree: new FormControl('', [Validators.required]),
    // email: new FormControl('', [Validators.required,Validators.email]),
  });
}
  submitProfil() {
    this.submited = true;
    if (this.profilForm.invalid) {
      console.log("invalid");
      return;
    }
  }
}
