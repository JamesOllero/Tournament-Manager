import {Match} from "./match";
import {Participant} from "./participant";

export class Round {
  roundId: number;
  matches: Array<Match>;
  participants: Array<Participant>;
  roundNum: number;
  eventId: number;
  current: boolean
}
