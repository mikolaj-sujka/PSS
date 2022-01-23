import {Component, OnInit} from '@angular/core';
import {Team} from "../models/team.model";
import {TeamService} from "../services/team.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {UserService} from "../services/user.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {

  team: Team = {
    _id: 0,
    name: "",
    city: "",
    discipline: "",
    captain: null,
    users: [],
    img: ""
  };

  editMode = false;
  changePlayers = false;
  userId = localStorage.getItem("userId");
  specialUsers: User[];

  constructor(private teamService: TeamService, private route: ActivatedRoute, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    const id = this.getID()
    if (id == "captain") {
      this.team = this.teamService.getSpecialCaptainTeam();
    } else if (id == "player") {
      this.team = this.teamService.getSpecialPlayerTeam();
    }else {
        this.teamService.getTeamById(id).subscribe(team => this.team = team);
      }
  }

  getID() {
    return this.route.snapshot.paramMap.get('id');
  }

  buttonEditChangeVal(): void {
    this.editMode = !this.editMode;
  }

  buttonChangePlayers() {
    this.changePlayers = !this.changePlayers;
  }

  buttonLeaveTeam() {
    localStorage.setItem("role", "user")
    this.router.navigate(['/homepage'])
  }

  updateSpecialTeam(form: NgForm): void {
    this.teamService.updateSpecialTeam(form);
    this.team = this.teamService.getSpecialCaptainTeam();
    this.buttonEditChangeVal();
  }

  findUsers(editTeamForm: NgForm) {
    if(editTeamForm.value.name != "") {
      this.specialUsers = this.userService.getSpecialUsers();
    }
  }

  addPlayer(user: User) {
    console.log(user)
    const index: number = this.specialUsers.indexOf(user);
    if (index !== -1) {
      this.specialUsers.splice(index, 1);
    }
    this.teamService.addSpecialPlayer(user);

    this.team = this.teamService.getSpecialCaptainTeam();
  }

  deletePlayer(user: User) {
    const index: number = this.team.users.indexOf(user);
    this.teamService.deleteSpecialPlayer(index);
    this.team = this.teamService.getSpecialCaptainTeam();
  }
}
