import { Injectable } from '@angular/core';
import {Team} from "../models/team.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../models/user.model";
import {NgForm} from "@angular/forms";

const apiUrl = environment.apiUrl + "/team/"

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  findTeam(name: string, city: string, discipline: string): Observable<Team[]>{
    return this.http.get<Team[]>(apiUrl + "find/" + name + "-" + city + "-" + discipline);
  }

  getTeamById(id: string): Observable<Team>{
    return this.http.get<Team>(apiUrl + id);
  }

  createSpecialTeam(form: NgForm, captain: User) {
    let team = {
      _id: "a1",
      name: form.value.name,
      city: form.value.city,
      discipline: form.value.discipline,
      captain: captain,
      users: [],
      img: ""
    }
    localStorage.setItem("SpecialTeam", JSON.stringify(team));
    console.log(JSON.stringify(team));
    localStorage.setItem("role", "captain");
  }

  getSpecialTeam(): Team {
    let team = JSON.parse(localStorage.getItem('SpecialTeam'));
    return team;
  }

  updateSpecialTeam(form: NgForm) {
    let team = JSON.parse(localStorage.getItem('SpecialTeam'));
    team.name = form.value.name;
    team.city = form.value.city;
    team.discipline = form.value.discipline;
    localStorage.setItem("SpecialTeam", JSON.stringify(team));
  }
}

