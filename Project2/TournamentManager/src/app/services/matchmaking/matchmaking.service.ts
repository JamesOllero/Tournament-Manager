import { Injectable } from '@angular/core';
import { Participant } from '../../model/participant';

@Injectable({
  providedIn: 'root'
})
export class MatchmakingService {

  player1: Array<Participant>;
  player2: Array<Participant>;
  constructor() { }

  singleElim(){
    let winners: Array<string> = new Array<string>();

    winners.push("Joe");
    winners.push("Chris");
    winners.push("Star");
    winners.push("James");

    while (winners.length > 1) {
      for (let i = 0; i < winners.length; i++){
        console.log(winners[i], " plays against ", winners[i + 1]);
        if (winners.length % 2 != 0 && i + 1 == winners.length - 1) {}
        else {
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
      }
    }
  }

  randomWeight(rando: Array<Participant>){
    let rand: number[];
    for (let i = 0; i < rando.length; i++){
      rand[i] = MatchmakingService.random();
    }
  } 

  static random(){
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
