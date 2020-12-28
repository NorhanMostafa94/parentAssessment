import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAssetsComponent } from './svg-assets.component';

describe('SvgAssetsComponent', () => {
  let component: SvgAssetsComponent;
  let fixture: ComponentFixture<SvgAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
