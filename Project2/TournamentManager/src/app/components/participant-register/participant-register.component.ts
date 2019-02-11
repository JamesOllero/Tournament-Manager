import { Component, OnInit } from '@angular/core';
import {Participant} from "../../model/participant";
import {ParticipantService} from "../../services/participant.service";
import { Location } from "@angular/common";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-participant-register',
  templateUrl: './participant-register.component.html',
  styleUrls: ['./participant-register.component.css']
})
export class ParticipantRegisterComponent implements OnInit {
  public newParticipant = new Participant;
  constructor(
    private participantService: ParticipantService,
    private location: Location
  ) { }

  ngOnInit() {
    this.newParticipant.firstName = '';
    this.newParticipant.lastName = '';
    this.newParticipant.email = '';
  }

  createReturn() {
    this.participantService.registerParticipant(this.newParticipant,
      () => {
      this.location.back();
      },
      (err) => {
      console.log(err);
      });
  }

  createContinue(participantForm: any) {
    this.participantService.registerParticipant(this.newParticipant,
      () => {
      this.newParticipant = new Participant;
      participantForm.resetForm();
      },
      (err) => {
      console.log(err);
      });
  }
}
