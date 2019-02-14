import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:8080/organizer/getid';
  // OrganizersUrl = 'https://api.myjson.com/bins/1de9pk';
  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    return localStorage.getItem('authToken') !== null;
  }

  authenticate(username: string, password: string, success, fail) {
    return this.http.post<any>(this.authUrl,
      JSON.stringify({email: username, password: password}),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .toPromise()
      .then((resp) => {
        localStorage.setItem('authToken', JSON.stringify(resp));
        success();
      },
        (err) => {
        fail(err);
        });
  }

}
