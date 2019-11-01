import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticationService } from 'app/profile/authentication.service';
import { UsersService } from 'app/profile/users.service';
import { IUser } from '../../profile/user.model';
import { GameService } from 'app/game/game.service';


@Component({
  selector: 'app-feedlist',
  templateUrl: './feedlist.component.html',
  styleUrls: ['./feedlist.component.css']
})
export class FeedlistComponent implements OnInit {
  userName:String;
  users:IUser[];

  constructor(private userService: UsersService ,private firestore: AngularFirestore, private gameService: GameService, private authService: AuthenticationService) { }
  ngOnInit() {
    this.authService.currentUserObservable().subscribe((user) => {
      this.userName = user.displayName;
      this.gameService.getDocument().subscribe();
    });
    this.listUsers();
  }

  listUsers() {
    this.userService.getUsersList().subscribe((users) => {
      this.users = users;
      console.log('Listen: ' + JSON.stringify(this.users));
    });
  }

  joinGame(){
    this.gameService.joinGame(this.userName);
  }
}
