import {AbstractModel} from './AbstractModel';
import {DeviceTypes} from './DeviceTypes';
import {DeviceParameters} from './DeviceParameters';
import {Room} from './Room';

export class Device extends AbstractModel {
    type: DeviceTypes;
    name: string;
    parameters: DeviceParameters;
    room: Room;

    constructor(dto?: any) {
        super();
        this.id = dto.id;
        this.type = dto.type;
        this.name = dto.name;
        this.parameters = dto.parameters;
        this.room = dto.room;
    }
}
