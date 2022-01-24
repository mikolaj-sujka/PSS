import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonCreateMatch(form: NgForm) {
    if (form.valid){
      form.resetForm()
      //DODAC KOMUNIKAT
    }
  }

}
