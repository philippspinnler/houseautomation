import {AbstractDevice} from './AbstractDevice';
import {ThermostatParameters} from './ThermostatParameters';

export class Thermostat extends AbstractDevice {
    parameters: ThermostatParameters;

    constructor(dto?: any) {
        super(dto);
        this.parameters = dto.parameters;
    }
}
