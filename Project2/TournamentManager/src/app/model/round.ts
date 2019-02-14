import {Match} from "./match";
import {Participant} from "./participant";

export class Round {
  evtId: number;
  roundId: number;
  evtRoundNumber: number;
  matches: Array<Match>;
  isCurrent: boolean;
  players: Array<Participant>;
}
