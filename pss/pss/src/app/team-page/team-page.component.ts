import { Component, OnInit } from '@angular/core';
import {Team} from "../models/team.model";

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {

  team: Team = {
    id: 0,
    name: "",
    city: "",
    discipline: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
