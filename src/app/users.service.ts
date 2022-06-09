import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users=[
    {"id":1,
  "name":"user 1"},
    {"id":2,
  "name":"user 2"},
    {"id":3,
  "name":"user 3"}
  ];
  constructor() { }

  Getusers(){
    return this.users;
  };
}
