import { Injectable } from '@angular/core';
import { Participant } from '../../model/participant';

@Injectable({
  providedIn: 'root'
})
export class MatchmakingService {

  player1: Participant[];
  player2: Participant[];
  constructor() { }

  randomWeight(rando: Participant[]){
    let rand: number[];
    for (let i = 0; i < rando.length; i++){
      rand[i] = MatchmakingService.random();
    }
  }

  static random(){
    return Math.pow((Math.random() * 100), (Math.random() * 100));
  }

  pairings(people: Participant[]){
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

  Pseudorandom(people: Participant[]) {
    let sorted: Participant[];
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
