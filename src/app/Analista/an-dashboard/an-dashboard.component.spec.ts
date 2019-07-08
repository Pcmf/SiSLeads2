import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnDashboardComponent } from './an-dashboard.component';

describe('AnDashboardComponent', () => {
  let component: AnDashboardComponent;
  let fixture: ComponentFixture<AnDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
