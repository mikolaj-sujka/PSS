import { Injectable } from '@angular/core';
import {Team} from "../models/team.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

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
}
