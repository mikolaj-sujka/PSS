import { Component, OnInit } from '@angular/core';
import {Team} from "../models/team.model";
import {TeamService} from "../services/team.service";
import {ActivatedRoute} from "@angular/router";

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
    discipline: "",
    capitan: "",
    users: []
  };

  constructor(private teamService: TeamService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.teamService.getTeamById(id).subscribe(team => this.team = team);
  }

}
