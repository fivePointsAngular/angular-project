import { Observable, Subscriber } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {RxwebValidators} from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  image:any;
  submited=false;
  profilForm :FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.profilForm = new FormGroup({
    image: new FormControl('', [Validators.required , RxwebValidators.extension({extensions: ['jpg', 'png', 'jpeg']})]),
    name: new FormControl('', [Validators.required]),
   lastname: new FormControl('', [Validators.required]),
    adresse : new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    degree: new FormControl('', [Validators.required]),
  });
}
  submitProfil() {
    this.submited = true;
    if (this.profilForm.invalid) {
      return;
    }
  }
  onSelectFile(e){
if (e.target.files) {
  var reader= new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload =(event:any)=>{
   //
   this.image= this.profilForm.controls.image;
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
