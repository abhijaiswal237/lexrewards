import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedoutDashboardComponent } from './loggedout-dashboard.component';

describe('LoggedoutDashboardComponent', () => {
  let component: LoggedoutDashboardComponent;
  let fixture: ComponentFixture<LoggedoutDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedoutDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedoutDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
