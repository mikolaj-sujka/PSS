import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  { path: 'register', component: RegisterComponent, data: { title: 'registerPage', depth: 2, bodyClass: 'register'}},
  { path: 'login', component: LoginComponent, data: { title: 'loginPage', depth: 2, bodyClass: 'login'}},
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
