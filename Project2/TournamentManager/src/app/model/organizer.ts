import {Event} from './event';

export class Organizer {
  managerId: number;
  username: string;
  password: string;
  events: Array<Event>;
  email: string;
  location: string;
}
