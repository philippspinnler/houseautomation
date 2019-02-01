import {Component, Input, OnInit} from '@angular/core';
import {RestClientService} from '../../../services/rest-client/rest-client.service';
import {LightBulb} from '../../../models/devices/LightBulb';

@Component({
  selector: 'device-lightbulb',
  templateUrl: './lightbulb.component.html',
  styleUrls: ['./lightbulb.component.scss']
})
export class LightbulbComponent implements OnInit {

  @Input() lightBulb: LightBulb;

  constructor(private restClient: RestClientService) { }

  ngOnInit() {
  }

  async toggleLightBulb() {
    this.lightBulb.parameters.on = !this.lightBulb.parameters.on;
    await this.restClient.saveDevice(this.lightBulb);
  }

}
