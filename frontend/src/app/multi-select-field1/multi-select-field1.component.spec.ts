import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectField1Component } from './multi-select-field1.component';

describe('MultiSelectField1Component', () => {
  let component: MultiSelectField1Component;
  let fixture: ComponentFixture<MultiSelectField1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectField1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectField1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
