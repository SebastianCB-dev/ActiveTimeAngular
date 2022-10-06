import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {SoundsService} from "../../services/sounds.service";
import {FirebaseService} from "../../services/firebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titlePage: Element = document.querySelector('#title-page')!;
  myForm: UntypedFormGroup = this.fb.group({
    "username": [,[Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
    "password": [,[Validators.required, Validators.minLength(6), Validators.maxLength(16)]]
  });
  isLoginInvalid: boolean = false;
  isLoading = false;
  constructor(private fb: UntypedFormBuilder,
              private soundsService: SoundsService,
              private fs: FirebaseService,
              private route: Router) { }

  ngOnInit(): void {}

  async login() {
    const username = this.myForm.controls['username'].value;
    const password = this.myForm.controls['password'].value;

    // If the form is invalid
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      this.soundsService.error();
      return;
    }
    this.isLoading = true;
    // Get User DB
    const user = await this.fs.getUser(username);
    if(!user || user['password'] !== password) {
      this.isLoginInvalid = true;
      this.isLoading = false;
      this.soundsService.error();
      return;
    }
    localStorage.setItem('att-session', username);
    this.soundsService.success();
    this.isLoading = false;
    // Todo change route
    await this.route.navigate(['/tasks/menu']);

  }

  changeValueLogin() {
    this.isLoginInvalid = false;
  }

  isInvalidCamp( camp: string ): boolean {
    return this.myForm.controls[camp].errors! &&
      this.myForm.controls[camp].touched!;
  }


}
