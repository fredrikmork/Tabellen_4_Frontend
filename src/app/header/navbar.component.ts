import { Component } from '@angular/core';
import { AuthenticationService } from 'app/profile/authentication.service';
import { User } from 'firebase';
import { GameService } from 'app/game/game.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
constructor(private authService: AuthenticationService, private gameService: GameService) { }
  pageTitle: string = 'Tabellen';
  userName:String;

  ngOnInit() {
    this.authService.currentUserObservable().subscribe((user) => {
      console.log("LOGIN HAR SKEJDD")
      console.log(user);
      this.userName = user.displayName;
      this.gameService.getDocument().subscribe();
    });


    
    window.onscroll = function () {
      var Logo = document.getElementById("t-logo")
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        Logo.style.width = '144px';
        Logo.style.height = '81px';
        Logo.style.marginTop = '-57px';
      } else {
        Logo.style.width = '288px';
        Logo.style.height = '162px';
        Logo.style.marginTop = '0px';
      }
    }
  }

  googleLogin() {
    this.authService.GoogleAuth().then(() => this.userName = this.authService.getUserName());
  }

  getUserName(){
    console.log(this.authService.getUserName());
  }

  getUser(){
    return this.userName;
  }

  createGame(){
    this.gameService.createGame(this.getUser());
  }

  joinGame(){
    this.gameService.joinGame(this.getUser());
  }

}