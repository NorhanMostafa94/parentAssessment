import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertToastrComponent } from './alert-toastr.component';

describe('AlertToastrComponent', () => {
  let component: AlertToastrComponent;
  let fixture: ComponentFixture<AlertToastrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertToastrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertToastrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
