import {AbstractDevice} from './AbstractDevice';
import {LightBulbParameters} from './LightBulbParameters';

export class LightBulb extends AbstractDevice {
    parameters: LightBulbParameters;

    constructor(dto?: any) {
        super(dto);
        this.parameters = dto.parameters;
    }
}
