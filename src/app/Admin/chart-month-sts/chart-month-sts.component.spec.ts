import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMonthStsComponent } from './chart-month-sts.component';

describe('ChartMonthStsComponent', () => {
  let component: ChartMonthStsComponent;
  let fixture: ComponentFixture<ChartMonthStsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartMonthStsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMonthStsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
