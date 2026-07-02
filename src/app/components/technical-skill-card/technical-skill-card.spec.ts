import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSkillCard } from './technical-skill-card';

describe('TechnicalSkillCard', () => {
  let component: TechnicalSkillCard;
  let fixture: ComponentFixture<TechnicalSkillCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalSkillCard],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnicalSkillCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
