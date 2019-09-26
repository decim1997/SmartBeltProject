import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffagePage } from './chauffage.page';

describe('ChauffagePage', () => {
  let component: ChauffagePage;
  let fixture: ComponentFixture<ChauffagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChauffagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChauffagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
