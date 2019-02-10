import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/Auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  returnUrl: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  goToEventCreator() {
    this.router.navigate(['/main/event/new']);
  }

  goToParticipantRegistry() {
    this.router.navigate(['/main/participant/register']);
  }

  goToParticipantLookup() {
    this.router.navigate(['/main/participant/search']);
  }
}
