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
}
