import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMatchPageComponent } from './find-match-page.component';

describe('FindMatchPageComponent', () => {
  let component: FindMatchPageComponent;
  let fixture: ComponentFixture<FindMatchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindMatchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMatchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
