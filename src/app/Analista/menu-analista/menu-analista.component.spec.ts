import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAnalistaComponent } from './menu-analista.component';

describe('MenuAnalistaComponent', () => {
  let component: MenuAnalistaComponent;
  let fixture: ComponentFixture<MenuAnalistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAnalistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAnalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
