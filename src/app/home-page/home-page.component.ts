import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  titlePage: Element = document.querySelector('#title-page')!;
  constructor() { }

  ngOnInit(): void {
     // Change title page
     if(this.titlePage) {
      this.titlePage.innerHTML = 'Active Time';
    }
  }

}
