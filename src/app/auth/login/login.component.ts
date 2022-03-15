import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titlePage: Element = document.querySelector('#title-page')!;
  myForm: FormGroup = this.fb.group({
    "username": [,[Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
    "password": [,[Validators.required, Validators.minLength(6), Validators.maxLength(16)]]
  });
  isLoginInvalid: boolean = true;
  isLoading = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if(this.titlePage) {
      this.titlePage.innerHTML = 'Active Time | Login';
    }
  }

  login() {

  }

  changeValueLogin() {

  }

  isInvalidCamp( camp: string ): boolean {
    return this.myForm.controls[camp].errors! &&
      this.myForm.controls[camp].touched!;
  }


}
