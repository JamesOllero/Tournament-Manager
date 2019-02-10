import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Participant} from "../model/participant";

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private participantUrl = 'http://localhost:8080/player/players';
  constructor(
    private http: HttpClient
  ) { }

  getAllParticipants(success, fail) {
    return this.http.get<Array<Participant>>(this.participantUrl).toPromise()
      .then((resp) => {
        localStorage.setItem('participants', JSON.stringify(resp));
        console.log('Got Participants');
        success();
      },
        (err) => {
        fail(err);
        });
  }


}