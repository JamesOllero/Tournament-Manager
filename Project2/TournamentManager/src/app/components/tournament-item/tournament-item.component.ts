import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-item',
  templateUrl: './tournament-item.component.html',
  styleUrls: ['./tournament-item.component.css']
})
export class TournamentItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  roundSubmit(){
    console.log("It's the end of the round!");
  }

  finalSubmit(){
    console.log("It's the final submit!");
  }
}
