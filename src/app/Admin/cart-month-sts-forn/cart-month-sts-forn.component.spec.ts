import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartMonthStsFornComponent } from './cart-month-sts-forn.component';

describe('CartMonthStsFornComponent', () => {
  let component: CartMonthStsFornComponent;
  let fixture: ComponentFixture<CartMonthStsFornComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartMonthStsFornComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartMonthStsFornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
