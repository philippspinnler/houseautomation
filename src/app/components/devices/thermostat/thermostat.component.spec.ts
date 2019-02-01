import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ThermostatComponent} from './thermostat.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Thermostat} from '../../../models/devices/Thermostat';

describe('ThermostatComponent', () => {
    let component: ThermostatComponent;
    let fixture: ComponentFixture<ThermostatComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ThermostatComponent],
            imports: [HttpClientModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ThermostatComponent);
        component = fixture.componentInstance;
        component.thermostat = new Thermostat({
            id: 5,
            type: 'thermostat',
            name: 'Living Room Heating',
            parameters: {
                on: true,
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
