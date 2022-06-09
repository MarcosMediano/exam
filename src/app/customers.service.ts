import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  public customers=[
    {"id":1,
  "name":"customer 1"},
    {"id":2,
  "name":"customer 2"},
    {"id":3,
  "name":"customer 3"}
  ];
  constructor() { }

  GetCustomers(){
    return this.customers;
  }
}
