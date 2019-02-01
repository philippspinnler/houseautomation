import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RestClientService} from '../../../services/rest-client/rest-client.service';
import {TemparatureChange} from './TemparatureChange';
import {Thermostat} from '../../../models/devices/Thermostat';

@Component({
    selector: 'device-thermostat',
    templateUrl: './thermostat.component.html',
    styleUrls: ['./thermostat.component.scss']
})
export class ThermostatComponent implements OnInit {

    temperature: number;

    @Input() thermostat: Thermostat;
    @Output() temperatureChange = new EventEmitter();

    constructor(private restClient: RestClientService) {
    }

    ngOnInit() {
        this.temperature = this.thermostat.parameters.temperature;
    }

    async changeTemperature() {
        this.thermostat.parameters.temperature = this.temperature;
        await this.restClient.saveDevice(this.thermostat);

        const temperatureChangeObject: TemparatureChange = {
            roomId: this.thermostat.room.id,
            temperature: this.temperature
        };
        this.temperatureChange.emit(temperatureChangeObject);
    }
}
