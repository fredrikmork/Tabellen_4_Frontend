import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {IUser} from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: AngularFirestore) { }

  listUsers() {
    console.log('Her:')
    let userCollection: AngularFirestoreCollection<IUser> = this.firestore.collection('users');
    console.log(userCollection);
    let userObservable = userCollection.valueChanges();

    return userObservable;
  }
}
