import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { colourconfigComponent } from './colourmixer.component';

describe('colourconfigComponent', () => {
  let component: colourconfigComponent;
  let fixture: ComponentFixture<colourconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ colourconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(colourconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
