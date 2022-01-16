import { Injectable } from '@angular/core';
import {Team} from "../models/team.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  findTeam(name: string, city: string, discipline: string): Observable<Team[]>{
    return this.http.get<Team[]>("/api/team/find/" + name + "-" + city + "-" + discipline);
  }

  getTeamById(id: string): Observable<Team>{
    return this.http.get<Team>("/api/team/" + id);
  }
}
