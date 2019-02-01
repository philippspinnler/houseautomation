import {AbstractDevice} from './AbstractDevice';
import {ThermometerParameters} from './ThermometerParameters';

export class Thermometer extends AbstractDevice {
    parameters: ThermometerParameters;

    constructor(dto?: any) {
        super(dto);
        this.parameters = dto.parameters;
    }
}
