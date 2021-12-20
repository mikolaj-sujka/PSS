import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components 
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomePageComponent,  data: { title: 'homepage', depth: 1 }},
  { path: 'login', component: LoginComponent, data: { title: 'loginPage', depth: 2, bodyClass: 'login'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
