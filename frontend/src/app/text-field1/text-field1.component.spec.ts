import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextField1Component } from './text-field1.component';

describe('TextField1Component', () => {
  let component: TextField1Component;
  let fixture: ComponentFixture<TextField1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextField1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextField1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
