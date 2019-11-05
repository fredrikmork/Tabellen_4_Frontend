import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IUser } from 'app/profile/user.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private angularFireStore: AngularFirestore) { }

  createGame(displayName) {
    const game = this.angularFireStore.collection('game');
    game.add({creator: displayName, state: 1});

  }

  joinGame(user: IUser) {
    console.log('Hei bruker: ' + JSON.stringify(user.displayName));
    const game = this.angularFireStore.collection('game').doc(user.uid);
    game.update({joiner: user.displayName, state: 2});

  }
  getDocument() {
    const db = this.angularFireStore.collection('game');
    return db.snapshotChanges();
  }
}



