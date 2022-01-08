import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

// Components
import { HomePageComponent } from './home-page/home-page.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { AboutUsComponent } from './subpage/about-us/about-us.component';
import { ContactComponent } from './subpage/contact/contact.component';
import { SocialMediaComponent } from './subpage/social-media/social-media.component';
import {SearchUserComponent} from "./search-user/search-user.component";

const routes: Routes = [
  { path: '', component: HomePageComponent,  data: { title: 'homepage', depth: 1 }},
  { path: 'socialmedia', component: SocialMediaComponent, data: { title: 'socialmediaPage', depth: 2, bodyClass: 'socialmedia'}},
  { path: 'about', component: AboutUsComponent, data: { title: 'aboutUsPage', depth: 2, bodyClass: 'aboutus'}},
  { path: 'contact', component: ContactComponent, data: { title: 'contactPage', depth: 2, bodyClass: 'contact'}},
  { path: "edit/:postId", component: PostCreateComponent, data: { title: 'contactPage', depth: 2, bodyClass: 'contact'},canActivate: [AuthGuard] },
  { path: "create", component: PostCreateComponent,data: { title: 'createPage', depth: 2, bodyClass: 'create'}, canActivate: [AuthGuard] },
  { path: "list", component: PostListComponent,data: { title: 'listPage', depth: 2, bodyClass: 'list'}, canActivate: [AuthGuard] },
  { path: "auth", loadChildren: ()=> import("./auth.module").then(m => m.AuthModule) },
  { path: "search-user", component: SearchUserComponent, data: {title: 'serachUser', depth: 2, bodyClass: 'seartchUser'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
