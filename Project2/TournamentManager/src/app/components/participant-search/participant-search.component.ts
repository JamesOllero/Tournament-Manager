import { Component, OnInit } from '@angular/core';
import {Participant} from "../../model/participant";
import {ParticipantService} from "../../services/participant.service";

@Component({
  selector: 'app-participant-search',
  templateUrl: './participant-search.component.html',
  styleUrls: ['./participant-search.component.css']
})
export class ParticipantSearchComponent implements OnInit {
  participants: Participant[];
  constructor(
    private participantService: ParticipantService
  ) { }

  ngOnInit() {
    this.getParticipants();
  }
  getParticipants() {
    this.participantService.getAllParticipants(
      () => {
        this.participants = JSON.parse(localStorage.getItem('participants'));
        localStorage.removeItem('participants');
        return;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
