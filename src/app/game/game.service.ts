import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private angularFireStore: AngularFirestore) { }


  createGame(displayName){
    let game = this.angularFireStore.collection('game');
    game.add({creator:displayName, state:1})
    
  }

  joinGame(displayName){
    let game = this.angularFireStore.collection('game').doc('cj88Kc9QbdeiWinTDoX1');
    game.update({joiner:'Edis', state:2})

  }
  getDocument() {
    let db = this.angularFireStore.collection('game');
    return db.snapshotChanges();
  }
}



