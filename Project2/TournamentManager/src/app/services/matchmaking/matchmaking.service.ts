import { Injectable } from '@angular/core';
import { Participant } from '../../model/participant';
import {EventParticipant} from "../../model/event-participant";
import {Match} from "../../model/match";

@Injectable({
  providedIn: 'root'
})
export class MatchmakingService {

  player1: Array<Participant>;
  player2: Array<Participant>;
  constructor() { }

  singleElim(people: Array<Participant>){
    let winners: Array<string> = new Array<string>();

    winners.push("Joe");
    winners.push("Chris");
    winners.push("Star");
    //winners.push("James");
    //winners.push("Test");

    for (let i in winners) {
      console.log(winners[i]);
    }

    while (winners.length > 1) {
      if (winners.length % 2 != 0) {
        winners.push("BYE");
      }
      for (let i = 0; i < winners.length; i++){
        if (winners[i+1] != "BYE"){
          console.log(winners[i], " plays against ", winners[i + 1]);
          let a = Math.pow((Math.random() * 100), (Math.random() * 100));
          let b = Math.pow((Math.random() * 100), (Math.random() * 100));

          if (a > b) {
            console.log(winners[i], " won the match.");
            winners.splice(i + 1, 1);
          }
          else if (a < b) {
            console.log(winners[i + 1], " won the match.");
            winners.splice(i, 1);
          }
        }
        else {
          console.log(winners[i], "got the BYE");
          winners.splice(i + 1, 1);
        }
      }
    }
  }

  // doubleElim(people: Array<Participant>){
  //   // TO-DO
  //   let winners : Array<Participant>;
  //   let losers: Array<Participant>;
  //
  //   return null;
  // }

  randomWeight(rando: Array<EventParticipant>){
    let rand: Array<Match>;

    // let rand: number[];
    // for (let i = 0; i < rando.length; i++){
    //   rand[i] = this.random();
    // }
    // return rand;
  } 

  random(){
    return Math.pow((Math.random() * 100), (Math.random() * 100));
  }

  pairings(people: Array<Participant>){
    let bye: Participant = new Participant();
    bye.name = "Bye";
    for (let i = people.length - 1; i >= 0; i-=2) {
      if (i == 0 && people.length % 2 != 0){
        this.player1[i] = people[i];
        this.player2[i] = bye;
      }
      else{
        this.player1[i] = people[i];
        this.player2[i] = people[i-1];
      }
    }
  }

  Pseudorandom(people: Array<Participant>) {
    let sorted: Array<Participant>;
    for (let i = 0; i < people.length; i += 2) {
      let p1: Participant = people[i];
      let p2: Participant = people[i + 1];
      sorted = people.sort((p1, p2) => {
        if (MatchmakingService.weight(p1) > MatchmakingService.weight(p2)) {
          return 1;
        } else if (MatchmakingService.weight(p1) < MatchmakingService.weight(p2)) {
          return -1;
        }
        return 0;
      })
    }
    return sorted;
  }

  Random(people: Array<EventParticipant>){
    let rand: number[];
    let randomized: Array<Match>;
    let sorted: Array<EventParticipant>;
    for (let i = 0; i < people.length; i+= 2){
      rand[i] = this.random();
      rand[i+1] = this.random();
      let p1: EventParticipant = people[i];
      let p2: EventParticipant = people[i+1];
      sorted = people.sort((p1, p2) => {
        if (rand[i] > rand[i+1]) {
          return 1;
        } else if (rand[i] < rand[i+1]) {
          return -1;
        }
        return 0;
      })
    }
    for (let i = 0; i < sorted.length; i+= 2) {
      let match = new Match();
      match.p1 = sorted[i];
      match.p2 = sorted[i+1];
      match.p1Drop = false;
      match.p2Drop = false;
      match.lock = false;
      match.p1Score = 0;
      match.p2Score = 0;
      match.roundId = 1;
      randomized.push(match);
    }
    return randomized;
  }

  static weight(p : Participant){
    let result: number;
    let total: number = p.wins + p.losses + p.draws;
    if (total != 0){
      result = (((p.wins * 3) + p.draws) / total);
    }
    else{
      result = 0;
    }
    return result;
  }

}
