import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  requestCount = 0;
  constructor(private spinnerService: NgxSpinnerService) {}

  loading() {
    this.requestCount++;
    this.spinnerService.show(undefined, {
      type: 'timer',
      bdColor: 'rgba(255,255,255,0.8)',
      color: '#1E90FF',
      size: 'large',
    });
  }

  idle() {
    this.requestCount--;
    if (this.requestCount <= 0) {
      this.requestCount = 0;
      this.spinnerService.hide();
    }
  }
}
