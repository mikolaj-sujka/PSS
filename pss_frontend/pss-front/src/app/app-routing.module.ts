import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components 
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './subpage/about-us/about-us.component';
import { ContactComponent } from './subpage/contact/contact.component';
import { SocialMediaComponent } from './subpage/social-media/social-media.component';

const routes: Routes = [
  { path: '', component: HomePageComponent,  data: { title: 'homepage', depth: 1 }},
  { path: 'login', component: LoginComponent, data: { title: 'loginPage', depth: 2, bodyClass: 'login'}},
  { path: 'socialmedia', component: SocialMediaComponent, data: { title: 'socialmediaPage', depth: 2, bodyClass: 'socialmedia'}},
  { path: 'about', component: AboutUsComponent, data: { title: 'aboutUsPage', depth: 2, bodyClass: 'aboutus'}},
  { path: 'contact', component: ContactComponent, data: { title: 'contactPage', depth: 2, bodyClass: 'contact'}},
  { path: 'register', component: RegisterComponent, data: { title: 'registerPage', depth: 2, bodyClass: 'register'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
