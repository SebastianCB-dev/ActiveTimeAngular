import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  titlePage: Element = document.querySelector('#title-page')!;
  arePasswordsTheSame: boolean = true;
  myForm: FormGroup = this.fb.group({
    username: [, [Validators.required, Validators.maxLength(15)]],
    password: [, [Validators.required]],
    'confirm-password': [, [Validators.required]]
  })

  constructor(private fb: FormBuilder) { }

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
      return;
    }

    if(password !== confirmPassword ) {
      this.arePasswordsTheSame = false;
    }

    // Firebase
    console.log({username,password, confirmPassword});

  }

  isInvalidCamp( camp: string ): boolean {
    return this.myForm.controls[camp].errors! &&
           this.myForm.controls[camp].touched!;
  }

  changeValue() {
    this.arePasswordsTheSame = true;
  }
}
