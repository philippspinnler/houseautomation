import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RoomsPage} from './rooms.page';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

describe('GroupsPage', () => {
    let component: RoomsPage;
    let fixture: ComponentFixture<RoomsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RoomsPage],
            imports: [
                RouterModule.forRoot([]),
                HttpClientModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RoomsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
