import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMapsComponent } from './angular-maps.component';

describe('AngularMapsComponent', () => {
  let component: AngularMapsComponent;
  let fixture: ComponentFixture<AngularMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
