import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DevicesPage } from './devices.page';
import {LightbulbComponent} from '../components/devices/lightbulb/lightbulb.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: DevicesPage }])
  ],
  declarations: [DevicesPage, LightbulbComponent]
})
export class DevicesPageModule {}
