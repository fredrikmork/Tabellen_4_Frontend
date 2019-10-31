import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsersService } from 'app/profile/users.service';
import { IUser } from '../../profile/user.model';



@Component({
  selector: 'app-feedlist',
  templateUrl: './feedlist.component.html',
  styleUrls: ['./feedlist.component.css']
})
export class FeedlistComponent implements OnInit {

  constructor(private userService: UsersService ,private firestore: AngularFirestore) { }
  users:IUser[];

  ngOnInit() {
    console.log('Liste av brukerne:');
    this.listUsers();
  }

  listUsers() {

    this.userService.getUsersList().subscribe((users) => {
      this.users = users;
    });
  }
}
