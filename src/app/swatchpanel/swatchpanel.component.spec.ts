import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwatchpanelComponent } from './swatchpanel.component';

describe('SwatchpanelComponent', () => {
  let component: SwatchpanelComponent;
  let fixture: ComponentFixture<SwatchpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwatchpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwatchpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
