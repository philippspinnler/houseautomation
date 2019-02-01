import {AbstractModel} from '../AbstractModel';
import {DeviceTypes} from './DeviceTypes';
import {Room} from '../Room';

export abstract class AbstractDevice extends AbstractModel {
    type: DeviceTypes;
    name: string;
    room: Room;

    protected constructor(dto?: any) {
        super();
        this.id = dto.id;
        this.type = dto.type;
        this.name = dto.name;
        this.room = dto.room;
    }
}
