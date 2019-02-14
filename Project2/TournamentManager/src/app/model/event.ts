import {Participant} from './participant';
import {EventParticipant} from './event-participant';
import {Round} from './round'

export class Event {
  eventId: number;
  organizerId: number;
  participants: Array<Participant>;
  activeParticipants: Array<EventParticipant>;
  type: string;
  rounds: Array<Round>;
  winner: Participant;
  inProgress: boolean;
}
