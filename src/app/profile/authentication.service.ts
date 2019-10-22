import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: User;
  

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore ) {


    this.afAuth.authState.subscribe(user => {
      
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.user = user;
        this.addUser(this.user)
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  getUserFromLocalStorage() {
    console.log(localStorage.getItem('user'));
    return JSON.parse(localStorage.getItem('user'));
  }

  currentUserObservable(): any {
    return this.afAuth.authState
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!')
      }).catch((error) => {
        console.log(error)
      })
  }
 

  getUserName() {
    return this.user.displayName;
  }

  getUser() {
    return this.user;
  }

  addUser(user:User) {
    let users = this.firestore.collection('users').doc(this.user.uid);
    
    users.set({displayName: this.user.displayName, idToken:this.user.uid});
  }

  

}



