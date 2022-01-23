import { Component, OnInit } from '@angular/core';
import { Match} from "../models/match.model";
import { Time} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-find-match-page',
  templateUrl: './find-match-page.component.html',
  styleUrls: ['./find-match-page.component.scss']
})
export class FindMatchPageComponent implements OnInit {

  public match: Match[] = [
    {date: "17.01.2022", time: "17:23", address: "Kraków, ul. piaskowa 3", teamC: "Team1", team2: "Team2"},
    {date: "17.01.2022", time: "17:23", address: "Kraków, ul. piaskowa 3", teamC: "Team2", team2: "Team2"},
    {date: "17.01.2022", time: "17:23", address: "Kraków, ul. piaskowa 3", teamC: "Team3", team2: "Team2"},
  ]

  displayedColumns: string[] = ['Team', 'Date', 'Time', 'Place', 'Play'];
  dataSource = this.match;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  buttonPlay() {
    this.router.navigate(['/team-page/captain'])
  }

}


