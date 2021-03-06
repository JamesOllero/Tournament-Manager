import { Component, OnInit } from '@angular/core';
import {Participant} from "../../model/participant";
import {ParticipantService} from "../../services/participant.service";
import { Location } from "@angular/common";
import { NgForm } from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-participant-register',
  templateUrl: './participant-register.component.html',
  styleUrls: ['./participant-register.component.css']
})
export class ParticipantRegisterComponent implements OnInit {
  public newParticipant = new Participant;
  constructor(
    private participantService: ParticipantService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.newParticipant.firstName = '';
    this.newParticipant.lastName = '';
    this.newParticipant.email = '';
  }

  createReturn() {
    localStorage.setItem('newParticipant', JSON.stringify(this.newParticipant));
    this.participantService.registerParticipant(
      () => {
      this.location.back();
      },
      (err) => {
      console.log(err);
      });
  }

  createContinue(participantForm: any) {
    localStorage.setItem('newParticipant', JSON.stringify(this.newParticipant));
    this.participantService.registerParticipant(
      () => {
      this.newParticipant = new Participant;
      participantForm.resetForm();
      },
      (err) => {
      console.log(err);
      });
  }

  redirect(){
    this.router.navigate(['main']);
  }
}
