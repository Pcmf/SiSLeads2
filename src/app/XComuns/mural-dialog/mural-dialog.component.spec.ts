import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralDialogComponent } from './mural-dialog.component';

describe('MuralDialogComponent', () => {
  let component: MuralDialogComponent;
  let fixture: ComponentFixture<MuralDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuralDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
