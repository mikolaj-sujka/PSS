import { Component, OnInit } from '@angular/core';
import {TeamService} from "../services/team.service";
import {NgForm} from "@angular/forms";
import {UserService} from "../services/user.service";
import {User} from "../models/user.model";
import {Router} from "@angular/router"

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {

  constructor(private teamService: TeamService, private userService: UserService, private router: Router) { }

  private captain: User;

  ngOnInit(): void {
    //uzyskanie kapitania, przed wysłaniem formularza
    this.userService.getUserById(localStorage.getItem("userId")).subscribe(
      user => this.captain = user
    )
  }

  createTeam(form: NgForm){
    this.teamService.createSpecialTeam(form, this.captain);
    //DODAC komunikat o stworzeniu drużyny
    this.router.navigate(['/homepage'])
  }

}
