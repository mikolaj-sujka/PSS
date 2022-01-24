import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";


// modules
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from "./modules/angular-material.module";
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { NewsViewComponent } from './home-page/news-view/news-view.component';
import { SocialMediaComponent } from './subpage/social-media/social-media.component';
import { AboutUsComponent } from './subpage/about-us/about-us.component';
import { ContactComponent } from './subpage/contact/contact.component';
import { PostCreateComponent } from "../app/posts/post-create/post-create.component";
import { PostListComponent } from "../app/posts/post-list/post-list.component";
import { SearchUsersTeamsComponent } from './search-users-teams/search-users-teams.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { FindMatchPageComponent } from './find-match-page/find-match-page.component';

// 3rd
import { AuthInterceptor } from "./interceptors/auth-interceptor";
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MainPageComponent } from './main-page/main-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { FindMatchPageComponent } from './find-match-page/find-match-page.component';
import { TextInputComponent } from './validators/text-input/text-input.component';
import { CreateMatchComponent } from './create-match/create-match.component';
import { ToastrModule } from 'ngx-toastr';




export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
      { prefix: './l10n/navigation/', suffix: ".json"},
  ]);
}


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
    SearchUsersTeamsComponent,
    MainPageComponent,
    UserPageComponent,
    TeamPageComponent,
    CreateTeamComponent,
    FindMatchPageComponent,
    CreateMatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ToastrModule.forRoot(),
    RouterModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    TranslateModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}],
  bootstrap: [AppComponent]
})

export class AppModule { }
