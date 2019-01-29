import {Component} from '@angular/core';
import {RestClientService} from '../services/rest-client/rest-client.service';
import {Device} from '../models/Device';

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
}
