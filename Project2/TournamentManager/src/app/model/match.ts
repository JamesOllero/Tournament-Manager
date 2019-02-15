import {Participant} from './participant';
import {EventParticipant} from "./event-participant";

export class Match {
  p1: EventParticipant;
  p2: EventParticipant;
  p1Score: number;
  p2Score: number;
  p1Drop: boolean;
  p2Drop: boolean;
  roundId: number;
  lock: boolean;
}
