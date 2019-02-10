import { Component, OnInit } from '@angular/core';
import {Participant} from "../../model/participant";
import {ParticipantService} from "../../services/participant.service";
import { SearchUtilPipe } from "../../pipes/search-util.pipe";

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
  searchText: string;
  ngOnInit() {
    this.getParticipants();
  }
  getParticipants() {
    this.participantService.getAllParticipants(
      () => {
        let participantArr = JSON.parse(localStorage.getItem('participants'));
        // localStorage.removeItem('participants');
        let i: number;
        for(i=0;i<participantArr.length;i++){
          console.log(participantArr[i]);
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
