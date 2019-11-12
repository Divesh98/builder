import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSlider1Component } from './single-slider1.component';

describe('SingleSlider1Component', () => {
  let component: SingleSlider1Component;
  let fixture: ComponentFixture<SingleSlider1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSlider1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSlider1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
