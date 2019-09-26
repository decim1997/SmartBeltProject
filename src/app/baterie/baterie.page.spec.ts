import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BateriePage } from './baterie.page';

describe('BateriePage', () => {
  let component: BateriePage;
  let fixture: ComponentFixture<BateriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateriePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BateriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
