import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ThermometerComponent} from './thermometer.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Device} from '../../../models/Device';

describe('ThermometerComponent', () => {
    let component: ThermometerComponent;
    let fixture: ComponentFixture<ThermometerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ThermometerComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ThermometerComponent);
        component = fixture.componentInstance;
        component.thermometer = new Device({
            id: 6,
            type: 'thermometer',
            name: 'Living Room Temperature',
            parameters: {
                temperature: 21
            },
            roomId: 1
        });
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
