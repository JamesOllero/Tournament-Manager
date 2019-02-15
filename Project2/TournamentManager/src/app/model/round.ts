import {Match} from "./match";
import {Participant} from "./participant";
import {EventParticipant} from "./event-participant";

export class Round {
  roundId: number;
  matches: Array<Match>;
  participants: Array<EventParticipant>;
  roundNum: number;
  eventId: number;
  current: boolean
}
