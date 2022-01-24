import { Component, OnInit } from '@angular/core';
import { Match} from "../models/match.model";
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-find-match-page',
  templateUrl: './find-match-page.component.html',
  styleUrls: ['./find-match-page.component.scss']
})
export class FindMatchPageComponent implements OnInit {

  public match: Match[] = [
    {date: "28.01.2022", time: "17:00", address: "Kraków, ul. Piaskowa 3", teamC: "ABC Piłka", team2: ""},
    {date: "22.02.2022", time: "11:00", address: "Kraków, ul. Głowackiego 17", teamC: "CBA Piłka", team2: ""},
    {date: "28.02.2022", time: "19:00", address: "Kraków, ul. Nowa 6", teamC: "X Team", team2: ""},
    {date: "01.03.2022", time: "20:00", address: "Kraków, ul. Orzechowa 6", teamC: "ABC Piłka", team2: ""},
  ]

  displayedColumns: string[] = ['Team', 'Date', 'Time', 'Place', 'Play'];
  dataSource = this.match;


  constructor(private router: Router, private toastrService: ToastrService) {}

  ngOnInit(): void {
  }

  buttonPlay(element) {
    localStorage.setItem("Match", JSON.stringify(element));
    this.router.navigate(['/team-page/captain']);

    this.toastrService.success("Pomyślnie umówiono spotkanie!", "Dodano spotkanie", {
      positionClass: 'toast-bottom-right'
    });
  }

  buttonCancel() {
    this.router.navigate(['/team-page/captain']);
  }

}


