import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassagePage } from './massage.page';

describe('MassagePage', () => {
  let component: MassagePage;
  let fixture: ComponentFixture<MassagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
