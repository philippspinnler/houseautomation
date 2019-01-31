import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DevicesPage} from './devices.page';
import {LightbulbComponent} from '../components/devices/lightbulb/lightbulb.component';
import {ThermometerComponent} from '../components/devices/thermometer/thermometer.component';
import {ThermostatComponent} from '../components/devices/thermostat/thermostat.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: DevicesPage}])
    ],
    declarations: [DevicesPage, LightbulbComponent, ThermometerComponent, ThermostatComponent]
})
export class DevicesPageModule {
}
