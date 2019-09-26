import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuprincipalePage } from './menuprincipale.page';

describe('MenuprincipalePage', () => {
  let component: MenuprincipalePage;
  let fixture: ComponentFixture<MenuprincipalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuprincipalePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuprincipalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
