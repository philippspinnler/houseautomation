import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomssPage } from './groups.page';

describe('GroupsPage', () => {
  let component: RoomssPage;
  let fixture: ComponentFixture<RoomssPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomssPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
