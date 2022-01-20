import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  user: User = {
    _id: '',
    name: '',
    email: '',
    password: '',

    team: '',
    age: 0,
    weight: 0,
    height: 0,
    img: '',
    role: '',
  };

  editMode = false;
  userId = localStorage.getItem('userId');

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.getUser(routeParams.id);
    });
  }

  getUser(id: string): void {
    this.userService.getUserById(id).subscribe((user) => (this.user = user));
  }

  buttonEditChangeVal(): void {
    this.editMode = !this.editMode;
  }

  updateUserData(form: NgForm): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.updateUserData(id, form, this.user.email).subscribe(
      (val) => {
        console.log('POST call successful value returned in body');
      },
      (response) => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
        this.getUser(this.userId);
      }
    );
    this.buttonEditChangeVal();
  }
}
