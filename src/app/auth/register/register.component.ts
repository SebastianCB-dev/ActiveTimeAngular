import { Component } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";

import {FirebaseService} from "../../services/firebase.service";
import {SoundsService} from "../../services/sounds.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  titlePage: Element = document.querySelector('#title-page')!;
  arePasswordsTheSame: boolean = true;
  myForm: UntypedFormGroup = this.fb.group({
    username: [, [Validators.required, 
                  Validators.maxLength(16), 
                  Validators.minLength(6)]],
    password: [, [Validators.required, 
                  Validators.maxLength(16), 
                  Validators.minLength(6)]],
    'confirm-password': [, [Validators.required, 
                            Validators.maxLength(16), 
                            Validators.minLength(6)]]
  });

  isCreating: boolean = false;
  isUserCreated: boolean = false;
  canShowCreated: boolean = false;

  constructor(private fb: UntypedFormBuilder,
              private firebaseService: FirebaseService,
              private soundsService: SoundsService) { }

  async register() {
    const username: string = this.myForm.controls['username'].value;
    const password: string = this.myForm.controls['password'].value;
    const confirmPassword: string = this.myForm.controls['confirm-password'].value;

    // If the form is invalid
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      this.soundsService.error();
      return;
    }
    // The password have to be the same
    if(password !== confirmPassword ) {
      this.arePasswordsTheSame = false;
      this.soundsService.error();
      return;
    }
    this.isCreating = true;
    // get user to compare with the user in the form
    const user = await this.firebaseService.getUser( username );
    if(user) {
      this.isUserCreated = true;
      this.isCreating = false;
      this.soundsService.error();
      return;
    }
    const currentDate = new Date().toJSON();
    // Register User
    await this.firebaseService.registerUser({username,
                                             password,
                                            createdAt: currentDate});

    this.canShowCreated = true;
    this.soundsService.success();
    this.isCreating = false;
    //Reset form
    this.myForm.reset();
  }

  isInvalidCamp(camp: string): boolean {
    return this.myForm.controls[camp].errors! &&
           this.myForm.controls[camp].touched!;
  }

  changeValueUsername() {
    this.isUserCreated = false;
    this.canShowCreated = false;
  }
  changeValuePassword() {
    const password: string = this.myForm.controls['password'].value;
    const confirmPassword: string = this.myForm.controls['confirm-password'].value;
    if(password === confirmPassword) {
      this.arePasswordsTheSame = true;
    }
    this.canShowCreated = false;
  }
}
