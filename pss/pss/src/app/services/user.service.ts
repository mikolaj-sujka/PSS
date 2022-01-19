import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {NgForm} from "@angular/forms";
import {environment} from "../../environments/environment";

const apiUrl = environment.apiUrl + "/user/"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  findUsers(name: string, city: string, discipline: string): Observable<User[]> {
    return this.http.get<User[]>(apiUrl + "find/" + name + "-" + city + "-" + discipline);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(apiUrl + id);
  }

  updateUserData(id: string, form: NgForm, email: string): Observable<Object> {
    return this.http.post(apiUrl + id,
      {
        "email": email,
        "name": form.value.name,
        "city": form.value.city,
        "discipline": form.value.discipline,
        "age": form.value.age,
        "weight": form.value.weight,
        "height": form.value.height
      })

  }

  getSpecialUsers(): User[] {
    let specialUsers = [
      {_id: "a", name: "Adam Adamowicz", email: "mail@mail.com", password: "abc", city: "Kraków", discipline: "", team: "", age: 25, weight: 80, height: 180, img: "", role: "user"},
      {_id: "b", name: "Artur Arturowicz", email: "mail@mail.com", password: "abc", city: "Kraków", discipline: "", team: "", age: 26, weight: 81, height: 181, img: "", role: "user"},
      {_id: "c", name: "Aleksander Aleksandrowicz", email: "mail@mail.com", password: "abc", city: "Kraków", discipline: "", team: "", age: 27, weight: 82, height: 182, img: "", role: "user"},
      {_id: "d", name: "Adam Mickiewicz", email: "mail@mail.com", password: "abc", city: "Kraków", discipline: "", team: "", age: 28, weight: 83, height: 183, img: "", role: "user"},
      {_id: "e", name: "Bartłomiej Przykład", email: "mail@mail.com", password: "abc", city: "Kraków", discipline: "", team: "", age: 29, weight: 84, height: 184, img: "", role: "user"},
      {_id: "f", name: "Damian Damianowicz", email: "mail@mail.com", password: "abc", city: "Kraków", discipline: "", team: "", age: 25, weight: 85, height: 185, img: "", role: "user"},

    ]
    return specialUsers;
  }
}
