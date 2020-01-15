import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMonthFornComponent } from './chart-month-forn.component';

describe('ChartMonthFornComponent', () => {
  let component: ChartMonthFornComponent;
  let fixture: ComponentFixture<ChartMonthFornComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartMonthFornComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMonthFornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
