import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStudent } from './display-student';

describe('DisplayStudent', () => {
  let component: DisplayStudent;
  let fixture: ComponentFixture<DisplayStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayStudent],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayStudent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
