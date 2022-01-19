import {User} from "./user.model";

export interface Team {
  _id: number;
  name: string;
  city: string;
  discipline: string;
  capitan: User;
  users: User[];
  img: string;
}
