import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Golive1Component } from './golive1.component';

describe('Golive1Component', () => {
  let component: Golive1Component;
  let fixture: ComponentFixture<Golive1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Golive1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Golive1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
