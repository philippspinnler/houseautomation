import {Component} from '@angular/core';
import {RestClientService} from '../services/rest-client/rest-client.service';
import {Device} from '../models/Device';
import {DeviceTypes} from '../models/DeviceTypes';
import {TemparatureChange} from '../components/devices/thermostat/TemparatureChange';

@Component({
    selector: 'app-devices',
    templateUrl: 'devices.page.html',
    styleUrls: ['devices.page.scss']
})
export class DevicesPage {
    devices: Device[];

    constructor(private restClient: RestClientService) {

    }

    async ionViewWillEnter() {
        this.devices = await this.restClient.getDevices();
        console.log(this.devices);
    }

    /*
    This is only for simulation purpose.
    In a real world scenario the backend would inform the app about changes
    with for example socket.io.
     */
    handleTemperatureChange(temperatureChange: TemparatureChange) {
        this.devices = this.devices.map((device: Device) => {
            if (device.type === DeviceTypes.Thermometer && device.room.id === temperatureChange.roomId) {
                device.parameters.temperature = temperatureChange.temperature;
            }
            return device;
        });
    }
}
