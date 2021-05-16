import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LakshaniComponent } from './lakshani.component';

describe('LakshaniComponent', () => {
  let component: LakshaniComponent;
  let fixture: ComponentFixture<LakshaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LakshaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LakshaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
