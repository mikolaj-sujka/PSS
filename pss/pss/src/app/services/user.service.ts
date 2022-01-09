import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findUsers(name: string, city: string, discipline: string): Observable<User[]>{
    return this.http.get<User[]>("/api/v1/user/search/" + name + "&" + city + "&" + discipline);
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>("/api/v1/user/" + id);
  }

}
