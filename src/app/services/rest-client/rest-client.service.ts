import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Room} from '../../models/Room';
import {environment} from '../../../environments/environment';
import {DeviceTypes} from '../../models/devices/DeviceTypes';
import {LightBulb} from '../../models/devices/LightBulb';
import {Thermometer} from '../../models/devices/Thermometer';
import {Thermostat} from '../../models/devices/Thermostat';
import {AbstractDevice} from '../../models/devices/AbstractDevice';
import {GenerateCommand} from '@angular/cli/commands/generate-impl';
import {Generic} from '../../models/devices/Generic';

interface ApiResponse {
    items: any[];
}

@Injectable({
    providedIn: 'root'
})
export class RestClientService {
    // Variables used to save states at runtime
    devices: AbstractDevice[];
    rooms: Room[];

    deviceMap: Map<string, any> = new Map();

    constructor(private http: HttpClient) {
        this.deviceMap.set(DeviceTypes.LightBulb, LightBulb);
        this.deviceMap.set(DeviceTypes.Thermometer, Thermometer);
        this.deviceMap.set(DeviceTypes.Thermostat, Thermostat);
    }

    async getDevices() {
        if (this.devices) {
            return this.devices;
        }
        const devices: AbstractDevice[] = [];
        const response: ApiResponse = <ApiResponse>await this.http.get(environment.apiEndpoints.devices).toPromise();
        for (const device of response.items) {
            const room = await this.getRoom(device.roomId);
            const deviceConstructor = this.deviceMap.get(device.type);
            if (!deviceConstructor) {
                devices.push(new Generic({...device, room}));
            } else {
                devices.push(new deviceConstructor({...device, room}));
            }
        }
        this.devices = devices;
        return devices;
    }

    async getDevicesByRoom(roomId: number) {
        const devices = await this.getDevices();
        return devices.filter(device => device.room.id === roomId);
    }

    async getDevice(id: number) {
        const devices: AbstractDevice[] = await this.getDevices();
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

    async saveDevice(device: AbstractDevice) {
        this.devices = this.devices.map((obj) => {
            if (obj.id === device.id) {
                return device;
            }
            return obj;
        });
        return device;
    }
}
