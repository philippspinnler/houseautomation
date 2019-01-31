import {AbstractModel} from './AbstractModel';

export class Room extends AbstractModel {
    name: string;

    constructor(dto?: any) {
        super();
        this.id = dto.id;
        this.name = dto.name;
    }
}