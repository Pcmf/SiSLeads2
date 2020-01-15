import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartActualStsComponent } from './cart-actual-sts.component';

describe('CartActualStsComponent', () => {
  let component: CartActualStsComponent;
  let fixture: ComponentFixture<CartActualStsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartActualStsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartActualStsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
