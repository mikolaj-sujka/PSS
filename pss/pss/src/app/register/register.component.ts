import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  isLoading = false;
  private authStatusSub! : Subscription;

  constructor(public authService: AuthService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]],
      name: ['', [
        Validators.required
      ]],
      surname: ['', [
        Validators.required
      ]]
    })
  }

  onRegister() {
    if (this.registerForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.createUser(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.name, this.registerForm.value.surname);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
