import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private angularFireStore: AngularFirestore) { }

  createGame(displayName) {
    const game = this.angularFireStore.collection('game');
    game.add({creator: displayName, state: 1});

  }

  joinGame(user) {
    console.log('Hei brukerid: ' + user.uid);
    const game = this.angularFireStore.collection('game').doc(user.uid);
    game.update({joiner: user.displayName, state: 2});

  }
  getDocument() {
    const db = this.angularFireStore.collection('game');
    return db.snapshotChanges();
  }
}



