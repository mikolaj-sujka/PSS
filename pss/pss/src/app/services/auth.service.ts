import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

// rxjs
import { Subject } from "rxjs";

// environment
import { environment } from "../../environments/environment";

// models
import { AuthData } from "../models/auth-data.model";

//3rd
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

const BACKEND_URL = environment.apiUrl + "/user/";

@Injectable({ providedIn: "root" })
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private userId: string;
  private role: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router, private spinnerService: NgxSpinnerService,
                private toastrService: ToastrService) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId() {
    return this.userId;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(email: string, password: string, name: string, surname: string) {
    const authData: AuthData = { email: email, password: password, name: name + " " + surname};
    this.http.post(BACKEND_URL + "register", authData).subscribe(
      () => {
        this.toastrService.success("Successfully registered!", "Register success", {
          positionClass: 'toast-bottom-right'
        })
        this.router.navigate(["homepage"]);
      },
      error => {
        this.authStatusListener.next(false);
        this.toastrService.error("Email was taken or some of inputs does not match!", "Register error", {
          positionClass: 'toast-bottom-right'
        })
      }
    );
  }

  login(email: string, password: string) {
    const authData: AuthData = { email: email, password: password, name: "" };
    this.http
      .post<{
        token: string; expiresIn: number; userId: string; role: string}>(
        BACKEND_URL + "login",
        authData
      )
      .subscribe(
        response => {
          const token = response.token;
          this.token = token;
          if (token) {
            const expiresInDuration = response.expiresIn;
            this.setAuthTimer(expiresInDuration);
            this.isAuthenticated = true;
            this.userId = response.userId;
            this.role = response.role;
            this.authStatusListener.next(true);
            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + expiresInDuration * 1000
            );
            console.log(expirationDate);
            this.saveAuthData(token, expirationDate, this.userId, this.role);
            this.toastrService.success("Successfully logged in!", "Login success", {
              positionClass: 'toast-bottom-right'
            })
            this.router.navigate(["homepage"]);
          }
        },
        error => {
          this.authStatusListener.next(false);
          this.toastrService.error("Email or password does not match!", "Login error", {
            positionClass: 'toast-bottom-right'
          })
        }
      );
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.userId = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();

    this.spinnerService.show(undefined, {
      type: 'timer',
      bdColor: 'rgba(255,255,255,0.8)',
      color: '#1E90FF',
      size: 'large',
    });
    this.toastrService.success("Successfully logged out!", "Logged out success", {
      positionClass: 'toast-bottom-right'
    })
    setTimeout(() => {
      this.spinnerService.hide();
      this.router.navigate(["/"]);
    }, 2000);
  }

  private setAuthTimer(duration: number) {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string, role: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("userId", userId);
    localStorage.setItem("role", role);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");
    localStorage.removeItem("Match")
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userId = localStorage.getItem("userId");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId
    };
  }
}
