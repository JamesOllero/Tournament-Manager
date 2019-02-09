import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/Auth/auth.service";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  navs: Array<{title: string, link: string}>;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.navs = environment.navigator;
  }

}
