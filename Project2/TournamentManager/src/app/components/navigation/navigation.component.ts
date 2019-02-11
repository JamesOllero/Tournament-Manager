import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from "../../services/Auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() navItems: Array<{title: string, link:string}>;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  returnUrl: string;
  ngOnInit() {
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
