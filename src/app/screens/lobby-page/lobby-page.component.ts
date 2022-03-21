import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby-page',
  templateUrl: './lobby-page.component.html',
  styleUrls: ['./lobby-page.component.css']
})
export class LobbyPageComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  getUser(): string {
    return localStorage.getItem('att-session') || '';
  }

  redirectTo(path: string) {
      this.router.navigateByUrl(`tasks/${path}`);
  }
}
