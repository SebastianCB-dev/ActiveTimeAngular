import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundsService {

  successAudio: HTMLMediaElement = new Audio('../assets/sounds/success.m4a');
  errorAudio: HTMLMediaElement = new Audio('../assets/sounds/error.m4a');

  constructor() { }

  success() {
    this.successAudio.volume = 0.1;
    this.successAudio.play();
  }

  error() {
    this.errorAudio.volume = 0.2;
    this.errorAudio.play();
  }
}
