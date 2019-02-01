import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LightbulbComponent} from './lightbulb.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

describe('LightbulbComponent', () => {
    let component: LightbulbComponent;
    let fixture: ComponentFixture<LightbulbComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LightbulbComponent],
            imports: [HttpClientModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LightbulbComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
