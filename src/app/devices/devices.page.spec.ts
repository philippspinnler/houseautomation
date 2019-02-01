import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevicesPage} from './devices.page';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

describe('DevicesPage', () => {
    let component: DevicesPage;
    let fixture: ComponentFixture<DevicesPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DevicesPage],
            imports: [
                RouterModule.forRoot([]),
                HttpClientModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DevicesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
