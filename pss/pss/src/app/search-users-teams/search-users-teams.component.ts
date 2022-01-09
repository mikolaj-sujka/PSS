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
    let city = form.value.city
    let name = form.value.name
    let discipline = form.value.discipline

    if(city == "")
      city = "any"
    if(name == "")
      name = "any"
    if(discipline == "")
      discipline = "any"

    if(this.radioButtonValue == "user") {
      this.userService.findUsers(name, city, discipline).subscribe(users => this.users = users);
      this.teams = []
      this.searchPositions = this.users.length //nie zawsze odświeża
    }
    else{
      this.teamService.findTeam(name, city, discipline).subscribe(teams => this.teams = teams);
      this.users = []
      this.searchPositions = this.teams.length
    }
  }

  changeNames(value: string) {
    if(value == "user"){
      this.tableNames = {
        col1: "avatar",
        col2: "Imie/Nazwisko",
        col3: "Miasto",
        col4: "Drużyna",
      };
    }
    else{
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