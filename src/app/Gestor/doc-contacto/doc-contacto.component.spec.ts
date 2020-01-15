import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocContactoComponent } from './doc-contacto.component';

describe('DocContactoComponent', () => {
  let component: DocContactoComponent;
  let fixture: ComponentFixture<DocContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
