import { Component, OnInit } from '@angular/core';
import { Event } from '../../model/event';
import { Organizer } from "../../model/organizer";

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  newEvent = new Event();
  organizer_id: number;
  player_count: number;
  evt_type: string;
  evt_desc: string;
  in_progress: boolean = true;
  newOrganizer: Organizer = JSON.parse(localStorage.getItem('authToken'));

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.newEvent.organizer_id = this.newOrganizer.managerId;
    console.log("Organizer id: ", this.newEvent.organizer_id, " Player count: ", this.newEvent.player_count);
    console.log("Event Type: ", this.newEvent.evt_type, " Event Description: ", this.newEvent.evt_desc);
    if (this.newEvent.in_progress == true){
      console.log("Tournament is currently in progress");
    }
    else console.log("Tournament is not currently in progress");
  }

}
