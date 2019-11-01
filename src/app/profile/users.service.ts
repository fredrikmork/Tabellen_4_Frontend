import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IUser } from './user.model';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userCollection: AngularFirestoreCollection<IUser>;
  users: Observable<IUser[]>;

  constructor(private afs: AngularFirestore) {  
    this.userCollection = afs.collection<IUser>('users');
    this.users =this.userCollection.valueChanges();
  }
  
  getUsersList():Observable<IUser[]> {
    return this.users;
  }

  getDocument() {
   
  }

}
