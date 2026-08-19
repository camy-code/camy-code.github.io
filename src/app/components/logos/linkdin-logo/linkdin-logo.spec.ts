import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkdinLOGO } from './linkdin-logo';

describe('LinkdinLOGO', () => {
  let component: LinkdinLOGO;
  let fixture: ComponentFixture<LinkdinLOGO>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkdinLOGO],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkdinLOGO);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
