import { Component, OnInit } from '@angular/core';
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  events: Array<Event>;
  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents(
      () => {
        this.events = JSON.parse(localStorage.getItem('eventList'));
        // localStorage.removeItem('eventList');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
