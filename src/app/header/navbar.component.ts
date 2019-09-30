import { Component } from '@angular/core';
import { AuthenticationService } from 'app/profile/authentication.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{

  constructor(private authService: AuthenticationService) {}
  pageTitle: string = 'Tabellen';

  ngOnInit(){
    console.log(this.authService.getUserName)
  }



googleLogin(){
  this.authService.GoogleAuth();
}
}