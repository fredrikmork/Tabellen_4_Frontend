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
  userName: string;
  users: IUser[];

  constructor(private userService: UsersService, private gameService: GameService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.currentUserObservable().subscribe((user) => {
      this.userName = user.displayName;
      this.gameService.getDocument().subscribe();
    });
    this.listUsers();
    this.getOtherUsers();
  }

  listUsers() {
    this.userService.getUsersList().subscribe((users) => {
      this.users = users;
      console.log('Listen: ' + JSON.stringify(this.users));
    });
  }

  joinGame(user: IUser) {
    this.gameService.joinGame(user);
  }

  getUsername() {
    return this.userName;
  }

  getOtherUsers() {
    if (!this.users) {
      return [];
    }
    return this.users.filter((users) => {
      return users.displayName !== this.getUsername();
    });
  }
}
