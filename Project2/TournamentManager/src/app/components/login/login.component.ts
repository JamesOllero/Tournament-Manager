import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { AuthService } from "../../services/Auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  returnUrl: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginSubmit() {
    // localStorage.setItem('testItem', JSON.stringify({username: this.username, password: this.password}));
    this.authService.authenticate(this.username, this.password,
      () => this.router.navigate([this.returnUrl]),
      (err) => {
      console.log(err);
      });
  }

}
