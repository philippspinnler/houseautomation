import {Component} from '@angular/core';
import {RestClientService} from '../services/rest-client/rest-client.service';
import {Device} from '../models/Device';
import {DeviceTypes} from '../models/DeviceTypes';
import {TemparatureChange} from '../components/devices/thermostat/TemparatureChange';
import {Platform} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-devices',
    templateUrl: 'devices.page.html',
    styleUrls: ['devices.page.scss']
})
export class DevicesPage {
    devices: Device[];
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
