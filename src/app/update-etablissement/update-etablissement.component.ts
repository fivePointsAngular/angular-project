import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperadminService } from '../services/superadmin.service';

@Component({
  selector: 'app-update-etablissement',
  templateUrl: './update-etablissement.component.html',
  styleUrls: ['./update-etablissement.component.css']
})
export class UpdateEtablissementComponent implements OnInit {
  hide = true;
  hidee = true;
  submited = false;
  updateForm;
  selected = '';
  id:any;
  constructor(private router: ActivatedRoute,private SuperadminServices: SuperadminService,private route:Router) { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      id: new FormControl(this.id),
      typeUser : new FormControl('establishment'),
      etbName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      phone: new FormControl('', [Validators.required]),
      fax: new FormControl('',),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      confpassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
    this.id = this.router.snapshot.paramMap.get('id');
    const etabli = this.SuperadminServices.getEtablibyid(this.id);
    this.updateForm.patchValue(etabli);
  }
  submitupdate() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.submited = true;
    if (this.updateForm.invalid) {
      return;
    }else
    {
      this.SuperadminServices.updateEtbli(this.id,this.updateForm)
     this.route.navigateByUrl("/admin"); 
    }
  }

}
