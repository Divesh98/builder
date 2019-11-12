import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoliveComponent } from './golive.component';

describe('GoliveComponent', () => {
  let component: GoliveComponent;
  let fixture: ComponentFixture<GoliveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoliveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
