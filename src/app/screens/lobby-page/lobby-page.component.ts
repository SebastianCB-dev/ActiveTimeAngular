import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby-page',
  templateUrl: './lobby-page.component.html',
  styleUrls: ['./lobby-page.component.css']
})
export class LobbyPageComponent implements OnInit, AfterContentInit, OnDestroy {
  data_1: number = 0;
  data_2: number = 0;
  data_3: number = 0;
  id_1!: NodeJS.Timeout;
  id_2!: NodeJS.Timeout;
  id_3!: NodeJS.Timeout;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    this.changeData()
  }
  getUser(): string {
    return localStorage.getItem('att-session') || '';
  }

  redirectTo(path: string) {
      this.router.navigateByUrl(`tasks/${path}`);
  }
  changeData() {

  const interval_data_1 = setInterval(() => {
    this.id_1 = interval_data_1;
      if(this.data_1 === 1232) {
        this.clearIntervalData(interval_data_1);
      }
      this.data_1++;
    }, 1);

    const interval_data_2 = setInterval(() => {
      this.id_2 = interval_data_2;
      if (this.data_2 === 711) {
        this.clearIntervalData(interval_data_2);
      }
      this.data_2++;
    }, 10);

    const interval_data_3 = setInterval(() => {
      this.id_3 = interval_data_3;
      if (this.data_3 === 422) {
        this.clearIntervalData(interval_data_3);
      }
      this.data_3++;
    }, 20);
  }

  clearIntervalData(id: NodeJS.Timeout) {
    clearInterval(id);
  }

  ngOnDestroy() {
    if(this.id_1) {
      this.clearIntervalData(this.id_1);
    }
    if(this.id_2) {
      this.clearIntervalData(this.id_2);
    }
    if(this.id_3) {
      this.clearIntervalData(this.id_3);
    }
  }
}
