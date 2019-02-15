import {Participant} from './participant';
import {EventParticipant} from './event-participant';
import {Round} from './round'
import {Organizer} from "./organizer";

export class Event {
  eventId: number;
  organizer_id: number;
  // organizer: Organizer;
  // organizerId: number;
  participants: Array<Participant>;
  activeParticipants: Array<EventParticipant>;
  type: string;
  rounds: Array<Round>;
  winner: Participant;
  inProgress: boolean;
  description: string;
  playerCount: number;

}
