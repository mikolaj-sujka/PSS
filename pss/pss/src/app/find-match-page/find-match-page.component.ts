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
    {date: "28.01.2022", time: "17:00", address: "Kraków, ul. Piaskowa 3", teamC: "ABC Piłka", team2: ""},
    {date: "22.02.2022", time: "11:00", address: "Kraków, ul. Głowackiego 17", teamC: "ZTEAM", team2: ""},
    {date: "27.02.2022", time: "19:30", address: "Kraków, ul. Parkowa 8", teamC: "FC 2137", team2: ""},
  ]

  displayedColumns: string[] = ['Team', 'Date', 'Time', 'Place', 'Play'];
  dataSource = this.match;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  buttonPlay(element) {
    localStorage.setItem("Match", JSON.stringify(element));
    //usunąć element

    this.router.navigate(['/team-page/captain']);
  }

}


