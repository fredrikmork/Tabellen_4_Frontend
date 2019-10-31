import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userCollection: AngularFirestoreCollection<IUser>;
  users: Observable<IUser[]>;

  constructor(private afs: AngularFirestore) {  }
  
  getUsersList():Observable<IUser[]> {
    this.users = this.afs.collection('users').valueChanges() as Observable<IUser[]>;
    console.log("Hei fredda: " + JSON.stringify(this.users));
    return this.users;
  }
}
