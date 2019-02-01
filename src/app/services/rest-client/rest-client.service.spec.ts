import {TestBed} from '@angular/core/testing';

import {RestClientService} from './rest-client.service';
import {HttpClientModule} from '@angular/common/http';
import {LightBulb} from '../../models/devices/LightBulb';
import {DeviceTypes} from '../../models/devices/DeviceTypes';

describe('RestClientService', () => {
    let restClient: RestClientService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            // normally this should be mocked but for this simulation the backend is already a mock
            imports: [HttpClientModule]
        });
        restClient = TestBed.get(RestClientService);
    });

    it('should be created', () => {
        expect(restClient).toBeTruthy();
    });

    it('should give back all devices', async () => {
        const devices = await restClient.getDevices();
        expect(devices.length).toBeGreaterThan(0);
    });

    it('should give back all rooms', async () => {
        const rooms = await restClient.getRooms();
        expect(rooms.length).toBeGreaterThan(0);
    });

    it('should give back living room ceiling light 1', async () => {
        const device = await restClient.getDevice(1);
        expect(device.name).toBe('Living Room Ceiling 1');
    });

    it('should give back only devices from bedroom', async () => {
        const bedroomDevices = await restClient.getDevicesByRoom(2);
        expect(bedroomDevices.length).toBe(3);
        expect(bedroomDevices[0].room.id).toBe(2);
        expect(bedroomDevices[0].room.id).not.toBe(1);
    });

    it('should save the device and return the new values', async () => {
        const device = await restClient.getDevice(1);

        expect(device.type).toBe(DeviceTypes.LightBulb);
        const lightBulb: LightBulb = <LightBulb>device;

        expect(lightBulb.parameters.on).toBe(true);
        expect(lightBulb.parameters.intensity).toBe(100);

        lightBulb.parameters.on = false;
        lightBulb.parameters.intensity = 10;

        const savedDevice = await restClient.saveDevice(lightBulb);

        expect(savedDevice.type).toBe(DeviceTypes.LightBulb);
        const savedLightBulb: LightBulb = <LightBulb>savedDevice;

        expect(savedLightBulb.parameters.on).toBe(false);
        expect(savedLightBulb.parameters.intensity).toBe(10);
        expect(savedLightBulb.parameters.on).not.toBe(true);
        expect(savedLightBulb.parameters.intensity).not.toBe(100);
    });
});
