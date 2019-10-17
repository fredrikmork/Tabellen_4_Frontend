import { Component } from '@angular/core';
import { AuthenticationService } from 'app/profile/authentication.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(private authService: AuthenticationService) { }
  pageTitle: string = 'Tabellen';

  ngOnInit() {
    console.log(this.authService.getUserName)
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
    this.authService.GoogleAuth();
  }

}