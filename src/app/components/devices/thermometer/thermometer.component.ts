import {Component, Input, OnInit} from '@angular/core';
import {Thermometer} from '../../../models/devices/Thermometer';

@Component({
    selector: 'device-thermometer',
    templateUrl: './thermometer.component.html',
    styleUrls: ['./thermometer.component.scss']
})
export class ThermometerComponent implements OnInit {

    @Input() thermometer: Thermometer;

    constructor() {
    }

    ngOnInit() {
    }

}
