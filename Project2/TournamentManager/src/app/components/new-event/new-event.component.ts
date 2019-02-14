import {Component, OnInit} from "@angular/core";
import {ParticipantService} from "../../services/participant.service";
import {Participant} from "../../model/participant";
import {environment} from "../../../environments/environment";
import {Event} from "../../model/event";
import {Organizer} from "../../model/organizer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  private manualSeedUrl = "./seeding";
  private randomSeedUrl = "./randomizing";
  participants: Participant[];
  formats: Array<{title: string, type: string}>;
  usedFormat: {title:string,type:string};
  evt_desc: string;
  playerCount = 0;
  entrants = new Array<Participant>();
  currentEntrants = new Array<Participant>();
  removals = new Array<Participant>();
  manual: boolean;

  constructor(
    private participantService: ParticipantService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getParticipants();
    this.formats = environment.formats;

  }

  getParticipants() {
    this.participantService.getAllParticipants(
      () => {
        let participantArr = JSON.parse(localStorage.getItem('participants'));
        localStorage.removeItem('participants');
        let i: number;
        for(i=0;i<participantArr.length;i++){
          participantArr[i].name = participantArr[i].firstName + ' ' + participantArr[i].lastName;
        }
        this.participants =  participantArr;
        return;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addParticipants() {
    let i:number;
    for(i=0;i<this.entrants.length;i++) {
      this.currentEntrants.push(this.entrants[i]);
      let index = this.participants.indexOf(this.entrants[i]);
      this.participants.splice(index, 1);
    }
    this.entrants = [];
    this.playerCount = this.currentEntrants.length;
  }

  removeParticipants() {
    let i: number;
    for(i=0;i<this.removals.length;i++) {
      this.participants.push(this.removals[i]);
      let index = this.currentEntrants.indexOf(this.removals[i]);
      this.currentEntrants.splice(index, 1);
    }
    this.removals = [];
    this.playerCount = this.currentEntrants.length;
  }

  onSubmit() {
    let newEvent = new Event();
    newEvent.player_count = this.playerCount;
    newEvent.organizer_id = JSON.parse(localStorage.getItem('authToken')).managerId;
    newEvent.evt_type = this.usedFormat.title;
    newEvent.evt_desc = this.evt_desc;
    newEvent.in_progress = true;
    newEvent.participants = this.currentEntrants;
    localStorage.setItem('newEvent', JSON.stringify(newEvent));
    if(this.manual) {
      this.router.navigate([this.manualSeedUrl]);
    } else {
      this.router.navigate([this.randomSeedUrl]);
    }
  }

}
