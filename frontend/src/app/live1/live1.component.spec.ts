import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Live1Component } from './live1.component';

describe('Live1Component', () => {
  let component: Live1Component;
  let fixture: ComponentFixture<Live1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Live1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Live1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
