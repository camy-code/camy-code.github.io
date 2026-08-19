import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailLOGO } from './email-logo';

describe('EmailLOGO', () => {
  let component: EmailLOGO;
  let fixture: ComponentFixture<EmailLOGO>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailLOGO],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailLOGO);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
