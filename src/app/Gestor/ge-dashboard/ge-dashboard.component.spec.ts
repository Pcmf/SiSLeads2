import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeDashboardComponent } from './ge-dashboard.component';

describe('GeDashboardComponent', () => {
  let component: GeDashboardComponent;
  let fixture: ComponentFixture<GeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
