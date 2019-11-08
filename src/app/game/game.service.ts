import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
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

  joinGame(user: IUser, userName: string) {
    const gameId = this.angularFireStore.collection('game').doc(userName);
    console.log('Game id:');
    console.log(gameId);
   // this.angularFireStore.collection('game').snapshotChanges((snapshot) => {
     // const gameId = snapshot.getRef().getId();
      // getParent().getParent().collection('game');
     // console.log(gameId);
     // const game = this.angularFireStore.collection('game').doc(gameId);
     // game.update({joiner: user.displayName, state: 2});
    // });

  }
  getDocument() {
    const db = this.angularFireStore.collection('game');
    return db.snapshotChanges();
  }
}



