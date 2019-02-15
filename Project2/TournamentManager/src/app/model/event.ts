import {Participant} from './participant';
import {EventParticipant} from './event-participant';
import {Round} from './round'
import {Organizer} from "./organizer";

export class Event {
  eventId: number;
  organizers: Organizer;
  // organizerId: number;
  participants: Array<Participant>;
  activeParticipants: Array<EventParticipant>;
  eventType: string;
  rounds: Array<Round>;
  winner: EventParticipant;
  in_progress: boolean;
  description: string;
  playerNum: number;

}
