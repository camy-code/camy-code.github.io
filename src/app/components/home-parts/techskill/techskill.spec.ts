import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Techskill } from './techskill';

describe('Techskill', () => {
  let component: Techskill;
  let fixture: ComponentFixture<Techskill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Techskill],
    }).compileComponents();

    fixture = TestBed.createComponent(Techskill);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
