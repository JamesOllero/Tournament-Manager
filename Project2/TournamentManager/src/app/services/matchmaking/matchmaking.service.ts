import { Injectable } from '@angular/core';
import { Participant } from '../../model/participant';
import {EventParticipant} from "../../model/event-participant";
import {Match} from "../../model/match";
import {Round} from "../../model/round";
import {Event} from "../../model/event";

@Injectable({
  providedIn: 'root'
})
export class MatchmakingService {

  player1 = new Array<EventParticipant>();
  player2 = new Array<EventParticipant>();
  constructor() { }

  advanceRound(event: Event, round: Round, matches: Match[]) {
    this.player1 = [];
    this.player2 = [];
    event.activeParticipants = this.compareResults(matches);
    console.log(event.activeParticipants);
    if(event.eventType==='Single Elimination'){
      event.activeParticipants = this.singleElim(event.activeParticipants);
    }
    round.current = false;
    event.rounds.push(this.generateRound(event.activeParticipants, round));
    localStorage.setItem('newEvent', JSON.stringify(event));
  }

  singleElim(people: Array<EventParticipant>) {
    console.log(people);
    let winners: Array<EventParticipant> = people;
   console.log(winners);
    let roundBye: string;
    if (winners.length % 2 != 0) {
      let set: boolean = false;
      while(set == false) {
        let rand: number = Math.floor(Math.random() * winners.length);
        if (winners[rand].bye == false){
          set = true;
          roundBye = winners[rand].name;
        }
      }
    }

    for (let i = 0; i < winners.length-1; i+=2){
      console.log(i);
      if (winners[i].name != roundBye){
        if (winners[i].localWins > winners[i+1].localWins){
          winners.splice(i+1, 1);
        }
        else if (winners[i].localWins < winners[i+1].localWins){
          winners.splice(i, 1);
        }
      }
    }
    return winners;
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

  pairings(people: Array<EventParticipant>, roundId: number):Match[] {
    let bye: EventParticipant = new EventParticipant();
    bye.name = "Bye";
    for (let i = people.length - 1; i >= 0; i-=2) {
      if (i == 0 && people.length % 2 != 0){
        this.player1.push(people[i]);
        this.player2.push(bye);
      }
      else{
        this.player1.push(people[i]);
        this.player2.push(people[i-1]);
      }
    }
    let newMatches = new Array<Match>();
    for(let i=0;i<this.player1.length;i++){
      let match = new Match();
      match.p1 = this.player1[i];
      match.p2 = this.player2[i];
      match.p1Score = 0;
      match.p2Score = 0;
      match.roundId = roundId;
      match.lock = false;
      match.p1Drop = false;
      match.p2Drop = false;
      newMatches.push(match);
    }
    return newMatches;
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
    let rand = new Array<number>(people.length);
    let randomized = new Array<Match>();
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

  compareResults(matches: Match[]): Array<EventParticipant>{
    let array = new Array<EventParticipant>();
    for(let i in matches){
      if(matches[i].p1Score>matches[i].p2Score){
        matches[i].p1.localWins++;
        array.push(matches[i].p1);
        array.push(matches[i].p2);
      } else if(matches[i].p1Score<matches[i].p2Score){
        matches[i].p2.localWins++;
        array.push(matches[i].p1);
        array.push(matches[i].p2);
      }
    }
    return array;
  }



  generateRound(availableParticipants: Array<EventParticipant>, oldRound: Round):Round {
    let newRound = new Round();
    newRound.roundId = Math.round(Math.random()*10);
    newRound.roundNum = oldRound.roundNum+1;
    newRound.participants = availableParticipants;
    newRound.eventId = oldRound.eventId;
    newRound.matches = this.pairings(newRound.participants, newRound.roundId);
    return newRound;
  }
}
