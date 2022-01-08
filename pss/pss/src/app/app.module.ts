import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { NewsViewComponent } from './home-page/news-view/news-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialMediaComponent } from './subpage/social-media/social-media.component';
import { AboutUsComponent } from './subpage/about-us/about-us.component';
import { ContactComponent } from './subpage/contact/contact.component';



//lukasz
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./auth-interceptor";
import { ErrorInterceptor } from "./error-interceptor";
import { ErrorComponent } from "./error/error.component";
import { AngularMaterialModule } from "./angular-material.module";
//import { PostsModule } from "./posts/posts.module";


import { PostCreateComponent } from "../app/posts/post-create/post-create.component";
import { PostListComponent } from "../app/posts/post-list/post-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    FooterComponent,
    NewsViewComponent,
    SocialMediaComponent,
    AboutUsComponent,
    ContactComponent,
    PostCreateComponent,
    PostListComponent,
    //lukasz
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //lukasz
    HttpClientModule,
    AngularMaterialModule,
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
  ],

  providers: [
    //lukasz
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent],
  //lukasz
  entryComponents: [ErrorComponent]
})
export class AppModule { }
