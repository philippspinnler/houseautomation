import {AbstractModel} from './AbstractModel';
import {DeviceTypes} from './DeviceTypes';
import {DeviceParameters} from './DeviceParameters';

export class Device extends AbstractModel {
    type: DeviceTypes;
    name: string;
    parameters: DeviceParameters;

    constructor(dto?: any) {
        super();
        this.id = dto.id;
        this.type = dto.type;
        this.name = dto.name;
        this.parameters = dto.parameters;
    }
}
