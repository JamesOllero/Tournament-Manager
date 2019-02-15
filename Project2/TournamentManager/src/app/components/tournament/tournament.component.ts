import { Component, OnInit } from '@angular/core';
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  events: Array<Event>;

  constructor() {
  }

  ngOnInit() {
  }
}

