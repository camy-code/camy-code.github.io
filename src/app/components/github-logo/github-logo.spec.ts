import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubLOGO } from './github-logo';

describe('GithubLOGO', () => {
  let component: GithubLOGO;
  let fixture: ComponentFixture<GithubLOGO>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubLOGO],
    }).compileComponents();

    fixture = TestBed.createComponent(GithubLOGO);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
