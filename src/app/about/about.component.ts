import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  titlePage: Element = document.querySelector('#title-page')!;

  constructor() {}

  ngOnInit(): void {
   // Change title page
    if(this.titlePage) {
      this.titlePage.innerHTML = 'Active Time | About';
    }
  }

}
