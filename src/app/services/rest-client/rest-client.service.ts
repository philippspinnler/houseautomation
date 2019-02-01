import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Device} from 'src/app/models/Device';
import {Room} from '../../models/Room';
import {environment} from '../../../environments/environment';

interface ApiResponse {
    items: any[];
}

@Injectable({
    providedIn: 'root'
})
export class RestClientService {
    // Variables used to save states at runtime
    devices: Device[];
    rooms: Room[];

    constructor(private http: HttpClient) {
    }

    async getDevices() {
        if (this.devices) {
            return this.devices;
        }
        const devices: Device[] = [];
        const response: ApiResponse = <ApiResponse>await this.http.get(environment.apiEndpoints.devices).toPromise();
        for (const device of response.items) {
            const room = await this.getRoom(device.roomId);
            devices.push(new Device({...device, room}));
        }
        this.devices = devices;
        return devices;
    }

    async getDevicesByRoom(roomId: number) {
        const devices = await this.getDevices();
        return devices.filter(device => device.room.id === roomId);
    }

    async getDevice(id: number) {
        const devices: Device[] = await this.getDevices();
        return devices.find(d => d.id === id);
    }

    async getRooms() {
        if (this.rooms) {
            return this.rooms;
        }
        const rooms: Room[] = [];
        const response: ApiResponse = <ApiResponse>await this.http.get(environment.apiEndpoints.rooms).toPromise();
        for (const room of response.items) {
            rooms.push(new Room(room));
        }
        this.rooms = rooms;
        return rooms;
    }

    async getRoom(id: number) {
        const rooms: Room[] = await this.getRooms();
        return rooms.find(d => d.id === id);
    }

    async saveDevice(device: Device) {
        this.devices = this.devices.map((obj) => {
            if (obj.id === device.id) {
                return device;
            }
            return obj;
        });
        return device;
    }
}
