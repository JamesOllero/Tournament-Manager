import { Injectable } from '@angular/core';
import {Event} from "../model/event";
import {HttpClient} from "@angular/common/http";
import {Participant} from "../model/participant";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventUrl = 'http://localhost:8080/event';
  constructor(
    private http: HttpClient
  ) { }

  getEvents(success, fail) {
    return this.http.get<Array<Event>>(this.eventUrl + '/events').toPromise()
      .then((resp) => {
          localStorage.setItem('eventList', JSON.stringify(resp));
          console.log('Got Events');
          success();
        },
        (err) => {
          fail(err);
        });
  }
}
