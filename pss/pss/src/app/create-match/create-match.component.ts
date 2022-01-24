import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent implements OnInit {

  constructor(private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  buttonCreateMatch(form: NgForm) {
    if (form.valid){
      this.toastrService.success("Zgłoszono spotkanie do akceptacji przez ambasadora!", "Wysłano spotkanie do amabasadora", {
        positionClass: 'toast-bottom-right'
      });
      form.resetForm()
    }
  }

}
