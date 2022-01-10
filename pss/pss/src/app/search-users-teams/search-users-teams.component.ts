import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";
import {NgForm} from "@angular/forms";
import {Team} from "../models/team.model";
import {TeamService} from "../services/team.service";

@Component({
  selector: 'app-search-user',
  templateUrl: './search-users-teams.component.html',
  styleUrls: ['./search-users-teams.component.scss']
})
export class SearchUsersTeamsComponent implements OnInit {

  users: User[] = [];
  teams: Team[] = [];
  radioButtonValue = "user";
  searchPositions = 0;
  tableNames = {
    col1: "avatar",
    col2: "Imie/Nazwisko",
    col3: "Miasto",
    col4: "Drużyna",
  };

  constructor(private userService: UserService, private teamService: TeamService) { }

  ngOnInit(): void {
  }

  searchUser(form: NgForm){
    let name = form.value.name
    let city = form.value.city
    let discipline = form.value.discipline

    if(name == "")
      name = "any"
    if(city == "")
      city = "any"

    if(this.radioButtonValue == "user") {
      this.userService.findUsers(name, city, discipline).subscribe(users => {
        this.users = users
        this.searchPositions = this.users.length
      });
      this.teams = []
    }
    else{
      this.teamService.findTeam(name, city, discipline).subscribe(teams => {
        this.teams = teams
        this.searchPositions = this.teams.length
      });
      this.users = []
    }
  }

  changeNames(value: string) {
    if(value == "user"){
      this.radioButtonValue = "user";
      this.tableNames = {
        col1: "avatar",
        col2: "Imie/Nazwisko",
        col3: "Miasto",
        col4: "Drużyna",
      };
    }
    else{
      this.radioButtonValue = "team";
      this.tableNames = {
        col1: "avatar",
        col2: "Nazwa drużyny",
        col3: "Miasto",
        col4: "Dyscyplina",
      };
    }
    this.teams = [];
    this.users = [];
    this.searchPositions = 0;
  }
}
