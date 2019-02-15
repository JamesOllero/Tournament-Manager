import { Injectable } from '@angular/core';
import {Event} from "../model/event";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Participant} from "../model/participant";
import {EventParticipant} from "../model/event-participant";
import {Round} from "../model/round";
import {MatchmakingService} from "./matchmaking/matchmaking.service";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventUrl = 'http://localhost:8080/event';
  constructor(
    private http: HttpClient,
    private matchmakingService: MatchmakingService;
  ) { }

  postNewEvent(newEvent: Event, success, fail) {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    let options = {headers: headers};
    return this.http.post(this.eventUrl + '/addevent', JSON.stringify(newEvent), options).toPromise()
      .then((resp) => {
        localStorage.setItem('eventItem', JSON.stringify(resp));
        newEvent.eventId = JSON.parse(localStorage.getItem('eventItem')).id;
        localStorage.removeItem('eventItem');
        localStorage.setItem('newEvent', JSON.stringify(newEvent));
        success();
      },
        (err) => {
        fail(err);
        });
  }

  getAllEvents(success, fail) {
    return this.http.get<Array<Event>>(this.eventUrl + '/events').toPromise()
      .then((resp)=>{
        localStorage.setItem('allEvents', JSON.stringify(resp));
        console.log('Got Events');
        success();
      },
        (err)=>{
        fail(err);
        });
  }

  activatePlayers() {
    let event: Event = JSON.parse(localStorage.getItem('newEvent'));
    let i: number;
    for(i=0;i<event.participants.length;i++){
      let activeParticipant = new EventParticipant();
      activeParticipant.participantId = event.participants[i].participantId;
      activeParticipant.localWins = 0;
      activeParticipant.localLosses = 0;
      activeParticipant.localDraws = 0;
      activeParticipant.name = event.participants[i].name;
      activeParticipant.dropped = false;
      activeParticipant.eventId = event.eventId;
      event.activeParticipants.push(activeParticipant);
    }
    localStorage.setItem('newEvent', JSON.stringify(event));
  }

  beginEvent() {
    let roundOne = new Round();
    let event: Event = JSON.parse(localStorage.getItem('newEvent'));
    roundOne.roundId = 1;
    roundOne.participants = event.activeParticipants;
    roundOne.roundNum = 1;
    roundOne.eventId = event.eventId;
    roundOne.current = true;
    roundOne.matches = this.matchmakingService.randomize(roundOne.participants);
    event.rounds.push(roundOne);
    localStorage.setItem('newEvent', JSON.stringify(event));
    return;
  }
}
