import { Component, OnInit } from '@angular/core';
import {Organizer} from "../../model/organizer";
import {OrganizerService} from "../../services/organizer.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent implements OnInit {
  newOrganizer = new Organizer;
  constructor(
    private organizerService: OrganizerService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.organizerService.registerOrganizer(this.newOrganizer,
      () => {
      this.location.back();
      },
      (err) => {
      console.log(err);
      }
    );
  }
}
