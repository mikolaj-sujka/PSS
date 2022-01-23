import {Time} from "@angular/common";
import { Team } from "./team.model";

export interface Match {
  date: string;
  time: string;
  address: string;
  teamC: string;  //zmienic na Team
  team2: string;  //zmienic na Team
}
