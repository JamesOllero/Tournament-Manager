import { Component, OnInit } from '@angular/core';
import { Event } from '../../model/event';
import { Organizer } from "../../model/organizer";
import {ParticipantService} from "../../services/participant.service";
import {Participant} from "../../model/participant";

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
  participants = new Array<Participant>();
  additions = new Array<Participant>();
  entrants = new Array<Participant>();
  removals = new Array<Participant>();
  constructor(
    private participantService: ParticipantService
  ) { }

  ngOnInit() {
    this.getAllParticipants();
  }

  onSubmit(){
    this.newEvent.organizer_id = this.newOrganizer.managerId;
    console.log("Organizer id: ", this.newEvent.organizer_id, " player count: ", this.newEvent.player_count);
    console.log("Event Type: ", this.newEvent.evt_type, " Event Description: ", this.newEvent.evt_desc);
    if (this.in_progress == true){
      console.log("Tournament is currently in progress");
    }
    else console.log("Tournament is not currently in progress");
    console.log(this.newOrganizer.managerId);
    console.log(this.newOrganizer.managerId);
  }

  getAllParticipants() {
    this.participantService.getAllParticipants(
      () => {
        let participantArr = JSON.parse(localStorage.getItem('participants'));
        localStorage.removeItem('participants');
        let i: number;
        for(i=0;i<participantArr.length;i++){
          participantArr[i].name = participantArr[i].firstName + ' ' + participantArr[i].lastName;
        }
        this.participants = participantArr;
        return;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addEntrants() {
    let i: number;
    for(i=0;i<this.additions.length;i++){
      this.entrants.push(this.additions[i]);
      let index = this.participants.indexOf(this.additions[i]);
      this.participants.splice(index, 1);
    }
    this.additions = [];
  }

  removeEntrants() {
    let i: number;
    for(i=0;i<this.removals.length;i++){
      this.participants.push(this.removals[i]);
      let index = this.entrants.indexOf(this.removals[i]);
      this.entrants.splice(index, 1);
    }
    this.removals = [];
  }
}
