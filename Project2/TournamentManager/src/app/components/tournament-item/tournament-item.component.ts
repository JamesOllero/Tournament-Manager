import { Component, OnInit } from '@angular/core';
import {Match} from "../../model/match";
import {Round} from "../../model/round";
import {MatchmakingService} from "../../services/matchmaking/matchmaking.service";

@Component({
  selector: 'app-tournament-item',
  templateUrl: './tournament-item.component.html',
  styleUrls: ['./tournament-item.component.css']
})
export class TournamentItemComponent implements OnInit {

  currentRound: Round;
  roundMatches: Array<Match>;
  constructor(
    private matchmakingService: MatchmakingService
  ) { }

  ngOnInit() {
  }

  roundSubmit(){
    for (let i in this.roundMatches){
      if(!this.roundMatches[i].lock){
        alert("Not all matches locked.");
        return;
      }
    }
    console.log("It's the end of the round!");
    if (localStorage.parse('newEvent').type == "Single Elimination"){
      this.matchmakingService.singleElim(localStorage.parse('newEvent').participants);
    }
    //else if (localStorage.parse('newEvent').type == "Double Elimination"){
    //   this.matchmakingService.doubleElim(localStorage.parse('newEvent').participants);
    //}
    // else if (localStorage.parse('newEvent').type == "Swiss") {
    //   this.matchmakingService.Pseudorandom(localStorage.parse('newEvent').participants);
    // }
  }

  finalSubmit(){
    console.log("It's the final submit!");
  }
}
