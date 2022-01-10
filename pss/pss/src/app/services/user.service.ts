import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {NgForm} from "@angular/forms";

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

  updateUserData(id: number, form: NgForm): void{

    this.http.patch("/api/v1/user/" + id,
      {
        "name": form.value.name,
        "city": form.value.city,
        "discipline": form.value.discipline,
        "age": form.value.age,
        "weight": form.value.weight,
        "height": form.value.height
      }).subscribe(
      (val) => {
        console.log("PATCH call successful value returned in body",
          val);
      },
      response => {
        console.log("PATCH call in error", response);
      },
      () => {
        console.log("The PATCH observable is now completed.");
      });

  }
}
