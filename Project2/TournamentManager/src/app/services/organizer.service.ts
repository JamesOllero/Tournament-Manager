import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Organizer} from "../model/organizer";

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {
  private organizerUrl = 'http://localhost:8080/organizer';
  constructor(
    private http: HttpClient
  ) { }

  registerOrganizer(newOrganizer: Organizer, success, fail) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    return this.http.post(this.organizerUrl + '/addorganizer', newOrganizer, options).toPromise()
      .then((resp) => {
        success();
      },
        (err) => {
        fail(err);
        });
  }
}
