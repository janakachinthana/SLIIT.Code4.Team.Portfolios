import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanakaComponent } from './janaka.component';

describe('JanakaComponent', () => {
  let component: JanakaComponent;
  let fixture: ComponentFixture<JanakaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanakaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
