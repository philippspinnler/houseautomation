import {AbstractModel} from './AbstractModel';
import {Device} from './Device';

export class Group extends AbstractModel {
    name: string;
    devices: Device[];

    constructor(dto?: any) {
        super();
        this.id = dto.id;
        this.name = dto.name;
        this.devices = [];
        for (const device of dto.devices) {
            this.devices.push(new Device(device));
        }
    }
}