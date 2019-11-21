import { Component, NgModule, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/profile/authentication.service';

@Component({
    selector: ('help'),
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.css']
})

export class HelpComponent implements OnInit {
    pageTitle: 'Tabellen';
   // userName: string;
    constructor(private authService: AuthenticationService) {}
    ngOnInit() {
       // this.userName = this.authService.getUserName();
       // console.log(this.userName);
    }
}
