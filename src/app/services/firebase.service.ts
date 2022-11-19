import { Injectable } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,
         doc,
         getDoc,
         getDocs,
         setDoc,
         query,
         collection,
         where,
         updateDoc } from 'firebase/firestore';

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

  get db() {
    return getFirestore(this.app);
  }

  async registerUser( user: any ) {
    await setDoc(doc(this.db, "users", user.username), user);
  }

  async getUser( username: string ) {
    const docRef = doc(this.db, "users", username);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

  async registerTask( task: any ) {
    await setDoc(doc(this.db, "tasks", task.id), task);
  }

  async getTasksByUser( user: string ) {
    if(!user) return [];
    const q = query(collection(this.db, "tasks"), where("user", "==", user));
    let array_tasks: any = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      array_tasks.push(doc.data());
    });
    
    return array_tasks;
  }

  async updateTask(task: any) {

    await updateDoc(doc(this.db, "tasks", task['id']), task);
    console.log('Cambio existoso');
  }
}
