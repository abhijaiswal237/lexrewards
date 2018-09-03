import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookSettingsComponent } from './facebook-settings.component';

describe('FacebookSettingsComponent', () => {
  let component: FacebookSettingsComponent;
  let fixture: ComponentFixture<FacebookSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
