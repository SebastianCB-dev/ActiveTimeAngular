import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  titlePage: Element = document.querySelector('#title-page')!;
  constructor() { }

  ngOnInit(): void {
    if(this.titlePage) {
      this.titlePage.innerHTML = 'Active Time | Register';
    }
  }

}
