import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  user: User = {
    id_user: 0,
    name: "",
    email: "",
    password: "",
    city: "",
    discipline: "",
    team: "",
    age: 0,
    weight: 0,
    height: 0,
    img: ""
  };

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

}