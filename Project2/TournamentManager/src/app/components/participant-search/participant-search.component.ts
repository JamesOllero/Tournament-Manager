import { Component, OnInit, Input } from '@angular/core';
import {Participant} from "../../model/participant";
import {ParticipantService} from "../../services/participant.service";
import { SearchUtilPipe } from "../../pipes/search-util.pipe";
import { Location } from "@angular/common";

@Component({
  selector: 'app-participant-search',
  templateUrl: './participant-search.component.html',
  styleUrls: ['./participant-search.component.css']
})
export class ParticipantSearchComponent implements OnInit {
  participants: Participant[];
  constructor(
    private participantService: ParticipantService,
    private location: Location
  ) { }
  @Input()
  public searchText: string;
  public participant: Participant;
  ngOnInit() {
    this.getParticipants();
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
        this.participants = participantArr;
        return;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  goBack() {
    this.location.back();
  }

}
