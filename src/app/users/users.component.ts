import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users:any;

  constructor(public usersService:UsersService) {
    
   }

  ngOnInit(): void {
    this.users=this.usersService.Getusers();
  }

}
