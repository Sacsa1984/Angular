import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCerteficatComponent } from './info-certeficat.component';

describe('InfoCerteficatComponent', () => {
  let component: InfoCerteficatComponent;
  let fixture: ComponentFixture<InfoCerteficatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCerteficatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCerteficatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
