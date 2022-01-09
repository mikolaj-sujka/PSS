import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";


// modules
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from "./modules/angular-material.module";
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
import { ErrorComponent } from "./error/error.component";

// 3rd
import { AuthInterceptor } from "./interceptors/auth-interceptor";
import { ErrorInterceptor } from "./interceptors/error-interceptor";
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';


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
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
    NgxSpinnerModule,
    TranslateModule,
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
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})

export class AppModule { }
