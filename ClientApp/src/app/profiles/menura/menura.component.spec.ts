import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuraComponent } from './menura.component';

describe('MenuraComponent', () => {
  let component: MenuraComponent;
  let fixture: ComponentFixture<MenuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
