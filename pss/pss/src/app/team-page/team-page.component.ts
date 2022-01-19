import { Component, OnInit } from '@angular/core';
import {Team} from "../models/team.model";
import {TeamService} from "../services/team.service";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {

  team: Team = {
    _id: 0,
    name: "",
    city: "",
    discipline: "",
    captain: null,
    users: [],
    img: ""
  };

  editMode = false;
  userId = localStorage.getItem("userId");

  constructor(private teamService: TeamService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id == "captain"){
      this.team = this.teamService.getSpecialTeam();
    }
    else {
      this.teamService.getTeamById(id).subscribe(team => this.team = team);
    }
  }

  buttonEditChangeVal(): void {
    this.editMode = !this.editMode
  }

  updateSpecialTeam(form: NgForm): void{
    console.log("Im here")
    this.teamService.updateSpecialTeam(form);
    this.team = this.teamService.getSpecialTeam();
    this.buttonEditChangeVal();
  }

}
