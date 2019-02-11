import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";
import {Participant} from "../model/participant";

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private participantUrl = 'http://localhost:8080/player';
  constructor(
    private http: HttpClient
  ) { }

  getAllParticipants(success, fail) {
    return this.http.get<Array<Participant>>(this.participantUrl + '/players').toPromise()
      .then((resp) => {
        localStorage.setItem('participants', JSON.stringify(resp));
        console.log('Got Participants');
        success();
      },
        (err) => {
        fail(err);
        });
  }

  registerParticipant(success, fail) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    let newParticipant = JSON.parse(localStorage.getItem('newParticipant'));
    return this.http.post(this.participantUrl + '/addplayer', JSON.stringify(newParticipant), options).toPromise()
      .then((resp)=>{
        success();
      },
        (err) => {
        fail(err);
        })
  }
}
