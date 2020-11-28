import { ProfilService } from './../services/profil.service';
import { Observable, Subscriber } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  // name:any;
  // lastname:any;
  image: any;
  submited = false;
  profilForm: FormGroup;
  constructor(private serviceProfil: ProfilService , private rooter: ActivatedRoute) { }

  ngOnInit(): void {
    this.profilForm = new FormGroup({
      image: new FormControl('', [Validators.required, RxwebValidators.extension({ extensions: ['jpg', 'png', 'jpeg'] })]),
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      degree: new FormControl('', [Validators.required]),
    });

    const userProfil = this.serviceProfil.getCondidat();
    if (userProfil != null && userProfil !== undefined){
      this.profilForm.patchValue(userProfil);
    }

  }
  submitProfil() {
    this.submited = true;
    if (this.profilForm.invalid) {
      return;
    }
 this.serviceProfil.updateProfile(this.profilForm.value);
  }
  onSelectFile(e) {
    if (e.target.files === 0) {
      return;
    }
    const mimeType = e.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.image = null;
      return;
    }
    if (e.target.files !== 0) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.image = event.target.result;
      }
    }
  }



















  //   convertToBase64 (file:File){
  // const observable = new Observable ((subscriber:Subscriber)=>{
  //   this.readFile(file,subscriber);

  // });

  //   }

  //   readFile(file:File , subscriber:Subscriber<any>){
  // const filereader = new FileReader();
  // filereader.readAsDataURL(file);
  // filereader.onload =()=>{
  //   subscriber.next(filereader.result);
  // }
  // filereader.onerror =(error)=>{
  //   subscriber.error(error);
  //   subscriber.complete();
  // }
  //   }
}
