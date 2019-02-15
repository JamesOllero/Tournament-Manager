import { Component, OnInit } from '@angular/core';
import {Match} from "../../model/match";
import {Round} from "../../model/round";
import {MatchmakingService} from "../../services/matchmaking/matchmaking.service";
import {Event} from "../../model/event";

@Component({
  selector: 'app-tournament-item',
  templateUrl: './tournament-item.component.html',
  styleUrls: ['./tournament-item.component.css']
})
export class TournamentItemComponent implements OnInit {

  currentEvent: Event;
  currentRound: Round;
  roundNumber: number;
  roundMatches: Array<Match>;
  constructor(
    private matchmakingService: MatchmakingService
  ) { }

  ngOnInit() {
    this.currentEvent = JSON.parse(localStorage.getItem('newEvent'));
    let indexing = this.currentEvent.rounds.length;
    this.currentRound = this.currentEvent.rounds[indexing-1];
    this.roundMatches = this.currentRound.matches;
  }

  roundSubmit(){
    for (let i in this.roundMatches){
      if(!this.roundMatches[i].lock){
        alert("Not all matches locked.");
        return;
      }
    }
    console.log("It's the end of the round!");
    this.matchmakingService.advanceRound(this.currentEvent, this.currentRound, this.roundMatches);
    this.ngOnInit();
    //else if (localStorage.parse('newEvent').type == "Double Elimination"){
      // this.matchmakingService.doubleElim(localStorage.parse('newEvent').participants);
    //}
    // else if (localStorage.parse('newEvent').type == "Swiss") {
    //   this.matchmakingService.Pseudorandom(localStorage.parse('newEvent').participants);
    // }
  }

  finalSubmit(){
    console.log("It's the final submit!");
    // set inProgress to false!
    // Add
  }
}
