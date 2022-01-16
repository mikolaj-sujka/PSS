import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../services/user.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  user: User = {
    _id: "",
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

  editMode = false;
  userId = localStorage.getItem("userId")

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.getUser(routeParams.id);
    });
    console.log(this.userId)
  }

  getUser(id: string): void {
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

  buttonEditChangeVal(): void {
    this.editMode = !this.editMode
  }

  updateUserData(form: NgForm): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.updateUserData(id, form);
    this.buttonEditChangeVal();
    this.getUser(this.userId);
  }

}
