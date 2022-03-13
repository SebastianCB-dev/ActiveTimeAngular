import { Injectable } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,} from 'firebase/firestore/lite';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
   private firebaseConfig = {
    apiKey: "AIzaSyDuQRXyft9XufV4Dl12cQG8hE3j8xfH-vM",
    authDomain: "activetime-angular.firebaseapp.com",
    projectId: "activetime-angular",
    storageBucket: "activetime-angular.appspot.com",
    messagingSenderId: "461750858868",
    appId: "1:461750858868:web:bb038c014f8645932ecd21",
    measurementId: "G-17DZGHYMSR"
  };
   public app;
   public analytics;

  constructor() {
     this.app = initializeApp(this.firebaseConfig);
     this.analytics = getAnalytics(this.app);
  }

  getDB() {
    return getFirestore(this.app);
  }
}
