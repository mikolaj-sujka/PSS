import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl + '/user/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  findUsers(name: string): Observable<User[]> {
    return this.http.get<User[]>(apiUrl + 'find/' + name);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(apiUrl + id);
  }

  updateUserData(id: string, form: NgForm, email: string): Observable<Object> {
    return this.http.post(apiUrl + id, {
      email: email,
      name: form.value.name,
      age: form.value.age,
      weight: form.value.weight,
      height: form.value.height,
    });
  }

  getSpecialUsers(): User[] {
    let specialUsers = [
      {_id: "61eeb437b7f1fdb262efad3d", name: "Adam Adamowicz", email: "mail1@mail.com", password: "abc", city: "Kraków", discipline: "", team: "", age: 25, weight: 80, height: 180, img: "", role: "user"},
      {_id: "61eeb437b7f1fdb262efad3d", name: "Artur Arturowicz", email: "mail2@mail.com", password: "abc", city: "Kraków", discipline: "", team: "", age: 26, weight: 81, height: 181, img: "", role: "user"},
      {_id: "61eeb437b7f1fdb262efad3d", name: "Aleksander Aleksandrowicz", email: "mail3@mail.com", password: "abc", city: "Kraków", discipline: "", team: "", age: 27, weight: 82, height: 182, img: "", role: "user"},
      {_id: "61eeb437b7f1fdb262efad3d", name: "Adam Mickiewicz", email: "mail4@mail.com", password: "abc", city: "Kraków", discipline: "", team: "", age: 28, weight: 83, height: 183, img: "", role: "user"},
      {_id: "61eeb437b7f1fdb262efad3d", name: "Bartłomiej Przykład", email: "mail5@mail.com", password: "abc", city: "Kraków", discipline: "", team: "", age: 29, weight: 84, height: 184, img: "", role: "user"},
      {_id: "61eeb437b7f1fdb262efad3d", name: "Damian Damianowicz", email: "mail6@mail.com", password: "abc", city: "Kraków", discipline: "", team: "", age: 25, weight: 85, height: 185, img: "", role: "user"},

    ]
    return specialUsers;
  }
}
