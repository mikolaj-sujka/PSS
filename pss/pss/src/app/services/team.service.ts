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

  getSpecialCaptainTeam(): Team {
    let team = JSON.parse(localStorage.getItem('SpecialTeam'));
    return team;
  }

  getSpecialPlayerTeam(): Team {
    return {
      _id: 6969,
      name: "FC team CF",
      city: "Lublin",
      discipline: "Piłka nożna",
      captain: {_id: "a", name: "Adam Adamowicz", email: "mail@mail.com", password: "abc", team: "", age: 25, weight: 80, height: 180, img: "", role: "captain"},
      users: [
        {_id: "a", name: "Adam Adamowicz", email: "mail@mail.com", password: "abc", team: "", age: 25, weight: 80, height: 180, img: "", role: "captain"},
        {_id: "b", name: "Artur Arturowicz", email: "mail@mail.com", password: "abc", team: "", age: 26, weight: 81, height: 181, img: "", role: "player"},
        {_id: "c", name: "Aleksander Aleksandrowicz", email: "mail@mail.com", password: "abc", team: "", age: 27, weight: 82, height: 182, img: "", role: "player"},
        {_id: "d", name: "Adam Mickiewicz", email: "mail@mail.com", password: "abc", team: "", age: 28, weight: 83, height: 183, img: "", role: "player"},
        {_id: "e", name: "Bartłomiej Przykład", email: "mail@mail.com", password: "abc", team: "", age: 29, weight: 84, height: 184, img: "", role: "player"},
        {_id: "f", name: "Damian Damianowicz", email: "mail@mail.com", password: "abc", team: "", age: 25, weight: 85, height: 185, img: "", role: "player"},
        {_id: "f", name: "Jan Zawodnik", email: "mail@mail.com", password: "abc", team: "", age: 25, weight: 77, height: 188, img: "", role: "player"},
      ],
      img: ""

    }
  }

  updateSpecialTeam(form: NgForm) {
    let team = JSON.parse(localStorage.getItem('SpecialTeam'));
    team.name = form.value.name;
    team.city = form.value.city;
    team.discipline = form.value.discipline;
    localStorage.setItem("SpecialTeam", JSON.stringify(team));
  }

  addSpecialPlayer(user: User) {
    let team = JSON.parse(localStorage.getItem('SpecialTeam'));
    team.users.push(user);
    localStorage.setItem("SpecialTeam", JSON.stringify(team));
  }

  deleteSpecialPlayer(index: number){
    let team = JSON.parse(localStorage.getItem('SpecialTeam'));
    if (index !== -1) {
      team.users.splice(index, 1);
    }
    localStorage.setItem("SpecialTeam", JSON.stringify(team));
  }
}

