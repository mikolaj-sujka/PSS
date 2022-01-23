import {Time} from "@angular/common";
import { Team } from "./team.model";

export interface Match {
  date: Date;
  time: Time;
  address: string;
  teamC: Team;
  team2: Team;
}
