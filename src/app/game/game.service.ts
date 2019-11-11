import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
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

  async joinGame(user: IUser, userName: string) {
    const snapshotResult = this.angularFireStore.collection('game', ref =>
          ref.where('creator', '==', userName).limit(1)).snapshotChanges();

    snapshotResult.subscribe(doc => {
      const game = this.angularFireStore.collection('game').doc(doc[0].payload.doc.id);
      game.update({joiner: user.displayName, state: 2});
    });
  }

  getDocument() {
    const db = this.angularFireStore.collection('game');
    return db.snapshotChanges();
  }
}



