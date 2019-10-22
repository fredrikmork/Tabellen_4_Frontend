import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsersService } from 'app/profile/users.service';
import { IUser } from '../../profile/user.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-feedlist',
  templateUrl: './feedlist.component.html',
  styleUrls: ['./feedlist.component.css']
})
export class FeedlistComponent implements OnInit {

  constructor(private userService: UsersService ,private firestore: AngularFirestore) {
  }
  users:IUser[];

  ngOnInit() {
    this.listUsers();
  }

  listUsers() {
    this.userService.listUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
