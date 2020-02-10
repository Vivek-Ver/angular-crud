import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UsersService) { }

  ngOnInit() {
      this.userService.getUsers().subscribe((resp) => {
        console.log(resp);
        this.users = resp.data;
      } )
      /*then(users => this.users = users);*/
  }

}