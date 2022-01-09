import { Component, OnInit } from '@angular/core';
import {User} from "../models/user-model";
import {UserService} from "../services/user.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  getUsers(): void{
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  searchUser(form: NgForm){
    let city = form.value.city
    let name = form.value.name
    let discipline = form.value.discipline



    if(city == "")
      city = "any"
    if(name == "")
      name = "any"
    if(discipline == "")
      discipline = "any"

    console.log(city, name, discipline)

    this.userService.findUsers(name, city, discipline).subscribe(users => this.users = users);
  }
}
