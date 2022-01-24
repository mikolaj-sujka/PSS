import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { AngularMaterialModule } from "./angular-material.module";
import { AuthRoutingModule } from "../auth-routing.module";
import { TextInputComponent } from "../validators/text-input/text-input.component";

@NgModule({
  declarations: [LoginComponent, RegisterComponent, TextInputComponent],
  imports: [CommonModule, AngularMaterialModule, FormsModule, AuthRoutingModule, ReactiveFormsModule]
})
export class AuthModule {}
