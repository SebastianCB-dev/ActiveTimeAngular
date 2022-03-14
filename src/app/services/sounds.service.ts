import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundsService {

  successAudio: HTMLAudioElement = new Audio('../assets/sounds/success.m4a');
  errorAudio: HTMLAudioElement = new Audio('../assets/sounds/error.m4a');

  constructor() { }

  success() {
    this.successAudio.play();
  }

  error() {
    this.errorAudio.play();
  }
}
