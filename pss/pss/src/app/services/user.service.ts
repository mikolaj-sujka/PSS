import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>("/api/v1/users");
  }

  findUsers(name: string, city: string, discipline: string): Observable<User[]>{
    return this.http.get<User[]>("/api/v1/user/" + name + "&" + city + "&" + discipline);
  }

}
