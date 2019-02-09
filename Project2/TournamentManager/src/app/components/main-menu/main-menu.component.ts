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
    console.log("in the ngoninit from main menu")
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'login';
  }

  logout() {
    localStorage.clear();
    this.router.navigate([this.returnUrl]);
    window.location.reload();
  }
}
