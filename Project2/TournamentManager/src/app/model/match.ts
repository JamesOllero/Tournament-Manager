import {Participant} from './participant';

export class Match {
  p1: Participant;
  p2: Participant;
  p1Score: number;
  p2Score: number;
  p1Drop: boolean;
  p2Drop: boolean;
  roundId: number;
  lock: boolean;
}
