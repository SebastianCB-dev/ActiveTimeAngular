import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FirebaseService} from "../../services/firebase.service";
import {SoundsService} from "../../services/sounds.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  titlePage: Element = document.querySelector('#title-page')!;
  arePasswordsTheSame: boolean = true;
  myForm: FormGroup = this.fb.group({
    username: [, [Validators.required, Validators.maxLength(14), Validators.minLength(7)]],
    password: [, [Validators.required, Validators.maxLength(14), Validators.minLength(7)]],
    'confirm-password': [, [Validators.required, Validators.maxLength(14), Validators.minLength(7)]]
  });
  isCreating: boolean = false;
  isUserCreated: boolean = false;
  canShowCreated: boolean = false;

  constructor(private fb: FormBuilder,
              private firebaseService: FirebaseService,
              private soundsService: SoundsService) { }

  ngOnInit(): void {
    if(this.titlePage) {
      this.titlePage.innerHTML = 'Active Time | Register';
    }
  }

  async register() {
    const username = this.myForm.controls['username'].value;
    const password = this.myForm.controls['password'].value;
    const confirmPassword = this.myForm.controls['confirm-password'].value;

    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      this.soundsService.error();
      return;
    }

    if(password !== confirmPassword ) {
      this.arePasswordsTheSame = false;
      this.soundsService.error();
      return;
    }
    this.isCreating = true;
    const user = await this.firebaseService.getUser( username );
    if(user) {
      this.isUserCreated = true;
      this.isCreating = false;
      this.soundsService.error();
      return;
    }
    const currentDate = new Date().toJSON();
    await this.firebaseService.registerUser({username,password, createdAt: currentDate})
    this.canShowCreated = true;
    this.soundsService.success();
    this.isCreating = false;
  }

  isInvalidCamp( camp: string ): boolean {
    return this.myForm.controls[camp].errors! &&
           this.myForm.controls[camp].touched!;
  }

  changeValueUsername() {
    this.isUserCreated = false;
    this.canShowCreated = false;
  }
  changeValuePassword() {
    this.arePasswordsTheSame = true;
    this.canShowCreated = false;
  }
}
