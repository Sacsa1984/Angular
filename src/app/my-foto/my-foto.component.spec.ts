import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFotoComponent } from './my-foto.component';

describe('MyFotoComponent', () => {
  let component: MyFotoComponent;
  let fixture: ComponentFixture<MyFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
