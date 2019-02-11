import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Submit button is displaying this.");
    console.log("Username of organizer is: ", this.username);
    console.log("Password of organizer is: ", this.password);
    console.log("E-mail of organizer is: ", this.email);
  }
}
