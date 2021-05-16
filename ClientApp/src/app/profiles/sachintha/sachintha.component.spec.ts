import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SachinthaComponent } from './sachintha.component';

describe('SachinthaComponent', () => {
  let component: SachinthaComponent;
  let fixture: ComponentFixture<SachinthaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SachinthaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SachinthaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
