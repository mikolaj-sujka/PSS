import { Component, OnInit, OnDestroy } from "@angular/core";
import { Form, FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

import { AuthService } from "../services/auth.service";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isLoading = false;
  private authStatusSub: Subscription;

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
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required, 
        Validators.minLength(4), 
        Validators.maxLength(20)
      ]]
    })
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
