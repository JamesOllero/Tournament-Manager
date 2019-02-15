import {Component, OnInit} from "@angular/core";
import {ParticipantService} from "../../services/participant.service";
import {Participant} from "../../model/participant";
import {environment} from "../../../environments/environment";
import {Event} from "../../model/event";
import {Organizer} from "../../model/organizer";
import {Router} from "@angular/router";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})

export class NewEventComponent implements OnInit {
  private manualSeedUrl = "/main/event/seeding";
  private randomSeedUrl = "/main/event/active";
  participants: Participant[];
  formats: Array<{ title: string, type: string }>;
  usedFormat: { title: string, type: string };
  evt_desc: string;
  playerCount = 0;
  entrants = new Array<Participant>();
  currentEntrants = new Array<Participant>();
  removals = new Array<Participant>();
  manual: boolean;
  submitDisabled: boolean;

  constructor(
    private participantService: ParticipantService,
    private router: Router,
    private eventService: EventService
  ) {
  }

  ngOnInit() {
    this.getParticipants();
    this.formats = environment.formats;
    this.submitDisabled = false;
  }

  getParticipants() {
    this.participantService.getAllParticipants(
      () => {
        let participantArr = JSON.parse(localStorage.getItem('participants'));
        localStorage.removeItem('participants');
        let i: number;
        for (i = 0; i < participantArr.length; i++) {
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

  addParticipants() {
    let i: number;
    for (i = 0; i < this.entrants.length; i++) {
      this.currentEntrants.push(this.entrants[i]);
      let index = this.participants.indexOf(this.entrants[i]);
      this.participants.splice(index, 1);
    }
    this.entrants = [];
    this.playerCount = this.currentEntrants.length;

  }

  removeParticipants() {
    let i: number;
    for (i = 0; i < this.removals.length; i++) {
      this.participants.push(this.removals[i]);
      let index = this.currentEntrants.indexOf(this.removals[i]);
      this.currentEntrants.splice(index, 1);
    }
    this.removals = [];
    this.playerCount = this.currentEntrants.length;
  }

  // Debugging method
  getEvents() {
    this.eventService.getAllEvents(
      ()=>{
        console.log('We did the thing');
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  onSubmit() {
    if (this.playerCount < 2) {
      alert("You don't have enough participants to begin a tournament.\nPlease ensure there are at least two entrants.");
      return;
    }
    let newEvent = new Event();
    //newEvent.organizer = JSON.parse(localStorage.getItem('authToken'));
    newEvent.organizers = JSON.parse(localStorage.getItem('authToken'));
    // newEvent.organizerId = JSON.parse(localStorage.getItem('authToken')).managerId;
    console.log(newEvent.organizers);
    newEvent.participants = this.currentEntrants;
    newEvent.eventType = this.usedFormat.title;
    newEvent.in_progress = true;
    newEvent.description = this.evt_desc;
    newEvent.playerNum = this.currentEntrants.length;
    localStorage.setItem('newEvent', JSON.stringify(newEvent));
    this.eventService.postNewEvent(
      () => {
        this.eventService.activatePlayers();
        this.eventService.beginEvent();
        console.log(JSON.parse(localStorage.getItem('newEvent')));
        this.router.navigateByUrl('/main/event/active');
      },
      (err) => {
      console.log(err);
      });
  }


  redirect(){
    this.router.navigate(['main']);
  }
}

