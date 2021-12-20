import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('1 => 2', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(
          ':enter, :leave',
          style({ position: 'absolute', top: 0, left: 0, right: 0 })
        ),
        group([
          query(':leave', [
            animate(
              '0.5s cubic-bezier(0.35, 0, 0.25, 1)',
              style({ transform: 'translateX(-100%)' })
            ),
          ]),
          query(':enter', [
            animate(
              '0.5s cubic-bezier(0.35, 0, 0.25, 1)',
              style({ transform: 'translateX(0)' })
            ),
          ]),
        ]),
      ]),
      transition('2 => 1', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        query(
          ':enter, :leave',
          style({ position: 'absolute', top: 0, left: 0, right: 0 })
        ),
        group([
          query(':leave', [
            animate(
              '0.5s cubic-bezier(0.35, 0, 0.25, 1)',
              style({ transform: 'translateX(100%)' })
            ),
          ]),
          query(':enter', [
            animate(
              '0.5s cubic-bezier(0.35, 0, 0.25, 1)',
              style({ transform: 'translateX(0)' })
            ),
          ]),
        ]),
      ]),
      transition('2 => 3', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(
          ':enter, :leave',
          style({ position: 'absolute', top: 0, left: 0, right: 0 })
        ),
        group([
          query(':leave', [
            animate(
              '0.5s cubic-bezier(0.35, 0, 0.25, 1)',
              style({ transform: 'translateX(-100%)' })
            ),
          ]),
          query(':enter', [
            animate(
              '0.5s cubic-bezier(0.35, 0, 0.25, 1)',
              style({ transform: 'translateX(0)' })
            ),
          ]),
        ]),
      ]),
      transition('3 => 2', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        query(
          ':enter, :leave',
          style({ position: 'absolute', top: 0, left: 0, right: 0 })
        ),
        group([
          query(':leave', [
            animate(
              '0.5s cubic-bezier(0.35, 0, 0.25, 1)',
              style({ transform: 'translateX(100%)' })
            ),
          ]),
          query(':enter', [
            animate(
              '0.5s cubic-bezier(0.35, 0, 0.25, 1)',
              style({ transform: 'translateX(0)' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'PSS';

  getDepth(outlet: any) {
    return outlet.activatedRouteData['depth'];
  }
}
