import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Device} from 'src/app/models/Device';
import {Group} from '../../models/Group';

interface ApiResponse {
    items: any[];
}

@Injectable({
    providedIn: 'root'
})
export class RestClientService {

    constructor(private http: HttpClient) {
    }

    async getDevices() {
        const devices: Device[] = [];
        const response: ApiResponse = <ApiResponse>await this.http.get(environment.apiEndpoints.devices).toPromise();
        for (const device of response.items) {
            devices.push(new Device(device));
        }
        return devices;
    }

    async getDevice(id: number) {
        const devices: Device[] = await this.getDevices();
        return devices.find(d => d.id === id);
    }

    async getGroups() {
        const groups: Group[] = [];
        const response: ApiResponse = <ApiResponse>await this.http.get(environment.apiEndpoints.groups).toPromise();
        for (const group of response.items) {
            const devices: Device[] = [];
            for (const deviceId of group.devices) {
                const device: Device = await this.getDevice(deviceId);
                devices.push(device);
            }
            groups.push(new Group({...group, devices}));
        }
        return groups;
    }
}
