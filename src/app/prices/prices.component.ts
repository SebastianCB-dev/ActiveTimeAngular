import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  titlePage: Element = document.querySelector('#title-page')!;

  constructor() { }
  ngOnInit(): void {
     // Change title page
     if(this.titlePage) {
      this.titlePage.innerHTML = 'Active Time | Prices';
    }
  }

}
