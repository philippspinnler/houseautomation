import {Component, Input, OnInit} from '@angular/core';
import {Device} from '../../../models/Device';

@Component({
    selector: 'device-thermometer',
    templateUrl: './thermometer.component.html',
    styleUrls: ['./thermometer.component.scss']
})
export class ThermometerComponent implements OnInit {

    @Input() thermometer: Device;

    constructor() {
    }

    ngOnInit() {
    }

}
