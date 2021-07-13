import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCartViewMobileComponent } from './button-cart-view-mobile.component';

describe('ButtonCartViewMobileComponent', () => {
  let component: ButtonCartViewMobileComponent;
  let fixture: ComponentFixture<ButtonCartViewMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCartViewMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCartViewMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
