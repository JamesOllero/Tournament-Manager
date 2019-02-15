import { Injectable } from '@angular/core';
import {Event} from "../model/event";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Participant} from "../model/participant";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventUrl = 'http://localhost:8080/event';
  constructor(
    private http: HttpClient
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
}
