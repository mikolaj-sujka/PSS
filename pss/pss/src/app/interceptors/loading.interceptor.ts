import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";

// rxjs 
import { Observable } from "rxjs";
import { delay, finalize } from "rxjs/operators";

// services
import { LoaderService } from "../services/loader.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.loading();
    return next.handle(request).pipe(
      delay(1000),
      finalize(() => {
        this.loaderService.idle();
      })
    )
  }
}