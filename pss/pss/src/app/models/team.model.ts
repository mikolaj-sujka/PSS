import {User} from "./user.model";

export interface Team {
  _id: number;
  name: string;
  city: string;
  discipline: string;
  captain: User;
  users: User[];
  img: string;
}
