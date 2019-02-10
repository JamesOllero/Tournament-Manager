import { Component, OnInit } from '@angular/core';
import {Participant} from "../../model/participant";

@Component({
  selector: 'app-participant-register',
  templateUrl: './participant-register.component.html',
  styleUrls: ['./participant-register.component.css']
})
export class ParticipantRegisterComponent implements OnInit {
  public newParticipant: Participant;
  constructor() { }

  ngOnInit() {
  }

}
