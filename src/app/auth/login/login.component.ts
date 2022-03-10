import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titlePage: Element = document.querySelector('#title-page')!;

  constructor() { }

  ngOnInit(): void {
    if(this.titlePage) {
      this.titlePage.innerHTML = 'Active Time | Login';
    }
  }

}
