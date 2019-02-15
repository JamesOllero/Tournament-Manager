import { Component, OnInit } from '@angular/core';
import {Match} from "../../model/match";
import {Round} from "../../model/round";
import {MatchmakingService} from "../../services/matchmaking/matchmaking.service";
import {Event} from "../../model/event";
import {EventParticipant} from "../../model/event-participant";
import {Router} from "@angular/router";

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
    private matchmakingService: MatchmakingService,
    private router: Router
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
    if(this.roundMatches.length<2){
      alert("There is only one match remaining.\nPlease finalize the Tournament.");
      return;
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
    for (let i in this.roundMatches){
      if(!this.roundMatches[i].lock){
        alert("Not all matches locked.");
        return;
      }
    }
    if(this.roundMatches.length>1 && (this.currentEvent.eventType==='Single Elimination' || this.currentEvent.eventType==='Double Elimination')){
      alert('There are presently too many matches in progress for an elimination tournament.\nPlease submit the current round instead.');
      return;
    }
    console.log("It's the final submit!");
    this.currentEvent.in_progress=false;
    this.compareFinal();
    this.declareWinner();
  }

  compareFinal() {
    let match = this.roundMatches[0];
    let array = new Array<EventParticipant>();
    if(match.p1Score>match.p2Score){
      match.p1.localWins++;
      array.push(match.p1);
      array.push(match.p2);
    } else {
      match.p2.localWins++;
      array.push(match.p2);
      array.push(match.p1);
    }
    console.log(array);
    this.currentEvent.activeParticipants = array;

  }

  declareWinner() {
    if(this.currentEvent.activeParticipants[0].localWins>this.currentEvent.activeParticipants[1].localWins){
      this.currentEvent.winner = this.currentEvent.activeParticipants[0];
    } else {
      this.currentEvent.winner = this.currentEvent.activeParticipants[1];
    }
    console.log(this.currentEvent.winner);
  }

  goHome() {
    localStorage.removeItem('newEvent');
    this.router.navigateByUrl('/main');
  }
}
