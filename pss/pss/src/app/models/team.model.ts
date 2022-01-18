import {User} from "./user.model";

export interface Team {
  id: number;
  name: string;
  city: string;
  discipline: string;
  capitan: string;
  users: User[];
}
