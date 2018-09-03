import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }
  user: string; 
  serialNumber: string;
  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.serialNumber = localStorage.getItem('serailNumber');
  }

  logout(){
    console.log("logged out");
    localStorage.removeItem('loginStatus');
  }

  deleteUser(){
    console.log("user deleted");
  }

}
