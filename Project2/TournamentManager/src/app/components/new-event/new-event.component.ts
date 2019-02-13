import {Component, OnInit} from "@angular/core";
import {ParticipantService} from "../../services/participant.service";
import {Participant} from "../../model/participant";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  participants: Participant[];
  formats: Array<{title: string, type: string}>;
  usedFormat: {title:string,type:string};
  evt_desc: String;
  playerCount = 0;
  entrants = new Array<Participant>();
  currentEntrants = new Array<Participant>();
  removals = new Array<Participant>();
  manual: boolean;

  constructor(
    private participantService: ParticipantService
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
    console.log(this.usedFormat.title);
    console.log(this.usedFormat.type);
    console.log(this.evt_desc);
    console.log(this.playerCount);
    console.log(this.currentEntrants);
    console.log(this.manual);
  }

}
