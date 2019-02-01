import {Component} from '@angular/core';
import {RestClientService} from '../services/rest-client/rest-client.service';
import {DeviceTypes} from '../models/devices/DeviceTypes';
import {TemparatureChange} from '../components/devices/thermostat/TemparatureChange';
import {ActivatedRoute} from '@angular/router';
import {AbstractDevice} from '../models/devices/AbstractDevice';
import {Thermometer} from '../models/devices/Thermometer';
import * as $ from 'jquery';

@Component({
    selector: 'app-devices',
    templateUrl: 'devices.page.html',
    styleUrls: ['devices.page.scss']
})
export class DevicesPage {
    devices: AbstractDevice[];
    roomName: string;

    constructor(private restClient: RestClientService, private route: ActivatedRoute) {

    }

    async ionViewWillEnter() {
        const roomIdParam = this.route.snapshot.paramMap.get('roomId');
        const roomId = (roomIdParam) ? parseInt(roomIdParam, 10) : null;
        if (roomId) {
            this.devices = await this.restClient.getDevicesByRoom(roomId);
            const room = await this.restClient.getRoom(roomId);
            this.roomName = room.name;
        } else {
            this.devices = await this.restClient.getDevices();
        }

        console.log(this.devices);
    }

    async ionViewDidEnter() {
        const grid = $( 'ion-grid' );
        grid.hide();
        await grid.fadeIn(1000);
    }

    /*
    This is only for simulation purpose.
    In a real world scenario the backend would inform the app about changes
    with for example socket.io.
     */
    handleTemperatureChange(temperatureChange: TemparatureChange) {
        this.devices = this.devices.map((device: AbstractDevice) => {
            if (device.type === DeviceTypes.Thermometer && device.room.id === temperatureChange.roomId) {
                const thermometer: Thermometer = <Thermometer>device;
                thermometer.parameters.temperature = temperatureChange.temperature;
            }
            return device;
        });
    }
}
