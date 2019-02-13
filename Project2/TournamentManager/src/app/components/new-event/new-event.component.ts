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

  onSubmit() {
    console.log(this.usedFormat.title);
    console.log(this.usedFormat.type);
    console.log(this.evt_desc);
  }
}
